// =====================================================
// Narrador: eventos del mercado + frases + rachas
// =====================================================
(function () {
  // Eventos globales que afectan a todas las empresas vivas
  const MARKET_EVENTS = [
    { id: 'crisis_cambiaria', emoji: '💸', title: 'Crisis cambiaria', desc: 'El dólar se dispara 8% de un día para otro. Todas las empresas con compromisos en moneda extranjera sienten el golpe.', min: -40000000, max: -15000000 },
    { id: 'boom_navideno', emoji: '🎄', title: 'Boom de fin de año', desc: 'El consumo se dispara en toda Pereira. Las cajas registradoras no paran.', min: 15000000, max: 45000000 },
    { id: 'apagon_regional', emoji: '⚡', title: 'Apagón regional', desc: 'Corte eléctrico de 48 horas en Risaralda. Operaciones suspendidas en toda la región.', min: -30000000, max: -10000000 },
    { id: 'inflacion', emoji: '📈', title: 'Inflación disparada', desc: 'El IPC sube 2% en un mes. Los costos de todos los insumos se disparan.', min: -25000000, max: -5000000 },
    { id: 'pereira_netflix', emoji: '🌄', title: 'Pereira en Netflix', desc: 'Una serie sobre Pereira se vuelve viral globalmente. El turismo y las ventas locales explotan.', min: 10000000, max: 35000000 },
    { id: 'subsidio_gobierno', emoji: '📜', title: 'Subsidio sorpresa', desc: 'Ley de reindustrialización aprobada. Todas las empresas reciben apoyo estatal.', min: 5000000, max: 20000000 },
    { id: 'paro_nacional', emoji: '🚨', title: 'Paro nacional de 3 días', desc: 'Bloqueos en las carreteras. Distribución detenida y ventas en pausa.', min: -20000000, max: -5000000 },
    { id: 'mundial', emoji: '⚽', title: '¡Colombia al Mundial!', desc: 'La selección clasifica. Euforia nacional, todo se vende como pan caliente.', min: 20000000, max: 50000000 },
    { id: 'ciber_ataque', emoji: '🦠', title: 'Ciberataque regional', desc: 'Hackean los servidores de medio pago. Ventas online caen en picada.', min: -35000000, max: -10000000 },
    { id: 'black_friday', emoji: '🛍️', title: 'Black Friday histórico', desc: 'Ventas récord en todo el comercio pereirano.', min: 18000000, max: 40000000 },
    { id: 'sequia', emoji: '☀️', title: 'Sequía intensa', desc: 'Escasez de agua afecta producción en todo el Eje Cafetero.', min: -28000000, max: -8000000 },
    { id: 'feria', emoji: '🎡', title: 'Feria de Pereira', desc: 'Turistas llenan la ciudad durante la feria anual. Todo fluye.', min: 12000000, max: 32000000 },
  ];

  const NARRATOR_PHRASES = {
    bigWin: [
      '{name} está dando cátedra 👑',
      '{name} imparable, aplíquese 📚',
      '{name} en modo dios ⚡',
      '{name} barriendo con todo 🧹',
      '{name} a otro nivel 🎯',
    ],
    bigLoss: [
      '{name} está en la UCI 🏥',
      '{name} se va en picada 📉',
      '{name} tocando fondo ⚓',
      '{name} ve la luz al final del túnel... es un tren 🚂',
      '{name} necesita una oración 🙏',
    ],
    takeLead: [
      '{name} toma la delantera 🏁',
      'Nuevo líder: {name} 👑',
      '{name} tomando el liderato 🎯',
      '{name} pisando el acelerador 🏎️',
    ],
    loseLead: [
      '{name} pierde el primer lugar 😬',
      '{name} cae del podio 💔',
    ],
    streak3: [
      '{name} en racha de 3 🔥',
      '{name} calentando motores 🔥',
    ],
    streak5: [
      '{name} EN LLAMAS 🔥🔥🔥',
      '{name} 5 seguidas, imparable 🚀',
    ],
    streak7: [
      '{name} GOD MODE ACTIVATED 👑🔥',
      '{name} escribiendo historia 📜',
    ],
    bankrupt: [
      '{name} al borde de la quiebra 💀',
      '{name} en quiebra técnica 🪦',
    ],
    unanimous: [
      'Junta ejemplar en {name}: unanimidad 🤝',
      '{name} vota en bloque como relojito ⏱️',
    ],
    contrarian: [
      '{name}: golpe de estado contra el ponente 😈',
      'Rebelión en {name} ⚔️',
    ],
  };

  const Narrator = {
    events: MARKET_EVENTS,
    phrases: NARRATOR_PHRASES,

    randomEvent() {
      return MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
    },

    rollDelta(ev) {
      const raw = ev.min + Math.random() * (ev.max - ev.min);
      return Math.round(raw / 100000) * 100000;
    },

    pick(category, name) {
      const list = NARRATOR_PHRASES[category] || [];
      if (!list.length) return '';
      const phrase = list[Math.floor(Math.random() * list.length)];
      return phrase.replace('{name}', name || '');
    },

    // Cuenta cuantas decisiones positivas consecutivas (hacia atras desde la ultima)
    computeStreak(rounds, companyId) {
      const sorted = (rounds || [])
        .filter(r => Number(r.company) === Number(companyId) && r.phase === 'resolved')
        .sort((a, b) => Number(b.round) - Number(a.round));
      let count = 0;
      for (const r of sorted) {
        if (Number(r.delta) >= 0) count++;
        else break;
      }
      return count;
    },

    // Detecta si la ultima ronda resuelta fue unanime (todos votaron lo mismo)
    wasUnanimous(round) {
      if (!round || round.phase !== 'resolved') return false;
      let votes = {};
      try { votes = round.votes_json ? JSON.parse(round.votes_json) : {}; } catch (_) {}
      const values = Object.values(votes);
      if (values.length < 2) return false;
      return values.every(v => v === values[0]);
    },

    // Detecta si el ponente fue vetado (su propuesta NO gano)
    wasContrarian(round) {
      if (!round || round.phase !== 'resolved') return false;
      if (!round.proposal || !round.final_choice) return false;
      return round.proposal !== round.final_choice;
    },
  };

  window.Narrator = Narrator;
})();
