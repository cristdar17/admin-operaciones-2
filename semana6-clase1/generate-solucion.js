const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak } = require("docx");

const accent = "922B21";
const accent2 = "C0392B";
const dark = "2C3E50";
const gray = "7F8C8D";
const lightBg = "FDEDEC";
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "D5D8DC" };
const borders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

function p(text, opts = {}) {
  const runs = [];
  if (typeof text === "string") {
    runs.push(new TextRun({ text, size: opts.size || 21, font: "Calibri", color: opts.color || dark, bold: opts.bold, italics: opts.italics }));
  } else {
    text.forEach(t => {
      if (typeof t === "string") runs.push(new TextRun({ text: t, size: 21, font: "Calibri", color: dark }));
      else runs.push(new TextRun({ size: 21, font: "Calibri", color: dark, ...t }));
    });
  }
  return new Paragraph({
    spacing: { before: opts.before || 60, after: opts.after || 60, line: 264 },
    alignment: opts.align || AlignmentType.LEFT,
    indent: opts.indent ? { left: opts.indent } : undefined,
    children: runs,
  });
}

function h1(text) {
  return new Paragraph({ spacing: { before: 340, after: 100 }, children: [new TextRun({ text, size: 26, font: "Calibri", bold: true, color: accent })] });
}

function h2(text) {
  return new Paragraph({ spacing: { before: 220, after: 80 }, children: [new TextRun({ text, size: 23, font: "Calibri", bold: true, color: accent2 })] });
}

function formula(text, label) {
  const children = [];
  if (label) children.push(new TextRun({ text: label + "  ", size: 20, font: "Calibri", bold: true, color: accent }));
  children.push(new TextRun({ text, size: 20, font: "Consolas", color: dark }));
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    indent: { left: 360 },
    shading: { type: ShadingType.CLEAR, fill: "F7F9F9" },
    children,
  });
}

function cell(text, opts = {}) {
  return new TableCell({
    borders,
    width: { size: opts.width || 3120, type: WidthType.DXA },
    shading: opts.header ? { fill: accent, type: ShadingType.CLEAR } : opts.alt ? { fill: "FAFAFA", type: ShadingType.CLEAR } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      spacing: { before: 30, after: 30 },
      children: [new TextRun({ text: String(text), size: 19, font: "Calibri", bold: opts.bold || opts.header, color: opts.header ? "FFFFFF" : dark })],
    })],
  });
}

// Variables table
const varsData = [
  ["Variable", "Campa\u00f1a", "Turno", "Nivel"],
  ["x_VM", "Ventas", "Ma\u00f1ana", "Junior"], ["x_VT", "Ventas", "Tarde", "Junior"],
  ["y_VM", "Ventas", "Ma\u00f1ana", "Senior"], ["y_VT", "Ventas", "Tarde", "Senior"],
  ["x_SM", "Soporte", "Ma\u00f1ana", "Junior"], ["x_ST", "Soporte", "Tarde", "Junior"], ["x_SN", "Soporte", "Noche", "Junior"],
  ["y_SM", "Soporte", "Ma\u00f1ana", "Senior"], ["y_ST", "Soporte", "Tarde", "Senior"], ["y_SN", "Soporte", "Noche", "Senior"],
  ["x_RM", "Retenci\u00f3n", "Ma\u00f1ana", "Junior"], ["x_RT", "Retenci\u00f3n", "Tarde", "Junior"],
  ["y_RM", "Retenci\u00f3n", "Ma\u00f1ana", "Senior"], ["y_RT", "Retenci\u00f3n", "Tarde", "Senior"],
  ["x_CM", "Cobranzas", "Ma\u00f1ana", "Junior"], ["x_CT", "Cobranzas", "Tarde", "Junior"], ["x_CN", "Cobranzas", "Noche", "Junior"],
  ["y_CM", "Cobranzas", "Ma\u00f1ana", "Senior"], ["y_CT", "Cobranzas", "Tarde", "Senior"], ["y_CN", "Cobranzas", "Noche", "Senior"],
  ["x_GM", "Gesti\u00f3n Doc.", "Ma\u00f1ana", "Junior"], ["x_GT", "Gesti\u00f3n Doc.", "Tarde", "Junior"],
  ["y_GM", "Gesti\u00f3n Doc.", "Ma\u00f1ana", "Senior"], ["y_GT", "Gesti\u00f3n Doc.", "Tarde", "Senior"],
];

