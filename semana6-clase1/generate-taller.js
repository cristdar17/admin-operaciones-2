const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak } = require("docx");

const accent = "1B4F72";
const accent2 = "2E86C1";
const gray = "5D6D7E";
const lightBg = "EBF5FB";
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "B0BEC5" };
const borders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

function p(text, opts = {}) {
  const runs = [];
  if (typeof text === "string") {
    runs.push(new TextRun({ text, size: opts.size || 22, font: "Calibri", color: opts.color || "2C3E50", bold: opts.bold, italics: opts.italics }));
  } else {
    text.forEach(t => {
      if (typeof t === "string") runs.push(new TextRun({ text: t, size: opts.size || 22, font: "Calibri", color: opts.color || "2C3E50" }));
      else runs.push(new TextRun({ size: 22, font: "Calibri", color: "2C3E50", ...t }));
    });
  }
  return new Paragraph({
    spacing: { before: opts.before || 80, after: opts.after || 80, line: opts.line || 276 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    indent: opts.indent ? { left: opts.indent } : undefined,
    children: runs,
  });
}

function subheading(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, size: 22, font: "Calibri", bold: true, color: accent2 })],
  });
}

function heading(text) {
  return new Paragraph({
    spacing: { before: 360, after: 120 },
    children: [new TextRun({ text, size: 28, font: "Calibri", bold: true, color: accent })],
  });
}

function d(parts) {
  const runs = parts.map(part => {
    if (typeof part === "string") return new TextRun({ text: part, size: 22, font: "Calibri", color: "2C3E50", italics: true });
    return new TextRun({ size: 22, font: "Calibri", color: "2C3E50", italics: true, ...part });
  });
  return new Paragraph({
    spacing: { before: 100, after: 100, line: 276 },
    alignment: AlignmentType.JUSTIFIED,
    indent: { left: 360 },
    children: runs,
  });
}

function separator() {
  return new Paragraph({
    spacing: { before: 160, after: 160 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "\u2014 \u2014 \u2014", size: 20, font: "Calibri", color: "B0BEC5" })],
  });
}

function cell(text, opts = {}) {
  return new TableCell({
    borders,
    width: { size: opts.width || 4680, type: WidthType.DXA },
    shading: opts.header ? { fill: accent, type: ShadingType.CLEAR } : opts.alt ? { fill: lightBg, type: ShadingType.CLEAR } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      spacing: { before: 40, after: 40 },
      children: [new TextRun({ text: String(text), size: 20, font: "Calibri", bold: opts.bold || opts.header, color: opts.header ? "FFFFFF" : "2C3E50" })],
    })],
  });
}

