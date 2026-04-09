/* ============================================================
   STORAGE - Persistencia local (sesión del estudiante)
   ============================================================ */
const Storage = (() => {
  const KEY = 'sim_empresarial_session';

  return {
    save(data) {
      localStorage.setItem(KEY, JSON.stringify(data));
    },
    load() {
      try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
    },
    clear() {
      localStorage.removeItem(KEY);
    },

    // Cache del estado global
    cacheState(data) {
      localStorage.setItem(KEY + '_cache', JSON.stringify({ ...data, _ts: Date.now() }));
    },
    getCachedState() {
      try { return JSON.parse(localStorage.getItem(KEY + '_cache')); } catch { return null; }
    }
  };
})();
