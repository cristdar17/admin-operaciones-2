/* ============================================================
   TREE-FINANCE v2 - Arbol de decisiones del area de FINANZAS
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto del area: $75.000.000 COP
   10 nodos de decision / 25 dias / 6 choice + 2 binary + 2 multi
   ============================================================ */

window.TREE_FINANCE = {
  name: 'Finanzas',
  icon: '💰',
  color: '#34C759',
  startNode: 'fin_01',
  nodes: {

    // ============================================================
    //  NODO 1 — DIA 1: Estructura de capital
    // ============================================================
    'fin_01': {
      day: 1,
      title: 'Estructura de capital',
      context: 'La cadena arranca con $500M COP de capital propio. Debes decidir cuanto apalancamiento tomar para financiar la operacion.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Conservador (85% propio / 15% deuda)',
          description: 'Credito de $75M con Bancolombia al 15% E.A.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Presupuesto limitado para equipos de cocina', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['conservador', 'bajo-riesgo'],
          next: 'fin_02',
          narrative: 'El banco aprueba en 24 horas. Cuota mensual baja, pero las areas piden mas recursos.',
          feedback: 'Opcion segura. La teoria financiera dice que minimizar deuda reduce riesgo de insolvencia, pero tambien limita el crecimiento (trade-off riesgo-rendimiento). Buena si el mercado es incierto.'
        },
        {
          id: 'B',
          label: 'Moderado (60% propio / 40% deuda)',
          description: 'Credito de $200M al 17.5% E.A. con garantia sobre activos.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Recursos razonables para equipar locales', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'marketing', message: 'Hay fondos para campanas iniciales', bsc: { bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['moderado', 'equilibrado'],
          next: 'fin_02',
          narrative: 'Bancolombia aprueba tras revisar proyecciones. Cuota mensual manejable si las ventas responden.',
          feedback: 'Esta es la mejor opcion. El apalancamiento moderado (40%) aprovecha el efecto palanca sin arriesgar la liquidez. Es el punto dulce entre crecimiento y seguridad financiera.'
        },
        {
          id: 'C',
          label: 'Agresivo (40% propio / 60% deuda)',
          description: 'Credito de $300M entre Bancolombia y Davivienda al 20% E.A.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Presupuesto amplio para equipos premium', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'logistics', message: 'Fondos para flota de domicilios desde el dia uno', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['agresivo', 'alto-riesgo'],
          next: 'fin_02_risk',
          narrative: 'El dinero llega rapido, pero la cuota mensual de $18M no perdona. Cada peso debe generar retorno.',
          feedback: 'Peligroso. Con 60% deuda al 20% E.A., el costo financiero puede superar la utilidad operativa. Solo funciona si las ventas crecen muy rapido. Alto riesgo de iliquidez.'
        },
        {
          id: 'D',
          label: 'Inversionista angel',
          description: 'Un empresario pereirano ofrece $250M a cambio del 25% de participacion.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'El inversionista trae contactos en el sector hotelero', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['inversionista', 'dilucion'],
          next: 'fin_02',
          narrative: 'Sin deuda, pero ahora compartes decisiones y utilidades con un socio externo.',
          feedback: 'Interesante pero costoso a largo plazo: cedes 25% de utilidades para siempre. Mejor que deuda agresiva, pero peor que la moderada si el negocio es rentable. Ideal solo si necesitas know-how ademas de dinero.'
        }
      ]
    },

    // ============================================================
    //  NODO 2 — DIA 4: Linea de credito rotativa
    // ============================================================
    'fin_02': {
      day: 4,
      title: 'Linea de credito rotativa',
      context: 'Bancolombia ofrece una linea de credito rotativa para cubrir imprevistos. Tener liquidez de respaldo es clave en los primeros meses.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Abrir linea de credito por $50M',
          description: 'Costo de apertura $1.5M, interes solo si se usa (18% E.A.).',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [],
          tags: ['liquidez', 'prevision'],
          next: 'fin_03',
          narrative: 'La linea queda disponible. Duermes tranquilo sabiendo que hay un colchon financiero.',
          feedback: 'Correcta. Tener una linea de credito rotativa es una practica financiera estandar. El costo de apertura es bajo comparado con el beneficio de tener liquidez disponible ante imprevistos. Es la mejor opcion.'
        },
        {
          id: 'B',
          label: 'No abrir linea de credito',
          description: 'Ahorrar el costo de apertura y manejar todo con caja propia.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 0, bsc_learning: 0 },
          crossEffects: [],
          tags: ['sin-colchon', 'riesgoso'],
          next: 'fin_03',
          narrative: 'Te ahorras $1.5M hoy, pero si surge una emergencia no tendras de donde sacar.',
          feedback: 'Mala decision. En finanzas corporativas, la liquidez es oxigeno. Ahorrarse $1.5M pero quedar sin red de seguridad expone la empresa a riesgo de insolvencia ante cualquier imprevisto.'
        }
      ]
    },

    // Rama riesgo del nodo 1 opcion C
    'fin_02_risk': {
      day: 4,
      title: 'Presion bancaria temprana',
      context: 'Por el alto apalancamiento, los bancos exigen una cuenta de reserva con $30M bloqueados como garantia adicional.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Aceptar la reserva obligatoria',
          description: 'Bloquear $30M reduce tu liquidez pero mantiene la relacion bancaria.',
          cost: 30000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 0, bsc_internal: -1, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Menos caja disponible para insumos del mes', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['obligacion-bancaria', 'liquidez-baja'],
          next: 'fin_03',
          narrative: 'Los $30M quedan congelados. Ahora hay que operar con mucho menos margen.',
          feedback: 'Es la consecuencia directa del apalancamiento agresivo. Los bancos protegen su riesgo. Esto confirma que la estructura 60% deuda fue excesiva para una empresa nueva.'
        },
        {
          id: 'B',
          label: 'Negociar reducir la reserva a $15M',
          description: 'Ofrecer reportes financieros mensuales a cambio de reducir el bloqueo.',
          cost: 15000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [],
          tags: ['negociacion', 'compromiso'],
          next: 'fin_03',
          narrative: 'El banco acepta si entregas estados financieros cada 30 dias. Mas trabajo administrativo pero conservas liquidez.',
          feedback: 'Buena negociacion. Ofrecer transparencia (reportes) a cambio de mejores condiciones es una tactica financiera inteligente. Siempre es mejor negociar que aceptar la primera oferta del banco.'
        }
      ]
    },

    // ============================================================
    //  NODO 3 — DIA 6: Capital de trabajo
    // ============================================================
    'fin_03': {
      day: 6,
      title: 'Gestion del capital de trabajo',
      context: 'Los proveedores ofrecen diferentes plazos de pago. Manejar bien el ciclo de caja (dias de cobro vs dias de pago) es vital para la liquidez.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Pago anticipado con descuento (2/10 neto 30)',
          description: 'Pagar en 10 dias para obtener 2% de descuento sobre compras.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores priorizan tus pedidos por buen pago', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['descuento-pronto-pago', 'liquidez-alta'],
          next: 'fin_04',
          narrative: 'Los proveedores te aman. Prioridad en entregas y el 2% de descuento suma millones al ano.',
          feedback: 'Excelente decision. El descuento 2/10 neto 30 equivale a un rendimiento anualizado del ~36%. Siempre que tengas liquidez, tomar el descuento por pronto pago es financieramente optimo. Mejor opcion.'
        },
        {
          id: 'B',
          label: 'Pago a 30 dias estandar',
          description: 'Usar el plazo completo para conservar caja mas tiempo.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['estandar', 'conservador'],
          next: 'fin_04',
          narrative: 'Flujo de caja estable. No ganas descuento pero tampoco te presionas con pagos rapidos.',
          feedback: 'Aceptable pero no optima. Pierdes el descuento del 2% que en terminos anualizados es muy alto. Solo tiene sentido si tu caja esta muy ajustada.'
        },
        {
          id: 'C',
          label: 'Negociar plazo a 60 dias',
          description: 'Estirar el pago para financiarte con el dinero de proveedores.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: -2, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores molestos, posibles retrasos en entregas', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['riesgoso', 'relacion-proveedores'],
          next: 'fin_04',
          narrative: 'Ganas 30 dias de caja extra, pero los proveedores empiezan a priorizar otros clientes.',
          feedback: 'Riesgoso. Financiarte con proveedores (alargar cuentas por pagar) funciona a corto plazo pero deteriora relaciones comerciales. En Pereira el mercado es pequeno y la reputacion importa mucho.'
        }
      ]
    },

    // ============================================================
    //  NODO 4 — DIA 9: Asignacion de presupuesto (MULTI)
    // ============================================================
    'fin_04': {
      day: 9,
      title: 'Asignacion del presupuesto de $75M',
      context: 'El presupuesto del area financiera es $75M COP. Debes priorizar en que invertirlo. Selecciona hasta 3 rubros.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Software contable (Siigo/Alegra)',
          description: 'Licencia anual + implementacion para facturacion electronica DIAN.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Facturacion automatizada agiliza cierres', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['tecnologia', 'cumplimiento-DIAN'],
          next: 'fin_05',
          narrative: 'El software queda operativo en 5 dias. La facturacion electronica cumple con la DIAN desde el dia uno.',
          feedback: 'Fundamental. La DIAN exige facturacion electronica. No tenerla genera multas. Ademas automatiza procesos contables. Deberia ser prioridad #1 en cualquier combinacion.'
        },
        {
          id: 'B',
          label: 'Fondo de emergencia',
          description: 'Reservar $20M en CDT a 90 dias como colchon financiero.',
          cost: 20000000,
          revenue: 500000,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['reserva', 'seguridad'],
          next: 'fin_05',
          narrative: 'El CDT genera rendimientos modestos mientras espera. Tranquilidad financiera asegurada.',
          feedback: 'Buena practica. Tener un fondo de emergencia equivalente a 1-2 meses de gastos fijos es regla de oro en finanzas. Los rendimientos del CDT son bonus.'
        },
        {
          id: 'C',
          label: 'Capacitacion financiera al equipo',
          description: 'Curso de costos y presupuestos para gerentes de local.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Gerentes entienden mejor el impacto de desperdicios', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['formacion', 'cultura-financiera'],
          next: 'fin_05',
          narrative: 'Los gerentes de local empiezan a hablar de margen de contribucion y punto de equilibrio.',
          feedback: 'Excelente inversion a largo plazo. Que los gerentes operativos entiendan finanzas reduce desperdicios y mejora decisiones en campo. Alto retorno sobre la inversion en formacion.'
        },
        {
          id: 'D',
          label: 'Asesoria tributaria especializada',
          description: 'Contratar firma contable para optimizar la carga fiscal del primer ano.',
          cost: 15000000,
          revenue: 8000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [],
          tags: ['impuestos', 'optimizacion'],
          next: 'fin_05',
          narrative: 'La firma encuentra deducciones que no conocias. Se proyecta un ahorro fiscal importante.',
          feedback: 'Muy util en el primer ano. Un buen asesor tributario se paga solo con los ahorros que genera. En Colombia hay muchos beneficios fiscales que las empresas nuevas desconocen.'
        },
        {
          id: 'E',
          label: 'Sistema de control de costos',
          description: 'Dashboard en tiempo real para monitorear gastos por local y por producto.',
          cost: 18000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Visibilidad total de costos por plato y por local', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['control', 'dashboards'],
          next: 'fin_05',
          narrative: 'Ahora puedes ver en tiempo real que local gasta mas y en que. Tomar decisiones se vuelve mas facil.',
          feedback: 'Buena inversion si ya tienes lo basico cubierto. El control de costos es donde se gana la batalla de la rentabilidad. Combinado con software contable es muy poderoso.'
        }
      ]
    },

    // ============================================================
    //  NODO 5 — DIA 11: Inversion a corto plazo
    // ============================================================
    'fin_05': {
      day: 11,
      title: 'Inversion de excedentes de caja',
      context: 'Hay $40M de excedente temporal en caja. En vez de dejarlos quietos en cuenta corriente, puedes ponerlos a trabajar a corto plazo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'CDT a 90 dias en Bancolombia',
          description: 'Tasa del 11.5% E.A. Dinero seguro pero no disponible por 3 meses.',
          cost: 40000000,
          revenue: 1100000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['CDT', 'renta-fija', 'seguro'],
          next: 'fin_06',
          narrative: 'El dinero queda bloqueado pero genera rendimiento garantizado. Cero riesgo.',
          feedback: 'Opcion segura. El CDT a 90 dias tiene riesgo cero y genera rendimiento real positivo. El problema es la iliquidez temporal. Buena si no necesitas esos $40M pronto.'
        },
        {
          id: 'B',
          label: 'Fondo de inversion colectiva (FIC)',
          description: 'Rentabilidad estimada del 13% E.A. con liquidez T+1.',
          cost: 40000000,
          revenue: 1300000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [],
          tags: ['FIC', 'liquidez', 'rendimiento'],
          next: 'fin_06',
          narrative: 'El fondo rinde un poco mas que el CDT y puedes retirar en 24 horas si necesitas el dinero.',
          feedback: 'Mejor opcion. Ofrece mayor rendimiento que el CDT Y mantiene liquidez (puedes retirar en T+1). El riesgo es minimo en fondos de renta fija. Equilibrio perfecto entre rendimiento y disponibilidad.'
        },
        {
          id: 'C',
          label: 'Dejarlo en cuenta corriente',
          description: 'Maxima liquidez pero cero rendimiento. El dinero pierde valor con la inflacion.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 0, bsc_internal: 0, bsc_learning: 0 },
          crossEffects: [],
          tags: ['ineficiente', 'inflacion'],
          next: 'fin_06',
          narrative: 'Los $40M pierden poder adquisitivo cada dia que pasan quietos. La inflacion se los come.',
          feedback: 'Mala decision. Dejar dinero quieto en cuenta corriente es destruir valor. Con inflacion del ~7% en Colombia, perdes ~$230K mensuales en poder adquisitivo. Siempre pon a trabajar los excedentes.'
        }
      ]
    },

    // ============================================================
    //  NODO 6 — DIA 14: Analisis de punto de equilibrio
    // ============================================================
    'fin_06': {
      day: 14,
      title: 'Analisis de punto de equilibrio',
      context: 'Los costos fijos mensuales son $45M y el margen de contribucion promedio por combo es $12.000. Necesitas saber cuantos combos vender al mes para no perder plata.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Meta: alcanzar punto de equilibrio exacto (3.750 combos/mes)',
          description: 'Operar al minimo para cubrir costos. Sin margen de seguridad.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: -1, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Sin presupuesto para atraer mas clientes', bsc: { bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['minimalista', 'sin-margen'],
          next: 'fin_07',
          narrative: 'Operas en el filo de la navaja. Un mal dia y estas en rojo.',
          feedback: 'Nunca planifiques para el punto de equilibrio exacto. La teoria recomienda un margen de seguridad de minimo 20-25% por encima del PE. Sin colchon, cualquier variacion te pone en perdida.'
        },
        {
          id: 'B',
          label: 'Meta: PE + 25% margen de seguridad (4.688 combos/mes)',
          description: 'Agregar colchon del 25% para absorber variaciones de demanda.',
          cost: 3000000,
          revenue: 11250000,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Meta clara permite disenar campanas enfocadas', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'operations', message: 'Produccion se organiza para volumen definido', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['margen-seguridad', 'planificado'],
          next: 'fin_07',
          narrative: 'Todas las areas alinean sus planes a la meta. Hay espacio para errores sin entrar en perdida.',
          feedback: 'Esta es la respuesta correcta. El margen de seguridad del 25% es estandar en analisis de punto de equilibrio. Permite absorber caidas de demanda, subidas de costos y errores operativos. Teoria pura.'
        },
        {
          id: 'C',
          label: 'Meta: maximizar ventas sin tope definido',
          description: 'Vender todo lo que se pueda sin preocuparse por un numero especifico.',
          cost: 5000000,
          revenue: 15000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: -2, bsc_learning: 0 },
          crossEffects: [
            { area: 'operations', message: 'Sin meta clara, produccion no puede planificar', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['ambicioso', 'desorganizado'],
          next: 'fin_07',
          narrative: 'Las ventas crecen pero sin control. Produccion no da abasto unos dias y sobra comida otros.',
          feedback: 'Parece buena idea pero genera caos operativo. Sin una meta cuantificada, no puedes planificar compras, turnos ni inventario. El punto de equilibrio sirve justamente para fijar objetivos medibles.'
        }
      ]
    },

    // ============================================================
    //  NODO 7 — DIA 16: Crisis de flujo de caja
    // ============================================================
    'fin_07': {
      day: 16,
      title: 'Crisis de flujo de caja',
      context: 'Las ventas del primer mes fueron 15% por debajo de lo esperado. Hay que cubrir nomina de $22M en 5 dias y la caja solo tiene $14M.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Usar la linea de credito rotativa',
          description: 'Tomar $10M de la linea al 18% E.A. para cubrir el faltante.',
          cost: 150000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [],
          tags: ['linea-credito', 'solucion-rapida'],
          next: 'fin_08',
          narrative: 'El dinero llega en 24 horas. Nomina cubierta sin estres. Pagas intereses pero evitas la crisis.',
          feedback: 'Esta es la respuesta correcta si abriste la linea de credito. Para eso existen: cubrir brechas temporales de liquidez. El costo es minimo ($150K) comparado con el dano de no pagar nomina.'
        },
        {
          id: 'B',
          label: 'Negociar con proveedores extender pago 15 dias',
          description: 'Pedir plazo adicional a proveedores para liberar caja para nomina.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: -1, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores aceptan pero con condiciones mas duras a futuro', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['negociacion', 'relaciones'],
          next: 'fin_08',
          narrative: 'Los proveedores aceptan de mala gana. Cubres nomina pero tu reputacion crediticia se deteriora.',
          feedback: 'Funciona como emergencia pero tiene costo oculto: los proveedores pierden confianza y pueden subir precios o exigir pagos anticipados despues. Es parche, no solucion.'
        },
        {
          id: 'C',
          label: 'Pagar nomina parcial y el resto en 15 dias',
          description: 'Pagar 60% ahora y el 40% restante cuando entre mas caja.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: -2, bsc_internal: -4, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Empleados desmotivados, riesgo de renuncias', bsc: { bsc_internal: -4, bsc_learning: -2 }, cost: 0 }
          ],
          tags: ['peligroso', 'clima-laboral'],
          next: 'fin_08',
          narrative: 'Los empleados se enteran rapido. La moral cae en picada y dos cocineros clave amenazan con irse.',
          feedback: 'Peor opcion posible. En Colombia, no pagar nomina completa y a tiempo genera riesgo legal (Ministerio de Trabajo) y destruye la moral del equipo. La nomina SIEMPRE es prioridad #1 de pago.'
        },
        {
          id: 'D',
          label: 'Venta flash de bonos de regalo al 30% de descuento',
          description: 'Vender bonos de comida con descuento para generar caja inmediata.',
          cost: 2000000,
          revenue: 10000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: 'Venta flash genera trafico y visibilidad', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['creativo', 'venta-anticipada'],
          next: 'fin_08',
          narrative: 'Los bonos se venden rapido. Cubres nomina y generas clientes futuros, aunque con margen reducido.',
          feedback: 'Creativo y funcional. Es basicamente venta anticipada de ingresos futuros con descuento. Resuelve la crisis y genera clientes, pero estas comprometiendo margen futuro. Buena solucion de emergencia.'
        }
      ]
    },

    // ============================================================
    //  NODO 8 — DIA 18: Reduccion de costos (MULTI)
    // ============================================================
    'fin_08': {
      day: 18,
      title: 'Plan de reduccion de costos',
      context: 'Tras la crisis de caja, necesitas reducir costos sin afectar la calidad. Selecciona hasta 2 medidas para implementar.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Renegociar arriendo de locales',
          description: 'Proponer contrato a 3 anos a cambio de 12% de descuento mensual.',
          cost: 0,
          revenue: 5000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['negociacion', 'costos-fijos'],
          next: 'fin_09',
          narrative: 'Los arrendatarios aceptan. Prefieren inquilino estable por 3 anos a buscar nuevo.',
          feedback: 'Excelente. Renegociar arriendos con compromiso de largo plazo es una de las formas mas efectivas de reducir costos fijos. No afecta calidad ni operacion. Deberia ser prioridad.'
        },
        {
          id: 'B',
          label: 'Optimizar turnos de personal',
          description: 'Analizar horas pico y ajustar turnos para eliminar horas muertas.',
          cost: 2000000,
          revenue: 4000000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Menos personal en horas valle, mas en horas pico', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['eficiencia', 'nomina'],
          next: 'fin_09',
          narrative: 'Los datos muestran que sobra gente de 2-4pm y falta de 7-9pm. Se redistribuyen turnos.',
          feedback: 'Inteligente. Usar datos para optimizar turnos es gestion basada en evidencia. Reduces costos de nomina sin despedir a nadie. Combinado con renegociar arriendo, es la dupla ganadora.'
        },
        {
          id: 'C',
          label: 'Reducir menu a los 10 platos mas rentables',
          description: 'Eliminar platos con bajo margen para simplificar compras e inventario.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: -2, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Cocina mas simple y rapida con menos platos', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Algunos clientes se quejan por platos eliminados', bsc: { bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['menu-engineering', 'simplificacion'],
          next: 'fin_09',
          narrative: 'La cocina es mas eficiente pero pierdes variedad. Algunos clientes habituales se quejan.',
          feedback: 'Concepto correcto (menu engineering) pero riesgoso en una cadena nueva que aun esta formando clientela. Mejor esperar a tener mas datos de ventas antes de eliminar platos. Puede funcionar pero es prematuro.'
        },
        {
          id: 'D',
          label: 'Reducir calidad de ingredientes',
          description: 'Cambiar a proveedores mas baratos para reducir costo de materia prima un 20%.',
          cost: 0,
          revenue: 6000000,
          bsc: { bsc_financial: 2, bsc_customer: -5, bsc_internal: -1, bsc_learning: -1 },
          crossEffects: [
            { area: 'marketing', message: 'Clientes notan la baja de calidad en redes sociales', bsc: { bsc_customer: -4 }, cost: 0 },
            { area: 'operations', message: 'Mas devoluciones y quejas en punto de venta', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['peligroso', 'calidad'],
          next: 'fin_09',
          narrative: 'Los numeros mejoran en el papel pero los clientes empiezan a irse. Las resenas en Google caen a 3.2 estrellas.',
          feedback: 'Grave error. Reducir calidad para bajar costos destruye la propuesta de valor. En restaurantes, los clientes detectan cambios de calidad inmediatamente. Es pan para hoy, hambre para manana. NUNCA hagas esto.'
        }
      ]
    },

    // ============================================================
    //  NODO 9 — DIA 22: Estrategia tributaria
    // ============================================================
    'fin_09': {
      day: 22,
      title: 'Estrategia tributaria primer ano',
      context: 'Se acerca la primera declaracion de renta. Tu contador presenta tres escenarios para la carga tributaria ante la DIAN.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Regimen SIMPLE de tributacion',
          description: 'Tarifa unificada del 3.7% sobre ingresos brutos. Menos tramites pero no permite descontar IVA.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [],
          tags: ['SIMPLE', 'DIAN', 'simplicidad'],
          next: 'fin_10',
          narrative: 'La contabilidad se simplifica enormemente. Un solo formulario y ya.',
          feedback: 'Funcional para negocios pequenos con pocos costos deducibles. Pero en restaurantes donde compras muchos insumos con IVA, perder el descuento de IVA puede salir mas caro. Revisa los numeros primero.'
        },
        {
          id: 'B',
          label: 'Regimen ordinario con planeacion fiscal',
          description: 'Renta al 35% sobre utilidad neta, pero con deducciones y descuentos legales maximizados.',
          cost: 10000000,
          revenue: 18000000,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [],
          tags: ['ordinario', 'planeacion-fiscal', 'optimo'],
          next: 'fin_10',
          narrative: 'El asesor encuentra deducciones por inversion, descuentos de IVA y depreciacion acelerada. El ahorro neto es significativo.',
          feedback: 'Mejor opcion. El regimen ordinario con buena planeacion fiscal permite deducir costos, descontar IVA de compras y aprovechar beneficios como depreciacion acelerada de equipos. El costo del asesor se paga con creces.'
        },
        {
          id: 'C',
          label: 'Minimizar impuestos de forma agresiva',
          description: 'Usar estructuras de facturacion entre empresas relacionadas para reducir base gravable.',
          cost: 15000000,
          revenue: 25000000,
          bsc: { bsc_financial: -3, bsc_customer: 0, bsc_internal: -2, bsc_learning: -2 },
          crossEffects: [],
          tags: ['agresivo', 'riesgo-DIAN', 'elusion'],
          next: 'fin_10',
          narrative: 'El ahorro es grande en el papel pero la DIAN tiene algoritmos de deteccion. Queda un riesgo latente de sancion.',
          feedback: 'Muy peligroso. La elusion agresiva con empresas de papel es ilegal (evasion disfrazada). La DIAN en Colombia ha fortalecido mucho la fiscalizacion. Las sanciones pueden ser del 160% del impuesto mas intereses. Jamas vale el riesgo.'
        }
      ]
    },

    // ============================================================
    //  NODO 10 — DIA 25: Proyeccion financiera final
    // ============================================================
    'fin_10': {
      day: 25,
      title: 'Proyeccion financiera a 12 meses',
      context: 'Con toda la informacion del mes piloto, debes presentar la proyeccion financiera a la junta directiva. ¿Que enfoque tomas?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Proyeccion conservadora (crecimiento 5% mensual)',
          description: 'Basada en datos reales del mes. Sin optimismo excesivo.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Presupuesto de marketing limitado para el ano', bsc: { bsc_customer: -1 }, cost: 0 }
          ],
          tags: ['conservador', 'realista'],
          next: null,
          narrative: 'La junta aprueba sin entusiasmo. Los numeros son creibles pero no emocionan a nadie.',
          feedback: 'Proyecciones conservadoras basadas en datos reales son las mas creibles. Los inversionistas y bancos prefieren que superes la proyeccion a que no la alcances. Genera confianza.'
        },
        {
          id: 'B',
          label: 'Proyeccion con tres escenarios (pesimista, base, optimista)',
          description: 'Presentar rango de resultados con probabilidades asignadas a cada uno.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Plan operativo adaptable segun escenario', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Presupuesto flexible segun resultados', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['escenarios', 'profesional', 'mejor-practica'],
          next: null,
          narrative: 'La junta queda impresionada. El analisis de escenarios demuestra madurez financiera y permite tomar decisiones informadas.',
          feedback: 'Esta es la respuesta correcta. La proyeccion por escenarios (analisis de sensibilidad) es la practica estandar en finanzas corporativas. Muestra los riesgos y oportunidades, y permite planificar contingencias para cada caso.'
        },
        {
          id: 'C',
          label: 'Proyeccion optimista (crecimiento 15% mensual)',
          description: 'Mostrar el mejor caso posible para motivar al equipo y atraer inversion.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: -1, bsc_learning: -1 },
          crossEffects: [
            { area: 'marketing', message: 'Presupuesto de marketing agresivo basado en proyeccion inflada', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['optimista', 'riesgoso'],
          next: null,
          narrative: 'El equipo se emociona pero cuando los numeros no se cumplen, la frustracion sera doble.',
          feedback: 'Peligroso. Proyecciones infladas generan expectativas irreales, sobreinversion y decepcion cuando no se cumplen. Los bancos y los inversionistas serios desconfian de proyecciones demasiado optimistas. Credibilidad ante todo.'
        },
        {
          id: 'D',
          label: 'No hacer proyeccion formal, ir mes a mes',
          description: 'Evitar comprometerse con numeros. Ajustar sobre la marcha.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -4, bsc_customer: 0, bsc_internal: -3, bsc_learning: -2 },
          crossEffects: [
            { area: 'operations', message: 'Sin proyeccion no hay plan de compras ni produccion', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['improvisacion', 'mala-practica'],
          next: null,
          narrative: 'La junta directiva pierde confianza. Sin rumbo financiero definido, cada area improvisa por su cuenta.',
          feedback: 'La peor opcion. Una empresa sin proyeccion financiera es un barco sin brujula. No planificar NO reduce el riesgo, solo te impide prepararte para el. La planeacion financiera es obligatoria, no opcional.'
        }
      ]
    }

  }
};
