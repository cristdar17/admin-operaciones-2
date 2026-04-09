// =============================================================================
// TREE: MARKETING — Cadena de comida rapida en Pereira, Colombia
// Presupuesto total del area: $95.000.000 COP
// Periodo simulado: Dia 1 al 45
// =============================================================================

window.TREE_MARKETING = {
  name: 'Marketing',
  icon: '\uD83D\uDCE2',
  color: '#AF52DE',
  startNode: 'mkt_01',
  nodes: {

    // =========================================================================
    // DIA 2 — Posicionamiento de marca
    // =========================================================================
    'mkt_01': {
      day: 2,
      title: 'Posicionamiento de marca',
      context:
        'Tu cadena de comida rapida esta a punto de abrir en Pereira. Antes de ' +
        'cualquier inversion publicitaria necesitas definir como quieres que el ' +
        'consumidor pereirano te perciba. El mercado local ya tiene Juan Valdez, ' +
        'El Corral, Frisby y decenas de puestos informales. Tu propuesta debe ' +
        'diferenciarte desde el dia uno.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Premium artesanal',
          description:
            'Posicionarte como la opcion gourmet: ingredientes locales del Eje ' +
            'Cafetero, pan artesanal, salsas de la casa. Precio alto, experiencia ' +
            'memorable. Apuntas a estratos 4-6 y turistas.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe asegurar proveedores artesanales y control de calidad premium.',
              bsc: { bsc_internal: -1 },
              cost: 3000000
            }
          ],
          tags: ['posicionamiento', 'premium', 'diferenciacion'],
          next: 'mkt_02',
          narrative:
            'El equipo queda emocionado con la idea. Disenan un logo elegante con ' +
            'tonos tierra y letras serif. Sin embargo, el chef advierte que los ' +
            'ingredientes artesanales encarecen cada plato entre $3.000 y $5.000 COP.'
        },
        {
          id: 'B',
          label: 'Rapido y economico',
          description:
            'Posicionarte como la alternativa mas barata y rapida de Pereira. ' +
            'Combos desde $12.900. Alto volumen, margen bajo. Apuntas a estudiantes ' +
            'de UTP, UCPR y trabajadores del centro.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones necesita optimizar tiempos: meta de 3 min por pedido.',
              bsc: { bsc_internal: 2 },
              cost: 0
            }
          ],
          tags: ['posicionamiento', 'bajo-costo', 'volumen'],
          next: 'mkt_02',
          narrative:
            'La estrategia de precios bajos genera debate. El financiero dice que ' +
            'necesitan vender 400+ unidades diarias para cubrir costos fijos. El ' +
            'equipo de operaciones empieza a disenar una cocina de alta velocidad.'
        },
        {
          id: 'C',
          label: 'Saludable y fitness',
          description:
            'Posicionarte como la cadena saludable: opciones sin gluten, bowls de ' +
            'proteina, wraps con verduras del Valle. Apuntas al nicho creciente ' +
            'de gimnasios y bienestar en Pereira.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe disenar menu con informacion nutricional verificada.',
              bsc: { bsc_internal: -1, bsc_learning: 1 },
              cost: 2000000
            }
          ],
          tags: ['posicionamiento', 'saludable', 'nicho'],
          next: 'mkt_02',
          narrative:
            'El concepto genera interes inmediato entre los entrenadores de Smart Fit ' +
            'y Bodytech Pereira. Sin embargo, el proveedor de verduras organicas ' +
            'solo puede garantizar abastecimiento tres dias a la semana.'
        },
        {
          id: 'D',
          label: 'Cultura cafetera fusionada',
          description:
            'Fusionar la identidad del Eje Cafetero con comida rapida moderna: ' +
            'hamburguesas con hogao, empanadas gourmet, limonada de panela. ' +
            'Orgulloso de ser pereirano.',
          cost: 5500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones investiga recetas fusion con tiempos de preparacion viables.',
              bsc: { bsc_internal: 0, bsc_learning: 2 },
              cost: 1500000
            }
          ],
          tags: ['posicionamiento', 'regional', 'identidad'],
          next: 'mkt_02',
          narrative:
            'El enfoque regional conecta emocionalmente con el equipo. Deciden ' +
            'que el local tendra decoracion con guadua, fotos del Nevado del Ruiz ' +
            'y musica de fondo con bandola y tiple modernizados.'
        }
      ]
    },

    // =========================================================================
    // DIA 5 — Estrategia de precios
    // =========================================================================
    'mkt_02': {
      day: 5,
      title: 'Estrategia de precios',
      context:
        'Con el posicionamiento definido, necesitas fijar precios. El combo ' +
        'promedio de la competencia en Pereira esta entre $18.000 y $28.000 COP. ' +
        'Tu estructura de costos indica un costo unitario promedio de $9.500. ' +
        'La decision de precio impacta directamente el punto de equilibrio y la ' +
        'percepcion de valor.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Costo + margen (Cost-Plus)',
          description:
            'Fijar precio como costo + 65% de margen. Combo base en $15.675. ' +
            'Seguro y predecible, pero ignora lo que el mercado esta dispuesto a pagar.',
          cost: 1000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe mantener costos unitarios estables para proteger el margen fijo.',
              bsc: { bsc_financial: 1 },
              cost: 0
            }
          ],
          tags: ['precios', 'cost-plus', 'margen'],
          next: 'mkt_03',
          narrative:
            'El modelo cost-plus da tranquilidad al area financiera. Sin embargo, ' +
            'el equipo comercial advierte que $15.675 puede ser demasiado similar ' +
            'a la informalidad del centro y no justifica la marca.'
        },
        {
          id: 'B',
          label: 'Basado en valor percibido',
          description:
            'Fijar precio segun la experiencia: combo base en $24.900. Apuestas ' +
            'a que la marca y la calidad justifican un precio superior al promedio.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Cada plato debe verse y saber impecable — cero errores de calidad.',
              bsc: { bsc_customer: 1, bsc_internal: -1 },
              cost: 1500000
            }
          ],
          tags: ['precios', 'valor', 'premium'],
          next: 'mkt_03',
          narrative:
            'El precio alto genera nerviosismo. El gerente recuerda que Crepes & ' +
            'Waffles cobra similar y la gente paga feliz. La clave sera que la ' +
            'experiencia justifique cada peso.'
        },
        {
          id: 'C',
          label: 'Competitivo (igualar mercado)',
          description:
            'Fijar combo base en $19.900 — justo en el promedio del mercado. ' +
            'No asustas a nadie, pero tampoco te diferencias por precio.',
          cost: 500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [],
          tags: ['precios', 'competitivo', 'neutro'],
          next: 'mkt_03',
          narrative:
            'La estrategia segura. Nadie en el equipo esta entusiasmado ni ' +
            'preocupado. El analista de mercado dice: "No perdemos clientes por ' +
            'precio, pero tampoco los ganamos por precio."'
        },
        {
          id: 'D',
          label: 'Penetracion agresiva',
          description:
            'Lanzar con combo a $12.900 durante los primeros 30 dias para robar ' +
            'clientes. Despues subir gradualmente. Riesgo: el cliente se ' +
            'acostumbra al precio bajo.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Alto volumen esperado: operaciones necesita capacidad para 500+ pedidos/dia.',
              bsc: { bsc_internal: -2 },
              cost: 4000000
            },
            {
              area: 'FIN',
              message: 'Finanzas advierte: margen negativo los primeros 30 dias.',
              bsc: { bsc_financial: -3 },
              cost: 0
            }
          ],
          tags: ['precios', 'penetracion', 'volumen', 'riesgo'],
          next: 'mkt_03',
          narrative:
            'La estrategia divide al equipo. Ventas esta emocionado: "vamos a ' +
            'reventar." Finanzas esta palido: "vamos a quebrar." Solo el tiempo ' +
            'dira quien tiene razon.'
        }
      ]
    },

    // =========================================================================
    // DIA 8 — Seleccion de canales digitales
    // =========================================================================
    'mkt_03': {
      day: 8,
      title: 'Seleccion de canales digitales',
      context:
        'Pereira tiene alta penetracion de smartphones. El 78% de tus clientes ' +
        'potenciales (18-35 anos) usan Instagram y TikTok diariamente. Google ' +
        'Maps es clave para descubrimiento local. WhatsApp Business permite ' +
        'pedidos directos. Tu presupuesto digital es limitado y debes priorizar.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Instagram + Meta Ads',
          description:
            'Perfil profesional con reels de preparacion, stories diarias y pauta ' +
            'segmentada por ubicacion (3 km alrededor del local). El 68% de ' +
            'los pereiranos entre 18-35 usan Instagram.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['digital', 'instagram', 'redes-sociales'],
          next: 'mkt_04',
          narrative:
            'El community manager empieza a crear contenido. Las fotos de ' +
            'hamburguesas con queso derretido generan 200 likes en la primera ' +
            'hora. "El algoritmo nos ama," dice emocionado.'
        },
        {
          id: 'B',
          label: 'TikTok organico + pago',
          description:
            'Videos cortos virales: detras de camaras, retos de comida, humor ' +
            'pereirano. TikTok Ads para alcance masivo en jovenes 16-28.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [],
          tags: ['digital', 'tiktok', 'viral', 'jovenes'],
          next: 'mkt_04',
          narrative:
            'El primer video — un cocinero lanzando la carne al aire con musica ' +
            'de regueton — alcanza 45.000 vistas en 48 horas. El algoritmo de ' +
            'TikTok es impredecible pero poderoso.'
        },
        {
          id: 'C',
          label: 'Google Ads + Maps',
          description:
            'Campana de busqueda local ("hamburguesas Pereira", "comida rapida ' +
            'cerca") y optimizacion de perfil en Google Maps con fotos y resenas.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['digital', 'google', 'sem', 'local'],
          next: 'mkt_04',
          narrative:
            'Cuando alguien busca "hamburguesas en Pereira" tu negocio aparece ' +
            'primero. Las resenas iniciales son criticas — necesitas al menos ' +
            '4.3 estrellas para que Google te posicione bien.'
        },
        {
          id: 'D',
          label: 'WhatsApp Business + catalogo',
          description:
            'Canal de pedidos directos por WhatsApp con catalogo digital, respuestas ' +
            'automaticas y lista de difusion. Cero comision de plataformas.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones necesita un proceso para gestionar pedidos por WhatsApp sin caos.',
              bsc: { bsc_internal: -1 },
              cost: 500000
            }
          ],
          tags: ['digital', 'whatsapp', 'directo', 'bajo-costo'],
          next: 'mkt_04',
          narrative:
            'El primer dia llegan 87 mensajes. El problema: cada persona escribe ' +
            'diferente ("quiero 2 combo 1", "me da lo del pollo con papas?"). ' +
            'Se necesita un chatbot o mucha paciencia.'
        }
      ]
    },

    // =========================================================================
    // DIA 11 — Diseno de campana de lanzamiento
    // =========================================================================
    'mkt_04': {
      day: 11,
      title: 'Diseno de campana de lanzamiento',
      context:
        'Faltan 4 dias para la gran apertura. Necesitas una campana que genere ' +
        'expectativa y llene el local desde el dia uno. En Pereira, el boca a ' +
        'boca sigue siendo el canal mas poderoso: si la gente habla de ti la ' +
        'primera semana, el exito esta casi garantizado.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Gran inauguracion con evento',
          description:
            'Evento de apertura con DJ local, muestras gratis de 200 combos, ' +
            'concurso en redes y cobertura de medios locales (Caracol Pereira, ' +
            'La Tarde). Inversion fuerte, impacto inmediato.',
          cost: 12000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe preparar 200 combos gratis + demanda normal. Doble turno necesario.',
              bsc: { bsc_internal: -2 },
              cost: 3000000
            }
          ],
          tags: ['lanzamiento', 'evento', 'alto-impacto'],
          next: 'mkt_05',
          narrative:
            'El evento es un exito rotundo. 350 personas hacen fila. El DJ pone ' +
            'regueton y vallenato. Los stories de Instagram se disparan. Pero la ' +
            'cocina colapsa a las 7pm y la fila de espera llega a 45 minutos.'
        },
        {
          id: 'B',
          label: 'Campana de intriga digital',
          description:
            'Dos semanas de teasers en redes: siluetas del logo, pistas de la ' +
            'ubicacion, countdown. El dia de apertura, descuento del 30% para ' +
            'los primeros 100 que muestren el post.',
          cost: 5000000,
          revenue: 500000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['lanzamiento', 'digital', 'intriga', 'bajo-riesgo'],
          next: 'mkt_05',
          narrative:
            'La estrategia de intriga genera curiosidad. Los comentarios en ' +
            'Instagram dicen: "que sera?", "yo quiero ir!". El dia de la apertura ' +
            'llegan 120 personas — menos que un evento masivo pero mas manejable.'
        },
        {
          id: 'C',
          label: 'Alianza con Rappi para lanzamiento',
          description:
            'Lanzar exclusivamente en Rappi la primera semana con envio gratis y ' +
            'banner destacado. Rappi cobra 25% de comision pero te da visibilidad ' +
            'a 80.000 usuarios activos en Pereira.',
          cost: 7000000,
          revenue: 4000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe integrar sistema de pedidos Rappi y cumplir tiempos de entrega.',
              bsc: { bsc_internal: -1 },
              cost: 1500000
            },
            {
              area: 'FIN',
              message: 'Finanzas registra comision Rappi del 25% sobre ventas del canal.',
              bsc: { bsc_financial: -1 },
              cost: 0
            }
          ],
          tags: ['lanzamiento', 'rappi', 'delivery', 'digital'],
          next: 'mkt_05',
          narrative:
            'El primer dia en Rappi recibes 67 pedidos. La calificacion promedio ' +
            'es 4.6. Un usuario escribe: "llegó caliente y rapido, volvere." ' +
            'Pero la comision del 25% duele cuando sumas los numeros al final del dia.'
        },
        {
          id: 'D',
          label: 'Volanteo + perifoneo en zonas clave',
          description:
            'Estrategia tradicional: 10.000 volantes en UTP, Circunvalar, Centro ' +
            'y Ciudad Victoria. Perifoneo con carro valla los fines de semana. ' +
            'Barato y directo al publico objetivo.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 1, bsc_learning: -1 },
          crossEffects: [],
          tags: ['lanzamiento', 'tradicional', 'volanteo', 'economico'],
          next: 'mkt_05',
          narrative:
            'El carro valla recorre la Circunvalar anunciando combos desde $12.900. ' +
            'Algunos jovenes se burlan en redes: "eso es de los anos 90." Pero ' +
            'abuelitas y familias del barrio empiezan a llegar al local.'
        }
      ]
    },

    // =========================================================================
    // DIA 14 — Alianza estrategica
    // =========================================================================
    'mkt_05': {
      day: 14,
      title: 'Alianza estrategica',
      context:
        'Llevas una semana abierto. Las ventas son decentes pero necesitas un ' +
        'impulso. Varias oportunidades de alianza aparecen al mismo tiempo. ' +
        'Solo puedes dedicar recursos a una alianza principal este mes.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Alianza con Rappi Premium',
          description:
            'Negociar posicion destacada en Rappi, envio gratis permanente y ' +
            'combos exclusivos para la app. Rappi pide exclusividad de 3 meses.',
          cost: 8000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe garantizar despacho en 25 min o Rappi penaliza la calificacion.',
              bsc: { bsc_internal: -1 },
              cost: 2000000
            }
          ],
          tags: ['alianza', 'rappi', 'delivery', 'exclusividad'],
          next: 'mkt_06',
          narrative:
            'Rappi te asigna un banner en la pantalla principal durante 2 semanas. ' +
            'Los pedidos se triplican. El domiciliario estrella, Don Jairo en su ' +
            'moto, se vuelve el que mas entregas hace de tu restaurante.'
        },
        {
          id: 'B',
          label: 'Convenio con universidad (UTP/UCPR)',
          description:
            'Descuento del 15% con carnet estudiantil. Punto de venta o stand ' +
            'en la universidad. Acceso a 15.000 estudiantes hambrientos.',
          cost: 4000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['alianza', 'universidad', 'estudiantes', 'descuento'],
          next: 'mkt_06',
          narrative:
            'El stand en la UTP es un hit a la hora del almuerzo. Los estudiantes ' +
            'de ingenieria hacen fila de 20 minutos. El hashtag #AlmuerzoUTP ' +
            'empieza a circular. Bienestar Universitario te pide un menu saludable.'
        },
        {
          id: 'C',
          label: 'Influencer local de comida',
          description:
            'Contratar a @PereiraFoodie (85K seguidores) para una resena detallada, ' +
            '3 stories y un reel. El influencer tiene credibilidad en el nicho ' +
            'gastronomico del Eje Cafetero.',
          cost: 5500000,
          revenue: 1000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['alianza', 'influencer', 'redes-sociales', 'credibilidad'],
          next: 'mkt_06',
          narrative:
            'El influencer llega con su equipo de produccion. Graba el proceso ' +
            'de preparacion, prueba 4 platos y publica un reel de 90 segundos. ' +
            'En 24 horas el reel tiene 120.000 vistas y 800 comentarios.'
        },
        {
          id: 'D',
          label: 'Alianza con gimnasio local',
          description:
            'Cross-promotion con Smart Fit o Bodytech: descuento cruzado, menu ' +
            'fitness exclusivo, flyers en el gym. Apuntas al segmento saludable.',
          cost: 3000000,
          revenue: 1500000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe crear 3 opciones fitness con informacion nutricional.',
              bsc: { bsc_learning: 1 },
              cost: 1000000
            }
          ],
          tags: ['alianza', 'fitness', 'nicho', 'saludable'],
          next: 'mkt_06',
          narrative:
            'Los entrenadores de Smart Fit empiezan a recomendar tus bowls de ' +
            'proteina. Las ventas del menu fitness representan el 18% del total ' +
            'en la primera semana. El gerente del gym quiere extender el convenio.'
        }
      ]
    },

    // =========================================================================
    // DIA 17 — Patrocinio de evento local
    // =========================================================================
    'mkt_06': {
      day: 17,
      title: 'Patrocinio de evento local',
      context:
        'Se acercan varios eventos en Pereira. Patrocinar un evento te da ' +
        'visibilidad masiva pero el costo es alto y el retorno incierto. ' +
        'El equipo financiero dice que queda presupuesto pero no para desperdiciar.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Patrocinar Festival Gastronomico de Pereira',
          description:
            'Stand propio en el festival de 3 dias. Esperan 12.000 asistentes. ' +
            'Tu logo en toda la publicidad del evento. Degustacion de tus ' +
            'productos estrella a precio especial.',
          cost: 10000000,
          revenue: 4000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: -1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones necesita equipo extra y logistica fuera del local por 3 dias.',
              bsc: { bsc_internal: -2 },
              cost: 3000000
            }
          ],
          tags: ['evento', 'patrocinio', 'gastronomia', 'visibilidad'],
          next: 'mkt_07',
          narrative:
            'El festival es un exito. Tu stand tiene fila permanente. Vendes 800 ' +
            'unidades en 3 dias y recoges 1.200 datos de contacto. Un periodista ' +
            'de Caracol Pereira te hace una nota de 3 minutos en el noticiero regional.'
        },
        {
          id: 'B',
          label: 'No patrocinar, invertir en digital',
          description:
            'Redirigir esos $10M a campanas digitales segmentadas durante el ' +
            'mismo periodo. Menor riesgo, resultados mas medibles, pero ' +
            'sin la experiencia presencial del festival.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['digital', 'pauta', 'medible', 'conservador'],
          next: 'mkt_07',
          narrative:
            'La campana digital alcanza a 45.000 personas unicas en Pereira. ' +
            'El CTR es del 3.2%, superior al promedio del sector (1.8%). Sin ' +
            'embargo, el equipo siente que perdio la oportunidad de estar en ' +
            'el evento donde toda la ciudad hablaba de comida.'
        }
      ]
    },

    // =========================================================================
    // DIA 20 — Crisis de reputacion
    // =========================================================================
    'mkt_07': {
      day: 20,
      title: 'Crisis de reputacion',
      context:
        'Desastre. Un cliente encontro un cabello en su hamburguesa y publico ' +
        'un video en TikTok que ya tiene 180.000 vistas. Los comentarios son ' +
        'brutales: "que asco", "cierren ese antro", "denuncien a Invima". ' +
        'Tu calificacion en Google Maps bajo de 4.5 a 3.8 en 24 horas. ' +
        'La competencia esta compartiendo el video en sus estados de WhatsApp.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Respuesta publica inmediata + compensacion',
          description:
            'Video del gerente general pidiendo disculpas, mostrando la cocina ' +
            'limpia y ofreciendo combo gratis al cliente afectado + invitacion ' +
            'abierta a conocer la cocina. Transparencia total.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones implementa protocolo de higiene reforzado con gorros, guantes y auditoria diaria.',
              bsc: { bsc_internal: 2, bsc_learning: 2 },
              cost: 2000000
            }
          ],
          tags: ['crisis', 'transparencia', 'disculpa', 'reputacion'],
          next: 'mkt_08',
          narrative:
            'El video de disculpa tiene 95.000 vistas. Los comentarios cambian: ' +
            '"al menos respondieron", "eso es ser profesional", "les doy otra ' +
            'oportunidad". La calificacion sube lentamente a 4.1 en una semana.'
        },
        {
          id: 'B',
          label: 'Silencio estrategico + mejora interna',
          description:
            'No responder publicamente para no darle mas visibilidad al video. ' +
            'Internamente, contratar empresa de higiene y redisenar protocolo ' +
            'de cocina. Que los hechos hablen.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: -2, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones contrata auditoria externa de higiene y recertifica la cocina.',
              bsc: { bsc_internal: 3 },
              cost: 3500000
            }
          ],
          tags: ['crisis', 'silencio', 'mejora-interna', 'riesgo'],
          next: 'mkt_08',
          narrative:
            'El silencio alimenta mas la rabia en redes. Nuevos comentarios: ' +
            '"ni siquiera se disculparon", "les vale". Pero dos semanas despues, ' +
            'cuando publican la certificacion de Invima, el ruido se calma.'
        },
        {
          id: 'C',
          label: 'Contrademanda legal + comunicado formal',
          description:
            'Investigar si el video fue manipulado. Emitir comunicado formal ' +
            'desmintiendo y amenazando acciones legales si el video es falso. ' +
            'Riesgo: si es real, la situacion empeora drasticamente.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: -3, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['crisis', 'legal', 'agresivo', 'alto-riesgo'],
          next: 'mkt_08',
          narrative:
            'El comunicado legal genera mas hate: "ahora amenazan al cliente?", ' +
            '"tipico de empresa grande que se cree intocable". Un medio regional ' +
            'publica: "Restaurante amenaza a cliente que denuncio falta de ' +
            'higiene". La crisis se duplica.'
        },
        {
          id: 'D',
          label: 'Campana de influencers mostrando la cocina',
          description:
            'Invitar a 5 microinfluencers locales a grabar en vivo desde la ' +
            'cocina, mostrando los procesos de higiene. Contraatacar con ' +
            'contenido positivo masivo.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['crisis', 'influencers', 'transparencia', 'contenido'],
          next: 'mkt_08',
          narrative:
            'Los influencers graban la cocina impecable. "Esto esta mas limpio ' +
            'que mi casa", dice uno. Los videos acumulan 280.000 vistas. La ' +
            'narrativa cambia, pero algunos siguen desconfiando: "les pagaron ' +
            'para decir eso."'
        }
      ]
    },

    // =========================================================================
    // DIA 23 — Programa de fidelizacion
    // =========================================================================
    'mkt_08': {
      day: 23,
      title: 'Programa de fidelizacion',
      context:
        'Despues de la crisis, necesitas retener a los clientes que tienes y ' +
        'darles razones para volver. Un programa de lealtad bien disenado puede ' +
        'aumentar la frecuencia de compra en 25-40%. En Pereira, el cliente ' +
        'promedio de comida rapida compra 2.3 veces por semana si esta fidelizado.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Tarjeta de sellos clasica',
          description:
            'Compra 8 combos y el noveno es gratis. Simple, tangible, sin ' +
            'tecnologia. El cliente lleva la tarjeta fisica en la billetera.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [],
          tags: ['fidelizacion', 'tarjeta', 'simple', 'tradicional'],
          next: 'mkt_09',
          narrative:
            'Las tarjetas se imprimen en una litografia del centro. El 60% de ' +
            'los clientes las acepta pero solo el 25% las lleva de vuelta. ' +
            'Algunos clientes avispados fotocopia tarjetas casi llenas.'
        },
        {
          id: 'B',
          label: 'App de puntos con gamificacion',
          description:
            'App propia donde acumulas puntos por compra, subes de nivel (Bronce, ' +
            'Plata, Oro, Diamante), desbloqueas recompensas y recibes ofertas ' +
            'personalizadas. Inversion alta, datos valiosos.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe integrar la app con el sistema POS del restaurante.',
              bsc: { bsc_internal: -1 },
              cost: 2000000
            }
          ],
          tags: ['fidelizacion', 'app', 'gamificacion', 'datos', 'tecnologia'],
          next: 'mkt_09',
          narrative:
            'La app se lanza con 500 descargas la primera semana. El sistema de ' +
            'niveles engancha: "me falta un combo para llegar a Plata". Sin ' +
            'embargo, el 30% reporta bugs y el soporte tecnico se satura.'
        },
        {
          id: 'C',
          label: 'Cashback por WhatsApp',
          description:
            'Sistema simple por WhatsApp: el cliente envia foto del recibo y ' +
            'recibe 10% de cashback en credito para la proxima compra. Sin app, ' +
            'sin tarjeta, solo WhatsApp.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['fidelizacion', 'whatsapp', 'cashback', 'practico'],
          next: 'mkt_09',
          narrative:
            'El sistema es un hit entre jovenes: "¡plata de vuelta sin app rara!" ' +
            'La administracion manual es viable con 50 clientes/dia pero si crece ' +
            'necesitara automatizacion.'
        },
        {
          id: 'D',
          label: 'Club VIP por suscripcion',
          description:
            'Membresia mensual de $29.900 que incluye: 1 combo gratis por semana, ' +
            'descuento permanente del 20% y acceso anticipado a nuevos productos.',
          cost: 5000000,
          revenue: 8000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'FIN',
              message: 'Finanzas debe proyectar ingreso recurrente por suscripciones.',
              bsc: { bsc_financial: 2 },
              cost: 0
            }
          ],
          tags: ['fidelizacion', 'suscripcion', 'vip', 'ingreso-recurrente'],
          next: 'mkt_09',
          narrative:
            '180 personas se suscriben el primer mes. El ingreso fijo de $5.3M ' +
            'mensuales emociona a finanzas. Pero los suscriptores consumen mas ' +
            'de lo esperado y el combo gratis semanal presiona los costos.'
        }
      ]
    },

    // =========================================================================
    // DIA 26 — Expansion de mercado
    // =========================================================================
    'mkt_09': {
      day: 26,
      title: 'Expansion de mercado — nuevos segmentos',
      context:
        'Tu base de clientes actual esta consolidada pero el crecimiento se ' +
        'estanca. El equipo de datos muestra que el 70% de tus clientes son ' +
        'hombres de 18-28 anos. Hay segmentos enteros sin atender: familias, ' +
        'ejecutivos, ninos, adultos mayores.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Menu infantil + zona de juegos',
          description:
            'Crear combo kids ($14.900) con juguete coleccionable, zona infantil ' +
            'en el local y material para colorear. Atraer familias con ninos ' +
            'que gastan mas en promedio ($65.000 vs $24.000 individual).',
          cost: 8000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe adaptar espacio fisico y cumplir normas de seguridad infantil.',
              bsc: { bsc_internal: -2 },
              cost: 4000000
            }
          ],
          tags: ['expansion', 'familias', 'ninos', 'ticket-alto'],
          next: 'mkt_10',
          narrative:
            'El primer sabado con zona infantil llegan 35 familias. Los papas ' +
            'piden combos dobles mientras los ninos juegan. El ticket promedio ' +
            'familiar es $72.000. Pero el ruido de los ninos incomoda a los ' +
            'jovenes que vienen solos.'
        },
        {
          id: 'B',
          label: 'Linea ejecutiva + domicilio empresarial',
          description:
            'Menu premium para oficinas: ensaladas ejecutivas, wraps, jugos ' +
            'naturales. Domicilio a empresas del centro y Megacentro con pedido ' +
            'minimo de $150.000. Horario 11am-2pm.',
          cost: 6000000,
          revenue: 5000000,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe crear linea de produccion separada para pedidos ejecutivos.',
              bsc: { bsc_internal: -1 },
              cost: 2500000
            }
          ],
          tags: ['expansion', 'ejecutivos', 'b2b', 'domicilio'],
          next: 'mkt_10',
          narrative:
            'El primer pedido corporativo llega de una firma de abogados en la ' +
            'Circunvalar: 15 almuerzos ejecutivos por $375.000. El delivery en ' +
            'caja elegante impresiona. "Esto no parece comida rapida," dicen.'
        },
        {
          id: 'C',
          label: 'Late night + fiesteros',
          description:
            'Extender horario hasta las 3am los viernes y sabados. Capturar el ' +
            'mercado de la Zona Rosa de Pereira (Circunvalar). Combo nocturno ' +
            'con descuento para after-party.',
          cost: 4000000,
          revenue: 4000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones necesita turno nocturno, seguridad y permisos de horario extendido.',
              bsc: { bsc_internal: -2 },
              cost: 3000000
            }
          ],
          tags: ['expansion', 'nocturno', 'fiesta', 'zona-rosa'],
          next: 'mkt_10',
          narrative:
            'El primer viernes nocturno vendes 120 combos entre 11pm y 3am. Los ' +
            'clientes llegan alegres despues del rumba. Un grupo de 8 pide $400.000 ' +
            'en hamburguesas a las 2am. Pero la limpieza del local al dia siguiente ' +
            'es un desafio.'
        },
        {
          id: 'D',
          label: 'Segmento saludable + vegetariano',
          description:
            'Ampliar el menu con opciones vegetarianas y plant-based: hamburguesa ' +
            'de lentejas, nuggets de coliflor, batidos verdes. Pereira tiene un ' +
            'nicho veggie creciente de 2.000+ personas activas.',
          cost: 5000000,
          revenue: 2000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe evitar contaminacion cruzada y conseguir proveedores plant-based.',
              bsc: { bsc_internal: -1, bsc_learning: 2 },
              cost: 2000000
            }
          ],
          tags: ['expansion', 'vegetariano', 'saludable', 'tendencia'],
          next: 'mkt_10',
          narrative:
            'La hamburguesa de lentejas se vuelve viral entre el grupo de yoga de ' +
            'Parque Olaya. Las ventas del segmento representan el 12% del total. ' +
            'Pero un purista tuitea: "una cadena de comida rapida vendiendo ' +
            'vegetariano es greenwashing."'
        }
      ]
    },

    // =========================================================================
    // DIA 29 — Contraataque competitivo
    // =========================================================================
    'mkt_10': {
      day: 29,
      title: 'Contraataque: la competencia golpea fuerte',
      context:
        'La cadena rival acaba de lanzar una promocion agresiva: "2x1 en todo ' +
        'el menu, toda la semana". Ademas, pegaron volantes en la puerta de tu ' +
        'local diciendo "¿Por que pagar mas? Ven con nosotros". Tu equipo esta ' +
        'furioso. Las ventas cayeron 30% en los ultimos 3 dias.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Igualar la promocion: 2x1 tambien',
          description:
            'Lanzar tu propio 2x1 inmediatamente. Guerra de precios directa. ' +
            'Canibaliza margen pero no pierdes clientes.',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: -3, bsc_customer: 1, bsc_internal: -1, bsc_learning: 0 },
          crossEffects: [
            {
              area: 'FIN',
              message: 'Finanzas alerta: margen neto cae a 2% durante la promocion.',
              bsc: { bsc_financial: -3 },
              cost: 0
            },
            {
              area: 'OPS',
              message: 'Operaciones debe duplicar produccion con el mismo equipo.',
              bsc: { bsc_internal: -2 },
              cost: 2000000
            }
          ],
          tags: ['competencia', 'guerra-precios', 'reactivo', 'riesgo'],
          next: 'mkt_11',
          narrative:
            'La guerra de precios arranca. Los clientes estan felices — compran ' +
            'en ambas cadenas. Pero ninguna gana dinero. El equipo financiero ' +
            'calcula que a este ritmo, en 15 dias ambos pierden $20M COP.'
        },
        {
          id: 'B',
          label: 'Diferenciarse con valor agregado',
          description:
            'No competir por precio. Lanzar campana "Nosotros no regalamos, ' +
            'damos calidad": combo premium con postre gratis, empaque ecologico ' +
            'y nota de agradecimiento personalizada.',
          cost: 5000000,
          revenue: 1000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['competencia', 'diferenciacion', 'valor', 'calidad'],
          next: 'mkt_11',
          narrative:
            'Los clientes que buscan precio se van con la competencia. Pero los ' +
            'que valoran experiencia se quedan y traen amigos. Las resenas en ' +
            'Google mencionan: "la nota personalizada me hizo el dia."'
        },
        {
          id: 'C',
          label: 'Campana de humor en redes',
          description:
            'Hacer un meme respondiendo al volante del competidor. Tono ' +
            'humoristico, no agresivo: "Nuestras hamburguesas no necesitan ' +
            'promocion para que vuelvas." Viralizar con pauta.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['competencia', 'humor', 'redes-sociales', 'viral'],
          next: 'mkt_11',
          narrative:
            'El meme se comparte 2.400 veces. Los comentarios explotan: "jajaja ' +
            'les respondieron con clase", "equipo marketing, les pago si me ' +
            'contratan". Hasta el competidor responde con otro meme. La batalla ' +
            'de memes beneficia a ambos en alcance.'
        },
        {
          id: 'D',
          label: 'Ignorar y enfocarse en fidelizacion',
          description:
            'No gastar energia en la competencia. Activar el programa de lealtad ' +
            'con beneficios extra para clientes existentes: doble de puntos, ' +
            'acceso a menu secreto, invitacion a evento privado.',
          cost: 4000000,
          revenue: 2000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['competencia', 'fidelizacion', 'largo-plazo', 'estrategico'],
          next: 'mkt_11',
          narrative:
            'Los clientes fieles aprecian el trato especial. El "menu secreto" ' +
            'genera misterio y boca a boca. Pero los clientes nuevos que aun ' +
            'no estan fidelizados se van con el 2x1 de la competencia.'
        }
      ]
    },

    // =========================================================================
    // DIA 32 — Campana estacional
    // =========================================================================
    'mkt_11': {
      day: 32,
      title: 'Campana estacional',
      context:
        'Se acerca el Dia de la Madre, una de las fechas con mayor consumo en ' +
        'restaurantes en Colombia. El ano pasado, los restaurantes de Pereira ' +
        'reportaron un aumento del 45% en ventas ese fin de semana. Tu equipo ' +
        'tiene 10 dias para disenar y ejecutar una campana.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Combo "Mama Merece lo Mejor"',
          description:
            'Combo premium para dos personas ($49.900) con postre especial, ' +
            'tarjeta de felicitacion y rosa. Decoracion tematica en el local. ' +
            'Reservas anticipadas por WhatsApp.',
          cost: 5000000,
          revenue: 12000000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe preparar 300 kits (postre + tarjeta + rosa) y habilitar reservas.',
              bsc: { bsc_internal: -1 },
              cost: 2000000
            }
          ],
          tags: ['estacional', 'dia-madre', 'combo', 'emocional'],
          next: 'mkt_12',
          narrative:
            'Las reservas se llenan en 48 horas. El local se decora con flores ' +
            'y luces. Las mamas lloran cuando leen las tarjetas. Instagram se ' +
            'llena de fotos etiquetando al restaurante. Es el mejor dia de ventas ' +
            'hasta ahora: $18M en un solo dia.'
        },
        {
          id: 'B',
          label: 'Concurso "Tu mama es la mejor"',
          description:
            'Concurso en redes: sube una foto con tu mama y cuenta por que es ' +
            'la mejor. Los 3 mas votados ganan cena gratis para toda la familia. ' +
            'Viralidad organica.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['estacional', 'concurso', 'ugc', 'redes-sociales'],
          next: 'mkt_12',
          narrative:
            'Llegan 420 participaciones. Las historias son conmovedoras. Un video ' +
            'de una abuelita de Cuba (Pereira) se hace viral con 500K vistas. ' +
            'El restaurante gana reputacion emocional pero las ventas directas ' +
            'del dia no suben tanto como esperaban.'
        },
        {
          id: 'C',
          label: 'Delivery especial para mamas',
          description:
            'Caja regalo con combo premium, postre artesanal y nota personalizada, ' +
            'entregada a domicilio con moño. Precio: $59.900. Solo por pedido ' +
            'anticipado (48h antes).',
          cost: 4000000,
          revenue: 8000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones coordina 150 entregas el mismo dia — necesita alianza con servicio de mensajeria.',
              bsc: { bsc_internal: -2 },
              cost: 1500000
            }
          ],
          tags: ['estacional', 'delivery', 'regalo', 'premium'],
          next: 'mkt_12',
          narrative:
            'Se venden 185 cajas regalo. Las fotos de las mamas sorprendidas ' +
            'inundan WhatsApp y redes. Un problema: 12 entregas llegan despues ' +
            'de la 1pm por la demanda y el trafico del Dia de la Madre.'
        },
        {
          id: 'D',
          label: 'No hacer campana especifica',
          description:
            'Mantener operacion normal y esperar que el flujo natural del dia ' +
            'aumente las ventas sin inversion adicional. Guardar presupuesto ' +
            'para campanas mas adelante.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [],
          tags: ['estacional', 'ahorro', 'pasivo', 'conservador'],
          next: 'mkt_12',
          narrative:
            'El Dia de la Madre llega y tu local esta vacio comparado con la ' +
            'competencia. Toda Pereira esta decorada con flores y promociones. ' +
            'Tu local parece el unico que no se entero. Las ventas suben apenas ' +
            'un 8% — muy lejos del 45% promedio del sector.'
        }
      ]
    },

    // =========================================================================
    // DIA 36 — Estrategia de influencers
    // =========================================================================
    'mkt_12': {
      day: 36,
      title: 'Estrategia de influencers',
      context:
        'El marketing de influencers es el canal de mayor crecimiento en Pereira. ' +
        'Tienes tres propuestas sobre la mesa de perfiles muy diferentes. Cada ' +
        'uno llega a un publico distinto y tiene ventajas y riesgos unicos.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Macroinfluencer nacional (500K+)',
          description:
            'Contratar a un creador de contenido famoso en Colombia para un ' +
            'video patrocinado. Alcance masivo pero audiencia dispersa — solo ' +
            'el 8% esta en el Eje Cafetero.',
          cost: 15000000,
          revenue: 5000000,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['influencer', 'macro', 'nacional', 'alcance'],
          next: 'mkt_13',
          narrative:
            'El video tiene 800.000 vistas pero los comentarios son 80% de ' +
            'Bogota y Medellin: "que lastima que no hay en mi ciudad." Solo ' +
            '2.000 interacciones son de Pereira. El ROI es bajo para un ' +
            'negocio local.'
        },
        {
          id: 'B',
          label: '5 microinfluencers locales (5K-30K)',
          description:
            'Contratar a 5 creadores pereiranos: foodie, fitness, mama blogger, ' +
            'universitario y pareja joven. Menor alcance individual pero ' +
            'audiencia 100% local y confiable.',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['influencer', 'micro', 'local', 'diverso'],
          next: 'mkt_13',
          narrative:
            'Cada microinfluencer muestra tu restaurante desde su angulo: la mama ' +
            'destaca la zona kids, el fitness resena el bowl proteico, la pareja ' +
            'joven prueba el menu completo. 5 audiencias diferentes, 5 razones ' +
            'para visitar. La conversion es 4x mayor que la del macroinfluencer.'
        },
        {
          id: 'C',
          label: 'Embajador de marca (contrato 3 meses)',
          description:
            'Elegir a un creador local carismatico y hacerlo "la cara" de tu marca. ' +
            'Contenido semanal, presencia en eventos, menciones organicas. ' +
            'Relacion de largo plazo vs. publicaciones puntuales.',
          cost: 10000000,
          revenue: 4000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [],
          tags: ['influencer', 'embajador', 'largo-plazo', 'consistencia'],
          next: 'mkt_13',
          narrative:
            'El embajador se enamora de la marca y lo transmite. Su comunidad ' +
            'empieza a identificar tu restaurante con el. "Vamos al restaurante ' +
            'de [nombre]", dicen. Riesgo: si el embajador comete un error publico, ' +
            'tu marca paga las consecuencias.'
        },
        {
          id: 'D',
          label: 'UGC: que los clientes sean los influencers',
          description:
            'En vez de pagar influencers, crear un rincón instagrameable en el local, ' +
            'hashtag propio y sorteo semanal entre quienes publiquen. El contenido ' +
            'lo crean los clientes reales.',
          cost: 2500000,
          revenue: 1000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['influencer', 'ugc', 'comunidad', 'economico'],
          next: 'mkt_13',
          narrative:
            'El rincon instagrameable (neon con frase "Hambre de mas" + pared de ' +
            'ladrillo) se vuelve spot de fotos. 300 publicaciones con tu hashtag ' +
            'en el primer mes. Contenido autentico, gratuito y constante. Pero ' +
            'la calidad visual varia mucho.'
        }
      ]
    },

    // =========================================================================
    // DIA 39 — Decision de rebranding
    // =========================================================================
    'mkt_13': {
      day: 39,
      title: 'Decision de rebranding',
      context:
        'Despues de 5 semanas operando, los datos cuentan una historia: el ' +
        'nombre de la marca tiene 62% de reconocimiento en Pereira pero la ' +
        'encuesta de percepcion revela que el 40% la asocia con la crisis del ' +
        'cabello (dia 20). El equipo de marketing propone un refresh de marca. ' +
        'El equipo financiero dice que es tirar plata.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Hacer rebranding parcial',
          description:
            'Cambiar eslogan, actualizar colores y tipografia, lanzar nueva ' +
            'campana de posicionamiento. Mantener el nombre pero refrescar ' +
            'todo lo visual. Comunicar evolucion, no reinicio.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe cambiar empaques, uniformes y senalizacion del local.',
              bsc: { bsc_internal: -1 },
              cost: 3000000
            }
          ],
          tags: ['rebranding', 'evolucion', 'imagen', 'inversion'],
          next: 'mkt_14',
          narrative:
            'El nuevo eslogan "Sabor que habla por si mismo" resuena. Los nuevos ' +
            'empaques con diseno minimalista reciben elogios. Las asociaciones ' +
            'negativas bajan del 40% al 22% en dos semanas. Pero los clientes ' +
            'fieles se confunden: "¿cambiaron de dueno?"'
        },
        {
          id: 'B',
          label: 'Mantener marca y reforzar con acciones',
          description:
            'No gastar en rebranding. Destinar ese presupuesto a acciones que ' +
            'construyan percepcion positiva: eventos comunitarios, cocina abierta, ' +
            'certificaciones visibles. Que los hechos cambien la narrativa.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones implementa jornadas de cocina abierta cada sabado.',
              bsc: { bsc_internal: 1, bsc_customer: 2 },
              cost: 1000000
            }
          ],
          tags: ['rebranding', 'conservador', 'acciones', 'reputacion'],
          next: 'mkt_14',
          narrative:
            'Las jornadas de cocina abierta empiezan a cambiar la narrativa. Los ' +
            'clientes graban y comparten: "miren que limpio". La percepcion negativa ' +
            'baja lentamente pero de forma genuina. El proceso es mas lento ' +
            'pero mas creible.'
        }
      ]
    },

    // =========================================================================
    // DIA 42 — Retencion vs. Adquisicion
    // =========================================================================
    'mkt_14': {
      day: 42,
      title: 'Retencion vs. adquisicion de clientes',
      context:
        'Quedan 3 dias de simulacion y $12M de presupuesto. Los datos muestran ' +
        'que adquirir un cliente nuevo cuesta $8.500 pero retener uno existente ' +
        'cuesta $2.100. Sin embargo, tu base de clientes actual (1.800 activos) ' +
        'no es suficiente para las metas de crecimiento. Debate clasico: ' +
        '¿invertir en crecer o en retener?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Todo a adquisicion',
          description:
            'Volcar los $12M en campanas de alcance, descuentos de primera compra ' +
            'y alianzas para captar 1.400 clientes nuevos. Meta agresiva: ' +
            'duplicar la base.',
          cost: 12000000,
          revenue: 5000000,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe preparar capacidad para el doble de clientes.',
              bsc: { bsc_internal: -2 },
              cost: 3000000
            }
          ],
          tags: ['adquisicion', 'crecimiento', 'agresivo', 'volumen'],
          next: 'mkt_15',
          narrative:
            'La campana atrae 1.100 clientes nuevos (debajo de la meta). El local ' +
            'se llena pero la experiencia se resiente: tiempos de espera suben a ' +
            '25 min, el equipo esta estresado y las resenas de clientes nuevos ' +
            'son tibias: 3.9 estrellas promedio.'
        },
        {
          id: 'B',
          label: 'Todo a retencion',
          description:
            'Invertir los $12M en programa de lealtad, experiencias VIP, descuentos ' +
            'exclusivos y atencion personalizada. Meta: que cada cliente actual ' +
            'compre 1 vez mas por semana.',
          cost: 12000000,
          revenue: 8000000,
          bsc: { bsc_financial: 2, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['retencion', 'lealtad', 'eficiencia', 'largo-plazo'],
          next: 'mkt_15',
          narrative:
            'Los clientes existentes se sienten especiales. La frecuencia de ' +
            'compra sube de 2.3 a 3.1 veces por semana. Las resenas mejoran. ' +
            'Pero la base de clientes no crece y la competencia sigue robando ' +
            'clientes potenciales.'
        },
        {
          id: 'C',
          label: 'Mix 60% retencion / 40% adquisicion',
          description:
            'Balance estrategico: $7.2M para fortalecer la relacion con clientes ' +
            'actuales y $4.8M para captar nuevos con campanas focalizadas en ' +
            'segmentos desatendidos.',
          cost: 12000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe manejar crecimiento moderado sin comprometer calidad.',
              bsc: { bsc_internal: 0 },
              cost: 1000000
            }
          ],
          tags: ['retencion', 'adquisicion', 'equilibrio', 'estrategico'],
          next: 'mkt_15',
          narrative:
            'La estrategia mixta da resultados solidos sin ser espectaculares. ' +
            'Se captan 450 clientes nuevos y la frecuencia de los existentes ' +
            'sube a 2.8. El equipo siente que fue la decision "correcta pero ' +
            'aburrida". A veces lo aburrido gana.'
        },
        {
          id: 'D',
          label: 'Referidos: clientes traen clientes',
          description:
            'Sistema de referidos: cada cliente que trae un amigo nuevo recibe ' +
            'combo gratis para ambos. Combina adquisicion y retencion en una ' +
            'sola tactica.',
          cost: 8000000,
          revenue: 7000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['referidos', 'viralidad', 'boca-a-boca', 'hibrido'],
          next: 'mkt_15',
          narrative:
            'El programa de referidos explota. 600 clientes traen al menos un ' +
            'amigo. El costo de adquisicion baja a $4.200 (la mitad del ' +
            'promedio). Los referidos tienen 35% mas probabilidad de volver. ' +
            'Es la tactica con mejor ROI del simulador.'
        }
      ]
    },

    // =========================================================================
    // DIA 44 — Estrategia final de marketing
    // =========================================================================
    'mkt_15': {
      day: 44,
      title: 'Estrategia final de marketing',
      context:
        'Ultimo dia de decisiones. El directorio quiere saber cual sera la ' +
        'estrategia de marketing para el proximo trimestre. Debes presentar ' +
        'una vision clara que integre todo lo aprendido en estos 45 dias. ' +
        'La competencia tambien esta definiendo su rumbo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Liderazgo en marca y comunidad',
          description:
            'Apostar por ser la marca mas querida de Pereira. Invertir en ' +
            'comunidad, eventos, RSE, contenido emocional. Menos promociones, ' +
            'mas conexion. Modelo Starbucks: la gente paga por pertenecer.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe mantener estandar impecable — cada interaccion es un momento de marca.',
              bsc: { bsc_customer: 1, bsc_internal: 1 },
              cost: 0
            }
          ],
          tags: ['estrategia-final', 'marca', 'comunidad', 'largo-plazo'],
          next: null,
          narrative:
            'El equipo presenta la vision al directorio con emocion. "No vendemos ' +
            'hamburguesas, vendemos momentos". El financiero levanta la ceja ' +
            'pero los numeros de retencion lo respaldan. La marca empieza a ' +
            'significar algo mas que comida rapida en Pereira.'
        },
        {
          id: 'B',
          label: 'Liderazgo en digital y datos',
          description:
            'Convertirse en la cadena mas digital de Pereira: app propia, ' +
            'analisis de datos para personalizar ofertas, automatizacion de ' +
            'marketing, CRM avanzado. Modelo Dominos: la tecnologia vende.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe digitalizarse: pedidos automaticos, inventario inteligente.',
              bsc: { bsc_internal: 2, bsc_learning: 2 },
              cost: 0
            }
          ],
          tags: ['estrategia-final', 'digital', 'datos', 'tecnologia'],
          next: null,
          narrative:
            'El plan de digitalizacion impresiona al directorio. "Con estos datos ' +
            'podemos predecir que quiere cada cliente antes de que lo pida." ' +
            'El reto: Pereira no es Silicon Valley — el 25% de los clientes ' +
            'prefiere pedir en persona, no en una app.'
        },
        {
          id: 'C',
          label: 'Expansion geografica agresiva',
          description:
            'Abrir 2 locales mas en Pereira (Circunvalar y Centro) y 1 en ' +
            'Dosquebradas antes de fin de ano. Marketing centrado en ' +
            'awareness de nuevas ubicaciones. Modelo McDonalds: estar en ' +
            'todas partes.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: -2, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe disenar modelo replicable para nuevos locales.',
              bsc: { bsc_internal: -3, bsc_learning: 2 },
              cost: 0
            },
            {
              area: 'FIN',
              message: 'Finanzas debe conseguir financiacion para 3 nuevos locales.',
              bsc: { bsc_financial: -3 },
              cost: 0
            }
          ],
          tags: ['estrategia-final', 'expansion', 'geografica', 'agresivo'],
          next: null,
          narrative:
            'La propuesta de expansion genera nerviosismo. "Aun no dominamos ' +
            'un local y ya queremos tres mas?" dice el de operaciones. Pero ' +
            'el gerente general recuerda: "en comida rapida, la ubicacion es ' +
            'el 50% del exito. Si no crecemos, morimos."'
        },
        {
          id: 'D',
          label: 'Diversificacion de producto',
          description:
            'Expandir la oferta: desayunos (6-10am), cafe de especialidad, ' +
            'pasteleria, catering empresarial. Multiples ocasiones de consumo ' +
            'con la misma marca. Modelo Tostao: mas momentos, mas ventas.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: -1, bsc_learning: 2 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe ampliar horarios, capacitar personal y diversificar proveedores.',
              bsc: { bsc_internal: -2, bsc_learning: 1 },
              cost: 0
            }
          ],
          tags: ['estrategia-final', 'diversificacion', 'producto', 'crecimiento'],
          next: null,
          narrative:
            'Los desayunos son la idea que mas emociona al equipo. "En Pereira ' +
            'la gente madruga y no hay opciones rapidas decentes antes de las 8am." ' +
            'El reto operativo es enorme: turnos de 5am, menu totalmente nuevo, ' +
            'y un equipo que ya esta cansado. Pero el potencial es real.'
        }
      ]
    },

    // =========================================================================
    // NODOS DE RAMIFICACION — Decisiones intermedias condicionales
    // =========================================================================

    // DIA 9 — Ramificacion: tono de comunicacion
    'mkt_branch_01': {
      day: 9,
      title: 'Tono de comunicacion en redes',
      context:
        'Tu community manager necesita una guia de tono. Los primeros posts ' +
        'estan saliendo genericos y sin personalidad. En Pereira, las marcas ' +
        'que conectan usan humor local, referencias al parche y lenguaje cercano.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Tono informal y humoristico',
          description:
            'Memes, humor pereirano, respuestas con emoticones, lenguaje de ' +
            'parceria. "Venite al parche mas sabroso de la Perla". Riesgo: ' +
            'puede no verse serio para algunos segmentos.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [],
          tags: ['comunicacion', 'tono', 'humor', 'informal'],
          next: 'mkt_04',
          narrative:
            'El primer meme ("cuando el hambre te pega mas duro que la ' +
            'lluvia de las 3pm en Pereira") tiene 3.200 compartidas. Los DMs ' +
            'aumentan un 40%. Una senora escribe: "por favor, mas seriedad." ' +
            'El equipo la ignora amablemente.'
        },
        {
          id: 'B',
          label: 'Tono profesional y aspiracional',
          description:
            'Comunicacion limpia, fotos profesionales, copy que inspire. ' +
            '"La mejor experiencia gastronomica de Pereira te espera." ' +
            'Consistente con marcas premium.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [],
          tags: ['comunicacion', 'tono', 'profesional', 'premium'],
          next: 'mkt_04',
          narrative:
            'Las fotos profesionales se ven increibles. El engagement es menor ' +
            'que con humor pero la percepcion de calidad sube. Un chef famoso ' +
            'comparte tu post y dice: "me gusta la estetica de esta marca."'
        }
      ]
    },

    // DIA 13 — Ramificacion: presupuesto apretado
    'mkt_branch_02': {
      day: 13,
      title: 'Presupuesto apretado — recortar o pedir mas',
      context:
        'El area financiera informa que el presupuesto de marketing se ha ' +
        'gastado mas rapido de lo planeado. Quedan $45M pero aun faltan 32 ' +
        'dias de operacion. Necesitas decidir como manejar los recursos.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Recortar y optimizar',
          description:
            'Reducir pauta pagada un 50%, enfocarse en contenido organico, ' +
            'renegociar contratos de influencers, priorizar canales con mejor ROI.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['presupuesto', 'optimizacion', 'ahorro', 'organico'],
          next: 'mkt_05',
          narrative:
            'El recorte obliga a ser creativo. El equipo descubre que el contenido ' +
            'organico (reels de cocina, historias del equipo) genera 60% mas ' +
            'engagement que la pauta pagada. "A veces menos es mas," reflexiona ' +
            'el community manager.'
        },
        {
          id: 'B',
          label: 'Solicitar ampliacion de presupuesto',
          description:
            'Presentar caso de negocio al directorio pidiendo $20M adicionales. ' +
            'Justificar con metricas de adquisicion y proyeccion de ventas.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [
            {
              area: 'FIN',
              message: 'Finanzas debe reasignar $20M de otro rubro al presupuesto de marketing.',
              bsc: { bsc_financial: -2 },
              cost: 0
            }
          ],
          tags: ['presupuesto', 'ampliacion', 'inversion', 'riesgo'],
          next: 'mkt_05',
          narrative:
            'El directorio aprueba $15M adicionales (no los $20M). El CEO dice: ' +
            '"Les doy esta plata pero quiero ver resultados medibles — no mas ' +
            'likes, quiero ventas." La presion aumenta.'
        }
      ]
    },

    // DIA 25 — Ramificacion: dato sorpresa del mercado
    'mkt_branch_03': {
      day: 25,
      title: 'Dato sorpresa: encuesta de satisfaccion',
      context:
        'Los resultados de la primera encuesta de satisfaccion acaban de llegar. ' +
        'Hallazgo sorpresivo: el 75% de los clientes dicen que la comida es ' +
        'excelente PERO el 52% dice que el servicio al cliente es "regular o malo". ' +
        'El problema no es el producto, es la experiencia.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Campana interna: "El cliente primero"',
          description:
            'Invertir en capacitacion del personal, guion de atencion, bonos por ' +
            'resena positiva. Resolver la raiz del problema antes de seguir ' +
            'invirtiendo en atraer gente.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones implementa capacitacion de servicio al cliente para todo el equipo.',
              bsc: { bsc_internal: 2, bsc_learning: 2, bsc_customer: 2 },
              cost: 2000000
            }
          ],
          tags: ['servicio', 'capacitacion', 'cultura', 'interno'],
          next: 'mkt_09',
          narrative:
            'El taller de servicio transforma al equipo. Aprenden a saludar con ' +
            'nombre, a manejar quejas sin ponerse a la defensiva, y a despedir ' +
            'con "vuelve pronto, parce". Las resenas mejoran de 3.8 a 4.4 en ' +
            'dos semanas. Un cliente escribe: "la hamburguesa ya era buena, ' +
            'pero ahora la atencion es otra cosa."'
        },
        {
          id: 'B',
          label: 'Compensar con marketing: mas promociones',
          description:
            'Si el servicio no es perfecto, compensar con mas valor: mejores ' +
            'promos, regalos, experiencias. Que el cliente perdone el servicio ' +
            'por el precio.',
          cost: 6000000,
          revenue: 2000000,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 0, bsc_learning: 0 },
          crossEffects: [],
          tags: ['servicio', 'compensacion', 'promo', 'pano-caliente'],
          next: 'mkt_09',
          narrative:
            'Las promociones atraen gente pero el ciclo se repite: vienen por ' +
            'el precio, se decepcionan con el servicio, dejan resena tibia. ' +
            'El equipo de marketing empieza a sentir que esta tapando un hueco ' +
            'que no le corresponde.'
        },
        {
          id: 'C',
          label: 'Implementar sistema de feedback en tiempo real',
          description:
            'QR en cada mesa que lleva a encuesta de 3 preguntas. Si el cliente ' +
            'califica mal, el gerente se acerca en los siguientes 2 minutos a ' +
            'resolver. Deteccion y correccion inmediata.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            {
              area: 'OPS',
              message: 'Operaciones debe empoderar al gerente de turno para resolver quejas en el acto.',
              bsc: { bsc_internal: 1, bsc_learning: 1 },
              cost: 500000
            }
          ],
          tags: ['servicio', 'feedback', 'qr', 'datos', 'tiempo-real'],
          next: 'mkt_09',
          narrative:
            'El sistema QR revela patrones: los viernes a las 7pm el servicio ' +
            'colapsa por falta de personal. Los lunes son perfectos. Con datos ' +
            'concretos, operaciones redistribuye turnos. La satisfaccion sube ' +
            'un 18% en una semana.'
        }
      ]
    },

    // DIA 30 — Ramificacion: oportunidad de PR gratuito
    'mkt_branch_04': {
      day: 30,
      title: 'Oportunidad inesperada: nota en medio nacional',
      context:
        'Un periodista de la revista Semana esta haciendo un especial sobre ' +
        '"emprendimientos gastronomicos en ciudades intermedias de Colombia" ' +
        'y quiere incluir tu restaurante. La exposicion seria a nivel nacional ' +
        'pero implica abrir tus numeros y cocina a escrutinio publico.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Aceptar la entrevista con transparencia total',
          description:
            'Abrir puertas al periodista: numeros reales, equipo, cocina, ' +
            'historia completa incluyendo la crisis del cabello. Dejar que ' +
            'escriba lo que quiera.',
          cost: 500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [],
          tags: ['pr', 'medios', 'transparencia', 'oportunidad'],
          next: 'mkt_11',
          narrative:
            'El articulo sale titulado: "El restaurante de Pereira que convirtio ' +
            'una crisis en oportunidad." El tono es positivo, destaca la ' +
            'resiliencia y la calidad. 120.000 personas leen el articulo. ' +
            'El telefono no para de sonar.'
        },
        {
          id: 'B',
          label: 'Declinar la entrevista',
          description:
            'Demasiado riesgo de exposicion negativa. Si el periodista destaca ' +
            'la crisis o encuentra algo malo, el dano seria a nivel nacional. ' +
            'Mejor mantenerse bajo el radar.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: -1, bsc_internal: 0, bsc_learning: 0 },
          crossEffects: [],
          tags: ['pr', 'medios', 'conservador', 'riesgo-evitado'],
          next: 'mkt_11',
          narrative:
            'El periodista publica el especial con otros 4 restaurantes de ' +
            'Pereira, Manizales y Armenia. Tu competencia en Pereira sale ' +
            'mencionada. Los clientes te preguntan: "¿por que no salen ustedes ' +
            'en esa revista?" La oportunidad perdida duele.'
        }
      ]
    },

    // DIA 35 — Ramificacion: contenido viral accidental
    'mkt_branch_05': {
      day: 35,
      title: 'Contenido viral accidental',
      context:
        'Un empleado publico un TikTok bailando en la cocina mientras prepara ' +
        'hamburguesas. El video tiene 2.3 millones de vistas y 180.000 likes. ' +
        'Los comentarios son 90% positivos: "quiero trabajar ahi", "que ambiente ' +
        'tan chevere". Pero el area de calidad esta preocupada por la imagen.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Capitalizar: hacer al empleado embajador',
          description:
            'Convertir al empleado en micro-embajador de marca. Darle un aumento, ' +
            'contenido semanal oficial desde la cocina, serie "Diario de un ' +
            'cocinero feliz". Surfear la ola viral.',
          cost: 2000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['viral', 'ugc', 'empleado', 'oportunidad'],
          next: 'mkt_12',
          narrative:
            'La serie del cocinero se convierte en el contenido mas visto del ' +
            'restaurante. El empleado tiene ya 50K seguidores propios. Los ' +
            'clientes vienen pidiendo tomarse fotos con el. Recursos Humanos ' +
            'esta preocupado por el ego, pero marketing esta eufórico.'
        },
        {
          id: 'B',
          label: 'Regañar y controlar el contenido',
          description:
            'Prohibir publicaciones no autorizadas. Enviar comunicado interno: ' +
            '"solo el equipo de marketing publica en nombre de la marca." ' +
            'Multar al empleado si reincide.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: -1, bsc_internal: 1, bsc_learning: -2 },
          crossEffects: [],
          tags: ['viral', 'control', 'rigido', 'desmotivacion'],
          next: 'mkt_12',
          narrative:
            'El empleado borra el video molesto. Un compañero filtra el chisme ' +
            'en redes: "le prohibieron ser creativo, que empresa tan amargada." ' +
            'El hashtag #DejenlosBailar se vuelve tendencia local. La marca ' +
            'queda como la villana de la historia.'
        },
        {
          id: 'C',
          label: 'Crear politica de social media para empleados',
          description:
            'No castigar ni premiar excesivamente. Crear guia clara de lo que ' +
            'se puede y no se puede publicar. Capacitar al equipo en marca ' +
            'personal y marca corporativa.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [],
          tags: ['viral', 'politica', 'equilibrio', 'aprendizaje'],
          next: 'mkt_12',
          narrative:
            'La politica balancea libertad y responsabilidad. Los empleados ' +
            'pueden publicar contenido pero con guias basicas (no mostrar ' +
            'recetas secretas, siempre con uniforme limpio). Tres mas empiezan ' +
            'a crear contenido. La marca gana autenticidad sin perder control.'
        }
      ]
    },

    // DIA 41 — Ramificacion: decision sobre datos y privacidad
    'mkt_branch_06': {
      day: 41,
      title: 'Datos de clientes: hasta donde llegar',
      context:
        'Tu equipo de marketing ha recolectado 4.200 correos, 3.800 telefonos ' +
        'y datos de compra de 2.100 clientes. Un consultor externo propone usar ' +
        'estos datos para publicidad hipersegmentada, incluyendo retargeting ' +
        'agresivo y mensajes automaticos. El abogado advierte sobre la ley ' +
        'de habeas data colombiana (Ley 1581 de 2012).',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Retargeting agresivo + automatizacion total',
          description:
            'Usar todos los datos para campanas hiperpersonalizadas: SMS con ' +
            'nombre, email con historial de compra, push notifications cada dia, ' +
            'retargeting en redes. Maximo alcance, minima privacidad.',
          cost: 3000000,
          revenue: 5000000,
          bsc: { bsc_financial: 2, bsc_customer: -2, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [],
          tags: ['datos', 'privacidad', 'agresivo', 'riesgo-legal'],
          next: 'mkt_14',
          narrative:
            'Las ventas suben un 12% la primera semana. Pero 230 personas piden ' +
            'que los saquen de la lista. 15 reportan a la SIC (Superintendencia ' +
            'de Industria y Comercio). Un abogado de consumidor amenaza con ' +
            'demanda colectiva. El ahorro se convierte en dolor de cabeza legal.'
        },
        {
          id: 'B',
          label: 'Marketing respetuoso con consentimiento explicito',
          description:
            'Solo contactar a quienes dieron permiso explicito. Maximo 2 correos ' +
            'por semana. Opcion clara de desuscripcion. Cumplir estrictamente ' +
            'la Ley 1581. Menos alcance, cero riesgo.',
          cost: 1500000,
          revenue: 2000000,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['datos', 'privacidad', 'etico', 'legal'],
          next: 'mkt_14',
          narrative:
            'Solo el 45% de la base acepta recibir comunicaciones. Pero quienes ' +
            'aceptan abren los correos a una tasa del 42% (el promedio en Colombia ' +
            'es 18%). La calidad supera la cantidad. Los clientes comentan: ' +
            '"me gusta que no me spamean como otras marcas."'
        }
      ]
    }
  }
};
