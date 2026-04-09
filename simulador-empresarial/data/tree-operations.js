/* ============================================================
   TREE - OPERACIONES
   Árbol de decisiones para el área de Operaciones
   Restaurante de comida rápida colombiana en Pereira
   Presupuesto: $130.000.000 COP
   ~25 nodos de decisión | Días 1-45
   ============================================================ */
window.TREE_OPERATIONS = {
  name: 'Operaciones',
  icon: '⚙️',
  color: '#FF6B35',
  startNode: 'ops_01',
  nodes: {

    // ========================================================
    //  FASE 1 — MONTAJE Y CONFIGURACIÓN (Días 1-10)
    // ========================================================

    'ops_01': {
      day: 1,
      title: 'Capacidad de producción inicial',
      context: 'Tu cocina tiene capacidad instalada para 500 platos/día, pero el estudio de mercado proyecta una demanda de 650 platos/día en promedio. El punto de equilibrio calculado por finanzas es de 480 platos/día (con un ticket promedio de $18.000 COP y costos fijos mensuales de $38M). Operar por debajo de 480 es pérdida; por encima es ganancia. ¿Cómo resolver el déficit de capacidad de 150 platos/día?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Turno extra nocturno',
          description: 'Abrir un segundo turno de 6pm a 12am. Capacidad sube a 750 platos/día, pero los costos laborales son 35% mayores por recargo nocturno según el Código Sustantivo del Trabajo colombiano. Se necesitan 8 empleados adicionales.',
          cost: 18000000,
          revenue: 9500000,
          bsc: { bsc_financial: -3, bsc_customer: 3, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'hr', message: 'Operaciones necesita contratar 8 personas para turno nocturno con recargos del 35%', bsc: { bsc_learning: -2, bsc_internal: -2 } },
            { area: 'finance', message: 'Nómina operativa aumenta $18M por el turno extra nocturno', bsc: { bsc_financial: -3 } }
          ],
          tags: ['turno_extra', 'alta_capacidad', 'recargo_nocturno'],
          next: 'ops_02',
          narrative: 'El turno nocturno arrancó con tropiezos: los primeros días la productividad fue 40% menor que el turno diurno porque el equipo aún estaba en curva de aprendizaje. Sin embargo, al tercer día la cocina alcanzó 720 platos/día y la demanda insatisfecha se redujo casi a cero. El problema: los costos fijos subieron drásticamente.'
        },
        {
          id: 'B',
          label: 'Optimizar cuello de botella (TOC)',
          description: 'Aplicar Teoría de Restricciones: identificar la estación más lenta (el grill, que procesa 60 platos/hora vs las demás estaciones a 85/hora), invertir en un segundo grill y reorganizar el flujo. Capacidad estimada: 680 platos/día sin personal adicional.',
          cost: 12000000,
          revenue: 7000000,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 6, bsc_learning: 4 },
          crossEffects: [
            { area: 'finance', message: 'Operaciones invierte $12M en equipo de grill adicional para eliminar cuello de botella', bsc: { bsc_financial: -1 } }
          ],
          tags: ['toc', 'cuello_botella', 'optimizacion'],
          next: 'ops_02',
          narrative: 'El análisis TOC reveló que el grill era el recurso restrictivo: procesaba 60 platos/hora mientras el ensamblaje hacía 85/hora. Con el segundo grill, la estación subió a 110 platos/hora y el throughput de toda la línea aumentó a 680 platos/día. Eliyahu Goldratt estaría orgulloso. La inversión fue moderada y el equipo aprendió a pensar en restricciones.'
        },
        {
          id: 'C',
          label: 'Tercerizar preparaciones complementarias',
          description: 'Subcontratar la producción de salsas, guarniciones y postres a un centro de producción externo en Dosquebradas. La cocina interna se concentra solo en platos principales. Capacidad efectiva sube a 620 platos/día con menor inversión, pero se pierde control de calidad parcial.',
          cost: 8000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: -2, bsc_internal: 2, bsc_learning: -1 },
          crossEffects: [
            { area: 'logistics', message: 'Se requiere coordinar entregas diarias desde el centro de producción en Dosquebradas', bsc: { bsc_internal: -3 } },
            { area: 'finance', message: 'Costo de tercerización mensual: $8M COP con contrato a 3 meses', bsc: { bsc_financial: -1 } }
          ],
          tags: ['tercerizar', 'outsourcing', 'dosquebradas'],
          next: 'ops_02',
          narrative: 'La tercerización arrancó bien: las salsas y guarniciones llegaban frescas desde Dosquebradas cada mañana a las 5am. Sin embargo, en la segunda semana detectaron que el proveedor usaba aceite de menor calidad en los postres. La capacidad subió a 620 platos/día — aún 30 por debajo de la demanda — pero el costo fue el más bajo de las opciones.'
        },
        {
          id: 'D',
          label: 'Reducir tiempos con Lean Manufacturing',
          description: 'Implementar un programa de mejora continua (Kaizen blitz de 5 días) para reducir desperdicios de tiempo: eliminar movimientos innecesarios, estandarizar recetas con tiempos exactos, aplicar 5S en cada estación. Meta: reducir el tiempo de preparación de 8 a 5.5 minutos por plato. Capacidad estimada: 640 platos/día.',
          cost: 5000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 5, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'El equipo de cocina necesita 5 días de capacitación intensiva en Lean/Kaizen', bsc: { bsc_learning: 3, bsc_internal: -1 } }
          ],
          tags: ['lean', 'kaizen', '5s', 'mejora_continua'],
          next: 'ops_02',
          narrative: 'El Kaizen blitz fue transformador. El equipo mapeó el flujo de valor y descubrió que el 22% del tiempo se perdía en desplazamientos entre estaciones y en buscar utensilios. Con 5S, cada estación quedó organizada por colores y las recetas se estandarizaron en tarjetas laminadas con tiempos cronometrados. Capacidad subió a 640 platos/día — no cubre el 100% de la demanda pero la inversión fue mínima y el equipo ahora piensa en procesos.'
        }
      ]
    },

    'ops_02': {
      day: 3,
      title: 'Sistema de control de calidad',
      context: 'El restaurante necesita un sistema de control de calidad. En comida rápida, un defecto (plato frío, ingrediente faltante, porción incorrecta) genera devoluciones, desperdicio y daño reputacional. Actualmente la tasa de defectos es del 8% — inaceptable. La meta de la industria es <2%. ¿Qué enfoque de calidad implementar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Control estadístico de procesos (SPC)',
          description: 'Implementar gráficos de control (X-barra y R) en las estaciones críticas: peso de porciones, temperatura del grill, tiempo de servicio. El jefe de cocina revisa los gráficos cada 2 horas y actúa cuando un proceso sale de los límites de control. Requiere capacitación y tableros.',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 6, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'El equipo necesita capacitación en interpretación de gráficos de control estadístico', bsc: { bsc_learning: 3 } }
          ],
          tags: ['spc', 'control_estadistico', 'graficos_control'],
          next: 'ops_03a',
          narrative: 'Los gráficos de control se instalaron en tableros visibles junto a cada estación. En la primera semana, el gráfico X-barra de porciones de carne reveló que un cocinero consistentemente servía 15% más de lo estándar — buena intención, mala práctica. Se estandarizó con cucharones calibrados. La tasa de defectos bajó al 4.2% en dos semanas. El equipo empezó a hablar de "límites de control" como algo natural.'
        },
        {
          id: 'B',
          label: 'Inspección visual 100% (estilo TQC)',
          description: 'Crear el puesto de "controlador de calidad": una persona dedicada que revisa CADA plato antes de que salga al cliente. Inspección visual de presentación, temperatura con termómetro, y peso con báscula rápida. Control Total de Calidad (TQC) al estilo japonés pero con costo de personal dedicado.',
          cost: 9000000,
          revenue: 5000000,
          bsc: { bsc_financial: -2, bsc_customer: 6, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'hr', message: 'Se necesita contratar 2 controladores de calidad (uno por turno)', bsc: { bsc_internal: -1 } },
            { area: 'marketing', message: 'Operaciones garantiza 0 defectos en platos — se puede usar en comunicación', bsc: { bsc_customer: 2 } }
          ],
          tags: ['tqc', 'inspeccion_total', 'calidad_100'],
          next: 'ops_03b',
          narrative: 'La inspección al 100% es efectiva pero costosa. Los controladores devolvían entre 30 y 40 platos al día en las primeras semanas — el equipo de cocina se frustró pero la calidad hacia el cliente fue impecable. Tasa de defectos que llega al cliente: 0.5%. El problema: es un parche, no resuelve la causa raíz de los defectos.'
        },
        {
          id: 'C',
          label: 'Poka-Yoke (a prueba de errores)',
          description: 'Diseñar el proceso para que sea IMPOSIBLE cometer errores: recipientes de ingredientes con código de color, dispensadores calibrados que dan la porción exacta, timers automáticos en cada estación, bandejas con compartimentos que guían el ensamblaje del plato. Inversión alta inicial, pero el sistema se autogestiona.',
          cost: 14000000,
          revenue: 6000000,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 7, bsc_learning: 3 },
          crossEffects: [
            { area: 'innovation', message: 'El sistema Poka-Yoke de operaciones puede documentarse como innovación en procesos', bsc: { bsc_learning: 4 } }
          ],
          tags: ['poka_yoke', 'anti_error', 'automatizacion_parcial'],
          next: 'ops_03a',
          narrative: 'La inversión en Poka-Yoke fue la más alta, pero los resultados hablaron solos: los dispensadores calibrados eliminaron el problema de porciones inconsistentes de un día para otro. Los timers automáticos con alarma visual (luz roja/verde) redujeron los platos sobrecocidos un 90%. La tasa de defectos bajó al 1.8% en la primera semana. Lo mejor: no depende de la atención del cocinero.'
        }
      ]
    },

    // --- Ramas de calidad divergen aquí ---

    'ops_03a': {
      day: 5,
      title: 'Distribución de planta (Layout)',
      context: 'La cocina mide 120m². Actualmente no tiene un layout definido — los equipos se ubicaron "donde cupieron". Estudios de ingeniería de métodos muestran que el personal recorre en promedio 2.4km por turno solo en desplazamientos entre estaciones. Eso es desperdicio puro (muda de movimiento). ¿Qué distribución de planta implementar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Layout en línea (producción continua)',
          description: 'Estaciones en secuencia: recepción → preparación → cocción → ensamblaje → despacho. Como una línea de ensamblaje de Ford aplicada a comida. Flujo unidireccional, mínimo retroceso. Ideal para un menú estandarizado con pocos platos.',
          cost: 7000000,
          revenue: 3500000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'El layout en línea optimiza la recepción de insumos: la bodega queda al inicio del flujo', bsc: { bsc_internal: 2 } }
          ],
          tags: ['layout_linea', 'flujo_continuo', 'estandarizacion'],
          next: 'ops_04',
          narrative: 'La reorganización tomó un fin de semana completo (sábado y domingo cerrados). El lunes, los cocineros notaron la diferencia inmediatamente: ya no tenían que cruzarse entre estaciones. Los recorridos bajaron de 2.4km a 0.8km por turno. El flujo es predecible y rápido — pero cuando un plato especial requiere una secuencia diferente, el layout se vuelve rígido.'
        },
        {
          id: 'B',
          label: 'Layout en U (celdas de manufactura)',
          description: 'Estaciones en forma de U: un operario en el centro puede atender 2-3 estaciones girando. Permite flexibilidad con diferentes tipos de platos y balanceo de carga entre operarios. Inspirado en el Toyota Production System.',
          cost: 9000000,
          revenue: 4000000,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 6, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'El layout en U requiere que los cocineros sean polivalentes (manejar mínimo 2 estaciones)', bsc: { bsc_learning: 3, bsc_internal: -1 } }
          ],
          tags: ['layout_u', 'celda_manufactura', 'toyota', 'polivalencia'],
          next: 'ops_04',
          narrative: 'El layout en U transformó la dinámica del equipo. Un cocinero ubicado en el centro de la U podía manejar la parrilla y el ensamblaje simultáneamente. Los recorridos bajaron a 0.5km por turno — el mejor resultado posible. La comunicación visual mejoró: todos ven todo. Pero requirió 3 días extra de capacitación para que cada cocinero aprendiera múltiples estaciones.'
        },
        {
          id: 'C',
          label: 'Layout por proceso (islas funcionales)',
          description: 'Agrupar por función: isla de parrillas, isla de frituras, isla de preparación fría, isla de ensamblaje. Cada isla es autónoma y despacha componentes a la isla de ensamblaje. Máxima flexibilidad para menú diverso, pero más desplazamiento.',
          cost: 6000000,
          revenue: 2500000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [],
          tags: ['layout_proceso', 'islas', 'flexibilidad'],
          next: 'ops_04',
          narrative: 'Las islas funcionales quedaron bien organizadas internamente, pero el flujo entre ellas es caótico: los platos que requieren componentes de 3 islas diferentes generan cuellos de botella en el ensamblaje. Los recorridos bajaron solo a 1.6km/turno. La ventaja: cuando se agrega un nuevo plato al menú, no hay que reorganizar nada.'
        }
      ]
    },

    'ops_03b': {
      day: 5,
      title: 'Estandarización de procesos post-inspección',
      context: 'El sistema de inspección al 100% funciona, pero el controlador está devolviendo 35 platos/día. Eso es re-trabajo costoso. El equipo de calidad propone atacar las causas raíz con herramientas de análisis. ¿Qué enfoque usar para reducir los defectos desde el origen?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Análisis Pareto + Ishikawa',
          description: 'Clasificar los defectos con un diagrama de Pareto para encontrar el 20% de causas que generan el 80% de los problemas. Luego usar diagramas de Ishikawa (causa-efecto) para cada causa principal: mano de obra, materiales, máquinas, métodos, medio ambiente. Soluciones específicas para cada causa raíz.',
          cost: 3000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Se necesita un taller de 1 día sobre análisis de causa raíz (Pareto + Ishikawa)', bsc: { bsc_learning: 4 } }
          ],
          tags: ['pareto', 'ishikawa', 'causa_raiz', 'calidad'],
          next: 'ops_04',
          narrative: 'El Pareto reveló que el 78% de los defectos venían de solo 3 causas: porción incorrecta (35%), temperatura inadecuada (25%) y presentación descuidada (18%). Los Ishikawa para cada uno mostraron patrones claros — por ejemplo, las porciones incorrectas ocurrían más en el turno de la tarde cuando los cocineros estaban fatigados. Se implementaron medidas específicas y los defectos bajaron al 2.1%.'
        },
        {
          id: 'B',
          label: 'Programa Six Sigma (DMAIC)',
          description: 'Implementar el ciclo completo DMAIC: Definir el problema (8% defectos), Medir variables clave (25 datos por estación), Analizar correlaciones, Implementar mejoras, Controlar con indicadores. Más riguroso y costoso pero genera cultura de datos.',
          cost: 8000000,
          revenue: 6000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 4, bsc_learning: 8 },
          crossEffects: [
            { area: 'hr', message: 'Operaciones necesita formar 2 Green Belts internos para sostener el programa Six Sigma', bsc: { bsc_learning: 5, bsc_internal: -2 } },
            { area: 'innovation', message: 'El programa Six Sigma genera datos que pueden alimentar decisiones de innovación', bsc: { bsc_learning: 3 } }
          ],
          tags: ['six_sigma', 'dmaic', 'datos', 'mejora_continua'],
          next: 'ops_04',
          narrative: 'El DMAIC fue exhaustivo. La fase de Medición requirió recoger datos durante 10 días: peso exacto de cada porción, temperatura de cada plancha cada 30 minutos, tiempo de servicio de cada plato. La fase de Análisis reveló que la variación de temperatura del grill #2 tenía un sigma de 4.1 — debajo del objetivo de 4.5. Se recalibró y la tasa de defectos bajó al 1.5%. El equipo ahora habla en sigmas.'
        }
      ]
    },

    'ops_04': {
      day: 7,
      title: 'Sistema de gestión de inventarios',
      context: 'El restaurante maneja 45 ingredientes diferentes. Actualmente se pide "a ojo": cuando el cocinero ve que algo se está acabando, avisa y se compra. Resultado: 3 quiebres de stock la semana pasada (se acabó la carne un viernes a las 7pm — desastre) y $4.2M en desperdicios por sobrecompra de vegetales. Necesitas un sistema formal de inventarios. El costo de almacenamiento es ~2.5% mensual del valor del inventario y hacer un pedido cuesta $85.000 COP en transporte y gestión.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Modelo EOQ (Cantidad Económica de Pedido)',
          description: 'Calcular el lote óptimo de pedido para cada ingrediente usando la fórmula EOQ: Q* = √(2DS/H) donde D=demanda, S=costo de pedir, H=costo de almacenar. Se clasifican los ingredientes con ABC (los A con control estricto, los C con revisión periódica). Punto de reorden con stock de seguridad basado en la variabilidad de la demanda.',
          cost: 4000000,
          revenue: 6000000,
          bsc: { bsc_financial: 4, bsc_customer: 2, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'finance', message: 'El modelo EOQ optimiza el capital de trabajo: se reduce inventario promedio en 30%', bsc: { bsc_financial: 3 } },
            { area: 'logistics', message: 'Logística debe coordinar pedidos según puntos de reorden calculados por operaciones', bsc: { bsc_internal: 2 } }
          ],
          tags: ['eoq', 'inventario', 'punto_reorden', 'abc', 'stock_seguridad'],
          next: 'ops_05',
          narrative: 'Los cálculos EOQ arrojaron resultados reveladores: la carne (ítem clase A, 40% del costo total) debía pedirse cada 3 días en lotes de 180kg con un stock de seguridad de 45kg. Los vegetales (clase B) cada 5 días. Las especias (clase C) mensual. Los quiebres de stock se eliminaron y el desperdicio bajó un 60%. El inventario promedio se redujo de $28M a $19M — capital de trabajo liberado.'
        },
        {
          id: 'B',
          label: 'Just-In-Time (JIT) con proveedores',
          description: 'Negociar con 3 proveedores locales entregas diarias de ingredientes frescos. Inventario mínimo: solo lo necesario para el día + un buffer de 15%. Cero almacenamiento de perecederos. Requiere proveedores confiables y contratos con penalidades por incumplimiento.',
          cost: 6000000,
          revenue: 7000000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'logistics', message: 'JIT exige entregas diarias puntuales: logística debe monitorear 3 proveedores cada mañana', bsc: { bsc_internal: -3, bsc_customer: 2 } },
            { area: 'finance', message: 'JIT elimina costos de almacenamiento pero los precios unitarios suben 8% por lotes pequeños', bsc: { bsc_financial: 1 } }
          ],
          tags: ['jit', 'inventario_cero', 'proveedores_locales'],
          next: 'ops_05',
          narrative: 'El JIT funcionó como un reloj las primeras 3 semanas. Ingredientes fresquísimos llegaban a las 5am cada mañana desde la plaza de mercado de Pereira y de una finca en Cerritos. La calidad del plato mejoró notablemente — los clientes notaron la diferencia. Pero la vulnerabilidad es alta: cualquier retraso de un proveedor puede paralizar la cocina entera.'
        },
        {
          id: 'C',
          label: 'Sistema híbrido: EOQ para secos + JIT para frescos',
          description: 'Clasificar ingredientes en dos grupos: secos/no perecederos (arroz, aceite, especias, salsas envasadas) con modelo EOQ y revisión periódica semanal; frescos/perecederos (carne, pollo, vegetales, lácteos) con entregas JIT diarias. Lo mejor de ambos mundos.',
          cost: 5000000,
          revenue: 7500000,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 6, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Sistema híbrido requiere dos flujos de abastecimiento: semanal para secos, diario para frescos', bsc: { bsc_internal: 1 } },
            { area: 'finance', message: 'Modelo híbrido de inventarios reduce capital inmovilizado en 25% vs modelo único', bsc: { bsc_financial: 2 } }
          ],
          tags: ['eoq', 'jit', 'hibrido', 'inventario', 'clasificacion'],
          next: 'ops_05',
          narrative: 'El sistema híbrido resultó ser la decisión más madura operativamente. Los secos se pidieron con EOQ: arroz cada 10 días en bultos de 50kg (Q*=48.7, redondeado). Los frescos llegaron diarios de la Central de Abastos de Pereira. Se redujo el desperdicio de perecederos un 75% y nunca más se agotó el arroz ni el aceite. Complejidad de gestión mayor, pero resultados superiores.'
        }
      ]
    },

    'ops_05': {
      day: 9,
      title: 'Método de pronóstico de demanda',
      context: 'Tienes 30 días de datos de ventas. La demanda varía: lunes-martes baja (~450 platos), miércoles-jueves media (~600), viernes-sábado alta (~800), domingo media-alta (~650). Pero también hay tendencia creciente y el mes próximo es diciembre (estacionalidad fuerte en Pereira: novenas, alumbrados del Viaducto, cenas empresariales). Necesitas pronosticar la demanda para planear producción, compras e inventarios. ¿Qué método usar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Promedio móvil ponderado (3 semanas)',
          description: 'Usar los datos de las últimas 3 semanas con pesos: semana reciente (50%), anterior (30%), hace 2 semanas (20%). Simple, fácil de calcular en Excel, el equipo lo puede mantener. Limitación: reacciona lento a cambios bruscos y no captura estacionalidad automáticamente.',
          cost: 1000000,
          revenue: 2000000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'logistics', message: 'Pronóstico por promedio móvil genera pedidos de abastecimiento estables pero poco reactivos', bsc: { bsc_internal: 1 } }
          ],
          tags: ['pronostico', 'promedio_movil', 'demanda', 'excel'],
          next: 'ops_06',
          narrative: 'El promedio móvil ponderado fue fácil de implementar: una hoja de Excel con fórmulas simples. El error MAPE (Mean Absolute Percentage Error) fue del 14.3% — aceptable para el día a día pero preocupante para planear diciembre. El pronóstico subestimó consistentemente los fines de semana porque el promedio "suaviza" los picos. Hubo 2 días de quiebre de stock los sábados.'
        },
        {
          id: 'B',
          label: 'Suavización exponencial doble (Holt)',
          description: 'Aplicar el método de Holt que captura tanto el nivel como la tendencia de la demanda. Parámetros: α=0.3 (suavización nivel), β=0.2 (suavización tendencia). Más preciso que el promedio móvil para demanda con tendencia. Requiere calibración inicial de parámetros.',
          cost: 3000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Pronóstico Holt anticipa tendencia creciente: logística debe preparar mayores volúmenes graduales', bsc: { bsc_internal: 2 } },
            { area: 'finance', message: 'El pronóstico de Holt proyecta 15% más demanda para diciembre — finanzas debe prever flujo de caja', bsc: { bsc_financial: 1 } }
          ],
          tags: ['pronostico', 'holt', 'suavizacion_exponencial', 'tendencia'],
          next: 'ops_06',
          narrative: 'El modelo de Holt capturó la tendencia creciente que el promedio móvil ignoraba: la demanda subía ~12 platos/día cada semana por el creciente reconocimiento de marca. El MAPE bajó a 10.8%. Los pronósticos para diciembre fueron más agresivos — y acertados. Sin embargo, no capturó el patrón por día de la semana: seguía subestimando sábados y sobreestimando lunes.'
        },
        {
          id: 'C',
          label: 'Holt-Winters (triple: nivel + tendencia + estacionalidad)',
          description: 'El modelo completo de Holt-Winters con componente estacional semanal (ciclo de 7 días). Parámetros: α=0.3, β=0.15, γ=0.25. Captura patrones diarios, tendencia y permite ajustar por estacionalidad de diciembre. El más preciso pero requiere más datos históricos y calibración cuidadosa.',
          cost: 5000000,
          revenue: 6000000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 5, bsc_learning: 7 },
          crossEffects: [
            { area: 'logistics', message: 'Holt-Winters genera pronósticos diarios precisos: logística puede optimizar pedidos por día de semana', bsc: { bsc_internal: 3 } },
            { area: 'marketing', message: 'El pronóstico identifica los días bajos — marketing puede diseñar promociones para lunes y martes', bsc: { bsc_customer: 2 } },
            { area: 'hr', message: 'Con pronósticos diarios, RRHH puede planear turnos flexibles según demanda esperada', bsc: { bsc_internal: 2 } }
          ],
          tags: ['pronostico', 'holt_winters', 'estacionalidad', 'triple'],
          next: 'ops_06',
          narrative: 'Holt-Winters fue revelador. Los índices estacionales semanales mostraron que los sábados la demanda era 1.38 veces el promedio y los lunes 0.72 veces. Con eso, los pronósticos diarios tuvieron un MAPE de solo 6.9%. Para diciembre, el modelo proyectó un incremento del 35% sobre el promedio con pico en la semana de Navidad. Se ajustaron compras, turnos y capacidad con tres semanas de anticipación.'
        },
        {
          id: 'D',
          label: 'Regresión lineal múltiple',
          description: 'Construir un modelo de regresión: Demanda = f(día_semana, semana_mes, temperatura, eventos_especiales, lluvia). Usar los 30 días como datos de entrenamiento. Requiere recopilar variables adicionales pero el modelo es explicativo: muestra cuánto impacta cada factor.',
          cost: 4000000,
          revenue: 5000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 3, bsc_learning: 8 },
          crossEffects: [
            { area: 'innovation', message: 'El modelo de regresión es una herramienta analítica que puede escalar a otros procesos', bsc: { bsc_learning: 3 } }
          ],
          tags: ['pronostico', 'regresion', 'multiple', 'variables', 'analitica'],
          next: 'ops_06',
          narrative: 'La regresión lineal múltiple dio resultados interesantes (R²=0.82): día sábado sumaba +280 platos sobre el intercepto, la lluvia restaba -95 platos, y un evento especial en la ciudad sumaba +150. El modelo explicaba bien el pasado, pero con solo 30 datos los intervalos de confianza eran amplios. MAPE del 9.2%. Lo mejor: el equipo ahora entiende cuantitativamente qué mueve la demanda.'
        }
      ]
    },

    // ========================================================
    //  FASE 2 — OPTIMIZACIÓN (Días 12-25)
    // ========================================================

    'ops_06': {
      day: 12,
      title: 'Cuello de botella identificado — Teoría de Restricciones',
      context: 'Llevas 12 días operando y los datos son claros: la estación de ensamblaje final es el cuello de botella. Tiene capacidad para 70 platos/hora pero las estaciones anteriores producen 90/hora. Se acumula WIP (trabajo en proceso) — hay platos a medio armar esperando. Esto genera desperdicio porque la comida se enfría. Según Goldratt, el output del sistema ENTERO lo dicta el cuello de botella. ¿Cómo explotar la restricción?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Subordinar todo al cuello de botella (DBR)',
          description: 'Implementar Drum-Buffer-Rope: el ensamblaje es el "tambor" que marca el ritmo. Las estaciones anteriores reducen velocidad a 70/hora (no producir más de lo que ensamblaje puede manejar). Se coloca un buffer de 15 minutos antes del ensamblaje. La "cuerda" es la señal que autoriza nuevas producciones solo cuando ensamblaje libera capacidad.',
          cost: 2000000,
          revenue: 4000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 6, bsc_learning: 7 },
          crossEffects: [],
          tags: ['toc', 'dbr', 'cuello_botella', 'goldratt', 'restriccion'],
          next: 'ops_07',
          narrative: 'El sistema DBR fue contraintuitivo para el equipo: "¿cómo que no produzca al máximo?". Pero cuando se implementó, el WIP acumulado antes de ensamblaje desapareció. Cero platos enfriándose. La producción total no cambió (sigue siendo 70/hora en el cuello de botella) pero la calidad mejoró y el desperdicio por re-trabajo bajó un 40%. La lección de Goldratt: una hora perdida en el cuello de botella es una hora perdida en TODO el sistema.'
        },
        {
          id: 'B',
          label: 'Elevar la restricción (invertir en ensamblaje)',
          description: 'Comprar una segunda estación de ensamblaje y reorganizar el espacio. Con dos estaciones, la capacidad sube de 70 a 130 platos/hora. El cuello de botella se mueve a la siguiente estación más lenta. Inversión fuerte pero elimina la restricción actual.',
          cost: 15000000,
          revenue: 8000000,
          bsc: { bsc_financial: -3, bsc_customer: 4, bsc_internal: 5, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Inversión de $15M en segunda estación de ensamblaje — impacto en flujo de caja', bsc: { bsc_financial: -3 } },
            { area: 'hr', message: 'Se necesitan 2 ensambladores adicionales para la nueva estación', bsc: { bsc_internal: -1 } }
          ],
          tags: ['toc', 'elevar_restriccion', 'inversion', 'capacidad'],
          next: 'ops_07',
          narrative: 'La segunda estación de ensamblaje entró a operar en el día 14. De golpe, la capacidad de ensamblaje subió a 130/hora y el cuello de botella se movió a la estación de cocción (90/hora). La producción total sí aumentó — de 70 a 90 platos/hora — un salto del 28%. La inversión fue alta pero el throughput adicional generó $8M en ingresos extra. Lección de TOC: cuando elevas una restricción, otra aparece.'
        },
        {
          id: 'C',
          label: 'Rediseñar el proceso de ensamblaje',
          description: 'Hacer un estudio de tiempos y movimientos de la estación de ensamblaje. Descubrir qué sub-tareas se pueden paralelizar, cuáles eliminar, cuáles mover a estaciones anteriores (pre-ensamblaje). Sin inversión en equipo — pura ingeniería de métodos.',
          cost: 3000000,
          revenue: 5000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 7, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Estudio de tiempos y movimientos requiere cronometrar a los operarios — puede generar resistencia', bsc: { bsc_learning: -1, bsc_internal: 1 } }
          ],
          tags: ['toc', 'ingenieria_metodos', 'tiempos_movimientos', 'rediseno'],
          next: 'ops_07',
          narrative: 'El estudio de tiempos reveló que el 30% del tiempo de ensamblaje se iba en buscar ingredientes y salsas que debían estar pre-porcionados. Se creó una estación de "mise en place" previa que preparaba todos los componentes listos para ensamblar. La capacidad de ensamblaje subió de 70 a 95 platos/hora sin comprar nada nuevo. Puro conocimiento aplicado. Frederick Taylor sonreiría.'
        }
      ]
    },

    'ops_07': {
      day: 14,
      title: 'Estrategia de mantenimiento',
      context: 'La parrilla industrial (el equipo más crítico, vale $45M) ya mostró una falla menor: se apagó sola por sobrecalentamiento durante 40 minutos el martes del almuerzo. Se perdieron $1.2M en ventas ese rato. El horno tiene 3 años y está en garantía extendida. La nevera industrial también hace un ruido sospechoso. ¿Qué estrategia de mantenimiento adoptar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Mantenimiento preventivo programado',
          description: 'Contratar mantenimiento mensual para todos los equipos: revisión de gas, limpieza profunda, calibración de temperaturas, cambio de piezas de desgaste según manual del fabricante. La parrilla se revisa cada 15 días por ser crítica. Costo fijo mensual predecible.',
          cost: 7000000,
          revenue: 3000000,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Mantenimiento preventivo: $7M fijos mensuales pero reduce riesgo de paradas no programadas', bsc: { bsc_financial: -1 } }
          ],
          tags: ['mantenimiento_preventivo', 'programado', 'confiabilidad'],
          next: 'ops_08',
          narrative: 'El mantenimiento preventivo se programó los lunes a las 6am (antes de abrir). Cada revisión se documentó en una bitácora. En la primera revisión de la parrilla se encontró una válvula de gas con desgaste prematuro — se cambió antes de que fallara. La nevera tenía un compresor desalineado: reparado. Cero paradas no programadas en las siguientes 4 semanas. El costo es fijo pero la tranquilidad no tiene precio.'
        },
        {
          id: 'B',
          label: 'Mantenimiento Productivo Total (TPM)',
          description: 'Implementar TPM: los propios operarios hacen mantenimiento autónomo diario (limpieza, lubricación, inspección visual, detectar anomalías). Un técnico especializado hace mantenimiento profundo quincenal. Se mide el OEE (Overall Equipment Effectiveness). Meta: OEE > 85%.',
          cost: 10000000,
          revenue: 6000000,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 7, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'TPM requiere capacitar a todo el equipo en mantenimiento autónomo (15 min/día)', bsc: { bsc_learning: 4, bsc_internal: -1 } }
          ],
          tags: ['tpm', 'oee', 'mantenimiento_autonomo', 'eficiencia_equipos'],
          next: 'ops_08',
          narrative: 'El TPM transformó la relación del equipo con las máquinas. Cada cocinero ahora hace 15 minutos de mantenimiento autónomo al inicio del turno: limpieza profunda, inspección visual, reporte de anomalías. El primer OEE medido fue 71% — preocupante. Con TPM subió a 88% en 3 semanas. Lo mejor: un cocinero detectó una micro-fuga de gas que el técnico no había visto. El equipo se volvió dueño de sus máquinas.'
        },
        {
          id: 'C',
          label: 'Mantenimiento reactivo + repuestos de respaldo',
          description: 'No gastar en prevención. En su lugar, comprar repuestos críticos de respaldo (termostato, resistencia, válvula de gas, compresor de nevera) para reparar rápido cuando algo falle. Tener el número del técnico disponible 24/7 con contrato de respuesta en máximo 2 horas.',
          cost: 5000000,
          revenue: 1000000,
          bsc: { bsc_financial: 2, bsc_customer: -3, bsc_internal: -2, bsc_learning: -1 },
          crossEffects: [
            { area: 'finance', message: 'Ahorro a corto plazo en mantenimiento, pero riesgo de paradas costosas', bsc: { bsc_financial: 2 } }
          ],
          tags: ['mantenimiento_reactivo', 'repuestos', 'riesgo'],
          next: 'ops_08',
          narrative: 'El ahorro inicial fue atractivo. Pero en el día 22, la parrilla falló de nuevo — esta vez por 2.5 horas porque el técnico estaba en otro servicio. Se perdieron $3.8M en ventas de almuerzo. Y la nevera finalmente se dañó un jueves a las 11pm: $8M en ingredientes perecederos echados a perder. El "ahorro" en mantenimiento terminó costando 3 veces más. Lección dolorosa: el mantenimiento reactivo es el más caro de todos.'
        }
      ]
    },

    'ops_08': {
      day: 17,
      title: 'Herramientas de optimización Lean',
      context: 'Llevas 17 días y ya hay datos. El desperdicio total (merma de ingredientes + tiempo perdido + re-trabajo) es del 18% del costo de producción — $2.3M/día que se pierden sin generar valor. En Lean Manufacturing, todo lo que el cliente no paga es "muda" (desperdicio). Taiichi Ohno identificó 7 tipos. ¿Qué herramienta Lean implementar para reducir el desperdicio?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Value Stream Mapping (VSM)',
          description: 'Mapear TODOS los flujos de valor desde que el ingrediente entra hasta que el plato sale al cliente. Identificar actividades que agregan valor (30% del tiempo), las que no agregan valor pero son necesarias (20%), y las que son puro desperdicio (50%). Visualizar para eliminar.',
          cost: 2500000,
          revenue: 3500000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'logistics', message: 'El VSM revela ineficiencias en el flujo de abastecimiento — logística puede optimizar entregas', bsc: { bsc_internal: 2 } }
          ],
          tags: ['lean', 'vsm', 'flujo_valor', 'muda'],
          next: 'ops_09',
          narrative: 'El mapa de flujo de valor se pintó en una pared entera de la cocina. La revelación: solo el 28% del tiempo total desde que entra un ingrediente hasta que sale el plato era "valor agregado" real. El 72% eran esperas, transportes, inspecciones y almacenamiento temporal. Se identificaron 12 oportunidades de mejora. Las top 3 se implementaron de inmediato y el desperdicio bajó al 13%.'
        },
        {
          id: 'B',
          label: '5S intensivo',
          description: 'Implementar las 5S en toda la cocina: Seiri (clasificar - eliminar lo innecesario), Seiton (ordenar - un lugar para cada cosa), Seiso (limpiar - inspeccionar mientras se limpia), Seiketsu (estandarizar - mantener los 3 anteriores), Shitsuke (disciplina - crear hábito).',
          cost: 3000000,
          revenue: 2500000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: '5S requiere compromiso diario de todo el equipo — RRHH debe incluirlo en evaluación de desempeño', bsc: { bsc_learning: 2 } }
          ],
          tags: ['lean', '5s', 'orden', 'estandarizacion', 'habito'],
          next: 'ops_09',
          narrative: 'El antes y después fue dramático. Seiri eliminó 23 utensilios que nadie usaba pero "por si acaso" ocupaban espacio. Seiton marcó cada zona con cinta de colores y siluetas de herramientas. Seiso descubrió que detrás de la freidora había grasa acumulada de semanas — riesgo de incendio eliminado. El tiempo promedio buscando utensilios bajó de 45 segundos a 8 segundos por búsqueda. Multiplicado por 300 platos/día, eso es tiempo.'
        },
        {
          id: 'C',
          label: 'Sistema Kanban de producción',
          description: 'Implementar tarjetas Kanban entre estaciones: cuando ensamblaje consume una bandeja de ingredientes, la tarjeta viaja a preparación autorizando la siguiente producción. Sistema pull: solo se produce lo que se necesita. Elimina sobreproducción (la "madre de todos los desperdicios" según Ohno).',
          cost: 1500000,
          revenue: 3000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [],
          tags: ['lean', 'kanban', 'pull', 'sobreproduccion'],
          next: 'ops_09',
          narrative: 'Las tarjetas Kanban (laminadas, con código de color por tipo de plato) circularon entre estaciones como un sistema nervioso visual. Cuando ensamblaje necesitaba más proteína, la tarjeta roja viajaba a cocción. Resultado: se eliminó la sobreproducción que antes generaba 40 porciones de arroz de más por turno (se botaban al final del día). La cocina ahora produce al ritmo del cliente, no al ritmo del cocinero.'
        },
        {
          id: 'D',
          label: 'SMED (cambio rápido de producción)',
          description: 'Aplicar Single Minute Exchange of Die: reducir el tiempo de cambio entre tipos de plato. Actualmente cambiar de "bandeja paisa" a "wrap de pollo" toma 12 minutos (limpiar estación, cambiar insumos, ajustar temperaturas). Meta: bajarlo a 4 minutos. Más cambios rápidos = más variedad sin perder productividad.',
          cost: 2000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'SMED permite menú más variado sin perder velocidad — marketing puede ofrecer más opciones', bsc: { bsc_customer: 3 } }
          ],
          tags: ['lean', 'smed', 'cambio_rapido', 'flexibilidad'],
          next: 'ops_09',
          narrative: 'El análisis SMED clasificó las tareas de cambio en internas (solo se hacen con máquina parada: 8 min) y externas (se pueden hacer antes: 4 min). Se reorganizó para que TODAS las tareas externas se hicieran en paralelo mientras se terminaba el último plato anterior. El cambio bajó de 12 a 4.5 minutos. El menú pudo ampliarse de 6 a 9 platos sin perder capacidad efectiva.'
        }
      ]
    },

    'ops_09': {
      day: 20,
      title: 'Crisis de calidad — Defectos se disparan',
      context: '¡Alerta roja! Los últimos 3 días la tasa de defectos subió del 2.5% al 9.8%. Los clientes están devolviendo platos y las calificaciones en redes cayeron de 4.6 a 4.1 estrellas. Un análisis rápido revela tres posibles causas simultáneas: (1) se cambió de proveedor de carne la semana pasada, (2) un equipo de cocción tiene lecturas de temperatura irregulares, (3) hubo rotación de 3 cocineros nuevos esta semana. ¿Cómo atacar la crisis?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Ataque sistémico: SPC + Pareto + Ishikawa',
          description: 'Dedicar 2 días a recoger datos rigurosos: qué tipo de defectos, en qué turno, con qué cocinero, qué ingredientes. Construir un Pareto para priorizar y un Ishikawa para cada causa principal (las 6M: Mano de obra, Materiales, Máquinas, Métodos, Medición, Medio ambiente). Soluciones basadas en evidencia.',
          cost: 4000000,
          revenue: 7000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 6, bsc_learning: 8 },
          crossEffects: [
            { area: 'marketing', message: 'Operaciones pide tiempo para resolver crisis de calidad — marketing debe manejar expectativas en redes', bsc: { bsc_customer: -2 } },
            { area: 'hr', message: 'El análisis de causa raíz reveló que los 3 cocineros nuevos no recibieron inducción adecuada', bsc: { bsc_learning: -3 } }
          ],
          tags: ['crisis_calidad', 'spc', 'pareto', 'ishikawa', '6m', 'causa_raiz'],
          next: 'ops_10',
          narrative: 'El análisis de datos fue revelador. El Pareto mostró: 45% de los defectos eran por temperatura (la máquina descalibrada), 30% por textura de carne (nuevo proveedor), 25% por presentación (cocineros nuevos sin entrenamiento). Los Ishikawa profundizaron cada causa. Se recalibró el equipo, se volvió al proveedor anterior temporalmente, y se diseñó un programa de entrenamiento para nuevos cocineros. En 5 días la tasa bajó a 1.8%. La crisis se convirtió en aprendizaje.'
        },
        {
          id: 'B',
          label: 'Acción rápida: resolver las 3 causas en paralelo',
          description: 'No esperar a analizar datos. Atacar las 3 causas simultáneamente HOY: (1) volver al proveedor anterior de carne inmediatamente, (2) llamar al técnico para recalibrar el equipo AHORA, (3) asignar un cocinero senior como mentor de los 3 nuevos. Velocidad sobre perfección analítica.',
          cost: 6000000,
          revenue: 5000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'Cambio urgente de proveedor de carne: logística debe contactar al anterior y negociar reactivación', bsc: { bsc_internal: -2, bsc_customer: 1 } },
            { area: 'hr', message: 'Asignar mentor senior a nuevos cocineros: impacto en productividad del senior por 1 semana', bsc: { bsc_learning: 2 } }
          ],
          tags: ['crisis_calidad', 'accion_rapida', 'paralelo', 'urgente'],
          next: 'ops_10',
          narrative: 'La velocidad de respuesta impresionó al equipo. En 24 horas: el proveedor anterior de carne aceptó reanudar con un 5% de incremento por la urgencia, el técnico recalibró la plancha en 2 horas (tenía un sensor dañado), y el cocinero senior Carlos asumió como mentor. La tasa de defectos bajó al 3.2% en 2 días — más rápido que el enfoque analítico pero sin saber cuál fue la causa principal real. Si vuelve a pasar, ¿sabrán qué resolver primero?'
        }
      ]
    },

    'ops_10': {
      day: 23,
      title: 'Expansión de capacidad — Análisis de punto de equilibrio',
      context: 'La demanda ha crecido sostenidamente: ahora promedia 780 platos/día y la capacidad máxima actual es ~720. Estás rechazando clientes (o haciéndolos esperar demasiado y se van). Finanzas te pide un análisis de punto de equilibrio para una expansión: ampliar la cocina (agregar 40m² al local actual rentando el espacio contiguo). Costos fijos subirían de $38M/mes a $52M/mes. Los costos variables se mantendrían en $8.500/plato. El ticket promedio es $18.000 COP. ¿Vale la pena expandir?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Expandir — el punto de equilibrio nuevo es alcanzable',
          description: 'Nuevo PE = CF/(P-CV) = $52M/($18.000-$8.500) = 5.474 platos/mes = ~182/día. Ya vendes 780/día, así que estás MUY por encima del PE incluso expandido. El margen adicional por los ~100 platos/día que hoy se pierden: ~$950.000/día = $28.5M/mes en contribución marginal. La expansión se paga sola en 2 meses.',
          cost: 22000000,
          revenue: 14000000,
          bsc: { bsc_financial: 4, bsc_customer: 5, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Expansión de cocina: inversión inicial de $22M + costos fijos mensuales suben $14M', bsc: { bsc_financial: -3 } },
            { area: 'hr', message: 'La expansión requiere 5 nuevos empleados de cocina', bsc: { bsc_internal: -2 } },
            { area: 'logistics', message: 'Más capacidad = más insumos: volumen de compras sube 25%', bsc: { bsc_internal: -1 } }
          ],
          tags: ['expansion', 'punto_equilibrio', 'capacidad', 'crecimiento'],
          next: 'ops_11a',
          narrative: 'La expansión se aprobó con los números del punto de equilibrio como respaldo. La nueva cocina de 160m² (120 originales + 40 nuevos) permitió reconfigurar el layout e instalar equipos adicionales. La capacidad subió a 950 platos/día. Los primeros días post-expansión fueron caóticos — nuevo espacio, nuevos flujos — pero al final de la primera semana el throughput alcanzó 820 platos/día. La demanda insatisfecha se eliminó y los ingresos subieron 18%.'
        },
        {
          id: 'B',
          label: 'No expandir — optimizar primero y manejar demanda',
          description: 'La expansión es riesgosa: si la demanda baja (post-diciembre, por ejemplo), los $14M extra de costos fijos son un lastre. En lugar de expandir, implementar: (1) sistema de reservas para gestionar picos, (2) menú reducido en horas pico para acelerar throughput, (3) pre-preparación nocturna de componentes. Meta: exprimir los 720 platos/día actuales al 100% antes de invertir.',
          cost: 5000000,
          revenue: 6000000,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'El menú se reducirá en horas pico — marketing debe comunicarlo como "menú express seleccionado"', bsc: { bsc_customer: -2, bsc_internal: 1 } }
          ],
          tags: ['optimizacion', 'punto_equilibrio', 'riesgo', 'conservador'],
          next: 'ops_11b',
          narrative: 'La decisión conservadora tenía lógica financiera. Se implementaron las 3 medidas: el sistema de reservas manejó los picos (los clientes con reserva entraban primero), el menú express de 4 platos en hora pico aceleró la producción un 15%, y la pre-preparación nocturna ganó 45 minutos cada mañana. La capacidad efectiva subió de 720 a 785 platos/día sin invertir en expansión. Pero todavía se pierden clientes los sábados.'
        }
      ]
    },

    // --- Ramas que divergen en fase 2 ---

    'ops_11a': {
      day: 25,
      title: 'Programación lineal para optimizar la mezcla de producción',
      context: 'Con la cocina expandida tienes capacidad para 950 platos/día. Pero ¿cuántos de cada tipo producir? Tienes 4 platos principales con diferente margen de contribución y diferentes requerimientos de recursos:\n\n• Bandeja Paisa: margen $9.500, usa 15 min grill + 8 min ensamblaje\n• Wrap de Pollo: margen $7.200, usa 8 min horno + 5 min ensamblaje\n• Bowl Vegano: margen $8.800, usa 0 min grill + 12 min ensamblaje\n• Hamburguesa Premium: margen $11.000, usa 12 min grill + 7 min ensamblaje\n\nGrill: 900 min/día disponibles. Horno: 480 min/día. Ensamblaje: 660 min/día. ¿Cómo decidir la mezcla óptima?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Resolver con programación lineal (Solver)',
          description: 'Formular como un modelo de PL: MAX Z = 9500x₁ + 7200x₂ + 8800x₃ + 11000x₄ sujeto a las restricciones de tiempo de grill, horno y ensamblaje. Resolver con Excel Solver o manualmente con Simplex. Obtener la mezcla que maximiza la contribución total.',
          cost: 2000000,
          revenue: 9000000,
          bsc: { bsc_financial: 5, bsc_customer: 2, bsc_internal: 5, bsc_learning: 8 },
          crossEffects: [
            { area: 'finance', message: 'La solución de PL maximiza la contribución diaria — finanzas proyecta +$9M/mes en margen', bsc: { bsc_financial: 4 } },
            { area: 'marketing', message: 'La PL recomienda producir más hamburguesas premium — marketing debe promoverlas', bsc: { bsc_customer: 2 } }
          ],
          tags: ['programacion_lineal', 'solver', 'simplex', 'mezcla_optima', 'optimizacion'],
          next: 'ops_12',
          narrative: 'El modelo de PL se resolvió en Excel Solver: la mezcla óptima era 30 bandejas paisas, 60 wraps, 25 bowls veganos y 45 hamburguesas premium por turno. La contribución diaria total subió un 22% respecto a la mezcla intuitiva anterior. Los precios sombra revelaron que el grill era el recurso más escaso (precio sombra: $380/min) — cada minuto adicional de grill generaría $380 más en contribución. Pura AdmOp II aplicada.'
        },
        {
          id: 'B',
          label: 'Producir según demanda histórica',
          description: 'No modelar. Simplemente producir en las mismas proporciones que la demanda histórica: 35% bandeja paisa, 25% wrap, 15% bowl, 25% hamburguesa. Sencillo y alineado con lo que el cliente pide. No maximiza el margen, pero tampoco genera excedentes ni faltantes.',
          cost: 0,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [],
          tags: ['demanda_historica', 'conservador', 'simple'],
          next: 'ops_12',
          narrative: 'Producir según demanda histórica fue la opción segura. No hubo desperdicios significativos ni faltantes frecuentes. Pero al comparar con la solución de PL, el restaurante dejó de ganar ~$5.8M/mes en contribución por no optimizar la mezcla. La bandeja paisa se producía en exceso (alto volumen, margen medio) y la hamburguesa premium (alto margen) se quedaba corta por falta de análisis.'
        },
        {
          id: 'C',
          label: 'Análisis de margen de contribución por recurso restrictivo',
          description: 'Sin resolver PL completo, calcular la contribución por minuto de recurso restrictivo (grill): Bandeja $633/min, Wrap N/A (usa horno), Bowl N/A, Hamburguesa $917/min. Priorizar los platos con mayor margen por minuto del cuello de botella. Es la heurística de TOC aplicada a la mezcla.',
          cost: 1000000,
          revenue: 7000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 4, bsc_learning: 6 },
          crossEffects: [
            { area: 'marketing', message: 'La heurística TOC prioriza hamburguesa premium — puede haber desabastecimiento de bandeja paisa', bsc: { bsc_customer: -1 } }
          ],
          tags: ['toc', 'margen_contribucion', 'recurso_restrictivo', 'heuristica'],
          next: 'ops_12',
          narrative: 'La heurística fue elegante: maximizar la hamburguesa premium ($917/min de grill) hasta agotar su demanda, luego bandeja paisa ($633/min), y llenar capacidad restante con wraps y bowls (no usan grill). La contribución subió un 18% — no tanto como la PL óptima pero 90% del resultado con 10% del esfuerzo analítico. La lección: no siempre necesitas el modelo perfecto; a veces una buena heurística es suficiente.'
        }
      ]
    },

    'ops_11b': {
      day: 25,
      title: 'Gestión de demanda sin expansión',
      context: 'Decidiste no expandir. Los sábados sigues perdiendo entre 80 y 120 clientes que se van por tiempos de espera de más de 25 minutos. El equipo de marketing presiona para "hacer algo" porque los clientes se quejan en redes. ¿Cómo gestionar la demanda cuando la capacidad es fija?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Nivelación de demanda (Heijunka)',
          description: 'Aplicar el concepto Toyota de Heijunka: nivelar la producción distribuyendo la demanda en el tiempo. Implementar precios dinámicos: descuento del 15% lunes-martes, precio normal miércoles-jueves, recargo del 10% viernes-sábado. Incentivar que los clientes vengan en días de baja demanda.',
          cost: 2000000,
          revenue: 5000000,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Precios dinámicos: marketing debe comunicar los descuentos L-M como "Días Smart" para posicionarlos positivamente', bsc: { bsc_customer: 2 } },
            { area: 'finance', message: 'Precios dinámicos cambian el ticket promedio: baja L-M, sube V-S. Finanzas debe recalcular proyecciones', bsc: { bsc_financial: 1 } }
          ],
          tags: ['heijunka', 'nivelacion', 'precios_dinamicos', 'capacidad_fija'],
          next: 'ops_12',
          narrative: 'Los "Días Smart" (lunes y martes con 15% de descuento) fueron un éxito moderado: la demanda de L-M subió un 20% y la de sábado bajó un 8%. No resolvió el problema completamente pero la distribución semanal mejoró. El throughput semanal total subió un 5% sin agregar capacidad — simplemente aprovechando mejor la capacidad ociosa de lunes y martes. Taiichi Ohno estaría satisfecho.'
        },
        {
          id: 'B',
          label: 'Pre-producción para horas pico',
          description: 'Producir componentes que se puedan pre-elaborar la noche anterior o temprano en la mañana: arroz, salsas, vegetales cortados, proteínas marinadas. En hora pico solo se ensambla y se hace la cocción final. Reduce el tiempo de preparación de 8 minutos a 4 minutos por plato en picos.',
          cost: 3000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Pre-producción requiere 2 cocineros en turno madrugada (4am-8am)', bsc: { bsc_internal: -2, bsc_learning: -1 } }
          ],
          tags: ['pre_produccion', 'mise_en_place', 'capacidad_pico'],
          next: 'ops_12',
          narrative: 'El turno madrugada de pre-producción (4am-8am) transformó las horas pico. Todo llegaba listo: arroz cocido en porciones, vegetales cortados en contenedores, salsas en dispensadores. En hora pico, la cocina funcionaba como una línea de ensamblaje ultraeficiente. El tiempo por plato bajó a 4.2 minutos y la capacidad en hora pico subió efectivamente a 850 platos/día. Los clientes del sábado dejaron de quejarse.'
        },
        {
          id: 'C',
          label: 'Sistema de pedidos anticipados digital',
          description: 'Implementar una app de pedidos anticipados: los clientes piden y pagan por adelantado con hora de recogida. Esto permite planear la producción con certeza y eliminar la variabilidad. Los pedidos anticipados se producen en "lotes" antes de que lleguen — capacidad utilizada al 100%.',
          cost: 8000000,
          revenue: 7000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'innovation', message: 'App de pedidos anticipados es una innovación tecnológica que diferencia al restaurante', bsc: { bsc_learning: 4, bsc_customer: 3 } },
            { area: 'marketing', message: 'La app genera datos de clientes valiosos para segmentación y promociones', bsc: { bsc_customer: 3 } }
          ],
          tags: ['app', 'pedidos_anticipados', 'tecnologia', 'planificacion'],
          next: 'ops_12',
          narrative: 'La app se lanzó en la semana 4. Para el día 30, el 25% de los pedidos entraban por la app con hora de recogida. Esto permitió planear lotes de producción con 2 horas de anticipación. La capacidad efectiva subió un 12% porque se eliminó la incertidumbre: la cocina sabía EXACTAMENTE qué producir y cuándo. Los clientes digitales reportaron satisfacción del 4.8/5 — valoran el "cero espera".'
        }
      ]
    },

    // ========================================================
    //  FASE 3 — ESCALA Y CRISIS (Días 27-45)
    // ========================================================

    'ops_12': {
      day: 27,
      title: 'Nivel de automatización',
      context: 'Un proveedor tecnológico de Bogotá te presenta tres opciones de automatización para la cocina. El Eje Cafetero está creciendo en adopción de tecnología para restaurantes — varios competidores en Pereira ya están automatizando. Pero cada nivel de automatización implica trade-offs entre costo, velocidad, flexibilidad y empleo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Automatización baja: solo software de gestión',
          description: 'Implementar un sistema POS (punto de venta) integrado con la cocina: las órdenes se envían automáticamente a pantallas en cada estación, se mide el tiempo de cada plato, y se generan reportes de productividad. Las personas siguen haciendo TODO el trabajo físico. Inversión mínima, máxima flexibilidad.',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'innovation', message: 'Sistema POS genera datos de producción en tiempo real para análisis', bsc: { bsc_learning: 2 } }
          ],
          tags: ['automatizacion_baja', 'pos', 'software', 'datos'],
          next: 'ops_13',
          narrative: 'Las pantallas KDS (Kitchen Display System) en cada estación transformaron la comunicación: cero papelitos perdidos, cero gritos de "¡falta una paisa!". El sistema mide tiempos automáticamente y genera alertas cuando un plato lleva más de 10 minutos. La productividad subió un 8% solo por mejor información. Pero el trabajo pesado sigue siendo 100% manual.'
        },
        {
          id: 'B',
          label: 'Automatización media: equipos inteligentes',
          description: 'Instalar: freidora automática con temporizador y filtrado continuo, dispensadores de bebidas automatizados, cortadora industrial de vegetales, y sistema de refrigeración con IoT (monitoreo remoto de temperaturas). Las personas cocinan y ensamblan; las máquinas preparan y monitorean.',
          cost: 18000000,
          revenue: 8000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'La automatización media elimina 3 puestos de preparación — RRHH debe reubicar o desvincular', bsc: { bsc_internal: -3, bsc_learning: -2 } },
            { area: 'finance', message: 'Inversión de $18M en automatización media con ROI estimado de 8 meses', bsc: { bsc_financial: -2 } }
          ],
          tags: ['automatizacion_media', 'iot', 'equipos_inteligentes'],
          next: 'ops_13',
          narrative: 'La cortadora industrial procesó en 20 minutos lo que 2 personas hacían en 2 horas. La freidora automática eliminó las papas quemadas (el timer nunca se olvida). El IoT de la refrigeración envió una alerta a las 2am cuando la temperatura subió 3 grados — se evitó perder $6M en ingredientes. Pero 3 personas quedaron sin su puesto tradicional y la moral del equipo se resintió temporalmente.'
        },
        {
          id: 'C',
          label: 'Automatización alta: cocina semi-robotizada',
          description: 'Invertir en una plancha robotizada que cocina automáticamente (flipea, ajusta temperatura, detecta cocción por visión artificial) y un brazo robótico para ensamblaje de platos estándar. El 60% de la producción se automatiza. Los humanos supervisan, manejan excepciones y atienden al cliente.',
          cost: 35000000,
          revenue: 15000000,
          bsc: { bsc_financial: -4, bsc_customer: 4, bsc_internal: 6, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'La automatización alta elimina 6 puestos operativos pero crea 2 nuevos de técnico de mantenimiento', bsc: { bsc_internal: -4, bsc_learning: 3 } },
            { area: 'finance', message: 'Inversión masiva de $35M — requiere financiación y el ROI es a 14 meses', bsc: { bsc_financial: -5 } },
            { area: 'innovation', message: 'Primer restaurante semi-robotizado en Pereira — alto impacto mediático', bsc: { bsc_customer: 5, bsc_learning: 4 } }
          ],
          tags: ['automatizacion_alta', 'robotica', 'vision_artificial', 'innovacion'],
          next: 'ops_13',
          narrative: 'El brazo robótico ensamblando bandejas se volvió viral en redes sociales. Periodistas del diario local vinieron a hacer nota. La productividad subió un 40% y la consistencia es perfecta: cada plato sale idéntico. Pero la inversión fue brutal ($35M — el 27% del presupuesto total de operaciones) y cuando el brazo se descalibró en la semana 2, tomó 6 horas traer al técnico de Bogotá. Dependencia tecnológica máxima.'
        }
      ]
    },

    'ops_13': {
      day: 30,
      title: 'Disrupción en la cadena de suministro',
      context: 'Emergencia: un derrumbe en la vía Pereira-La Virginia cortó el acceso al principal centro de acopio de carne y pollo del Eje Cafetero. Se estima que la vía estará cerrada 5-7 días. Tu stock actual de proteínas alcanza para 2 días. La carne representa el 45% del costo de ingredientes y está presente en el 70% de los platos del menú. ¿Cómo manejar la disrupción?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Usar stock de seguridad + compra de emergencia local',
          description: 'Si tienes stock de seguridad, los 2 días base se extienden a 4. Complementar comprando carne en el Éxito, Jumbo y carnicerías locales de Pereira a precio retail (40% más caro que mayorista). Cubrir los días restantes con compras diarias locales. Caro pero operación continua.',
          cost: 12000000,
          revenue: 4000000,
          bsc: { bsc_financial: -4, bsc_customer: 2, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Logística debe hacer compras de emergencia en retail local a precios 40% mayores', bsc: { bsc_financial: -3, bsc_internal: -2 } },
            { area: 'finance', message: 'Costo de ingredientes se dispara por compras de emergencia: +$12M esta semana', bsc: { bsc_financial: -4 } }
          ],
          tags: ['stock_seguridad', 'emergencia', 'supply_chain', 'resiliencia'],
          next: 'ops_14',
          narrative: 'Las compras en supermercados locales salvaron la operación pero devastaron el margen: la carne a $32.000/kg vs el precio mayorista de $22.000/kg. El equipo de logística recorrió 8 supermercados en un día. Se mantuvieron los 4 platos pero con utilidad cercana a cero en los que llevaban carne. El stock de seguridad (si existía) demostró su valor: cada día extra de buffer fue un día menos de compras a precio de pánico.'
        },
        {
          id: 'B',
          label: 'Menú de contingencia sin carne',
          description: 'Crear un menú temporal de emergencia: el bowl vegano se vuelve estrella, se introduce un wrap de fríjoles/lentejas con guacamole, y se adapta la bandeja paisa con huevo frito doble en lugar de carne. Comunicar como "Semana de sabores alternativos". Cero dependencia de la carne por 5 días.',
          cost: 4000000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: -3, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Se necesita comunicar urgentemente el menú de contingencia como algo positivo, no como carencia', bsc: { bsc_customer: -3 } },
            { area: 'innovation', message: 'La restricción forzó innovación en el menú — algunos platos de contingencia podrían ser permanentes', bsc: { bsc_learning: 4 } }
          ],
          tags: ['contingencia', 'menu_alternativo', 'resiliencia', 'innovacion_forzada'],
          next: 'ops_14',
          narrative: 'La "Semana de Sabores Alternativos" recibió reacciones mixtas. El 40% de los clientes regulares lo tomó bien — "qué chévere probar algo nuevo". Pero el 35% se fue a la competencia que sí consiguió carne. El wrap de fríjoles con guacamole fue un hit inesperado: margen del 65% y los clientes pedían que lo dejaran en el menú permanente. La crisis reveló que la dependencia de la carne era un riesgo de cadena de suministro no mitigado.'
        },
        {
          id: 'C',
          label: 'Proveedor alternativo con envío aéreo desde Cali',
          description: 'Contactar al Frigorífico del Sur en Cali (2 horas por otra vía) para envío diario por carretera alterna, o un frigorífico en Medellín con envío refrigerado. Costo de transporte 3x mayor por la distancia y urgencia, pero calidad y precio de la carne similares al proveedor original.',
          cost: 9000000,
          revenue: 5000000,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'logistics', message: 'Nuevo proveedor de contingencia desde Cali: logística establece ruta alterna', bsc: { bsc_internal: 2, bsc_learning: 2 } }
          ],
          tags: ['proveedor_alterno', 'supply_chain', 'contingencia', 'resiliencia'],
          next: 'ops_14',
          narrative: 'El Frigorífico del Sur en Cali aceptó proveer con 24 horas de anticipación. El primer envío llegó por la vía alterna (Pereira-Armenia-La Paila-Cali en reversa) en 4 horas. El costo de transporte se triplicó, pero el precio de la carne fue razonable. La operación continuó sin interrupciones. Lección de supply chain: siempre tener un proveedor de respaldo calificado, aún si nunca lo usas — es un seguro.'
        }
      ]
    },

    'ops_14': {
      day: 33,
      title: 'Balanceo de línea para nuevo producto',
      context: 'Marketing quiere lanzar un producto estrella: el "Mega Combo Pereirano" (bandeja paisa premium + postre de cholao + jugo natural). El combo tiene 8 tareas de preparación con los siguientes tiempos (en minutos):\n\nT1: Preparar arroz (4 min) → T2: Cocinar fríjoles (6 min) → T3: Asar carne (5 min) → T4: Freír chicharrón (3 min) → T5: Preparar ensalada (2 min) → T6: Armar cholao (4 min) → T7: Preparar jugo (3 min) → T8: Ensamblar combo (3 min)\n\nPrecedencias: T1→T8, T2→T8, T3→T8, T4→T8, T5→T8, T6→T8, T7→T8. Tiempo de ciclo objetivo: 6 minutos. ¿Cómo balancear la línea?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Balanceo por heurística del tiempo más largo (LPT)',
          description: 'Asignar tareas a estaciones usando la regla del tiempo de tarea más largo: primero T2 (6min), luego T3 (5min), etc. Con tiempo de ciclo de 6 minutos, se necesitan mínimo ⌈30/6⌉ = 5 estaciones. Agrupar tareas respetando precedencias y sin exceder 6 min por estación. Eficiencia = 30/(5×6) = 100% si se logra balanceo perfecto.',
          cost: 4000000,
          revenue: 6000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'Línea balanceada para Mega Combo requiere 5 estaciones con 1 operario cada una', bsc: { bsc_internal: -1 } },
            { area: 'marketing', message: 'El Mega Combo estará listo en 6 minutos — marketing puede prometer "combo express"', bsc: { bsc_customer: 3 } }
          ],
          tags: ['balanceo_linea', 'heuristica', 'lpt', 'tiempo_ciclo', 'eficiencia'],
          next: 'ops_15',
          narrative: 'El balanceo LPT arrojó: Estación 1 (T2: fríjoles, 6min), Estación 2 (T3+T5: carne+ensalada, 5+2=7min — ¡excede!). Se reajustó: E1(T2,6min), E2(T3,5min), E3(T1+T5,4+2=6min), E4(T4+T7,3+3=6min), E5(T6+T8,4+3=7min — ¡excede de nuevo!). El balanceo perfecto no fue posible con estas precedencias; la eficiencia real fue del 85.7%. Aún así, 5 estaciones produciendo un combo cada 7 minutos (no 6) fue aceptable: 51 combos/hora.'
        },
        {
          id: 'B',
          label: 'Producción en paralelo con estaciones independientes',
          description: 'No balancear como línea secuencial. En su lugar, crear 3 sub-líneas paralelas: (1) componentes calientes (T1+T2+T3+T4), (2) componentes fríos (T5+T6+T7), (3) ensamblaje final (T8). Cada sub-línea trabaja independiente y todo converge en T8. Más flexible pero requiere más espacio y coordinación.',
          cost: 6000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'logistics', message: 'La producción en paralelo del Mega Combo requiere sincronizar 3 sub-líneas para que todo llegue a tiempo', bsc: { bsc_internal: -1 } }
          ],
          tags: ['produccion_paralela', 'sub_lineas', 'flexibilidad', 'sincronizacion'],
          next: 'ops_15',
          narrative: 'Las 3 sub-líneas paralelas funcionaron como una orquesta: calientes, fríos y ensamblaje. La sub-línea de calientes tardaba 18 minutos en total (la más larga), pero como trabaja en lotes de 5 combos, el throughput efectivo era de un combo cada 3.6 minutos. Los fríos terminaban antes y esperaban — un poco de inventario WIP pero nada grave. La producción fue de 67 combos/hora — mejor que la línea balanceada. Más flexibilidad ante cambios.'
        }
      ]
    },

    'ops_15': {
      day: 36,
      title: 'Sostenibilidad y reducción de desperdicios',
      context: 'El municipio de Pereira acaba de lanzar el programa "Pereira Circular" que ofrece descuentos tributarios del 15% a negocios que certifiquen reducción de desperdicios. Actualmente tu restaurante genera: 85kg de residuos orgánicos/día, 30kg de plástico/cartón, y desperdicia 12% de los ingredientes comprados. El costo de disposición de basuras es $2.1M/mes. ¿Qué estrategia de sostenibilidad implementar?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Programa de economía circular (compostaje + alianzas)',
          description: 'Instalar compostera industrial para residuos orgánicos. El compost se vende a las fincas cafeteras de la zona a $800/kg. Alianza con la Universidad Tecnológica de Pereira para investigación en aprovechamiento de residuos. El programa aplica para el descuento tributario del 15%.',
          cost: 8000000,
          revenue: 4500000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'La certificación de sostenibilidad es un diferenciador poderoso en comunicación', bsc: { bsc_customer: 4 } },
            { area: 'finance', message: 'Descuento tributario del 15% por certificación Pereira Circular', bsc: { bsc_financial: 3 } }
          ],
          tags: ['sostenibilidad', 'economia_circular', 'compostaje', 'tributario'],
          next: 'ops_16',
          narrative: 'La compostera empezó a procesar 85kg diarios de residuos orgánicos. El compost se secaba en 21 días y se vendía a $800/kg a Finca La Esperanza en Cerritos. Los residuos a relleno bajaron un 65%. La alianza con la UTP trajo 3 estudiantes de Ingeniería Industrial que hicieron su práctica optimizando el proceso. El descuento tributario del 15% se aprobó en la semana 5 — un ahorro significativo.'
        },
        {
          id: 'B',
          label: 'Lean Green: eliminar desperdicios desde la fuente',
          description: 'Aplicar los principios Lean al desperdicio de ingredientes: análisis de Pareto de desperdicios (¿qué ingredientes se botan más?), rediseño de porciones al gramo exacto con balanza digital, aprovechamiento de recortes (las puntas de pollo van al caldo del día, los vegetales no usados al jugo del día). Meta: reducir desperdicios del 12% al 4%.',
          cost: 3000000,
          revenue: 5000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 6, bsc_learning: 5 },
          crossEffects: [],
          tags: ['lean_green', 'desperdicio_cero', 'porciones', 'aprovechamiento'],
          next: 'ops_16',
          narrative: 'El Pareto de desperdicios reveló que el 60% del desperdicio venía de 3 ingredientes: lechuga (se marchitaba), aguacate (se oxidaba) y arroz (se cocinaba de más). Soluciones: lechuga en entregas JIT diarias (no almacenar), aguacate cortado al momento (no pre-cortado), arroz en lotes pequeños cada hora. El desperdicio bajó del 12% al 5.1% en la primera semana — $4.2M mensuales ahorrados en ingredientes que antes iban a la basura.'
        },
        {
          id: 'C',
          label: 'Empaques biodegradables y reducción de plásticos',
          description: 'Reemplazar TODOS los empaques de poliestireno y plástico por materiales biodegradables: platos de bagazo de caña, cubiertos de madera, bolsas de papel kraft. El costo de empaque sube 25% pero el impacto ambiental baja drásticamente y los clientes jóvenes (target del restaurante) valoran el esfuerzo.',
          cost: 6000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Empaques biodegradables son material poderoso para comunicación en redes sociales', bsc: { bsc_customer: 4 } },
            { area: 'logistics', message: 'Nuevo proveedor de empaques biodegradables — requiere evaluación y negociación', bsc: { bsc_internal: -1 } }
          ],
          tags: ['empaques', 'biodegradable', 'sostenibilidad', 'plastico'],
          next: 'ops_16',
          narrative: 'Los platos de bagazo de caña (subproducto del Ingenio Risaralda, producidos localmente) reemplazaron el icopor. Los cubiertos de madera llegaban de una cooperativa de artesanos de Santa Rosa de Cabal. El costo de empaque subió un 25%, pero las fotos de clientes con los empaques en Instagram generaron alcance orgánico equivalente a $3M en publicidad. Los clientes millennials y Gen-Z lo celebraron. El planeta agradeció.'
        },
        {
          id: 'D',
          label: 'Alianza con app de rescate de alimentos',
          description: 'Asociarse con una app estilo "Too Good To Go" local: al final del día, los platos no vendidos se ofrecen al 50% de descuento a través de la app. Reduce desperdicio de producto terminado a casi cero, genera ingreso marginal, y proyecta responsabilidad social.',
          cost: 1500000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'La alianza con la app de rescate de alimentos genera prensa positiva y nuevos clientes', bsc: { bsc_customer: 3 } }
          ],
          tags: ['rescate_alimentos', 'app', 'desperdicio_cero', 'social'],
          next: 'ops_16',
          narrative: 'La app "Salvemos la Comida" (startup pereirana) empezó a vender 20-35 combos cada noche al 50%. Los combos se agotaban en minutos — había lista de espera. El desperdicio de producto terminado bajó del 8% al 1.5%. Y algo inesperado: el 30% de los compradores por la app regresaron al restaurante a precio completo la semana siguiente. Nuevo canal de adquisición de clientes sin costo.'
        }
      ]
    },

    'ops_16': {
      day: 39,
      title: 'Emergencia — Falla mayor de equipo',
      context: '¡EMERGENCIA! A las 9am del día más concurrido del mes (puente festivo, demanda proyectada de 920 platos), la parrilla industrial principal se apaga con olor a quemado eléctrico. El técnico de mantenimiento la revisa: cortocircuito en el panel de control. Reparación estimada: 2-3 días con repuesto que hay que traer de Bogotá. Tienes 4 horas antes del pico de almuerzo (12pm). ¿Qué haces?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Plan de contingencia: producción degradada + menú reducido',
          description: 'Activar plan de contingencia: usar el grill secundario (capacidad 40% del principal), reconfigurar el menú para maximizar platos que NO necesitan parrilla (bowls, wraps al horno, ensaladas), comunicar al cliente que "por hoy" hay menú especial. Aprovechar la freidora para compensar. Meta: servir al menos 550 platos de los 920 proyectados.',
          cost: 5000000,
          revenue: 8000000,
          bsc: { bsc_financial: -2, bsc_customer: -2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'URGENTE: comunicar menú especial de hoy en redes como "Festival de Bowls y Wraps"', bsc: { bsc_customer: -1 } },
            { area: 'hr', message: 'Todo el equipo a máxima capacidad: horas extra autorizadas para cubrir la emergencia', bsc: { bsc_internal: -2 } }
          ],
          tags: ['emergencia', 'contingencia', 'produccion_degradada', 'resiliencia'],
          next: 'ops_17',
          narrative: 'El equipo reaccionó con disciplina admirable. En 30 minutos se reconfiguró el menú: "Festival de Sabores" con bowls, wraps al horno y la hamburguesa en grill pequeño. Se sirvieron 610 platos — el 66% de la demanda. Los clientes que querían bandeja paisa se frustraron (algunas quejas en Google Maps) pero la mayoría aceptó la alternativa con buena actitud gracias a la comunicación honesta y un descuento del 10%. Se perdieron $14M en ventas potenciales pero se salvó la operación.'
        },
        {
          id: 'B',
          label: 'Alquilar equipo de emergencia + técnico express',
          description: 'Llamar a Equipos Industriales del Eje (empresa de alquiler industrial en Dosquebradas) para rentar una parrilla portátil industrial. Simultáneamente, contactar al fabricante para envío express del repuesto ($800.000 adicionales por envío prioritario). Costo alto pero intenta mantener la operación al 85%.',
          cost: 14000000,
          revenue: 12000000,
          bsc: { bsc_financial: -3, bsc_customer: 3, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Gasto de emergencia: $14M entre alquiler de parrilla + envío express del repuesto', bsc: { bsc_financial: -4 } },
            { area: 'logistics', message: 'Logística coordina el transporte de la parrilla desde Dosquebradas y el repuesto desde Bogotá', bsc: { bsc_internal: -2 } }
          ],
          tags: ['emergencia', 'alquiler', 'respuesta_rapida', 'costo_alto'],
          next: 'ops_17',
          narrative: 'La parrilla alquilada llegó a las 11:15am — 45 minutos antes del pico. La instalación fue caótica: conexión eléctrica diferente, calibración de temperatura distinta. Los primeros 20 platos salieron irregulares. Pero a las 12:30 el equipo se adaptó y la producción alcanzó el 80% de lo normal. Se sirvieron 750 de los 920 platos proyectados. El costo fue brutal: $14M en un solo día. Pero la reputación se preservó. ¿Valió la pena? Los números dirán.'
        }
      ]
    },

    'ops_17': {
      day: 42,
      title: 'Planeación agregada para temporada alta',
      context: 'Diciembre en Pereira es temporada alta: novenas, cenas empresariales, alumbrado del Viaducto César Gaviria, turismo del Eje Cafetero. El pronóstico (con tu modelo de demanda) proyecta:\n\nSemana 1 dic: 850 platos/día\nSemana 2 dic: 950 platos/día\nSemana 3 dic: 1.100 platos/día (semana de Navidad)\nSemana 4 dic: 700 platos/día (post-Navidad, baja)\n\nCapacidad actual: ~800 platos/día en turno normal. ¿Qué estrategia de planeación agregada usar para el mes completo?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estrategia de persecución (chase)',
          description: 'Ajustar la producción semana a semana para igualar la demanda exacta: contratar temporales semana 2-3, horas extra en picos, reducir personal semana 4. Cero inventario de producto terminado, cero demanda insatisfecha. Pero alta variabilidad laboral y costos de contratación/despido.',
          cost: 15000000,
          revenue: 12000000,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: -1, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Estrategia chase: contratar 6 temporales semana 2, 10 semana 3, desvincular semana 4', bsc: { bsc_internal: -4, bsc_learning: -2 } },
            { area: 'finance', message: 'Costos laborales variables: contratación y desvinculación de temporales en diciembre', bsc: { bsc_financial: -2 } }
          ],
          tags: ['planeacion_agregada', 'chase', 'persecucion', 'temporales'],
          next: 'ops_18',
          narrative: 'La estrategia chase funcionó numéricamente: cada semana la producción se igualó a la demanda. Pero el costo humano fue alto: contratar y entrenar 6 personas una semana, 4 más la siguiente, y despedir 10 después de Navidad generó malestar. Los temporales tuvieron productividad del 60% la primera semana (curva de aprendizaje). Y en la semana 3 (la más crítica), el equipo estaba agotado por los constantes cambios. La demanda de 1.100 se cubrió a duras penas con calidad irregular.'
        },
        {
          id: 'B',
          label: 'Estrategia de nivelación (level)',
          description: 'Producir a un ritmo constante de 900 platos/día todo el mes: las semanas 1 y 4 (demanda <900) se acumula inventario pre-preparado (congelado); las semanas 2 y 3 (demanda >900) se usa el inventario acumulado. Producción estable, sin contratar ni despedir. Costo de almacenamiento y congelación.',
          cost: 10000000,
          revenue: 9000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'Estrategia level: personal estable todo diciembre — cero contrataciones ni despidos', bsc: { bsc_internal: 3, bsc_learning: 2 } },
            { area: 'logistics', message: 'Se necesita capacidad de congelación adicional para pre-producción — logística debe conseguir un congelador extra', bsc: { bsc_internal: -2 } }
          ],
          tags: ['planeacion_agregada', 'nivelacion', 'level', 'inventario', 'congelacion'],
          next: 'ops_18',
          narrative: 'Producir 900/día establemente fue un oasis de calma operativa. La semana 1 generó excedente: se congelaron componentes pre-preparados (arroces, proteínas marinadas, salsas). La semana 3, cuando la demanda se disparó a 1.100, se descongeló el inventario y se completó con producción fresca. No se cubrió el 100% de la demanda en el pico (faltaron ~100 platos/día en semana 3) pero el equipo nunca estuvo estresado, la calidad se mantuvo impecable, y no hubo costos de rotación.'
        },
        {
          id: 'C',
          label: 'Estrategia mixta (horas extra + inventario parcial)',
          description: 'Combinar: semana 1 producir a 900 y congelar 50/día de excedente. Semana 2 activar horas extra para llegar a 950. Semana 3 horas extra + descongelar inventario + contratar solo 3 temporales. Semana 4 volver a ritmo normal. Equilibrio entre costo, servicio y estabilidad laboral.',
          cost: 12000000,
          revenue: 11000000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Solo 3 temporales (no 10) y horas extra moderadas — impacto laboral controlado', bsc: { bsc_internal: -1, bsc_learning: 1 } },
            { area: 'finance', message: 'Estrategia mixta: costos balanceados entre inventario ($4M), horas extra ($5M) y temporales ($3M)', bsc: { bsc_financial: 1 } }
          ],
          tags: ['planeacion_agregada', 'mixta', 'horas_extra', 'inventario', 'equilibrio'],
          next: 'ops_18',
          narrative: 'La estrategia mixta fue la más equilibrada. Semana 1: 900/día con 50 pre-congelados. Semana 2: horas extra pusieron la producción en 950 (exacto). Semana 3: con 3 temporales, horas extra y descongelado del inventario se alcanzaron 1.050 de los 1.100 proyectados — 95% de servicio. Semana 4: vuelta a la normalidad con costos controlados. No fue perfecto en ninguna dimensión, pero fue bueno en todas. Esa es la esencia de la planeación agregada: optimizar el sistema completo, no una sola variable.'
        }
      ]
    },

    'ops_18': {
      day: 44,
      title: 'Decisión estratégica final — Estandarizar vs. personalizar',
      context: 'Llegas al día 44 con experiencia acumulada. Los datos muestran dos segmentos claros de clientes: el 55% quiere rapidez y consistencia (almuerzo ejecutivo de 12-2pm, empresas), y el 45% quiere personalización y experiencia (cena, parejas, familias de fin de semana). Tu modelo operativo actual está optimizado para UNO de los dos segmentos. Decisión estratégica: ¿hacia dónde orientar las operaciones para el próximo trimestre?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estandarización total (modelo McDonald\'s)',
          description: 'Llevar la estandarización al extremo: menú de 6 platos fijos sin variaciones, todos los procesos cronometrados y documentados, cero personalización ("viene como está en el menú"). Tiempo de servicio objetivo: 4 minutos. Productividad máxima. Economías de escala. El cliente de rapidez es feliz; el de experiencia... tal vez se vaya.',
          cost: 5000000,
          revenue: 10000000,
          bsc: { bsc_financial: 5, bsc_customer: -2, bsc_internal: 7, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'El posicionamiento cambia a "comida rápida eficiente" — perdemos clientes de experiencia', bsc: { bsc_customer: -4 } },
            { area: 'hr', message: 'La estandarización total simplifica la capacitación: cualquier persona aprende en 3 días', bsc: { bsc_learning: 3, bsc_internal: 4 } },
            { area: 'finance', message: 'Costos unitarios bajan 15% por economías de escala y cero desperdicios de personalización', bsc: { bsc_financial: 5 } }
          ],
          tags: ['estandarizacion', 'eficiencia', 'escala', 'mcdonalds', 'rapido'],
          next: null,
          narrative: 'La estandarización total convirtió la cocina en una máquina de precisión. Tiempo promedio de servicio: 3.8 minutos. Cero variabilidad en el producto. Los clientes de almuerzo ejecutivo están encantados — filas rápidas, comida predecible. Pero los clientes de fin de semana empezaron a migrar: "es comida de fábrica", dijo uno en Google Maps. La eficiencia operativa es un 10/10 pero la experiencia de marca perdió alma. ¿Se puede ser eficiente sin ser frío?'
        },
        {
          id: 'B',
          label: 'Personalización masiva (modelo Subway)',
          description: 'Diseñar el proceso para que el cliente elija ingredientes: base (arroz/wrap/bowl), proteína (res/pollo/cerdo/vegano), toppings (6 opciones), salsa (4 opciones). El plato se arma frente al cliente como en Subway. La variedad es infinita (6×4×C(6,3)×4 = 1.920 combinaciones) pero el proceso es eficiente porque cada paso está estandarizado. Lo mejor de ambos mundos.',
          cost: 10000000,
          revenue: 12000000,
          bsc: { bsc_financial: 2, bsc_customer: 6, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'La personalización masiva es diferenciación pura: "tu plato, tu regla"', bsc: { bsc_customer: 5 } },
            { area: 'hr', message: 'Operarios necesitan entrenamiento en atención al cliente (interacción directa en la línea)', bsc: { bsc_learning: 2 } },
            { area: 'innovation', message: 'El modelo de personalización masiva es innovación en proceso para restaurantes en Pereira', bsc: { bsc_learning: 4 } }
          ],
          tags: ['personalizacion_masiva', 'subway', 'variedad', 'experiencia', 'diferenciacion'],
          next: null,
          narrative: 'La línea de personalización se inauguró con fanfarria. Los clientes armaban su plato paso a paso con la guía de un "asesor de sabores". El ticket promedio subió un 12% porque los clientes agregaban toppings extra (upselling natural). Ambos segmentos quedaron satisfechos: los de rapidez pasaban rápido eligiendo combo predefinido, y los de experiencia disfrutaban el ritual de personalización. La complejidad operativa aumentó 30% pero la satisfacción del cliente llegó a 4.8/5.'
        },
        {
          id: 'C',
          label: 'Modelo dual: línea express + zona gourmet',
          description: 'Dividir la operación en dos: (1) Línea Express para almuerzo ejecutivo — 4 platos estandarizados, tiempo de servicio 4 min, cero personalización. (2) Zona Gourmet para cena/fin de semana — menú amplio, personalización, cocina abierta, tiempo de servicio 12 min. Dos modelos operativos en un solo restaurante. Complejidad máxima pero servicio perfecto para cada segmento.',
          cost: 16000000,
          revenue: 14000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 3, bsc_learning: 6 },
          crossEffects: [
            { area: 'marketing', message: 'Dos experiencias en un restaurante: marketing diseña comunicación diferenciada por horario', bsc: { bsc_customer: 4 } },
            { area: 'hr', message: 'El modelo dual requiere equipos especializados: uno para express, otro para gourmet', bsc: { bsc_internal: -2, bsc_learning: 3 } },
            { area: 'finance', message: 'Operación dual es más costosa pero captura ambos segmentos de mercado', bsc: { bsc_financial: -1 } }
          ],
          tags: ['modelo_dual', 'express', 'gourmet', 'segmentacion', 'flexibilidad'],
          next: null,
          narrative: 'El modelo dual fue la decisión más ambiciosa del juego. De 11am a 3pm: Línea Express con fila rápida, menú de 4 platos y tiempos de 3.5 minutos. De 6pm a 10pm y fines de semana: Zona Gourmet con cocina abierta, chef visible, platos personalizados y ambiente premium. El throughput total no es el máximo posible ni la personalización es la más profunda — pero cada segmento recibe exactamente lo que quiere en el momento que lo quiere. Operativamente es el modelo más difícil de gestionar: dos culturas productivas bajo un mismo techo. Pero si el equipo puede hacerlo funcionar, es imbatible.'
        },
        {
          id: 'D',
          label: 'Enfoque en experiencia y marca (modelo Crepes & Waffles)',
          description: 'Priorizar la experiencia sobre la eficiencia. Inspirándose en Crepes & Waffles (el referente colombiano): cocina visible, ingredientes frescos a la vista, servicio cálido, ambiente acogedor. Producción más lenta pero el cliente paga más y vuelve más. Ticket promedio sube 25% y fidelización alta. Las operaciones se diseñan para la consistencia emocional, no la velocidad.',
          cost: 12000000,
          revenue: 11000000,
          bsc: { bsc_financial: 2, bsc_customer: 7, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'El enfoque experiencial es el posicionamiento más fuerte a largo plazo', bsc: { bsc_customer: 6 } },
            { area: 'hr', message: 'Operarios se convierten en "artesanos de la cocina" — requiere cambio cultural y capacitación en servicio', bsc: { bsc_learning: 4, bsc_internal: 1 } },
            { area: 'finance', message: 'Ticket promedio sube 25% pero throughput baja 20% — el balance neto es positivo a mediano plazo', bsc: { bsc_financial: 1 } }
          ],
          tags: ['experiencia', 'marca', 'crepes_waffles', 'premium', 'fidelizacion'],
          next: null,
          narrative: 'La transformación a modelo experiencial fue profunda. La cocina se abrió con un ventanal para que los clientes vieran a los cocineros trabajar. Los ingredientes se exhibieron en una barra de cristal. El servicio pasó de "rápido y eficiente" a "cálido y personal". El throughput bajó un 20% pero el ticket promedio subió un 28%. Los clientes no solo volvían — traían amigos. Las reseñas mencionaban la experiencia, no la comida. El restaurante dejó de competir por precio o velocidad y empezó a competir por significado. Las operaciones se volvieron más arte que ciencia — y eso tiene su propio tipo de eficiencia.'
        }
      ]
    }

  }
};
