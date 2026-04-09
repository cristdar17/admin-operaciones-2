// =====================================================
// CONFIGURACION - EDITA AQUI DESPUES DE CREAR SUPABASE
// =====================================================
// 1. Entra a https://supabase.com y crea un proyecto gratis
// 2. En el SQL Editor, pega el contenido de supabase/schema.sql y ejecutalo
// 3. En Project Settings -> API:
//    - Copia "Project URL" y pegalo en SUPABASE_URL
//    - Copia la "anon public" key y pegala en SUPABASE_KEY
// (La anon key es publica por diseno, Supabase usa Row Level Security)

window.SIM_CONFIG = {
  SUPABASE_URL: 'https://omfxfiwkwcontpzmneut.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tZnhmaXdrd2NvbnRwem1uZXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTM0NTUsImV4cCI6MjA5MTI2OTQ1NX0.heBWQrCn5xXPdNLNHyzx38FqKqEh5U_JVQa41gJxgk4',

  // Duracion de cada fase en segundos
  PHASE_ANALYSIS: 60,   // todos leen el dilema
  PHASE_PROPOSE:  45,   // ponente elige y justifica
  PHASE_VOTE:     30,   // resto vota
  PHASE_RESULT:   15,   // se muestra el resultado

  POLL_INTERVAL: 3000,  // ms entre polls al servidor durante el juego
  TOTAL_ROUNDS: 30,
  INITIAL_CASH: 500000000,
};
