-- =====================================================
-- Migracion 01: agregar round_started_at al game
-- Ejecutar en SQL Editor de Supabase (es idempotente)
-- =====================================================

insert into game (key, value) values ('round_started_at', '')
on conflict (key) do nothing;

create or replace function game_start() returns void as $$
begin
  update game set value = 'playing' where key = 'status';
  update game set value = '1' where key = 'round';
  update game set value = now()::text where key = 'started_at';
  update game set value = now()::text where key = 'round_started_at';
end;
$$ language plpgsql;

create or replace function game_next() returns int as $$
declare r int;
begin
  update game set value = ((value::int) + 1)::text
    where key = 'round'
    returning value::int into r;
  update game set value = now()::text where key = 'round_started_at';
  if r > 30 then
    update game set value = 'ended' where key = 'status';
  end if;
  return r;
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
  update game set value = '' where key = 'round_started_at';
end;
$$ language plpgsql;