// Summary table
const summaryData = [
  ["Elemento", "Cantidad"],
  ["Variables de decisi\u00f3n", "24"],
  ["Funci\u00f3n objetivo", "Minimizar costo primer mes"],
  ["Restricciones m\u00ednimo por campa\u00f1a", "5"],
  ["Restricciones m\u00ednimo por turno espec\u00edfico", "8"],
  ["Restricciones de calidad (% seniors)", "5"],
  ["Restricci\u00f3n inter-campa\u00f1a", "1"],
  ["Restricciones mercado laboral", "2"],
  ["Restricciones capacidad de sede", "3"],
  ["Restricci\u00f3n tope nocturno", "1"],
  ["Restricci\u00f3n seniors m\u00ednimo por turno", "3"],
  ["Restricci\u00f3n presupuestal", "1"],
  ["No negatividad + integralidad", "2"],
  ["TOTAL RESTRICCIONES", "31"],
];

// Errors table
const errorsData = [
  ["Error com\u00fan", "Por qu\u00e9 pasa"],
  ["Definen 30 variables en vez de 24", "Olvidan que Ventas, Retenci\u00f3n y Gesti\u00f3n Doc. no operan de noche"],
  ["Olvidan la 5\u00aa campa\u00f1a (Gesti\u00f3n Documental)", "Se pierde entre el ruido narrativo"],
  ["No calculan el recargo nocturno", "Les dan el 35% pero no multiplican: base \u00d7 1.35"],
  ["Olvidan el costo de capacitaci\u00f3n", "Lo menciona como dato suelto, no como parte del presupuesto"],
  ["Restricci\u00f3n de % seniors mal linealizada", "Escriben y \u2265 0.3 en vez de y \u2265 0.3(x+y)"],
  ["Olvidan el 50% especial de Gesti\u00f3n Doc.", "Aplican 30% a todas las campa\u00f1as sin leer bien"],
  ["Olvidan restricci\u00f3n Ventas vs Retenci\u00f3n", "Est\u00e1 casi al final, f\u00e1cil de perder"],
  ["Olvidan seniors m\u00ednimos por turno", "Se enfocan en seniors por campa\u00f1a y no por turno"],
  ["Incluyen datos irrelevantes como restricci\u00f3n", "Parqueadero, vigilancia, diademas, etc."],
  ["Usan el dato contradictorio (20 vs 22)", "No detectan que el gerente se corrige"],
  ["Olvidan integralidad", "Formulan todo pero sin decir que son enteras"],
];

// Timeline
const timeData = [
  ["Minuto", "Actividad del docente"],
  ["0-5", "Entregar documento. Lectura en silencio."],
  ["5-10", "Preguntas de clarificaci\u00f3n (solo formato, NO datos)."],
  ["10-25", "Trabajo: identificar variables. Preguntar: \u00bf ya descubrieron cu\u00e1ntas campa\u00f1as son?"],
  ["25-40", "Trabajo: funci\u00f3n objetivo. Soltar: \u00bfel salario nocturno se los dieron calculado?"],
  ["40-60", "Trabajo: restricciones. A los 45 min: \u00bfcu\u00e1ntas llevan? Si < 18, relean."],
  ["55", "Liberar Pista 3 (capacitaci\u00f3n). A los 60 min: \u00bfse acuerdan de Ventas vs Retenci\u00f3n?"],
  ["60-70", "Trabajo: resumen ejecutivo y revisi\u00f3n."],
  ["70-75", "Socializaci\u00f3n: 2-3 estudiantes comparten. \u00bfQui\u00e9n encontr\u00f3 m\u00e1s restricciones?"],
  ["75-80", "Revelar soluci\u00f3n completa. Comparar. Discutir errores."],
];

