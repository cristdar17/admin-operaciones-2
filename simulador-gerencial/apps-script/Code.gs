/**
 * Simulador Gerencial - Backend Apps Script
 * Despliega como Web App: Ejecutar como YO, Acceso CUALQUIERA (incluso anónimo)
 * Copia la URL del despliegue y pégala en js/config.js -> API_URL
 */

const SHEET_NAMES = {
  GAME: 'Game',
  STUDENTS: 'Students',
  COMPANIES: 'Companies',
  ROUNDS: 'Rounds',
  LOG: 'Log',
};

const COMPANIES_DEF = [
  { id: 1, name: 'Café Pereira Origen', emoji: '☕' },
  { id: 2, name: 'DomiYa', emoji: '🛵' },
  { id: 3, name: 'Maderas del Otún', emoji: '🪑' },
  { id: 4, name: 'Risa Wear', emoji: '👗' },
  { id: 5, name: 'Constructora Nevado', emoji: '🏗️' },
];

const INITIAL_CASH = 500000000; // 500 millones COP
const TOTAL_ROUNDS = 30;

// =====================================================
// ENTRY POINTS
// =====================================================

function doGet(e) {
  return handleRequest_(e);
}

function doPost(e) {
  return handleRequest_(e);
}

// Acciones que NO requieren lock (solo lectura)
const READ_ONLY_ACTIONS = ['state', 'ping'];

function handleRequest_(e) {
  try {
    const params = parseParams_(e);
    const action = params.action || 'state';

    // Lecturas: sin lock, ejecucion concurrente
    if (READ_ONLY_ACTIONS.indexOf(action) >= 0) {
      ensureSheets_();
      let result;
      if (action === 'ping') result = { ok: true, pong: new Date().toISOString() };
      else if (action === 'state') result = actionState_(params);
      return jsonOut_(result);
    }

    // Escrituras: con lock corto, reintentos silenciosos
    const lock = LockService.getScriptLock();
    let acquired = false;
    try {
      lock.waitLock(8000);
      acquired = true;
    } catch (_) {
      return jsonOut_({ ok: false, error: 'Servidor ocupado, reintenta', retry: true });
    }
    try {
      ensureSheets_();
      let result;
      switch (action) {
        case 'join':    result = actionJoin_(params); break;
        case 'propose': result = actionPropose_(params); break;
        case 'vote':    result = actionVote_(params); break;
        case 'resolve': result = actionResolve_(params); break;
        case 'start':   result = actionStart_(params); break;
        case 'next':    result = actionNext_(params); break;
        case 'pause':   result = actionPause_(params); break;
        case 'reset':   result = actionReset_(params); break;
        default:        result = { ok: false, error: 'accion desconocida: ' + action };
      }
      return jsonOut_(result);
    } finally {
      if (acquired) { try { lock.releaseLock(); } catch (_) {} }
    }
  } catch (err) {
    return jsonOut_({ ok: false, error: String((err && err.message) || err) });
  }
}

function parseParams_(e) {
  const params = {};
  if (e && e.parameter) Object.assign(params, e.parameter);
  if (e && e.postData && e.postData.contents) {
    try {
      const body = JSON.parse(e.postData.contents);
      if (body && typeof body === 'object') Object.assign(params, body);
    } catch (_) {}
  }
  return params;
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// =====================================================
// SHEET BOOTSTRAPPING
// =====================================================

function ensureSheets_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ensureSheet_(ss, SHEET_NAMES.GAME, ['key', 'value']);
  ensureSheet_(ss, SHEET_NAMES.STUDENTS, ['id', 'name', 'company', 'joined_at', 'votes_cast', 'times_proponent', 'last_seen']);
  ensureSheet_(ss, SHEET_NAMES.COMPANIES, ['id', 'name', 'emoji', 'cash', 'alive', 'decisions', 'tags']);
  ensureSheet_(ss, SHEET_NAMES.ROUNDS, ['company', 'round', 'role', 'dilemma_id', 'phase', 'phase_started_at', 'proponent_id', 'proposal', 'justification', 'votes_json', 'final_choice', 'delta', 'narrative', 'resolved_at']);
  ensureSheet_(ss, SHEET_NAMES.LOG, ['ts', 'type', 'payload']);

  // Inicializar Game si esta vacio
  const game = ss.getSheetByName(SHEET_NAMES.GAME);
  if (game.getLastRow() < 2) {
    game.appendRow(['status', 'lobby']);
    game.appendRow(['round', 0]);
    game.appendRow(['started_at', '']);
  }

  // Inicializar empresas si estan vacias
  const companies = ss.getSheetByName(SHEET_NAMES.COMPANIES);
  if (companies.getLastRow() < 2) {
    COMPANIES_DEF.forEach(function (c) {
      companies.appendRow([c.id, c.name, c.emoji, INITIAL_CASH, true, 0, '']);
    });
  }
}

