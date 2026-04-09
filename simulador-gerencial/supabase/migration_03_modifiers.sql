-- =====================================================
-- Migracion 03: modificadores globales del maestro
-- Ejecutar en Supabase SQL Editor (idempotente)
-- =====================================================

insert into game (key, value) values ('next_modifier', 'none')
on conflict (key) do nothing;

-- Setear modificador activo (llamado desde dashboard)
create or replace function set_modifier(p_modifier text) returns void as $$
begin
  update game set value = p_modifier where key = 'next_modifier';
end;
$$ language plpgsql;

grant execute on function set_modifier(text) to anon;

-- resolve_round actualizado para aplicar modificador
create or replace function resolve_round(
  p_company int, p_round int, p_final_choice text,
  p_delta bigint, p_narrative text
) returns boolean as $$
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
    -- bonus aleatorio entre -20M y +60M sumado al delta base
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
$$ language plpgsql;

-- game_next limpia modificador al avanzar
create or replace function game_next() returns int as $$
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
$$ language plpgsql;
