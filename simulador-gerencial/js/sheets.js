// =====================================================
// Cliente del Apps Script backend
// Usa POST con text/plain para evitar preflight CORS
// =====================================================
(function () {
  const Sheets = {
    async call(action, payload = {}) {
      const url = window.SIM_CONFIG.API_URL;
      if (!url || url.includes('PEGA_AQUI')) {
        throw new Error('Configura API_URL en js/config.js');
      }
      const body = JSON.stringify({ action, ...payload });
      try {
        const res = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body,
          redirect: 'follow',
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        return data;
      } catch (err) {
        throw err;
      }
    },

    join(company, name) {
      return this.call('join', { company, name });
    },
    state(studentId) {
      return this.call('state', { studentId });
    },
    propose(payload) {
      return this.call('propose', payload);
    },
    vote(payload) {
      return this.call('vote', payload);
    },
    resolve(payload) {
      return this.call('resolve', payload);
    },
    start() { return this.call('start', {}); },
    next() { return this.call('next', {}); },
    pause() { return this.call('pause', {}); },
    reset() { return this.call('reset', {}); },
    ping() { return this.call('ping', {}); },

    // Intenta procesar la cola offline
    async flushQueue() {
      const q = Storage.getQueue();
      if (!q.length) return { flushed: 0 };
      const remaining = [];
      let flushed = 0;
      for (const op of q) {
        try {
          await this.call(op.action, op.payload);
          flushed++;
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