// Noise items
const noiseItems = [
  ["Dato mencionado", "\u00bfEs restricci\u00f3n?", "Por qu\u00e9"],
  ["Parqueadero $180.000/carro, 8 carros", "NO", "Costo administrativo, no afecta contrataci\u00f3n"],
  ["Vigilancia $3.200.000/mes", "NO", "Gasto de servicios generales"],
  ["Diademas: 20 de 45 entregadas", "NO", "Problema log\u00edstico temporal"],
  ["Arriendo 3er piso: $18M/mes", "NO", "Opci\u00f3n descartada por la financiera"],
  ["Conversion rate del 8%", "NO", "Dato de contexto, no restricci\u00f3n"],
  ["Silla ergon\u00f3mica desaparecida", "NO", "An\u00e9cdota irrelevante"],
  ["Cobranzas: inicialmente 20, luego corregido a 22", "S\u00cd (22)", "Dato contradictorio, aplica el \u00faltimo"],
  ["Productividad baja 20% en noche", "NO", "Dato de contexto, ya cubierto por el tope de 25"],
];

const doc = new Document({
  styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
  sections: [{
    properties: { page: { margin: { top: 1100, right: 1100, bottom: 1100, left: 1100 } } },
    headers: {
      default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [
        new TextRun({ text: "DOCUMENTO DEL DOCENTE \u2014 CONFIDENCIAL", size: 15, font: "Calibri", color: accent2, bold: true }),
      ]})] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "P\u00e1g. ", size: 15, font: "Calibri", color: gray }),
        new TextRun({ children: [PageNumber.CURRENT], size: 15, font: "Calibri", color: gray }),
      ]})] }),
    },
    children: [
      // Title
      new Paragraph({ spacing: { before: 300, after: 40 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "SOLUCI\u00d3N \u2014 Modelo de Programaci\u00f3n Lineal", size: 32, font: "Calibri", bold: true, color: accent })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "\"Tu Primer D\u00eda como Jefe de Operaciones\"", size: 24, font: "Calibri", color: accent2 })] }),
      new Paragraph({ spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Semana 6 \u2014 Administraci\u00f3n de Operaciones 2", size: 18, font: "Calibri", color: gray })] }),

      // Confidential box
      new Table({
        columnWidths: [9360],
        rows: [new TableRow({ children: [new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 2, color: accent2 }, bottom: { style: BorderStyle.SINGLE, size: 2, color: accent2 }, left: { style: BorderStyle.SINGLE, size: 6, color: accent2 }, right: { style: BorderStyle.SINGLE, size: 2, color: accent2 } },
          shading: { fill: lightBg, type: ShadingType.CLEAR },
          width: { size: 9360, type: WidthType.DXA },
          children: [new Paragraph({ spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER, children: [
            new TextRun({ text: "Este documento contiene la soluci\u00f3n completa. NO entregar a estudiantes.", size: 20, font: "Calibri", bold: true, color: accent }),
          ]})],
        })]})],
      }),

      // ============ 1. VARIABLES ============
      h1("1. Variables de Decisi\u00f3n (24 en total)"),
      p("El problema tiene tres dimensiones: campa\u00f1a \u00d7 turno \u00d7 nivel del asesor."),
      p([
        { text: "Campa\u00f1as: ", bold: true }, "Ventas (V), Soporte (S), Retenci\u00f3n (R), Cobranzas (C), Gesti\u00f3n Documental (G)",
      ]),
      p([
        { text: "Turnos: ", bold: true }, "Ma\u00f1ana (M), Tarde (T), Noche (N)",
      ]),
      p([
        { text: "Niveles: ", bold: true }, "Junior (x), Senior (y)",
      ]),
      p([
        { text: "Dato clave: ", bold: true, color: accent },
        "Ventas, Retenci\u00f3n y Gesti\u00f3n Documental NO operan de noche. Esto elimina 6 variables de juniors y 6 de seniors nocturnos = 12 eliminadas. De 30 posibles quedan 24.",
      ], { before: 120 }),
      new Paragraph({ spacing: { before: 120 }, children: [] }),

      new Table({
        columnWidths: [1800, 2400, 2400, 2160],
        rows: varsData.map((row, i) => new TableRow({
          children: [
            cell(row[0], { width: 1800, header: i === 0, bold: i > 0, center: true }),
            cell(row[1], { width: 2400, header: i === 0, center: true, alt: i % 2 === 0 && i > 0 }),
            cell(row[2], { width: 2400, header: i === 0, center: true, alt: i % 2 === 0 && i > 0 }),
            cell(row[3], { width: 2160, header: i === 0, center: true, alt: i % 2 === 0 && i > 0 }),
          ],
        })),
      }),

      // ============ 2. SALARIOS ============
      h1("2. C\u00e1lculo de Salarios (Coeficientes)"),
      p([{ text: "Datos base del texto:", bold: true }]),
      p("Junior d\u00eda (ma\u00f1ana o tarde): $1.400.000/mes", { indent: 360 }),
      p("Senior d\u00eda (ma\u00f1ana o tarde): $2.200.000/mes", { indent: 360 }),
      p("Recargo nocturno: 35%", { indent: 360 }),
      p("Capacitaci\u00f3n por junior: $800.000 (costo \u00fanico, primer mes)", { indent: 360 }),

      p([{ text: "C\u00e1lculos que deben hacer:", bold: true }], { before: 120 }),
      p([{ text: "Junior noche: ", bold: true }, "$1.400.000 \u00d7 1.35 = $1.890.000"], { indent: 360 }),
      p([{ text: "Senior noche: ", bold: true }, "$2.200.000 \u00d7 1.35 = $2.970.000"], { indent: 360 }),

      // ============ 3. FO ============
      h1("3. Funci\u00f3n Objetivo"),
      p([{ text: "Minimizar", bold: true }, " el costo total del primer mes (n\u00f3mina + capacitaci\u00f3n):"]),

      p([{ text: "Componente 1 \u2014 N\u00f3mina mensual:", bold: true, color: accent2 }], { before: 140 }),
      formula("1.400.000 (x_VM + x_VT + x_SM + x_ST + x_RM + x_RT + x_CM + x_CT + x_GM + x_GT)"),
      formula("+ 1.890.000 (x_SN + x_CN)"),
      formula("+ 2.200.000 (y_VM + y_VT + y_SM + y_ST + y_RM + y_RT + y_CM + y_CT + y_GM + y_GT)"),
      formula("+ 2.970.000 (y_SN + y_CN)"),

      p([{ text: "Componente 2 \u2014 Capacitaci\u00f3n (solo juniors):", bold: true, color: accent2 }], { before: 140 }),
      formula("+ 800.000 (x_VM + x_VT + x_SM + x_ST + x_SN + x_RM + x_RT + x_CM + x_CT + x_CN + x_GM + x_GT)"),

      p([{ text: "Funci\u00f3n objetivo completa:", bold: true }], { before: 140 }),
      formula("Min Z = 2.200.000 (x_VM+x_VT+x_SM+x_ST+x_RM+x_RT+x_CM+x_CT+x_GM+x_GT)"),
      formula("       + 2.690.000 (x_SN + x_CN)"),
      formula("       + 2.200.000 (y_VM+y_VT+y_SM+y_ST+y_RM+y_RT+y_CM+y_CT+y_GM+y_GT)"),
      formula("       + 2.970.000 (y_SN + y_CN)"),

      p([
        { text: "Nota: ", bold: true, color: accent },
        "Los juniors diurnos cuestan $1.400.000 (salario) + $800.000 (capacitaci\u00f3n) = $2.200.000 en el primer mes. Los juniors nocturnos: $1.890.000 + $800.000 = $2.690.000. Los seniors no tienen costo de capacitaci\u00f3n. Coincidencia: junior d\u00eda + capacitaci\u00f3n = senior d\u00eda ($2.200.000). Esto puede confundir a algunos estudiantes.",
      ], { before: 120 }),

      // ============ 4. RESTRICCIONES ============
      new Paragraph({ children: [new PageBreak()] }),
      h1("4. Restricciones"),

      h2("4.1 M\u00ednimos por campa\u00f1a (R1\u2013R5)"),
      formula("x_VM + x_VT + y_VM + y_VT \u2265 30", "(R1) Ventas:"),
      formula("x_SM + x_ST + x_SN + y_SM + y_ST + y_SN \u2265 28", "(R2) Soporte:"),
      formula("x_RM + x_RT + y_RM + y_RT \u2265 20", "(R3) Retenci\u00f3n:"),
      formula("x_CM + x_CT + x_CN + y_CM + y_CT + y_CN \u2265 22", "(R4) Cobranzas:"),
      formula("x_GM + x_GT + y_GM + y_GT \u2265 15", "(R5) Gesti\u00f3n Doc.:"),

      h2("4.2 M\u00ednimos por turno espec\u00edfico (R6\u2013R13)"),
      formula("x_VT + y_VT \u2265 14", "(R6) Ventas tarde:"),
      formula("x_SM + y_SM \u2265 8", "(R7) Soporte ma\u00f1ana:"),
      formula("x_ST + y_ST \u2265 8", "(R8) Soporte tarde:"),
      formula("x_SN + y_SN \u2265 8", "(R9) Soporte noche:"),
      formula("x_RM + y_RM \u2265 9", "(R10) Retenci\u00f3n ma\u00f1ana:"),
      formula("x_CM + y_CM \u2265 10", "(R11) Cobranzas ma\u00f1ana:"),
      formula("x_CT + y_CT \u2265 7", "(R12) Cobranzas tarde:"),
      formula("x_GM + y_GM \u2265 6", "(R13a) G. Doc. ma\u00f1ana:"),
      formula("x_GT + y_GT \u2265 6", "(R13b) G. Doc. tarde:"),

      h2("4.3 Calidad: % seniors por campa\u00f1a (R14\u2013R18)"),
      p("La condici\u00f3n \u00ababal menos 30% seniors\u00bb se linealiza as\u00ed:"),
      formula("seniors \u2265 0.30 \u00d7 (juniors + seniors)"),
      formula("0.70 \u00d7 seniors \u2265 0.30 \u00d7 juniors"),
      formula("7 \u00d7 seniors \u2265 3 \u00d7 juniors    (multiplicando por 10)"),

      p("Aplicando a cada campa\u00f1a (30% para V, S, R, C \u2014 50% para G):", { before: 100 }),
      formula("7(y_VM + y_VT) \u2265 3(x_VM + x_VT)", "(R14) Ventas 30%:"),
      formula("7(y_SM + y_ST + y_SN) \u2265 3(x_SM + x_ST + x_SN)", "(R15) Soporte 30%:"),
      formula("7(y_RM + y_RT) \u2265 3(x_RM + x_RT)", "(R16) Retenci\u00f3n 30%:"),
      formula("7(y_CM + y_CT + y_CN) \u2265 3(x_CM + x_CT + x_CN)", "(R17) Cobranzas 30%:"),
      formula("y_GM + y_GT \u2265 x_GM + x_GT", "(R18) G. Doc. 50%:"),
      p([
        { text: "Nota R18: ", bold: true, color: accent },
        "50% seniors significa seniors \u2265 0.5(juniors+seniors) \u2192 seniors \u2265 juniors. M\u00e1s simple que las del 30%.",
      ]),

      h2("4.4 Inter-campa\u00f1a: seniors Ventas vs Retenci\u00f3n (R19)"),
      formula("y_VM + y_VT - y_RM - y_RT \u2265 5", "(R19)"),

      h2("4.5 Mercado laboral (R20\u2013R21)"),
      formula("x_VM+x_VT+x_SM+x_ST+x_SN+x_RM+x_RT+x_CM+x_CT+x_CN+x_GM+x_GT \u2264 65", "(R20) Juniors:"),
      formula("y_VM+y_VT+y_SM+y_ST+y_SN+y_RM+y_RT+y_CM+y_CT+y_CN+y_GM+y_GT \u2264 40", "(R21) Seniors:"),

      h2("4.6 Capacidad de sede por turno (R22\u2013R24)"),
      formula("x_VM+y_VM+x_SM+y_SM+x_RM+y_RM+x_CM+y_CM+x_GM+y_GM \u2264 45", "(R22) Ma\u00f1ana:"),
      formula("x_VT+y_VT+x_ST+y_ST+x_RT+y_RT+x_CT+y_CT+x_GT+y_GT \u2264 45", "(R23) Tarde:"),
      formula("x_SN+y_SN+x_CN+y_CN \u2264 45", "(R24) Noche:"),
      p("(R24 es redundante con R25, pero es v\u00e1lido incluirla.)"),

      h2("4.7 Tope nocturno (R25)"),
      formula("x_SN + y_SN + x_CN + y_CN \u2264 25", "(R25)"),

      h2("4.8 Seniors m\u00ednimos por turno (R26\u2013R28)"),
      formula("y_VM + y_SM + y_RM + y_CM + y_GM \u2265 3", "(R26) Ma\u00f1ana:"),
      formula("y_VT + y_ST + y_RT + y_CT + y_GT \u2265 3", "(R27) Tarde:"),
      formula("y_SN + y_CN \u2265 3", "(R28) Noche:"),

      h2("4.9 Presupuesto total primer mes (R29)"),
      p("N\u00f3mina + capacitaci\u00f3n \u2264 $200.000.000:"),
      formula("2.200.000(x_VM+x_VT+x_SM+x_ST+x_RM+x_RT+x_CM+x_CT+x_GM+x_GT)", "(R29)"),
      formula("+ 2.690.000(x_SN+x_CN)"),
      formula("+ 2.200.000(y_VM+y_VT+y_SM+y_ST+y_RM+y_RT+y_CM+y_CT+y_GM+y_GT)"),
      formula("+ 2.970.000(y_SN+y_CN) \u2264 200.000.000"),

      h2("4.10 No negatividad e integralidad (R30\u2013R31)"),
      formula("Todas las variables \u2265 0", "(R30)"),
      formula("Todas las variables son enteras", "(R31)"),

      // ============ 5. RESUMEN ============
      new Paragraph({ children: [new PageBreak()] }),
      h1("5. Resumen del Modelo"),
      new Table({
        columnWidths: [5800, 3560],
        rows: summaryData.map((row, i) => new TableRow({
          children: [
            cell(row[0], { width: 5800, header: i === 0, bold: i === summaryData.length - 1 }),
            cell(row[1], { width: 3560, header: i === 0, center: true, bold: i === summaryData.length - 1, alt: i % 2 === 0 && i > 0 }),
          ],
        })),
      }),

      // ============ 6. RUIDO ============
      h1("6. Informaci\u00f3n Irrelevante (Ruido)"),
      p("El gerente menciona varios datos que NO son restricciones del modelo. Los estudiantes deben filtrarlos:"),
      new Paragraph({ spacing: { before: 100 }, children: [] }),
      new Table({
        columnWidths: [3600, 1400, 4360],
        rows: noiseItems.map((row, i) => new TableRow({
          children: [
            cell(row[0], { width: 3600, header: i === 0 }),
            cell(row[1], { width: 1400, header: i === 0, center: true, bold: i > 0 }),
            cell(row[2], { width: 4360, header: i === 0, alt: i % 2 === 0 && i > 0 }),
          ],
        })),
      }),

      // ============ 7. ERRORES ============
      h1("7. Errores Comunes"),
      p("Estos son los errores que vas a ver con m\u00e1s frecuencia:"),
      new Paragraph({ spacing: { before: 100 }, children: [] }),
      new Table({
        columnWidths: [4200, 5160],
        rows: errorsData.map((row, i) => new TableRow({
          children: [
            cell(row[0], { width: 4200, header: i === 0, bold: i > 0 }),
            cell(row[1], { width: 5160, header: i === 0, alt: i % 2 === 0 && i > 0 }),
          ],
        })),
      }),

      // ============ 8. TIMELINE ============
      h1("8. Gu\u00eda de Tiempos"),
      new Table({
        columnWidths: [1400, 7960],
        rows: timeData.map((row, i) => new TableRow({
          children: [
            cell(row[0], { width: 1400, header: i === 0, center: true, bold: i > 0 }),
            cell(row[1], { width: 7960, header: i === 0, alt: i % 2 === 0 && i > 0 }),
          ],
        })),
      }),

      // ============ 9. INTERVENCIONES ============
      h1("9. Intervenciones Sugeridas"),
      p("Mientras trabajan, circul\u00e1 por el sal\u00f3n. No des respuestas, pero solt\u00e1 estas frases:", { before: 100 }),
      p([{ text: "Minuto 15: ", bold: true }, "\"\u00bfYa tienen claro cu\u00e1ntas campa\u00f1as son? Cuenten bien.\""], { indent: 360, before: 100 }),
      p([{ text: "Minuto 25: ", bold: true }, "\"\u00bfTodo lo que dijo el gerente es relevante para el modelo?\""], { indent: 360 }),
      p([{ text: "Minuto 35: ", bold: true }, "\"\u00bfEl salario nocturno se los dieron calculado o les toca sacarlo?\""], { indent: 360 }),
      p([{ text: "Minuto 45: ", bold: true }, "\"\u00bfCu\u00e1ntas restricciones llevan? Si llevan menos de 18, relean el texto.\""], { indent: 360 }),
      p([{ text: "Minuto 55: ", bold: true }, "\"\u00bfYa contaron el costo de capacitaci\u00f3n? \u00bfSe acuerdan de la condici\u00f3n de CelPro sobre Ventas y Retenci\u00f3n?\""], { indent: 360 }),
      p([{ text: "Minuto 65: ", bold: true }, "\"\u00bfGesti\u00f3n Documental tiene el mismo % de seniors que las dem\u00e1s?\""], { indent: 360 }),

      // ============ 10. FACTIBILIDAD ============
      h1("10. Verificaci\u00f3n de Factibilidad"),
      p("Para confirmar que el problema tiene soluci\u00f3n:"),
      p([{ text: "Total m\u00ednimo: ", bold: true }, "30 + 28 + 20 + 22 + 15 = 115 personas"]),
      p([{ text: "Seniors m\u00ednimos (30% de 4 campa\u00f1as + 50% de G.Doc.): ", bold: true }, "\u224810 + 9 + 6 + 7 + 8 = ~40 seniors"]),
      p([{ text: "Juniors: ", bold: true }, "115 \u2212 40 = ~75, pero el l\u00edmite es 65 \u2192 hay que subir seniors"]),
      p([{ text: "Presupuesto: ", bold: true }, "~115 personas \u00d7 ~$1.8M promedio + capacitaci\u00f3n \u2248 $200M \u2192 ajustado pero factible"]),
      p([
        { text: "Conclusi\u00f3n: ", bold: true, color: accent },
        "El problema es factible pero apretado. El l\u00edmite de 65 juniors obliga a contratar m\u00e1s seniors (m\u00e1s caros), lo que tensa el presupuesto. No se resuelve trivialmente poniendo m\u00ednimos en todo.",
      ], { before: 120 }),
      p("Pr\u00f3ximo paso natural: resolver con Solver de Excel o software de PL en la siguiente clase.", { before: 100, italics: true }),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:/Users/Usuario UTP/Desktop/clases/Administración de operaciones 2/semana6-clase1/Solucion_Modelo_PL.docx", buffer);
  console.log("Soluci\u00f3n generada OK");
});
