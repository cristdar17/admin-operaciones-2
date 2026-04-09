/* ============================================================
   API - Cliente REST para Supabase
   ============================================================ */
const API = (() => {
  const base = () => CONFIG.SUPABASE_URL + '/rest/v1';
  const headers = () => ({
    'apikey': CONFIG.SUPABASE_KEY,
    'Authorization': 'Bearer ' + CONFIG.SUPABASE_KEY,
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
  });

  async function query(table, params = '') {
    const r = await fetch(`${base()}/${table}?${params}`, {
      headers: { 'apikey': CONFIG.SUPABASE_KEY, 'Authorization': 'Bearer ' + CONFIG.SUPABASE_KEY }
    });
    return r.json();
  }

  async function rpc(fn, body = {}) {
    const r = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST', headers: headers(), body: JSON.stringify(body)
    });
    if (!r.ok) { const e = await r.text(); console.error(`RPC ${fn} error:`, e); throw new Error(e); }
    const text = await r.text();
    return text ? JSON.parse(text) : null;
  }

  return {
    // --- Lectura ---
    async getState() {
      const rows = await query('game_state', 'select=key,value');
      const state = {};
      rows.forEach(r => state[r.key] = r.value);
      return state;
    },

    async getCompanies() {
      return query('companies', 'select=*&order=id');
    },

    async getAreas(companyId) {
      const filter = companyId ? `&company_id=eq.${companyId}` : '';
      return query('areas', `select=*&order=company_id,area_code${filter}`);
    },

    async getStudents() {
      return query('students', 'select=*&order=company_id,area_code,joined_at');
    },

    async getDecisions(companyId) {
      const filter = companyId ? `&company_id=eq.${companyId}` : '';
      return query('decisions', `select=*&order=day.desc${filter}`);
    },

    async getEvents() {
      return query('events', 'select=*&order=day.desc');
    },

    // --- Acciones ---
    joinGame(id, name, company, area) {
      return rpc('join_game', { p_id: id, p_name: name, p_company: company, p_area: area });
    },

    makeDecision(company, area, day, nodeId, choice, studentId, cost, revenue, bsc, cross, tags, narrative, nextNode) {
      return rpc('make_decision', {
        p_company: company, p_area: area, p_day: day, p_node: nodeId,
        p_choice: choice, p_student: studentId, p_cost: cost, p_revenue: revenue,
        p_bsc: bsc, p_cross: cross, p_tags: tags, p_narrative: narrative, p_next_node: nextNode
      });
    },

    applyCrossEffect(company, area, bsc, cost = 0) {
      return rpc('apply_cross_effect', { p_company: company, p_area: area, p_bsc: bsc, p_cost: cost });
    },

    applyEvent(day, type, title, desc, targetCompany, targetArea, cashDelta, bsc) {
      return rpc('apply_event', {
        p_day: day, p_type: type, p_title: title, p_desc: desc,
        p_target_company: targetCompany, p_target_area: targetArea,
        p_cash_delta: cashDelta, p_bsc: bsc
      });
    },

    recalcBSC(company) {
      return rpc('recalc_company_bsc', { p_company: company });
    },

    // --- Control del juego ---
    startGame()    { return rpc('game_start'); },
    advanceDay()   { return rpc('game_advance_day'); },
    togglePause()  { return rpc('game_toggle_pause'); },
    resetGame()    { return rpc('game_reset'); },

    // --- Estado completo (para polling) ---
    async fetchAll() {
      const [state, companies, areas, students, decisions, events] = await Promise.all([
        this.getState(), this.getCompanies(), this.getAreas(),
        this.getStudents(), this.getDecisions(), this.getEvents()
      ]);
      return { state, companies, areas, students, decisions, events };
    }
  };
})();
