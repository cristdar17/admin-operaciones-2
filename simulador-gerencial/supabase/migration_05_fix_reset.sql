-- =====================================================
-- Migracion 05: fix DELETE sin WHERE (restriccion de Supabase)
-- =====================================================

create or replace function game_reset() returns void as $$
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
$$ language plpgsql;
