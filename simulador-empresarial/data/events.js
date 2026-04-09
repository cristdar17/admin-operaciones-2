/* ============================================================
   EVENTS - Eventos externos que el docente puede disparar
   Sabotaje, impuestos, crisis, oportunidades, etc.
   ============================================================ */
const GAME_EVENTS = {

  // --- SABOTAJE (una empresa ataca a la otra) ---
  sabotage: [
    {
      id: 'sab_hack_menu',
      emoji: '🖥️',
      name: 'Hackeo del menú digital',
      desc: 'Alguien alteró los precios en la app del rival',
      targetArea: 'marketing',
      victimCash: -12000000,
      victimBsc: { bsc_customer: -6, bsc_internal: -3 },
      attackerCash: 0,
      attackerBsc: { bsc_customer: 2 },
      narrative: 'La app del competidor mostró precios erróneos por 3 horas. Decenas de clientes se quejaron en redes sociales.'
    },
    {
      id: 'sab_steal_chef',
      emoji: '👨‍🍳',
      name: 'Robar al chef estrella',
      desc: 'Ofrecerle el doble al mejor cocinero rival',
      targetArea: 'hr',
      victimCash: 0,
      victimBsc: { bsc_internal: -7, bsc_learning: -4 },
      attackerCash: -8000000,
      attackerBsc: { bsc_internal: 5, bsc_customer: 3 },
      narrative: 'El chef estrella del rival aceptó la oferta. La calidad de sus platos caerá mientras encuentran reemplazo.'
    },
    {
      id: 'sab_supplier_block',
      emoji: '🚫',
      name: 'Bloquear proveedor clave',
      desc: 'Firmar exclusividad con el proveedor de carne del rival',
      targetArea: 'logistics',
      victimCash: -15000000,
      victimBsc: { bsc_internal: -5, bsc_customer: -4 },
      attackerCash: -10000000,
      attackerBsc: { bsc_internal: 3 },
      narrative: 'El proveedor de carne premium firmó exclusividad. El rival debe buscar alternativas más costosas urgentemente.'
    },
    {
      id: 'sab_fake_review',
      emoji: '⭐',
      name: 'Campaña de reseñas falsas',
      desc: 'Inundar Google Maps con reseñas de 1 estrella',
      targetArea: 'marketing',
      victimCash: -5000000,
      victimBsc: { bsc_customer: -8 },
      attackerCash: -3000000,
      attackerBsc: {},
      narrative: 'Aparecieron 50 reseñas negativas sospechosas. El rating del rival bajó de 4.5 a 3.8 estrellas.'
    },
    {
      id: 'sab_poach_clients',
      emoji: '🎯',
      name: 'Robar clientes corporativos',
      desc: 'Ofrecer descuentos agresivos a los clientes empresariales del rival',
      targetArea: 'finance',
      victimCash: -18000000,
      victimBsc: { bsc_customer: -5, bsc_financial: -4 },
      attackerCash: -5000000,
      attackerBsc: { bsc_customer: 4, bsc_financial: 3 },
      narrative: '3 empresas que almorzaban en el rival ahora piden catering a tu restaurante. Guerra de precios activada.'
    },
    {
      id: 'sab_inspect_tip',
      emoji: '📞',
      name: 'Denuncia sanitaria anónima',
      desc: 'Llamar a Secretaría de Salud con una queja falsa',
      targetArea: 'operations',
      victimCash: -8000000,
      victimBsc: { bsc_internal: -6, bsc_customer: -3 },
      attackerCash: 0,
      attackerBsc: {},
      narrative: 'Inspección sanitaria sorpresa. Aunque no encontraron nada grave, el restaurante cerró medio día por la revisión.'
    }
  ],

  // --- IMPUESTOS Y REGULACIÓN ---
  taxes: [
    {
      id: 'tax_dian_audit',
      emoji: '🏛️',
      name: 'Auditoría de la DIAN',
      desc: 'Revisión tributaria sorpresa',
      targetArea: 'finance',
      cashDelta: -22000000,
      bsc: { bsc_financial: -6, bsc_internal: -3 },
      narrative: 'La DIAN encontró inconsistencias en la declaración de IVA. Multa de $22M + intereses moratorios.'
    },
    {
      id: 'tax_ica_increase',
      emoji: '📋',
      name: 'Aumento del ICA',
      desc: 'Industria y Comercio sube la tarifa para restaurantes',
      targetArea: null,
      cashDelta: -10000000,
      bsc: { bsc_financial: -3 },
      narrative: 'La Alcaldía de Pereira incrementó el ICA para el sector gastronómico. Todas las empresas deben pagar más.'
    },
    {
      id: 'tax_new_regulation',
      emoji: '📜',
      name: 'Nueva normativa de etiquetado',
      desc: 'INVIMA exige etiquetado nutricional en todos los productos',
      targetArea: 'operations',
      cashDelta: -8000000,
      bsc: { bsc_internal: -4, bsc_learning: 3 },
      narrative: 'Cumplir con la nueva regulación de INVIMA requiere inversión en etiquetado y rediseño de empaques.'
    },
    {
      id: 'tax_labor_reform',
      emoji: '⚖️',
      name: 'Reforma laboral',
      desc: 'Nuevas obligaciones en contratación y horas extra',
      targetArea: 'hr',
      cashDelta: -12000000,
      bsc: { bsc_financial: -3, bsc_learning: 2 },
      narrative: 'La reforma laboral obliga a pagar recargos nocturnos más altos y limitar contratos por prestación de servicios.'
    }
  ],

  // --- CRISIS EXTERNAS ---
  crisis: [
    {
      id: 'crisis_inflation',
      emoji: '📈',
      name: 'Pico inflacionario',
      desc: 'Los insumos suben 15% en una semana',
      targetArea: 'logistics',
      cashDelta: -20000000,
      bsc: { bsc_financial: -5, bsc_internal: -3 },
      narrative: 'El precio del aceite, la carne y las verduras se disparó. Los márgenes se comprimen peligrosamente.'
    },
    {
      id: 'crisis_blackout',
      emoji: '⚡',
      name: 'Racionamiento eléctrico',
      desc: 'Cortes programados de 4 horas diarias',
      targetArea: 'operations',
      cashDelta: -15000000,
      bsc: { bsc_internal: -7, bsc_customer: -4 },
      narrative: 'El fenómeno de El Niño obliga a racionamiento. Sin luz no hay cocina, refrigeración ni caja registradora.'
    },
    {
      id: 'crisis_pandemic_scare',
      emoji: '🦠',
      name: 'Alerta sanitaria',
      desc: 'Brote de intoxicación en el sector gastronómico de Pereira',
      targetArea: null,
      cashDelta: -18000000,
      bsc: { bsc_customer: -8, bsc_internal: -3 },
      narrative: 'Aunque ninguna empresa fue responsable, el miedo redujo las visitas a restaurantes un 40% esta semana.'
    },
    {
      id: 'crisis_road_block',
      emoji: '🚧',
      name: 'Bloqueo vial',
      desc: 'Paro de transportadores bloquea las principales vías',
      targetArea: 'logistics',
      cashDelta: -14000000,
      bsc: { bsc_internal: -5, bsc_customer: -3 },
      narrative: 'Los bloqueos impiden la llegada de insumos y las entregas a domicilio. Tres días de operación reducida.'
    },
    {
      id: 'crisis_competitor',
      emoji: '🏪',
      name: 'Nuevo competidor',
      desc: 'Una franquicia internacional abre en el centro de Pereira',
      targetArea: 'marketing',
      cashDelta: -10000000,
      bsc: { bsc_customer: -6, bsc_financial: -2 },
      narrative: 'McDonald\'s abrió un local en el centro. Las ventas del sector local caen mientras los clientes prueban lo nuevo.'
    }
  ],

  // --- OPORTUNIDADES ---
  opportunity: [
    {
      id: 'opp_festival',
      emoji: '🎪',
      name: 'Festival gastronómico',
      desc: 'Pereira organiza su primer festival de comida colombiana',
      targetArea: 'marketing',
      cashDelta: 25000000,
      bsc: { bsc_customer: 6, bsc_learning: 3 },
      narrative: 'El Festival Sabor Pereira atrajo 15,000 visitantes. Las ventas se dispararon y la marca ganó visibilidad regional.'
    },
    {
      id: 'opp_corporate_contract',
      emoji: '🏢',
      name: 'Contrato corporativo',
      desc: 'Una empresa grande quiere servicio de almuerzo para 200 empleados',
      targetArea: 'finance',
      cashDelta: 30000000,
      bsc: { bsc_financial: 5, bsc_customer: 4 },
      narrative: 'Firmaste contrato con una empresa del sector BPO. 200 almuerzos diarios garantizados por 3 meses.'
    },
    {
      id: 'opp_viral_video',
      emoji: '📱',
      name: 'Video viral',
      desc: 'Un influencer publicó un video probando tu comida',
      targetArea: 'marketing',
      cashDelta: 15000000,
      bsc: { bsc_customer: 8, bsc_financial: 2 },
      narrative: 'El video tiene 2M de vistas en TikTok. Las filas dan la vuelta a la manzana. ¡Aprovecha el momentum!'
    },
    {
      id: 'opp_subsidy',
      emoji: '🏦',
      name: 'Subsidio Innpulsa',
      desc: 'Innpulsa Colombia abre convocatoria para PyMEs gastronómicas',
      targetArea: 'innovation',
      cashDelta: 20000000,
      bsc: { bsc_financial: 4, bsc_learning: 5 },
      narrative: 'Ganaste la convocatoria de Innpulsa. $20M en capital semilla no reembolsable para innovación gastronómica.'
    },
    {
      id: 'opp_delivery_boom',
      emoji: '🛵',
      name: 'Boom de domicilios',
      desc: 'Rappi ofrece comisión reducida por 2 semanas',
      targetArea: 'logistics',
      cashDelta: 12000000,
      bsc: { bsc_customer: 4, bsc_financial: 3 },
      narrative: 'Rappi bajó la comisión al 12% temporalmente. Los pedidos a domicilio se triplicaron.'
    }
  ],

  // --- EVENTOS ALEATORIOS ---
  random: [
    {
      id: 'rand_weather',
      emoji: '🌧️',
      name: 'Semana de lluvias',
      desc: 'Lluvia torrencial toda la semana en Pereira',
      targetArea: null,
      cashDelta: -8000000,
      bsc: { bsc_customer: -3 },
      narrative: 'Las lluvias redujeron el tráfico peatonal un 30%. Los domicilios aumentaron pero no compensan.'
    },
    {
      id: 'rand_holiday',
      emoji: '🎉',
      name: 'Puente festivo',
      desc: 'Fin de semana largo con alta afluencia turística',
      targetArea: null,
      cashDelta: 18000000,
      bsc: { bsc_customer: 4, bsc_financial: 3 },
      narrative: 'El puente festivo trajo turistas del Valle y Antioquia. Ventas récord en ambos restaurantes.'
    },
    {
      id: 'rand_tiktok_trend',
      emoji: '🎵',
      name: 'Trend de TikTok',
      desc: 'Se puso de moda un plato colombiano en redes',
      targetArea: 'marketing',
      cashDelta: 10000000,
      bsc: { bsc_customer: 5 },
      narrative: 'La bandeja paisa se volvió viral en TikTok. Todos quieren probar "el plato de Colombia" y tu restaurante está lleno.'
    },
    {
      id: 'rand_equipment_fail',
      emoji: '🔧',
      name: 'Falla de equipos',
      desc: 'La freidora industrial se dañó en hora pico',
      targetArea: 'operations',
      cashDelta: -7000000,
      bsc: { bsc_internal: -5 },
      narrative: 'La freidora principal colapsó a las 12pm. Tuviste que improvisar con sartenes y el servicio se retrasó 45 minutos.'
    },
    {
      id: 'rand_good_press',
      emoji: '📰',
      name: 'Reseña en prensa',
      desc: 'El periódico local publica una reseña favorable',
      targetArea: 'marketing',
      cashDelta: 8000000,
      bsc: { bsc_customer: 4, bsc_learning: 2 },
      narrative: 'La Tarde publicó: "Los nuevos sabores de Pereira". Tu restaurante aparece destacado. Clientela nueva llega curiosa.'
    }
  ]
};
