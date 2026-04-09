-- =====================================================
-- Migracion 02: eventos del mercado
-- Ejecutar en Supabase SQL Editor (idempotente)
-- =====================================================

insert into game (key, value) values ('last_event', '')
on conflict (key) do nothing;

create or replace function apply_market_event(
  p_event_id text,
  p_emoji text,
  p_title text,
  p_description text,
  p_delta bigint
) returns void as $$
begin
  -- Aplica el delta a todas las empresas vivas
  update companies
    set cash = cash + p_delta,
        alive = ((cash + p_delta) > 0)
    where alive = true;

  -- Guarda el evento actual en game.last_event
  update game set value = jsonb_build_object(
    'id', p_event_id,
    'emoji', p_emoji,
    'title', p_title,
    'description', p_description,
    'delta', p_delta,
    'at', now()::text
  )::text
  where key = 'last_event';
end;
$$ language plpgsql;

grant execute on function apply_market_event(text, text, text, text, bigint) to anon;