// =================== NARRATIVE ===================
const narrative = [
  new Paragraph({
    spacing: { before: 200, after: 200 },
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: "[ La siguiente es la transcripci\u00f3n de la reuni\u00f3n con el Gerente General. ", size: 20, font: "Calibri", italics: true, color: gray }),
      new TextRun({ text: "Lee con atenci\u00f3n: todos los datos que necesitas est\u00e1n aqu\u00ed, pero no todos los datos que leas son relevantes. ]", size: 20, font: "Calibri", italics: true, color: gray }),
    ],
  }),

  separator(),

  // INTRO + RUIDO
  d([
    "\"Bienvenido a TalentoConnect. Sent\u00e1te, sent\u00e1te. \u00bfQuer\u00e9s un tinto? La muchacha de la cafeter\u00eda hace uno bueno, aunque desde que subieron el arriendo del local ella est\u00e1 que se queja todos los d\u00edas... en fin, eso no es tu problema. Tu problema es otro.",
  ]),

  d([
    "Mir\u00e1, te voy a ser honesto: te contrat\u00e9 porque necesito a alguien que piense con n\u00fameros, no con el est\u00f3mago. El anterior jefe de operaciones me armaba todo en la cabeza y al final siempre nos faltaba gente o nos sobraba plata gastada de m\u00e1s. Eso no puede volver a pasar.",
  ]),

  d([
    "Dej\u00e1me contarte d\u00f3nde estamos parados. Hace tres semanas nos ganamos el contrato m\u00e1s grande en la historia de esta empresa. ",
    { text: "CelPro", bold: true },
    ", la operadora de telecomunicaciones, nos adjudic\u00f3 la operaci\u00f3n completa de su centro de contacto para el Eje Cafetero. Nos ganamos la licitaci\u00f3n por encima de Teleperformance y de Atento, que estaban furiosos. Bueno, eso tampoco es tu problema. Tu problema es que esto es un monstruo: ",
    { text: "cinco campa\u00f1as diferentes", bold: true },
    " que tenemos que montar desde cero. Y el plazo para estar operando al cien por ciento es seis semanas. Seis.\"",
  ]),

  separator(),

  // RUIDO - ANECDOTA DEL PARQUEADERO
  d([
    "\"Antes de meterme en el tema, dej\u00e1me contarte algo que me tiene estresado: el parqueadero de la Zona Franca nos est\u00e1 cobrando $180.000 mensuales por cada carro. Tenemos 8 carros de la empresa parqueados ah\u00ed, o sea un mill\u00f3n cuatrocientos cuarenta mil pesos mensuales bot\u00e1ndolos en parqueadero. Le dije a Do\u00f1a Margarita, la directora financiera, que negociara, pero dice que no se puede. Bueno, sigamos con lo tuyo.\"",
  ]),

  separator(),
  subheading("Las cinco campa\u00f1as"),

  d([
    "\"Las cinco campa\u00f1as son: ",
    { text: "Ventas, Soporte T\u00e9cnico, Retenci\u00f3n, Cobranzas y Gesti\u00f3n Documental", bold: true },
    ". Cada una tiene su propia din\u00e1mica y sus propias exigencias. Dej\u00e1me explicarte c\u00f3mo funciona cada una.\"",
  ]),

  separator(),
  subheading("Ventas"),

  d([
    "\"Ventas es la joya de la corona de este contrato. CelPro nos paga una comisi\u00f3n por cada plan vendido, y ac\u00e1 es donde est\u00e1 la plata. El a\u00f1o pasado, cuando hac\u00edamos la operaci\u00f3n de TeleSur \u2014 que al final nos cancel\u00f3 el contrato porque se fusionaron con otra empresa, pero eso es otra historia \u2014 ten\u00edamos un equipo de ventas de 18 personas y no d\u00e1bamos abasto. Ahora CelPro es m\u00e1s grande.",
  ]),

  d([
    "El contrato establece que necesitamos ",
    { text: "al menos 30 asesores", bold: true },
    " dedicados a Ventas. Ahora, la realidad del negocio es que las ventas se disparan despu\u00e9s del mediod\u00eda \u2014 la gente sale a almorzar, revisa el celular, y ah\u00ed es cuando nos contestan. CelPro hizo un an\u00e1lisis con una consultora de Bogot\u00e1 que les cobr\u00f3 un dineral, pero bueno, el resultado es que nos exigen que en el ",
    { text: "turno de la tarde tengamos m\u00ednimo 14 personas", bold: true },
    " vendiendo, porque es cuando el conversion rate est\u00e1 por encima del 8%.",
  ]),

  d([
    "De hecho, hablando de la noche: ",
    { text: "Ventas no opera en horario nocturno", bold: true },
    ". No tiene sentido llamar a la gente a las 11 de la noche para venderles un plan de datos. CelPro lo tiene claro y nosotros tambi\u00e9n. As\u00ed que en Ventas solo manejamos turno de ma\u00f1ana y de tarde.\"",
  ]),

  separator(),
  subheading("Soporte T\u00e9cnico"),

  d([
    "\"Esta campa\u00f1a s\u00ed es 24/7. Cuando a alguien se le cae el internet a las 3 de la ma\u00f1ana, llama furioso y necesita a alguien al otro lado. Me acuerdo una vez que un cliente llam\u00f3 a las 4 AM y le contest\u00f3 un practicante que estaba medio dormido... le cambi\u00f3 el plan sin querer y el tipo termin\u00f3 pagando el doble. CelPro casi nos cancela por eso. Por eso ahora son tan exigentes.",
  ]),

  d([
    "CelPro nos exige ",
    { text: "m\u00ednimo 28 asesores en total", bold: true },
    " para Soporte, pero adem\u00e1s \u2014 y esto no es negociable \u2014 necesitan que en ",
    { text: "cada turno haya al menos 8 personas", bold: true },
    ". Me lo dijeron as\u00ed textual: 'Si en alg\u00fan turno tienen menos de 8, el SLA se revienta y hay penalizaci\u00f3n'. Los tres turnos: ma\u00f1ana, tarde y noche. Sin excepci\u00f3n.\"",
  ]),

  separator(),
  subheading("Retenci\u00f3n"),

  d([
    "\"Retenci\u00f3n es el equipo que llama a los clientes que quieren cancelar el servicio. Es un trabajo delicado, necesita gente con buena labia y paciencia. El mes pasado hice una prueba poniendo gente nueva en retenci\u00f3n y fue un desastre \u2014 se les iban los clientes como agua entre los dedos.",
  ]),

  d([
    "CelPro nos pide... a ver, dej\u00e1me revisar... ",
    { text: "m\u00ednimo 20 asesores", bold: true },
    " para Retenci\u00f3n. Ac\u00e1 pasa algo interesante: los clientes que quieren cancelar, en su mayor\u00eda, llaman temprano. Pagan la factura por la ma\u00f1ana, ven el cobro, se enojan y llaman a cancelar. Por eso en la ",
    { text: "ma\u00f1ana necesitamos al menos 9 personas", bold: true },
    " en Retenci\u00f3n.",
  ]),

  d([
    "Y al igual que Ventas, ",
    { text: "Retenci\u00f3n no opera de noche", bold: true },
    ". A las 10 de la noche no vas a llamar a alguien para convencerlo de que no cancele. Solo ma\u00f1ana y tarde.\"",
  ]),

  separator(),
  subheading("Cobranzas"),

  d([
    "\"La campa\u00f1a de Cobranzas es la m\u00e1s intensa emocionalmente. Llamar a cobrar no es f\u00e1cil. Aqu\u00ed la rotaci\u00f3n de personal es alt\u00edsima, la gente se quema r\u00e1pido. El otro d\u00eda un asesor renunci\u00f3 a mitad de turno porque un cliente lo insult\u00f3 feo. Pero bueno, toca.",
  ]),

  d([
    "CelPro nos exige... no, esper\u00e1, me confund\u00ed. Inicialmente me dijeron 20, pero la semana pasada actualizaron el anexo del contrato. Son ",
    { text: "al menos 22 asesores", bold: true },
    " en total. La estrategia de cobro tiene dos picos: la gente est\u00e1 en su casa por la ma\u00f1ana antes de salir a trabajar y tambi\u00e9n en la noche cuando llegan. As\u00ed que Cobranzas s\u00ed opera en los ",
    { text: "tres turnos", bold: true },
    ".",
  ]),

  d([
    "Pero ojo: la efectividad del cobro es mayor temprano. Por eso el equipo de Cobranzas necesita ",
    { text: "m\u00ednimo 10 personas en el turno de la ma\u00f1ana", bold: true },
    ". Es cuando m\u00e1s se recupera cartera. Ah, y tambi\u00e9n ",
    { text: "en la tarde necesito al menos 7", bold: true },
    ", porque hay un segundo pico a la hora del almuerzo cuando la gente revisa sus finanzas.\"",
  ]),

  separator(),
  subheading("Gesti\u00f3n Documental"),

  d([
    "\"Esta es la campa\u00f1a nueva. CelPro nos la agreg\u00f3 al contrato hace dos semanas, casi que de \u00faltimo momento. Se trata de gestionar toda la papeler\u00eda: contratos, p\u00f3lizas, formularios de portabilidad, verificaci\u00f3n de identidad... Es un trabajo m\u00e1s administrativo, no es atenci\u00f3n al cliente directa.",
  ]),

  d([
    "Necesitamos ",
    { text: "al menos 15 asesores", bold: true },
    " en Gesti\u00f3n Documental. Como es trabajo de oficina, ",
    { text: "solo opera en turno de ma\u00f1ana y de tarde", bold: true },
    ", no hay nada que gestionar de noche. CelPro puso una condici\u00f3n especial: como manejan documentos sensibles y datos personales, el ",
    { text: "50% del personal de esta campa\u00f1a debe ser senior", bold: true },
    ". Nada de poner puros practicantes a manejar informaci\u00f3n confidencial.",
  ]),

  d([
    "Ah, y como la carga documental es bastante pareja durante el d\u00eda, necesitan ",
    { text: "al menos 6 personas en cada turno", bold: true },
    " para que no se represen las solicitudes.\"",
  ]),

  separator(),

  // RUIDO - HISTORIA DEL CONTRATO ANTERIOR
  d([
    "\"Sab\u00e9s qu\u00e9 me acord\u00e9? Cuando ten\u00edamos la operaci\u00f3n de TeleSur, yo contrat\u00e9 a un man que se llamaba Fabi\u00e1n, un tipo brill\u00e1ntisimo, ingeniero industrial. \u00c9l me arm\u00f3 toda la operaci\u00f3n en dos semanas. Pero el problema fue que arm\u00f3 todo en su cabeza y cuando se fue no nos dej\u00f3 nada documentado. Por eso ahora quiero que todo quede escrito, con l\u00f3gica, con n\u00fameros. No m\u00e1s decisiones al ojo. Bueno, sigamos.\"",
  ]),

  separator(),
  subheading("Los turnos y la plata"),

  d([
    "\"Ahora hablemos de plata, que es lo que m\u00e1s me quita el sue\u00f1o. Manejamos ",
    { text: "tres turnos", bold: true },
    ": ma\u00f1ana de 6 AM a 2 PM, tarde de 2 PM a 10 PM, y noche de 10 PM a 6 AM. El personal se clasifica en ",
    { text: "dos niveles: Junior y Senior", bold: true },
    ". Los juniors son los que estamos entrenando o que tienen menos de un a\u00f1o de experiencia en BPO. Los seniors son los que ya llevan rato en esto, manejan bien las objeciones, resuelven problemas complejos, saben calmar a un cliente furioso.",
  ]),

  d([
    "A un ",
    { text: "asesor junior le pagamos $1.400.000 mensuales", bold: true },
    " si trabaja en turno de ma\u00f1ana o de tarde. El turno de noche tiene recargo nocturno del ",
    { text: "35%", bold: true },
    " seg\u00fan la legislaci\u00f3n colombiana \u2014 el C\u00f3digo Sustantivo del Trabajo, art\u00edculo 168, por si te lo preguntan. As\u00ed que un junior nocturno nos sale m\u00e1s caro \u2014 sac\u00e1 la cuenta.",
  ]),

  d([
    "A un ",
    { text: "asesor senior le pagamos $2.200.000 mensuales", bold: true },
    " en turno de ma\u00f1ana o de tarde. Y con el mismo recargo del 35% para el turno de noche. Los seniors cuestan, pero CelPro nos exige calidad. Un senior bien puesto en retenci\u00f3n te salva 3 clientes que un junior deja ir.",
  ]),

  d([
    "Y hablando de eso: el contrato tiene una cl\u00e1usula de calidad que dice que en ",
    { text: "cada campa\u00f1a, al menos el 30% del personal debe ser senior", bold: true },
    ". No es opcional. Si en una auditor\u00eda encuentran que tenemos una campa\u00f1a con menos del 30% de seniors, nos penalizan con $50 millones. No vale la pena arriesgarse.",
  ]),

  d([
    "Bueno, menos en Gesti\u00f3n Documental que ya te dije que es el 50%. En las otras cuatro campa\u00f1as es el 30%.\"",
  ]),

  separator(),

  // CAPACITACION
  subheading("La capacitaci\u00f3n"),

  d([
    "\"Ah, se me olvidaba algo importante. Cada junior que contratamos nuevo necesita pasar por capacitaci\u00f3n antes de sentarse a operar. El entrenamiento en producto, en sistemas, en protocolo de atenci\u00f3n... todo eso tiene un costo. El \u00e1rea de formaci\u00f3n me pas\u00f3 la cuenta: ",
    { text: "capacitar a cada junior nos cuesta $800.000 pesos", bold: true },
    ". Es un costo \u00fanico, no es mensual, pero lo tenemos que pagar este mes porque todos entran al tiempo.",
  ]),

  d([
    "Los seniors no necesitan capacitaci\u00f3n, ellos ya saben. Llegan y se sientan a producir desde el d\u00eda uno. Esa plata de capacitaci\u00f3n ",
    { text: "tambi\u00e9n sale del presupuesto general", bold: true },
    " de la operaci\u00f3n, o sea que hay que contarla dentro de los costos totales.\"",
  ]),

  separator(),
  subheading("La restricci\u00f3n del talento"),

  d([
    "\"Ahora, reclutar no es tan f\u00e1cil como suena. Pereira tiene buen talento para BPO, pero no es infinito. Habl\u00e9 con las tres empresas de reclutamiento que trabajamos \u2014 Manpower, Adecco y una local que se llama TalentoEje \u2014 y me dieron un panorama realista.",
  ]),

  d([
    { text: "Juniors hay", bold: true },
    ", pero entre el proceso de selecci\u00f3n, las pruebas psicot\u00e9cnicas, la capacitaci\u00f3n y el entrenamiento en producto, ",
    { text: "no podemos incorporar m\u00e1s de 65 juniors", bold: true },
    " en este ciclo. Y eso estirando los tiempos. Manpower me dijo que pod\u00edan conseguir hasta 40, Adecco otros 20, y TalentoEje 5 m\u00e1s. Pero esos n\u00fameros son el techo.",
  ]),

  d([
    "Con los ",
    { text: "seniors es peor", bold: true },
    ". Los agentes experimentados ya est\u00e1n colocados en Teleperformance, en Atento, en los otros BPO de la ciudad. Me dijeron que de forma realista, podemos conseguir ",
    { text: "m\u00e1ximo 40 seniors", bold: true },
    " en el mercado de Pereira. Y eso haciendo ofertas competitivas, meti\u00e9ndole bonos de enganche y todo.\"",
  ]),

  separator(),
  subheading("La sede"),

  d([
    "\"La sede que arrendamos en la Zona Franca tiene dos pisos. El primer piso lo estamos usando para las oficinas administrativas \u2014 recursos humanos, contabilidad, la oficina m\u00eda, la sala de capacitaci\u00f3n. Toda la operaci\u00f3n de contact center est\u00e1 en el segundo piso, que lo adecuamos con ",
    { text: "45 estaciones de trabajo", bold: true },
    ".",
  ]),

  d([
    "Cada estaci\u00f3n tiene computador, diadema y puesto. Como los turnos no se traslapan \u2014 uno sale y entra el otro \u2014 las estaciones se comparten entre turnos. Pero en ",
    { text: "un mismo turno, no puede haber m\u00e1s de 45 personas sentadas", bold: true },
    ", porque sencillamente no hay m\u00e1s puestos. Si necesitamos m\u00e1s capacidad, tocar\u00eda arrendar el tercer piso que est\u00e1 vac\u00edo arriba, pero eso cuesta otros $18 millones de arriendo mensual y Do\u00f1a Margarita dijo que ni de riesgos. Eso ya ser\u00eda para el pr\u00f3ximo trimestre.\"",
  ]),

  separator(),
  subheading("El turno de noche"),

  d([
    "\"Algo m\u00e1s sobre la noche. A m\u00ed personalmente no me gusta tener mucha gente de noche. Es m\u00e1s dif\u00edcil de supervisar, la rotaci\u00f3n es m\u00e1s alta, la gente se enferma m\u00e1s, y la productividad baja como un 20%. Adem\u00e1s, el recargo nocturno nos sube los costos.",
  ]),

  d([
    "As\u00ed que la directriz es: ",
    { text: "en el turno de noche no quiero m\u00e1s de 25 personas en total", bold: true },
    ", sumando Soporte y Cobranzas que son las \u00fanicas que operan a esa hora. Las otras tres campa\u00f1as no tienen turno nocturno.",
  ]),

  d([
    "Adem\u00e1s, por seguridad y supervisi\u00f3n, quiero que ",
    { text: "en cada turno haya al menos 3 asesores senior", bold: true },
    " trabajando, sin importar de qu\u00e9 campa\u00f1a sean. No me dej\u00e9s un turno lleno de puros pelaos sin nadie con experiencia que los gu\u00ede. Eso aplica para los tres turnos: ma\u00f1ana, tarde y noche.\"",
  ]),

  separator(),

  // RUIDO - QUEJA SOBRE PROVEEDOR
  d([
    "\"Ay, hablando de noche, te cuento que el servicio de vigilancia que ten\u00edamos se fue y ahora toc\u00f3 contratar otro que nos cobra m\u00e1s caro. $3.200.000 mensuales por dos vigilantes. Pero ese es problema de servicios generales, no tuyo. Aunque si ves algo raro en la oficina por la noche, me avisas. La semana pasada se desapareci\u00f3 una silla ergon\u00f3mica de la sala de capacitaci\u00f3n y nadie sabe nada. En fin.\"",
  ]),

  separator(),
  subheading("Una exigencia especial de CelPro"),

  d([
    "\"CelPro tiene una exigencia adicional que casi se me olvida \u2014 de hecho casi ni la ponen en el contrato pero el director comercial de ellos, un tipo que se llama Ricardo Mej\u00eda, la meti\u00f3 de \u00faltimo momento. Como Ventas es la campa\u00f1a que les genera m\u00e1s ingresos y Retenci\u00f3n es la que les salva clientes, quieren que el equipo de Ventas tenga ",
    { text: "al menos 5 asesores senior m\u00e1s que el equipo de Retenci\u00f3n", bold: true },
    ".",
  ]),

  d([
    "Me lo pusieron en el contrato as\u00ed tal cual: si Retenci\u00f3n tiene 6 seniors, Ventas debe tener al menos 11. Es una cuesti\u00f3n de priorizaci\u00f3n estrat\u00e9gica de ellos. Yo al principio pens\u00e9 que era una bobada, pero despu\u00e9s de pensarlo tiene sentido: si metes m\u00e1s peso en ventas, generas m\u00e1s ingresos para todos.\"",
  ]),

  separator(),

  // OTRO RUIDO
  d([
    "\"Perd\u00f3n, es que me est\u00e1 sonando el celular... era Do\u00f1a Margarita. Me mand\u00f3 un mensaje diciendo que el proveedor de diademas nos entreg\u00f3 20 de las 45 que pedimos y las otras llegan la otra semana. Pero eso no afecta la planeaci\u00f3n porque para cuando arranquemos ya deben estar completas. Bueno, \u00bfen qu\u00e9 iba? Ah s\u00ed, el presupuesto.\"",
  ]),

  separator(),
  subheading("El presupuesto"),

  d([
    "\"Lo m\u00e1s importante para el final: la plata. Do\u00f1a Margarita me dijo que el presupuesto total para montar esta operaci\u00f3n es de ",
    { text: "$200 millones de pesos", bold: true },
    ". Ah\u00ed tiene que caber todo: ",
    { text: "salarios mensuales de todos los asesores m\u00e1s la capacitaci\u00f3n de los juniors", bold: true },
    ". Ni un peso m\u00e1s. Si nos pasamos, la operaci\u00f3n no es rentable y mejor ni arrancamos.",
  ]),

  d([
    "Ojo que el presupuesto es lo que sale el primer mes completo de operaci\u00f3n, contando n\u00f3mina m\u00e1s lo de capacitaci\u00f3n. Los meses siguientes ya no hay capacitaci\u00f3n, pero este primer mes s\u00ed hay que cuadrar todo.\"",
  ]),

  separator(),
  subheading("Lo que necesito de ti"),

  d([
    "\"Yo s\u00e9 que esta vaina se puede optimizar. No quiero contratar gente de m\u00e1s ni gastar plata innecesaria. Tu trabajo es decirme: ",
    { text: "\u00bfcu\u00e1l es la combinaci\u00f3n de contrataci\u00f3n que me cumple todas las exigencias de CelPro, respeta las limitaciones del mercado y de la sede, y me minimiza el costo total del primer mes de operaci\u00f3n?", bold: true },
  ]),

  d([
    "No me vayas a salir con una tabla de Excel llena de numeritos sin explicaci\u00f3n. Quiero que me plantees esto como un problema de optimizaci\u00f3n, clarito, para que despu\u00e9s lo resolvamos con software. Variables, objetivo, restricciones \u2014 todo el paquete.",
  ]),

  d([
    "Ah, y esto es obvio, pero lo digo por si acaso: ",
    { text: "no podemos contratar fracciones de personas", bold: true },
    ". Si necesitamos 7.3 asesores, son 8. Gente entera.",
  ]),

  d([
    { text: "Ten\u00e9s hasta las 9 de la ma\u00f1ana. Listo, and\u00e1.\"", bold: true },
  ]),
];