function ensureSheet_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

// =====================================================
// HELPERS
// =====================================================

function getSheet_(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function readAll_(name) {
  const sh = getSheet_(name);
  const values = sh.getDataRange().getValues();
  if (values.length <= 1) return [];
  const headers = values[0];
  return values.slice(1).map(function (row) {
    const obj = {};
    headers.forEach(function (h, i) { obj[h] = row[i]; });
    return obj;
  });
}

function getGameMap_() {
  const rows = readAll_(SHEET_NAMES.GAME);
  const map = {};
  rows.forEach(function (r) { map[r.key] = r.value; });
  return map;
}

function setGameValue_(key, value) {
  const sh = getSheet_(SHEET_NAMES.GAME);
  const data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) {
      sh.getRange(i + 1, 2).setValue(value);
      return;
    }
  }
  sh.appendRow([key, value]);
}

function logEvent_(type, payload) {
  getSheet_(SHEET_NAMES.LOG).appendRow([new Date().toISOString(), type, JSON.stringify(payload || {})]);
}

function uuid_() {
  return Utilities.getUuid().substring(0, 8);
}

// =====================================================
// ACTIONS
// =====================================================

function actionJoin_(p) {
  const name = String(p.name || '').trim();
  const company = parseInt(p.company, 10);
  if (!name) return { ok: false, error: 'Nombre requerido' };
  if (!(company >= 1 && company <= 5)) return { ok: false, error: 'Empresa invalida' };

  const sh = getSheet_(SHEET_NAMES.STUDENTS);
  // Verificar duplicado por nombre+empresa
  const existing = readAll_(SHEET_NAMES.STUDENTS).find(function (s) {
    return String(s.name).toLowerCase() === name.toLowerCase() && Number(s.company) === company;
  });
  if (existing) {
    sh.getRange(findRowById_(sh, existing.id), 7).setValue(new Date().toISOString());
    return { ok: true, studentId: existing.id, rejoined: true };
  }
  const id = uuid_();
  sh.appendRow([id, name, company, new Date().toISOString(), 0, 0, new Date().toISOString()]);
  logEvent_('join', { id: id, name: name, company: company });
  return { ok: true, studentId: id };
}

function findRowById_(sh, id) {
  const data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) return i + 1;
  }
  return -1;
}

function actionState_(p) {
  // Solo lectura - sin heartbeat para evitar writes en cada poll
  return {
    ok: true,
    game: getGameMap_(),
    students: readAll_(SHEET_NAMES.STUDENTS),
    companies: readAll_(SHEET_NAMES.COMPANIES),
    rounds: readAll_(SHEET_NAMES.ROUNDS),
    serverTime: new Date().toISOString(),
  };
}

function actionStart_(p) {
  setGameValue_('status', 'playing');
  setGameValue_('round', 1);
  setGameValue_('started_at', new Date().toISOString());
  logEvent_('start', {});
  return { ok: true };
}

function actionPause_(p) {
  const game = getGameMap_();
  setGameValue_('status', game.status === 'paused' ? 'playing' : 'paused');
  return { ok: true };
}

function actionReset_(p) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  [SHEET_NAMES.STUDENTS, SHEET_NAMES.ROUNDS, SHEET_NAMES.LOG].forEach(function (n) {
    const sh = ss.getSheetByName(n);
    if (sh && sh.getLastRow() > 1) {
      sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
    }
  });
  // Reset companies cash
  const ch = ss.getSheetByName(SHEET_NAMES.COMPANIES);
  if (ch && ch.getLastRow() > 1) {
    ch.getRange(2, 1, ch.getLastRow() - 1, ch.getLastColumn()).clearContent();
    COMPANIES_DEF.forEach(function (c) {
      ch.appendRow([c.id, c.name, c.emoji, INITIAL_CASH, true, 0, '']);
    });
  }
  setGameValue_('status', 'lobby');
  setGameValue_('round', 0);
  setGameValue_('started_at', '');
  logEvent_('reset', {});
  return { ok: true };
}

