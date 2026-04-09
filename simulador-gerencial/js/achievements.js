// =====================================================
// Logros desbloqueables
// =====================================================
(function () {
  const ACHIEVEMENTS = [
    { id: 'first_decision', emoji: '🥇', title: 'Primera decisión', desc: 'Tomaste tu primera decisión como junta', check: s => s.resolvedRounds >= 1 },
    { id: 'first_million',  emoji: '💰', title: 'Primer millón',     desc: 'Ganaste más de $10M en una decisión', check: s => s.maxDelta >= 10000000 },
    { id: 'big_win',        emoji: '💎', title: 'Golazo financiero', desc: 'Ganaste más de $80M en una decisión', check: s => s.maxDelta >= 80000000 },
    { id: 'jackpot',        emoji: '🎰', title: 'Jackpot',           desc: 'Ganaste más de $120M en una decisión', check: s => s.maxDelta >= 120000000 },
    { id: 'first_loss',     emoji: '💀', title: 'Primer golpe duro', desc: 'Perdiste más de $30M en una decisión', check: s => s.minDelta <= -30000000 },
    { id: 'disaster',       emoji: '☠️', title: 'Desastre', desc: 'Perdiste más de $80M en una decisión', check: s => s.minDelta <= -80000000 },
    { id: 'unanimous',      emoji: '🤝', title: 'Junta unánime',     desc: 'Toda la junta votó lo mismo', check: s => s.hadUnanimous },
    { id: 'contrarian',     emoji: '😈', title: 'Rebelión',          desc: 'La junta vetó al ponente', check: s => s.hadContrarian },
    { id: 'streak_3',       emoji: '🔥', title: 'En racha',           desc: '3 decisiones positivas seguidas', check: s => s.bestStreak >= 3 },
    { id: 'streak_5',       emoji: '🔥🔥', title: 'Imparable',        desc: '5 decisiones positivas seguidas', check: s => s.bestStreak >= 5 },
    { id: 'streak_7',       emoji: '👑', title: 'God mode',           desc: '7 decisiones positivas seguidas', check: s => s.bestStreak >= 7 },
    { id: 'big_cash',       emoji: '🏦', title: 'Caja récord',        desc: 'Tu caja superó los $700M', check: s => s.maxCash >= 700000000 },
    { id: 'double_cash',    emoji: '📈', title: 'Duplicaste',         desc: 'Tu caja superó los $1.000M', check: s => s.maxCash >= 1000000000 },
    { id: 'veteran',        emoji: '🎖️', title: 'Veterano',           desc: 'Tomaste 10 decisiones', check: s => s.resolvedRounds >= 10 },
    { id: 'survivor',       emoji: '🏥', title: 'Sobreviviente',      desc: 'Caíste bajo $200M y recuperaste sobre $400M', check: s => s.minCashEver <= 200000000 && s.currentCash >= 400000000 },
    { id: 'rich_survivor',  emoji: '🦸', title: 'Resurección',        desc: 'Caíste bajo $100M y recuperaste sobre $500M', check: s => s.minCashEver <= 100000000 && s.currentCash >= 500000000 },
  ];

  const Achievements = {
    list: ACHIEVEMENTS,

    computeStats(state, companyId) {
      const cfg = window.SIM_CONFIG;
      const rounds = (state.rounds || [])
        .filter(r => Number(r.company) === Number(companyId) && r.phase === 'resolved')
        .sort((a, b) => Number(a.round) - Number(b.round));

      const company = (state.companies || []).find(c => Number(c.id) === Number(companyId));
      let cumCash = cfg.INITIAL_CASH;
      let minCashEver = cfg.INITIAL_CASH;
      let maxCash = cfg.INITIAL_CASH;
      let bestStreak = 0;
      let currentStreak = 0;
      let maxDelta = 0;
      let minDelta = 0;
      let hadUnanimous = false;
      let hadContrarian = false;

      rounds.forEach(r => {
        const d = Number(r.delta) || 0;
        cumCash += d;
        if (cumCash < minCashEver) minCashEver = cumCash;
        if (cumCash > maxCash) maxCash = cumCash;
        if (d > maxDelta) maxDelta = d;
        if (d < minDelta) minDelta = d;
        if (d >= 0) { currentStreak++; if (currentStreak > bestStreak) bestStreak = currentStreak; }
        else currentStreak = 0;
        if (window.Narrator && window.Narrator.wasUnanimous(r)) hadUnanimous = true;
        if (window.Narrator && window.Narrator.wasContrarian(r)) hadContrarian = true;
      });

      return {
        resolvedRounds: rounds.length,
        maxDelta, minDelta, bestStreak,
        maxCash, minCashEver,
        currentCash: company ? Number(company.cash) : cfg.INITIAL_CASH,
        hadUnanimous, hadContrarian,
      };
    },

    detect(state, companyId) {
      const stats = this.computeStats(state, companyId);
      return ACHIEVEMENTS.filter(a => { try { return a.check(stats); } catch (_) { return false; } });
    },

    // Calcula moral en escala 0-100 basada en posicion de caja + momentum reciente
    computeMoral(state, companyId) {
      const cfg = window.SIM_CONFIG;
      const stats = this.computeStats(state, companyId);
      const cashRatio = stats.currentCash / cfg.INITIAL_CASH;

      const rounds = (state.rounds || [])
        .filter(r => Number(r.company) === Number(companyId) && r.phase === 'resolved')
        .sort((a, b) => Number(b.round) - Number(a.round))
        .slice(0, 3);
      const recentSum = rounds.reduce((acc, r) => acc + (Number(r.delta) || 0), 0);
      const momentum = recentSum / cfg.INITIAL_CASH;

      let moral = 50 + (cashRatio - 1) * 50 + momentum * 50;
      return Math.max(0, Math.min(100, Math.round(moral)));
    },
  };

  window.Achievements = Achievements;
})();