// Evaluation table
const evalData = [
  ["Criterio", "Pts"],
  ["Variables correctamente definidas (todas las activas, ninguna fantasma)", "15"],
  ["Funci\u00f3n objetivo correcta (incluyendo c\u00e1lculo de recargos y capacitaci\u00f3n)", "15"],
  ["Restricciones contractuales \u2014 m\u00ednimos por campa\u00f1a", "10"],
  ["Restricciones contractuales \u2014 m\u00ednimos por turno espec\u00edfico", "10"],
  ["Restricciones de calidad (% de seniors por campa\u00f1a)", "10"],
  ["Restricci\u00f3n inter-campa\u00f1a (seniors Ventas vs Retenci\u00f3n)", "5"],
  ["Restricciones de mercado laboral (tope de juniors y seniors)", "5"],
  ["Restricciones operativas (sede, tope nocturno, seniors por turno)", "10"],
  ["Restricci\u00f3n presupuestal completa (n\u00f3mina + capacitaci\u00f3n)", "5"],
  ["No negatividad e integralidad", "5"],
  ["Resumen ejecutivo y reflexi\u00f3n", "10"],
  ["TOTAL", "100"],
];

function evalTable() {
  return new Table({
    columnWidths: [7800, 1560],
    rows: evalData.map((row, i) => new TableRow({
      children: [
        cell(row[0], { width: 7800, header: i === 0, bold: i === evalData.length - 1 }),
        cell(row[1], { width: 1560, header: i === 0, center: true, bold: i === evalData.length - 1 }),
      ],
    })),
  });
}

