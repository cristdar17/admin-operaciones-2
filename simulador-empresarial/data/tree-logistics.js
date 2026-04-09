/* ============================================================
   TREE - LOGISTICA
   Arbol de decisiones para el area de Logistica
   Restaurante de comida rapida colombiana en Pereira
   Presupuesto: $85.000.000 COP
   ~21 nodos de decision | Dias 1-43
   ============================================================ */
window.TREE_LOGISTICS = {
  name: 'Logistica',
  icon: '🚛',
  color: '#5AC8FA',
  startNode: 'log_01',
  nodes: {

    // ========================================================
    //  FASE 1 — RED DE PROVEEDORES Y ALMACENAMIENTO (Dias 1-7)
    // ========================================================

    'log_01': {
      day: 1,
      title: 'Red de proveedores',
      context: 'Necesitas asegurar el suministro de los 42 ingredientes que requiere tu menú de comida rápida colombiana (carne, pollo, papa, yuca, plátano, salsas, vegetales, empaques, etc.). En Pereira hay tres opciones claras: trabajar con un solo proveedor grande (como Makro o PriceSmart), diversificar entre varios especializados, o apostarle a proveedores locales de la Central de Abastos de Pereira (Mercasa) y fincas del Eje Cafetero. Cada opción tiene implicaciones distintas en costo, riesgo de desabastecimiento, frescura y complejidad logística. ¿Cómo estructuras tu red de abastecimiento?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Proveedor único (Makro/PriceSmart)',
          description: 'Negociar un contrato exclusivo con un gran distribuidor que abastezca el 90% de los ingredientes. Un solo pedido semanal, una sola factura, descuentos por volumen del 12%. Riesgo: si falla el proveedor, se para la operación entera.',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: 4, bsc_customer: -1, bsc_internal: 3, bsc_learning: -1 },
          crossEffects: [
            { area: 'finance', message: 'Logística negocia descuentos del 12% por volumen con proveedor único — ahorro mensual de $3.2M', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'operations', message: 'Un solo proveedor simplifica la recepción pero limita la variedad de calidades disponibles', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['proveedor_unico', 'volumen', 'riesgo_concentrado'],
          next: 'log_02',
          narrative: 'El contrato con Makro se firmó por 6 meses con descuentos escalonados: 8% hasta $15M mensuales, 12% a partir de $20M. La primera semana fue impecable: un solo camión llegaba los martes y viernes a las 5am con todo lo necesario. Sin embargo, el gerente de compras notó que la calidad de los tomates variaba mucho — al ser un distribuidor masivo, no seleccionan con el cuidado de un proveedor local. El riesgo de poner todos los huevos en una canasta quedó latente.'
        },
        {
          id: 'B',
          label: 'Multi-proveedor especializado',
          description: 'Armar una red de 5-7 proveedores, cada uno especialista: un cárnico, un verdulero, un distribuidor de empaques, un lácteo, etc. Mayor control de calidad por categoría, menor riesgo de desabastecimiento total, pero más complejidad administrativa (5+ facturas, 5+ entregas, 5+ negociaciones).',
          cost: 8000000,
          revenue: 3500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: -2, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Logística maneja 7 proveedores con diferentes plazos de pago — tesorería debe coordinar flujos', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Múltiples proveedores permiten seleccionar la mejor calidad por ingrediente — operaciones agradece', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['multi_proveedor', 'especializacion', 'calidad'],
          next: 'log_02',
          narrative: 'Se armó la red: Frigorífico del Otún para carnes, Agrofresco de Cerritos para frutas y verduras, Empaques del Café para desechables, Lácteos La Pradera para quesos y cremas, y dos proveedores más para granos y salsas. La calidad subió notablemente — cada proveedor es experto en lo suyo. El dolor: la coordinadora de compras pasa el 40% de su tiempo gestionando pedidos, recibiendo entregas y resolviendo diferencias en facturas. La bodega recibe entre 3 y 5 camiones diarios.'
        },
        {
          id: 'C',
          label: 'Red local (Mercasa + fincas del Eje Cafetero)',
          description: 'Comprar directamente en la Central Mayorista de Pereira (Mercasa) y establecer acuerdos con 3 fincas de la región (Santa Rosa, Marsella, Dosquebradas) para frutas, verduras y tubérculos. Ingredientes más frescos, apoyo a la economía local, marketing de "del campo a la mesa", pero precios menos estables y logística de recolección propia.',
          cost: 6000000,
          revenue: 4000000,
          bsc: { bsc_financial: 0, bsc_customer: 5, bsc_internal: -3, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Logística establece proveedores locales del Eje Cafetero — marketing puede usar el concepto "del campo a tu mesa"', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Ingredientes de fincas locales llegan más frescos pero con tamaños irregulares — cocina debe adaptarse', bsc: { bsc_internal: -1, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['local', 'mercasa', 'frescura', 'eje_cafetero'],
          next: 'log_02',
          narrative: 'A las 4am el conductor del restaurante sale hacia Mercasa. Recorre los puestos que ya conoce: Don Hernán para las papas criollas, Doña Luz para el plátano hartón, y la cooperativa cafetera para los granos. Los martes y viernes pasa por la finca La Esperanza en Santa Rosa de Cabal a recoger tomates y lechugas orgánicas. Los ingredientes llegan con rocío, recién cortados. Los clientes notan la diferencia en el sabor. El problema: los precios cambian cada semana según la cosecha, y cuando llueve mucho en la cordillera, las entregas de las fincas se retrasan.'
        },
        {
          id: 'D',
          label: 'Modelo híbrido (80/20)',
          description: 'Combinar: 80% del volumen con un distribuidor grande (precio estable, logística simple) y 20% con proveedores locales para ingredientes estrella (plátano, yuca, frutas frescas). Lo mejor de ambos mundos pero requiere gestión dual.',
          cost: 7000000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Modelo híbrido: costos estables en 80% del volumen + variabilidad controlada en 20%', bsc: { bsc_financial: 1 }, cost: 0 },
            { area: 'marketing', message: 'Ingredientes estrella de origen local — posible diferencial de marca', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['hibrido', 'equilibrio', 'estabilidad'],
          next: 'log_02',
          narrative: 'La estrategia 80/20 resultó ser la más equilibrada. PriceSmart cubre las bases: carnes empacadas, quesos, empaques, aceites, granos. Mientras tanto, Mercasa y una finca en Marsella proveen los ingredientes que hacen la diferencia: el plátano maduro perfecto para los patacones, la yuca fresca de ayer para las empanadas, y las frutas tropicales para los jugos. El equipo de cocina empezó a distinguir cuáles ingredientes justifican el esfuerzo local y cuáles no.'
        }
      ]
    },

    'log_02': {
      day: 4,
      title: 'Estrategia de almacenamiento',
      context: 'Tu restaurante está en la Avenida Circunvalar de Pereira, pero planeas abrir un segundo punto en Dosquebradas en 3 meses. Necesitas decidir cómo almacenar tus insumos: ¿un gran depósito central que abastezca ambos puntos, depósitos pequeños en cada local, o un modelo sin bodega (entregas directas)? La decisión afecta costos fijos, frescura de ingredientes, capacidad de respuesta ante picos de demanda y la operación futura de domicilios.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bodega central en Cerritos',
          description: 'Arrendar una bodega de 120m² en la zona industrial de Cerritos (punto medio entre Pereira y Dosquebradas). Capacidad para 15 días de inventario. Incluye cuarto frío de 20m². Costo de arriendo: $3.5M/mes. Se necesita un vehículo para distribución interna a los puntos de venta.',
          cost: 14000000,
          revenue: 3000000,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Logística arrienda bodega central en Cerritos: $3.5M/mes fijo + $2M de adecuación inicial', bsc: { bsc_financial: -3 }, cost: 0 },
            { area: 'operations', message: 'Bodega central permite recibir todos los insumos en un punto y despachar preparados a cocina', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['bodega_central', 'cerritos', 'almacenamiento'],
          next: 'log_03',
          narrative: 'La bodega de Cerritos quedó sobre la vía que conecta Pereira con Dosquebradas — ubicación estratégica. Se acondicionó con estanterías industriales, un cuarto frío con termostato digital, y zona de recepción con báscula. Los proveedores entregan todo ahí entre 4am y 7am. A las 8am sale el camión con los pedidos del día para cada restaurante. El inventario centralizado permite comprar en mayor volumen y negociar mejor. La desventaja: si el camión se vara o hay un accidente en la vía, los restaurantes se quedan sin insumos frescos del día.'
        },
        {
          id: 'B',
          label: 'Mini-bodegas en cada punto de venta',
          description: 'Cada restaurante tiene su propia bodega pequeña (30m²) con cuarto frío independiente. Los proveedores entregan directamente en cada punto. Mayor autonomía y frescura, pero se duplican los costos de almacenamiento y se pierde poder de negociación por volumen.',
          cost: 10000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            { area: 'operations', message: 'Cada punto de venta tiene autonomía total de insumos — menor riesgo si un local tiene problemas', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['distribuido', 'autonomia', 'mini_bodegas'],
          next: 'log_03',
          narrative: 'Cada restaurante se convirtió en su propia unidad logística. El jefe de cocina de cada punto maneja su inventario, hace sus pedidos y recibe directamente a los proveedores. La frescura es máxima: los ingredientes van del camión directo a la cocina. Pero los números hablan: al comprar por separado, el volumen por pedido es menor y los descuentos se perdieron. Además, cuando un punto se queda sin yuca y el otro tiene excedente, no hay mecanismo fácil para redistribuir.'
        },
        {
          id: 'C',
          label: 'Sin bodega — entregas JIT directas',
          description: 'Eliminar el almacenamiento: los proveedores entregan diariamente (entre 4am y 6am) directamente en cada restaurante. Solo se mantiene un stock mínimo de emergencia (1 día). Costos de almacenamiento casi cero, pero dependencia total de la puntualidad de los proveedores y vulnerabilidad ante cualquier interrupción.',
          cost: 3000000,
          revenue: 1000000,
          bsc: { bsc_financial: 4, bsc_customer: -1, bsc_internal: -3, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Sistema JIT: cocina recibe todo fresco cada mañana pero si un proveedor falla, hay crisis inmediata', bsc: { bsc_internal: -3, bsc_customer: -1 }, cost: 0 },
            { area: 'finance', message: 'Sin bodega: cero costos de almacenamiento, pero precios de compra 8% mayores por lotes pequeños diarios', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['jit', 'sin_bodega', 'entrega_directa'],
          next: 'log_03',
          narrative: 'La apuesta fue radical: cero inventario. Cada mañana a las 4:30am llegan los proveedores en fila al restaurante. A las 6am todo está en la cocina y a las 7am se empieza a preparar. Cuando funciona es hermoso: ingredientes fresquísimos, cero desperdicio por vencimiento, cero costo de bodega. Pero el primer viernes festivo fue una pesadilla: dos proveedores no llegaron, la Central de Abastos cerró temprano, y a las 11am el restaurante se quedó sin papa criolla — el ingrediente estrella de las empanadas.'
        }
      ]
    },

    'log_03': {
      day: 7,
      title: 'Optimización de rutas de distribución',
      context: 'Tus puntos de venta están en la Circunvalar (Pereira) y en el Centro Comercial Unicentro (Dosquebradas). La bodega o los proveedores deben abastecer ambos diariamente. Las rutas del Eje Cafetero son complicadas: la vía Pereira-Dosquebradas por el viaducto tiene congestión de 6:30am a 8:30am, y la ruta alterna por La Popa suma 15 minutos. Además, estás pensando en domicilios y necesitas planear rutas de entrega. ¿Cómo optimizas la distribución?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Rutas fijas con horarios escalonados',
          description: 'Definir rutas y horarios fijos: despacho a Pereira a las 5:00am (antes del tráfico), despacho a Dosquebradas a las 5:30am por el viaducto. Retorno antes de las 7am. Simple, predecible, pero inflexible ante cambios de demanda o emergencias.',
          cost: 4000000,
          revenue: 1500000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 0 },
          crossEffects: [
            { area: 'operations', message: 'Rutas fijas de abastecimiento permiten a cocina planear la producción con certeza de hora de llegada', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['rutas_fijas', 'horario', 'predecible'],
          next: 'log_04',
          narrative: 'Las rutas fijas funcionaron como un reloj suizo durante las primeras semanas. El conductor salía a las 4:45am de la bodega, entregaba en Circunvalar a las 5:10am, cruzaba el viaducto vacío a las 5:20am y estaba en Dosquebradas a las 5:35am. La cocina sabía exactamente cuándo llegaban los insumos y empezaba a preparar puntualmente. El problema llegó cuando un punto tuvo un evento especial y necesitaba una segunda entrega a las 2pm — no había flexibilidad.'
        },
        {
          id: 'B',
          label: 'Software de ruteo dinámico (Waze/Google Maps API)',
          description: 'Implementar un sistema de ruteo dinámico que use datos de tráfico en tiempo real para optimizar las rutas cada mañana. Integración con Google Maps API para calcular la ruta más rápida considerando las condiciones actuales del viaducto, la Circunvalar y las vías alternas. Inversión en software y capacitación del conductor.',
          cost: 7000000,
          revenue: 2500000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'innovation', message: 'Logística implementa ruteo dinámico con Google Maps API — tecnología replicable en domicilios futuros', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'operations', message: 'Rutas optimizadas reducen 20% el tiempo de distribución — insumos llegan más frescos', bsc: { bsc_internal: 1, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['ruteo_dinamico', 'tecnologia', 'google_maps'],
          next: 'log_04',
          narrative: 'El sistema de ruteo se montó en una tablet instalada en el camión. Cada mañana a las 4:30am, el conductor consulta las condiciones del tráfico: si el viaducto reporta congestión temprana (por obras o accidente), automáticamente la ruta cambia por La Popa. En promedio, el sistema ahorra 12 minutos diarios respecto a la ruta fija. Los viernes de quincena, cuando Pereira se vuelve un caos vehicular, el ahorro llega a 25 minutos. El conductor se resistió al principio ("yo conozco las calles mejor que un celular") pero en un mes ya no salía sin la tablet.'
        },
        {
          id: 'C',
          label: 'Tercerizar distribución con operador local',
          description: 'Contratar a un operador logístico de Pereira que se encargue de toda la distribución entre bodega y puntos de venta. Ellos ponen el vehículo refrigerado, el conductor, el seguro y la optimización de rutas. Costo fijo mensual pero se pierde control directo. Liberas tiempo de gestión para enfocarte en la operación del restaurante.',
          cost: 6000000,
          revenue: 1000000,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 1, bsc_learning: -2 },
          crossEffects: [
            { area: 'finance', message: 'Logística terceriza distribución: $6M mensuales fijos pero elimina costos de vehículo y conductor propios', bsc: { bsc_financial: 0 }, cost: 0 }
          ],
          tags: ['tercerizar', 'operador_logistico', 'outsourcing'],
          next: 'log_04',
          narrative: 'TransCafé Express, un operador local con 8 camiones refrigerados, se quedó con el contrato. Cumplen bien: puntualidad del 92%, vehículo limpio, conductor capacitado en manejo de alimentos. Pero el restaurante perdió el contacto directo con la cadena de frío. Un jueves descubrieron que los quesos llegaron a 12°C (debían estar a 4°C) y TransCafé se demoró dos días en responder la queja formalmente. Cuando tercerías, el problema se resuelve más lento porque agregas un intermediario.'
        }
      ]
    },

    // ========================================================
    //  FASE 2 — INVENTARIOS Y FLOTA (Dias 10-16)
    // ========================================================

    'log_04': {
      day: 10,
      title: 'Sistema de gestión de inventarios',
      context: 'Tu restaurante maneja 42 SKUs (ingredientes). Algunos son perecederos (vida útil de 2-5 días: verduras, carnes), otros son de larga vida (30+ días: granos, salsas, empaques). El desperdicio actual por vencimiento es del 11% — cada peso que se bota es ganancia perdida. Necesitas un modelo de inventarios que minimice tanto el desperdicio como el riesgo de quedarte sin ingredientes en hora pico. ¿Qué sistema implementas?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Modelo EOQ con punto de reorden',
          description: 'Aplicar el modelo de Cantidad Económica de Pedido (EOQ) para cada SKU: calcular el lote óptimo que minimiza costo total (costo de ordenar + costo de mantener inventario). Establecer puntos de reorden con stock de seguridad de 1.5 desviaciones estándar. Para perecederos, EOQ se ajusta con restricción de vida útil.',
          cost: 4000000,
          revenue: 3000000,
          bsc: { bsc_financial: 4, bsc_customer: 2, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'finance', message: 'Modelo EOQ reduce capital inmovilizado en inventario un 28% — flujo de caja mejora', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'operations', message: 'Puntos de reorden automáticos: cocina recibe alertas cuando un ingrediente baja del mínimo', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['eoq', 'punto_reorden', 'stock_seguridad', 'inventarios'],
          next: 'log_05',
          narrative: 'El equipo de logística pasó un fin de semana calculando el EOQ para los 42 ingredientes. Para la carne molida: demanda semanal de 120kg, costo de ordenar $45.000 por pedido, costo de almacenamiento $800/kg/semana. EOQ resultó en 116kg por pedido, frecuencia de 2.3 pedidos semanales. Con un stock de seguridad de 18kg (1.5σ), el punto de reorden quedó en 52kg. El modelo se replicó para todos los SKUs y se montó en una hoja de cálculo con alertas de color. El desperdicio bajó del 11% al 5.8% en el primer mes.'
        },
        {
          id: 'B',
          label: 'Sistema ABC + revisión periódica',
          description: 'Clasificar los 42 SKUs en categorías ABC por valor: A (20% de ítems, 80% del costo: carnes, quesos), B (30% de ítems, 15% del costo: vegetales, salsas), C (50% de ítems, 5% del costo: especias, servilletas). Ítems A se revisan diariamente, B cada 3 días, C semanalmente. Menor complejidad que EOQ completo.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'finance', message: 'Clasificación ABC enfoca el control financiero en los ingredientes de mayor impacto (categoría A)', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['abc', 'pareto', 'revision_periodica'],
          next: 'log_05',
          narrative: 'La clasificación ABC fue reveladora: solo 8 ingredientes (carnes, quesos, pollo, aceite de freír) representaban el 78% del costo total de insumos. El equipo puso foco ahí: control diario de cantidades, verificación de temperaturas, y pedido preciso según pronóstico de demanda. Los ítems C (sal, pimienta, servilletas, palillos) se pidieron con un margen amplio y se olvidaron. El desperdicio en categoría A bajó al 3.2%, pero los ítems B sufrieron: al revisarse solo cada 3 días, hubo dos episodios de lechuga marchita que terminó en la basura.'
        },
        {
          id: 'C',
          label: 'Inventario digital con IoT y alertas automáticas',
          description: 'Instalar sensores de peso en estantes y cuarto frío, conectados a un sistema que monitorea niveles de inventario en tiempo real. Alertas automáticas por WhatsApp al coordinador cuando un ingrediente baja del mínimo o la temperatura del cuarto frío sube. Integración con sistema de pedidos para generar órdenes de compra automáticas.',
          cost: 12000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 6, bsc_learning: 7 },
          crossEffects: [
            { area: 'innovation', message: 'Sistema IoT de inventarios: primer restaurante de comida rápida en Pereira con monitoreo de inventario en tiempo real', bsc: { bsc_learning: 5 }, cost: 0 },
            { area: 'finance', message: 'Inversión de $12M en tecnología IoT para inventarios — amortización en 8 meses por reducción de desperdicios', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['iot', 'automatizacion', 'sensores', 'digital'],
          next: 'log_05',
          narrative: 'Los sensores se instalaron en las 4 estanterías principales y en el cuarto frío. Una pantalla en la cocina muestra en tiempo real los niveles de cada ingrediente con semáforo: verde (>50%), amarillo (20-50%), rojo (<20%). Cuando un ingrediente llega a rojo, un mensaje automático de WhatsApp llega al celular del coordinador de compras con la sugerencia de pedido. El sistema detectó un patrón invisible: la temperatura del cuarto frío subía 3°C cada vez que el personal dejaba la puerta abierta más de 2 minutos — un problema que nadie había notado y que aceleraba la descomposición de las carnes.'
        }
      ]
    },

    'log_05': {
      day: 13,
      title: 'Flota de domicilios',
      context: 'Los domicilios representan el 35% de las ventas de comida rápida en Pereira — y crecen 12% cada trimestre. Necesitas decidir cómo atender este canal: ¿montar tu propia flota de motos, aliarte con plataformas como Rappi y Domicilios Ya, o un modelo mixto? Cada opción tiene implicaciones en costos, control de la experiencia del cliente, tiempo de entrega y complejidad operativa. El radio de entrega objetivo es de 5km alrededor de cada punto.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Flota propia de motos',
          description: 'Comprar 4 motos (2 por punto de venta), contratar 6 domiciliarios con contrato laboral, dotarlos con cajas térmicas brandeadas y GPS. Control total de la experiencia, margen del 100% sin comisiones a apps. Inversión alta y responsabilidad laboral directa.',
          cost: 18000000,
          revenue: 8000000,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'hr', message: 'Logística necesita contratar 6 domiciliarios con contrato laboral + ARL + EPS + casco + dotación', bsc: { bsc_learning: -2, bsc_internal: -2 }, cost: 0 },
            { area: 'marketing', message: 'Motos brandeadas con logo del restaurante circulando por Pereira — publicidad móvil gratuita', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Nómina de domiciliarios: ~$9M mensuales (6 personas con prestaciones) pero $0 en comisiones a plataformas', bsc: { bsc_financial: -3 }, cost: 0 }
          ],
          tags: ['flota_propia', 'domicilios', 'control_total'],
          next: 'log_06',
          narrative: 'Las 4 motos Suzuki AX100 llegaron con cajas térmicas de 45 litros y el logo del restaurante en vinilo reflectivo. Los domiciliarios, todos jóvenes de Pereira, fueron capacitados en protocolo de entrega: saludo, verificación del pedido frente al cliente, entrega en máximo 30 minutos. Los primeros días fueron caóticos — dos motos cubriendo toda la Circunvalar y el centro no daban abasto a las 12pm. Pero la experiencia del cliente fue impecable: el domiciliario conoce el menú, puede resolver dudas, y la comida llega caliente. El costo fijo de nómina duele cuando hay días lentos (lunes a 10am, martes lluviosos).'
        },
        {
          id: 'B',
          label: 'Alianza con Rappi y Domicilios Ya',
          description: 'Registrarse en las dos plataformas principales de Pereira. Rappi cobra comisión del 25%, Domicilios Ya del 20%. Cero inversión en motos o nómina, acceso instantáneo a la base de usuarios de las apps, pero margen reducido y cero control sobre el domiciliario (que puede llevar la comida inclinada, demorar, o tener mala actitud).',
          cost: 2000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: -2, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            { area: 'marketing', message: 'El restaurante aparece en Rappi y Domicilios Ya — visibilidad ante 120.000 usuarios activos en Pereira', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'finance', message: 'Comisiones de plataformas: 20-25% sobre cada pedido de domicilio — impacta margen neto significativamente', bsc: { bsc_financial: -3 }, cost: 0 }
          ],
          tags: ['rappi', 'domicilios_ya', 'plataformas', 'comision'],
          next: 'log_06',
          narrative: 'En 48 horas el restaurante ya aparecía en ambas apps con fotos profesionales del menú. Los pedidos empezaron a llegar inmediatamente: 15 el primer día, 28 el segundo. La visibilidad fue impresionante — clientes que no sabían que existías ahora te piden por Rappi. Pero las quejas también llegaron rápido: un Rappitendero entregó una empanada aplastada porque la llevaba en una maleta sin caja térmica. Otro se demoró 55 minutos porque aceptó dos pedidos simultáneos. Tu rating en la app bajó a 3.8 estrellas la primera semana y no puedes hacer nada directamente para mejorarlo.'
        },
        {
          id: 'C',
          label: 'Modelo mixto: flota propia + apps para picos',
          description: 'Mantener 2 motos propias (1 por punto) para domicilios cercanos y recurrentes, y usar Rappi/Domicilios Ya como respaldo en horas pico y zonas lejanas. Costos moderados, balance entre control y alcance, pero complejidad de coordinar dos canales simultáneamente.',
          cost: 10000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'hr', message: 'Se necesitan 3 domiciliarios propios + gestión de relación con plataformas', bsc: { bsc_internal: -1 }, cost: 0 },
            { area: 'marketing', message: 'Presencia en apps + motos propias: cobertura de marca en canales digitales y físicos', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Modelo mixto: nómina reducida ($5M) + comisiones variables solo en picos', bsc: { bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['mixto', 'flota_apps', 'equilibrio'],
          next: 'log_06',
          narrative: 'La estrategia mixta se calibró con datos de la primera semana: los pedidos de lunes a jueves antes de las 6pm los cubren las motos propias (70% de los domicilios). Los viernes y sábados en la noche, cuando llegan 20+ pedidos por hora, se activan Rappi y Domicilios Ya para absorber el excedente. Los domicilios propios tienen rating promedio de 4.8/5, los de apps promedian 4.1/5. El cliente frecuente ya pide directo al restaurante (por WhatsApp o la línea) para que llegue el domiciliario propio. El de apps es para el cliente nuevo que descubre el restaurante en la plataforma.'
        }
      ]
    },

    'log_06': {
      day: 16,
      title: 'Tecnología de optimización de rutas',
      context: 'Tu equipo de domicilios (propios o mixtos) entrega en promedio 85 pedidos diarios entre ambos puntos. Los domiciliarios actualmente deciden sus rutas "por instinto" — muchas veces cruzan la misma calle dos veces o van al barrio Cuba cuando tenían otro pedido en Álamos (que queda de camino). Un análisis rápido muestra que el 22% del tiempo de entrega se pierde en desplazamientos ineficientes. ¿Inviertes en tecnología de ruteo?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Implementar sistema de ruteo inteligente',
          description: 'Desarrollar (o comprar licencia de) un sistema que asigne pedidos a domiciliarios optimizando distancia total: agrupa pedidos cercanos, define secuencia óptima de entrega (problema del viajante), y reasigna en tiempo real si entra un pedido nuevo. Inversión en app/software + capacitación.',
          cost: 8000000,
          revenue: 4000000,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'innovation', message: 'Sistema de ruteo inteligente para domicilios — optimización basada en el problema del viajante (TSP)', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'operations', message: 'Rutas optimizadas: cada domiciliario cubre 15% más pedidos por hora — cocina debe sincronizar tiempos de salida', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['ruteo', 'tsp', 'optimizacion', 'tecnologia'],
          next: 'log_07',
          narrative: 'El sistema de ruteo se implementó como una webapp sencilla: el coordinador de domicilios ingresa los pedidos con dirección, el algoritmo agrupa los que están en la misma zona y define la ruta óptima para cada moto. Un domiciliario que antes hacía 12 entregas en 4 horas ahora hace 14 en el mismo tiempo. El ahorro acumulado en gasolina es de $380.000 mensuales. Pero lo más impactante: el tiempo promedio de entrega bajó de 38 a 27 minutos — y en comida rápida, cada minuto cuenta.'
        },
        {
          id: 'B',
          label: 'Mantener ruteo manual por experiencia',
          description: 'Confiar en el conocimiento de los domiciliarios locales que conocen las calles de Pereira de memoria. Implementar solo una regla simple: máximo 3 pedidos simultáneos y priorizar por orden de llegada. Sin inversión tecnológica, pero sin optimización formal.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: -1, bsc_learning: -2 },
          crossEffects: [],
          tags: ['manual', 'experiencia', 'sin_tecnologia'],
          next: 'log_07',
          narrative: 'Los domiciliarios siguieron con su método de siempre: sale el pedido, miran la dirección, y van. Son buenos — conocen los barrios, los atajos, y saben que a las 12:30pm la Calle 14 se embotella. Pero los datos no mienten: 22% de tiempo improductivo en ruta, pedidos que se cruzan sin agruparse, y un domiciliario que fue a Cuba cuando tenía otro pedido en Álamos (que queda en el camino). La eficiencia se estancó mientras la competencia ya usa apps de ruteo y gana en velocidad de entrega.'
        }
      ]
    },

    // ========================================================
    //  FASE 3 — CRISIS Y CADENA DE FRIO (Dias 19-25)
    // ========================================================

    'log_07': {
      day: 19,
      title: 'Crisis: proveedor incumple entrega',
      context: 'Viernes 7am — el proveedor de carnes no llegó. Sin explicación, sin aviso, simplemente no aparece. Llamas y el teléfono timbra sin respuesta. Tienes 85kg de pollo en el cuarto frío (para hoy y mañana), pero CERO carne molida y CERO costilla — ingredientes de tus 3 platos más vendidos que representan el 45% de las ventas. El restaurante abre en 3 horas. Es viernes de quincena, el día de mayor demanda del mes. ¿Qué haces?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Compra de emergencia en Mercasa',
          description: 'Mandar al conductor a la Central Mayorista de Pereira (Mercasa) ahora mismo. Está a 20 minutos, abre desde las 3am, y siempre hay carne fresca disponible. Precio 30% más alto que tu proveedor regular, sin negociación posible. Puedes tener la carne en cocina antes de las 8:30am.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 3, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Compra de emergencia en Mercasa: $5M en carnes al 30% por encima del precio negociado — impacto en margen del día', bsc: { bsc_financial: -3 }, cost: 0 },
            { area: 'operations', message: 'Carne de Mercasa llega a las 8:30am — cocina tiene 90 minutos menos de preparación', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['emergencia', 'mercasa', 'compra_spot'],
          next: 'log_08',
          narrative: 'A las 7:10am el conductor arrancó hacia Mercasa. Para las 7:40am ya estaba en el puesto de Don Rodrigo, el carnicero más grande del mercado. Carne molida premium a $18.500/kg (vs $14.200 del proveedor regular), costilla a $15.800/kg (vs $11.500). Dolió el bolsillo, pero a las 8:20am los 90kg de carne estaban en la cocina. El día se salvó: las ventas del viernes de quincena fueron de $12.4M. Sin la compra de emergencia, hubieran sido $6.8M por tener que sacar 3 platos del menú.'
        },
        {
          id: 'B',
          label: 'Activar menú de contingencia (solo pollo)',
          description: 'Adaptar el menú del día: los 3 platos de carne se reemplazan por versiones con pollo. "Hamburguesa de pollo crispy" en vez de "hamburguesa clásica", "arepa rellena de pollo desmechado" en vez de "arepa con carne". Informar a los clientes con un aviso creativo: "Hoy el pollo es el protagonista". Sin costo extra pero se pierden los clientes fieles a los platos de carne.',
          cost: 0,
          revenue: -3000000,
          bsc: { bsc_financial: 1, bsc_customer: -3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Logística activa menú de contingencia — marketing debe comunicar el cambio como algo positivo en redes', bsc: { bsc_customer: -1 }, cost: 0 },
            { area: 'operations', message: 'Cocina adapta recetas de carne a versiones de pollo — equipo demuestra flexibilidad', bsc: { bsc_internal: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['contingencia', 'menu_alterno', 'adaptacion'],
          next: 'log_08',
          narrative: 'A las 8am el jefe de cocina reunió al equipo: "Hoy no hay carne, pero tenemos 85kg de pollo y todo lo demás. Vamos a hacer la mejor hamburguesa de pollo crispy que Pereira haya probado." En Instagram se publicó un story creativo: "Hoy el pollo manda 🐔🔥 ¡Prueba nuestra hamburguesa crispy EDICIÓN LIMITADA!" Funcionó parcialmente: los clientes nuevos la pidieron con curiosidad, pero 8 clientes de los habituales se fueron decepcionados al no encontrar la hamburguesa clásica. Las ventas del día fueron 25% menores que un viernes normal de quincena.'
        },
        {
          id: 'C',
          label: 'Contactar proveedor de respaldo inmediatamente',
          description: 'Activar el plan B: llamar a Frigorífico del Otún (proveedor que cotizaste hace un mes pero no contrataste). Pueden entregar en 4 horas — la carne llega a las 11am. Los primeros pedidos del almuerzo se cubren con lo que hay, y a partir de las 11:30am menú completo. Precio 15% sobre el regular pero mejor que Mercasa.',
          cost: 3000000,
          revenue: -1500000,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Proveedor de respaldo entrega a precio 15% mayor — costo adicional controlado', bsc: { bsc_financial: -1 }, cost: 0 }
          ],
          tags: ['respaldo', 'proveedor_alterno', 'plan_b'],
          next: 'log_08',
          narrative: 'A las 7:15am se llamó al Frigorífico del Otún. "Claro, les podemos despachar 90kg de carne molida y 40kg de costilla, pero la entrega es a las 11am porque el camión refrigerado sale a las 9am." Se activó el menú de contingencia para el desayuno y las primeras horas, y a las 11:15am llegó la carne. El almuerzo se atendió con menú completo. Las ventas se redujeron solo un 12% respecto al viernes promedio. Lección aprendida: siempre tener un proveedor de respaldo pre-negociado y con acuerdo de respuesta en menos de 6 horas.'
        }
      ]
    },

    'log_08': {
      day: 22,
      title: 'Gestión de la cadena de frío',
      context: 'Pereira tiene temperatura promedio de 21°C pero en épocas de calor sube a 28-30°C. Tu cadena de frío tiene varios puntos críticos: cuarto frío del restaurante (funciona bien), transporte desde proveedores (dudoso), almacenamiento temporal en recepción (el punto más débil: los ingredientes pasan 15-20 minutos a temperatura ambiente mientras se verifican y guardan), y la entrega de domicilios (las cajas térmicas pierden frío en 45 minutos). Un brote de intoxicación alimentaria acabaría con tu negocio. ¿Cómo fortaleces la cadena de frío?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Protocolo estricto de recepción con termómetro',
          description: 'Implementar protocolo HACCP en recepción: todo ingrediente perecedero se mide con termómetro de punción al llegar. Si la carne está por encima de 4°C o las verduras por encima de 8°C, se rechaza el lote completo. Máximo 10 minutos entre descarga y almacenamiento en frío. Registro en bitácora digital.',
          cost: 2000000,
          revenue: 1000000,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Protocolo HACCP en recepción: cocina garantiza que todo ingrediente que entra al proceso cumple temperatura', bsc: { bsc_internal: 3, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['haccp', 'cadena_frio', 'recepcion', 'temperatura'],
          next: 'log_09',
          narrative: 'El termómetro de punción digital ($180.000) se volvió la herramienta más importante de la recepción. El primer día de implementación, se rechazó un lote de queso que llegó a 9°C (debía estar a 4°C). El proveedor se quejó pero entendió: "si no viene frío, no entra." El equipo de recepción ahora tarda solo 8 minutos entre descarga y almacenamiento. La bitácora digital se llena en el celular del coordinador: foto del termómetro + hora + proveedor + temperatura. En un mes se tienen datos para evaluar qué proveedor mantiene mejor la cadena de frío.'
        },
        {
          id: 'B',
          label: 'Cajas térmicas con gel refrigerante para domicilios',
          description: 'Reemplazar las cajas térmicas básicas por cajas con aislamiento de doble pared y packs de gel refrigerante. Mantienen temperatura por 90 minutos (vs 45 actuales). Cada caja cuesta $320.000 (vs $80.000 las actuales). Se necesitan 6 cajas.',
          cost: 3000000,
          revenue: 1500000,
          bsc: { bsc_financial: -1, bsc_customer: 4, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            { area: 'marketing', message: 'Domicilios llegan con comida caliente/fría según corresponda — diferencial frente a apps donde la comida llega tibia', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['cajas_termicas', 'gel', 'domicilios', 'temperatura'],
          next: 'log_09',
          narrative: 'Las nuevas cajas llegaron y la diferencia fue inmediata. Una prueba: se puso una hamburguesa a 72°C en la caja vieja y en la nueva. A los 45 minutos, la vieja estaba a 48°C (tibia), la nueva a 63°C (caliente). Los domiciliarios notaron el peso extra (1.2kg más), pero los clientes lo agradecieron: las papas llegan crujientes, la carne caliente, y la ensalada fría. La queja más frecuente en redes sociales ("la comida llega fría") desapareció en dos semanas.'
        },
        {
          id: 'C',
          label: 'Cuarto frío de respaldo con generador eléctrico',
          description: 'Instalar un segundo cuarto frío más pequeño (backup) y un generador eléctrico de respaldo. En Pereira los cortes de luz ocurren 2-3 veces al mes (especialmente en época de lluvias). Sin generador, un corte de 4 horas en la madrugada puede dañar $3M en inventario de carnes y lácteos.',
          cost: 8000000,
          revenue: 2000000,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Generador eléctrico + cuarto frío backup: inversión de $8M que protege $3M mensuales en inventario perecedero', bsc: { bsc_financial: 1 }, cost: 0 },
            { area: 'operations', message: 'Cuarto frío de respaldo permite separar carnes de verduras — mejor práctica de almacenamiento', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['cuarto_frio', 'generador', 'respaldo', 'cortes_luz'],
          next: 'log_09',
          narrative: 'El generador (diésel, 5kW) se instaló en el patio trasero con encendido automático: si se va la luz, en 8 segundos el generador arranca y alimenta los dos cuartos fríos. La primera prueba real llegó un martes a las 2am: corte de energía en toda la Circunvalar por 6 horas. El restaurante vecino perdió $2.1M en carnes. El tuyo amaneció con todo perfecto a 3°C. El segundo cuarto frío permitió además separar carnes crudas de productos listos para servir — una mejora sanitaria que INVIMA valoró positivamente.'
        },
        {
          id: 'D',
          label: 'Monitoreo remoto de temperatura 24/7',
          description: 'Instalar sensores de temperatura con conectividad WiFi en el cuarto frío y en el área de recepción. App móvil que alerta al gerente si la temperatura sube de los umbrales definidos, incluso a las 3am. Datos históricos para demostrar cumplimiento ante INVIMA.',
          cost: 4000000,
          revenue: 1000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'innovation', message: 'Monitoreo IoT de cadena de frío — tecnología aplicable a todos los puntos de venta futuros', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['monitoreo', 'iot', 'temperatura', 'invima'],
          next: 'log_09',
          narrative: 'Tres sensores (cuarto frío, nevera de bebidas, y área de recepción) conectados a una plataforma en la nube. A las 3:47am de un jueves, el celular del gerente suena: "ALERTA — Cuarto frío principal: 7.2°C (límite: 4°C)." El gerente llama al vigilante, quien descubre que el compresor se apagó por una sobrecarga eléctrica. Reinicia el equipo y en 40 minutos la temperatura vuelve a 3°C. Sin el sensor, habrían pasado 5 horas hasta que alguien llegara a las 8am y encontrara todo a 15°C — pérdida total del inventario.'
        }
      ]
    },

    'log_09': {
      day: 25,
      title: 'Economías de escala en compras',
      context: 'Llevas un mes operando y los datos son claros: tu consumo mensual de los 10 ingredientes principales suma $32M COP. Varios proveedores te han ofrecido descuentos por volumen si compras en cantidades mayores: carne molida al -15% si pides 500kg/mes en vez de 120kg/semana, empaques al -25% si compras por 10.000 unidades, aceite al -20% por tambor de 200 litros. Pero comprar más significa almacenar más, inmovilizar capital, y arriesgar vencimiento en perecederos. ¿Cómo aprovechas las economías de escala?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Compras masivas de no perecederos',
          description: 'Aplicar economía de escala SOLO en ítems de larga vida útil: empaques, servilletas, salsas embotelladas, granos, aceite. Estos representan el 30% del gasto pero se pueden almacenar 2-3 meses sin riesgo. Los perecederos (carnes, verduras, lácteos) se mantienen con compra semanal normal.',
          cost: 12000000,
          revenue: 4000000,
          bsc: { bsc_financial: 4, bsc_customer: 0, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Compra masiva de no perecederos: desembolso único de $12M genera ahorro mensual de $1.6M en descuentos', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['escala', 'no_perecederos', 'descuento_volumen'],
          next: 'log_10',
          narrative: 'Se negoció la compra trimestral: 30.000 empaques (-25%), 4 tambores de aceite de 200L (-20%), 500kg de granos surtidos (-18%). Todo se almacenó en la bodega de Cerritos sin problema: los empaques no ocupan cuarto frío, el aceite aguanta 6 meses, y los granos duran un año. El ahorro mensual fue de $1.6M y el capital inmovilizado se recupera en 45 días. Los perecederos siguieron con compra semanal normal — no tiene sentido comprar 500kg de carne que se vence en 5 días.'
        },
        {
          id: 'B',
          label: 'Alianza de compra con otros restaurantes',
          description: 'Formar un grupo de compra con 3 restaurantes amigos de Pereira (no competidores directos: una pizzería, un restaurante de sushi, y una panadería). Juntos suman volumen para negociar descuentos de distribución sin que cada uno tenga que almacenar de más. Se reparten los pedidos grandes entre los 4 establecimientos.',
          cost: 3000000,
          revenue: 3500000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: -1, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'La alianza de compra genera red de contactos gastronómicos — oportunidad de promociones cruzadas', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Grupo de compra negocia descuentos del 18% promedio sin inmovilizar capital extra por restaurante', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['alianza', 'compra_conjunta', 'red_restaurantes'],
          next: 'log_10',
          narrative: 'La alianza se formalizó con un acuerdo simple entre los 4 restaurantes. El primer pedido conjunto fue de aceite: solos compraban 200L cada uno a $8.900/L. Juntos pidieron 800L y el precio bajó a $7.300/L — 18% de descuento. En empaques desechables el descuento fue del 22%. La coordinación fue el reto: un grupo de WhatsApp donde cada restaurante reporta sus necesidades antes del lunes, y el martes se consolida el pedido. La pizzería se retrasó dos veces y generó fricción, pero después de establecer reglas claras (quien no reporta a tiempo, compra solo), el sistema funcionó.'
        },
        {
          id: 'C',
          label: 'Negociar por frecuencia, no por volumen',
          description: 'En vez de comprar más cantidad, negociar descuentos por compromiso de compra recurrente: contrato a 6 meses con volumen mínimo semanal garantizado. El proveedor prefiere la estabilidad de ingresos fijos y ofrece -10% sin exigir lotes grandes. Sin riesgo de sobreinventario ni capital inmovilizado.',
          cost: 2000000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Contratos de volumen mínimo a 6 meses: descuento del 10% sin desembolso extra, pero compromiso fijo de compra', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['contrato', 'frecuencia', 'compromiso'],
          next: 'log_10',
          narrative: 'Se firmaron contratos a 6 meses con 4 proveedores principales. El acuerdo: compra mínima semanal garantizada (120kg carne, 80kg pollo, 50kg verduras) a cambio de -10% sobre el precio de lista. Si una semana se necesita menos, se compra el mínimo y se congela el excedente. Si se necesita más, se pide adicional al mismo precio. Los proveedores aceptaron encantados: la previsibilidad de ingresos les permite planear su propia producción. El restaurante gana estabilidad de costos: en un mes donde el precio de la carne subió 8% en el mercado, tu contrato mantuvo el precio fijo.'
        }
      ]
    },

    // ========================================================
    //  FASE 4 — LOGISTICA INVERSA Y DISRUPCION (Dias 28-34)
    // ========================================================

    'log_10': {
      day: 28,
      title: 'Logística inversa y gestión de residuos',
      context: 'Tu restaurante genera diariamente: 45kg de residuos orgánicos (cáscaras, sobrantes, comida devuelta), 12kg de cartón y empaques, 8kg de aceite usado, y 3kg de plástico. En Pereira, la empresa de aseo Atesa cobra $850.000/mes por recolección comercial, pero hay oportunidades: una empresa en Dosquebradas compra aceite usado para biocombustible, hay composteras comunitarias en el barrio, y un reciclador del sector paga por el cartón. La logística inversa bien hecha puede convertir un costo en ingreso. ¿Qué haces?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Programa de compostaje con fincas locales',
          description: 'Alianza con una finca en Cerritos que recoge los residuos orgánicos 3 veces por semana y los transforma en compost. A cambio, el restaurante recibe verduras frescas con un 10% de descuento. Economía circular aplicada al Eje Cafetero.',
          cost: 1500000,
          revenue: 2000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Programa de compostaje local — marketing puede comunicar sostenibilidad como valor de marca', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['compostaje', 'economia_circular', 'sostenibilidad'],
          next: 'log_11',
          narrative: 'La finca de Don Alberto en Cerritos recoge los residuos orgánicos los lunes, miércoles y viernes a las 6am. Un mes después, esos mismos residuos convertidos en compost nutren los tomates y lechugas que el restaurante compra con 10% de descuento. Los clientes que se enteran (hay un cartel en el restaurante explicando el ciclo) reaccionan con orgullo: "¡Aquí sí cuidan el planeta!" En Instagram, el post sobre el compostaje fue el segundo más compartido del mes. Costo neto negativo: se gasta menos en basura y se ahorra en verduras.'
        },
        {
          id: 'B',
          label: 'Venta de aceite usado para biocombustible',
          description: 'Contrato con BioÉnergy Risaralda para vender los 8kg diarios de aceite usado a $1.200/kg. Ellos lo recogen semanalmente en bidones certificados. Genera un ingreso de $290.000/mes y elimina el riesgo ambiental de desechar aceite por el alcantarillado (multa de CARDER: $8M).',
          cost: 500000,
          revenue: 350000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Ingreso adicional de $290.000/mes por venta de aceite usado — elimina riesgo de multa ambiental de $8M', bsc: { bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['aceite_usado', 'biocombustible', 'ambiental'],
          next: 'log_11',
          narrative: 'BioÉnergy Risaralda dejó 4 bidones azules certificados en el patio trasero. Cada viernes recogen el aceite usado del cuarto frío y pesan en báscula. El primer mes generó $287.000 — no parece mucho, pero antes ese aceite se tiraba por el sifón (ilegal y contaminante) o se pagaba para que alguien se lo llevara. Ahora es ingreso neto. Un inspector de CARDER visitó el restaurante y felicitó la práctica: "Ojalá todos los restaurantes de Pereira hicieran esto."'
        },
        {
          id: 'C',
          label: 'Reducción en origen (Zero Waste)',
          description: 'Atacar el problema de raíz: rediseñar recetas para minimizar sobrantes (usar tallos de brócoli en sopas, cáscaras de papa en snacks), reducir porciones que históricamente se devuelven, y reemplazar empaques plásticos por biodegradables de fibra de caña. Meta: reducir residuos un 40% en 2 meses.',
          cost: 5000000,
          revenue: 2500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Zero Waste requiere rediseño de recetas — cocina debe adaptar preparaciones para usar el 100% de los ingredientes', bsc: { bsc_internal: 2, bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Empaques biodegradables y programa Zero Waste: diferencial de marca poderoso en redes sociales', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['zero_waste', 'reduccion', 'biodegradable'],
          next: 'log_11',
          narrative: 'El cambio a empaques de fibra de caña costó $1.200 más por unidad que el icopor, pero el impacto fue visible: los clientes notan la diferencia y muchos lo mencionan en reseñas. En cocina, la chef creó un menú "aprovechamiento total": las cáscaras de yuca se fríen como chips, los tallos de cilantro van al chimichurri, y las puntas de pollo que se descartaban ahora son la base del caldo. Los residuos orgánicos bajaron de 45kg a 28kg diarios en 6 semanas. El costo unitario de ingredientes bajó 6% porque se usa más de cada producto comprado.'
        },
        {
          id: 'D',
          label: 'Red de reciclaje con recicladores del sector',
          description: 'Acuerdo con la asociación de recicladores de la Circunvalar: recogen cartón, plástico y vidrio clasificado 2 veces por semana. A cambio de la clasificación en origen, no cobran la recolección y pagan $200/kg de cartón limpio. Impacto social positivo.',
          cost: 800000,
          revenue: 600000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['reciclaje', 'social', 'recicladores'],
          next: 'log_11',
          narrative: 'Don Jaime, líder de los recicladores del sector, pasó por el restaurante a las 7am y 5pm. Le entregamos cartón limpio separado, plástico clasificado y los envases de vidrio. A fin de mes, Jaime paga $72.000 por el cartón. No es plata grande, pero el impacto social sí: la asociación de recicladores tiene ingreso estable y el restaurante tiene la conciencia limpia. Algunos clientes que ven a Don Jaime salir con los materiales preguntan y queda bien la imagen.'
        }
      ]
    },

    'log_11': {
      day: 31,
      title: 'Paro de transportadores en el Eje Cafetero',
      context: 'Martes 6am — Noticias Caracol reporta: "Paro de camioneros bloquea las principales vías del Eje Cafetero. La vía Pereira-Armenia está cerrada desde las 4am, la autopista del café tiene paso restringido, y la entrada a Dosquebradas por La Popa tiene tractomulas atravesadas." Los camiones de tus proveedores no pueden entrar a Pereira. Tu inventario actual alcanza para 1.5 días. El paro podría durar entre 2 y 5 días según los analistas. ¿Cómo enfrentas esta crisis?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Racionamiento inteligente del inventario',
          description: 'Calcular exactamente qué tienes y cuántos días dura cada ingrediente si reduces porciones un 15% y eliminas del menú los 3 platos que más ingredientes consumen. Aplicar modelo de inventario con restricción: maximizar días de operación con el stock actual. Meta: estirar 1.5 días de inventario a 3 días.',
          cost: 0,
          revenue: -4000000,
          bsc: { bsc_financial: -1, bsc_customer: -3, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Porciones reducidas 15% y menú limitado: cocina debe recalibrar todas las recetas temporalmente', bsc: { bsc_internal: -2, bsc_customer: -2 }, cost: 0 },
            { area: 'marketing', message: 'Menú reducido por paro: comunicar transparentemente en redes para generar empatía en vez de frustración', bsc: { bsc_customer: -1 }, cost: 0 }
          ],
          tags: ['racionamiento', 'crisis', 'paro', 'inventario_limitado'],
          next: 'log_12',
          narrative: 'Se hizo un inventario de emergencia a las 7am: 68kg de pollo, 42kg de carne, 30kg de papa, 15kg de yuca, y verduras para 2 días. El modelo de racionamiento fue: eliminar el combo familiar (el que más ingredientes usa), reducir las porciones de carne 15%, y priorizar los platos más vendidos. Con esta estrategia, el stock alcanzó para 2.8 días. Se publicó en Instagram: "Debido al paro, operamos con menú reducido. Agradecemos su comprensión." Los clientes fueron solidarios — Pereira entera estaba afectada y la gente entendió.'
        },
        {
          id: 'B',
          label: 'Abastecimiento local de emergencia',
          description: 'Activar toda la red local: Mercasa (que se abastece de fincas cercanas a Pereira, no depende de vías intermunicipales), tiendas de barrio mayoristas, y contactar directamente a fincas dentro del perímetro urbano de Pereira y Dosquebradas. Los precios estarán inflados un 25-40% pero los insumos están disponibles.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 2, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Abastecimiento de emergencia local: sobrecosto del 35% promedio durante el paro — impacto de $4.5M adicionales', bsc: { bsc_financial: -4 }, cost: 0 }
          ],
          tags: ['emergencia_local', 'mercasa', 'paro', 'abastecimiento'],
          next: 'log_12',
          narrative: 'El coordinador de logística madrugó a Mercasa a las 4:30am. Para su sorpresa, la Central Mayorista estaba funcionando: muchos productos vienen de fincas de Pereira, Cerritos y Santa Rosa de Cabal, que no dependen de las vías bloqueadas. Consiguió carne (a $19.000/kg, un 35% más cara), verduras locales a precio casi normal, y papa criolla de una finca en la vía a Armenia que sacó la producción en moto antes del bloqueo. El restaurante operó con menú completo durante los 4 días del paro. Fue el único de la zona que no cerró — y los clientes lo recordaron.'
        },
        {
          id: 'C',
          label: 'Cerrar temporalmente y proteger el flujo de caja',
          description: 'Cerrar el restaurante por 2-3 días hasta que se normalicen las vías. Mantener solo personal esencial (vigilancia, administración) con licencia temporal para el resto. Proteger el flujo de caja: no gastar en ingredientes inflados, no arriesgar la calidad con insumos improvisados.',
          cost: 0,
          revenue: -12000000,
          bsc: { bsc_financial: 0, bsc_customer: -5, bsc_internal: -2, bsc_learning: 0 },
          crossEffects: [
            { area: 'hr', message: 'Cierre temporal: empleados operativos en licencia no remunerada — riesgo de rotación y desmotivación', bsc: { bsc_learning: -3, bsc_internal: -2 }, cost: 0 },
            { area: 'finance', message: 'Cierre de 3 días: pérdida de ventas de $12M pero se conservan $8M que se hubieran gastado en insumos inflados', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'marketing', message: 'Cierre temporal: competidores que se mantienen abiertos capturan tus clientes habituales', bsc: { bsc_customer: -4 }, cost: 0 }
          ],
          tags: ['cierre_temporal', 'paro', 'conservar_caja'],
          next: 'log_12',
          narrative: 'Se bajaron las rejas el martes a las 10am. Un aviso en la puerta: "Cerrados temporalmente por paro de transportadores. Volveremos pronto." Las redes sociales se llenaron de comentarios divididos: "Qué falta de recursividad" vs "Es lo responsable, mejor que vender comida con ingredientes de dudosa procedencia." Lo más doloroso: tres clientes corporativos (empresas que pedían almuerzos diarios) migraron al restaurante de la esquina que se mantuvo abierto con menú reducido. Al reabrir el viernes, se tardó una semana en recuperar el ritmo de ventas.'
        }
      ]
    },

    'log_12': {
      day: 34,
      title: 'Decisión de nueva bodega',
      context: 'El restaurante está creciendo: segundo punto en Dosquebradas operando, domicilios en aumento, y hay planes de abrir un tercer local en el Centro Comercial Victoria Plaza. Tu capacidad de almacenamiento actual ya no da: el cuarto frío opera al 92% de capacidad y en días de pedido grande los insumos no perecederos se acumulan en pasillos. Necesitas expandir. ¿Dónde y cómo?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bodega grande en zona industrial de Pereira',
          description: 'Arrendar una bodega de 200m² en la zona industrial de la Avenida 30 de Agosto. Espacio para 30 días de inventario de no perecederos + cuarto frío de 40m². Arriendo: $5.2M/mes. Ubicación central para abastecer los 3 puntos de venta.',
          cost: 15000000,
          revenue: 3000000,
          bsc: { bsc_financial: -3, bsc_customer: 1, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Arriendo de bodega nueva: $5.2M mensuales fijos + $9.8M de adecuación inicial (estanterías, cuarto frío)', bsc: { bsc_financial: -4 }, cost: 0 },
            { area: 'operations', message: 'Bodega central grande permite pre-procesamiento de ingredientes: cortes, marinados, porciones — cocina recibe semi-preparados', bsc: { bsc_internal: 4 }, cost: 0 }
          ],
          tags: ['bodega_grande', 'zona_industrial', 'expansion'],
          next: 'log_13',
          narrative: 'La bodega en la Avenida 30 de Agosto tiene todo: acceso para camiones, cuarto frío nuevo, piso epóxico, y está a 12 minutos de los tres puntos de venta. Se montó como un mini centro de acopio y procesamiento: los ingredientes llegan de los proveedores, se verifican, se porcionan, se empacan al vacío, y salen listos para cocina. Los chefs agradecen: reciben cajas con porciones exactas de carne molida (150g cada una), cebolla picada lista, y salsas dosificadas. El costo fijo duele, pero la eficiencia operativa de toda la cadena mejoró visiblemente.'
        },
        {
          id: 'B',
          label: 'Dark kitchen en Dosquebradas',
          description: 'En vez de solo bodega, arrendar un local pequeño en Dosquebradas que funcione como cocina fantasma (dark kitchen) + bodega. Produce pedidos de domicilio para la zona y almacena insumos para el punto de Dosquebradas. Doble función: almacenamiento + producción para delivery.',
          cost: 12000000,
          revenue: 6000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Dark kitchen en Dosquebradas: se puede abrir marca virtual en Rappi exclusiva para domicilios de la zona', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'Dark kitchen necesita 4 personas: 2 cocineros + 1 empacador + 1 coordinador logístico', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'operations', message: 'Dark kitchen produce solo los 8 platos más pedidos en domicilio — operación simplificada y eficiente', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['dark_kitchen', 'dosquebradas', 'delivery', 'cocina_fantasma'],
          next: 'log_13',
          narrative: 'El local en el barrio Los Molinos de Dosquebradas ($2.8M/mes) se transformó: zona de almacenamiento al fondo (60m²), cocina compacta al frente (30m²), y zona de despacho de domicilios. Solo produce los 8 platos más pedidos por delivery. En Rappi se creó una "marca virtual": mismo menú pero con nombre "Express del Café" para no canibalizar la marca principal. Los domicilios en Dosquebradas ahora llegan en 18 minutos (antes 35, porque salían desde Pereira cruzando el viaducto). Las ventas de delivery en la zona subieron 65% el primer mes.'
        },
        {
          id: 'C',
          label: 'Optimizar espacio actual con estanterías verticales',
          description: 'No arrendar nuevo espacio: invertir en estanterías verticales de 4 niveles, reorganizar el cuarto frío con sistema FIFO (First In, First Out), y reducir inventario de seguridad al mínimo calculado. Capacidad útil sube 35% sin un metro cuadrado más. Solución temporal que posterga la decisión 4-6 meses.',
          cost: 4000000,
          revenue: 1000000,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Reorganización FIFO del cuarto frío: reducción inmediata del desperdicio por vencimiento', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['optimizar_espacio', 'vertical', 'fifo', 'temporal'],
          next: 'log_13',
          narrative: 'Las estanterías verticales de acero inoxidable aprovecharon los 3 metros de altura del almacén que solo usaban 1.8m. El cuarto frío se reorganizó con sistema FIFO: etiquetas de colores por día de ingreso y la regla de "lo primero que entra es lo primero que sale". La capacidad efectiva subió de 92% a 68% de uso — un respiro. Pero el equipo sabe que es solución temporal: si se abre el tercer local, en 3 meses vuelven a estar al 90%. Es como ponerle una curita a una herida que necesita sutura.'
        }
      ]
    },

    // ========================================================
    //  FASE 5 — ULTIMA MILLA Y RESILIENCIA (Dias 37-43)
    // ========================================================

    'log_13': {
      day: 37,
      title: 'Optimización de última milla',
      context: 'Los datos de domicilios del último mes revelan patrones claros: el 60% de los pedidos se concentran en 5 barrios (Álamos, Pinares, Centro, Cuba, Dosquebradas centro), el tiempo promedio de entrega es 32 minutos (la competencia está en 25), y el costo de entrega promedio es $4.200 por pedido. El análisis muestra que el 28% del costo es tiempo muerto del domiciliario esperando en el restaurante a que el pedido esté listo. ¿Cómo optimizas la última milla?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Sistema de pre-despacho sincronizado con cocina',
          description: 'Cuando el domiciliario sale del restaurante, el pedido ya debe estar listo Y empacado. Implementar tablero de coordinación: cocina ve los pedidos entrantes 10 minutos antes, prepara por lotes agrupando zona geográfica, y el domiciliario llega, recoge y sale en máximo 2 minutos. Reduce tiempo muerto un 80%.',
          cost: 2000000,
          revenue: 1500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 5, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Cocina debe preparar pedidos de domicilio sincronizados con la llegada del domiciliario — requiere coordinación precisa', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['pre_despacho', 'sincronizacion', 'tiempo_muerto'],
          next: 'log_14',
          narrative: 'El tablero de pre-despacho cambió todo: una pantalla en cocina muestra los pedidos de domicilio con countdown. Cuando quedan 3 minutos para que el domiciliario llegue (calculado por GPS), la cocina pone a empacar. El domiciliario ahora entra, firma en la tablet, recoge la bolsa y sale. Tiempo en restaurante promedio: 1.8 minutos (antes 9.2). El tiempo de entrega total bajó de 32 a 24 minutos. Los domiciliarios están felices: hacen más entregas por hora y ganan más propinas porque la comida llega más caliente.'
        },
        {
          id: 'B',
          label: 'Micro-hubs de entrega en barrios clave',
          description: 'Establecer 2 puntos de acopio temporales (micro-hubs) en los barrios con mayor demanda: uno en Álamos (tienda aliada) y otro en Cuba (local compartido). El camión del restaurante deja los pedidos agrupados cada hora y los domiciliarios en moto los distribuyen desde ahí en menos de 8 minutos. Modelo "hub and spoke".',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Micro-hubs en barrios: presencia de marca en Álamos y Cuba — visibilidad local poderosa', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Micro-hubs: $3M mensuales en arriendo de puntos + operación, pero reducen costo de última milla un 30%', bsc: { bsc_financial: 0 }, cost: 0 }
          ],
          tags: ['micro_hubs', 'hub_spoke', 'barrios', 'ultima_milla'],
          next: 'log_14',
          narrative: 'El micro-hub de Álamos se montó en el garaje de una tienda aliada: una mesa con hot-box (caja caliente eléctrica) que mantiene los pedidos a temperatura hasta que el domiciliario los recoge. A las 12pm, 1pm y 2pm llega la van con los pedidos agrupados para la zona. Un domiciliario en moto los distribuye en un radio de 8 cuadras en menos de 6 minutos. Los clientes de Álamos pasaron de recibir en 35 minutos a recibir en 12. El modelo es replicable: si funciona en Álamos y Cuba, se puede escalar a Pinares y Dosquebradas centro.'
        },
        {
          id: 'C',
          label: 'Descuentos por recogida en restaurante (Pick-up)',
          description: 'Ofrecer 10% de descuento a clientes que recojan su pedido en el restaurante en vez de pedir domicilio. Pedido por WhatsApp o app, pago anticipado, y en 15 minutos está listo para recoger. Reduce la presión sobre la flota de domicilios y aumenta el tráfico presencial al restaurante.',
          cost: 1000000,
          revenue: 2000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: 'Programa Pick-up con 10% de descuento — canal de comunicación directa con el cliente recurrente', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Cada pedido Pick-up ahorra $4.200 en costos de domicilio a cambio de un descuento de ~$2.500 — ganancia neta por pedido', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['pickup', 'recoger', 'descuento', 'trafico_presencial'],
          next: 'log_14',
          narrative: 'El programa "Pide y Recoge" se promocionó en redes: "10% OFF cuando vienes por tu pedido. Listo en 15 minutos, sin fila." En la primera semana, 18% de los clientes de domicilio migraron a Pick-up. El ahorro fue real: cada pedido Pick-up le cuesta $4.200 menos al restaurante (sin domiciliario) y el cliente paga $2.500 menos (descuento). Ganancia neta: $1.700 por pedido. Lo inesperado: los clientes Pick-up a veces compran algo extra cuando llegan al restaurante (un jugo, un postre) — el ticket promedio de Pick-up es 8% mayor que el de domicilio.'
        },
        {
          id: 'D',
          label: 'Domicilios en bicicleta eléctrica',
          description: 'Reemplazar 2 motos por bicicletas eléctricas para pedidos en radio de 3km. Costo de operación 75% menor (sin gasolina, sin SOAT, sin tecnicomecánica), tiempo de entrega similar en distancias cortas, y alineado con la cicloruta de la Circunvalar. Imagen de marca sostenible.',
          cost: 5000000,
          revenue: 1500000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Bicicletas eléctricas brandeadas: imagen sostenible y moderna por las calles de Pereira', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['bici_electrica', 'sostenible', 'cicloruta', 'costo_bajo'],
          next: 'log_14',
          narrative: 'Dos bicicletas eléctricas de carga con caja térmica integrada se incorporaron a la flota. En un radio de 3km (Circunvalar, Álamos, Pinares, centro de Pereira) son iguales de rápidas que la moto porque no sufren congestión vehicular: van por la cicloruta, se meten por andenes, y se estacionan en la puerta del cliente. Costo de operación: $800/día en electricidad vs $12.000/día en gasolina de la moto. Los domiciliarios de bicicleta llegan frescos y sonrientes — algo que los clientes notan y agradecen. En TikTok, un video de la bicicleta brandeada tuvo 45.000 vistas.'
        }
      ]
    },

    'log_14': {
      day: 40,
      title: 'Plan de resiliencia de la cadena de suministro',
      context: 'Después de la crisis del proveedor que no llegó (día 19) y el paro de transportadores (día 31), queda claro que tu cadena de suministro necesita un plan de resiliencia formal. No puedes seguir improvisando cada vez que algo sale mal. La pregunta es: ¿cuánto invertir en prevención vs cuánto asumir que vas a improvisar cuando pase? Diseñar un plan de resiliencia tiene costo fijo permanente, pero reduce dramáticamente el impacto de cada crisis futura.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Plan completo de Business Continuity (BCP)',
          description: 'Diseñar un plan formal de continuidad de negocio que incluya: mapeo de riesgos de la cadena de suministro (probabilidad x impacto), proveedores de respaldo pre-negociados para cada categoría, stock estratégico de emergencia (3 días de ingredientes clave congelados), protocolo de comunicación con clientes ante crisis, y simulacros trimestrales.',
          cost: 10000000,
          revenue: 2000000,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 7, bsc_learning: 6 },
          crossEffects: [
            { area: 'finance', message: 'BCP requiere stock de emergencia permanente valorado en $4M + seguro de lucro cesante de $1.2M/año', bsc: { bsc_financial: -3 }, cost: 0 },
            { area: 'operations', message: 'BCP incluye recetas de contingencia pre-diseñadas: la cocina puede activar menú alterno en 30 minutos', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 },
            { area: 'hr', message: 'Simulacros trimestrales de crisis: el equipo practica protocolos de emergencia como un bombero practica evacuaciones', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['bcp', 'resiliencia', 'plan_contingencia', 'simulacros'],
          next: 'log_15',
          narrative: 'El plan de continuidad se documentó en 12 páginas e incluyó: matriz de riesgos con 15 escenarios (desabastecimiento, paro, corte de luz, inundación, pandemia), protocolo de activación por nivel (verde-amarillo-rojo), y contactos de emergencia de 3 proveedores de respaldo ya negociados. El primer simulacro fue un martes: a las 7am se anunció al equipo "escenario rojo: proveedor de carnes no llega, cuarto frío a 10°C." En 22 minutos el equipo activó el protocolo completo. El gerente comentó: "No es paranoia, es profesionalismo."'
        },
        {
          id: 'B',
          label: 'Diversificación geográfica de proveedores',
          description: 'Asegurar que para cada ingrediente crítico haya al menos 2 proveedores de DIFERENTES zonas geográficas: uno del Eje Cafetero y uno del Valle del Cauca (o Antioquia). Si un paro bloquea las vías del Eje Cafetero, el proveedor del Valle puede entregar por una ruta alternativa. Mayor costo administrativo pero resistencia geográfica.',
          cost: 5000000,
          revenue: 1500000,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Dos proveedores por categoría: se pierde algo de poder de negociación por dividir volumen, pero se gana estabilidad', bsc: { bsc_financial: -1 }, cost: 0 }
          ],
          tags: ['diversificacion', 'proveedores', 'geografia', 'resiliencia'],
          next: 'log_15',
          narrative: 'Se contactaron proveedores alternativos: Frigorífico del Valle (Cali) como respaldo de carnes, Hortifresh de Manizales para verduras, y un distribuidor de Medellín para empaques. Cada uno tiene ruta diferente de acceso a Pereira. Cuando el siguiente paro bloqueó la autopista del café, el proveedor de Cali entró por la ruta alterna Cartago-Pereira sin problema. El costo de mantener dos proveedores es un 8% más alto (se pierde descuento por volumen concentrado), pero la tranquilidad de saber que siempre hay alternativa no tiene precio.'
        },
        {
          id: 'C',
          label: 'Stock estratégico de congelados',
          description: 'Mantener un inventario permanente de emergencia: 5 días de carnes congeladas al vacío, salsas envasadas, y productos deshidratados. Este stock se rota cada 30 días (FIFO) para evitar vencimientos. Es un "seguro en forma de comida" que se activa solo cuando falla el abastecimiento normal.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Stock de emergencia congelado: cocina debe practicar recetas con ingredientes congelados (textura y sabor cambian)', bsc: { bsc_internal: 1, bsc_learning: 1 }, cost: 0 },
            { area: 'finance', message: 'Capital inmovilizado en stock de emergencia: $6M permanentes que no generan retorno directo', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['stock_emergencia', 'congelados', 'seguro', 'fifo'],
          next: 'log_15',
          narrative: 'El congelador de emergencia se llenó: 5 días de carne molida al vacío (-18°C), pechugas de pollo pre-marinadas, papas precocidas congeladas, y salsas base en porciones de 500ml. Cada 30 días se rota: lo que tiene un mes entra a producción normal y se reemplaza con producto fresco. El costo real es bajo porque nada se desperdicia — solo se adelanta la compra. Cuando un proveedor falló un jueves, el jefe de cocina abrió el congelador de emergencia y dijo: "Para esto existe." El restaurante operó normal mientras la competencia improvisaba.'
        }
      ]
    },

    'log_15': {
      day: 43,
      title: 'Estrategia logística final',
      context: 'Llevas 43 días gestionando la cadena logística de tu restaurante. Has tomado decisiones sobre proveedores, almacenamiento, distribución, inventarios, domicilios, cadena de frío, residuos, y resiliencia. El presupuesto usado y los resultados obtenidos definen tu posición competitiva. Ahora debes elegir la filosofía logística a largo plazo que guiará los próximos 12 meses de la cadena de suministro. Esta decisión define tu identidad operativa.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Cadena ágil (Agile Supply Chain)',
          description: 'Priorizar la velocidad de respuesta sobre el costo. Inventarios reducidos, proveedores flexibles que pueden escalar volumen en 24 horas, flota propia de domicilios para control total, y capacidad de cambiar el menú semanalmente según disponibilidad de ingredientes. Ideal para un mercado volátil como el de comida rápida en Pereira.',
          cost: 8000000,
          revenue: 5000000,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Cadena ágil: cocina debe ser flexible para cambiar preparaciones según los ingredientes disponibles cada semana', bsc: { bsc_internal: 2, bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Cadena ágil permite menús rotativos semanales — marketing puede comunicar "frescura y novedad" como diferencial', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Cadena ágil: costos variables más altos pero mejor adaptación a la demanda — menor desperdicio total', bsc: { bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['agile', 'velocidad', 'flexibilidad', 'respuesta_rapida'],
          next: null,
          narrative: 'La cadena ágil transformó la identidad del restaurante. Cada lunes el jefe de cocina y el coordinador logístico revisan qué hay disponible fresco en Mercasa y las fincas locales, y ajustan el menú de la semana. Un lunes llegó un lote espectacular de plátano hartón maduro de una finca en Marsella — ese día se lanzó la "Semana del Patacón" con 4 versiones nuevas. Las redes sociales explotaron. Los clientes aprendieron que cada semana hay algo nuevo, y eso genera recurrencia. La cadena de suministro dejó de ser un problema para convertirse en una ventaja competitiva: la capacidad de adaptar el menú a lo que el Eje Cafetero produce en cada momento. Flexibilidad como filosofía de vida.'
        },
        {
          id: 'B',
          label: 'Cadena eficiente (Lean Supply Chain)',
          description: 'Priorizar la reducción de costos sobre la flexibilidad. Contratos a largo plazo con precios fijos, automatización del reabastecimiento, menú estándar sin cambios (los mismos 15 platos todo el año), y economías de escala en cada proceso. Ideal para maximizar margen en un negocio de alto volumen.',
          cost: 5000000,
          revenue: 7000000,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Cadena Lean: costos predecibles, márgenes optimizados, presupuesto anual con varianza menor al 5%', bsc: { bsc_financial: 4 }, cost: 0 },
            { area: 'operations', message: 'Cadena Lean: producción estandarizada, recetas fijas, tiempos cronometrados — eficiencia máxima', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['lean', 'eficiencia', 'costos', 'estandarizacion'],
          next: null,
          narrative: 'La cadena Lean convirtió la logística en una máquina de precisión. Los pedidos se generan automáticamente según la demanda histórica + pronóstico de Holt-Winters. Los proveedores entregan los mismos productos, en las mismas cantidades, los mismos días, a los mismos precios negociados a 12 meses. El menú no cambia: los mismos 15 platos perfeccionados, con costos controlados al centavo. El margen neto subió 4 puntos porcentuales. Pero un cliente frecuente comentó en Google: "Buena comida pero siempre lo mismo. Ojalá tuvieran novedades." La eficiencia tiene su precio: cuando todo es predecible, también puede volverse aburrido. Sin embargo, el flujo de caja es impecable y el negocio es sólido como roca.'
        },
        {
          id: 'C',
          label: 'Cadena colaborativa (Partnership Supply Chain)',
          description: 'Integrar proveedores, restaurante y clientes en un ecosistema colaborativo: los proveedores locales tienen acceso a tu pronóstico de demanda (transparencia total), los domiciliarios participan de las ganancias (modelo de incentivos), y los clientes votan qué platos nuevos quieren (co-creación). Cadena de suministro como comunidad, no como transacción.',
          cost: 6000000,
          revenue: 4000000,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 3, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Modelo colaborativo: domiciliarios pasan de empleados a socios con incentivos por satisfacción del cliente', bsc: { bsc_learning: 4, bsc_internal: 2 }, cost: 0 },
            { area: 'marketing', message: 'Co-creación con clientes: encuestas de menú y proveedores visibles — la marca se vuelve comunitaria', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'innovation', message: 'El modelo colaborativo genera datos compartidos entre toda la cadena: demanda, costos, satisfacción — base para innovación conjunta', bsc: { bsc_learning: 5 }, cost: 0 }
          ],
          tags: ['colaborativa', 'ecosistema', 'partnership', 'co_creacion'],
          next: null,
          narrative: 'La cadena colaborativa redefinió las relaciones. Don Alberto, el de la finca en Cerritos, ahora tiene acceso a un dashboard simple donde ve el pronóstico de demanda del restaurante para la próxima semana — y ajusta su siembra en consecuencia. Los domiciliarios reciben bonificación por rating superior a 4.5 estrellas: se volvieron embajadores de la marca. Los clientes votan cada mes en Instagram por el "Plato Nuevo del Mes" entre 3 opciones que el chef propone. El resultado: una cadena de suministro que se siente como familia. Los proveedores no se van con la competencia porque son parte del equipo. Los domiciliarios no rotan porque se sienten valorados. Los clientes no se aburren porque participan. Es más difícil de gestionar que una cadena Lean, pero genera una lealtad que ningún descuento por volumen puede comprar.'
        },
        {
          id: 'D',
          label: 'Cadena digital (Smart Supply Chain)',
          description: 'Invertir fuerte en tecnología: IoT para monitoreo de inventario y temperatura en tiempo real, Machine Learning para pronóstico de demanda, ruteo algorítmico para domicilios, pedidos automáticos a proveedores disparados por sensores, y dashboard centralizado que muestra toda la cadena de suministro en una pantalla. El restaurante más tecnológico de Pereira.',
          cost: 15000000,
          revenue: 6000000,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 7 },
          crossEffects: [
            { area: 'innovation', message: 'Smart Supply Chain: primer restaurante de Pereira con cadena de suministro digitalizada — caso de estudio para la UTP', bsc: { bsc_learning: 6 }, cost: 0 },
            { area: 'finance', message: 'Inversión de $15M en digitalización logística — ROI proyectado en 14 meses por eficiencias acumuladas', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Dashboard centralizado: el gerente ve inventarios, temperaturas, rutas de domicilio y pedidos en tiempo real desde su celular', bsc: { bsc_internal: 4, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['digital', 'iot', 'machine_learning', 'smart', 'dashboard'],
          next: null,
          narrative: 'La pantalla del dashboard en la oficina del gerente muestra todo: los 42 SKUs con nivel de inventario en tiempo real, la temperatura de los 3 cuartos fríos, la ubicación GPS de cada domiciliario en un mapa de Pereira, y el pronóstico de demanda para las próximas 72 horas. Cuando la papa criolla baja del punto de reorden, el sistema genera automáticamente un pedido al proveedor. Cuando la temperatura del cuarto frío sube de 4°C, el celular del gerente vibra. Cuando un barrio tiene pico de pedidos, el algoritmo reasigna domiciliarios en tiempo real. Es hermoso, es costoso, y es frágil: cuando se cayó el WiFi un viernes de quincena, todo el sistema quedó a oscuras y el equipo tuvo que improvisar como en los viejos tiempos. La tecnología es poderosa cuando funciona, y un recordatorio de humildad cuando no.'
        }
      ]
    }

  }
};
