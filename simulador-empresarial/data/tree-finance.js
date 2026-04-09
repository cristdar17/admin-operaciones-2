/* ============================================================
   TREE-FINANCE - Arbol de decisiones del area de FINANZAS
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto del area: $75.000.000 COP
   ============================================================ */

window.TREE_FINANCE = {
  name: 'Finanzas',
  icon: '💰',
  color: '#34C759',
  startNode: 'fin_01',
  nodes: {

    // ============================================================
    //  FASE 1 - ESTRUCTURA DE CAPITAL (Dias 1-10)
    // ============================================================

    // --- DIA 2: Estructura de capital inicial ---
    'fin_01': {
      day: 2,
      title: 'Estructura de capital inicial',
      context: 'La cadena arranca con $500M COP de capital propio. El gerente financiero debe decidir como apalancar el negocio. En Colombia, las tasas de interes corporativo oscilan entre 14% y 22% E.A. segun el perfil de riesgo. Un mayor apalancamiento permite crecer rapido, pero el costo financiero puede asfixiar la operacion si las ventas no despegan. ¿Cual sera la estrategia de financiacion?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estructura conservadora (80% propio / 20% deuda)',
          description: 'Solicitar solo $100M en credito. Tasa preferencial del 15.5% E.A. con Bancolombia. Bajo riesgo financiero, pero crecimiento lento. Punto de equilibrio mas bajo necesario.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Presupuesto ajustado limita inversiones en cocina', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['conservador', 'bajo-riesgo', 'crecimiento-lento'],
          next: 'fin_02_safe',
          narrative: 'El banco aprueba el credito en 48 horas por el bajo monto. La tasa es de las mejores del mercado. Sin embargo, las otras areas miran con preocupacion el presupuesto limitado.'
        },
        {
          id: 'B',
          label: 'Estructura moderada (60% propio / 40% deuda)',
          description: 'Credito de $200M con Bancolombia. Tasa del 17.8% E.A. Equilibrio entre riesgo y capacidad de inversion. Se requiere un flujo de caja constante para cubrir cuotas mensuales.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Presupuesto razonable para equipos nuevos', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'marketing', message: 'Hay recursos disponibles para campanas iniciales', bsc: { bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['moderado', 'equilibrado'],
          next: 'fin_02_safe',
          narrative: 'El comite de credito de Bancolombia aprueba despues de analizar las proyecciones. La cuota mensual es manejable si se mantiene el nivel de ventas esperado.'
        },
        {
          id: 'C',
          label: 'Estructura agresiva (40% propio / 60% deuda)',
          description: 'Credito de $300M combinando Bancolombia y Davivienda. Tasa promedio del 20.2% E.A. Maximo crecimiento posible, pero el servicio de deuda sera muy alto. Si las ventas fallan, la empresa puede entrar en iliquidez.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Presupuesto amplio: equipos de ultima generacion', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'marketing', message: 'Gran presupuesto disponible para posicionamiento', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'logistics', message: 'Fondos para flota de domicilios desde el dia uno', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['agresivo', 'alto-riesgo', 'alto-retorno'],
          next: 'fin_02_risk',
          narrative: 'Dos bancos comparten el riesgo. El dinero llega rapido y las areas celebran el presupuesto abundante, pero la cuota mensual de $18M+ no perdona. Cada peso debe generar retorno.'
        },
        {
          id: 'D',
          label: 'Buscar inversionista angel',
          description: 'Un empresario pereirano del sector cafetero ofrece $250M a cambio del 25% de participacion. No genera deuda ni intereses, pero diluye el control y las utilidades futuras.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'El inversionista trae contactos en el sector hotelero', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'El inversionista exige contratar un controller financiero', bsc: { bsc_learning: 2 }, cost: -5000000 }
          ],
          tags: ['inversionista', 'sin-deuda', 'dilucion'],
          next: 'fin_02_risk',
          narrative: 'El inversionista acepta. Aporta no solo capital sino experiencia empresarial y una red de contactos en el Eje Cafetero. Pero ahora hay que rendir cuentas a un socio que opina sobre cada decision.'
        }
      ]
    },

    // --- DIA 4 (rama conservadora): Linea de credito con perfil bajo ---
    'fin_02_safe': {
      day: 4,
      title: 'Linea de credito - Perfil conservador',
      context: 'Con un endeudamiento bajo, los bancos ven a la empresa como un cliente de bajo riesgo. Bancolombia ofrece condiciones preferenciales. La pregunta es: ¿tomar la linea de credito como red de seguridad, o aprovechar el buen perfil para algo mas ambicioso?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Linea rotativa estandar $50M al 16.5% E.A.',
          description: 'Tasa preferencial por buen perfil crediticio. Solo se paga si se usa. Comision de disponibilidad minima. Red de seguridad perfecta para un perfil conservador.',
          cost: 400000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [],
          tags: ['bancolombia', 'credito-rotativo', 'preferencial'],
          next: 'fin_03',
          narrative: 'Bancolombia aprueba en 2 dias habiles con tasa preferencial. El perfil conservador da acceso a las mejores condiciones del mercado. Red de seguridad lista sin costo real.'
        },
        {
          id: 'B',
          label: 'Rechazar linea y crear fondo de reserva interno ($25M)',
          description: 'Apartar $25M del capital como colchon propio. Sin intereses ni ataduras bancarias. Pero reduce el capital de trabajo disponible para las primeras semanas de operacion.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: -1, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Capital de trabajo reducido en las primeras semanas', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['sin-credito', 'autofinanciado', 'independiente'],
          next: 'fin_03',
          narrative: 'Cero dependencia bancaria. Pero $25M inmovilizados "por si acaso" son $25M que no estan trabajando. El equipo debatira si esa prudencia extrema vale el costo de oportunidad.'
        }
      ]
    },

    // --- DIA 4 (rama agresiva/inversionista): Linea de credito con perfil alto ---
    'fin_02_risk': {
      day: 4,
      title: 'Linea de credito - Perfil de alto crecimiento',
      context: 'Con un nivel de inversion alto (ya sea por deuda o inversionista), la empresa tiene ambicion de crecer rapido. Los bancos ven potencial pero tambien riesgo. Las condiciones seran diferentes a las de una empresa conservadora.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bancolombia - Rotativo $80M al 19.5% E.A. con garantia',
          description: 'Cupo alto gracias al respaldo del inversionista o los activos financiados. Tasa mas alta por el perfil de riesgo. Requiere garantia sobre los equipos de cocina.',
          cost: 800000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Equipos de cocina en garantia bancaria', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['bancolombia', 'credito-rotativo', 'cupo-alto'],
          next: 'fin_03',
          narrative: 'Cupo generoso pero con condiciones. La tasa refleja que la empresa ya tiene un nivel de deuda/compromiso alto. Los equipos quedan como garantia: no se pueden vender sin permiso del banco.'
        },
        {
          id: 'B',
          label: 'Davivienda - Rotativo $60M al 18.2% E.A. sin garantia',
          description: 'Menor cupo pero sin garantia real. Davivienda quiere competir con Bancolombia por el cliente. Tasa intermedia. Mas flexibilidad operativa.',
          cost: 600000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [],
          tags: ['davivienda', 'credito-rotativo', 'sin-garantia'],
          next: 'fin_03',
          narrative: 'Davivienda aprueba sin pedir garantias reales. Los equipos quedan libres y la operacion mantiene flexibilidad total. El cupo es menor pero suficiente para emergencias.'
        },
        {
          id: 'C',
          label: 'Negociar con ambos bancos para obtener la mejor oferta',
          description: 'Poner a competir a Bancolombia y Davivienda. Puede lograr mejores condiciones, pero el proceso toma 2 semanas y consume tiempo gerencial valioso.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [],
          tags: ['negociacion', 'competencia-bancaria', 'tiempo'],
          next: 'fin_03',
          narrative: 'Despues de 2 semanas de reuniones, Bancolombia mejora su oferta: $75M al 17.8% sin garantia. Excelente resultado, pero las 2 semanas sin linea de credito fueron un riesgo calculado que salio bien.'
        }
      ]
    },

    // --- DIA 6: Estrategia de capital de trabajo ---
    'fin_03': {
      day: 6,
      title: 'Estrategia de capital de trabajo',
      context: 'El capital de trabajo es el oxigeno del negocio: la diferencia entre activos corrientes y pasivos corrientes. En un restaurante, esto se traduce en: ¿cuanto inventario tener? ¿a cuantos dias pagar proveedores? ¿que plazo dar a clientes corporativos? En Colombia, el ciclo de conversion de efectivo promedio en restaurantes es de 15-20 dias.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estrategia restrictiva (minimo inventario, cobro inmediato)',
          description: 'Inventario para 3 dias, pago a proveedores a 30 dias, cero credito a clientes. Maximiza el efectivo disponible pero puede generar desabastecimiento y perder clientes corporativos que piden factura a 15 dias.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 5, bsc_customer: -3, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Pedidos de insumos mas frecuentes, lotes pequenos', bsc: { bsc_internal: -3 }, cost: -2000000 },
            { area: 'marketing', message: 'Clientes corporativos rechazan la politica sin credito', bsc: { bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['restrictivo', 'liquidez', 'eficiente'],
          next: 'fin_04',
          narrative: 'La caja esta saludable, pero el area de logistica se queja de que tiene que hacer pedidos casi diarios. Dos empresas del centro de Pereira preguntan por catering pero no aceptan pago de contado.'
        },
        {
          id: 'B',
          label: 'Estrategia moderada (equilibrio entre liquidez y servicio)',
          description: 'Inventario para 7 dias, pago a proveedores a 15 dias, credito a clientes corporativos a 8 dias. Balance entre eficiencia financiera y operativa.',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'Frecuencia de pedidos manejable, buen nivel de stock', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'marketing', message: 'Politica de credito atrae clientes corporativos', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['moderado', 'equilibrado'],
          next: 'fin_04',
          narrative: 'Un buen equilibrio. Los proveedores estan comodos con los plazos, los clientes corporativos aceptan las condiciones, y la caja tiene un margen razonable.'
        },
        {
          id: 'C',
          label: 'Estrategia flexible (amplio inventario, credito generoso)',
          description: 'Inventario para 12 dias, pago a proveedores a 8 dias, credito a clientes hasta 30 dias. Maximiza satisfaccion de proveedores y clientes pero inmoviliza mucho capital.',
          cost: 12000000,
          revenue: 5000000,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Almacen lleno, nunca falta nada', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'marketing', message: 'Clientes corporativos encantados con el plazo de pago', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'operations', message: 'Riesgo de desperdicio por exceso de inventario perecedero', bsc: { bsc_internal: -2 }, cost: -3000000 }
          ],
          tags: ['flexible', 'generoso', 'capital-inmovilizado'],
          next: 'fin_04',
          narrative: 'Los proveedores aman recibir pago rapido y dan prioridad a tus pedidos. Los clientes corporativos firman contratos de catering. Pero la caja esta tensa y hay riesgo de que los ingredientes perecederos se danen.'
        }
      ]
    },

    // --- DIA 8: Asignacion de presupuesto extra a areas (MULTI) ---
    'fin_04': {
      day: 8,
      title: 'Asignacion de presupuesto adicional',
      context: 'Despues de analizar los primeros dias de operacion, el area de finanzas tiene $20M COP disponibles para repartir entre las areas que mas lo necesiten. Cada area ha presentado su caso. Operaciones quiere un horno industrial nuevo, Marketing pide pauta en Instagram, Talento Humano necesita uniformes y capacitacion, Logistica quiere una moto adicional para domicilios, e I+D propone un menu vegano experimental. Selecciona MAXIMO 2 areas para financiar.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Operaciones - Horno industrial combinado ($10M)',
          description: 'Un horno racional que reduce tiempos de coccion 40% y consumo de gas 25%. Impacto directo en capacidad de produccion y costo unitario. Concepto clave: reduccion del punto de equilibrio.',
          cost: 10000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Horno industrial nuevo: capacidad +40%, costos -25%', bsc: { bsc_internal: 6, bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['inversion', 'capex', 'operaciones'],
          next: 'fin_05',
          narrative: 'El horno llega en 5 dias. Operaciones esta eufonica: pueden producir mas platos en menos tiempo y con menor costo de gas. El punto de equilibrio baja significativamente.'
        },
        {
          id: 'B',
          label: 'Marketing - Campana digital en redes ($8M)',
          description: 'Pauta en Instagram y TikTok durante 2 semanas, influencers locales, y produccion de contenido. Genera visibilidad inmediata en Pereira.',
          cost: 8000000,
          revenue: 4000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Presupuesto extra para campana digital agresiva', bsc: { bsc_customer: 5, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['marketing', 'digital', 'posicionamiento'],
          next: 'fin_05',
          narrative: 'Los reels en TikTok empiezan a viralizarse. Dos influencers pereiranos con 50K seguidores cada uno publican contenido. Las ventas del fin de semana suben 20%.'
        },
        {
          id: 'C',
          label: 'Talento Humano - Capacitacion y uniformes ($6M)',
          description: 'Programa de servicio al cliente para todo el personal + uniformes corporativos de calidad. Mejora la imagen y la atencion.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Fondos para plan de capacitacion integral', bsc: { bsc_learning: 5, bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['talento', 'capacitacion', 'servicio'],
          next: 'fin_05',
          narrative: 'El equipo sale motivado de la capacitacion. Los uniformes nuevos proyectan una imagen profesional. Los clientes notan la diferencia en el trato.'
        },
        {
          id: 'D',
          label: 'Logistica - Moto y equipo de domicilios ($7M)',
          description: 'Una moto con cajon termico, casco, y app de rastreo GPS. Ampliar la capacidad de delivery es clave en la era post-pandemia.',
          cost: 7000000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Moto nueva para domicilios: cobertura +50%', bsc: { bsc_internal: 4, bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['logistica', 'domicilios', 'delivery'],
          next: 'fin_05',
          narrative: 'La moto nueva permite cubrir barrios mas lejanos: Cuba, Dosquebradas sur, y la circunvalar. Los pedidos por Rappi y domicilios propios suben 35%.'
        },
        {
          id: 'E',
          label: 'I+D - Menu vegano experimental ($9M)',
          description: 'Desarrollar 5 platos veganos/plant-based con ingredientes locales. Puede abrir un nicho de mercado en Pereira que ninguna cadena de comida rapida atiende.',
          cost: 9000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 6 },
          crossEffects: [
            { area: 'innovation', message: 'Fondos para investigacion de menu vegano', bsc: { bsc_learning: 6, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['innovacion', 'vegano', 'diferenciacion'],
          next: 'fin_05',
          narrative: 'El equipo de I+D desarrolla hamburguesas de lenteja, wraps de platano maduro con hogao, y una "mazorca burger". Las pruebas internas son prometedoras, pero falta validar con el mercado.'
        }
      ]
    },

    // --- DIA 10: Inversion de excedentes a corto plazo ---
    'fin_05': {
      day: 10,
      title: 'Inversion de excedentes de tesoreria',
      context: 'Despues de las asignaciones, quedan $15M COP en excedentes temporales que no se necesitaran por 30-45 dias. En Colombia, dejar la plata quieta en cuenta de ahorros rinde apenas 1-2% E.A. Existen alternativas de corto plazo: CDTs (Certificados de Deposito a Termino), fondos de inversion colectiva (fiducias), o mantener liquidez total. Todo peso ocioso es un costo de oportunidad.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'CDT a 30 dias en Bancolombia al 11.5% E.A.',
          description: 'Inversion segura, garantizada por Fogafin hasta $50M. Rendimiento modesto pero predecible. El dinero queda "amarrado" por 30 dias: si lo necesitas antes, pierdes los intereses.',
          cost: 15000000,
          revenue: 15140000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['cdt', 'renta-fija', 'seguro'],
          next: 'fin_06',
          narrative: 'El CDT se abre digitalmente en 5 minutos. En 30 dias rendira $140.000 de intereses. Poco, pero mas que nada. El riesgo es necesitar esa plata antes del vencimiento.'
        },
        {
          id: 'B',
          label: 'Fondo de inversion colectiva (Fiducia Bancolombia)',
          description: 'Fondo "Fiducuenta" con liquidez en T+1 (un dia habil). Rinde entre 9% y 13% E.A. dependiendo del mercado. No tiene garantia de Fogafin, pero el riesgo es muy bajo.',
          cost: 15000000,
          revenue: 15100000,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [],
          tags: ['fiducia', 'liquidez', 'rendimiento-variable'],
          next: 'fin_06',
          narrative: 'El dinero se mueve a Fiducuenta. La ventaja: si surge una emergencia, se puede retirar en 24 horas. El rendimiento no es espectacular, pero la flexibilidad vale.'
        },
        {
          id: 'C',
          label: 'Mantener en cuenta de ahorros (liquidez total)',
          description: 'Cero rendimiento real (la tasa de ahorro no supera la inflacion), pero el dinero esta disponible al instante. Ante la incertidumbre de un negocio nuevo, la liquidez es reina.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 0, bsc_learning: 0 },
          crossEffects: [],
          tags: ['liquidez', 'conservador', 'cero-rendimiento'],
          next: 'fin_06',
          narrative: 'La plata queda en la cuenta corriente. Cero rendimiento, pero disponible al instante. Si la inflacion en Colombia esta al 9%, estos $15M pierden poder adquisitivo cada dia.'
        },
        {
          id: 'D',
          label: 'Prestar a otra area para proyecto urgente',
          description: 'Operaciones necesita $15M para reparar una nevera industrial que se dano. Se presta internamente al 0% pero se espera "devolucion" en forma de mayor productividad.',
          cost: 15000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Finanzas presta $15M para reparar nevera industrial', bsc: { bsc_internal: 5, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['prestamo-interno', 'operaciones', 'solidaridad'],
          next: 'fin_06',
          narrative: 'La nevera se repara en 2 dias. Operaciones agradece enormemente el apoyo. La produccion no se detiene y no se pierden ingredientes perecederos. Finanzas espera reciprocidad.'
        }
      ]
    },

    // ============================================================
    //  FASE 2 - GESTION FINANCIERA (Dias 13-25)
    // ============================================================

    // --- DIA 13: Analisis de costos y punto de equilibrio ---
    'fin_06': {
      day: 13,
      title: 'Analisis de costos por linea de producto',
      context: 'Despues de 2 semanas de operacion, finanzas tiene datos reales de costos y ventas. El restaurante tiene 4 lineas de producto: hamburguesas ($18.000 PVP, costo $7.200), pollo ($15.000 PVP, costo $6.750), ensaladas ($12.000 PVP, costo $4.800), y bebidas ($5.000 PVP, costo $1.000). Los costos fijos mensuales son $25M. Hay que analizar cuales lineas son mas rentables usando el punto de equilibrio multiproducto y decidir donde enfocar esfuerzos.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Enfocar en hamburguesas (mayor margen absoluto: $10.800)',
          description: 'El margen de contribucion de hamburguesas es el mas alto en pesos. Aumentar produccion, mejorar receta, y empujar ventas de esta linea. El punto de equilibrio se alcanza vendiendo ~2.315 hamburguesas/mes.',
          cost: 5000000,
          revenue: 8000000,
          bsc: { bsc_financial: 4, bsc_customer: 2, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Priorizamos hamburguesas: optimizar estacion de parrilla', bsc: { bsc_internal: 3 }, cost: -2000000 },
            { area: 'marketing', message: 'Campana enfocada en hamburguesas como producto estrella', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['hamburguesas', 'margen', 'punto-equilibrio'],
          next: 'fin_07',
          narrative: 'El analisis muestra que las hamburguesas generan el 48% del margen total con solo el 35% de las ventas. Operaciones reorganiza la cocina para priorizar esta linea. El punto de equilibrio multiproducto baja.'
        },
        {
          id: 'B',
          label: 'Enfocar en bebidas (mayor margen porcentual: 80%)',
          description: 'Las bebidas tienen el margen porcentual mas alto (80%). Cada limonada de $5.000 deja $4.000. Invertir en estacion de bebidas artesanales y combos que siempre incluyan bebida.',
          cost: 3000000,
          revenue: 6000000,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Nueva estacion de bebidas artesanales en cocina', bsc: { bsc_internal: 2 }, cost: -1500000 },
            { area: 'innovation', message: 'Desarrollar recetas de bebidas unicas: lulada, cholado', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['bebidas', 'margen-porcentual', 'upselling'],
          next: 'fin_07',
          narrative: 'Cada combo ahora incluye bebida por defecto. La estacion de bebidas artesanales con lulada, cholado y jugo de maracuya se vuelve un diferenciador. El margen general sube 12%.'
        },
        {
          id: 'C',
          label: 'Portafolio equilibrado (optimizar todas las lineas)',
          description: 'No concentrar riesgo en una sola linea. Mejorar eficiencia en las 4 categorias, negociar costos con proveedores, y usar el mix de ventas como esta. Diversificacion reduce riesgo.',
          cost: 7000000,
          revenue: 5000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'logistics', message: 'Renegociar con todos los proveedores para bajar costos', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'operations', message: 'Optimizacion general de cocina para todas las lineas', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['diversificado', 'equilibrado', 'riesgo-bajo'],
          next: 'fin_07',
          narrative: 'Se renegocia con proveedores logrando una rebaja del 8% en ingredientes. Cada linea mejora un poco. El portafolio diversificado protege contra caidas en cualquier categoria.'
        },
        {
          id: 'D',
          label: 'Eliminar ensaladas (menor volumen de ventas)',
          description: 'Las ensaladas solo representan el 10% de las ventas y requieren ingredientes perecederos. Eliminarlas simplifica operaciones y reduce desperdicio. Pero se pierde el segmento saludable.',
          cost: 0,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: -4, bsc_internal: 2, bsc_learning: -1 },
          crossEffects: [
            { area: 'operations', message: 'Menos SKUs: cocina mas simple y rapida', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Se pierde el argumento de "opciones saludables"', bsc: { bsc_customer: -3 }, cost: 0 },
            { area: 'logistics', message: 'Menos ingredientes perecederos, menos desperdicio', bsc: { bsc_internal: 2, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['eliminar-linea', 'simplificar', 'riesgo-reputacion'],
          next: 'fin_07',
          narrative: 'Se eliminan las ensaladas. La cocina se simplifica y el desperdicio baja 30%. Pero en redes sociales empiezan a preguntar: "¿Ya no tienen opciones saludables?" El segmento fitness de Pereira se queja.'
        }
      ]
    },

    // --- DIA 16: Crisis de flujo de caja ---
    'fin_07': {
      day: 16,
      title: 'Crisis de flujo de caja',
      context: '¡Alerta roja! Un problema inesperado: el proveedor principal de carne exige pago anticipado por un lote de $22M porque tuvo problemas con otro cliente que no le pago. Al mismo tiempo, la DIAN notifica que hay una retencion en la fuente de $8M que se debia declarar la semana pasada. El saldo en caja es de $18M. Hay un deficit de $12M que debe resolverse HOY o la operacion se detiene manana.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Usar la linea de credito rotativo',
          description: 'Desembolsar $12M de la linea de credito. Es la solucion mas rapida: el dinero esta disponible hoy. Pero se empiezan a pagar intereses desde manana y la linea disponible se reduce.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'La produccion no se detiene, carne asegurada', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'logistics', message: 'Proveedor de carne recibe pago: relacion preservada', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['credito', 'emergencia', 'liquidez'],
          next: 'fin_08',
          narrative: 'El desembolso se hace por la app del banco en 10 minutos. Se paga al proveedor y a la DIAN. La operacion no se detiene ni un segundo, pero ahora hay $12M en deuda rotativa generando intereses diarios. La crisis se resolvio rapido, el equipo respira.'
        },
        {
          id: 'B',
          label: 'Negociar plazos y priorizar pagos',
          description: 'Pagar $8M a la DIAN (no negociable: las multas tributarias son altisimas) y negociar con el proveedor pago parcial hoy ($10M) y el resto en 5 dias. Requiere vender platos agresivamente este fin de semana.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: -1, bsc_internal: -1, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Lote de carne reducido: menu limitado por 5 dias', bsc: { bsc_internal: -3, bsc_customer: -2 }, cost: 0 },
            { area: 'marketing', message: 'Urgente: promociones de fin de semana para generar caja', bsc: { bsc_customer: 1, bsc_financial: 1 }, cost: -3000000 }
          ],
          tags: ['negociacion', 'restriccion', 'flujo-caja'],
          next: 'fin_07b',
          narrative: 'La DIAN recibe su pago inmediato (no jugar con la DIAN). El proveedor acepta el pago parcial pero se nota molesto. El fin de semana sera critico: se necesita vender fuerte para cubrir el saldo.'
        }
      ]
    },

    // --- DIA 17 (rama negociacion): Fin de semana critico ---
    'fin_07b': {
      day: 17,
      title: 'Fin de semana critico: ¿se cubre el deficit?',
      context: 'El proveedor espera el saldo de $12M el lunes. Las ventas del fin de semana fueron de $9M, mejor de lo esperado. Pero aun faltan $3M. El lunes a las 8am el proveedor llamara. ¿Como cubrir el faltante?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Pedir anticipo del fin de semana siguiente a un cliente corporativo',
          description: 'Un cliente corporativo que tiene evento el proximo viernes acepta pagar el 50% de anticipo ($4M). Se cubre el deficit y queda un colchon minimo.',
          cost: 0,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Relacion con cliente corporativo se fortalece', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['anticipo', 'negociacion', 'cliente'],
          next: 'fin_08',
          narrative: 'El cliente acepta pagar anticipo a cambio de un 5% de descuento. Se cubren los $3M faltantes. El proveedor recibe su dinero el lunes y la relacion se mantiene. Leccion: un buen cliente corporativo es un activo financiero.'
        },
        {
          id: 'B',
          label: 'Vender equipos menores que no se usan ($5M)',
          description: 'Una freidora auxiliar y un congelador pequeno que estan subutilizados se venden en Marketplace por $5M. Solucion definitiva pero se pierden activos.',
          cost: 0,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Se vendieron equipos auxiliares: capacidad de respaldo reducida', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['venta-activos', 'emergencia', 'capacidad'],
          next: 'fin_08',
          narrative: 'Los equipos se venden rapido. Se cubren los $3M y queda algo extra. Pero si la demanda sube, no habra equipo de respaldo. Una decision de corto plazo con implicaciones operativas.'
        }
      ]
    },

    // --- DIA 19: Presupuesto de capital - Proyecto de expansion (NPV/IRR) ---
    'fin_08': {
      day: 19,
      title: 'Evaluacion de proyecto de expansion',
      context: 'Aparece una oportunidad: un local disponible en el Centro Comercial Victoria Plaza, zona de alto trafico en Pereira. El arriendo es $8M/mes, la adecuacion cuesta $45M, y se proyectan ventas adicionales de $25M/mes con costos variables del 45%. El analisis financiero muestra: VPN (al 18% de tasa de descuento) = $12.3M positivo, TIR = 28.5%, Payback = 14 meses. ¿Se aprueba la expansion?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Aprobar expansion - financiar con recursos propios',
          description: 'Invertir $45M de caja propia. VPN positivo y TIR superior al WACC. Es un proyecto viable segun los criterios de presupuesto de capital. Pero compromete seriamente la liquidez.',
          cost: 45000000,
          revenue: 15000000,
          bsc: { bsc_financial: 3, bsc_customer: 5, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Nuevo punto de venta: duplicar capacidad operativa', bsc: { bsc_internal: 4, bsc_customer: 3 }, cost: -10000000 },
            { area: 'hr', message: 'Contratar 8 personas para el nuevo local', bsc: { bsc_learning: 3 }, cost: -12000000 },
            { area: 'marketing', message: 'Gran inauguracion en Victoria Plaza', bsc: { bsc_customer: 5 }, cost: -5000000 }
          ],
          tags: ['expansion', 'vpn-positivo', 'recursos-propios'],
          next: 'fin_08b',
          narrative: 'Se firma el contrato de arriendo. La adecuacion tardara 15 dias. Las otras areas se activan para el nuevo punto. Es la apuesta mas grande hasta ahora: si funciona, se duplican ingresos. Si falla, la caja quedara critica.'
        },
        {
          id: 'B',
          label: 'Aprobar expansion - financiar con leasing',
          description: 'Leasing operativo con Bancolombia Leasing para la adecuacion ($45M a 24 meses, canon $2.3M/mes). No compromete la caja de golpe y el canon es deducible de impuestos.',
          cost: 5000000,
          revenue: 15000000,
          bsc: { bsc_financial: 4, bsc_customer: 5, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Nuevo punto de venta con equipos en leasing', bsc: { bsc_internal: 3, bsc_customer: 3 }, cost: -5000000 },
            { area: 'hr', message: 'Contratar personal para segundo punto', bsc: { bsc_learning: 3 }, cost: -12000000 },
            { area: 'marketing', message: 'Inauguracion del segundo punto en centro comercial', bsc: { bsc_customer: 4 }, cost: -4000000 }
          ],
          tags: ['expansion', 'leasing', 'beneficio-fiscal'],
          next: 'fin_08b',
          narrative: 'El leasing se aprueba en una semana. La caja no se desangra y el canon mensual se absorbe con las ventas proyectadas. Ademas, el beneficio tributario del leasing operativo reduce la carga fiscal.'
        },
        {
          id: 'C',
          label: 'Rechazar la expansion - no es el momento',
          description: 'La TIR es atractiva pero la empresa aun esta estabilizando su primer punto. Expandirse prematuramente puede colapsar la operacion. Mejor consolidar y esperar una oportunidad en 6 meses.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Sin expansion: enfocarse en eficiencia del punto actual', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['conservador', 'consolidar', 'prudencia'],
          next: 'fin_09',
          narrative: 'El equipo esta dividido. Algunos ven la oportunidad perdida, otros aplauden la prudencia. Se enfocaran en que el primer punto sea impecable antes de pensar en crecer.'
        }
      ]
    },

    // --- DIA 20 (rama expansion aprobada): Primer mes del nuevo local ---
    'fin_08b': {
      day: 20,
      title: 'Desempeno del nuevo local - primer reporte',
      context: 'El segundo punto en Victoria Plaza lleva 5 dias abierto. Las ventas estan al 65% de la proyeccion, lo cual es normal para un local nuevo. Sin embargo, los costos de operacion estan un 30% por encima de lo estimado (doble nomina, doble servicios, doble arriendo). El flujo de caja consolidado es negativo esta semana. ¿Como reaccionar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Invertir mas en marketing local para acelerar ventas',
          description: 'Destinar $5M en volantes, pendones, y degustaciones en el centro comercial. Atacar fuerte la primera impresion. Si la gente no sabe que existes, no vendrá.',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Campana de lanzamiento del segundo punto', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['marketing', 'expansion', 'lanzamiento'],
          next: 'fin_09',
          narrative: 'Las degustaciones son un exito. La gente prueba y vuelve. En 10 dias las ventas suben al 85% de la proyeccion. La inversion en marketing del lanzamiento fue clave para acelerar la curva de adopcion.'
        },
        {
          id: 'B',
          label: 'Reducir costos del nuevo local: horario parcial',
          description: 'Operar solo almuerzo y cena (11am-3pm, 6pm-9pm) en vez de jornada completa. Reduce costos de personal y servicios un 35% mientras se estabiliza la demanda.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'hr', message: 'Personal del nuevo local en medio tiempo', bsc: { bsc_learning: -1 }, cost: 0 },
            { area: 'operations', message: 'Operacion parcial: optimizar tiempos de apertura', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['costos', 'eficiencia', 'horario-parcial'],
          next: 'fin_09',
          narrative: 'El horario parcial reduce significativamente los costos fijos diarios. El punto deja de dar perdida en la segunda semana. Cuando la demanda crezca, se ampliara gradualmente.'
        },
        {
          id: 'C',
          label: 'Mantener operacion completa y esperar la curva de adopcion',
          description: 'Todo local nuevo tarda 4-6 semanas en estabilizarse. No cambiar nada y confiar en que las ventas creceran naturalmente. Requiere aguantar el flujo de caja negativo.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['paciencia', 'largo-plazo', 'confianza'],
          next: 'fin_09',
          narrative: 'Se mantiene la operacion completa. Las primeras semanas duelen financieramente, pero al dia 30 las ventas alcanzan el 90% de la proyeccion. La paciencia tuvo un costo pero el local se consolida sin recortes.'
        }
      ]
    },

    // --- DIA 22: Optimizacion tributaria ---
    'fin_09': {
      day: 22,
      title: 'Estrategia de optimizacion tributaria',
      context: 'El contador presenta el panorama fiscal: la tarifa de renta para empresas en Colombia es del 35%. Hay gastos que se pueden optimizar legalmente para reducir la base gravable. La DIAN ha intensificado las fiscalizaciones en el Eje Cafetero. Hay tres estrategias sobre la mesa, todas legales, pero con diferentes niveles de agresividad fiscal.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estrategia conservadora: solo deducciones estandar',
          description: 'Deducir unicamente lo que marca la ley sin interpretaciones creativas: nomina, arriendos, depreciacion en linea recta, impuestos pagados. Cero riesgo de requerimiento de la DIAN.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [],
          tags: ['tributario', 'conservador', 'seguro'],
          next: 'fin_10',
          narrative: 'El impuesto a pagar sera alto pero no habra sorpresas. La contabilidad esta limpia como un cristal. Si la DIAN pide revision, todo estara en orden perfecto.'
        },
        {
          id: 'B',
          label: 'Estrategia moderada: maximizar deducciones legales',
          description: 'Incluir depreciacion acelerada de equipos de cocina (vida util de 5 anos en vez de 10), deduccion de donaciones a fundaciones locales, y credito fiscal por nuevos empleos. Ahorro estimado: $8M en impuestos.',
          cost: 4000000,
          revenue: 8000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Nuevas contrataciones generan beneficio fiscal', bsc: { bsc_financial: 2, bsc_learning: 1 }, cost: 0 }
          ],
          tags: ['tributario', 'moderado', 'deducciones'],
          next: 'fin_10',
          narrative: 'El contador implementa la depreciacion acelerada y registra las donaciones. El ahorro fiscal es significativo. Todo esta soportado con documentos, pero requiere una carpeta tributaria impecable.'
        },
        {
          id: 'C',
          label: 'Estrategia agresiva: planeacion fiscal avanzada',
          description: 'Crear una SAS holding que facture servicios de gestion, distribuir gastos entre entidades, y usar todos los beneficios tributarios disponibles. Ahorro estimado: $15M. Pero si la DIAN interpreta esto como evasion, las sanciones serian del 160% del impuesto.',
          cost: 8000000,
          revenue: 15000000,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: -2, bsc_learning: 4 },
          crossEffects: [],
          tags: ['tributario', 'agresivo', 'riesgo-fiscal'],
          next: 'fin_10_audit',
          narrative: 'Se crea la estructura fiscal avanzada. El ahorro es enorme, pero el contador advierte: "Si la DIAN nos pide explicar esto, necesitamos que cada factura tenga sustancia economica real." El riesgo no es trivial.'
        }
      ]
    },

    // --- DIA 22 (rama): Consecuencia de estrategia agresiva ---
    'fin_10_audit': {
      day: 23,
      title: 'Notificacion de la DIAN',
      context: 'Al dia siguiente de implementar la estrategia fiscal agresiva, llega una notificacion de la DIAN: "Requerimiento ordinario de informacion". Piden soportes de todas las transacciones entre empresas vinculadas de los ultimos 3 meses. Es una revision de rutina, pero con la estructura recien creada, puede complicarse.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Revertir la estructura y pagar impuestos normales',
          description: 'Deshacer la holding, pagar los impuestos que se ahorraron, mas una sancion voluntaria del 5% por correccion. Total: $17M. Duele, pero es mucho menos que una sancion del 160%.',
          cost: 17000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [],
          tags: ['dian', 'correccion', 'sancion'],
          next: 'fin_10',
          narrative: 'Se presenta la correccion voluntaria ante la DIAN. Pierden $17M pero aprenden una leccion invaluable sobre los limites de la planeacion fiscal en Colombia. El contador suspira aliviado.'
        },
        {
          id: 'B',
          label: 'Mantener la estructura y enfrentar la revision',
          description: 'Defender la posicion con argumentos juridicos. Si la DIAN acepta, se ahorran $15M. Si no, la sancion puede ser de hasta $24M mas intereses moratorios. Es un juego de alto riesgo.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: -3, bsc_learning: 3 },
          crossEffects: [],
          tags: ['dian', 'riesgo', 'defensa-legal'],
          next: 'fin_10',
          narrative: 'El abogado tributarista prepara la respuesta. "Tenemos argumentos solidos," dice, "pero la DIAN en Pereira ha estado cerrando este tipo de estructuras." La incertidumbre pesa sobre el equipo.'
        }
      ]
    },

    // --- DIA 25: Renegociacion de deuda ---
    'fin_10': {
      day: 25,
      title: 'Renegociacion de condiciones crediticias',
      context: 'Han pasado casi 4 semanas. El banco ofrece refinanciar la deuda existente porque la empresa ha sido puntual en sus pagos. Las opciones incluyen: extender el plazo (cuota mas baja pero mas intereses totales), reducir la tasa (el banco compite con Davivienda que ofrecio mejor tasa), o hacer un abono extraordinario para reducir el saldo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Extender plazo de 24 a 36 meses',
          description: 'La cuota mensual baja un 28%, liberando flujo de caja. Pero se pagan $12M adicionales en intereses totales. Es el clasico dilema: comodidad mensual vs. costo total del credito.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Cuota mas baja libera flujo para gastos operativos', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['refinanciacion', 'plazo', 'flujo-caja'],
          next: 'fin_11',
          narrative: 'El banco acepta la extension. La cuota mensual baja de $14M a $10M. El flujo de caja respira, pero el costo financiero total sube. En el largo plazo, se paga mas.'
        },
        {
          id: 'B',
          label: 'Negociar reduccion de tasa (del 17.8% al 15.2% E.A.)',
          description: 'Usar la oferta de Davivienda como palanca. Si Bancolombia baja la tasa, el ahorro es de $6M en intereses totales sin cambiar el plazo. Requiere habilidad negociadora.',
          cost: 0,
          revenue: 6000000,
          bsc: { bsc_financial: 5, bsc_customer: 0, bsc_internal: 1, bsc_learning: 4 },
          crossEffects: [],
          tags: ['tasa', 'negociacion', 'ahorro-intereses'],
          next: 'fin_11',
          narrative: 'Bancolombia baja la tasa para no perder el cliente. $6M de ahorro en intereses que van directo al bolsillo. Una leccion de negociacion financiera: siempre cotizar con la competencia.'
        },
        {
          id: 'C',
          label: 'Abono extraordinario de $20M al capital',
          description: 'Reducir el saldo de la deuda en $20M de golpe. Los intereses futuros se calculan sobre un monto menor, generando un ahorro de $9M. Pero la caja queda muy apretada.',
          cost: 20000000,
          revenue: 9000000,
          bsc: { bsc_financial: 4, bsc_customer: -1, bsc_internal: -1, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Caja apretada: postergar compras no urgentes', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['abono', 'reduccion-deuda', 'agresivo'],
          next: 'fin_11',
          narrative: 'El abono reduce la deuda significativamente. Los intereses mensuales bajan y el banco mejora la calificacion crediticia. Pero la caja queda en minimos: cualquier imprevisto sera un problema.'
        }
      ]
    },

    // ============================================================
    //  FASE 3 - CRECIMIENTO Y CIERRE (Dias 28-45)
    // ============================================================

    // --- DIA 28: Oportunidad de inversion ---
    'fin_11': {
      day: 28,
      title: 'Oportunidad de inversion: nueva tecnologia',
      context: 'Un proveedor ofrece un sistema de punto de venta (POS) con inteligencia artificial que predice la demanda diaria con 85% de precision. Cuesta $18M de instalacion + $1.2M/mes de licencia. Promete reducir el desperdicio de alimentos en 35% y optimizar las compras. El ROI estimado es del 45% anual. ¿Vale la pena el riesgo de invertir en tecnologia en este punto?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Invertir en el sistema POS completo',
          description: 'Implementacion completa: POS con IA, integracion con inventario, prediccion de demanda, y dashboard en tiempo real. Es caro pero puede transformar la operacion.',
          cost: 18000000,
          revenue: 8000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'POS con IA: prediccion de demanda reduce desperdicio 35%', bsc: { bsc_internal: 5, bsc_financial: 3 }, cost: 0 },
            { area: 'logistics', message: 'Sistema predice necesidades: pedidos automaticos a proveedores', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'innovation', message: 'Datos de IA abren posibilidades de I+D', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['tecnologia', 'ia', 'inversion-alta'],
          next: 'fin_12',
          narrative: 'El sistema se instala en una semana. Los primeros datos son reveladores: se estaba desperdiciando $4M/mes en ingredientes. La IA empieza a afinar predicciones y la cocina opera con precision quirurgica.'
        },
        {
          id: 'B',
          label: 'Invertir solo en POS basico sin IA',
          description: 'Un sistema de punto de venta estandar ($5M) sin la capa de inteligencia artificial. Mejora el control pero sin prediccion automatica. Se puede escalar despues.',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'POS basico: mejor control de ventas e inventario', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['tecnologia', 'basico', 'escalable'],
          next: 'fin_12',
          narrative: 'El POS basico funciona bien para registrar ventas y controlar inventario. No tiene IA pero da visibilidad sobre los numeros. Se puede escalar si la empresa crece.'
        },
        {
          id: 'C',
          label: 'No invertir en tecnologia ahora',
          description: 'Seguir con el control manual y hojas de calculo. El dinero se necesita para la operacion diaria. "Si no esta roto, no lo arregles."',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: -2, bsc_learning: -3 },
          crossEffects: [
            { area: 'operations', message: 'Sin POS: control manual sigue, desperdicio continua', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['sin-tecnologia', 'manual', 'riesgo'],
          next: 'fin_11b',
          narrative: 'El equipo sigue con cuadernos y Excel. Funciona, pero se siguen perdiendo $4M/mes en desperdicio y no hay datos para tomar mejores decisiones. La competencia si esta invirtiendo en tecnologia.'
        }
      ]
    },

    // --- DIA 29 (rama sin tecnologia): Error contable por control manual ---
    'fin_11b': {
      day: 29,
      title: 'Error contable detectado',
      context: 'Sin sistema POS, la contabilidad se lleva en Excel. Un error de digitacion causo que $6M en ventas del fin de semana no se registraran. El inventario no cuadra con las ventas reportadas. El contador descubre la inconsistencia al hacer la conciliacion bancaria. Hay que decidir como corregir esto antes de que se acumulen mas errores.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Contratar auxiliar contable dedicado ($3.5M/mes)',
          description: 'Una persona que se encargue exclusivamente del registro diario de ventas, conciliaciones, y control de inventario. Solucion humana al problema tecnologico.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'hr', message: 'Nueva contratacion: auxiliar contable', bsc: { bsc_learning: 1 }, cost: -3500000 }
          ],
          tags: ['contratacion', 'control', 'manual'],
          next: 'fin_12',
          narrative: 'El auxiliar empieza de inmediato. Los registros mejoran, los errores se reducen al 2%. Pero es un costo fijo mensual que un POS habria evitado. A veces lo barato sale caro.'
        },
        {
          id: 'B',
          label: 'Implementar POS basico de emergencia ($4M)',
          description: 'Comprar un POS sencillo (sin IA) para al menos automatizar el registro de ventas. No es el sistema completo, pero elimina los errores de digitacion.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'POS basico instalado: ventas se registran automaticamente', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['pos', 'tecnologia', 'correccion'],
          next: 'fin_12',
          narrative: 'El POS se instala en 2 dias. Ya no hay errores de digitacion. Leccion costosa: debieron invertir en tecnologia desde el principio. El costo del error ($6M no registrados + $4M del POS) supera lo que costaba el sistema original.'
        }
      ]
    },

    // --- DIA 31: Programa de reduccion de costos (MULTI) ---
    'fin_12': {
      day: 31,
      title: 'Programa de reduccion de costos',
      context: 'Al cierre del primer mes, los costos estan 15% por encima de lo presupuestado. El margen operativo es del 12% cuando deberia ser del 20%. Finanzas diseña un programa de reduccion de costos con 5 iniciativas. Se deben seleccionar MAXIMO 3 para implementar inmediatamente. Cada una tiene beneficios y consecuencias diferentes.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Renegociar contratos con proveedores (-$4M/mes)',
          description: 'Pedir descuento por volumen y amenazar con cambiar de proveedor. Se puede lograr un 12% de reduccion en el costo de materias primas. Pero presionar mucho puede danar relaciones.',
          cost: 1000000,
          revenue: 4000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'Renegociacion agresiva con proveedores: posible tension', bsc: { bsc_internal: -1, bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['costos', 'proveedores', 'negociacion'],
          next: 'fin_13',
          narrative: 'Los proveedores ceden un 10% despues de una negociacion intensa. El de carne acepta de mala gana, el de verduras ofrece 12% feliz porque garantiza volumen. El ahorro mensual es significativo.'
        },
        {
          id: 'B',
          label: 'Reducir horario de operacion (-$3M/mes)',
          description: 'Cerrar 2 horas antes entre semana (de 10pm a 8pm). Las ventas despues de las 8pm solo representan el 8% del total diario pero generan costos fijos de personal y servicios.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 3, bsc_customer: -4, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            { area: 'hr', message: 'Reduccion de horas: personal contento, pero menos propinas', bsc: { bsc_learning: 1, bsc_financial: -1 }, cost: 0 },
            { area: 'marketing', message: 'Clientes nocturnos se quejan en redes sociales', bsc: { bsc_customer: -3 }, cost: 0 }
          ],
          tags: ['costos', 'horario', 'reduccion'],
          next: 'fin_13',
          narrative: 'Se cierra a las 8pm entre semana. Los universitarios de la UTP que cenaban tarde migran al rival. Las redes se llenan de quejas, pero el ahorro en costos fijos es real.'
        },
        {
          id: 'C',
          label: 'Optimizar porciones (ingenieria de menu) (-$2.5M/mes)',
          description: 'Reducir porciones un 10% sin que el cliente lo note (de 220g a 200g en hamburguesas, por ejemplo). Se invierte en mejor presentacion para compensar. Tecnica comun en la industria.',
          cost: 1500000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Nuevas fichas tecnicas con gramajes ajustados', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'marketing', message: 'Mejor presentacion compensa reduccion de porcion', bsc: { bsc_customer: 1 }, cost: -500000 }
          ],
          tags: ['costos', 'porciones', 'ingenieria-menu'],
          next: 'fin_13',
          narrative: 'Las nuevas fichas tecnicas reducen el costo por plato. La presentacion mejora con platos de menor diametro que hacen ver la porcion mas generosa. Psicologia del consumidor en accion.'
        },
        {
          id: 'D',
          label: 'Cambiar a energia solar para reducir servicios (-$1.8M/mes)',
          description: 'Instalar paneles solares ($12M) que cubren el 60% del consumo electrico. Payback en 7 meses. Ademas, genera imagen de marca sostenible.',
          cost: 12000000,
          revenue: 1800000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Restaurante con energia solar: imagen verde', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'innovation', message: 'Innovacion en sostenibilidad energetica', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['costos', 'energia', 'sostenibilidad'],
          next: 'fin_13',
          narrative: 'Los paneles solares se instalan en el techo. La factura de energia baja un 55%. Los clientes notan los paneles y preguntan: se vuelve un tema de conversacion positivo. La marca se asocia con sostenibilidad.'
        },
        {
          id: 'E',
          label: 'Automatizar procesos contables (-$2M/mes)',
          description: 'Implementar software contable (Siigo o Alegra) que automatiza facturacion electronica, nomina, y reportes a la DIAN. Reduce la necesidad de un auxiliar contable de tiempo completo.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Se prescinde de un auxiliar contable (liquidacion)', bsc: { bsc_learning: -2, bsc_financial: 1 }, cost: -3000000 }
          ],
          tags: ['costos', 'automatizacion', 'contabilidad'],
          next: 'fin_13',
          narrative: 'Siigo se implementa en 3 dias. La facturacion electronica queda automatizada, los reportes a la DIAN se generan con un clic, y la nomina se liquida sola. El auxiliar contable se reubica en atencion al cliente.'
        }
      ]
    },

    // --- DIA 34: Preparacion para auditoria externa ---
    'fin_13': {
      day: 34,
      title: 'Preparacion para auditoria externa',
      context: 'La Superintendencia de Sociedades envia notificacion de revision a empresas del sector alimentos en Risaralda. Hay que preparar: estados financieros, libros contables, soportes de transacciones, declaraciones tributarias, y certificados de existencia. La revision sera en 5 dias. El nivel de preparacion actual es del 70%. ¿Como abordar la auditoria?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Contratar firma auditora para preparacion intensiva',
          description: 'Contratar a KPMG Pereira o BDO para que revise todo antes de la Supersociedades. Cuesta $8M pero garantiza que la documentacion este impecable. "Mas vale prevenir que lamentar."',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [],
          tags: ['auditoria', 'prevencion', 'profesional'],
          next: 'fin_14',
          narrative: 'La firma auditora encuentra 3 inconsistencias menores que se corrigen en 2 dias. Cuando llega la Supersociedades, todo esta en orden. Los auditores felicitan la organizacion. Dinero bien gastado.'
        },
        {
          id: 'B',
          label: 'Preparacion interna con equipo contable propio',
          description: 'El contador y su equipo trabajan horas extra durante 5 dias para organizar todo. Costo: $2M en horas extra. Riesgo: pueden pasar por alto detalles que un ojo externo si ve.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Equipo contable agotado por horas extra', bsc: { bsc_learning: -1 }, cost: 0 }
          ],
          tags: ['auditoria', 'interno', 'riesgo-moderado'],
          next: 'fin_14',
          narrative: 'El equipo trabaja hasta las 11pm durante 5 dias. Logran organizar el 90% de la documentacion. La Supersociedades hace algunas observaciones menores pero nada grave. Agotador, pero se salvo.'
        },
        {
          id: 'C',
          label: 'No hacer nada especial - confiar en que todo esta en orden',
          description: 'El negocio ha sido transparente desde el dia 1. No deberia haber problemas. Gastar dinero en preparacion es innecesario si no se ha hecho nada malo.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 0, bsc_internal: -3, bsc_learning: -2 },
          crossEffects: [],
          tags: ['auditoria', 'riesgo-alto', 'confianza'],
          next: 'fin_14_problem',
          narrative: 'La Supersociedades llega y pide documentos que estan desordenados en carpetas sin rotular. Encuentran inconsistencias en la conciliacion bancaria y una factura sin soporte. Se abre un proceso de investigacion.'
        }
      ]
    },

    // --- DIA 34 (rama): Problema con la auditoria ---
    'fin_14_problem': {
      day: 35,
      title: 'Sancion de la Superintendencia',
      context: 'La Superintendencia de Sociedades emite un pliego de cargos por inconsistencias contables. La sancion puede ser entre $5M y $25M dependiendo de la gravedad. Hay 3 dias para responder con descargos y presentar los soportes faltantes.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Contratar abogado y presentar descargos formales',
          description: 'Un abogado especialista en derecho corporativo presenta descargos con toda la documentacion que faltaba. Costo: $6M entre honorarios y organizacion urgente. Probable reduccion de sancion al minimo ($5M).',
          cost: 11000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [],
          tags: ['sancion', 'defensa-legal', 'supersociedades'],
          next: 'fin_14',
          narrative: 'El abogado presenta descargos solidos. La sancion se reduce al minimo: $5M. Leccion carisima pero aprendida: nunca subestimar una auditoria. La empresa implementa protocolos de documentacion permanentes.'
        },
        {
          id: 'B',
          label: 'Aceptar la sancion y seguir adelante',
          description: 'Pagar la sancion promedio ($15M) sin pelear. Ahorrar tiempo y energia del abogado. Implementar mejoras contables inmediatamente para evitar reincidencia.',
          cost: 15000000,
          revenue: 0,
          bsc: { bsc_financial: -5, bsc_customer: 0, bsc_internal: -1, bsc_learning: 3 },
          crossEffects: [],
          tags: ['sancion', 'aceptar', 'costoso'],
          next: 'fin_14',
          narrative: 'Se paga la sancion de $15M. Duele enormemente. Pero la empresa aprende, contrata un mejor sistema contable, y jura que nunca mas ira a una auditoria desprevenida.'
        }
      ]
    },

    // --- DIA 37: Emergencia de liquidez ---
    'fin_14': {
      day: 37,
      title: 'Emergencia de liquidez',
      context: 'Tormenta perfecta financiera: el proveedor de pollo quiebra y hay que conseguir uno nuevo que cobra 20% mas caro, la nevera del local principal se dana ($8M de reparacion), y un cliente corporativo que debia $12M avisa que pagara en 30 dias, no en 8. El saldo en caja es de $10M y las obligaciones inmediatas suman $28M. Hay un hueco de $18M que resolver esta semana.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Factoring: vender la factura del cliente corporativo',
          description: 'Vender la factura de $12M al 3.5% de descuento con una empresa de factoring. Se reciben $11.58M hoy en vez de esperar 30 dias. Es caro pero inmediato. Quedan $6.42M por resolver.',
          cost: 420000,
          revenue: 11580000,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [],
          tags: ['factoring', 'liquidez', 'emergencia'],
          next: 'fin_15',
          narrative: 'La empresa de factoring compra la factura en 24 horas. Se reciben $11.58M. Es como cambiar un cheque posfechado: pierdes un poco pero ganas tiempo. Una herramienta financiera invaluable para pymes.'
        },
        {
          id: 'B',
          label: 'Pedir prestamo de emergencia a socios/familia',
          description: 'Solicitar $18M a socios o familiares como prestamo personal al 0% de interes por 60 dias. No genera costo financiero pero mezcla relaciones personales con negocios.',
          cost: 0,
          revenue: 18000000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['prestamo-personal', 'socios', 'emergencia'],
          next: 'fin_15',
          narrative: 'Un socio presta los $18M sin intereses. "Estamos juntos en esto," dice. El problema se resuelve, pero ahora hay una deuda moral que pesa. Si no se paga a tiempo, la relacion se puede dañar.'
        },
        {
          id: 'C',
          label: 'Venta de activos no esenciales + credito parcial',
          description: 'Vender el carro de la empresa ($15M valor comercial, se consigue $12M rapido) y usar $6M de la linea de credito. Liquida un activo pero resuelve la crisis sin deuda adicional significativa.',
          cost: 6000000,
          revenue: 12000000,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: -2, bsc_learning: 3 },
          crossEffects: [
            { area: 'logistics', message: 'Se vendio el vehiculo de la empresa: transporte limitado', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['venta-activos', 'emergencia', 'mixto'],
          next: 'fin_15',
          narrative: 'El carro se vende en 3 dias por TuCarro.com. No es lo ideal: ahora el gerente va en Uber y logistica depende de transportadoras externas. Pero la crisis se resolvio sin endeudarse mucho.'
        },
        {
          id: 'D',
          label: 'Declarar estado de reorganizacion (Ley 1116)',
          description: 'Acogerse a la Ley 1116 de insolvencia empresarial. Congela temporalmente las deudas y da 4 meses para reorganizar las finanzas. Pero marca a la empresa en centrales de riesgo y asusta a proveedores.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -5, bsc_customer: -3, bsc_internal: -2, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores exigen pago anticipado al enterarse', bsc: { bsc_internal: -4 }, cost: 0 },
            { area: 'marketing', message: 'Rumor de insolvencia afecta imagen de marca', bsc: { bsc_customer: -5 }, cost: 0 },
            { area: 'hr', message: 'Empleados preocupados por estabilidad laboral', bsc: { bsc_learning: -3 }, cost: 0 }
          ],
          tags: ['insolvencia', 'ley-1116', 'ultimo-recurso'],
          next: 'fin_14_ley1116',
          narrative: 'La decision nuclear. La Supersociedades acepta el tramite de reorganizacion. Las deudas se congelan, pero la noticia se riega rapido. Proveedores empiezan a pedir pago de contado y dos empleados renuncian por miedo.'
        }
      ]
    },

    // --- DIA 38 (rama Ley 1116): Negociacion con acreedores ---
    'fin_14_ley1116': {
      day: 38,
      title: 'Acuerdo de reorganizacion con acreedores',
      context: 'Bajo la Ley 1116, la empresa tiene 4 meses para presentar un acuerdo de reorganizacion. Los acreedores se reunen: el banco quiere cobrar, los proveedores quieren garantias, y los empleados quieren saber si habra liquidacion. El promotor designado por la Supersociedades media entre las partes. Es el momento de salvar la empresa o aceptar el fracaso.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Proponer reestructuracion: pago en 18 meses con periodo de gracia',
          description: 'Pedir 3 meses de gracia (sin pagar capital) y luego 15 cuotas mensuales. Los acreedores recuperan el 100% pero mas lento. La empresa sobrevive si mejora la operacion.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores aceptan seguir surtiendo con pago semanal', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'hr', message: 'Estabilidad laboral confirmada: moral del equipo se recupera', bsc: { bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['reestructuracion', 'ley-1116', 'sobrevivir'],
          next: 'fin_15',
          narrative: 'Los acreedores aceptan la propuesta por mayoria. El banco no esta feliz pero prefiere cobrar lento que no cobrar. La empresa sobrevive con condiciones estrictas: cada peso debe ser reportado. Es una segunda oportunidad que no se puede desperdiciar.'
        },
        {
          id: 'B',
          label: 'Buscar inversionista de rescate que asuma las deudas',
          description: 'Un grupo empresarial de Manizales ofrece inyectar $40M a cambio del 51% de la empresa. Pagan las deudas urgentes y toman el control. Los fundadores pierden la mayoria pero la empresa sobrevive.',
          cost: 0,
          revenue: 40000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Nuevo grupo inversor trae imagen de respaldo corporativo', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'Nuevos duenos: incertidumbre sobre cambios en equipo', bsc: { bsc_learning: -1 }, cost: 0 }
          ],
          tags: ['rescate', 'inversionista', 'control-perdido'],
          next: 'fin_15',
          narrative: 'El grupo de Manizales firma. Las deudas se pagan, la Ley 1116 se levanta, y la empresa sale de centrales de riesgo. Pero los fundadores ya no mandan: el 51% esta en manos externas. Dificil leccion sobre las consecuencias de la iliquidez.'
        }
      ]
    },

    // --- DIA 40: Decision de dividendos vs. reinversion ---
    'fin_15': {
      day: 40,
      title: 'Dividendos o reinversion de utilidades',
      context: 'A pesar de los tropiezos, la empresa tiene una utilidad acumulada de $35M COP. Los socios presionan por recibir dividendos despues de semanas de estres. Pero el gerente financiero sabe que reinvertir fortalece la empresa para el largo plazo. En Colombia, los dividendos superiores a $15.5M estan gravados al 10% adicional por la DIAN.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Distribuir el 100% como dividendos ($35M)',
          description: 'Los socios reciben todo. Despues de la retencion del 10% sobre el excedente, quedan ~$33M netos para los socios. La empresa queda sin reservas para imprevistos.',
          cost: 35000000,
          revenue: 0,
          bsc: { bsc_financial: -4, bsc_customer: 0, bsc_internal: -3, bsc_learning: -1 },
          crossEffects: [
            { area: 'operations', message: 'Sin reinversion: equipos no se renuevan', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'innovation', message: 'Cero presupuesto para I+D el proximo periodo', bsc: { bsc_learning: -3 }, cost: 0 }
          ],
          tags: ['dividendos', 'total', 'sin-reservas'],
          next: 'fin_15b',
          narrative: 'Los socios estan felices. Reciben su retorno. Pero la empresa queda fragil: sin colchon financiero, sin capacidad de invertir, dependiente de que todo salga perfecto el siguiente mes.'
        },
        {
          id: 'B',
          label: 'Distribuir 40% ($14M) y reinvertir 60% ($21M)',
          description: 'Los socios reciben un dividendo modesto ($14M, exento del 10% adicional por estar debajo del umbral) y la empresa retiene $21M para capital de trabajo y mejoras.',
          cost: 14000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Reinversion permite mantenimiento preventivo de equipos', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'innovation', message: 'Fondos reservados para I+D el proximo mes', bsc: { bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['dividendos-parcial', 'reinversion', 'equilibrado'],
          next: 'fin_16',
          narrative: 'Solucion salomonica. Los socios reciben algo (y no pagan impuesto adicional por dividendos), la empresa retiene recursos para crecer. Todos contentos, nadie eufórico.'
        },
        {
          id: 'C',
          label: 'Reinvertir el 100% de las utilidades',
          description: 'No distribuir dividendos. Todo se reinvierte en: $10M en marketing, $6M en mejora de local, $5M en fondo de emergencia. Los socios no reciben nada ahora, pero el valor de la empresa crece.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: '$10M reinvertidos en campana de posicionamiento', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'operations', message: '$6M para mejoras en el local principal', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['reinversion-total', 'crecimiento', 'largo-plazo'],
          next: 'fin_16',
          narrative: 'Los socios estan molestos. "¿Para que montamos esto si no vemos plata?" Pero la empresa queda blindada financieramente. Es una apuesta por el futuro que solo se valora con el tiempo.'
        }
      ]
    },

    // --- DIA 41 (rama dividendos totales): Consecuencia de caja vacia ---
    'fin_15b': {
      day: 41,
      title: 'Sin reservas: imprevisto inmediato',
      context: 'Dos dias despues de distribuir todos los dividendos, el INVIMA (Instituto de Vigilancia de Medicamentos y Alimentos) hace una visita de inspeccion y requiere adecuaciones sanitarias por $7M: cambiar losetas rotas, instalar trampa de grasas certificada, y comprar termometros industriales. El plazo es de 10 dias o cierran el local. La caja tiene $2M.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Pedir a los socios que devuelvan parte de los dividendos',
          description: 'Llamar a los socios y pedirles que reintegren $7M de los dividendos que acaban de recibir. Situacion incomoda pero necesaria. Demuestra que distribuir el 100% fue un error.',
          cost: 0,
          revenue: 7000000,
          bsc: { bsc_financial: -2, bsc_customer: 0, bsc_internal: 1, bsc_learning: 5 },
          crossEffects: [],
          tags: ['dividendos', 'error', 'leccion'],
          next: 'fin_16',
          narrative: 'Los socios devuelven el dinero de mala gana. "¡Nos dieron dividendos hace 2 dias y ya los piden de vuelta!" La leccion es clara: siempre mantener reservas. Nunca distribuir el 100% de las utilidades.'
        },
        {
          id: 'B',
          label: 'Credito de emergencia con Bancolombia',
          description: 'Solicitar $7M de credito de consumo a tasa del 22% E.A. Es caro, pero es mas rapido que pedirle a los socios. Las adecuaciones se hacen en 5 dias.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 0, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [],
          tags: ['credito', 'emergencia', 'invima'],
          next: 'fin_16',
          narrative: 'El credito se aprueba en 48 horas. Las adecuaciones se hacen antes del plazo del INVIMA. Pero ahora hay $7M mas de deuda a la tasa mas alta del mercado. El costo de no tener reservas: deuda cara.'
        }
      ]
    },

    // --- DIA 43: Proyeccion financiera final ---
    'fin_16': {
      day: 43,
      title: 'Proyeccion financiera y estrategia de cierre',
      context: 'Ultimo nodo de decision financiera. El CFO debe presentar la proyeccion a 6 meses ante la junta directiva. Hay 3 escenarios posibles dependiendo de la estrategia final. Los indicadores actuales: margen operativo 18%, ROE 15%, razon corriente 1.4, endeudamiento 45%. ¿Que mensaje llevar a la junta y que estrategia adoptar para el proximo semestre?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estrategia de crecimiento agresivo',
          description: 'Proyectar apertura de 2 puntos nuevos en Dosquebradas y Armenia. Apalancarse al 60%, contratar 20 personas, y triplicar la pauta digital. Meta: $1.500M en ventas semestrales. Alto riesgo, alto retorno.',
          cost: 10000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Plan de expansion: preparar SOPs para replicar operacion', bsc: { bsc_internal: 3, bsc_learning: 3 }, cost: 0 },
            { area: 'hr', message: 'Plan de contratacion masiva para nuevos puntos', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'marketing', message: 'Campana regional: Pereira, Dosquebradas, Armenia', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'logistics', message: 'Cadena de suministro debe escalar a 3 ciudades', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['crecimiento', 'expansion', 'agresivo'],
          next: null,
          narrative: 'La junta aprueba el plan con entusiasmo cauto. "Si ejecutamos bien, seremos la cadena de comida rapida lider del Eje Cafetero en 6 meses." Los riesgos son enormes pero la vision es ambiciosa. El area de finanzas diseña el plan de financiacion mas complejo de su historia.'
        },
        {
          id: 'B',
          label: 'Estrategia de consolidacion y eficiencia',
          description: 'No expandir. Optimizar el punto actual hasta lograr margen operativo del 25%. Pagar toda la deuda, crear fondo de reserva de $50M, y mejorar cada proceso interno. Meta: $800M en ventas semestrales con 25% de margen.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 2, bsc_internal: 5, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Foco en eficiencia: reducir costos 15% adicional', bsc: { bsc_internal: 4, bsc_financial: 3 }, cost: 0 },
            { area: 'innovation', message: 'I+D enfocado en eficiencia de procesos', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['consolidacion', 'eficiencia', 'bajo-riesgo'],
          next: null,
          narrative: 'La junta asiente con aprobacion. "Primero ser excelentes en lo que hacemos, despues pensar en crecer." La meta es ser la operacion de comida rapida mas eficiente de Pereira: cada peso bien gastado, cada proceso optimizado, cero desperdicio. Finanzas diseña un plan de pago de deuda acelerado.'
        },
        {
          id: 'C',
          label: 'Estrategia de diversificacion',
          description: 'Mantener el restaurante estable y usar utilidades para abrir una nueva linea de negocio: servicio de catering corporativo para las empresas de la zona franca de Pereira. Nuevo segmento, nuevo mercado.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Branding para division de catering corporativo', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'Contratar equipo especializado en catering', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'logistics', message: 'Logistica de catering: vehiculos, contenedores termicos', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'innovation', message: 'Menu exclusivo para catering ejecutivo', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['diversificacion', 'catering', 'nuevo-mercado'],
          next: null,
          narrative: 'La junta debate intensamente. "¿No sera mucho abarcar?" vs "¡Es el futuro del negocio!" El plan es ambicioso pero inteligente: el catering corporativo tiene margenes del 35% y en Pereira casi nadie lo hace bien. Finanzas modela dos escenarios y el VPN de ambos es positivo. Se aprueba con condiciones de revision mensual.'
        },
        {
          id: 'D',
          label: 'Estrategia de franquicia',
          description: 'Crear un modelo de franquicia para que otros inviertan en abrir puntos con la marca. Se cobra fee de entrada ($30M) + 5% de ventas mensual. Crece sin asumir riesgo propio, pero pierde control sobre calidad.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: -1, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Documentar todos los procesos para manual de franquicia', bsc: { bsc_internal: 3, bsc_learning: 5 }, cost: 0 },
            { area: 'marketing', message: 'Marca debe ser suficientemente fuerte para franquiciar', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'Equipo de soporte y auditoria de franquicias', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['franquicia', 'escalabilidad', 'modelo-negocio'],
          next: null,
          narrative: 'La idea genera electricidad en la sala. "¿Nuestra marca ya es suficientemente fuerte para franquiciar?" El plan exige documentar cada proceso, crear manuales, y disenar un sistema de control de calidad para franquiciados. Finanzas proyecta que con 3 franquicias operando, los ingresos pasivos superarian la operacion propia. Alto potencial, alta complejidad.'
        }
      ]
    }
  }
};
