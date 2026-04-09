-- =====================================================
-- Migracion 06: SECURITY DEFINER en todas las RPCs
-- CRITICO: sin esto, las funciones no pueden escribir por RLS
-- =====================================================

-- Agregar columnas que faltaban (idempotente via game table key/value)
insert into game (key, value) values ('round_started_at', '') on conflict (key) do nothing;
insert into game (key, value) values ('next_modifier', 'none') on conflict (key) do nothing;
insert into game (key, value) values ('last_event', '') on conflict (key) do nothing;

-- Tabla sabotages (idempotente)
create table if not exists sabotages (
  id serial primary key,
  attacker_company int not null,
  victim_company int not null,
  round int,
  delta_attacker bigint,
  delta_victim bigint,
  at timestamptz default now()
);
alter table sabotages enable row level security;
drop policy if exists "anon_read_sabotages" on sabotages;
create policy "anon_read_sabotages" on sabotages for select using (true);

-- =====================================================
-- TODAS las funciones re-declaradas con SECURITY DEFINER
-- =====================================================

create or replace function propose_decision(
  p_company int, p_round int, p_role text, p_dilemma_id text,
  p_student_id text, p_choice text, p_justification text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into rounds (company, round, role, dilemma_id, phase, phase_started_at,
    proponent_id, proposal, justification, votes)
  values (p_company, p_round, p_role, p_dilemma_id, 'voting', now(),
    p_student_id, p_choice, p_justification,
    jsonb_build_object(p_student_id, p_choice))
  on conflict (company, round) do update set
    phase = 'voting',
    phase_started_at = now(),
    proponent_id = excluded.proponent_id,
    proposal = excluded.proposal,
    justification = excluded.justification,
    votes = excluded.votes;
  update students
    set times_proponent = times_proponent + 1,
        votes_cast = votes_cast + 1
    where id = p_student_id;
end;
$$;

create or replace function cast_vote(
  p_company int, p_round int, p_student_id text, p_vote text
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare already boolean;
begin
  select (votes ? p_student_id) into already
    from rounds where company = p_company and round = p_round;
  if already is null then return; end if;
  if already = true then return; end if;
  update rounds
    set votes = votes || jsonb_build_object(p_student_id, p_vote)
    where company = p_company and round = p_round;
  update students set votes_cast = votes_cast + 1 where id = p_student_id;
end;
$$;

create or replace function resolve_round(
  p_company int, p_round int, p_final_choice text,
  p_delta bigint, p_narrative text
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  updated int;
  modifier text;
  adjusted_delta bigint;
begin
  select value into modifier from game where key = 'next_modifier';
  modifier := coalesce(modifier, 'none');
  adjusted_delta := p_delta;

  if modifier = 'shield' and p_delta < 0 then
    adjusted_delta := (p_delta / 2);
  elsif modifier = 'double' then
    adjusted_delta := p_delta * 2;
  elsif modifier = 'lucky' then
    adjusted_delta := p_delta + ((random() * 80000000 - 20000000)::bigint);
  end if;

  update rounds set
    phase = 'resolved',
    final_choice = p_final_choice,
    delta = adjusted_delta,
    narrative = p_narrative,
    resolved_at = now()
    where company = p_company and round = p_round and phase <> 'resolved';
  get diagnostics updated = row_count;
  if updated > 0 then
    update companies set
      cash = cash + adjusted_delta,
      decisions = decisions + 1,
      alive = ((cash + adjusted_delta) > 0)
      where id = p_company;
    return true;
  end if;
  return false;
end;
$$;

create or replace function game_start() returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update game set value = 'playing' where key = 'status';
  update game set value = '1' where key = 'round';
  update game set value = now()::text where key = 'started_at';
  update game set value = now()::text where key = 'round_started_at';
end;
$$;

create or replace function game_next() returns int
language plpgsql
security definer
set search_path = public
as $$
declare r int;
begin
  update game set value = ((value::int) + 1)::text
    where key = 'round'
    returning value::int into r;
  update game set value = now()::text where key = 'round_started_at';
  update game set value = 'none' where key = 'next_modifier';
  if r > 30 then
    update game set value = 'ended' where key = 'status';
  end if;
  return r;
end;
$$;

create or replace function game_pause() returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update game set value =
    case when value = 'paused' then 'playing' else 'paused' end
    where key = 'status';
end;
$$;

create or replace function game_reset() returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from students where id is not null;
  delete from rounds where company is not null;
  delete from sabotages where id is not null;
  update companies set cash = 500000000, alive = true, decisions = 0 where id is not null;
  update game set value = 'lobby' where key = 'status';
  update game set value = '0' where key = 'round';
  update game set value = '' where key = 'started_at';
  update game set value = '' where key = 'round_started_at';
  update game set value = 'none' where key = 'next_modifier';
  update game set value = '' where key = 'last_event';
end;
$$;

create or replace function set_modifier(p_modifier text) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update game set value = p_modifier where key = 'next_modifier';
end;
$$;

create or replace function apply_market_event(
  p_event_id text, p_emoji text, p_title text,
  p_description text, p_delta bigint
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update companies
    set cash = cash + p_delta,
        alive = ((cash + p_delta) > 0)
    where alive = true;
  update game set value = jsonb_build_object(
    'id', p_event_id, 'emoji', p_emoji, 'title', p_title,
    'description', p_description, 'delta', p_delta, 'at', now()::text
  )::text where key = 'last_event';
end;
$$;

create or replace function start_sabotage(p_duration_seconds int default 90) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update game set value = jsonb_build_object(
    'id', 'sabotage',
    'emoji', '💀',
    'title', 'Ronda de sabotaje',
    'description', 'Cada empresa puede sabotear a UNA rival. Atacante gana +$10M, victima pierde -$22M.',
    'delta', 0,
    'at', now()::text,
    'ends_at', (now() + (p_duration_seconds || ' seconds')::interval)::text
  )::text
  where key = 'last_event';
end;
$$;

create or replace function end_sabotage() returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update game set value = '' where key = 'last_event';
end;
$$;

create or replace function do_sabotage(p_attacker int, p_victim int) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  already int;
  current_round int;
  ev text;
begin
  if p_attacker = p_victim then return false; end if;
  select value into ev from game where key = 'last_event';
  if ev is null or ev = '' then return false; end if;
  if (ev::jsonb ->> 'id') <> 'sabotage' then return false; end if;

  select value::int into current_round from game where key = 'round';

  select count(*) into already from sabotages
    where attacker_company = p_attacker and round = current_round;
  if already > 0 then return false; end if;

  update companies set cash = cash + 10000000 where id = p_attacker;
  update companies set cash = cash - 22000000,
    alive = ((cash - 22000000) > 0)
    where id = p_victim;

  insert into sabotages (attacker_company, victim_company, round, delta_attacker, delta_victim)
    values (p_attacker, p_victim, current_round, 10000000, -22000000);
  return true;
end;
$$;

-- Permisos a anon
grant execute on function propose_decision(int, int, text, text, text, text, text) to anon;
grant execute on function cast_vote(int, int, text, text) to anon;
grant execute on function resolve_round(int, int, text, bigint, text) to anon;
grant execute on function game_start() to anon;
grant execute on function game_next() to anon;
grant execute on function game_pause() to anon;
grant execute on function game_reset() to anon;
grant execute on function set_modifier(text) to anon;
grant execute on function apply_market_event(text, text, text, text, bigint) to anon;
grant execute on function start_sabotage(int) to anon;
grant execute on function end_sabotage() to anon;
grant execute on function do_sabotage(int, int) to anon;
