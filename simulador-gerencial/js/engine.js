// =====================================================
// Motor de juego: fases, rotacion de ponente, reglas
// =====================================================
(function () {
  const Engine = {
    scenarios: null,

    async loadScenarios() {
      if (this.scenarios) return this.scenarios;
      const res = await fetch('data/scenarios.json');
      this.scenarios = await res.json();
      return this.scenarios;
    },

    // Dada una ronda, devuelve el dilema que corresponde segun rotacion de roles
    getDilemmaForRound(round) {
      const s = this.scenarios;
      const role = s.rotation[(round - 1) % s.rotation.length];
      const matching = s.dilemmas.filter(d => d.role === role);
      const idx = Math.floor((round - 1) / s.rotation.length) % matching.length;
      return { ...matching[idx], _role: role, _roleInfo: s.roles[role] };
    },

    // Determina el ponente del turno para una empresa
    // Se basa en el orden de joined_at (estable) y rota por ronda
    getProponent(companyStudents, round) {
      if (!companyStudents || !companyStudents.length) return null;
      const sorted = [...companyStudents].sort((a, b) => {
        return String(a.joined_at).localeCompare(String(b.joined_at));
      });
      const idx = (round - 1) % sorted.length;
      return sorted[idx];
    },

    // A partir del objeto de votos y el ponente, calcula la opcion ganadora
    computeFinalChoice(votes, proponentId) {
      const tally = { A: 0, B: 0, C: 0, D: 0 };
      for (const [sid, v] of Object.entries(votes || {})) {
        if (!tally.hasOwnProperty(v)) continue;
        tally[v] += sid === proponentId ? 1.5 : 1;
      }
      let best = null, bestVal = -1;
      for (const k of ['A', 'B', 'C', 'D']) {
        if (tally[k] > bestVal) { best = k; bestVal = tally[k]; }
      }
      // Empate con la opcion del ponente -> decide ponente
      if (votes && votes[proponentId] && tally[votes[proponentId]] === bestVal) {
        best = votes[proponentId];
      }
      return { choice: best, tally };
    },

    // Genera delta aleatorio dentro del rango de la opcion
    rollDelta(option) {
      const min = Number(option.min) || 0;
      const max = Number(option.max) || 0;
      const raw = min + Math.random() * (max - min);
      // Redondear a multiplo de 100.000 COP
      return Math.round(raw / 100000) * 100000;
    },

    formatCOP(n) {
      const sign = n < 0 ? '-' : '';
      const abs = Math.abs(Number(n) || 0);
      if (abs >= 1e9) return sign + '$' + (abs / 1e9).toFixed(2) + ' mil M';
      if (abs >= 1e6) return sign + '$' + (abs / 1e6).toFixed(1) + ' M';
      if (abs >= 1e3) return sign + '$' + (abs / 1e3).toFixed(0) + 'k';
      return sign + '$' + abs;
    },

    formatCOPFull(n) {
      const sign = n < 0 ? '-' : '';
      const abs = Math.abs(Number(n) || 0);
      return sign + '$' + abs.toLocaleString('es-CO');
    },
  };

  window.Engine = Engine;
})();
