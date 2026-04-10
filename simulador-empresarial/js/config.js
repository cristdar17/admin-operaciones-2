/* ============================================================
   CONFIG - Simulador Empresarial
   ============================================================ */
const CONFIG = {
  // --- Supabase (reemplazar con tu proyecto) ---
  SUPABASE_URL: 'https://lnszgnzgtehawgvhqxjb.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxuc3pnbnpndGVoYXdndmhxeGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NjcyMTcsImV4cCI6MjA5MTM0MzIxN30.HPDJbfPaSjkdCvGecI-07CytBZf44wGhjceFzQ8RZLg',

  // --- Timing ---
  SECONDS_PER_DAY: 180,       // 3 minutos por día simulado
  TOTAL_DAYS: 25,             // 25 días × 3 min = 75 min
  POLL_INTERVAL: 3000,        // polling cada 3 segundos
  DECISION_TIMEOUT: 100,      // segundos para decidir (antes de auto-skip)

  // --- Empresas ---
  COMPANIES: [
    { id: 1, name: 'Fritanga Express', emoji: '🍗', slogan: 'Lo criollo, pero express', color: '#FF6B35' },
    { id: 2, name: 'Parrilla & CO',    emoji: '🥩', slogan: 'Carne de verdad, precio de amigo', color: '#2EC4B6' }
  ],

  // --- Áreas funcionales ---
  AREAS: [
    { code: 'operations', name: 'Operaciones',    icon: '⚙️', budget: 130000000 },
    { code: 'finance',    name: 'Finanzas',       icon: '💰', budget: 75000000 },
    { code: 'marketing',  name: 'Marketing',      icon: '📢', budget: 95000000 },
    { code: 'hr',         name: 'Talento Humano', icon: '👥', budget: 65000000 },
    { code: 'logistics',  name: 'Logística',      icon: '🚛', budget: 85000000 },
    { code: 'innovation', name: 'I+D',            icon: '💡', budget: 50000000 }
  ],

  // --- Presupuesto inicial ---
  INITIAL_CASH: 500000000,  // $500M COP

  // --- BSC pesos para score final ---
  BSC_WEIGHTS: {
    financial: 0.35,
    customer:  0.25,
    internal:  0.25,
    learning:  0.15
  }
};