const doc = new Document({
  styles: { default: { document: { run: { font: "Calibri", size: 22 } } } },
  sections: [{
    properties: { page: { margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 } } },
    headers: {
      default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [
        new TextRun({ text: "Administraci\u00f3n de Operaciones 2 \u2014 Semana 6", size: 16, font: "Calibri", color: "B0BEC5" }),
      ]})] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "P\u00e1gina ", size: 16, font: "Calibri", color: "B0BEC5" }),
        new TextRun({ children: [PageNumber.CURRENT], size: 16, font: "Calibri", color: "B0BEC5" }),
      ]})] }),
    },
    children: [
      // Title
      new Paragraph({ spacing: { before: 400, after: 40 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "TALLER GUIADO", size: 36, font: "Calibri", bold: true, color: accent })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Tu primer d\u00eda como Jefe de Operaciones", size: 28, font: "Calibri", color: accent2 })] }),
      new Paragraph({ spacing: { before: 40, after: 200 }, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Semana 6 \u2014 Programaci\u00f3n Lineal aplicada a Talento Humano", size: 20, font: "Calibri", color: gray })] }),

      // Info box
      new Table({
        columnWidths: [9360],
        rows: [new TableRow({ children: [new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 2, color: accent2 }, bottom: { style: BorderStyle.SINGLE, size: 2, color: accent2 }, left: { style: BorderStyle.SINGLE, size: 6, color: accent2 }, right: { style: BorderStyle.SINGLE, size: 2, color: accent2 } },
          shading: { fill: lightBg, type: ShadingType.CLEAR },
          width: { size: 9360, type: WidthType.DXA },
          children: [
            new Paragraph({ spacing: { before: 80, after: 40 }, children: [
              new TextRun({ text: "Duraci\u00f3n: ", bold: true, size: 20, font: "Calibri", color: accent }),
              new TextRun({ text: "1 hora y 20 minutos          ", size: 20, font: "Calibri", color: "2C3E50" }),
              new TextRun({ text: "Modalidad: ", bold: true, size: 20, font: "Calibri", color: accent }),
              new TextRun({ text: "Individual o en parejas", size: 20, font: "Calibri", color: "2C3E50" }),
            ]}),
            new Paragraph({ spacing: { before: 40, after: 80 }, children: [
              new TextRun({ text: "Materiales: ", bold: true, size: 20, font: "Calibri", color: accent }),
              new TextRun({ text: "Cuaderno, lapicero, calculadora del celular", size: 20, font: "Calibri", color: "2C3E50" }),
            ]}),
          ],
        })]})],
      }),

      heading("Contexto"),
      p("Felicitaciones. Acab\u00e1s de ser contratado como Jefe de Operaciones en TalentoConnect BPO, una empresa de tercerizaci\u00f3n de procesos ubicada en la Zona Franca de Pereira. Es tu primer d\u00eda y el Gerente General, Andr\u00e9s Morales, te llam\u00f3 a su oficina a las 7:30 de la ma\u00f1ana."),
      p("Lo que sigue es la transcripci\u00f3n de lo que Andr\u00e9s te dijo. Tu trabajo es escuchar, abstraer y formular. Ojo: no todo lo que dice es relevante para el modelo."),

      heading("La Reuni\u00f3n con el Gerente"),
      ...narrative,

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      heading("Tu Misi\u00f3n"),
      p("Ten\u00e9s 1 hora y 20 minutos para entregar lo siguiente:", { bold: true }),

      subheading("Entregable 1 \u2014 Variables de Decisi\u00f3n (15 min sugeridos)"),
      p("Defin\u00ed TODAS las variables de decisi\u00f3n del problema. Us\u00e1 una nomenclatura clara y organizada. Indic\u00e1 qu\u00e9 representa cada variable y qu\u00e9 valores puede tomar. Pregunt\u00e1te: \u00bfqu\u00e9 campa\u00f1as operan en qu\u00e9 turnos?"),

      subheading("Entregable 2 \u2014 Funci\u00f3n Objetivo (15 min sugeridos)"),
      p("Escrib\u00ed la funci\u00f3n objetivo completa. Indic\u00e1 si se maximiza o minimiza y por qu\u00e9. Mostr\u00e1 c\u00f3mo calculaste cada coeficiente \u2014 especialmente los del turno nocturno. \u00bfHay alg\u00fan costo adicional adem\u00e1s del salario?"),

      subheading("Entregable 3 \u2014 Restricciones (35 min sugeridos)"),
      p("Identific\u00e1 TODAS las restricciones del problema y escribilas en forma matem\u00e1tica. Agrupalas por categor\u00eda: contractuales, de mercado, operativas, etc. No olvides las restricciones de no negatividad y de enteros."),

      subheading("Entregable 4 \u2014 Resumen Ejecutivo (15 min sugeridos)"),
      p("Respond\u00e9: \u00bfcu\u00e1ntas variables tiene tu modelo? \u00bfCu\u00e1ntas restricciones? \u00bfCu\u00e1les fueron los datos m\u00e1s dif\u00edciles de extraer y por qu\u00e9? \u00bfHab\u00eda informaci\u00f3n irrelevante? \u00bfSe puede resolver esto a mano? Justific\u00e1."),

      heading("Criterios de Evaluaci\u00f3n"),
      evalTable(),

      new Paragraph({ spacing: { before: 300, after: 100 }, children: [] }),
      heading("Pistas (solo si el profesor las autoriza)"),

      new Table({
        columnWidths: [9360],
        rows: [
          ["Pista 1 (min 25)", "\u00bfCu\u00e1ntas campa\u00f1as hay realmente? \u00bfTodas operan en los tres turnos?"],
          ["Pista 2 (min 40)", "El recargo nocturno no te lo dan calculado. Ten\u00e9s que sacar el salario: base \u00d7 1.35"],
          ["Pista 3 (min 50)", "\u00bfEl presupuesto solo incluye salarios? Rele\u00e9 lo que dijo Andr\u00e9s sobre los juniors nuevos."],
          ["Pista 4 (min 60)", "No todo lo que dijo el gerente es un dato para el modelo. \u00bfEl parqueadero? \u00bfLas diademas? \u00bfEl vigilante?"],
        ].map(row => new TableRow({ children: [new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "E8DAEF" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: "E8DAEF" }, left: { style: BorderStyle.SINGLE, size: 4, color: "8E44AD" }, right: { style: BorderStyle.SINGLE, size: 1, color: "E8DAEF" } },
          shading: { fill: "F5EEF8", type: ShadingType.CLEAR },
          width: { size: 9360, type: WidthType.DXA },
          children: [new Paragraph({ spacing: { before: 60, after: 60 }, children: [
            new TextRun({ text: row[0] + ":  ", bold: true, size: 20, font: "Calibri", color: "6C3483" }),
            new TextRun({ text: row[1], size: 20, font: "Calibri", color: "6C3483" }),
          ]})],
        })]})
        ),
      }),

      new Paragraph({ spacing: { before: 400, after: 0 }, alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "\u00abLa diferencia entre un buen administrador y uno excelente", size: 20, font: "Calibri", italics: true, color: gray }),
      ]}),
      new Paragraph({ spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "es que el excelente convierte el caos en ecuaciones.\u00bb", size: 20, font: "Calibri", italics: true, color: gray }),
      ]}),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:/Users/Usuario UTP/Desktop/clases/Administración de operaciones 2/semana6-clase1/Taller_Tu_Primer_Dia.docx", buffer);
  console.log("Taller generado OK");
});
