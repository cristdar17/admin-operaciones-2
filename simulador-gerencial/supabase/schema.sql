-- =====================================================
-- Simulador Gerencial - Schema para Supabase
-- Pega este script en Supabase SQL Editor y ejecutalo
-- =====================================================

-- Tablas
create table if not exists game (
  key text primary key,
  value text
);

create table if not exists companies (
  id int primary key,
  name text not null,
  emoji text,
  cash bigint not null default 500000000,
  alive boolean default true,
  decisions int default 0
);

create table if not exists students (
  id text primary key,
  name text not null,
  company int not null,
  joined_at timestamptz default now(),
  votes_cast int default 0,
  times_proponent int default 0
);

create table if not exists rounds (
  company int not null,
  round int not null,
  role text,
  dilemma_id text,
  phase text not null default 'voting',
  phase_started_at timestamptz default now(),
  proponent_id text,
  proposal text,
  justification text,
  votes jsonb default '{}'::jsonb,
  final_choice text,
  delta bigint,
  narrative text,
  resolved_at timestamptz,
  primary key (company, round)
);

-- Datos semilla
insert into game (key, value) values
  ('status','lobby'),
  ('round','0'),
  ('started_at','')
on conflict (key) do nothing;

insert into companies (id, name, emoji, cash) values
  (1, 'Café Pereira Origen', '☕', 500000000),
  (2, 'DomiYa', '🛵', 500000000),
  (3, 'Maderas del Otún', '🪑', 500000000),
  (4, 'Risa Wear', '👗', 500000000),
  (5, 'Constructora Nevado', '🏗️', 500000000)
on conflict (id) do nothing;

-- =====================================================
-- Funciones RPC (atomicidad garantizada)
-- =====================================================

create or replace function propose_decision(
  p_company int, p_round int, p_role text, p_dilemma_id text,
  p_student_id text, p_choice text, p_justification text
) returns void as $$
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
$$ language plpgsql;

create or replace function cast_vote(
  p_company int, p_round int, p_student_id text, p_vote text
) returns void as $$
declare already boolean;
begin
  select (votes ? p_student_id) into already
    from rounds where company = p_company and round = p_round;
  if already is null then
    -- Ronda aun no existe, ignorar
    return;
  end if;
  if already = true then
    -- Ya voto, no duplicar
    return;
  end if;
  update rounds
    set votes = votes || jsonb_build_object(p_student_id, p_vote)
    where company = p_company and round = p_round;
  update students set votes_cast = votes_cast + 1 where id = p_student_id;
end;
$$ language plpgsql;

create or replace function resolve_round(
  p_company int, p_round int, p_final_choice text,
  p_delta bigint, p_narrative text
) returns boolean as $$
declare updated int;
begin
  update rounds set
    phase = 'resolved',
    final_choice = p_final_choice,
    delta = p_delta,
    narrative = p_narrative,
    resolved_at = now()
    where company = p_company and round = p_round and phase <> 'resolved';
  get diagnostics updated = row_count;
  if updated > 0 then
    update companies set
      cash = cash + p_delta,
      decisions = decisions + 1,
      alive = ((cash + p_delta) > 0)
      where id = p_company;
    return true;
  end if;
  return false;
end;
$$ language plpgsql;

create or replace function game_start() returns void as $$
begin
  update game set value = 'playing' where key = 'status';
  update game set value = '1' where key = 'round';
  update game set value = now()::text where key = 'started_at';
end;
$$ language plpgsql;

create or replace function game_next() returns int as $$
declare r int;
begin
  update game set value = ((value::int) + 1)::text
    where key = 'round'
    returning value::int into r;
  if r > 30 then
    update game set value = 'ended' where key = 'status';
  end if;
  return r;
end;
$$ language plpgsql;

create or replace function game_pause() returns void as $$
begin
  update game set value =
    case when value = 'paused' then 'playing' else 'paused' end
    where key = 'status';
end;
$$ language plpgsql;

create or replace function game_reset() returns void as $$
begin
  delete from students;
  delete from rounds;
  update companies set cash = 500000000, alive = true, decisions = 0;
  update game set value = 'lobby' where key = 'status';
  update game set value = '0' where key = 'round';
  update game set value = '' where key = 'started_at';
end;
$$ language plpgsql;

-- =====================================================
-- Row Level Security: acceso publico (anon)
-- =====================================================
alter table game enable row level security;
alter table companies enable row level security;
alter table students enable row level security;
alter table rounds enable row level security;

-- Lectura publica
drop policy if exists "anon_read_game" on game;
create policy "anon_read_game" on game for select using (true);

drop policy if exists "anon_read_companies" on companies;
create policy "anon_read_companies" on companies for select using (true);

drop policy if exists "anon_read_students" on students;
create policy "anon_read_students" on students for select using (true);

drop policy if exists "anon_insert_students" on students;
create policy "anon_insert_students" on students for insert with check (true);

drop policy if exists "anon_read_rounds" on rounds;
create policy "anon_read_rounds" on rounds for select using (true);

-- Las escrituras de propose/vote/resolve/game_* van via RPC
-- que por defecto son SECURITY INVOKER; damos GRANT a anon:
grant execute on function propose_decision(int, int, text, text, text, text, text) to anon;
grant execute on function cast_vote(int, int, text, text) to anon;
grant execute on function resolve_round(int, int, text, bigint, text) to anon;
grant execute on function game_start() to anon;
grant execute on function game_next() to anon;
grant execute on function game_pause() to anon;
grant execute on function game_reset() to anon;
