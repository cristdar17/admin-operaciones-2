/* ============================================================
   TREE - LOGISTICA v2
   Arbol de decisiones para el area de Logistica
   Dos cadenas de restaurantes compitiendo en Pereira
   Presupuesto: $85.000.000 COP
   10 nodos de decision | Dias 1-25
   ============================================================ */
window.TREE_LOGISTICS = {
  name: 'Logistica',
  icon: '🚛',
  color: '#5AC8FA',
  startNode: 'log_01',
  nodes: {

    // ========================================================
    //  NODO 1 — RED DE PROVEEDORES (Dia 1) — choice
    // ========================================================

    'log_01': {
      day: 1,
      title: 'Red de proveedores',
      context: 'Tu cadena de restaurantes necesita 38 ingredientes. La competencia ya tiene contratos con Makro. Debes armar tu red de abastecimiento en Pereira.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Proveedor unico grande',
          description: 'Contrato exclusivo con PriceSmart: un pedido semanal, descuento 12% por volumen.',
          feedback: 'La estrategia de proveedor unico reduce costos transaccionales pero genera dependencia critica. Si falla el proveedor, toda la cadena se detiene. En logistica esto se llama "riesgo de fuente unica".',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: 4, bsc_customer: -1, bsc_internal: 3, bsc_learning: -1 },
          crossEffects: [
            { area: 'finance', message: 'Descuento del 12% por volumen — ahorro mensual estimado $3.2M', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'operations', message: 'Un proveedor simplifica recepcion pero limita variedad de calidades', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['proveedor_unico', 'volumen'],
          next: 'log_02',
          narrative: 'El contrato con PriceSmart arranco bien. Un solo camion los martes y viernes a las 5am. Pero la calidad de los frescos varia mucho — no seleccionan como un proveedor local.'
        },
        {
          id: 'B',
          label: 'Red de 6 proveedores locales',
          description: 'Proveedores de Mercasa y fincas del Eje Cafetero: carnico, verdulero, lacteo, empaques, salsas y granos.',
          feedback: 'Diversificar proveedores aplica el principio de mitigacion de riesgo. Si uno falla, los demas cubren. El costo administrativo sube, pero la resiliencia de la cadena mejora drasticamente.',
          cost: 8000000,
          revenue: 3500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: -1, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: '6 proveedores con plazos distintos — tesoreria debe coordinar flujos', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Multiples proveedores permiten seleccionar mejor calidad por ingrediente', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['multi_proveedor', 'local', 'mercasa'],
          next: 'log_02',
          narrative: 'Armaste alianzas con productores de Mercasa y fincas cafeteras. Los platanos llegan de Santa Rosa, la carne de Cartago, los lacteos de Santa Rosa de Cabal. Frescura superior, pero coordinar 6 entregas semanales es un reto.'
        },
        {
          id: 'C',
          label: 'Modelo hibrido 70/30',
          description: '70% con distribuidor grande para basicos estables, 30% con proveedores locales para frescos y diferenciadores.',
          feedback: 'El modelo hibrido combina eficiencia de escala con flexibilidad local. Es la estrategia mas usada en cadenas exitosas porque balancea costo, calidad y riesgo de forma optima.',
          cost: 7000000,
          revenue: 3000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Modelo hibrido optimiza costos en basicos y calidad en frescos', bsc: { bsc_financial: 1 }, cost: 0 },
            { area: 'operations', message: 'Balance entre simplicidad operativa y calidad premium en frescos', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['hibrido', 'balanceado'],
          next: 'log_02',
          narrative: 'Lo mejor de ambos mundos: PriceSmart entrega granos, aceites y empaques. Los frescos llegan directo de Mercasa con un intermediario que consolida. La competencia nota tu calidad en ensaladas y frutas.'
        }
      ]
    },

    // ========================================================
    //  NODO 2 — ALMACENAMIENTO (Dia 4) — choice
    // ========================================================

    'log_02': {
      day: 4,
      title: 'Modelo de almacenamiento',
      context: 'Necesitas definir donde y como almacenar inventario para 3 sedes en Pereira. Tu competidor alquilo una bodega grande en la zona industrial de Dosquebradas.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bodega central en Dosquebradas',
          description: 'Una bodega de 200m² que abastece las 3 sedes. Costo fijo alto pero control centralizado.',
          feedback: 'El almacen central (hub) permite economias de escala en almacenamiento y control de inventario unificado. La desventaja: agrega un eslabón mas a la cadena y aumenta el lead time a cada sede.',
          cost: 12000000,
          revenue: 1000000,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Arriendo bodega $4.5M/mes — costo fijo significativo pero predecible', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['bodega_central', 'hub'],
          next: 'log_03',
          narrative: 'La bodega en Dosquebradas quedo operativa. Cada sede recibe pedidos internos diarios a las 4am. El control de inventario es impecable, pero el transporte interno cuesta mas de lo esperado.'
        },
        {
          id: 'B',
          label: 'Almacenamiento en cada sede',
          description: 'Cada restaurante gestiona su propio inventario con cuartos frios y estanteria interna.',
          feedback: 'El almacenamiento descentralizado elimina el transporte entre bodega y sede, reduciendo lead time. Pero triplica el esfuerzo de control y dificulta las compras por volumen. Funciona mejor en cadenas pequenas.',
          cost: 9000000,
          revenue: 500000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: -2, bsc_learning: 0 },
          crossEffects: [
            { area: 'operations', message: 'Cada sede controla su inventario — rapido pero sin estandarizacion', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['descentralizado', 'autonomo'],
          next: 'log_03',
          narrative: 'Cada sede maneja sus pedidos y su nevera. La sede del centro es impecable, pero la de Cuba tiene excesos de inventario porque el administrador pide "por si acaso". Sin estandar, cada sede es un mundo.'
        },
        {
          id: 'C',
          label: 'Cross-docking sin almacenamiento',
          description: 'Los proveedores entregan directo a un punto de cruce donde se redistribuye a sedes el mismo dia. Cero inventario almacenado.',
          feedback: 'El cross-docking es la estrategia de gigantes como Walmart. Elimina costos de almacenamiento, pero exige coordinacion perfecta con proveedores y vehiculos. El minimo error causa desabastecimiento inmediato.',
          cost: 6000000,
          revenue: 2500000,
          bsc: { bsc_financial: 4, bsc_customer: -2, bsc_internal: -3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Cross-docking elimina inventario pero cualquier retraso de proveedor impacta directo', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['cross_docking', 'justo_a_tiempo'],
          next: 'log_03',
          narrative: 'Montaste el punto de cruce en un parqueadero techado cerca del Terminal. Los proveedores llegan a las 4am, a las 6am todo sale para las sedes. Es elegante pero fragil: cuando el verdulero llego tarde, la sede de Circunvalar abrio sin ensaladas.'
        }
      ]
    },

    // ========================================================
    //  NODO 3 — SISTEMA DE INVENTARIO (Dia 7) — choice
    // ========================================================

    'log_03': {
      day: 7,
      title: 'Sistema de control de inventario',
      context: 'Ya tienes proveedores y almacenamiento. Ahora necesitas decidir como controlar las cantidades. Tu competidor usa un Excel basico y pide "a ojo".',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Sistema EOQ clasico',
          description: 'Calcular cantidad optima de pedido y punto de reorden para cada ingrediente usando la formula de Wilson.',
          feedback: 'El modelo EOQ (Economic Order Quantity) minimiza el costo total de ordenar + almacenar. Requiere demanda estable y lead times predecibles. Es el fundamento matematico de la gestion de inventarios y se estudia en Administracion de Operaciones.',
          cost: 4000000,
          revenue: 3000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'EOQ optimiza costos de inventario — reduccion estimada del 18% en desperdicios', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['eoq', 'wilson', 'optimizacion'],
          next: 'log_04',
          narrative: 'Calculaste el EOQ para los 15 ingredientes principales. La papa, por ejemplo: demanda semanal 200kg, costo de pedir $45.000, costo de almacenar $800/kg/semana. EOQ = 150kg cada 5 dias. Los desperdicios bajaron un 18% el primer mes.'
        },
        {
          id: 'B',
          label: 'Clasificacion ABC + revision periodica',
          description: 'Clasificar ingredientes por valor (A=80% del costo, B=15%, C=5%) y revisar inventario cada 3 dias para items A y semanal para B y C.',
          feedback: 'La clasificacion ABC aplica el principio de Pareto (80/20) al inventario. Permite concentrar el esfuerzo de control en los pocos items que representan la mayor inversion. Es complementaria al EOQ, no excluyente.',
          cost: 3000000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Clasificacion ABC prioriza control en ingredientes criticos — menos agotados', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['abc', 'pareto', 'revision_periodica'],
          next: 'log_04',
          narrative: 'Los items clase A (carne, pollo, queso) se revisan cada 3 dias con conteo fisico. Los B (vegetales, salsas) cada semana. Los C (servilletas, palillos) cada 15 dias. El esfuerzo de control se redujo un 40% sin perder precision en lo importante.'
        },
        {
          id: 'C',
          label: 'Software de inventario en tiempo real',
          description: 'Implementar un sistema digital con lectores de codigo de barras que actualiza stock automaticamente con cada venta y recepcion.',
          feedback: 'La tecnologia de inventario en tiempo real elimina el desfase entre stock real y registrado. El costo inicial es alto, pero la visibilidad total permite decisiones mas rapidas. Complementa cualquier modelo (EOQ, ABC) con datos precisos.',
          cost: 10000000,
          revenue: 4000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'finance', message: 'Inversion fuerte en tecnologia ($10M) pero visibilidad total del inventario', bsc: { bsc_financial: -1 }, cost: 0 },
            { area: 'operations', message: 'Datos en tiempo real permiten ajustar produccion al instante', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['software', 'digital', 'codigo_barras'],
          next: 'log_04',
          narrative: 'Instalaste un sistema con tablets en cada sede y lectores en recepcion. Ahora ves en tu celular cuantos kilos de pollo quedan en cada punto. La competencia sigue contando a mano los viernes.'
        }
      ]
    },

    // ========================================================
    //  NODO 4 — FLOTA DE ENTREGA (Dia 10) — binary
    // ========================================================

    'log_04': {
      day: 10,
      title: 'Flota de distribucion',
      context: 'Tus 3 sedes necesitan recibir producto diario. Ademas quieres ofrecer domicilios. Tu competidor ya esta en Rappi.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Flota propia (2 furgones refrigerados)',
          description: 'Comprar 2 furgones para abastecimiento entre sedes y domicilios directos.',
          feedback: 'La flota propia da control total sobre tiempos y cadena de frio, pero implica costos fijos altos (vehiculos, conductores, seguros, mantenimiento). Se justifica cuando el volumen de entregas es alto y constante.',
          cost: 18000000,
          revenue: 5000000,
          bsc: { bsc_financial: -1, bsc_customer: 4, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Compra de 2 furgones: $18M de inversion + $2.5M/mes en operacion', bsc: { bsc_financial: -3 }, cost: 0 },
            { area: 'marketing', message: 'Furgones con branding de la marca recorriendo Pereira — publicidad movil gratis', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['flota_propia', 'furgones'],
          next: 'log_05',
          narrative: 'Dos furgones blancos con tu logo recorren Pereira desde las 4am. Los conductores conocen cada ruta y cada sede. Los domicilios salen en 25 minutos promedio. Pero el mantenimiento del primer mes ya costo $1.2M.'
        },
        {
          id: 'B',
          label: 'Tercerizar con Rappi y transportadora',
          description: 'Domicilios via Rappi (comision 25%) y abastecimiento con transportadora local.',
          feedback: 'Tercerizar convierte costos fijos en variables: pagas solo cuando usas el servicio. Rappi cobra comision alta (22-28%) pero da acceso a miles de usuarios. La desventaja: pierdes control de la experiencia de entrega.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Rappi cobra 25% de comision — costo variable pero sin inversion inicial', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Presencia en Rappi expone la marca a 50.000+ usuarios en Pereira', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['tercerizado', 'rappi', 'variable'],
          next: 'log_05',
          narrative: 'Los domicilios empezaron a fluir por Rappi. 85 pedidos la primera semana. Pero 3 clientes se quejaron: la comida llego fria porque el rappitendero hizo dos paradas antes. Tu no controlas eso.'
        }
      ]
    },

    // ========================================================
    //  NODO 5 — OPTIMIZACION DE RUTAS (Dia 12) — choice
    // ========================================================

    'log_05': {
      day: 12,
      title: 'Optimizacion de rutas',
      context: 'El abastecimiento diario a 3 sedes (Centro, Circunvalar, Cuba) toma 3.5 horas. Tu competidor hace lo mismo en 2 horas porque optimizo sus rutas.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Rutas fijas por dia',
          description: 'Definir un circuito fijo: Bodega → Cuba → Centro → Circunvalar. Mismo orden todos los dias.',
          feedback: 'Las rutas fijas son faciles de ejecutar y los conductores las memorizan. Pero ignoran la variabilidad: si una sede necesita menos producto un dia, igual se pasa por ahi. Es eficiente operativamente pero no matematicamente.',
          cost: 1000000,
          revenue: 500000,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 2, bsc_learning: -1 },
          crossEffects: [
            { area: 'operations', message: 'Rutas fijas son predecibles — las sedes saben exactamente cuando llega el producto', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['rutas_fijas', 'simple'],
          next: 'log_06',
          narrative: 'El conductor memorizo la ruta en 3 dias. Sale a las 4:30am, Cuba a las 5:00, Centro a las 5:40, Circunvalar a las 6:15. Todo listo antes de abrir. Pero los lunes Cuba no necesita tanto y se pierde tiempo descargando poco.'
        },
        {
          id: 'B',
          label: 'Ruteo dinamico con Waze + demanda',
          description: 'Ajustar el orden de visita segun trafico en tiempo real y volumen de pedido de cada sede.',
          feedback: 'El ruteo dinamico aplica heuristicas del Problema del Agente Viajero (TSP). Combinar datos de trafico con demanda variable permite minimizar tiempo total de ruta. Es mas complejo pero puede reducir costos de transporte 15-25%.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Rutas optimizadas reducen tiempo de entrega 20% — mas frescura', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['ruteo_dinamico', 'tsp', 'waze'],
          next: 'log_06',
          narrative: 'Instalaste una app que sugiere el orden optimo cada manana basado en pedidos y trafico. Los lunes, cuando Cuba pide poco, el furgon va directo al Centro. El tiempo promedio bajo de 3.5 a 2.4 horas.'
        },
        {
          id: 'C',
          label: 'Entregas consolidadas cada 2 dias',
          description: 'Reducir frecuencia a entregas interdiarias con mayor volumen por viaje. Menos rutas, mas carga.',
          feedback: 'Consolidar entregas reduce costos de transporte (menos viajes) pero aumenta inventario en sede y riesgo de desperdicio en perecederos. Es un trade-off clasico entre costo de transporte y costo de almacenamiento.',
          cost: 1500000,
          revenue: 1500000,
          bsc: { bsc_financial: 4, bsc_customer: -2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Entregas interdiarias reducen costo de combustible 45%', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'operations', message: 'Menos entregas pero sedes deben almacenar mas — riesgo de vencimiento en frescos', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['consolidado', 'interdiario'],
          next: 'log_06',
          narrative: 'Ahora el furgon sale lunes, miercoles y viernes con carga doble. El ahorro en gasolina es real ($800.000/mes), pero el miercoles se te vencieron 12kg de pollo en la sede del Centro. La frescura tiene precio.'
        }
      ]
    },

    // ========================================================
    //  NODO 6 — CRISIS DE PROVEEDOR (Dia 14) — binary
    // ========================================================

    'log_06': {
      day: 14,
      title: 'Crisis: proveedor de carne quiebra',
      context: 'Tu proveedor principal de carne cerro sin aviso. Tienes stock para 2 dias. Tu competidor tambien esta afectado pero ya contacto un reemplazo en Cartago.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Buscar reemplazo urgente en frigorifico de Cartago',
          description: 'Contactar al Frigorifico de Cartago (Valle). Carne de buena calidad pero 30% mas cara por urgencia.',
          feedback: 'En gestion de riesgos de la cadena de suministro, tener proveedores de respaldo pre-identificados es clave. Reaccionar de emergencia siempre cuesta mas. Las empresas resilientes mantienen listas de proveedores alternativos antes de necesitarlos.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Sobrecosto del 30% en carne por compra de emergencia — $1.8M adicionales', bsc: { bsc_financial: -2 }, cost: 1800000 }
          ],
          tags: ['crisis', 'proveedor_respaldo', 'cartago'],
          next: 'log_07',
          narrative: 'Llamaste a 4 frigorificos en 2 horas. El de Cartago respondio rapido y envio 150kg al dia siguiente. La carne es buena pero cara. Aprendiste la leccion: nunca mas sin plan B.'
        },
        {
          id: 'B',
          label: 'Ajustar menu temporalmente sin carne',
          description: 'Reemplazar los 4 platos de carne con opciones de pollo y cerdo durante 5 dias mientras encuentras proveedor.',
          feedback: 'Adaptar la oferta ante disrupciones es una estrategia valida de flexibilidad operativa. Reduce el impacto financiero de la crisis pero puede afectar la percepcion del cliente si no se comunica bien.',
          cost: 1500000,
          revenue: -2000000,
          bsc: { bsc_financial: 2, bsc_customer: -3, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Clientes preguntan por los platos de carne — 12 quejas en redes sociales', bsc: { bsc_customer: -2 }, cost: 0 },
            { area: 'operations', message: 'Cocina se adapta rapido a menu reducido — muestra flexibilidad operativa', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['crisis', 'menu_adaptado', 'flexibilidad'],
          next: 'log_07',
          narrative: 'Pusiste un aviso creativo: "Semana del pollo y cerdo — nuestros chefs se lucen". Algunos clientes lo tomaron bien, otros se fueron molestos. En 5 dias encontraste un nuevo carnico a precio justo. La competencia nunca dejo de vender carne.'
        }
      ]
    },

    // ========================================================
    //  NODO 7 — CADENA DE FRIO (Dia 17) — choice
    // ========================================================

    'log_07': {
      day: 17,
      title: 'Cadena de frio',
      context: 'El INVIMA hizo una visita de rutina y advirtio que tu cadena de frio tiene puntos criticos. Tienes 10 dias para corregir antes de una multa de $8M.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Cuartos frios profesionales en cada sede',
          description: 'Instalar cuartos frios industriales con monitoreo de temperatura 24/7 via sensores IoT.',
          feedback: 'La cadena de frio ininterrumpida es obligatoria para alimentos perecederos. Cada ruptura (cuando la temperatura sube) reduce vida util y genera riesgo sanitario. Los sensores IoT permiten alertas automaticas antes de que haya dano.',
          cost: 14000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Cuartos frios con sensores eliminan desperdicios por ruptura de frio — ahorro $1.5M/mes', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Inversion de $14M en cadena de frio — retorno en 8 meses por reduccion de mermas', bsc: { bsc_financial: -1 }, cost: 0 }
          ],
          tags: ['cadena_frio', 'iot', 'invima'],
          next: 'log_08',
          narrative: 'Tres cuartos frios con sensores que envian alertas al celular si la temperatura sube de 4°C. El INVIMA volvio encantado. Las mermas por descomposicion bajaron de $2.1M a $400.000 mensuales.'
        },
        {
          id: 'B',
          label: 'Neveras comerciales + protocolo manual',
          description: 'Comprar neveras de acero inoxidable y capacitar al personal para registrar temperaturas cada 4 horas.',
          feedback: 'Los controles manuales dependen del factor humano: si alguien olvida registrar o la nevera falla de noche, no hay alerta. Es mas economico pero menos confiable. Cumple la norma minima sin margen de error.',
          cost: 6000000,
          revenue: 1000000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Protocolo manual de cadena de frio — depende de disciplina del personal', bsc: { bsc_internal: 0 }, cost: 0 }
          ],
          tags: ['cadena_frio', 'manual', 'basico'],
          next: 'log_08',
          narrative: 'Las neveras nuevas se ven bien. El protocolo dice registrar temperatura a las 6am, 10am, 2pm y 6pm. La primera semana fue perfecta. La segunda, 3 de 12 registros faltaron. El INVIMA acepto la mejora pero sin entusiasmo.'
        },
        {
          id: 'C',
          label: 'Eliminar almacenamiento de frio — todo fresco diario',
          description: 'Recibir perecederos cada manana y usar todo el mismo dia. Cero almacenamiento de frio prolongado.',
          feedback: 'El modelo "just-in-time" de frescos elimina la necesidad de cadena de frio prolongada pero exige una logistica de abastecimiento impecable. Es el modelo de cadenas japonesas como Yoshinoya. Alto riesgo si un proveedor falla.',
          cost: 2000000,
          revenue: 1500000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: -3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Cero almacenamiento de frio — todo debe llegar y usarse el mismo dia', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'marketing', message: 'Slogan "De la finca a tu plato hoy" — diferenciador potente', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['jit', 'fresco_diario', 'cero_inventario'],
          next: 'log_08',
          narrative: 'Tu promesa es audaz: todo se compra y prepara el mismo dia. La frescura se nota en el sabor. Pero un sabado el proveedor de pollo no llego y tuviste que correr a Mercasa a las 6am pagando el doble. Alta recompensa, alto riesgo.'
        }
      ]
    },

    // ========================================================
    //  NODO 8 — ECONOMIAS DE ESCALA (Dia 20) — multi
    // ========================================================

    'log_08': {
      day: 20,
      title: 'Economias de escala',
      context: 'Con 3 sedes operando, puedes negociar mejores condiciones. Tu competidor acaba de abrir su 4ta sede y presume descuentos del 20%. Elige hasta 3 estrategias.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Compras consolidadas mensuales',
          description: 'Unificar pedidos de las 3 sedes en una sola orden mensual para obtener descuentos por volumen.',
          feedback: 'Consolidar compras es la forma mas directa de capturar economias de escala. A mayor volumen, mayor poder de negociacion. Pero cuidado: comprar mucho de una vez aumenta el capital inmovilizado en inventario.',
          cost: 2000000,
          revenue: 4000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Compras consolidadas generan descuento del 15% — ahorro de $2.8M/mes', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['escala', 'consolidacion', 'volumen'],
          next: 'log_09'
        },
        {
          id: 'B',
          label: 'Cocina central de preparacion',
          description: 'Preparar salsas, aderezos y bases en un solo punto y distribuir a las 3 sedes.',
          feedback: 'La cocina central (comissary kitchen) estandariza sabor, reduce desperdicio de ingredientes parciales y permite contratar menos cocineros especializados. Es el modelo de McDonalds y muchas cadenas exitosas.',
          cost: 8000000,
          revenue: 3500000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Cocina central estandariza sabor — los clientes reciben lo mismo en cualquier sede', bsc: { bsc_internal: 3, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['escala', 'cocina_central', 'estandarizacion'],
          next: 'log_09'
        },
        {
          id: 'C',
          label: 'Alianza con otra cadena para compras conjuntas',
          description: 'Negociar con otro restaurante no competidor para hacer pedidos juntos y aumentar volumen.',
          feedback: 'Las alianzas de compra (purchasing consortia) multiplican el volumen sin crecer internamente. El reto es coordinar especificaciones y calendarios. Funciona bien cuando los productos son commodities (aceite, arroz, empaques).',
          cost: 1000000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Alianza de compras con restaurante amigo — descuento adicional 8% en basicos', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['escala', 'alianza', 'consorcio'],
          next: 'log_09'
        },
        {
          id: 'D',
          label: 'Marca propia en empaques',
          description: 'Disenar empaques con tu marca y fabricarlos en volumen. Costo unitario baja 40% vs comprar genericos.',
          feedback: 'La marca propia en empaques captura valor en un insumo que normalmente se compra generico. Ademas refuerza el branding. La inversion inicial en diseno y moldes es alta, pero el costo unitario baja significativamente a partir de 10.000 unidades.',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Empaques con marca propia — cada domicilio es publicidad en manos del cliente', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['escala', 'marca_propia', 'empaques'],
          next: 'log_09'
        }
      ]
    },

    // ========================================================
    //  NODO 9 — DISRUPCION DE TRANSPORTE (Dia 22) — choice
    // ========================================================

    'log_09': {
      day: 22,
      title: 'Disrupcion: paro de transportadores',
      context: 'Un paro de camioneros bloquea la via Pereira-Cartago y Pereira-Manizales. Tus proveedores de carne y lacteos no pueden entrar a la ciudad. Tienes inventario para 1 dia.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Activar proveedores urbanos de emergencia',
          description: 'Comprar en Mercasa y supermercados locales a precio retail para cubrir 3 dias de operacion.',
          feedback: 'Tener un plan de contingencia con fuentes locales es parte de la gestion de riesgo de la cadena de suministro. El sobrecosto es temporal y aceptable si mantiene la operacion. Las empresas sin plan B cierran.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Compras de emergencia a precio retail — sobrecosto del 40%', bsc: { bsc_financial: -2 }, cost: 2000000 },
            { area: 'operations', message: 'Operacion continua a pesar del paro — clientes ni se enteran', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['paro', 'contingencia', 'mercasa'],
          next: 'log_10',
          narrative: 'A las 5am estabas en Mercasa comprando carne, pollo y leche a precio de mostrador. Caro, pero tus 3 sedes abrieron normal. Tu competidor cerro 2 sedes por 2 dias y perdio $4.5M en ventas.'
        },
        {
          id: 'B',
          label: 'Cerrar sedes afectadas y operar con 1',
          description: 'Concentrar todo el inventario en la sede con mas demanda (Centro) y cerrar Cuba y Circunvalar 3 dias.',
          feedback: 'Concentrar operaciones es una decision de triage logistico: salvar lo que genera mas valor. Reduce perdidas pero deja clientes de las otras zonas sin servicio. Es racional pero danino para la reputacion en los barrios.',
          cost: 1000000,
          revenue: -5000000,
          bsc: { bsc_financial: 1, bsc_customer: -4, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: '2 sedes cerradas 3 dias — clientes de Cuba y Circunvalar se van a la competencia', bsc: { bsc_customer: -3 }, cost: 0 }
          ],
          tags: ['paro', 'cierre_parcial', 'triage'],
          next: 'log_10',
          narrative: 'Cerraste Cuba y Circunvalar. El Centro vendio el doble pero los clientes de los otros barrios publicaron en Instagram: "cerrado otra vez". Cuando reabriste, algunos ya estaban comiendo donde la competencia.'
        },
        {
          id: 'C',
          label: 'Menu de emergencia con inventario actual',
          description: 'Reducir el menu a 5 platos que puedas preparar con lo que tienes en stock y compras minimas locales.',
          feedback: 'Operar con menu reducido es una estrategia de resiliencia que mantiene todas las sedes abiertas. Comunica al cliente que hay una situacion especial y ofrece calidad en lo disponible. Es mejor que cerrar.',
          cost: 2000000,
          revenue: -1500000,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Comunicado en redes: "Menu especial por paro" — transparencia valorada por clientes', bsc: { bsc_customer: 1 }, cost: 0 },
            { area: 'operations', message: 'Cocina simplificada a 5 platos — operacion mas rapida y eficiente', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['paro', 'menu_emergencia', 'resiliencia'],
          next: 'log_10',
          narrative: 'Publicaste en redes: "Paro nos afecta pero NO cerramos. Menu especial con lo mejor que tenemos". Ofreciste 5 platos a precio rebajado. Los clientes aplaudieron la transparencia. La competencia estaba cerrada.'
        }
      ]
    },

    // ========================================================
    //  NODO 10 — ESTRATEGIA FINAL DE CADENA (Dia 25) — multi
    // ========================================================

    'log_10': {
      day: 25,
      title: 'Estrategia final de cadena de suministro',
      context: 'Ultimo dia. Con todo lo aprendido, defines la estrategia logistica a largo plazo para competir con la otra cadena. Elige hasta 3 pilares estrategicos.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Supply chain agil (respuesta rapida)',
          description: 'Priorizar velocidad y flexibilidad: inventarios bajos, multiples proveedores, entregas frecuentes.',
          feedback: 'La cadena agil sacrifica eficiencia por capacidad de respuesta. Es ideal para productos con demanda impredecible o estacional. Amazon y Zara son ejemplos de cadenas agiles exitosas.',
          cost: 5000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Cadena agil permite adaptarse rapido a cambios de demanda y crisis', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Capacidad de respuesta rapida como ventaja competitiva', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['estrategia', 'agil', 'flexibilidad'],
          next: null
        },
        {
          id: 'B',
          label: 'Supply chain lean (eficiencia maxima)',
          description: 'Priorizar reduccion de desperdicios: flujos estandarizados, lotes optimos, mejora continua tipo Toyota.',
          feedback: 'La cadena lean se enfoca en eliminar todo lo que no agrega valor: esperas, excesos, movimientos innecesarios. Funciona mejor con demanda estable y predecible. Toyota y Dell son referentes de eficiencia lean.',
          cost: 3000000,
          revenue: 5000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Modelo lean reduce costos operativos 22% — margen de ganancia sube', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['estrategia', 'lean', 'eficiencia'],
          next: null
        },
        {
          id: 'C',
          label: 'Supply chain resiliente (anti-fragil)',
          description: 'Priorizar continuidad: proveedores de respaldo, stock de seguridad alto, planes de contingencia activos.',
          feedback: 'La cadena resiliente acepta mayor costo a cambio de nunca parar. En un mundo con pandemias, paros y crisis climaticas, la resiliencia se volvio prioridad estrategica global desde 2020. Las empresas anti-fragiles mejoran con cada crisis.',
          cost: 7000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Cadena resiliente garantiza operacion continua ante cualquier disrupcion', bsc: { bsc_internal: 4 }, cost: 0 }
          ],
          tags: ['estrategia', 'resiliente', 'antifragil'],
          next: null
        },
        {
          id: 'D',
          label: 'Supply chain digital (datos + IA)',
          description: 'Priorizar tecnologia: sensores IoT, prediccion de demanda con machine learning, automatizacion de pedidos.',
          feedback: 'La cadena digital usa datos para tomar decisiones en tiempo real. La prediccion de demanda con IA puede reducir desperdicios 30-40%. Es el futuro de la logistica, pero requiere inversion inicial alta y talento tecnico escaso en ciudades intermedias como Pereira.',
          cost: 12000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Inversion alta en tecnologia ($12M) pero prediccion de demanda reduce mermas 35%', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Imagen de cadena innovadora y tecnologica — atrae talento joven', bsc: { bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['estrategia', 'digital', 'ia', 'iot'],
          next: null
        }
      ]
    }

  }
};
