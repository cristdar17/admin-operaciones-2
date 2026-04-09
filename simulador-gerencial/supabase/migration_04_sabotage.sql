-- =====================================================
-- Migracion 04: sabotaje cruzado
-- Ejecutar en Supabase SQL Editor (idempotente)
-- =====================================================

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

-- Inicia modo sabotaje durante X segundos
create or replace function start_sabotage(p_duration_seconds int default 90) returns void as $$
begin
  update game set value = jsonb_build_object(
    'id', 'sabotage',
    'emoji', '💀',
    'title', 'Ronda de sabotaje',
    'description', 'Cada empresa puede sabotear a UNA rival. Atacante gana +$10M, victima pierde -$22M. Solo una sabotaje por empresa.',
    'delta', 0,
    'at', now()::text,
    'ends_at', (now() + (p_duration_seconds || ' seconds')::interval)::text
  )::text
  where key = 'last_event';
end;
$$ language plpgsql;

-- Termina modo sabotaje
create or replace function end_sabotage() returns void as $$
begin
  update game set value = '' where key = 'last_event';
end;
$$ language plpgsql;

-- Ejecuta un sabotaje. Retorna true si tuvo exito.
create or replace function do_sabotage(p_attacker int, p_victim int) returns boolean as $$
declare
  already int;
  current_round int;
  mode_active boolean;
  ev text;
begin
  if p_attacker = p_victim then return false; end if;

  -- Verificar que modo sabotaje este activo
  select value into ev from game where key = 'last_event';
  if ev is null or ev = '' then return false; end if;
  if (ev::jsonb ->> 'id') <> 'sabotage' then return false; end if;

  select value::int into current_round from game where key = 'round';

  -- Evitar doble sabotaje en la misma ronda por el mismo atacante
  select count(*) into already from sabotages
    where attacker_company = p_attacker and round = current_round;
  if already > 0 then return false; end if;

  update companies set cash = cash + 10000000
    where id = p_attacker;
  update companies set cash = cash - 22000000,
    alive = ((cash - 22000000) > 0)
    where id = p_victim;

  insert into sabotages (attacker_company, victim_company, round, delta_attacker, delta_victim)
    values (p_attacker, p_victim, current_round, 10000000, -22000000);

  return true;
end;
$$ language plpgsql;

grant execute on function start_sabotage(int) to anon;
grant execute on function end_sabotage() to anon;
grant execute on function do_sabotage(int, int) to anon;
