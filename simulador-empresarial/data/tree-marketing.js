/* v2.1 - Boosted rewards for days 17-25 */
window.TREE_MARKETING = {
  "name": "Marketing",
  "icon": "📢",
  "color": "#AF52DE",
  "startNode": "mkt_01",
  "nodes": {
    "mkt_01": {
      "day": 1,
      "title": "Posicionamiento de marca",
      "context": "Tu cadena de comida rapida esta por abrir en Pereira y compites contra \"SaborExpress\", que ya domina el mercado local. Necesitas definir tu identidad de marca antes de invertir un peso.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Premium artesanal",
          "description": "Ingredientes del Eje Cafetero, pan artesanal, salsas de la casa — precio alto, experiencia memorable.",
          "cost": 9000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": 1,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita proveedores artesanales con control de calidad estricto.",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 3000000
            }
          ],
          "tags": [
            "posicionamiento",
            "premium",
            "diferenciacion"
          ],
          "next": "mkt_02",
          "narrative": "El equipo disena un logo elegante con tonos tierra. El chef advierte que los ingredientes artesanales suben cada plato $4.000 COP.",
          "feedback": "Premium funciona si tu mercado objetivo tiene poder adquisitivo. En Pereira, limita tu base de clientes a estratos 4-6 y turistas, pero genera mayor margen por unidad y lealtad de marca a largo plazo."
        },
        {
          "id": "B",
          "label": "Rapido y economico",
          "description": "Combos desde $12.900, alto volumen y margen bajo — apuntas a estudiantes de UTP y trabajadores del centro.",
          "cost": 5000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 2,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita optimizar tiempos de preparacion para volumen alto.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 1500000
            }
          ],
          "tags": [
            "posicionamiento",
            "economico",
            "volumen"
          ],
          "next": "mkt_02",
          "narrative": "El diseno sale colorido y juvenil. El equipo calcula que necesitas vender 3x mas unidades para igualar el margen de la competencia premium.",
          "feedback": "Estrategia de volumen reduce riesgo de entrada porque el mercado es amplio, pero te expone a guerra de precios con SaborExpress. Es la opcion mas segura para arrancar, aunque sacrifica margen."
        },
        {
          "id": "C",
          "label": "Saludable y fitness",
          "description": "Bowls, wraps y jugos naturales — captas el nicho fitness que crece rapido en Pereira.",
          "cost": 7000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 0,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe manejar productos frescos con vida util corta.",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 2000000
            }
          ],
          "tags": [
            "posicionamiento",
            "saludable",
            "nicho"
          ],
          "next": "mkt_02",
          "narrative": "Encuentras un nicho desatendido: los gimnasios de Pereira crecieron 40% el ultimo ano. El reto es que el mercado es mas pequeno.",
          "feedback": "Nicho saludable tiene poca competencia directa pero mercado limitado. Es la mejor opcion si puedes escalar despues, porque construyes una marca diferenciada dificil de copiar. Riesgo medio, recompensa alta."
        },
        {
          "id": "D",
          "label": "Fusion cafetera",
          "description": "Mezcla cocina internacional con sabores del Eje Cafetero — hamburguesas con cafe, postres con panela.",
          "cost": 8000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": -1,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita recetas nuevas y capacitacion especial del equipo.",
              "bsc": {
                "bsc_learning": 1
              },
              "cost": 2500000
            }
          ],
          "tags": [
            "posicionamiento",
            "fusion",
            "innovacion"
          ],
          "next": "mkt_02",
          "narrative": "La idea genera buzz en redes antes de abrir. Algunos en el equipo dudan si el publico aceptara combinaciones tan atrevidas.",
          "feedback": "Fusion es la apuesta mas arriesgada pero con mayor potencial viral. Puede generar PR gratuito, aunque si el producto no convence, el dano reputacional es rapido. Ideal para emprendedores que dominan redes sociales."
        }
      ]
    },
    "mkt_02": {
      "day": 4,
      "title": "Estrategia de precios",
      "context": "SaborExpress vende combos entre $15.000 y $22.000. Debes fijar tus precios sabiendo que el consumidor pereirano compara antes de decidir.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Penetracion agresiva",
          "description": "Lanzar con precios 20% por debajo de SaborExpress para robar mercado rapido.",
          "cost": 6000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 3,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "FIN",
              "message": "Finanzas advierte que los margenes seran negativos las primeras 6 semanas.",
              "bsc": {
                "bsc_financial": -2
              },
              "cost": 0
            }
          ],
          "tags": [
            "precios",
            "penetracion",
            "volumen"
          ],
          "next": "mkt_03",
          "narrative": "Los primeros clientes llegan atraidos por el precio. SaborExpress empieza a monitorear tu actividad.",
          "feedback": "Penetracion genera trafico rapido pero entrena al cliente a esperar precios bajos. Subir despues es dificil. Funciona si tienes caja para aguantar perdidas iniciales y un plan claro de transicion."
        },
        {
          "id": "B",
          "label": "Paridad competitiva",
          "description": "Igualar precios de SaborExpress y competir por calidad y servicio.",
          "cost": 3000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "precios",
            "paridad",
            "equilibrio"
          ],
          "next": "mkt_03",
          "narrative": "El mercado te percibe como alternativa equivalente. La batalla se traslada al servicio y la experiencia.",
          "feedback": "Paridad es la opcion mas equilibrada. No provocas guerra de precios ni te posicionas como \"caro\". La mejor estrategia si tu diferenciador es producto o servicio, no precio."
        },
        {
          "id": "C",
          "label": "Precio premium con valor agregado",
          "description": "Cobrar 15% mas que SaborExpress pero incluir extras: Wi-Fi, cargadores, ambiente Instagram.",
          "cost": 8000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": -1,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe acondicionar locales con infraestructura adicional.",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 4000000
            }
          ],
          "tags": [
            "precios",
            "premium",
            "valor"
          ],
          "next": "mkt_03",
          "narrative": "Los jovenes empiezan a usar tu local como punto de encuentro. El ticket promedio sube pero la rotacion de mesas baja.",
          "feedback": "Premium con valor agregado justifica el precio alto si la experiencia es real. El riesgo es que los clientes ocupen mesas sin consumir mucho. Necesitas controlar el ticket promedio por hora."
        },
        {
          "id": "D",
          "label": "Precios dinamicos por horario",
          "description": "Descuentos en horas valle (2-5pm) y precios completos en horas pico — maximizas ocupacion.",
          "cost": 4000000,
          "revenue": 3500000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 2,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita sistema POS que soporte cambios de precio por franja horaria.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 1500000
            }
          ],
          "tags": [
            "precios",
            "dinamico",
            "optimizacion"
          ],
          "next": "mkt_03",
          "narrative": "Estudiantes de UTP descubren los descuentos de las 3pm y empiezan a llenar el local en horas que antes estaban vacias.",
          "feedback": "Precios dinamicos es la estrategia mas sofisticada y la mejor desde el punto de vista de optimizacion de capacidad. Maximiza ingresos totales sin sacrificar margen. Requiere tecnologia y comunicacion clara."
        }
      ]
    },
    "mkt_03": {
      "day": 7,
      "title": "Canales digitales",
      "context": "Es hora de elegir donde invertir tu presupuesto digital. No puedes abarcar todo: cada canal requiere contenido diferente y equipo dedicado.",
      "type": "multi",
      "multiMax": 2,
      "options": [
        {
          "id": "A",
          "label": "TikTok + Reels",
          "description": "Videos cortos virales mostrando preparacion de platos y retos con clientes.",
          "cost": 5000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 0,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "digital",
            "tiktok",
            "viral"
          ],
          "next": "mkt_04",
          "narrative": "Un video de tu chef preparando una hamburguesa se vuelve viral con 200K vistas en Pereira.",
          "feedback": "TikTok tiene el mayor alcance organico y es gratis en engagement. Ideal para publico joven (18-25). El riesgo es que el contenido viral es impredecible y requiere constancia."
        },
        {
          "id": "B",
          "label": "Instagram + influencers",
          "description": "Feed curado, historias diarias y colaboraciones con influencers gastro de Pereira.",
          "cost": 7000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "digital",
            "instagram",
            "influencers"
          ],
          "next": "mkt_04",
          "narrative": "Tres influencers locales publican sobre tu restaurante. Las reservas del fin de semana se duplican.",
          "feedback": "Instagram es el canal mas confiable para restaurantes porque la comida es visual. Los influencers aceleran el awareness pero son caros. Mejor opcion si tu publico es 25-35 y valoras estetica."
        },
        {
          "id": "C",
          "label": "Google Ads + SEO local",
          "description": "Aparecer primero cuando alguien busca \"restaurante en Pereira\" o \"domicilios Pereira\".",
          "cost": 6000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "digital",
            "google",
            "seo"
          ],
          "next": "mkt_04",
          "narrative": "Tu ficha de Google Maps empieza a aparecer en el top 3. Los domicilios organicos crecen 30%.",
          "feedback": "Google captura demanda existente — gente que ya quiere comer. Es el canal con mejor ROI medible pero no genera awareness ni emocion. Complementa bien a redes sociales."
        },
        {
          "id": "D",
          "label": "WhatsApp Business + CRM",
          "description": "Canal directo con clientes: menu digital, pedidos por chat y base de datos propia.",
          "cost": 3000000,
          "revenue": 1500000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita personal dedicado a responder chats en tiempo real.",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 1500000
            }
          ],
          "tags": [
            "digital",
            "whatsapp",
            "crm"
          ],
          "next": "mkt_04",
          "narrative": "En una semana tienes 800 contactos. Los clientes valoran la atencion personalizada por WhatsApp.",
          "feedback": "WhatsApp es el canal mas subestimado en Colombia. Tiene la mayor tasa de apertura (98%) y construye relacion directa. La mejor inversion a largo plazo para fidelizacion, aunque no genera awareness masivo."
        }
      ]
    },
    "mkt_04": {
      "day": 10,
      "title": "Campana de lanzamiento",
      "context": "Faltan 3 dias para la apertura. Necesitas generar expectativa y asegurar que el dia de inauguracion el local este lleno.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Evento de inauguracion",
          "description": "Fiesta con DJ, degustaciones gratis y cobertura en medios locales de Pereira.",
          "cost": 12000000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": -1,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita preparar el triple de inventario para la inauguracion.",
              "bsc": {
                "bsc_internal": -2
              },
              "cost": 3000000
            }
          ],
          "tags": [
            "lanzamiento",
            "evento",
            "awareness"
          ],
          "next": "mkt_05",
          "narrative": "El evento es un exito: 400 personas asisten y los medios locales cubren la apertura. El costo fue alto pero la marca quedo posicionada.",
          "feedback": "Eventos de inauguracion generan impacto inmediato y PR gratuito, pero son caros y el efecto se diluye rapido si no hay seguimiento. Mejor si tienes presupuesto holgado y plan de retencion post-evento."
        },
        {
          "id": "B",
          "label": "Campana de expectativa digital",
          "description": "Cuenta regresiva en redes, sorteos y cupones de descuento para los primeros 200 clientes.",
          "cost": 5000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "lanzamiento",
            "digital",
            "expectativa"
          ],
          "next": "mkt_05",
          "narrative": "La cuenta regresiva genera 1.500 seguidores nuevos. El dia de apertura hay fila de 30 personas con cupones.",
          "feedback": "Expectativa digital es mas eficiente en costo y crea una base de datos de clientes interesados. Es la mejor opcion si tu presupuesto es limitado y ya tienes presencia en redes."
        },
        {
          "id": "C",
          "label": "Alianza con Rappi",
          "description": "Lanzar exclusivamente en Rappi con envio gratis la primera semana — llegas a toda Pereira sin local lleno.",
          "cost": 8000000,
          "revenue": 6000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe preparar empaque para domicilios y coordinar con Rappi.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 2000000
            }
          ],
          "tags": [
            "lanzamiento",
            "rappi",
            "delivery"
          ],
          "next": "mkt_05",
          "narrative": "Los pedidos por Rappi arrancan fuerte: 120 ordenes el primer dia. Algunos clientes se quejan de tiempos de entrega.",
          "feedback": "Rappi da alcance inmediato sin depender del trafico fisico, pero la comision (25-30%) reduce mucho el margen. Funciona para darte a conocer, pero no es sostenible como canal principal sin negociar comisiones."
        },
        {
          "id": "D",
          "label": "Guerrilla marketing",
          "description": "Food trucks en la UTP y el centro, muestras gratis en gimnasios y murales en la Circunvalar.",
          "cost": 6000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 0,
            "bsc_learning": 3
          },
          "crossEffects": [],
          "tags": [
            "lanzamiento",
            "guerrilla",
            "calle"
          ],
          "next": "mkt_05",
          "narrative": "Los murales se vuelven spot de fotos para Instagram. Los food trucks generan colas de curiosos en la UTP.",
          "feedback": "Guerrilla marketing es memorable y genera contenido organico. Es la mejor relacion costo-impacto si tu publico es joven y urbano. El riesgo es menor control sobre el mensaje."
        }
      ]
    },
    "mkt_05": {
      "day": 12,
      "title": "Alianza estrategica",
      "context": "Una cadena de gimnasios de Pereira te propone alianza: descuentos cruzados para sus 2.000 miembros a cambio de exclusividad en su cafeteria.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Aceptar la alianza",
          "description": "Firmas exclusividad con la cadena de gimnasios y accedes a sus 2.000 miembros activos.",
          "cost": 4000000,
          "revenue": 7000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe abrir un punto express dentro del gimnasio principal.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 3000000
            }
          ],
          "tags": [
            "alianza",
            "gimnasio",
            "exclusividad"
          ],
          "next": "mkt_06",
          "narrative": "Los miembros del gym empiezan a pedir tus bowls post-entreno. El ticket promedio de este segmento es 20% mayor al general.",
          "feedback": "Alianzas estrategicas son poderosas porque accedes a un publico cautivo con costo de adquisicion casi cero. La exclusividad limita opciones futuras, pero el ROI inmediato es alto. Mejor decision si tu posicionamiento es saludable o premium."
        },
        {
          "id": "B",
          "label": "Rechazar la alianza",
          "description": "Mantienes independencia para negociar con multiples socios sin exclusividad.",
          "cost": 0,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 0,
            "bsc_internal": 0,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "alianza",
            "independencia",
            "flexibilidad"
          ],
          "next": "mkt_06",
          "narrative": "Decides mantener las puertas abiertas. Una semana despues, SaborExpress firma la alianza con los gimnasios.",
          "feedback": "Rechazar preserva flexibilidad pero en mercados competitivos, la velocidad importa. Si no actuas, tu competencia lo hara. Solo rechaza si tienes una alternativa mejor en el horizonte inmediato."
        }
      ]
    },
    "mkt_06": {
      "day": 14,
      "title": "Crisis de reputacion",
      "context": "Un influencer con 50K seguidores publica un video quejandose de tu servicio. El video tiene 8.000 vistas en 3 horas y los comentarios negativos crecen.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Respuesta publica y transparente",
          "description": "Publicas un video disculpandote, ofreces invitacion al influencer y muestras las mejoras implementadas.",
          "cost": 3000000,
          "revenue": 1000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": 1,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe implementar mejoras de servicio visibles de inmediato.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 1500000
            }
          ],
          "tags": [
            "crisis",
            "reputacion",
            "transparencia"
          ],
          "next": "mkt_07",
          "narrative": "El influencer acepta la invitacion y publica un segundo video positivo. Los comentarios giran a tu favor y ganas credibilidad.",
          "feedback": "Respuesta transparente es SIEMPRE la mejor opcion en crisis de reputacion. Convertir una queja en oportunidad de PR positivo es marketing nivel experto. El costo es minimo comparado con el dano de ignorar la crisis."
        },
        {
          "id": "B",
          "label": "Ignorar y dejar pasar",
          "description": "No respondes publicamente — esperas que el algoritmo entierre el video en unos dias.",
          "cost": 0,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": -3,
            "bsc_internal": 0,
            "bsc_learning": -1
          },
          "crossEffects": [],
          "tags": [
            "crisis",
            "ignorar",
            "riesgo"
          ],
          "next": "mkt_07",
          "narrative": "El video llega a 25.000 vistas. Otros creadores se suman a la critica. Las resenas en Google bajan de 4.5 a 3.8 estrellas.",
          "feedback": "Ignorar una crisis digital es el peor error en marketing moderno. Las redes sociales amplifican el silencio como culpabilidad. Cada hora sin respuesta multiplica el dano. Nunca ignores una crisis publica."
        }
      ]
    },
    "mkt_07": {
      "day": 16,
      "title": "Programa de fidelizacion",
      "context": "Llevas dos semanas abierto y necesitas que los clientes vuelvan. El costo de adquirir un cliente nuevo es 5x mayor que retener uno existente.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "App con puntos y recompensas",
          "description": "App propia donde cada compra acumula puntos canjeables por productos gratis.",
          "cost": 10000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita integrar la app con el sistema POS.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 2000000
            }
          ],
          "tags": [
            "fidelizacion",
            "app",
            "tecnologia"
          ],
          "next": "mkt_08",
          "narrative": "La app se descarga 600 veces la primera semana. El 35% de usuarios vuelve en los siguientes 7 dias.",
          "feedback": "Una app propia da control total de datos y personalizacion, pero el costo de desarrollo y mantenimiento es alto. Solo vale la pena si tienes volumen para justificar la inversion. Mejor para cadenas con 3+ puntos de venta."
        },
        {
          "id": "B",
          "label": "Tarjeta de sellos clasica",
          "description": "Tarjeta fisica: compra 8 combos y el 9no es gratis — simple, tangible, sin tecnologia.",
          "cost": 2000000,
          "revenue": 1500000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 2,
            "bsc_learning": 0
          },
          "crossEffects": [],
          "tags": [
            "fidelizacion",
            "sellos",
            "simple"
          ],
          "next": "mkt_08",
          "narrative": "Los clientes llevan la tarjeta en la billetera. Algunos pierden la tarjeta y empiezan de cero, lo que te ahorra recompensas.",
          "feedback": "Tarjetas de sellos tienen bajo costo y alta efectividad comprobada. El efecto \"progreso hacia la meta\" es psicologicamente poderoso. La mejor opcion si tu prioridad es bajo costo y resultados rapidos."
        },
        {
          "id": "C",
          "label": "Club VIP por suscripcion",
          "description": "Membresia mensual de $29.900 con beneficios exclusivos: descuentos, acceso anticipado y delivery gratis.",
          "cost": 5000000,
          "revenue": 6000000,
          "bsc": {
            "bsc_financial": 3,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "fidelizacion",
            "suscripcion",
            "recurrencia"
          ],
          "next": "mkt_08",
          "narrative": "120 clientes se suscriben el primer mes. El ingreso recurrente estabiliza tu flujo de caja y predecibilidad.",
          "feedback": "Suscripciones generan ingreso predecible y aumentan lifetime value. Es la estrategia mas avanzada de fidelizacion. El reto es demostrar suficiente valor mensual para evitar cancelaciones. Mejor opcion a mediano plazo."
        },
        {
          "id": "D",
          "label": "Programa de referidos",
          "description": "Cada cliente que trae un amigo recibe descuento del 20% para ambos — crecimiento viral.",
          "cost": 4000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 0,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "fidelizacion",
            "referidos",
            "viral"
          ],
          "next": "mkt_08",
          "narrative": "Los referidos crecen exponencialmente: 50 en la semana 1, 130 en la semana 2. El boca a boca se activa.",
          "feedback": "Referidos combinan adquisicion y fidelizacion en un solo programa. El costo por cliente adquirido es menor que cualquier canal pagado. Funciona especialmente bien en ciudades medianas como Pereira donde el boca a boca es fuerte."
        }
      ]
    },
    "mkt_08": {
      "day": 19,
      "title": "Campana estacional",
      "context": "Se acerca un puente festivo y la Feria de Pereira. El trafico en la ciudad aumenta 60% y SaborExpress ya anuncio promociones agresivas.",
      "type": "multi",
      "multiMax": 2,
      "options": [
        {
          "id": "A",
          "label": "Menu tematico de feria",
          "description": "Platos edicion limitada inspirados en la Feria de Pereira con empaque especial.",
          "cost": 3500000,
          "revenue": 20000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 2,
            "bsc_internal": -1,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita ingredientes especiales y empaques nuevos en tiempo record.",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 2000000
            }
          ],
          "tags": [
            "estacional",
            "feria",
            "edicion-limitada"
          ],
          "next": "mkt_09",
          "narrative": "El combo \"Sabor de Feria\" se agota los primeros 3 dias. Los clientes publican fotos del empaque tematico en Instagram.",
          "feedback": "Menus tematicos crean urgencia (edicion limitada) y generan contenido organico. Es la estrategia estacional con mejor ROI porque combina novedad, escasez y compartibilidad en redes."
        },
        {
          "id": "B",
          "label": "Descuentos agresivos",
          "description": "Combos 2x1 durante todo el puente festivo para competir directo con SaborExpress.",
          "cost": 4900000,
          "revenue": 22500000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "FIN",
              "message": "Finanzas alerta que el 2x1 reduce margen bruto al 15%.",
              "bsc": {
                "bsc_financial": -1
              },
              "cost": 0
            }
          ],
          "tags": [
            "estacional",
            "descuentos",
            "competencia"
          ],
          "next": "mkt_09",
          "narrative": "Las ventas suben 80% pero el margen cae drasticamente. Al terminar el puente, los clientes esperan el mismo precio.",
          "feedback": "Descuentos agresivos generan volumen pero destruyen margen y crean expectativa de precios bajos. Es la estrategia mas reactiva y menos creativa. Solo usala si tu competencia te esta quitando clientes activamente."
        },
        {
          "id": "C",
          "label": "Patrocinio de evento",
          "description": "Patrocinas un escenario de la Feria con tu marca visible ante 10.000 asistentes.",
          "cost": 7000000,
          "revenue": 12500000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": 0,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "estacional",
            "patrocinio",
            "branding"
          ],
          "next": "mkt_09",
          "narrative": "Tu logo aparece en el escenario principal. La cobertura mediatica te da exposicion equivalente a $15M en pauta.",
          "feedback": "Patrocinios dan visibilidad masiva pero es dificil medir conversion directa. Funciona para construir marca a largo plazo, no para ventas inmediatas. Mejor si ya tienes awareness y quieres consolidar posicion."
        },
        {
          "id": "D",
          "label": "Activacion en redes sociales",
          "description": "Reto viral en TikTok con hashtag de la feria — el video mas creativo gana combos gratis por un mes.",
          "cost": 2100000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 3
          },
          "crossEffects": [],
          "tags": [
            "estacional",
            "tiktok",
            "viral"
          ],
          "next": "mkt_09",
          "narrative": "El reto genera 85 videos de usuarios. El hashtag acumula 500K vistas en una semana.",
          "feedback": "Activaciones en redes son la opcion mas eficiente en costo y la que mayor contenido generado por usuarios (UGC) produce. El UGC es mas creible que la publicidad pagada. Excelente complemento para cualquier otra estrategia."
        }
      ]
    },
    "mkt_09": {
      "day": 22,
      "title": "Respuesta competitiva",
      "context": "SaborExpress lanza una campana directa contra ti: \"Nosotros si sabemos de comida en Pereira\" con memes comparativos en redes. Tu equipo pide responder.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Contracampana directa",
          "description": "Respondes con memes propios comparando calidad, ingredientes y resenas de clientes.",
          "cost": 2800000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 1,
            "bsc_internal": 0,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "competencia",
            "agresivo",
            "memes"
          ],
          "next": "mkt_10",
          "narrative": "La guerra de memes se vuelve tendencia en Pereira. Algunos clientes disfrutan el show, otros lo ven como inmaduro.",
          "feedback": "Contracampanas directas son arriesgadas: le das visibilidad gratis a tu competencia y polarizas al publico. Puede funcionar si eres la marca retadora, pero escalar una guerra de memes rara vez beneficia a ambos."
        },
        {
          "id": "B",
          "label": "Ignorar y enfocarse en producto",
          "description": "No respondes — inviertes en mejorar el producto y dejas que los clientes hablen por ti.",
          "cost": 4200000,
          "revenue": 7500000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones recibe inversion extra para mejorar tiempos y calidad.",
              "bsc": {
                "bsc_internal": 2
              },
              "cost": 3000000
            }
          ],
          "tags": [
            "competencia",
            "producto",
            "calidad"
          ],
          "next": "mkt_10",
          "narrative": "Mientras SaborExpress gasta en memes, tu mejoras el menu. Dos semanas despues, tus resenas en Google suben a 4.7 estrellas.",
          "feedback": "Enfocarse en producto es la respuesta mas madura y estrategicamente correcta. A largo plazo, la calidad gana sobre el ruido. Las marcas lideres nunca mencionan a la competencia — dejan que el producto hable."
        },
        {
          "id": "C",
          "label": "Campana de humor autocritico",
          "description": "Publicas contenido riendote de ti mismo: \"Somos nuevos, pero estamos aprendiendo rapido\".",
          "cost": 1400000,
          "revenue": 3750000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 0,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "competencia",
            "humor",
            "autenticidad"
          ],
          "next": "mkt_10",
          "narrative": "El publico ama la humildad. Tu video de \"Somos nuevos\" se comparte 3.000 veces. La gente empieza a apoyarte como el \"underdog\".",
          "feedback": "Humor autocritico es la respuesta mas inteligente a un ataque competitivo. Desarma la agresion, genera empatia y te posiciona como autentico. Las marcas jovenes que abrazan su vulnerabilidad generan comunidades leales."
        },
        {
          "id": "D",
          "label": "Alianza con marcas aliadas",
          "description": "Te alías con otras marcas locales (cafe, cerveza artesanal) para crear un frente comun contra la cadena grande.",
          "cost": 3500000,
          "revenue": 10000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "competencia",
            "alianza",
            "local"
          ],
          "next": "mkt_10",
          "narrative": "La campana \"Hecho en Pereira\" une a 5 marcas locales. Los consumidores empiezan a preferir lo local sobre las cadenas nacionales.",
          "feedback": "Alianzas locales amplifican tu mensaje sin duplicar costos. El movimiento \"compra local\" es fuerte en ciudades como Pereira. Esta estrategia te posiciona como marca comunitaria y dificulta que SaborExpress ataque sin verse como el malo."
        }
      ]
    },
    "mkt_10": {
      "day": 25,
      "title": "Estrategia de marketing final",
      "context": "Llevas un mes operando. Es hora de definir tu estrategia de marketing para los proximos 6 meses con el presupuesto restante.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Expansion a nuevas zonas",
          "description": "Abrir segundo punto en Dosquebradas y campana para capturar ese mercado.",
          "cost": 10500000,
          "revenue": 20000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": -1,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe replicar toda la cadena de suministro en una nueva ubicacion.",
              "bsc": {
                "bsc_internal": -2
              },
              "cost": 5000000
            },
            {
              "area": "FIN",
              "message": "Finanzas necesita asegurar capital de trabajo para dos puntos simultaneos.",
              "bsc": {
                "bsc_financial": -1
              },
              "cost": 0
            }
          ],
          "tags": [
            "estrategia",
            "expansion",
            "crecimiento"
          ],
          "next": null,
          "narrative": "La expansion a Dosquebradas abre un mercado de 200.000 habitantes con menos competencia directa. El reto logistico es grande.",
          "feedback": "Expansion geografica es la apuesta de mayor crecimiento pero tambien mayor riesgo. Solo es viable si el primer punto ya es rentable y tienes procesos estandarizados. Expandir una operacion deficiente es multiplicar problemas."
        },
        {
          "id": "B",
          "label": "Consolidar y fidelizar",
          "description": "Reforzar programa de lealtad, mejorar resenas y dominar el mercado actual antes de crecer.",
          "cost": 4900000,
          "revenue": 25000000,
          "bsc": {
            "bsc_financial": 3,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "estrategia",
            "consolidacion",
            "fidelizacion"
          ],
          "next": null,
          "narrative": "Tu base de clientes leales crece 40%. El ticket promedio sube 15% gracias a la confianza construida. La rentabilidad se estabiliza.",
          "feedback": "Consolidar antes de expandir es la estrategia mas segura y la que recomiendan la mayoria de expertos en restaurantes. Un negocio rentable y con clientes leales en una zona es mejor base para crecer que dos puntos mediocres."
        },
        {
          "id": "C",
          "label": "Pivotar a dark kitchen",
          "description": "Cerrar el local fisico y operar solo por delivery — reduces costos fijos 60% y cubres toda Pereira.",
          "cost": 3500000,
          "revenue": 17500000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 0,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones debe redisenar toda la cadena para modelo de delivery exclusivo.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 3000000
            }
          ],
          "tags": [
            "estrategia",
            "pivot",
            "darkKitchen"
          ],
          "next": null,
          "narrative": "Los costos fijos caen drasticamente. Las ventas por Rappi y domicilio propio cubren la operacion. Pierdes la experiencia presencial.",
          "feedback": "Dark kitchen es un modelo eficiente pero sacrifica la marca presencial. En Colombia el delivery crece, pero la experiencia en local sigue siendo el mayor driver de lealtad. Pivotear tan pronto puede ser prematuro."
        },
        {
          "id": "D",
          "label": "Diversificar con catering corporativo",
          "description": "Entrar al mercado B2B: almuerzos empresariales, eventos y catering para las empresas del sector de Cerritos.",
          "cost": 5600000,
          "revenue": 30000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 1,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "OPS",
              "message": "Operaciones necesita menu corporativo, logistica de transporte y facturacion B2B.",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 2000000
            }
          ],
          "tags": [
            "estrategia",
            "catering",
            "b2b"
          ],
          "next": null,
          "narrative": "Tres empresas del sector de Cerritos firman contrato mensual. El ingreso B2B estabiliza el flujo de caja y reduce dependencia del consumidor final.",
          "feedback": "Diversificar a B2B es estrategicamente brillante porque reduce riesgo. Los contratos corporativos dan ingreso predecible y los margenes en catering suelen ser mayores. Es la mejor opcion si tienes capacidad operativa disponible."
        }
      ]
    }
  }
};
