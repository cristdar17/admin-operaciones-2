// =====================================================
// Helpers de UI: animaciones, confetti, shake, toast
// =====================================================
(function () {
  const UI = {
    toast(message, type = 'info', duration = 3000) {
      const el = document.createElement('div');
      el.className = 'toast toast-' + type;
      el.textContent = message;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('show'));
      setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 300);
      }, duration);
    },

    shake(el) {
      if (!el) return;
      el.classList.remove('shake');
      void el.offsetWidth;
      el.classList.add('shake');
    },

    pulse(el) {
      if (!el) return;
      el.classList.remove('pulse');
      void el.offsetWidth;
      el.classList.add('pulse');
    },

    confetti() {
      const colors = ['#f97316', '#10b981', '#ec4899', '#8b5cf6', '#06b6d4', '#facc15'];
      for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (2 + Math.random() * 2) + 's';
        p.style.animationDelay = (Math.random() * 0.3) + 's';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 4500);
      }
    },

    redFlash() {
      const f = document.createElement('div');
      f.className = 'red-flash';
      document.body.appendChild(f);
      setTimeout(() => f.remove(), 800);
    },

    // Animacion de contador de plata
    animateNumber(el, from, to, duration = 1200, formatter) {
      if (!el) return;
      const start = performance.now();
      const fmt = formatter || (n => Math.round(n).toString());
      function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(from + (to - from) * eased);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    },

    // Formato mm:ss
    formatTime(seconds) {
      const s = Math.max(0, Math.ceil(seconds));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return m + ':' + (r < 10 ? '0' : '') + r;
    },
  };

  window.UI = UI;
})();
