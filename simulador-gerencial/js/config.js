// =====================================================
// CONFIGURACION - EDITA AQUI DESPUES DE DESPLEGAR
// =====================================================
// 1. Crea un Google Sheet en blanco
// 2. Extensiones -> Apps Script
// 3. Pega el contenido de apps-script/Code.gs
// 4. Implementar -> Nueva implementacion -> Tipo: App web
//    - Ejecutar como: Yo
//    - Quien tiene acceso: Cualquier usuario
// 5. Copia la URL que te da y pegala abajo:

window.SIM_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbz1q46hJeI0JaJO_5M-s-OjjUsQYpFQwwyhRwXmseRIf2z4uMMVtB2fKOnuS_14Cnuo/exec',

  // Duracion de cada fase en segundos
  PHASE_ANALYSIS: 60,   // todos leen el dilema
  PHASE_PROPOSE:  45,   // ponente elige y justifica
  PHASE_VOTE:     30,   // resto vota
  PHASE_RESULT:   15,   // se muestra el resultado

  POLL_INTERVAL: 2500,  // ms entre polls al servidor durante el juego
  TOTAL_ROUNDS: 30,
  INITIAL_CASH: 500000000,
};
