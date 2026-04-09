// =====================================================
// Cliente Supabase (REST) - reemplaza al Apps Script
// Se expone como window.Sheets para compatibilidad con el resto del codigo.
// =====================================================
(function () {
  function ensureConfig() {
    const url = window.SIM_CONFIG && window.SIM_CONFIG.SUPABASE_URL;
    const key = window.SIM_CONFIG && window.SIM_CONFIG.SUPABASE_KEY;
    if (!url || !key || url.includes('PEGA_AQUI') || key.includes('PEGA_AQUI')) {
      throw new Error('Configura SUPABASE_URL y SUPABASE_KEY en js/config.js');
    }
    return { url: url.replace(/\/$/, ''), key };
  }

  async function request(path, opts = {}) {
    const { url, key } = ensureConfig();
    const headers = {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    };
    const res = await fetch(url + path, { ...opts, headers });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error('HTTP ' + res.status + ': ' + text.slice(0, 200));
    }
    if (res.status === 204) return null;
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) return null;
    return await res.json();
  }

  function rpc(fn, args) {
    return request('/rest/v1/rpc/' + fn, {
      method: 'POST',
      body: JSON.stringify(args || {}),
    });
  }

  function uid() {
    return Math.random().toString(36).substring(2, 10) +
           Math.random().toString(36).substring(2, 6);
  }

  const Sheets = {
    async state() {
      try {
        const [game, students, companies, rounds] = await Promise.all([
          request('/rest/v1/game?select=*'),
          request('/rest/v1/students?select=*'),
          request('/rest/v1/companies?select=*&order=id.asc'),
          request('/rest/v1/rounds?select=*'),
        ]);
        const gameMap = {};
        (game || []).forEach(g => { gameMap[g.key] = g.value; });
        // Normalizar para que el resto del cliente siga funcionando sin cambios
        const normalizedRounds = (rounds || []).map(r => ({
          ...r,
          votes_json: r.votes ? JSON.stringify(r.votes) : '{}',
        }));
        return {
          ok: true,
          game: gameMap,
          students: students || [],
          companies: companies || [],
          rounds: normalizedRounds,
          serverTime: new Date().toISOString(),
        };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async join(company, name) {
      const id = uid();
      try {
        await request('/rest/v1/students', {
          method: 'POST',
          headers: { Prefer: 'return=minimal' },
          body: JSON.stringify({
            id, name, company,
            joined_at: new Date().toISOString(),
            votes_cast: 0, times_proponent: 0,
          }),
        });
        return { ok: true, studentId: id };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async propose(p) {
      try {
        await rpc('propose_decision', {
          p_company: Number(p.company),
          p_round: Number(p.round),
          p_role: String(p.role || ''),
          p_dilemma_id: String(p.dilemmaId || ''),
          p_student_id: String(p.studentId),
          p_choice: String(p.choice).toUpperCase(),
          p_justification: String(p.justification || '').slice(0, 280),
        });
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async vote(p) {
      try {
        await rpc('cast_vote', {
          p_company: Number(p.company),
          p_round: Number(p.round),
          p_student_id: String(p.studentId),
          p_vote: String(p.vote).toUpperCase(),
        });
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async resolve(p) {
      try {
        await rpc('resolve_round', {
          p_company: Number(p.company),
          p_round: Number(p.round),
          p_final_choice: String(p.finalChoice).toUpperCase(),
          p_delta: Math.round(Number(p.delta) || 0),
          p_narrative: String(p.narrative || '').slice(0, 500),
        });
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async start() {
      try { await rpc('game_start'); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async next() {
      try { await rpc('game_next'); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async pause() {
      try { await rpc('game_pause'); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async reset() {
      try { await rpc('game_reset'); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async startSabotage(duration = 90) {
      try { await rpc('start_sabotage', { p_duration_seconds: duration }); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async endSabotage() {
      try { await rpc('end_sabotage', {}); return { ok: true }; }
      catch (err) { return { ok: false, error: err.message }; }
    },
    async doSabotage(attacker, victim) {
      try {
        const result = await rpc('do_sabotage', { p_attacker: Number(attacker), p_victim: Number(victim) });
        return { ok: true, success: result === true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async setModifier(mod) {
      try {
        await rpc('set_modifier', { p_modifier: String(mod || 'none') });
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },

    async applyEvent(ev, delta) {
      try {
        await rpc('apply_market_event', {
          p_event_id: String(ev.id),
          p_emoji: String(ev.emoji || ''),
          p_title: String(ev.title),
          p_description: String(ev.desc || ''),
          p_delta: Math.round(Number(delta) || 0),
        });
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err.message };
      }
    },
    async ping() { return { ok: true, pong: new Date().toISOString() }; },

    async flushQueue() {
      const q = Storage.getQueue();
      if (!q.length) return { flushed: 0 };
      const remaining = [];
      let flushed = 0;
      for (const op of q) {
        try {
          const fn = this[op.action];
          if (!fn) { remaining.push(op); continue; }
          const res = await fn.call(this, op.payload);
          if (res && res.ok) flushed++;
          else remaining.push(op);
        } catch (_) {
          remaining.push(op);
        }
      }
      Storage.setQueue(remaining);
      return { flushed, remaining: remaining.length };
    },
  };

  window.Sheets = Sheets;
})();
