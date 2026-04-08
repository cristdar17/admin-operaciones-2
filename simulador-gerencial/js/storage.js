// =====================================================
// LocalStorage: persistencia offline y cola de sync
// =====================================================
(function () {
  const KEY_SESSION = 'sim_session';
  const KEY_QUEUE = 'sim_queue';
  const KEY_STATE_CACHE = 'sim_state_cache';
  const KEY_LOCAL_ROUNDS = 'sim_local_rounds';

  const Storage = {
    saveSession(session) {
      localStorage.setItem(KEY_SESSION, JSON.stringify(session));
    },
    loadSession() {
      try { return JSON.parse(localStorage.getItem(KEY_SESSION)); }
      catch (_) { return null; }
    },
    clearSession() {
      localStorage.removeItem(KEY_SESSION);
      localStorage.removeItem(KEY_LOCAL_ROUNDS);
    },

    // Cache del ultimo estado recibido para modo offline
    cacheState(state) {
      localStorage.setItem(KEY_STATE_CACHE, JSON.stringify({ t: Date.now(), state }));
    },
    loadCachedState() {
      try { return JSON.parse(localStorage.getItem(KEY_STATE_CACHE)); }
      catch (_) { return null; }
    },

    // Cola de operaciones pendientes de sync
    enqueue(op) {
      const q = this.getQueue();
      q.push({ ...op, t: Date.now() });
      localStorage.setItem(KEY_QUEUE, JSON.stringify(q));
    },
    getQueue() {
      try { return JSON.parse(localStorage.getItem(KEY_QUEUE)) || []; }
      catch (_) { return []; }
    },
    setQueue(q) {
      localStorage.setItem(KEY_QUEUE, JSON.stringify(q));
    },

    // Estado local de rondas (para retomar al recargar)
    saveLocalRound(round, data) {
      const all = this.getLocalRounds();
      all[round] = { ...(all[round] || {}), ...data };
      localStorage.setItem(KEY_LOCAL_ROUNDS, JSON.stringify(all));
    },
    getLocalRound(round) {
      const all = this.getLocalRounds();
      return all[round] || null;
    },
    getLocalRounds() {
      try { return JSON.parse(localStorage.getItem(KEY_LOCAL_ROUNDS)) || {}; }
      catch (_) { return {}; }
    },
  };

  window.Storage = Storage;
})();