function actionNext_(p) {
  const game = getGameMap_();
  const cur = parseInt(game.round, 10) || 0;
  const next = cur + 1;
  if (next > TOTAL_ROUNDS) {
    setGameValue_('status', 'ended');
    return { ok: true, ended: true };
  }
  setGameValue_('round', next);
  logEvent_('next', { round: next });
  return { ok: true, round: next };
}

function actionPropose_(p) {
  const company = parseInt(p.company, 10);
  const round = parseInt(p.round, 10);
  const choice = String(p.choice || '').toUpperCase();
  const proponentId = String(p.studentId || '');
  const dilemmaId = String(p.dilemmaId || '');
  const justification = String(p.justification || '').slice(0, 280);
  if (!['A','B','C','D'].includes(choice)) return { ok:false, error:'choice invalido' };

  const sh = getSheet_(SHEET_NAMES.ROUNDS);
  const existing = findRoundRow_(sh, company, round);
  const votes = {};
  votes[proponentId] = choice; // el ponente vota su propia propuesta
  if (existing > 0) {
    sh.getRange(existing, 5, 1, 6).setValues([['voting', new Date().toISOString(), proponentId, choice, justification, JSON.stringify(votes)]]);
  } else {
    sh.appendRow([company, round, p.role || '', dilemmaId, 'voting', new Date().toISOString(), proponentId, choice, justification, JSON.stringify(votes), '', '', '', '']);
  }
  // Incrementar contador de ponente
  bumpStudent_(proponentId, 'times_proponent');
  bumpStudent_(proponentId, 'votes_cast');
  return { ok: true };
}

function actionVote_(p) {
  const company = parseInt(p.company, 10);
  const round = parseInt(p.round, 10);
  const studentId = String(p.studentId || '');
  const vote = String(p.vote || '').toUpperCase();
  if (!['A','B','C','D'].includes(vote)) return { ok:false, error:'voto invalido' };

  const sh = getSheet_(SHEET_NAMES.ROUNDS);
  const row = findRoundRow_(sh, company, round);
  if (row < 0) return { ok:false, error:'ronda no inicializada' };
  const votesCell = sh.getRange(row, 10).getValue();
  const votes = votesCell ? JSON.parse(votesCell) : {};
  if (votes[studentId]) return { ok: true, alreadyVoted: true };
  votes[studentId] = vote;
  sh.getRange(row, 10).setValue(JSON.stringify(votes));
  bumpStudent_(studentId, 'votes_cast');
  return { ok: true };
}

function actionResolve_(p) {
  const company = parseInt(p.company, 10);
  const round = parseInt(p.round, 10);
  const finalChoice = String(p.finalChoice || '').toUpperCase();
  const delta = Number(p.delta) || 0;
  const narrative = String(p.narrative || '').slice(0, 500);

  const sh = getSheet_(SHEET_NAMES.ROUNDS);
  const row = findRoundRow_(sh, company, round);
  if (row < 0) return { ok:false, error:'ronda no encontrada' };

  // Idempotencia: si ya esta resuelta, no aplicar de nuevo
  const phase = sh.getRange(row, 5).getValue();
  if (phase === 'resolved') return { ok: true, alreadyResolved: true };

  sh.getRange(row, 5).setValue('resolved');
  sh.getRange(row, 11).setValue(finalChoice);
  sh.getRange(row, 12).setValue(delta);
  sh.getRange(row, 13).setValue(narrative);
  sh.getRange(row, 14).setValue(new Date().toISOString());

  // Actualizar caja de la empresa
  const ch = getSheet_(SHEET_NAMES.COMPANIES);
  const cdata = ch.getDataRange().getValues();
  for (let i = 1; i < cdata.length; i++) {
    if (Number(cdata[i][0]) === company) {
      const newCash = Number(cdata[i][3]) + delta;
      ch.getRange(i + 1, 4).setValue(newCash);
      ch.getRange(i + 1, 6).setValue(Number(cdata[i][5]) + 1);
      if (newCash <= 0) ch.getRange(i + 1, 5).setValue(false);
      break;
    }
  }
  return { ok: true };
}

function findRoundRow_(sh, company, round) {
  const data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (Number(data[i][0]) === company && Number(data[i][1]) === round) return i + 1;
  }
  return -1;
}

function bumpStudent_(id, field) {
  if (!id) return;
  const sh = getSheet_(SHEET_NAMES.STUDENTS);
  const data = sh.getDataRange().getValues();
  const headers = data[0];
  const col = headers.indexOf(field) + 1;
  if (col <= 0) return;
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sh.getRange(i + 1, col).setValue((Number(data[i][col - 1]) || 0) + 1);
      return;
    }
  }
}
