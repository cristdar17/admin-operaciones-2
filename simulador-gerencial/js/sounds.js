// =====================================================
// Efectos de sonido generados con Web Audio API (sin archivos)
// =====================================================
(function () {
  let ctx = null;

  function getCtx() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (_) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  function tone(freq, duration, type = 'sine', gain = 0.12, delay = 0) {
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(g).connect(c.destination);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  function sweep(startFreq, endFreq, duration, type = 'sawtooth', gain = 0.12) {
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(g).connect(c.destination);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  const Sounds = {
    enabled: true,

    unlock() { getCtx(); },

    tick()    { if (this.enabled) tone(880, 0.06, 'square', 0.08); },
    tock()    { if (this.enabled) tone(440, 0.05, 'square', 0.08); },
    click()   { if (this.enabled) tone(600, 0.03, 'square', 0.06); },

    chaching() {
      if (!this.enabled) return;
      tone(880, 0.12, 'sine', 0.14);
      tone(1175, 0.15, 'sine', 0.14, 0.08);
      tone(1568, 0.22, 'sine', 0.14, 0.16);
    },

    buzzer() {
      if (!this.enabled) return;
      tone(220, 0.3, 'sawtooth', 0.16);
      tone(180, 0.3, 'sawtooth', 0.14, 0.05);
    },

    bell() {
      if (!this.enabled) return;
      tone(784, 0.2, 'sine', 0.14);
      tone(1047, 0.3, 'sine', 0.12, 0.1);
    },

    fanfare() {
      if (!this.enabled) return;
      [523, 659, 784, 1047].forEach(function (f, i) {
        tone(f, 0.22, 'triangle', 0.14, i * 0.1);
      });
    },

    vote() {
      if (!this.enabled) return;
      tone(700, 0.08, 'sine', 0.12);
      tone(900, 0.08, 'sine', 0.12, 0.06);
    },

    newRound() {
      if (!this.enabled) return;
      tone(600, 0.1, 'sine', 0.12);
      tone(800, 0.1, 'sine', 0.12, 0.08);
      tone(1000, 0.15, 'sine', 0.14, 0.16);
    },

    event() {
      if (!this.enabled) return;
      sweep(300, 1000, 0.3, 'sawtooth', 0.15);
      tone(1200, 0.2, 'sine', 0.1, 0.25);
    },

    alert() {
      if (!this.enabled) return;
      tone(1000, 0.1, 'square', 0.12);
      tone(700, 0.1, 'square', 0.12, 0.12);
      tone(1000, 0.1, 'square', 0.12, 0.24);
    },

    fire() {
      if (!this.enabled) return;
      [659, 784, 988, 1175, 1397].forEach(function (f, i) {
        tone(f, 0.12, 'triangle', 0.13, i * 0.06);
      });
    },
  };

  window.Sounds = Sounds;
})();
