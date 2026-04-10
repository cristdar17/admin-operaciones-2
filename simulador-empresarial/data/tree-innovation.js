/* ============================================================
   TREE-INNOVATION v2 - Arbol de decisiones del area de I+D
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto del area: $50.000.000 COP
   10 nodos de decision | Dias 1-25
   ============================================================ */

window.TREE_INNOVATION = {
  name: 'I+D',
  icon: '💡',
  color: '#FFD60A',
  startNode: 'inn_01',
  nodes: {

    // ============================================================
    //  FASE 1 - INVESTIGACION DE MERCADO (Dias 1-5)
    // ============================================================

    // --- DIA 1: Investigacion de mercado ---
    'inn_01': {
      day: 1,
      title: 'Investigacion de mercado',
      context: 'Tu cadena necesita entender al consumidor pereirano antes de innovar. El presupuesto total de I+D es $50M COP y cada peso cuenta.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Encuestas digitales masivas',
          description: 'Google Forms via WhatsApp en universidades (UTP, UCPR, Libre). Meta: 500 respuestas en 3 dias.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'I+D comparte base de 500 encuestados para segmentacion', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['encuestas', 'digital', 'bajo-costo'],
          next: 'inn_02',
          feedback: 'Las encuestas digitales dan volumen de datos a bajo costo, pero las respuestas suelen ser superficiales. Es ideal para identificar tendencias generales, no para entender motivaciones profundas.',
          narrative: 'Llegan 620 respuestas. El 68% de jovenes quiere opciones mas saludables y el 42% pagaria $5.000 extra por ingredientes locales premium. Datos utiles pero genericos.'
        },
        {
          id: 'B',
          label: 'Focus groups presenciales',
          description: 'Tres sesiones con universitarios, familias y oficinistas. Moderador profesional incluido.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Focus groups revelan lenguaje emocional del consumidor', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['cualitativo', 'presencial', 'insights'],
          next: 'inn_02',
          feedback: 'Los focus groups capturan emociones y lenguaje corporal que las encuestas no detectan. Son mas costosos pero revelan el "por que" detras de las preferencias.',
          narrative: 'Las sesiones revelan que los pereiranos asocian "comida rapida saludable" con frescura visual y sabor casero, no con etiquetas fitness. Insight valioso para el concepto.'
        },
        {
          id: 'C',
          label: 'Observacion etnografica en campo',
          description: 'Enviar investigadores a restaurantes de la competencia en el centro, Circunvalar y Cuba durante una semana.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'I+D identifica tiempos de servicio y flujos de cocina de la competencia', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['etnografia', 'competencia', 'observacion'],
          next: 'inn_02',
          feedback: 'La etnografia observa comportamientos reales sin el sesgo de preguntar directamente. Revela patrones que el consumidor no sabe verbalizar, como tiempos de espera tolerados o preferencias de ubicacion.',
          narrative: 'Los investigadores descubren que los clientes de Frisby esperan 12 min en promedio y que los asaderos informales del barrio Cuba tienen fidelidad altisima por el trato personalizado.'
        },
        {
          id: 'D',
          label: 'Analisis de datos de Rappi y redes',
          description: 'Comprar reporte de tendencias de pedidos en Pereira via Rappi Business + scraping de resenas en Google Maps.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'I+D entrega mapa de calor de demanda digital por zona', bsc: { bsc_customer: 2, bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['big-data', 'digital', 'rappi'],
          next: 'inn_02',
          feedback: 'Los datos de plataformas digitales muestran demanda real (no declarada). Son objetivos pero costosos y no explican motivaciones. Mejor como complemento de metodos cualitativos.',
          narrative: 'El reporte muestra que las hamburguesas premium dominan el delivery nocturno y que las ensaladas tienen 300% mas pedidos que hace un ano. La zona de Pinares pide 4x mas que Cuba.'
        }
      ]
    },

    // --- DIA 4: Concepto de nuevo producto ---
    'inn_02': {
      day: 4,
      title: 'Concepto de nuevo producto',
      context: 'Con los datos de mercado listos, debes definir el concepto estrella para diferenciarte de la competencia local.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Hamburguesa con ingredientes del Eje Cafetero',
          description: 'Pan artesanal, carne de fincas locales, queso paisa, platano maduro y chimichurri de cilantron.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 5, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones debe buscar proveedores locales certificados', bsc: { bsc_internal: 2 }, cost: 500000 }
          ],
          tags: ['producto-local', 'diferenciacion', 'identidad'],
          next: 'inn_03',
          feedback: 'Usar ingredientes locales reduce costos logisticos y crea identidad de marca. El riesgo es que el consumidor lo perciba como "corriente" si no se presenta con diseno premium.',
          narrative: 'El equipo desarrolla tres recetas con productores de Santa Rosa y Marsella. El nombre tentativo: "La Cafetera". El concepto conecta identidad regional con comida rapida moderna.'
        },
        {
          id: 'B',
          label: 'Linea saludable tipo bowl',
          description: 'Bowls personalizables con base de arroz, quinoa o ensalada, proteina y toppings frescos.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones necesita redisenar linea de ensamblaje para bowls', bsc: { bsc_internal: 3 }, cost: 1000000 }
          ],
          tags: ['saludable', 'tendencia', 'personalizacion'],
          next: 'inn_03',
          feedback: 'Los bowls permiten personalizacion (clave para millennials/Gen Z) y margenes altos por ingredientes economicos. El reto es velocidad de preparacion en hora pico.',
          narrative: 'Se disenan 5 combinaciones base con precios entre $15.000 y $22.000. El equipo calcula margen bruto del 62% vs 48% de hamburguesas tradicionales.'
        },
        {
          id: 'C',
          label: 'Fusion colombo-asiatica',
          description: 'Burritos con kimchi, empanadas de pollo teriyaki, limonada de maracuya con jengibre.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'RRHH debe capacitar cocineros en tecnicas asiaticas basicas', bsc: { bsc_learning: 3 }, cost: 800000 }
          ],
          tags: ['fusion', 'innovador', 'riesgo-alto'],
          next: 'inn_03',
          feedback: 'La fusion genera diferenciacion radical pero divide opiniones. Es ideal para atraer early adopters y generar viralidad en redes, pero puede alienar al consumidor tradicional.',
          narrative: 'Las primeras pruebas internas dividen al equipo: la empanada teriyaki encanta pero el burrito con kimchi genera caras raras. Alto potencial viral, alto riesgo.'
        },
        {
          id: 'D',
          label: 'Postres y bebidas artesanales premium',
          description: 'Malteadas de cafe de origen, brownies con arequipe y helado artesanal de guanabana.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing recibe linea fotografiable para campanas en Instagram', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['postres', 'premium', 'instagram'],
          next: 'inn_03',
          feedback: 'Los postres premium tienen margenes altisimos (70-80%) y son naturalmente virales en redes sociales. Funcionan como "gancho" para atraer clientes que luego compran platos principales.',
          narrative: 'La malteada de cafe de origen con arequipe se convierte en favorita interna. El equipo la llama "La Pereiranita". Costo de produccion: $3.800, precio sugerido: $14.000.'
        }
      ]
    },

    // ============================================================
    //  FASE 2 - PROTOTIPADO Y PRUEBAS (Dias 7-14)
    // ============================================================

    // --- DIA 7: Metodo de prototipado ---
    'inn_03': {
      day: 7,
      title: 'Metodo de prototipado',
      context: 'Tienes el concepto definido. Ahora necesitas convertirlo en un prototipo funcional antes de invertir en produccion masiva.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Cocina experimental interna',
          description: 'Montar un mini-laboratorio en el local para iterar recetas rapido con el chef principal.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones cede espacio y equipos para el laboratorio temporal', bsc: { bsc_internal: -1 }, cost: 300000 }
          ],
          tags: ['prototipo', 'interno', 'iteracion-rapida'],
          next: 'inn_04',
          feedback: 'Un laboratorio interno permite iterar rapido y mantener secreto el concepto. La desventaja es que el equipo puede caer en sesgo de confirmacion al probar sus propias creaciones.',
          narrative: 'En 5 dias el chef produce 12 variaciones. Se eliminan 8 por costo o complejidad. Las 4 finalistas pasan a pruebas con clientes.'
        },
        {
          id: 'B',
          label: 'Co-creacion con estudiantes del SENA',
          description: 'Alianza con el programa de gastronomia del SENA Pereira para desarrollar recetas conjuntas.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'RRHH identifica 2 aprendices SENA como posibles contrataciones', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['alianza', 'sena', 'co-creacion'],
          next: 'inn_04',
          feedback: 'La co-creacion con instituciones educativas reduce costos y aporta perspectivas frescas. Ademas genera goodwill institucional. El riesgo es menor control sobre tiempos y confidencialidad.',
          narrative: 'Quince aprendices del SENA trabajan una semana en 6 propuestas. Dos recetas son brillantes y usan tecnicas que tu chef no conocia. Bonus: la alianza sale en el periodico local.'
        },
        {
          id: 'C',
          label: 'Prototipo digital primero (mockups + costeo)',
          description: 'Antes de cocinar, modelar cada receta en Excel con costeo por ingrediente y simulacion de margen.',
          cost: 1000000,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Finanzas recibe modelo de costeo por receta para proyecciones', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['costeo', 'analisis', 'bajo-riesgo'],
          next: 'inn_04',
          feedback: 'Modelar antes de cocinar evita desperdiciar ingredientes en recetas inviables economicamente. Es eficiente pero no reemplaza la prueba sensorial — un plato rentable puede saber terrible.',
          narrative: 'El modelo elimina 3 de 6 conceptos por margen insuficiente antes de gastar un peso en ingredientes. Ahorro estimado: $2M en prototipos fallidos.'
        },
        {
          id: 'D',
          label: 'Dark kitchen temporal para pruebas',
          description: 'Alquilar cocina compartida en la zona industrial para probar sin afectar operacion del local.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones no se ve afectada por pruebas de I+D', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['dark-kitchen', 'independiente', 'profesional'],
          next: 'inn_04',
          feedback: 'Una dark kitchen separada no interrumpe las operaciones diarias. Es profesional pero costoso para un presupuesto ajustado de $50M. Mejor para cadenas con mayor capital.',
          narrative: 'La cocina alquilada permite experimentar 10 horas diarias sin restricciones. Se producen prototipos de calidad profesional listos para testeo con clientes.'
        }
      ]
    },

    // --- DIA 10: Testeo con clientes ---
    'inn_04': {
      day: 10,
      title: 'Testeo con clientes',
      context: 'Los prototipos estan listos. Necesitas retroalimentacion real de consumidores antes de invertir en lanzamiento.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Degustacion gratuita en la UTP',
          description: 'Stand en la plazoleta de la UTP un viernes con 200 muestras gratis y encuesta de 3 preguntas.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Degustacion genera contenido organico en redes estudiantiles', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['degustacion', 'universidad', 'feedback-directo'],
          next: 'inn_05',
          feedback: 'Las degustaciones en universidades dan feedback inmediato del segmento joven y generan awareness gratis. El sesgo: "gratis" siempre sabe mejor — las calificaciones tienden a ser infladas.',
          narrative: 'Se agotan las 200 muestras en 45 minutos. Rating promedio: 4.3/5. El 78% dice que lo compraria. Pero tu chef advierte: "Gratis todo gusta, la pregunta es si pagan $18.000".'
        },
        {
          id: 'B',
          label: 'Pop-up en centro comercial',
          description: 'Kiosco temporal por 2 dias en Victoria Plaza vendiendo a precio real y midiendo conversion.',
          cost: 5500000,
          revenue: 1800000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Pop-up genera reconocimiento de marca en publico general', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Finanzas recibe datos de willingness-to-pay reales', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['pop-up', 'precio-real', 'validacion'],
          next: 'inn_05',
          feedback: 'Vender a precio real es la unica forma de validar disposicion de pago verdadera. El costo es alto pero los datos son los mas confiables para decidir el lanzamiento.',
          narrative: 'Se venden 127 unidades en 2 dias a precio completo. Conversion del 23% de personas que se acercan. Dato clave: el ticket promedio sube a $24.000 cuando agregan bebida.'
        },
        {
          id: 'C',
          label: 'Beta cerrada con influencers locales',
          description: 'Invitar a 10 foodies de Pereira a cena privada y pedirles resena honesta en Instagram.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing obtiene 10 resenas de influencers para campana de lanzamiento', bsc: { bsc_customer: 5 }, cost: 0 }
          ],
          tags: ['influencers', 'redes-sociales', 'pr'],
          next: 'inn_05',
          feedback: 'Los influencers amplifican el mensaje pero su feedback puede no ser representativo del consumidor promedio. Util para generar expectativa, no tanto para validar producto.',
          narrative: 'Ocho de diez publican stories. Alcance combinado: 45.000 personas en Pereira. Tres piden volver a comprar. Un influencer critica el precio y genera debate en comentarios.'
        },
        {
          id: 'D',
          label: 'A/B testing en delivery',
          description: 'Lanzar dos versiones del producto en Rappi durante una semana y comparar ventas y calificaciones.',
          cost: 4000000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones prueba el flujo de preparacion a escala de delivery', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['ab-testing', 'delivery', 'datos'],
          next: 'inn_05',
          feedback: 'El A/B testing en plataformas reales da datos objetivos de preferencia con muestra significativa. Genera ingresos durante la prueba. El riesgo: lanzar algo mediocre en una plataforma publica.',
          narrative: 'Version A (clasica) vende 89 unidades, version B (premium) vende 64 pero con rating de 4.7 vs 4.1. La version B tiene 40% mas recompra. Datos claros para la decision.'
        }
      ]
    },

    // ============================================================
    //  FASE 3 - TECNOLOGIA Y OPERACIONES (Dias 12-18)
    // ============================================================

    // --- DIA 12: Tecnologia de cocina (BINARIO) ---
    'inn_05': {
      day: 12,
      title: 'Inversion en tecnologia de cocina',
      context: 'La competencia usa cocinas tradicionales. Tienes la opcion de invertir en equipos de tecnologia avanzada para la preparacion.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Si, invertir en horno combi inteligente',
          description: 'Horno combi con control digital que reduce tiempos 40% y estandariza calidad automaticamente.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones recibe equipo que reduce tiempos de coccion un 40%', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'hr', message: 'RRHH debe capacitar al equipo en uso del horno combi', bsc: { bsc_learning: 2 }, cost: 500000 }
          ],
          tags: ['tecnologia', 'automatizacion', 'inversion-fuerte'],
          next: 'inn_06',
          feedback: 'La tecnologia de cocina reduce variabilidad humana y acelera produccion. Es una ventaja competitiva duradera, pero compromete gran parte del presupuesto. En operaciones, la estandarizacion es clave para escalar.',
          narrative: 'El horno combi llega de Bogota en 5 dias. Despues de calibracion, los tiempos de coccion bajan de 15 a 9 minutos. El chef dice que la calidad es identica en cada lote.'
        },
        {
          id: 'B',
          label: 'No, mantener cocina convencional',
          description: 'Conservar los equipos actuales y destinar ese presupuesto a otras iniciativas de I+D.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['conservador', 'ahorro', 'manual'],
          next: 'inn_06',
          feedback: 'No invertir preserva presupuesto para otras areas pero mantiene la dependencia del factor humano en cocina. La calidad variara segun quien cocine y en que turno. A veces lo mejor es no gastar.',
          narrative: 'Guardas $12M para otras iniciativas. El equipo de cocina sigue con los metodos de siempre. Funciona, pero el chef senior avisa que en hora pico la calidad baja por la presion.'
        }
      ]
    },

    // --- DIA 15: App movil y experiencia digital ---
    'inn_06': {
      day: 15,
      title: 'App movil y experiencia digital',
      context: 'El 82% de tus clientes potenciales usa smartphone. Debes decidir como integrar la tecnologia en la experiencia del cliente.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'App propia con programa de lealtad',
          description: 'Desarrollo de app nativa con pedidos, puntos de fidelidad y notificaciones push personalizadas.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing obtiene canal directo de comunicacion con clientes via push', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'finance', message: 'Finanzas recibe datos de frecuencia y ticket promedio por cliente', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['app', 'fidelizacion', 'datos-propios'],
          next: 'inn_07',
          feedback: 'Una app propia da control total de los datos del cliente y elimina comisiones de plataformas (que pueden ser 20-30%). El costo inicial es alto pero el retorno a mediano plazo es significativo.',
          narrative: 'Un desarrollador freelance de la UTP entrega MVP en 3 semanas. La app permite pedir, acumular "cafepuntos" y recibir ofertas. 340 descargas en la primera semana.'
        },
        {
          id: 'B',
          label: 'QR en mesa con menu digital',
          description: 'Sistema de QR donde el cliente ve el menu, personaliza su pedido y paga desde su celular.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones reduce errores de pedido con sistema digital', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['qr', 'menu-digital', 'eficiencia'],
          next: 'inn_07',
          feedback: 'El QR en mesa es economico y mejora la experiencia sin obligar al cliente a descargar nada. Reduce errores de pedido y libera meseros para atencion personalizada.',
          narrative: 'El sistema QR se implementa en 4 dias. Los errores de pedido bajan 60% y el tiempo de toma de orden pasa de 4 minutos a 45 segundos. Los meseros ahora se enfocan en atencion.'
        },
        {
          id: 'C',
          label: 'Alianza exclusiva con Rappi',
          description: 'Negociar comision preferencial del 18% con Rappi a cambio de exclusividad por 6 meses.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Rappi destaca el restaurante en su seccion de "nuevos" por 2 semanas', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['rappi', 'delivery', 'alianza'],
          next: 'inn_07',
          feedback: 'Aliarse con plataformas existentes da acceso inmediato a su base de usuarios sin invertir en tecnologia propia. El riesgo: dependencia de un tercero que controla tus datos y puede subir comisiones.',
          narrative: 'Rappi acepta el 18% (vs 25% estandar) y te ubica en su banner de "Nuevos favoritos". Las ventas por delivery arrancan desde el dia 1 sin esfuerzo tecnologico propio.'
        },
        {
          id: 'D',
          label: 'Chatbot de WhatsApp para pedidos',
          description: 'Bot automatizado en WhatsApp Business que toma pedidos y envia al sistema de cocina.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones recibe pedidos estructurados directamente del bot', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['whatsapp', 'chatbot', 'accesible'],
          next: 'inn_07',
          feedback: 'WhatsApp es la app mas usada en Colombia. Un chatbot ahi encuentra al cliente donde ya esta, sin obligarlo a descargar nada nuevo. Bajo costo y alta adopcion, pero funcionalidad limitada.',
          narrative: 'El bot esta listo en 1 semana. El 65% de los pedidos a domicilio llegan por WhatsApp en la primera semana. Los clientes dicen que es "como pedir por chat a un amigo".'
        }
      ]
    },

    // ============================================================
    //  FASE 4 - PIVOTEO Y EXPANSION (Dias 18-25)
    // ============================================================

    // --- DIA 18: Decision de pivoteo (BINARIO) ---
    'inn_07': {
      day: 18,
      title: 'Pivotear o mantener el rumbo',
      context: 'Los primeros resultados llegan: las ventas son aceptables pero la competencia acaba de lanzar un producto similar. Debes decidir rapido.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Pivotear: reposicionar con diferenciador unico',
          description: 'Redisenar presentacion, agregar ingrediente exclusivo y subir precio 15% para posicionar como premium.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 4, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing debe crear campana de reposicionamiento urgente', bsc: { bsc_customer: 2 }, cost: 1500000 },
            { area: 'operations', message: 'Operaciones ajusta recetas y presentacion en 48 horas', bsc: { bsc_internal: -1 }, cost: 500000 }
          ],
          tags: ['pivote', 'premium', 'diferenciacion'],
          next: 'inn_08',
          feedback: 'Pivotar rapido es una habilidad critica en innovacion. Los mejores productos no son los primeros sino los que mejor se adaptan. Eric Ries (Lean Startup) llama a esto "pivote validado".',
          narrative: 'En 3 dias el producto se transforma: nueva presentacion en caja craft, salsa secreta exclusiva y precio de $21.000. Los clientes perciben mas valor y la competencia queda atras en posicionamiento.'
        },
        {
          id: 'B',
          label: 'Mantener rumbo: competir en ejecucion',
          description: 'No cambiar el producto sino mejorar velocidad, servicio y consistencia para ganar por experiencia.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones se enfoca en reducir tiempo de servicio a 8 minutos', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['ejecucion', 'eficiencia', 'consistencia'],
          next: 'inn_08',
          feedback: 'A veces la mejor estrategia no es innovar el producto sino perfeccionar la ejecucion. Amazon no invento el e-commerce pero lo ejecuto mejor que todos. La consistencia genera confianza.',
          narrative: 'El equipo se enfoca en que cada plato salga identico, caliente y en menos de 8 minutos. En una semana las resenas en Google suben de 3.9 a 4.4 estrellas solo por consistencia.'
        }
      ]
    },

    // --- DIA 20: Linea de productos (MULTI) ---
    'inn_08': {
      day: 20,
      title: 'Expansion de linea de productos',
      context: 'El producto estrella funciona. Ahora debes decidir como expandir la oferta para capturar mas momentos de consumo.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Menu de desayunos (6am-10am)',
          description: 'Calentado pereirano, huevos al gusto y cafe de origen para capturar la manana.',
          cost: 3500000,
          revenue: 1200000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones debe cubrir turno de 5:30am para prep de desayunos', bsc: { bsc_internal: -1 }, cost: 800000 },
            { area: 'hr', message: 'RRHH necesita contratar personal para turno de apertura', bsc: { bsc_learning: 1 }, cost: 600000 }
          ],
          tags: ['desayunos', 'nuevo-horario', 'cafe'],
          feedback: 'Agregar horario de desayuno maximiza el uso de la infraestructura existente. El local esta vacio de 6 a 11am — son costos fijos desperdiciados. El riesgo: fatiga operativa del equipo.',
          next: 'inn_09'
        },
        {
          id: 'B',
          label: 'Linea para ninos',
          description: 'Mini-combos con juguete coleccionable y nombres divertidos para atraer familias.',
          cost: 2500000,
          revenue: 800000,
          bsc: { bsc_financial: 2, bsc_customer: 5, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing obtiene linea infantil para campanas en colegios', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['infantil', 'familias', 'coleccionables'],
          feedback: 'El menu infantil no genera grandes margenes directos pero atrae familias completas. Un nino feliz trae 2 adultos que piden platos de mayor margen. Es una estrategia de "loss leader".',
          next: 'inn_09'
        },
        {
          id: 'C',
          label: 'Snacks para llevar (grab & go)',
          description: 'Empanadas gourmet, wraps y jugos en empaque portatil para clientes con prisa.',
          cost: 2000000,
          revenue: 1500000,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones necesita vitrina caliente y empaques biodegradables', bsc: { bsc_internal: 2 }, cost: 400000 }
          ],
          tags: ['grab-and-go', 'rapido', 'margen-alto'],
          feedback: 'El grab & go captura al cliente que no tiene tiempo de sentarse — un segmento enorme en zonas comerciales. Requiere empaques de calidad porque el producto viaja. Margen excelente por simplicidad.',
          next: 'inn_09'
        },
        {
          id: 'D',
          label: 'Catering para empresas',
          description: 'Paquetes de almuerzos corporativos para oficinas del centro y Cerritos Business.',
          cost: 4000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Finanzas estructura contratos mensuales con empresas para flujo estable', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['corporativo', 'b2b', 'contratos'],
          feedback: 'El catering corporativo genera ingresos predecibles y recurrentes (contratos mensuales). Es el opuesto al retail: menos margen por unidad pero volumen garantizado y flujo de caja estable.',
          next: 'inn_09'
        }
      ]
    },

    // --- DIA 22: Analitica de datos ---
    'inn_09': {
      day: 22,
      title: 'Analitica de datos para decisiones',
      context: 'Llevas 3 semanas operando y tienes datos de ventas, clientes y operacion. Debes decidir como usarlos para optimizar.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Dashboard de KPIs en tiempo real',
          description: 'Implementar Power BI con metricas clave: ticket promedio, rotacion, margen por producto y hora.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Finanzas obtiene dashboard de rentabilidad por producto y franja horaria', bsc: { bsc_financial: 4 }, cost: 0 },
            { area: 'operations', message: 'Operaciones visualiza cuellos de botella en tiempo real', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['analytics', 'power-bi', 'kpis'],
          next: 'inn_10',
          feedback: 'Un dashboard de KPIs transforma datos crudos en decisiones accionables. Lo que no se mide no se mejora. Power BI democratiza el acceso a la informacion para todos los niveles del equipo.',
          narrative: 'El dashboard revela que el 35% de las ganancias vienen de solo 3 productos y que los viernes de 7-9pm el local esta al 120% de capacidad pero los martes a las 3pm al 15%.'
        },
        {
          id: 'B',
          label: 'Modelo predictivo de demanda',
          description: 'Algoritmo en Python que predice ventas por dia y hora para optimizar compras e inventario.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones reduce desperdicio de alimentos un 25% con predicciones', bsc: { bsc_internal: 4, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['prediccion', 'python', 'inventario'],
          next: 'inn_10',
          feedback: 'La prediccion de demanda es una de las aplicaciones mas rentables de analitica en restaurantes. Reducir desperdicio un 25% puede ahorrar millones al ano. Es literalmente el tema de esta materia aplicado.',
          narrative: 'El modelo, entrenado con 3 semanas de datos y clima de Pereira, predice con 78% de precision. El desperdicio de pollo baja de 12% a 4%. Ahorro mensual estimado: $1.8M.'
        },
        {
          id: 'C',
          label: 'Encuesta NPS automatizada post-compra',
          description: 'SMS automatico despues de cada compra preguntando "¿nos recomendarias?" con escala 1-10.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing usa promotores (NPS 9-10) para programa de referidos', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['nps', 'satisfaccion', 'automatizacion'],
          next: 'inn_10',
          feedback: 'El NPS (Net Promoter Score) es simple pero poderoso: una sola pregunta que predice crecimiento. Las empresas con NPS alto crecen 2x mas rapido. Automatizarlo asegura medicion constante.',
          narrative: 'Tasa de respuesta del 31% — excelente para SMS. NPS de 42 (bueno para restaurante nuevo). Los detractores mencionan precios y tiempo de espera. Los promotores destacan sabor y atencion.'
        },
        {
          id: 'D',
          label: 'Analisis de canasta (market basket)',
          description: 'Estudiar que productos se compran juntos para crear combos inteligentes y sugerencias.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing crea combos basados en datos reales de compra conjunta', bsc: { bsc_customer: 2, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['market-basket', 'combos', 'cross-selling'],
          next: 'inn_10',
          feedback: 'El analisis de canasta revela patrones ocultos: si el 70% de quienes compran hamburguesa tambien piden malteada, un combo con descuento leve aumenta ticket promedio sin esfuerzo. Amazon usa esto a escala masiva.',
          narrative: 'Descubrimiento clave: el 73% de clientes que piden el bowl tambien piden limonada. Se crea combo "Bowl + Limonada" con 8% de descuento. Ticket promedio sube $3.200 en una semana.'
        }
      ]
    },

    // --- DIA 25: Hoja de ruta futura (MULTI) ---
    'inn_10': {
      day: 25,
      title: 'Hoja de ruta de innovacion futura',
      context: 'Ultimo dia de planeacion de I+D. Debes definir las apuestas estrategicas para los proximos meses de la cadena.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Segundo local en Dosquebradas',
          description: 'Expandir con un local mas pequeno y eficiente cerca al centro comercial El Progreso.',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Finanzas proyecta punto de equilibrio del segundo local en 4 meses', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'hr', message: 'RRHH inicia busqueda de administrador para sucursal Dosquebradas', bsc: { bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['expansion', 'dosquebradas', 'crecimiento'],
          feedback: 'La expansion geografica es el camino clasico de crecimiento. Dosquebradas complementa a Pereira sin canibalizar ventas. El riesgo: duplicar la complejidad operativa antes de dominar el primer local.',
          next: null
        },
        {
          id: 'B',
          label: 'Franquicia como modelo de escala',
          description: 'Documentar procesos y crear manual de franquicia para vender derechos de marca a inversionistas.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Operaciones documenta todos los procesos para replicabilidad', bsc: { bsc_internal: 5 }, cost: 0 }
          ],
          tags: ['franquicia', 'escalabilidad', 'documentacion'],
          feedback: 'Las franquicias permiten crecer con capital de terceros, pero requieren procesos impecablemente documentados. Si tu operacion no es replicable sin ti, no esta lista para franquiciar.',
          next: null
        },
        {
          id: 'C',
          label: 'Marca propia en supermercados',
          description: 'Desarrollar salsas y aderezos empacados para vender en Ara, D1 y tiendas locales.',
          cost: 4500000,
          revenue: 2500000,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Marketing posiciona la marca en el canal retail con empaques premium', bsc: { bsc_customer: 3 }, cost: 800000 }
          ],
          tags: ['retail', 'marca-propia', 'salsas'],
          feedback: 'Llevar productos al retail crea un nuevo canal de ingresos y refuerza la marca fuera del restaurante. El margen es menor que en local pero el volumen potencial es enorme. Cocacola empezo asi.',
          next: null
        },
        {
          id: 'D',
          label: 'Laboratorio de innovacion permanente',
          description: 'Destinar 5% de ingresos mensuales a probar 2 productos nuevos cada mes y medir resultados.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'RRHH estructura rol de "Chef de Innovacion" dentro del equipo', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['innovacion-continua', 'laboratorio', 'cultura'],
          feedback: 'Google dedica 20% del tiempo a proyectos experimentales — de ahi salieron Gmail y Maps. Un laboratorio permanente convierte la innovacion en habito, no en evento. Es la inversion mas estrategica a largo plazo.',
          next: null
        }
      ]
    }

  }
};
