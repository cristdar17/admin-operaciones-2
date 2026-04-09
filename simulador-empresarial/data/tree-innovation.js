/* ============================================================
   TREE-INNOVATION - Arbol de decisiones del area de I+D
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto del area: $50.000.000 COP
   ~20 nodos de decision | Dias 2-45
   ============================================================ */

window.TREE_INNOVATION = {
  name: 'I+D',
  icon: '💡',
  color: '#FFD60A',
  startNode: 'inn_01',
  nodes: {

    // ============================================================
    //  FASE 1 - INVESTIGACION Y DESCUBRIMIENTO (Dias 3-12)
    // ============================================================

    // --- DIA 3: Enfoque de investigacion de mercado ---
    'inn_01': {
      day: 3,
      title: 'Metodo de investigacion de mercado',
      context: 'Antes de innovar hay que entender al consumidor pereirano. I+D tiene $50M COP de presupuesto total — el mas ajustado de todas las areas — y cada peso debe generar conocimiento accionable. El mercado de comida rapida en Pereira esta dominado por marcas nacionales (El Corral, Presto, Frisby) y locales informales (asaderos, empanaderias). Necesitas datos reales para encontrar oportunidades de diferenciacion. ¿Como investigas?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Encuestas digitales masivas',
          description: 'Disenar un formulario en Google Forms con 15 preguntas sobre habitos alimenticios, presupuesto semanal en comida rapida, y preferencias. Distribuirlo via WhatsApp en grupos de la UTP, UCPR, universidades locales, y barrios clave. Meta: 500 respuestas en 5 dias. Costo bajo pero datos superficiales.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'I+D comparte base de datos de 500 encuestados con Marketing para segmentacion', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['encuestas', 'digital', 'datos-cuantitativos', 'bajo-costo'],
          next: 'inn_02',
          narrative: 'El formulario se viraliza en grupos de WhatsApp universitarios. En 4 dias llegan 620 respuestas. Los datos revelan que el 68% de los jovenes pereiranos quiere opciones mas saludables en comida rapida, y el 42% pagaria hasta $5.000 extra por un plato con ingredientes locales premium. El problema: las respuestas escritas son genericas — "quiero algo rico y barato" no dice mucho. Pero el volumen de datos permite hacer cruces estadisticos interesantes.'
        },
        {
          id: 'B',
          label: 'Focus groups presenciales',
          description: 'Organizar 3 sesiones de 2 horas con 8-10 personas cada una: una con universitarios (18-24), otra con familias (30-45), y otra con oficinistas del centro. Refrigerio incluido, moderador profesional. Costo mayor pero insights profundos con lenguaje corporal y emociones.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Focus groups revelan lenguaje y emociones del consumidor para copy publicitario', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'I+D necesita que RRHH coordine reclutamiento de participantes para focus groups', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['focus-group', 'cualitativo', 'insights-profundos'],
          next: 'inn_02',
          narrative: 'La primera sesion con universitarios es reveladora: no solo quieren comida rapida, quieren "experiencias compartibles" — platos que se vean bien en Instagram. Las familias priorizan porciones generosas y precio justo. Los oficinistas quieren rapidez real: menos de 7 minutos de espera. El moderador captura frases clave y emociones que ningun formulario digital detectaria. Tres perfiles de cliente emergen con nitidez.'
        },
        {
          id: 'C',
          label: 'Analitica de datos con web scraping',
          description: 'Contratar un analista freelance de Manizales para hacer scraping de resenas en Google Maps, Rappi, e Instagram de los 20 restaurantes de comida rapida mas populares de Pereira. Analisis de sentimiento con Python, identificacion de quejas frecuentes y atributos valorados. Datos reales, no opiniones dirigidas.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 4, bsc_internal: 3, bsc_learning: 7 },
          crossEffects: [
            { area: 'marketing', message: 'I+D entrega mapa de sentimiento de competidores, util para posicionamiento', bsc: { bsc_customer: 4, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['data-analytics', 'scraping', 'competencia', 'tecnologia'],
          next: 'inn_02',
          narrative: 'El analista entrega un informe devastador en 6 dias: 2.300 resenas analizadas. Los hallazgos clave: el 31% de las quejas son por tiempos de espera, el 22% por porciones pequenas, y el 18% por falta de opciones saludables. Frisby lidera en satisfaccion por consistencia; los asaderos locales lideran en sabor pero pierden en higiene. El mapa de oportunidades es claro: quien combine sabor local con rapidez y buena presentacion gana.'
        },
        {
          id: 'D',
          label: 'Observacion etnografica en campo',
          description: 'El equipo de I+D (3 personas) pasa 5 dias comiendo en restaurantes de la competencia, observando clientes en plazoletas del Victoria, Parque Arboleda, y el centro. Registran: que piden, cuanto esperan, como reaccionan, con quien van, y que dejan en el plato. Metodo antropologico aplicado al fast food.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 1, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Observacion en campo revela tiempos de espera y flujos de servicio de la competencia', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['etnografia', 'observacion', 'campo', 'competencia'],
          next: 'inn_02',
          narrative: 'Cinco dias inmersos en plazoletas y restaurantes producen 47 paginas de notas. Los descubrimientos mas valiosos son los que nadie preguntaria en una encuesta: los grupos de amigos SIEMPRE piden cosas diferentes (oportunidad para combos personalizables), las familias dominicales llevan ninos que no comen lo que piden los adultos (oportunidad para menu infantil), y los oficinistas a las 12:30pm estan tan apurados que abandonan la fila si hay mas de 5 personas (oportunidad para pre-pedido digital).'
        }
      ]
    },

    // --- DIA 6: Concepto de nuevo producto ---
    'inn_02': {
      day: 6,
      title: 'Concepto de nuevo producto estrella',
      context: 'Con los hallazgos de la investigacion, I+D debe definir un producto bandera que diferencie la cadena de la competencia. El producto debe ser escalable (produccion masiva en cocina), rentable (margen minimo del 55%), y conectado con la identidad pereirana. Recordar: el punto de equilibrio del restaurante depende del ticket promedio y el margen de contribucion de cada plato. Un producto estrella exitoso puede reducir el punto de equilibrio en un 15-20%.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'La Burger Cafetera',
          description: 'Hamburguesa premium con carne de res 200g marinada en reduccion de cafe de origen (Chinchina), queso paipa artesanal, cebolla caramelizada con panela, y salsa de aguacate hass del Quindio. Pan brioche horneado in-house. Ticket: $24.000. Margen: 58%. Apuesta por lo premium-local.',
          cost: 5000000,
          revenue: 3500000,
          bsc: { bsc_financial: 3, bsc_customer: 5, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Nuevo producto requiere estacion de marinado y reduccion de cafe en cocina', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'logistics', message: 'Se necesita proveedor de cafe de origen y queso paipa artesanal', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['burger', 'premium', 'cafe', 'identidad-local'],
          next: 'inn_03',
          narrative: 'El equipo de cocina prepara los primeros 20 prototipos. La reduccion de cafe le da un sabor ahumado-dulce unico que nadie tiene en Pereira. El queso paipa se derrite perfecto sobre la carne caliente. El costo de insumos es $10.100 por unidad, dejando un margen de contribucion de $13.900 (58%). Si venden 100 al dia, contribuyen $1.39M diarios al margen. El punto de equilibrio se puede recalcular incluyendo este producto estrella.'
        },
        {
          id: 'B',
          label: 'Wrap Tropical Fit',
          description: 'Wrap saludable con pollo a la plancha, mango verde, lechuga crespa, semillas de chia, y aderezo de maracuya. Tortilla de harina integral. Ticket: $16.000. Margen: 62%. Apunta al segmento fitness y universitario saludable que crecio 300% post-pandemia en Pereira.',
          cost: 3500000,
          revenue: 2000000,
          bsc: { bsc_financial: 4, bsc_customer: 4, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Wraps saludables son mas rapidos de preparar: 4 min vs 7 min de hamburguesas', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Concepto "fit" facilita posicionamiento diferenciado en redes sociales', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['wrap', 'saludable', 'fitness', 'universitarios'],
          next: 'inn_03',
          narrative: 'El prototipo sorprende: la combinacion de mango verde con maracuya crea un perfil acido-dulce adictivo. El costo unitario es solo $6.080, dejando un margen de $9.920 por unidad (62%). Ademas, la preparacion tarda 4 minutos — casi la mitad que una hamburguesa. Desde la perspectiva de operaciones, es un producto de alto throughput. El desafio: ¿los pereiranos estan listos para pagar $16.000 por un wrap saludable en vez de una hamburguesa con queso?'
        },
        {
          id: 'C',
          label: 'Arepa Gourmet Rellena XL',
          description: 'Arepa de maiz pelao (tradicion paisa) de 250g rellena con opciones: carne desmechada con hogao, pollo en salsa de champiñones, o chicharron con guacamole. Acompanada de limonada de panela. Ticket: $14.000. Margen: 65%. Producto ultra-local, bajo costo, alto volumen.',
          cost: 2500000,
          revenue: 1500000,
          bsc: { bsc_financial: 5, bsc_customer: 3, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Arepas requieren plancha adicional pero el proceso es simple y escalable', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'logistics', message: 'Insumos 100% locales: cadena de suministro corta y economica', bsc: { bsc_internal: 3, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['arepa', 'tradicion', 'alto-margen', 'volumen'],
          next: 'inn_03',
          narrative: 'La arepa de maiz pelao es puro ADN paisa. El costo unitario es ridiculamente bajo: $4.900, dejando $9.100 de margen (65%). El throughput es altisimo: una plancha doble produce 40 arepas por hora. Desde el punto de vista del punto de equilibrio, este producto es una maquina de contribucion marginal. La duda: ¿un producto tan "de calle" puede venderse a $14.000 en un restaurante de cadena? El empaque y la experiencia seran clave.'
        },
        {
          id: 'D',
          label: 'Bowl Fusión Eje Cafetero',
          description: 'Bowl con base de arroz de coco, proteina a elegir (pollo teriyaki con panela o cerdo en reduccion de lulo), toppings de platano maduro, frijol rojo, aguacate, y crujiente de yuca. Concepto global (poke bowl) con sabor 100% cafetero. Ticket: $20.000. Margen: 57%.',
          cost: 4500000,
          revenue: 2500000,
          bsc: { bsc_financial: 2, bsc_customer: 5, bsc_internal: 1, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Bowls requieren linea de ensamblaje tipo Subway — reorganizar flujo de cocina', bsc: { bsc_internal: -3 }, cost: 0 },
            { area: 'marketing', message: 'Concepto fusion es altamente "instagrameable" — potencial viral', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['bowl', 'fusion', 'instagrameable', 'tendencia'],
          next: 'inn_03',
          narrative: 'El primer prototipo es una obra de arte: colores vibrantes, texturas variadas, aromas que mezclan coco con lulo. El costo unitario es $8.600 con margen de $11.400 (57%). El problema operativo: ensamblar un bowl con 7 ingredientes toma 6 minutos y requiere una estacion dedicada tipo linea de ensamblaje. Es mas complejo que una hamburguesa pero el wow visual compensa. Los primeros que lo prueban exclaman: "esto hay que subirlo a Instagram YA".'
        }
      ]
    },

    // --- DIA 9: Metodo de desarrollo de prototipo ---
    'inn_03': {
      day: 9,
      title: 'Desarrollo del prototipo final',
      context: 'El concepto de producto esta definido. Ahora hay que perfeccionar la receta y estandarizar el proceso de produccion. En operaciones esto se llama "diseño de proceso": definir cada paso, tiempo, temperatura, cantidad exacta de cada ingrediente, y el flujo de trabajo en la cocina. Un buen estandar garantiza que el plato #500 sea identico al plato #1. Presupuesto restante de I+D: entre $40M y $47M segun decisiones anteriores.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Iteracion rapida tipo Lean Startup',
          description: 'Producir 5 versiones del plato en 3 dias, cada una con variaciones minimas (mas sal, menos salsa, pan diferente). Probar internamente con el equipo. Elegir la mejor version y documentar la receta estandar. Rapido y barato, pero sin validacion del cliente real.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'I+D entrega receta estandarizada con tiempos y cantidades exactas para la cocina', bsc: { bsc_internal: 4 }, cost: 0 }
          ],
          tags: ['lean-startup', 'iteracion', 'mvp', 'rapido'],
          next: 'inn_04',
          narrative: 'En 3 dias intensos, el equipo de cocina prepara 5 variantes. La version 3 gana por unanimidad: el balance de sabores es perfecto y el tiempo de preparacion se reduce a 5.2 minutos. Se documentan las cantidades al gramo, las temperaturas al grado, y los tiempos al segundo. La receta estandar queda lista, pero una vocecita dice: "¿le gustara al cliente o solo a nosotros?".'
        },
        {
          id: 'B',
          label: 'Cocina experimental con chef consultor',
          description: 'Contratar al Chef Alejandro Gutierrez (reconocido en Pereira por su restaurante de autor) como consultor por 5 dias. El ajusta sabores, tecnicas, y presentacion a nivel profesional. Costo alto, pero el producto alcanza calidad de restaurante gourmet.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Chef consultor capacita al equipo de cocina en tecnicas avanzadas', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'operations', message: 'Receta perfeccionada por chef consultor — complejidad alta pero calidad superior', bsc: { bsc_internal: 2, bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['chef', 'consultor', 'gourmet', 'calidad-premium'],
          next: 'inn_04',
          narrative: 'El Chef Gutierrez llega y en 20 minutos cambia todo: "El fuego esta muy alto, por eso pierden jugosidad. Y esa salsa necesita reducirse 3 minutos mas." En 5 dias transforma el prototipo de "bueno" a "extraordinario". Ademas, capacita al equipo en tecnicas que elevan toda la produccion. La receta final tiene 23 pasos detallados con fotos. El costo fue alto pero el equipo ahora sabe cosas que no ensenan en ningun SENA.'
        },
        {
          id: 'C',
          label: 'Co-creacion con clientes piloto',
          description: 'Invitar a 15 clientes objetivo (seleccionados de la investigacion previa) a 2 sesiones de co-creacion. Ellos prueban variantes, sugieren cambios, y votan. El producto final lleva el ADN del consumidor. Costo moderado, validacion real incluida.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 6, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: '15 clientes piloto se convierten en embajadores naturales del nuevo producto', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['co-creacion', 'clientes', 'validacion', 'participativo'],
          next: 'inn_04',
          narrative: 'La primera sesion es caotica — 15 personas opinando sobre sal, salsa, y tamaño — pero la segunda es magica. Los clientes no solo eligen la mejor version, sino que sugieren un cambio que nadie habia pensado: agregar un toque de limon al final. Lo prueban y... "¡ESO! Asi sabe a Pereira." El producto final tiene co-autores reales que ya estan contandole a todo el mundo. Marketing observa asombrado como se crean embajadores de marca sin gastar un peso en pauta.'
        }
      ]
    },

    // --- DIA 12: Estrategia de prueba con clientes ---
    'inn_04': {
      day: 12,
      title: 'Prueba de producto con clientes',
      context: 'El prototipo esta listo. Ahora viene la validacion real: poner el producto frente a clientes que pagan. En administracion de operaciones, esta etapa es critica porque conecta I+D con la capacidad productiva. Si la prueba genera demanda que la cocina no puede atender, hay un problema de capacidad. Si nadie lo pide, hay un problema de mercado. ¿Como estructurar la prueba?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Soft launch en punto de venta principal',
          description: 'Lanzar el producto como "edicion especial limitada" solo en el punto de venta principal durante 7 dias. Produccion controlada: maximo 80 unidades/dia. Medir: unidades vendidas, tasa de recompra, comentarios, y tiempo de preparacion real en cocina bajo presion.',
          cost: 3000000,
          revenue: 5500000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Prueba de producto en cocina real — medicion de tiempos y cuellos de botella', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Lanzamiento limitado genera FOMO y contenido organico en redes', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['soft-launch', 'edicion-limitada', 'validacion-real'],
          next: 'inn_05',
          narrative: 'El letrero dice "Nuevo — Solo 80 unidades hoy" y funciona como imán. El primer dia se agotan las 80 unidades a las 2:30pm. El segundo dia los clientes llegan mas temprano. Para el quinto dia hay lista de espera. Los datos son claros: demanda real confirmada, tiempo de preparacion 5.8 min promedio (aceptable), y tasa de recompra del 40%. Operaciones reporta que la estacion necesita un ajuste menor para escalar a 150/dia sin trauma.'
        },
        {
          id: 'B',
          label: 'Evento de degustacion masiva en universidad',
          description: 'Montar un stand de degustacion gratuita en la UTP (Universidad Tecnologica de Pereira) durante 2 dias. Entregar 300 muestras con encuesta de satisfaccion inmediata (QR). Generar awareness y datos, pero sin medir disposicion real a pagar.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 1, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Degustacion en UTP genera 300 contactos y contenido viral entre universitarios', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'hr', message: 'Equipo de I+D y cocina trabajan fuera del restaurante — logistica especial', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['degustacion', 'universidad', 'awareness', 'muestreo'],
          next: 'inn_05',
          narrative: 'El stand en el bloque Y de la UTP atrae colas de 20 personas desde las 10am. Las 300 muestras se acaban en 4 horas. Los codigos QR de la encuesta registran 247 respuestas: 89% califica el sabor 4 o 5 estrellas, y 73% dice que lo compraria por $14.000-$20.000. Las fotos inundan las historias de Instagram. Problema: el 100% de las muestras fueron gratis — no se puede confirmar que pagarian. Pero la emocion en los rostros era genuina.'
        }
      ]
    },

    // ============================================================
    //  FASE 2 - TECNOLOGIA E INNOVACION DE PROCESOS (Dias 15-24)
    // ============================================================

    // --- DIA 15: Tecnologia de cocina ---
    'inn_05': {
      day: 15,
      title: 'Tecnologia para la cocina',
      context: 'La operacion esta en marcha y el producto nuevo muestra traccion. Ahora I+D debe decidir que tecnologia implementar en la cocina para mejorar eficiencia, consistencia, y escala. En Administracion de Operaciones, la tecnologia de proceso impacta directamente la capacidad instalada, la tasa de defectos, y el costo unitario. El presupuesto de I+D restante oscila entre $32M y $42M segun decisiones previas.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Automatizacion con equipos inteligentes',
          description: 'Invertir en una freidora automatica con temporizador digital, una plancha con control de temperatura por zonas, y un dispensador de salsas calibrado. Reduce errores humanos y garantiza consistencia: cada plato sale identico. Concepto: estandarizacion de proceso productivo.',
          cost: 12000000,
          revenue: 3000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 6, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Equipos automaticos reducen tasa de defectos en cocina del 8% al 2%', bsc: { bsc_internal: 5, bsc_financial: 2 }, cost: 0 },
            { area: 'hr', message: 'Personal de cocina necesita capacitacion en equipos nuevos', bsc: { bsc_learning: 2, bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['automatizacion', 'equipos', 'consistencia', 'estandarizacion'],
          next: 'inn_06',
          narrative: 'Los equipos llegan de Bogota en 4 dias. La freidora automatica es una revelacion: programa el tiempo, la temperatura, y la cantidad de aceite — y pita cuando esta listo. La tasa de platos rechazados por mala coccion cae del 8% al 2.1%. Cada plato sale consistente: el cliente #300 recibe exactamente lo mismo que el #1. El equipo de cocina al principio desconfia ("eso no reemplaza el ojo del cocinero"), pero a la semana ya no quieren volver a lo manual.'
        },
        {
          id: 'B',
          label: 'IoT y sensores de monitoreo',
          description: 'Instalar sensores de temperatura en neveras y equipos de coccion, conectados a una tablet central. Dashboard en tiempo real que alerta cuando un equipo sale de rango. Monitoreo de cadena de frio 24/7. Concepto: control estadistico de procesos (SPC) aplicado a gastronomia.',
          cost: 8000000,
          revenue: 1500000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Sensores IoT detectan anomalias de temperatura antes de que danem producto', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'finance', message: 'Reduccion de merma por cadena de frio rota: ahorro estimado $2M/mes', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['iot', 'sensores', 'spc', 'cadena-frio', 'dashboard'],
          next: 'inn_06',
          narrative: 'Los 8 sensores se instalan en un dia. El dashboard en la tablet muestra temperaturas en tiempo real con semaforo verde/amarillo/rojo. A las 48 horas, el sistema lanza la primera alerta: una nevera esta subiendo de 4°C a 7°C — el compresor falla. Sin los sensores, habrian perdido $3.5M en insumos perecederos. El gerente de operaciones dice: "Esto es como tener rayos X en la cocina." El control estadistico de procesos nunca fue tan tangible.'
        },
        {
          id: 'C',
          label: 'IA para prediccion de demanda',
          description: 'Implementar un modelo simple de machine learning (regresion + estacionalidad) que prediga la demanda diaria por producto usando datos historicos de ventas, dia de la semana, clima, y eventos locales. Permite preparar la cantidad justa: ni desperdiciar ni quedarse corto. Concepto: planeacion de la produccion basada en datos.',
          cost: 9000000,
          revenue: 2500000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 4, bsc_learning: 7 },
          crossEffects: [
            { area: 'operations', message: 'Modelo de IA predice demanda diaria: produccion se ajusta automaticamente', bsc: { bsc_internal: 3, bsc_financial: 2 }, cost: 0 },
            { area: 'logistics', message: 'Prediccion de demanda mejora pedidos a proveedores: menos desperdicio', bsc: { bsc_financial: 3, bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['ia', 'machine-learning', 'prediccion', 'demanda', 'planeacion'],
          next: 'inn_06',
          narrative: 'El modelo se entrena con 30 dias de datos historicos y variables externas: dia de semana, lluvia/sol (en Pereira llueve el 60% de los dias), partidos de futbol del Pereira, y quincenas. La primera semana de prediccion es imprecisa (error del 25%), pero para la tercera semana el error baja al 9%. El resultado: se preparan 12% menos platos que se desperdiciaban, y solo el 3% de los clientes encuentra agotado un producto. Operaciones ahora planifica la produccion con un numero, no con intuicion.'
        },
        {
          id: 'D',
          label: 'Mantener cocina tradicional y capacitar',
          description: 'No invertir en tecnologia nueva. En su lugar, dedicar $4M a capacitacion intensiva del equipo existente: tecnicas de coccion profesional, organizacion de estacion (mise en place), y tiempos estandar. Filosofia: el mejor equipo es el equipo humano bien entrenado. Bajo riesgo, bajo costo, resultado dependiente de las personas.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Capacitacion profesional para cocineros — motivacion y retencion sube', bsc: { bsc_learning: 4, bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['tradicional', 'capacitacion', 'bajo-costo', 'personas'],
          next: 'inn_06',
          narrative: 'La capacitacion dura 4 dias y transforma al equipo. El chef instructor (egresado del SENA Pereira) ensena mise en place profesional: cada ingrediente pesado y listo antes de que llegue el primer cliente. Los tiempos de preparacion bajan 15% solo con mejor organizacion. No hay robots ni sensores, pero hay 8 cocineros que ahora saben exactamente que hacer y cuando. La tecnologia mas antigua del mundo — personas competentes — sigue funcionando.'
        }
      ]
    },

    // --- DIA 18: Estrategia de app movil ---
    'inn_06': {
      day: 18,
      title: 'Desarrollo de app movil',
      context: 'El 78% de los pedidos de comida rapida en Pereira pasan por canales digitales (Rappi, iFood, WhatsApp, Instagram). Tener una app propia podria reducir las comisiones del 25-30% que cobran las plataformas de delivery, y generar datos de primera mano sobre los clientes. Pero desarrollar una app cuesta tiempo y dinero. I+D debe definir la estrategia digital.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'App nativa propia con pedidos y fidelizacion',
          description: 'Contratar una empresa de desarrollo en Pereira para crear una app nativa (iOS y Android) con catalogo, pedidos, pago en linea (PSE/Nequi/Daviplata), programa de puntos, y notificaciones push. Plazo: 6 semanas. Elimina intermediarios pero requiere inversion fuerte.',
          cost: 15000000,
          revenue: 4000000,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'App propia con programa de lealtad — canal directo al cliente sin intermediarios', bsc: { bsc_customer: 5, bsc_financial: 3 }, cost: 0 },
            { area: 'logistics', message: 'App necesita integracion con sistema de despacho de domicilios', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'finance', message: 'Eliminar comisiones de Rappi (25%) en pedidos propios: ahorro potencial $5M/mes', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['app-nativa', 'fidelizacion', 'canal-directo', 'nequi'],
          next: 'inn_07',
          narrative: 'El equipo de desarrollo empieza con los wireframes. La app incluira: menu con fotos profesionales, carrito de compras, pago con Nequi y Daviplata (los metodos mas usados por jovenes en Pereira), un programa de puntos donde cada $10.000 da 1 punto y 10 puntos = combo gratis, y rastreo del pedido. El costo es alto pero el calculo es simple: si migran el 30% de los pedidos de Rappi a la app propia, ahorran $5M mensuales en comisiones. En 3 meses se paga sola.'
        },
        {
          id: 'B',
          label: 'Chatbot de WhatsApp con IA',
          description: 'Implementar un chatbot en WhatsApp Business API que recibe pedidos, confirma, y cobra via link de Nequi. Integracion con la cocina via tablet. Menor costo que una app, y aprovecha que el 95% de colombianos ya tienen WhatsApp. Sin programa de puntos.',
          cost: 6000000,
          revenue: 2000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'WhatsApp como canal de pedidos — cercano y accesible', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Pedidos llegan organizados a una tablet en cocina — reduce errores de comunicacion', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['whatsapp', 'chatbot', 'ia', 'bajo-costo', 'accesible'],
          next: 'inn_07',
          narrative: 'El chatbot entra en operacion en 10 dias. El flujo es natural: el cliente escribe "Hola" al WhatsApp del restaurante, el bot responde con el menu, el cliente escribe el numero del plato, confirma direccion, y recibe un link de Nequi para pagar. La cocina recibe el pedido formateado en una tablet. Sin app que descargar, sin registros, sin friccion. En la primera semana, 45 pedidos llegan por WhatsApp — clientes que antes llamaban y generaban errores de transcripcion.'
        },
        {
          id: 'C',
          label: 'Optimizar presencia en plataformas existentes',
          description: 'No desarrollar canal propio. Invertir $5M en optimizar los perfiles en Rappi, iFood, y Uber Eats: fotos profesionales, descripciones SEO, promociones exclusivas por plataforma, y respuesta a resenas. Usar los datos que las plataformas ya recolectan. Bajo riesgo, pero dependencia total de intermediarios.',
          cost: 5000000,
          revenue: 3500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Perfiles optimizados en Rappi e iFood — mejor posicion en resultados de busqueda', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Se mantienen comisiones del 25-30% en plataformas de delivery', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['rappi', 'ifood', 'plataformas', 'optimizacion', 'dependencia'],
          next: 'inn_07',
          narrative: 'Las fotos profesionales son un antes y despues: los platos pasan de verse como comida de hospital a verse como portada de revista. El posicionamiento en Rappi sube del puesto #42 al #8 en "Hamburguesas en Pereira". Las ventas por plataforma suben 35% en 2 semanas. El problema sigue: Rappi se queda con el 27% de cada venta. Cada $100.000 que entra, $27.000 se van a Silicon Valley. ¿Sostenible a largo plazo?'
        }
      ]
    },

    // --- DIA 21: Pivotar o persistir ---
    'inn_07': {
      day: 21,
      title: 'Decision critica: pivotar o persistir',
      context: 'Han pasado 3 semanas. Los datos de ventas del producto nuevo estan sobre la mesa. El producto vende, pero no al ritmo esperado: alcanza el 70% de la meta de ventas diarias. Finanzas presiona por resultados, Operaciones ya ajusto la linea para producirlo, y Marketing invirtio en comunicarlo. ¿Se mantiene la apuesta o se pivotea? En startups y desarrollo de nuevos productos, este es el momento mas dificil: el "valley of death" entre la idea y la traccion real.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Persistir y optimizar',
          description: 'Mantener el producto y hacer ajustes: reducir el precio 10% por 2 semanas, agregar un "combo" con bebida incluida, y pedir a Marketing que refuerce la comunicacion. La curva de adopcion de nuevos productos es lenta: necesita tiempo para entrar en el habito del consumidor. Paciencia estrategica.',
          cost: 3000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'I+D pide reforzar comunicacion del producto nuevo — necesita mas awareness', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Reduccion temporal de precio del producto estrella: margen baja 10%', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['persistir', 'optimizar', 'paciencia', 'curva-adopcion'],
          next: 'inn_08',
          narrative: 'La decision de persistir es valiente. El combo con bebida incluida sube las ventas 25% en la primera semana. Resulta que el problema no era el producto sino el precio percibido: a los clientes les parecia caro solo (sin bebida). El combo crea una percepcion de valor superior. Para el dia 28, las ventas alcanzan el 95% de la meta original. La leccion: a veces un buen producto solo necesita un mejor "empaque comercial".'
        },
        {
          id: 'B',
          label: 'Pivotar hacia variante mas comercial',
          description: 'Modificar el producto: simplificar ingredientes (de 7 a 4), bajar el ticket un 20%, y hacerlo version "combo rapido" para almuerzo ejecutivo. Se pierde la esencia gourmet pero se gana velocidad y volumen. Concepto de operaciones: trade-off entre diferenciacion y eficiencia.',
          cost: 2500000,
          revenue: 4000000,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Producto simplificado: menos ingredientes, mas velocidad de produccion', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Reposicionar producto como "almuerzo ejecutivo rapido" — cambio de comunicacion', bsc: { bsc_customer: -1, bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['pivotar', 'simplificar', 'volumen', 'trade-off'],
          next: 'inn_08',
          narrative: 'El pivot es doloroso pero necesario. La version simplificada pierde el "wow" visual pero gana en algo critico: se prepara en 3.5 minutos (vs 5.8 del original) y cuesta $3.000 menos. El nuevo posicionamiento como "almuerzo ejecutivo" conecta con oficinistas del centro que tienen 30 minutos de almuerzo. Las ventas del formato rapido superan la meta en la primera semana. El trade-off queda claro: se perdio exclusividad pero se gano mercado.'
        }
      ]
    },

    // --- DIA 24: Propiedad intelectual y secretos comerciales ---
    'inn_08': {
      day: 24,
      title: 'Proteccion de la innovacion',
      context: 'El producto esta funcionando y la competencia empieza a notarlo. Un empleado de Frisby fue visto almorzando en el restaurante y tomando fotos del menu. En Colombia, la propiedad intelectual en gastronomia es debil: no se puede patentar una receta. Pero si se pueden proteger marcas, secretos comerciales, y procesos. ¿Como proteger la innovacion sin volverse paranoico?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Registrar marca y formalizar secretos comerciales',
          description: 'Registrar la marca del producto en la Superintendencia de Industria y Comercio (SIC). Documentar las recetas como "secretos comerciales" con acuerdos de confidencialidad para el equipo de cocina. Proceso legal que tarda 6-8 meses pero protege a largo plazo. No impide la copia pero da herramientas legales.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'Todo el equipo de cocina debe firmar acuerdos de confidencialidad sobre recetas', bsc: { bsc_internal: 2, bsc_learning: -1 }, cost: 0 },
            { area: 'finance', message: 'Registro de marca en SIC: activo intangible valorizable en $3.5M', bsc: { bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['marca', 'propiedad-intelectual', 'sic', 'confidencialidad'],
          next: 'inn_09',
          narrative: 'El abogado especialista en propiedad intelectual de Pereira tramita el registro ante la SIC. La marca del producto estrella queda en proceso de registro (clase 43: servicios de alimentacion). Los acuerdos de confidencialidad generan algo de tension con el equipo de cocina — "¿no confian en nosotros?" — pero el chef principal entiende: "Es como en MasterChef, las recetas son sagradas." El verdadero valor esta en que ahora la marca es un activo contable.'
        },
        {
          id: 'B',
          label: 'Innovar mas rapido que la competencia',
          description: 'No gastar en proteccion legal. En su lugar, crear un "pipeline de innovacion" que lance un producto nuevo o mejora cada 4-6 semanas. Filosofia: cuando la competencia copie el producto de hoy, ya tendremos el de manana. Velocidad como defensa. Concepto: ciclo de vida del producto y obsolescencia planificada.',
          cost: 2000000,
          revenue: 1500000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Pipeline de innovacion constante: la cocina debe adaptarse a nuevos productos cada 4-6 semanas', bsc: { bsc_internal: -2, bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Innovacion constante da contenido fresco para redes cada mes', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['velocidad', 'pipeline', 'ciclo-vida', 'innovacion-continua'],
          next: 'inn_09',
          narrative: 'La filosofia queda clara: "No construyas muros, corre mas rapido." El equipo de I+D ya esta trabajando en el segundo producto mientras la competencia intenta descifrar el primero. Se establece un calendario de innovacion: cada 5 semanas, un producto nuevo o una mejora significativa. El efecto psicologico es poderoso: los clientes perciben la cadena como "la que siempre tiene algo nuevo", y la competencia siempre esta un paso atras.'
        }
      ]
    },

    // ============================================================
    //  FASE 3 - EXPANSION Y ESCALAMIENTO (Dias 27-39)
    // ============================================================

    // --- DIA 27: Expansion de linea de productos (MULTI) ---
    'inn_09': {
      day: 27,
      title: 'Expansion de la linea de productos',
      context: 'El producto estrella esta consolidado. Ahora I+D tiene la oportunidad de expandir la oferta. Cada producto nuevo afecta la complejidad operativa: mas SKUs = mas inventario, mas entrenamiento, mas probabilidad de errores en cocina. Pero tambien captura segmentos de mercado adicionales. En operaciones, esto se llama el "dilema de la variedad": mas opciones atraen mas clientes pero complican la produccion. Selecciona MAXIMO 2 productos para desarrollar.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Menu infantil tematico',
          description: 'Combo para niños con mini-burger o nuggets caseros, papas en forma de estrella, jugo natural, y juguete coleccionable del Eje Cafetero (una serie de 6 animales de la region: oso de anteojos, colibrí, guacamaya, etc.). Ticket: $12.000. Margen: 60%. Captura el segmento familiar dominical que representa 30% de las ventas.',
          cost: 4000000,
          revenue: 3500000,
          bsc: { bsc_financial: 3, bsc_customer: 5, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Juguetes coleccionables del Eje Cafetero: campaña "Colecciona los 6"', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'logistics', message: 'Nuevo proveedor de juguetes y empaques infantiles', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['infantil', 'familias', 'coleccionable', 'eje-cafetero'],
          next: 'inn_10',
          narrative: 'Los juguetes del Eje Cafetero son un hit inmediato. Los niños de Pereira enloquecen por coleccionar el oso de anteojos y la guacamaya. Las familias que antes iban una vez al mes empiezan a venir cada domingo "por el siguiente animal". El ticket familiar promedio sube de $48.000 a $62.000 porque los papas piden para ellos tambien. Operaciones reporta que el menu infantil es facil de producir: preparacion en 3 minutos con ingredientes que ya tienen.'
        },
        {
          id: 'B',
          label: 'Linea de postres artesanales',
          description: 'Tres postres con identidad cafetera: brownie de chocolate con cafe de origen, helado de lulo con crumble de galleta, y arroz con leche deconstruido con espuma de canela. Ticket promedio: $8.000. Margen: 70%. Aumenta el ticket promedio por mesa un 22% y aprovecha ingredientes locales.',
          cost: 3000000,
          revenue: 2500000,
          bsc: { bsc_financial: 4, bsc_customer: 4, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Postres requieren estacion de preparacion independiente — espacio en cocina', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['postres', 'artesanal', 'ticket-promedio', 'cafe'],
          next: 'inn_10',
          narrative: 'El brownie con cafe se convierte en el producto mas rentable por metro cuadrado de cocina: $8.000 de ticket, $5.600 de margen, y se prepara en 45 segundos (viene pre-horneado). El helado de lulo es el favorito de las redes: verde vibrante con textura cremosa. El ticket promedio por mesa sube efectivamente un 20%. Finanzas celebra: cada postre vendido reduce el numero de platos necesarios para alcanzar el punto de equilibrio diario.'
        },
        {
          id: 'C',
          label: 'Bebidas de autor',
          description: 'Carta de 5 bebidas exclusivas: limonada de cedrón, jugo de borojó energizante, agua de panela con limon y jengibre, malteada de café pereirano, y michelada de mango. Ticket promedio: $7.000. Margen: 72%. Las bebidas son el producto con mayor margen en gastronomia y la preparacion es rapida.',
          cost: 2000000,
          revenue: 2000000,
          bsc: { bsc_financial: 5, bsc_customer: 3, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Barra de bebidas artesanales: equipo basico de licuadora industrial y enfriador', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'logistics', message: 'Nuevos insumos perecederos: borojo, cedron, jengibre fresco', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['bebidas', 'alto-margen', 'rapido', 'autor'],
          next: 'inn_10',
          narrative: 'La malteada de cafe se convierte en la bebida mas pedida en menos de una semana: cremosa, dulce, con el sabor del cafe de la region. El borojo energizante atrae al publico fitness. Y la michelada de mango — que nadie esperaba — se vuelve el trago estrella de los viernes por la noche. El margen del 72% en bebidas es una mina de oro: con un licuado de $7.000, el costo de insumos es solo $1.960. Puro throughput financiero.'
        },
        {
          id: 'D',
          label: 'Opciones vegetarianas/veganas',
          description: 'Desarrollar 3 platos plant-based: burger de lenteja y remolacha, wrap de falafel con hogao, y bowl de quinoa con guacamole. Ticket promedio: $16.000. Margen: 58%. El mercado vegano en Pereira es pequeño (5%) pero crece 40% anual y tiene cero competencia en fast food.',
          cost: 3500000,
          revenue: 1500000,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Linea vegana posiciona la marca como inclusiva y moderna', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Ingredientes veganos requieren almacenamiento separado para evitar contaminacion cruzada', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['vegano', 'plant-based', 'nicho', 'tendencia'],
          next: 'inn_10',
          narrative: 'La burger de lenteja y remolacha sorprende a todos: tiene un color rojo vibrante, textura firme, y un sabor que convence incluso a los carnivoros. El publico vegano de Pereira — pequeño pero vocal en redes — enloquece: "¡Por fin un fast food donde puedo comer!" Las resenas en Google Maps explotan con estrellas. El volumen es bajo (15-20 unidades/dia) pero el impacto en reputacion es desproporcionado. Cada vegano que viene trae 3 amigos no-veganos.'
        },
        {
          id: 'E',
          label: 'Desayunos express',
          description: 'Abrir franja de desayunos de 6:30am a 9:30am con 4 opciones rapidas: arepa con huevo y hogao, calentado express, granola bowl con frutas, y sandwich en pan artesanal. Ticket promedio: $9.000. Margen: 64%. Aprovecha la capacidad instalada ociosa en horas de la manana.',
          cost: 3500000,
          revenue: 3000000,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Desayunos usan capacidad ociosa de la manana: la cocina que no produce, pierde', bsc: { bsc_internal: 4, bsc_financial: 3 }, cost: 0 },
            { area: 'hr', message: 'Franja de desayunos requiere personal que entre a las 5:30am', bsc: { bsc_internal: -2, bsc_learning: -1 }, cost: 0 }
          ],
          tags: ['desayunos', 'capacidad-ociosa', 'madrugon', 'express'],
          next: 'inn_10',
          narrative: 'El calentado express (frijoles, arroz, huevo, arepa, y tajada en bandeja por $9.000) es un exito inmediato entre los madrugadores del centro. La cocina que estaba vacia de 6:30 a 10am ahora produce 60 desayunos diarios. Concepto puro de operaciones: la capacidad instalada que no se usa es un costo hundido. Con los desayunos, cada hora de la manana genera $540.000 de ingreso que antes era $0. El punto de equilibrio diario se alcanza mas temprano.'
        }
      ]
    },

    // --- DIA 30: Alianza tecnologica ---
    'inn_10': {
      day: 30,
      title: 'Partnership tecnologico',
      context: 'Una startup de Manizales llamada "FoodTech Eje" ofrece una alianza para implementar tecnologia de punta en el restaurante. Tienen un sistema de gestion de cocina basado en tablets, integracion con plataformas de delivery, y analitica de ventas en tiempo real. Piden $8M por la implementacion completa + $1.5M mensuales de licencia. Pero hay alternativas: soluciones parciales mas baratas o desarrollo in-house.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Alianza completa con FoodTech Eje',
          description: 'Implementar el sistema completo: tablets en cocina, POS integrado, dashboard de ventas, y conexion automatica con Rappi/iFood. Incluye soporte tecnico y actualizaciones. Solucion llave en mano pero costosa y con dependencia del proveedor.',
          cost: 8000000,
          revenue: 3000000,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Sistema de gestion de cocina integrado — visibilidad total de la operacion', bsc: { bsc_internal: 5, bsc_financial: 2 }, cost: 0 },
            { area: 'finance', message: 'Dashboard de ventas en tiempo real: proyeccion de flujo de caja automatica', bsc: { bsc_financial: 4, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['partnership', 'foodtech', 'sistema-integrado', 'llave-en-mano'],
          next: 'inn_11',
          narrative: 'FoodTech Eje instala todo en 5 dias. Las tablets en cocina muestran cada pedido con temporizador: verde (a tiempo), amarillo (demorandose), rojo (atrasado). El POS se conecta automaticamente con Rappi e iFood — los pedidos caen directo a la cocina sin que nadie transcriba. El dashboard del gerente muestra ventas en tiempo real, ticket promedio, y proyeccion del dia. Por primera vez, la operacion entera es visible en una pantalla. El costo es alto, pero la informacion no tiene precio.'
        },
        {
          id: 'B',
          label: 'Solucion intermedia: POS basico + Excel avanzado',
          description: 'Comprar un software POS colombiano basico (Siigo Nube POS) por $2M e implementar tableros de control en Google Sheets con formulas avanzadas. No es sexy pero funciona. El equipo de I+D conecta los datos manualmente cada noche. 80% de la funcionalidad al 25% del costo.',
          cost: 2500000,
          revenue: 1000000,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'POS basico registra ventas — datos disponibles al dia siguiente', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Google Sheets con formulas para flujo de caja y punto de equilibrio diario', bsc: { bsc_financial: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['pos-basico', 'excel', 'bajo-costo', 'manual'],
          next: 'inn_11',
          narrative: 'Siigo Nube POS se instala en una tarde. Es basico pero cumple: registra cada venta, identifica los productos mas pedidos, y genera facturas electronicas (obligatorio en Colombia desde 2020). Los tableros en Google Sheets requieren 30 minutos cada noche para actualizar, pero muestran tendencias claras. Es la solucion del emprendedor colombiano clasico: ingeniosa, economica, y funcional. ¿Perfecta? No. ¿Suficiente para tomar buenas decisiones? Si.'
        },
        {
          id: 'C',
          label: 'Desarrollo propio con pasantes de ingenieria',
          description: 'Aliarse con el programa de Ingenieria de Sistemas de la UTP para que 3 pasantes desarrollen un sistema a medida en 8 semanas. Pago: $1.5M/mes por pasante. El sistema sera exactamente lo que el restaurante necesita, pero toma mas tiempo y depende de universitarios.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'Tres pasantes de la UTP se integran al equipo — mentoria y gestion', bsc: { bsc_learning: 4, bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['utp', 'pasantes', 'desarrollo-propio', 'a-medida'],
          next: 'inn_11',
          narrative: 'Los tres pasantes de la UTP llegan con energia, ideas, y laptops con stickers. En la primera semana hacen un levantamiento de requerimientos que revela cosas que ni el gerente sabia que necesitaba: un modulo de prediccion de demanda, un alertador de ingredientes proximos a vencer, y un ranking de empleados por productividad. El desarrollo es mas lento que una solucion comercial, pero cada linea de codigo es exactamente lo que el restaurante necesita. Bonus: los pasantes se enamoran del proyecto y trabajan como si fuera propio.'
        }
      ]
    },

    // --- DIA 33: Analitica de datos para decisiones ---
    'inn_11': {
      day: 33,
      title: 'Implementacion de analitica de datos',
      context: 'Con varias semanas de datos acumulados — ventas, costos, tiempos de preparacion, pedidos por hora, productos mas vendidos — I+D debe decidir como convertir esos datos en decisiones inteligentes. En Administracion de Operaciones, los datos permiten calcular metricas clave: OEE (Overall Equipment Effectiveness), throughput, lead time, y variabilidad del proceso. ¿Que nivel de analitica implementar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Dashboard de KPIs operativos en tiempo real',
          description: 'Crear un tablero con 8 indicadores clave: ventas/hora, ticket promedio, tiempo de espera promedio, tasa de productos agotados, margen bruto diario, indice de satisfaccion, rotacion de inventario, y productividad por empleado. Visualizacion en pantalla grande en la cocina. Concepto: gestion visual (andon).',
          cost: 3500000,
          revenue: 2000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Dashboard de KPIs en cocina — el equipo ve su rendimiento en tiempo real', bsc: { bsc_internal: 4, bsc_learning: 3 }, cost: 0 },
            { area: 'finance', message: 'Indicadores financieros diarios visibles: margen, punto de equilibrio, flujo', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['dashboard', 'kpi', 'andon', 'gestion-visual', 'tiempo-real'],
          next: 'inn_12',
          narrative: 'La pantalla de 43 pulgadas en la pared de la cocina muestra los 8 indicadores con barras de progreso coloridas. El efecto es inmediato: cuando el equipo ve que el tiempo de espera promedio sube a 8 minutos (meta: 6), se activan solos. Cuando el ticket promedio baja del objetivo, el cajero empieza a sugerir postres. Es psicologia pura: lo que se mide, se mejora. El concepto japones de "andon" — hacer visible el estado del proceso — funciona igual en una cocina de Pereira que en una fabrica de Toyota.'
        },
        {
          id: 'B',
          label: 'Analisis predictivo de ventas y desperdicio',
          description: 'Implementar un modelo estadistico (media movil ponderada + factores de estacionalidad) que prediga ventas por producto y por franja horaria. Permite comprar insumos con precision y programar produccion. Reduce merma del 12% actual al 5%. Concepto: pronostico de demanda.',
          cost: 5000000,
          revenue: 3500000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 4, bsc_learning: 6 },
          crossEffects: [
            { area: 'logistics', message: 'Pronostico de demanda preciso: pedidos a proveedores optimizados', bsc: { bsc_internal: 3, bsc_financial: 3 }, cost: 0 },
            { area: 'operations', message: 'Produccion planificada por franja horaria: menos desperdicio, menos faltantes', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['predictivo', 'pronostico', 'media-movil', 'merma', 'demanda'],
          next: 'inn_12',
          narrative: 'El modelo de pronostico usa media movil ponderada de las ultimas 4 semanas, ajustada por dia de semana (lunes vende 30% menos que viernes), quincena (ventas suben 20% los dias 15 y 30), y clima (dias de lluvia +10% en domicilios, -15% en local). La primera semana de uso, la merma cae del 12% al 6.8%. Para la tercera semana, ya esta en 4.5%. El gerente de operaciones dice: "Antes compraba por instinto. Ahora compro por datos. Y los datos son mas baratos que el instinto equivocado."'
        },
        {
          id: 'C',
          label: 'A/B testing sistematico de menu y precios',
          description: 'Implementar un sistema de experimentacion: cambiar una variable por semana (precio, presentacion, nombre del plato, posicion en el menu) y medir el impacto con significancia estadistica. Concepto: diseño de experimentos aplicado a gastronomia. Barato en herramientas, caro en disciplina.',
          cost: 1500000,
          revenue: 2500000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 2, bsc_learning: 7 },
          crossEffects: [
            { area: 'marketing', message: 'A/B testing revela que nombres creativos venden 18% mas que nombres descriptivos', bsc: { bsc_customer: 3, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['ab-testing', 'experimentacion', 'estadistica', 'precios'],
          next: 'inn_12',
          narrative: 'Primer experimento: cambiar el nombre de "Hamburguesa con salsa de cafe" a "La Cafetera" — las ventas suben 18%. Segundo experimento: subir el precio de $14.000 a $15.500 — las ventas bajan solo 3% pero el margen sube 11%. Tercer experimento: poner el producto estrella primero en el menu vs tercero — primero vende 22% mas. Cada semana se aprende algo que antes era intuicion. La estadistica aplicada a $14.000 pesos colombianos resulta tan poderosa como aplicada a millones de dolares.'
        }
      ]
    },

    // --- DIA 36: Lanzamiento de edicion limitada ---
    'inn_12': {
      day: 36,
      title: 'Producto de edicion limitada',
      context: 'Se acerca la Feria de Pereira (Fiestas de la Cosecha) y I+D tiene la oportunidad de lanzar un producto de edicion limitada que conecte con el orgullo pereirano. Los productos temporales generan urgencia de compra (efecto escasez) y permiten experimentar sin comprometer el menu permanente. En operaciones, son una prueba de flexibilidad: ¿puede la cocina producir algo nuevo sin afectar la operacion base?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'La Cosecha Burger — edicion Fiestas de Pereira',
          description: 'Hamburguesa con carne de cerdo marinada en cerveza artesanal de Pereira, queso doble, tocineta caramelizada con miel de Apiarios del Quindio, y salsa BBQ ahumada. Presentacion en caja especial con diseno de las Fiestas de la Cosecha. Solo 100 unidades/dia por 10 dias. Ticket: $26.000.',
          cost: 4000000,
          revenue: 7000000,
          bsc: { bsc_financial: 4, bsc_customer: 5, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Edicion Fiestas de la Cosecha: oportunidad de co-branding con cerveceria local', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'operations', message: 'Produccion limitada a 100/dia: estacion temporal en cocina durante 10 dias', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['edicion-limitada', 'fiestas', 'cosecha', 'pereira', 'escasez'],
          next: 'inn_13',
          narrative: 'La Cosecha Burger se anuncia en redes 3 dias antes de las fiestas. El efecto escasez funciona: "Solo 100 al dia — cuando se acaban, se acaban." El primer dia se agotan a la 1pm. El segundo dia, los clientes llegan a las 11am. Para el quinto dia, hay fila desde las 10:30am. Los numeros: 100 unidades x $26.000 = $2.6M diarios, con un costo unitario de $10.400, dejando $1.56M de contribucion marginal diaria solo de este producto. Las fotos con la caja tematica inundan Instagram.'
        },
        {
          id: 'B',
          label: 'Festival de sabores regionales — rotacion diaria',
          description: 'Durante 10 dias, un plato diferente cada dia representando una subregion: chorizo santarosano (dia 1), trucha del Cocora (dia 2), tamales de Cartago (dia 3)... Cada dia se produce 1 plato unico. Genera expectativa diaria ("¿que habra hoy?") pero la complejidad operativa es altisima.',
          cost: 6000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 6, bsc_internal: -1, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Plato diferente cada dia = receta nueva diaria para la cocina — complejidad maxima', bsc: { bsc_internal: -4, bsc_learning: 2 }, cost: 0 },
            { area: 'logistics', message: 'Insumos diferentes cada dia: logistica de proveedores al limite', bsc: { bsc_internal: -3 }, cost: 0 },
            { area: 'marketing', message: 'Contenido viral: "¿Que sabor de hoy?" genera engagement diario', bsc: { bsc_customer: 5 }, cost: 0 }
          ],
          tags: ['festival', 'rotacion', 'regional', 'expectativa', 'complejo'],
          next: 'inn_13',
          narrative: 'El festival es un caos hermoso. El dia del chorizo santarosano se agotan 120 unidades en 3 horas. El dia de la trucha del Cocora, la mitad de los clientes no conocia el plato y lo piden por curiosidad. El dia del tamal de Cartago, tres abuelas pereiranas dicen "esto sabe igualito al de mi mama". Operaciones sufre — cada dia es como abrir un restaurante nuevo — pero el equipo crece enormemente. La complejidad operativa es un problema... que genera las mejores historias de Instagram que la marca ha tenido.'
        },
        {
          id: 'C',
          label: 'Combo patrio con causa social',
          description: 'Combo especial de Fiestas por $22.000 donde $2.000 se donan a la Fundacion para niños del Eje Cafetero. Incluye el producto estrella + bebida + postre mini. Precio accesible, alto volumen, y componente social que conecta emocionalmente. Sin innovacion de producto pero con innovacion de proposito.',
          cost: 2500000,
          revenue: 8000000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Causa social en fiestas: reputacion de marca + PR gratuito en medios locales', bsc: { bsc_customer: 5, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: '$2.000 por combo donados: deducible de impuestos en Colombia (Art. 257 ET)', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['causa-social', 'donacion', 'fiestas', 'volumen', 'reputacion'],
          next: 'inn_13',
          narrative: 'El combo patrio se lanza con un video emotivo: ninos de la fundacion del Eje Cafetero agradeciendo. El video tiene 12.000 reproducciones en 48 horas — record para la marca. Las ventas del combo superan las 180 unidades/dia: es mas barato, no requiere nuevo producto, y los clientes sienten que "comer aqui ayuda a alguien". Noticias Pereira cubre la iniciativa en el noticiero de las 7pm. El ROI publicitario de los $2.000 donados es incalculable. Y lo mejor: los $2.000 son deducibles del impuesto de renta.'
        }
      ]
    },

    // --- DIA 39: Innovacion sostenible ---
    'inn_13': {
      day: 39,
      title: 'Estrategia de innovacion sostenible',
      context: 'La presion por sostenibilidad crece en Colombia: la Ley 2169 de 2021 establece metas de carbon neutralidad, y los consumidores jovenes (el 65% del segmento objetivo) prefieren marcas con compromiso ambiental. I+D debe decidir como integrar la sostenibilidad en la operacion. En administracion de operaciones, cada decision sostenible tiene un trade-off con costos y eficiencia.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Empaques biodegradables y programa de cero desperdicio',
          description: 'Reemplazar todos los empaques plasticos por materiales biodegradables (bagazo de cana, carton reciclado). Implementar programa de compostaje con los residuos organicos y alianza con Too Good To Go para vender sobrantes al cierre a mitad de precio. Costo de empaques sube 35% pero la marca gana posicionamiento "verde".',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'logistics', message: 'Cambio de proveedor de empaques: de plastico a biodegradable — lead time mayor', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'marketing', message: 'Sello "Eco-Friendly" en todos los empaques: diferenciador visual poderoso', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'finance', message: 'Costo de empaques sube 35% pero puede compensarse con precio premium', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['sostenibilidad', 'biodegradable', 'cero-desperdicio', 'verde'],
          next: 'inn_14',
          narrative: 'Los nuevos empaques de bagazo de cana llegan de un proveedor de Cali. Son mas caros, si, pero la reaccion del cliente es instantanea: "¡Que bien que no usan icopor!" El programa de cero desperdicio reduce los residuos organicos un 70%: lo que no se vende al cierre va a Too Good To Go a mitad de precio (se agotan en 15 minutos), y los restos van al compostaje del barrio. El costo extra se convierte en inversion de marca. Un influencer pereirano de sostenibilidad hace un video de 2 minutos que alcanza 45.000 views.'
        },
        {
          id: 'B',
          label: 'Eficiencia energetica y proveedores locales kilometro cero',
          description: 'Invertir en equipos de bajo consumo energetico (LED, equipos con sello Energy Star, temporizadores automaticos). Cambiar el 80% de proveedores a productores locales del Eje Cafetero (radio de 50km). Reducir la huella de carbono desde la operacion, no desde el empaque. Menos visible pero mas profundo.',
          cost: 4000000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Equipos eficientes: consumo electrico baja 20%, vida util de equipos sube', bsc: { bsc_internal: 3, bsc_financial: 2 }, cost: 0 },
            { area: 'logistics', message: 'Proveedores km-0: entregas mas frecuentes, insumos mas frescos, menos transporte', bsc: { bsc_internal: 3, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['eficiencia', 'energia', 'km-cero', 'proveedores-locales'],
          next: 'inn_14',
          narrative: 'La factura de energia baja un 22% el primer mes con los equipos nuevos y los temporizadores (la gente dejaba las luces y equipos prendidos toda la noche). Los proveedores locales son una revelacion: las verduras llegan de Santa Rosa de Cabal a las 5am, frescas y a menor precio que las que venian de Bogota. El pollo viene de granjas de Dosquebradas, la panela de Viterbo, y las frutas de Cerritos. La cadena de suministro se acorta de 400km promedio a 35km. No se ve en el empaque, pero se sabe en cada mordisco.'
        }
      ]
    },

    // ============================================================
    //  FASE 4 - EVALUACION Y FUTURO (Dias 42-45)
    // ============================================================

    // --- DIA 42: Evaluacion del impacto de la innovacion ---
    'inn_14': {
      day: 42,
      title: 'Evaluacion de impacto de la innovacion',
      context: 'Han pasado 6 semanas. Es momento de medir el impacto real de todas las decisiones de I+D. Las metricas clave son: porcentaje de ventas que viene de productos nuevos (meta: 25%), reduccion de costos por mejoras de proceso (meta: 10%), y NPS (Net Promoter Score, meta: 50+). El presupuesto de I+D se ha usado entre el 70% y el 95% dependiendo de las decisiones. ¿Como evaluar y comunicar los resultados?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Auditoria cuantitativa con metricas duras',
          description: 'Presentar un informe detallado con numeros: ROI de cada innovacion, contribucion al margen, tiempo de payback, impacto en punto de equilibrio, y comparacion antes/despues de cada metrica operativa. Los datos hablan por si solos. Concepto: toma de decisiones basada en evidencia.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'I+D entrega ROI detallado de cada innovacion: datos para decisiones de inversion futura', bsc: { bsc_financial: 3, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['auditoria', 'metricas', 'roi', 'evidencia', 'cuantitativo'],
          next: 'inn_15',
          narrative: 'El informe tiene 12 paginas con graficos, tablas, y numeros duros. Los hallazgos principales: el producto estrella contribuye 28% de las ventas totales (superando la meta del 25%), las mejoras de proceso redujeron costos operativos un 11.3%, y el NPS subio de 32 a 54. El ROI promedio de las innovaciones es de 2.8x: cada peso invertido en I+D genero $2.80 de valor. Finanzas queda impresionado. Operaciones dice: "Ahora entiendo para que sirve I+D."'
        },
        {
          id: 'B',
          label: 'Evaluacion 360 con todas las areas',
          description: 'Reunion de medio dia con representantes de todas las areas. Cada area evalua como las innovaciones de I+D impactaron su trabajo: positiva y negativamente. Se identifican sinergias, fricciones, y lecciones aprendidas. Concepto: retroalimentacion sistémica.',
          cost: 500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Evaluacion 360: identificar fricciones entre I+D y cocina para mejorar', bsc: { bsc_internal: 2, bsc_learning: 3 }, cost: 0 },
            { area: 'hr', message: 'Evaluacion inter-areas genera cultura de feedback constructivo', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['evaluacion-360', 'retroalimentacion', 'sinergias', 'lecciones'],
          next: 'inn_15',
          narrative: 'La reunion es intensa pero productiva. Operaciones dice: "I+D nos empujo fuera de nuestra zona de confort y al principio fue frustrante, pero el resultado vale la pena." Marketing agrega: "Cada producto nuevo nos dio contenido para 2 semanas de redes." Finanzas advierte: "Algunas innovaciones tardaron mas en dar retorno del esperado." Logistica pide: "Avísennos con mas tiempo cuando cambien insumos." La evaluacion revela que la innovacion no es un area aislada — es un sistema que conecta todo.'
        },
        {
          id: 'C',
          label: 'Panel de clientes para NPS y feedback directo',
          description: 'Invitar a 25 clientes frecuentes a una sesion de feedback estructurado: ¿que les gusto?, ¿que cambiarían?, ¿recomendarían el restaurante?, ¿que producto nuevo querrian ver? Evaluacion desde afuera, donde finalmente importa: el cliente.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 6, bsc_internal: 1, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Panel de clientes frecuentes: testimonios y feedback para mejorar comunicacion', bsc: { bsc_customer: 4, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['nps', 'clientes', 'feedback', 'panel', 'voz-del-cliente'],
          next: 'inn_15',
          narrative: 'Los 25 clientes llegan un sabado a las 10am (con desayuno gratis). El NPS se calcula en vivo: 56 puntos — zona de "excelente". Los promotores (9 y 10) destacan tres cosas: sabor unico, productos nuevos siempre, y servicio amable. Los detractores (0-6) mencionan: tiempos de espera en horas pico y falta de estacionamiento. La sorpresa: 4 clientes piden un area para trabajar con wifi y cafe — algo que I+D no habia considerado. "¿Un fast food con coworking? Hmm... interesante."'
        }
      ]
    },

    // --- DIA 45: Hoja de ruta futura ---
    'inn_15': {
      day: 45,
      title: 'Hoja de ruta de innovacion futura',
      context: 'Ultima decision de I+D. Con los aprendizajes de 45 dias, es momento de definir la estrategia de innovacion para los proximos 6 meses. El restaurante ya tiene un producto estrella, tecnologia implementada, datos de clientes, y un equipo que aprendio a innovar. ¿Hacia donde enfocar la innovacion futura? Esta decision define el ADN innovador de la cadena a largo plazo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Innovacion de producto: laboratorio gastronomico permanente',
          description: 'Crear un "laboratorio" dentro del restaurante: una estacion dedicada a probar recetas nuevas 2 dias a la semana. Pipeline continuo: investigar, prototipar, probar, lanzar, medir. Meta: 1 producto nuevo cada 6 semanas. Mantener al restaurante siempre fresco. Concepto: innovacion como capacidad organizacional permanente.',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: 3, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Laboratorio gastronomico en cocina: espacio dedicado + ingredientes experimentales', bsc: { bsc_internal: -1, bsc_learning: 4 }, cost: 0 },
            { area: 'hr', message: 'Equipo de cocina rota al laboratorio: motivacion y desarrollo profesional', bsc: { bsc_learning: 5, bsc_customer: 2 }, cost: 0 },
            { area: 'marketing', message: 'Pipeline de productos nuevos = contenido permanente para redes', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['laboratorio', 'pipeline', 'innovacion-continua', 'productos'],
          next: null,
          narrative: 'El laboratorio gastronomico se inaugura con una pared de corcho donde se pegan ideas, recetas en prueba, y feedback de clientes. Los cocineros rotan: cada semana, uno diferente pasa 2 dias experimentando. El primer mes produce 3 conceptos prometedores: un sandwich de chicharron crujiente con guacamole, una sopa del dia con receta de abuelas pereiranas, y un postre de helado de tamarindo. El pipeline de innovacion ya no depende de una persona o un momento — es un sistema. Y los sistemas sobreviven a las personas.'
        },
        {
          id: 'B',
          label: 'Innovacion de proceso: automatizacion inteligente',
          description: 'Enfocar I+D en optimizar la operacion interna: implementar IA para programacion de produccion, robotica basica (dispensadores automaticos, cortadoras calibradas), y gemelo digital de la cocina para simular cambios antes de implementarlos. Meta: reducir costos operativos 20% en 6 meses sin afectar calidad.',
          cost: 8000000,
          revenue: 5000000,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 6, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'Automatizacion inteligente de cocina: menos errores, menos costo, mas consistencia', bsc: { bsc_internal: 6, bsc_financial: 4 }, cost: 0 },
            { area: 'finance', message: 'Proyeccion de ahorro por automatizacion: $12M en 6 meses', bsc: { bsc_financial: 5 }, cost: 0 },
            { area: 'hr', message: 'Automatizacion genera inquietud en el equipo: ¿los reemplazaran las maquinas?', bsc: { bsc_learning: -2, bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['automatizacion', 'ia', 'gemelo-digital', 'eficiencia', 'industria-4.0'],
          next: null,
          narrative: 'La hoja de ruta de automatizacion es ambiciosa pero realista: mes 1-2, dispensadores automaticos de salsas y bebidas; mes 3-4, sistema de IA que programa produccion diaria basado en pronosticos; mes 5-6, gemelo digital de la cocina que permite simular "¿que pasa si agrego un producto al menu?" antes de hacerlo en la realidad. El equipo de cocina tiene reacciones mixtas: el veterano dice "las maquinas nunca reemplazaran el sazón", la joven dice "esto es el futuro". Ambos tienen razon.'
        },
        {
          id: 'C',
          label: 'Innovacion de modelo: dark kitchen y expansion digital',
          description: 'Abrir una "dark kitchen" (cocina sin local fisico) en Dosquebradas que atienda solo domicilios por app/WhatsApp. Duplicar la capacidad de produccion sin el costo de un segundo local. Luego explorar cloud kitchen compartida con otras marcas. Concepto: innovacion en el modelo de negocio.',
          cost: 7000000,
          revenue: 6000000,
          bsc: { bsc_financial: 3, bsc_customer: 4, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Dark kitchen en Dosquebradas: cobertura de delivery se duplica', bsc: { bsc_internal: 5, bsc_customer: 4 }, cost: 0 },
            { area: 'operations', message: 'Segunda cocina: procesos deben estar 100% estandarizados para replicarse', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Dark kitchen sin local: inversion 60% menor que abrir un segundo punto de venta', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['dark-kitchen', 'expansion', 'modelo-negocio', 'dosquebradas', 'digital'],
          next: null,
          narrative: 'La dark kitchen es la jugada mas estrategica posible. Un local de 60m2 en Dosquebradas con cocina industrial, sin salon, sin meseros, sin decoracion — solo produccion pura para domicilios. El costo es $7M de adecuacion vs $35M+ que costaria un segundo local completo. La capacidad de produccion del negocio se duplica. La cobertura de delivery ahora cubre Pereira, Dosquebradas, y Santa Rosa de Cabal. El equipo de I+D convierte el restaurante de una empresa de comida en una empresa de tecnologia de comida. Y eso cambia todo.'
        },
        {
          id: 'D',
          label: 'Innovacion social: academia y emprendimiento local',
          description: 'Crear un programa donde el restaurante capacite jovenes del SENA y la UTP en gastronomia e innovacion de alimentos. Los mejores se integran al equipo o reciben mentoria para crear su propio negocio. Tambien abrir la cocina para eventos de la comunidad una vez al mes. Innovacion con impacto social.',
          cost: 3500000,
          revenue: 1000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 2, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'Pipeline de talento joven: los mejores pasantes se quedan como empleados', bsc: { bsc_learning: 6, bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Programa social genera PR positivo y conexion con universidades', bsc: { bsc_customer: 5, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['academia', 'sena', 'utp', 'impacto-social', 'comunidad'],
          next: null,
          narrative: 'El primer grupo de 8 jovenes del SENA llega el lunes a las 7am. Estan nerviosos y emocionados. Durante 4 semanas, aprenden no solo a cocinar sino a pensar como innovadores: como identificar oportunidades, prototipar, testear, y medir. Dos de los ocho son brillantes y se quedan como parte del equipo. Uno mas decide montar su propio negocio de empanadas gourmet con lo aprendido — y le va bien. El gerente reflexiona: "Empezamos innovando productos. Terminamos innovando vidas." El ROI de esto no cabe en un Excel.'
        }
      ]
    }
  }
};
