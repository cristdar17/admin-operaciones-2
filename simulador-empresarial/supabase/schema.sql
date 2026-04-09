-- ============================================================
-- SIMULADOR EMPRESARIAL - Schema Supabase
-- Competencia entre dos empresas por áreas funcionales
-- ============================================================

-- Estado global del juego (key-value)
CREATE TABLE game_state (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

INSERT INTO game_state (key, value) VALUES
  ('status',    'lobby'),   -- lobby | playing | paused | ended
  ('day',       '0'),       -- día simulado actual (1-45)
  ('speed',     '120'),     -- segundos por día (default 2 min)
  ('day_started_at', ''),   -- timestamp inicio del día actual
  ('active_event', '');     -- evento externo activo (JSON o vacío)

-- Dos empresas competidoras
CREATE TABLE companies (
  id             INT PRIMARY KEY CHECK (id IN (1, 2)),
  name           TEXT NOT NULL,
  emoji          TEXT NOT NULL,
  slogan         TEXT DEFAULT '',
  total_cash     BIGINT DEFAULT 500000000,
  total_revenue  BIGINT DEFAULT 0,
  total_costs    BIGINT DEFAULT 0,
  bsc_financial  INT DEFAULT 50 CHECK (bsc_financial BETWEEN 0 AND 100),
  bsc_customer   INT DEFAULT 50 CHECK (bsc_customer BETWEEN 0 AND 100),
  bsc_internal   INT DEFAULT 50 CHECK (bsc_internal BETWEEN 0 AND 100),
  bsc_learning   INT DEFAULT 50 CHECK (bsc_learning BETWEEN 0 AND 100)
);

INSERT INTO companies (id, name, emoji, slogan) VALUES
  (1, 'Fritanga Express', '🍗', 'Lo criollo, pero express'),
  (2, 'Parrilla & CO',    '🥩', 'Carne de verdad, precio de amigo');

-- Áreas funcionales por empresa (6 áreas × 2 empresas = 12 filas)
CREATE TABLE areas (
  company_id    INT NOT NULL REFERENCES companies(id),
  area_code     TEXT NOT NULL,
  area_name     TEXT NOT NULL,
  icon          TEXT NOT NULL,
  budget        BIGINT NOT NULL,
  spent         BIGINT DEFAULT 0,
  revenue       BIGINT DEFAULT 0,
  bsc_financial INT DEFAULT 50,
  bsc_customer  INT DEFAULT 50,
  bsc_internal  INT DEFAULT 50,
  bsc_learning  INT DEFAULT 50,
  current_node  TEXT DEFAULT NULL,
  resting_today BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (company_id, area_code)
);

-- Presupuestos iniciales (total = $500M por empresa)
INSERT INTO areas (company_id, area_code, area_name, icon, budget) VALUES
  (1, 'operations', 'Operaciones',    '⚙️', 130000000),
  (1, 'finance',    'Finanzas',       '💰', 75000000),
  (1, 'marketing',  'Marketing',      '📢', 95000000),
  (1, 'hr',         'Talento Humano', '👥', 65000000),
  (1, 'logistics',  'Logística',      '🚛', 85000000),
  (1, 'innovation', 'I+D',           '💡', 50000000),
  (2, 'operations', 'Operaciones',    '⚙️', 130000000),
  (2, 'finance',    'Finanzas',       '💰', 75000000),
  (2, 'marketing',  'Marketing',      '📢', 95000000),
  (2, 'hr',         'Talento Humano', '👥', 65000000),
  (2, 'logistics',  'Logística',      '🚛', 85000000),
  (2, 'innovation', 'I+D',           '💡', 50000000),
  -- Gerencia General (presupuesto 0 - usa fondos de la empresa directamente)
  (1, 'gerente',    'Gerencia General', '👔', 0),
  (2, 'gerente',    'Gerencia General', '👔', 0);

-- Estudiantes
CREATE TABLE students (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL,
  company_id     INT NOT NULL REFERENCES companies(id),
  area_code      TEXT NOT NULL,
  joined_at      TIMESTAMPTZ DEFAULT NOW(),
  decisions_made INT DEFAULT 0
);

-- Historial de decisiones
CREATE TABLE decisions (
  id             SERIAL PRIMARY KEY,
  company_id     INT NOT NULL,
  area_code      TEXT NOT NULL,
  day            INT NOT NULL,
  node_id        TEXT NOT NULL,
  choice         TEXT NOT NULL,
  decided_by     TEXT REFERENCES students(id),
  cost_amount    BIGINT DEFAULT 0,
  revenue_amount BIGINT DEFAULT 0,
  bsc_deltas     JSONB DEFAULT '{}',
  cross_effects  JSONB DEFAULT '[]',
  tags           JSONB DEFAULT '[]',
  narrative      TEXT DEFAULT '',
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(company_id, area_code, day)
);

-- Eventos externos (docente)
CREATE TABLE events (
  id              SERIAL PRIMARY KEY,
  day             INT NOT NULL,
  event_type      TEXT NOT NULL,
  title           TEXT NOT NULL,
  description     TEXT DEFAULT '',
  target_company  INT DEFAULT NULL,
  target_area     TEXT DEFAULT NULL,
  cash_delta      BIGINT DEFAULT 0,
  bsc_deltas      JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE game_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies  ENABLE ROW LEVEL SECURITY;
ALTER TABLE areas      ENABLE ROW LEVEL SECURITY;
ALTER TABLE students   ENABLE ROW LEVEL SECURITY;
ALTER TABLE decisions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE events     ENABLE ROW LEVEL SECURITY;

-- Lectura pública en todo
CREATE POLICY "public_read_game_state" ON game_state FOR SELECT USING (true);
CREATE POLICY "public_read_companies"  ON companies  FOR SELECT USING (true);
CREATE POLICY "public_read_areas"      ON areas      FOR SELECT USING (true);
CREATE POLICY "public_read_students"   ON students   FOR SELECT USING (true);
CREATE POLICY "public_read_decisions"  ON decisions   FOR SELECT USING (true);
CREATE POLICY "public_read_events"     ON events     FOR SELECT USING (true);

-- Insert público en students (para join)
CREATE POLICY "public_insert_students" ON students FOR INSERT WITH CHECK (true);

-- ============================================================
-- RPC FUNCTIONS (SECURITY DEFINER)
-- ============================================================

-- Unirse al juego
CREATE OR REPLACE FUNCTION join_game(
  p_id TEXT, p_name TEXT, p_company INT, p_area TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO students (id, name, company_id, area_code)
  VALUES (p_id, p_name, p_company, p_area)
  ON CONFLICT (id) DO UPDATE SET name = p_name, company_id = p_company, area_code = p_area;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Registrar decisión de un área
CREATE OR REPLACE FUNCTION make_decision(
  p_company INT, p_area TEXT, p_day INT, p_node TEXT,
  p_choice TEXT, p_student TEXT, p_cost BIGINT, p_revenue BIGINT,
  p_bsc JSONB, p_cross JSONB, p_tags JSONB, p_narrative TEXT, p_next_node TEXT
) RETURNS VOID AS $$
BEGIN
  -- Insertar decisión
  INSERT INTO decisions (company_id, area_code, day, node_id, choice, decided_by,
    cost_amount, revenue_amount, bsc_deltas, cross_effects, tags, narrative)
  VALUES (p_company, p_area, p_day, p_node, p_choice, p_student,
    p_cost, p_revenue, p_bsc, p_cross, p_tags, p_narrative)
  ON CONFLICT (company_id, area_code, day) DO NOTHING;

  -- Actualizar presupuesto del área
  UPDATE areas SET
    spent = spent + p_cost,
    revenue = revenue + p_revenue,
    bsc_financial = GREATEST(0, LEAST(100, bsc_financial + COALESCE((p_bsc->>'bsc_financial')::INT, 0))),
    bsc_customer  = GREATEST(0, LEAST(100, bsc_customer  + COALESCE((p_bsc->>'bsc_customer')::INT, 0))),
    bsc_internal  = GREATEST(0, LEAST(100, bsc_internal  + COALESCE((p_bsc->>'bsc_internal')::INT, 0))),
    bsc_learning  = GREATEST(0, LEAST(100, bsc_learning  + COALESCE((p_bsc->>'bsc_learning')::INT, 0))),
    current_node  = p_next_node
  WHERE company_id = p_company AND area_code = p_area;

  -- Actualizar cash de la empresa
  UPDATE companies SET
    total_costs   = total_costs + p_cost,
    total_revenue = total_revenue + p_revenue,
    total_cash    = total_cash - p_cost + p_revenue
  WHERE id = p_company;

  -- Actualizar decisiones del estudiante
  UPDATE students SET decisions_made = decisions_made + 1
  WHERE id = p_student;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Aplicar efectos cruzados en otra área
CREATE OR REPLACE FUNCTION apply_cross_effect(
  p_company INT, p_area TEXT, p_bsc JSONB, p_cost BIGINT DEFAULT 0
) RETURNS VOID AS $$
BEGIN
  UPDATE areas SET
    spent = spent + p_cost,
    bsc_financial = GREATEST(0, LEAST(100, bsc_financial + COALESCE((p_bsc->>'bsc_financial')::INT, 0))),
    bsc_customer  = GREATEST(0, LEAST(100, bsc_customer  + COALESCE((p_bsc->>'bsc_customer')::INT, 0))),
    bsc_internal  = GREATEST(0, LEAST(100, bsc_internal  + COALESCE((p_bsc->>'bsc_internal')::INT, 0))),
    bsc_learning  = GREATEST(0, LEAST(100, bsc_learning  + COALESCE((p_bsc->>'bsc_learning')::INT, 0)))
  WHERE company_id = p_company AND area_code = p_area;

  UPDATE companies SET
    total_costs = total_costs + p_cost,
    total_cash  = total_cash - p_cost
  WHERE id = p_company;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Aplicar evento externo del docente
CREATE OR REPLACE FUNCTION apply_event(
  p_day INT, p_type TEXT, p_title TEXT, p_desc TEXT,
  p_target_company INT, p_target_area TEXT,
  p_cash_delta BIGINT, p_bsc JSONB
) RETURNS VOID AS $$
BEGIN
  INSERT INTO events (day, event_type, title, description, target_company, target_area, cash_delta, bsc_deltas)
  VALUES (p_day, p_type, p_title, p_desc, p_target_company, p_target_area, p_cash_delta, p_bsc);

  -- Aplicar a empresa(s)
  IF p_target_area IS NOT NULL THEN
    IF p_target_company IS NOT NULL THEN
      UPDATE areas SET
        spent = CASE WHEN p_cash_delta < 0 THEN spent + ABS(p_cash_delta) ELSE spent END,
        revenue = CASE WHEN p_cash_delta > 0 THEN revenue + p_cash_delta ELSE revenue END,
        bsc_financial = GREATEST(0, LEAST(100, bsc_financial + COALESCE((p_bsc->>'bsc_financial')::INT, 0))),
        bsc_customer  = GREATEST(0, LEAST(100, bsc_customer  + COALESCE((p_bsc->>'bsc_customer')::INT, 0))),
        bsc_internal  = GREATEST(0, LEAST(100, bsc_internal  + COALESCE((p_bsc->>'bsc_internal')::INT, 0))),
        bsc_learning  = GREATEST(0, LEAST(100, bsc_learning  + COALESCE((p_bsc->>'bsc_learning')::INT, 0)))
      WHERE company_id = p_target_company AND area_code = p_target_area;
    ELSE
      UPDATE areas SET
        spent = CASE WHEN p_cash_delta < 0 THEN spent + ABS(p_cash_delta) ELSE spent END,
        revenue = CASE WHEN p_cash_delta > 0 THEN revenue + p_cash_delta ELSE revenue END,
        bsc_financial = GREATEST(0, LEAST(100, bsc_financial + COALESCE((p_bsc->>'bsc_financial')::INT, 0))),
        bsc_customer  = GREATEST(0, LEAST(100, bsc_customer  + COALESCE((p_bsc->>'bsc_customer')::INT, 0))),
        bsc_internal  = GREATEST(0, LEAST(100, bsc_internal  + COALESCE((p_bsc->>'bsc_internal')::INT, 0))),
        bsc_learning  = GREATEST(0, LEAST(100, bsc_learning  + COALESCE((p_bsc->>'bsc_learning')::INT, 0)))
      WHERE area_code = p_target_area;
    END IF;
  END IF;

  -- Aplicar delta de cash a la(s) empresa(s)
  IF p_target_company IS NOT NULL THEN
    UPDATE companies SET
      total_cash = total_cash + p_cash_delta,
      total_costs = CASE WHEN p_cash_delta < 0 THEN total_costs + ABS(p_cash_delta) ELSE total_costs END,
      total_revenue = CASE WHEN p_cash_delta > 0 THEN total_revenue + p_cash_delta ELSE total_revenue END
    WHERE id = p_target_company;
  ELSE
    UPDATE companies SET
      total_cash = total_cash + p_cash_delta,
      total_costs = CASE WHEN p_cash_delta < 0 THEN total_costs + ABS(p_cash_delta) ELSE total_costs END,
      total_revenue = CASE WHEN p_cash_delta > 0 THEN total_revenue + p_cash_delta ELSE total_revenue END;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Iniciar juego
CREATE OR REPLACE FUNCTION game_start() RETURNS VOID AS $$
BEGIN
  UPDATE game_state SET value = 'playing' WHERE key = 'status';
  UPDATE game_state SET value = '1' WHERE key = 'day';
  UPDATE game_state SET value = NOW()::TEXT WHERE key = 'day_started_at';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Avanzar día
CREATE OR REPLACE FUNCTION game_advance_day() RETURNS INT AS $$
DECLARE
  v_day INT;
BEGIN
  SELECT value::INT INTO v_day FROM game_state WHERE key = 'day';
  v_day := v_day + 1;
  IF v_day > 45 THEN
    UPDATE game_state SET value = 'ended' WHERE key = 'status';
    RETURN 45;
  END IF;
  UPDATE game_state SET value = v_day::TEXT WHERE key = 'day';
  UPDATE game_state SET value = NOW()::TEXT WHERE key = 'day_started_at';
  RETURN v_day;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Pausar / reanudar
CREATE OR REPLACE FUNCTION game_toggle_pause() RETURNS TEXT AS $$
DECLARE
  v_status TEXT;
BEGIN
  SELECT value INTO v_status FROM game_state WHERE key = 'status';
  IF v_status = 'playing' THEN
    UPDATE game_state SET value = 'paused' WHERE key = 'status';
    RETURN 'paused';
  ELSIF v_status = 'paused' THEN
    UPDATE game_state SET value = 'playing' WHERE key = 'status';
    UPDATE game_state SET value = NOW()::TEXT WHERE key = 'day_started_at';
    RETURN 'playing';
  END IF;
  RETURN v_status;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Reset completo
CREATE OR REPLACE FUNCTION game_reset() RETURNS VOID AS $$
BEGIN
  DELETE FROM events WHERE true;
  DELETE FROM decisions WHERE true;
  DELETE FROM students WHERE true;
  UPDATE areas SET spent = 0, revenue = 0,
    bsc_financial = 50, bsc_customer = 50, bsc_internal = 50, bsc_learning = 50,
    current_node = NULL, resting_today = FALSE;
  UPDATE areas SET budget = 130000000 WHERE area_code = 'operations';
  UPDATE areas SET budget = 75000000  WHERE area_code = 'finance';
  UPDATE areas SET budget = 95000000  WHERE area_code = 'marketing';
  UPDATE areas SET budget = 65000000  WHERE area_code = 'hr';
  UPDATE areas SET budget = 85000000  WHERE area_code = 'logistics';
  UPDATE areas SET budget = 50000000  WHERE area_code = 'innovation';
  UPDATE areas SET budget = 0         WHERE area_code = 'gerente';
  UPDATE companies SET total_cash = 500000000, total_revenue = 0, total_costs = 0,
    bsc_financial = 50, bsc_customer = 50, bsc_internal = 50, bsc_learning = 50;
  UPDATE game_state SET value = 'lobby' WHERE key = 'status';
  UPDATE game_state SET value = '0' WHERE key = 'day';
  UPDATE game_state SET value = '' WHERE key = 'day_started_at';
  UPDATE game_state SET value = '' WHERE key = 'active_event';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Actualizar BSC de empresa (promedio ponderado de áreas)
CREATE OR REPLACE FUNCTION recalc_company_bsc(p_company INT) RETURNS VOID AS $$
BEGIN
  UPDATE companies SET
    bsc_financial = (SELECT ROUND(AVG(bsc_financial)) FROM areas WHERE company_id = p_company),
    bsc_customer  = (SELECT ROUND(AVG(bsc_customer))  FROM areas WHERE company_id = p_company),
    bsc_internal  = (SELECT ROUND(AVG(bsc_internal))  FROM areas WHERE company_id = p_company),
    bsc_learning  = (SELECT ROUND(AVG(bsc_learning))  FROM areas WHERE company_id = p_company)
  WHERE id = p_company;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Permisos para anon
GRANT EXECUTE ON FUNCTION join_game TO anon;
GRANT EXECUTE ON FUNCTION make_decision TO anon;
GRANT EXECUTE ON FUNCTION apply_cross_effect TO anon;
GRANT EXECUTE ON FUNCTION apply_event TO anon;
GRANT EXECUTE ON FUNCTION game_start TO anon;
GRANT EXECUTE ON FUNCTION game_advance_day TO anon;
GRANT EXECUTE ON FUNCTION game_toggle_pause TO anon;
GRANT EXECUTE ON FUNCTION game_reset TO anon;
GRANT EXECUTE ON FUNCTION recalc_company_bsc TO anon;
