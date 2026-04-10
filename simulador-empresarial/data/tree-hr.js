/* v2.1 - Boosted rewards for days 17-25 */
window.TREE_HR = {
  "name": "Talento Humano",
  "icon": "👥",
  "color": "#FF2D55",
  "startNode": "hr_01",
  "nodes": {
    "hr_01": {
      "day": 1,
      "title": "Plan de contratacion inicial",
      "context": "La cadena necesita 40 empleados operativos para arrancar. En Pereira, Frisby, Kokoriko y PPC ya absorben mucho talento; el SMMLV 2026 es $1.423.500 con carga prestacional cercana al 52%.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Nomina directa completa (40 personas)",
          "description": "Convocatoria masiva en Computrabajo y SENA, contrato fijo a 6 meses con todos los parafiscales.",
          "cost": 18000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 3,
            "bsc_internal": 5,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Turnos cubiertos al 100% desde el dia 1",
              "bsc": {
                "bsc_internal": 4
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Carga prestacional alta: ~$28M/mes en nomina",
              "bsc": {
                "bsc_financial": -3
              },
              "cost": -4000000
            }
          ],
          "tags": [
            "nomina-directa",
            "control-total",
            "alto-costo"
          ],
          "next": "hr_02",
          "narrative": "Llegan 200 hojas de vida. Tras pruebas psicotecnicas y practicas en cocina, se seleccionan los 40. La ARL clasifica la operacion en riesgo II.",
          "feedback": "Contratar todo por nomina da control total y compromiso, pero la carga prestacional (~52% sobre salario base) es el costo oculto mas grande en empresas de alimentos. Art. 65 del Codigo Sustantivo protege al trabajador si se incumple."
        },
        {
          "id": "B",
          "label": "Modelo mixto (25 nomina + 15 temporales)",
          "description": "Cargos clave por nomina directa y operativos basicos con temporal como Activos S.A. al 1.35x.",
          "cost": 12000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Temporales requieren mas supervision en procesos",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Nomina mixta: ~$19M/mes, mas manejable",
              "bsc": {
                "bsc_financial": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "mixto",
            "temporal",
            "equilibrado"
          ],
          "next": "hr_02",
          "narrative": "Activos S.A. entrega 15 personas en 48 horas. Los de nomina pasan proceso completo. Hay tension entre \"los de planta\" y \"los de temporal\".",
          "feedback": "El modelo mixto balancea costo y control. Ojo: el Art. 63 de la Ley 1429/2010 limita la tercerizacion en actividades misionales; si un temporal hace lo mismo que uno de planta, puede reclamar vinculacion directa."
        },
        {
          "id": "C",
          "label": "Outsourcing total con operador (Sodexo)",
          "description": "Tarifa fija mensual de $48M que cubre salarios, prestaciones y reemplazos. Cero administracion de nomina.",
          "cost": 7000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 4,
            "bsc_customer": -2,
            "bsc_internal": -1,
            "bsc_learning": -3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Operador externo controla ritmos y metodos",
              "bsc": {
                "bsc_internal": -3
              },
              "cost": 0
            },
            {
              "area": "marketing",
              "message": "Personal sin identidad de marca propia",
              "bsc": {
                "bsc_customer": -2
              },
              "cost": 0
            }
          ],
          "tags": [
            "outsourcing",
            "bajo-costo-inicial",
            "sin-control"
          ],
          "next": "hr_02_ext",
          "narrative": "Sodexo asigna el equipo en 24 horas. Son eficientes, pero un cocinero dice: \"yo trabajo para Sodexo, no para ustedes\".",
          "feedback": "Externalizar ahorra dolores de cabeza administrativos, pero se pierde cultura organizacional. A largo plazo el costo por persona suele ser mayor y la rotacion la controla un tercero."
        },
        {
          "id": "D",
          "label": "Arranque lean: 28 personas + contratacion gradual",
          "description": "Empezar con 70% del personal y cubrir picos con horas extra; completar el equipo en el mes 2.",
          "cost": 9000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 3,
            "bsc_customer": -1,
            "bsc_internal": 1,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "28 personas cubriendo capacidad para 40: turnos apretados",
              "bsc": {
                "bsc_internal": -3
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Ahorro inicial de $8M en nomina del primer mes",
              "bsc": {
                "bsc_financial": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "lean",
            "gradual",
            "riesgo-burnout"
          ],
          "next": "hr_02",
          "narrative": "El equipo base trabaja duro las primeras semanas. Las horas extra se pagan al 125% (diurnas) segun ley. Dos personas renuncian por agotamiento al dia 12.",
          "feedback": "La estrategia lean reduce costos iniciales, pero el recargo por horas extra (Art. 168 CST: 25% diurnas, 75% nocturnas) puede eliminar el ahorro. Ademas, el burnout temprano genera rotacion costosa."
        }
      ]
    },
    "hr_02": {
      "day": 4,
      "title": "Definicion de cultura organizacional",
      "context": "El equipo esta contratado pero no hay identidad. La competencia en Pereira fideliza empleados con cultura fuerte. Definir valores y rituales ahora marca la retencion futura.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Cultura de alto rendimiento con bonos",
          "description": "Metas agresivas, ranking semanal visible y bonos del 10% del salario para los mejores.",
          "cost": 5000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Empleados aceleran tiempos de servicio por incentivo",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Bonos mensuales agregan ~$2.5M al gasto fijo",
              "bsc": {
                "bsc_financial": -2
              },
              "cost": -2500000
            }
          ],
          "tags": [
            "alto-rendimiento",
            "competitiva",
            "bonos"
          ],
          "next": "hr_03",
          "narrative": "Se instala un tablero de ranking en cada punto. Los cocineros mas rapidos brillan, pero los nuevos se sienten presionados.",
          "feedback": "La cultura de alto rendimiento impulsa productividad a corto plazo, pero puede generar competencia toxica. Estudios muestran que el ranking publico desmotiva al 40% inferior."
        },
        {
          "id": "B",
          "label": "Cultura familiar y colaborativa",
          "description": "Celebraciones de cumpleanos, reuniones semanales de retroalimentacion y decision por consenso.",
          "cost": 3000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 2,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Empleados felices generan mejor servicio al cliente",
              "bsc": {
                "bsc_customer": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "familiar",
            "colaborativa",
            "retencion"
          ],
          "next": "hr_03",
          "narrative": "La primera reunion semanal dura 45 minutos y todos participan. El ambiente mejora notablemente en la primera semana.",
          "feedback": "La cultura familiar mejora retencion (reduce costos de rotacion que en alimentos promedian 2.5 salarios por persona), pero puede ralentizar decisiones urgentes."
        },
        {
          "id": "C",
          "label": "Cultura de innovacion y aprendizaje",
          "description": "Espacio para proponer recetas nuevas, rotacion de roles cada 2 semanas y capacitacion continua.",
          "cost": 4000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Rotacion de roles causa curva de aprendizaje en cada area",
              "bsc": {
                "bsc_internal": -2
              },
              "cost": 0
            },
            {
              "area": "marketing",
              "message": "Propuestas de nuevos platos desde el equipo operativo",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "innovacion",
            "aprendizaje",
            "rotacion"
          ],
          "next": "hr_03",
          "narrative": "Un mesero propone un jugo de lulo con jengibre que se vuelve hit local. La rotacion de roles genera versatilidad pero tambien errores iniciales.",
          "feedback": "Invertir en aprendizaje genera polivalencia (un empleado cubre multiples roles), pero la rotacion frecuente baja eficiencia a corto plazo. Funciona mejor en equipos jovenes."
        },
        {
          "id": "D",
          "label": "Sin programa formal — enfocarse en operacion",
          "description": "Dejar que la cultura se forme sola y priorizar el arranque operativo rapido.",
          "cost": 0,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": -2,
            "bsc_internal": 0,
            "bsc_learning": -3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Sin identidad, cada punto opera diferente",
              "bsc": {
                "bsc_internal": -2
              },
              "cost": 0
            }
          ],
          "tags": [
            "sin-cultura",
            "ahorro",
            "riesgo"
          ],
          "next": "hr_03",
          "narrative": "Cada sede desarrolla sus propias \"manas\". En la sede del centro son amables; en Cuba, el servicio es frio. No hay estandar.",
          "feedback": "No definir cultura no significa que no exista — simplemente se forma sola y sin control. Corregir una cultura toxica establecida cuesta 5x mas que crearla bien desde el inicio."
        }
      ]
    },
    "hr_02_ext": {
      "day": 4,
      "title": "Definicion de cultura con equipo externo",
      "context": "Con personal de Sodexo, la cultura depende de un tercero. Hay que decidir que tanto se interviene para crear identidad propia.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Programa de inmersion cultural (3 dias)",
          "description": "Jornada de integracion con el personal de Sodexo para transferir valores de marca y estandares propios.",
          "cost": 4000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": 2,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Personal externo ahora proyecta la identidad de la marca",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "cultura-externa",
            "inmersion",
            "identidad"
          ],
          "next": "hr_03",
          "narrative": "Tres dias de taller logran que los empleados de Sodexo se pongan la camiseta. El cambio es parcial pero visible.",
          "feedback": "Invertir en inmersion cultural para terceros mitiga el mayor riesgo del outsourcing: la falta de identidad. Sin embargo, al rotar personal, se pierde la inversion en cada persona nueva."
        },
        {
          "id": "B",
          "label": "Dejar la cultura en manos de Sodexo",
          "description": "Confiar en que el operador maneja su propio programa de induccion y servicio al cliente.",
          "cost": 0,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": -3,
            "bsc_internal": -1,
            "bsc_learning": -2
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Atencion generica sin diferenciacion de marca",
              "bsc": {
                "bsc_customer": -3
              },
              "cost": 0
            }
          ],
          "tags": [
            "sin-intervencion",
            "riesgo-identidad"
          ],
          "next": "hr_03",
          "narrative": "El personal atiende correctamente pero sin calidez. Los clientes dicen que \"es igual que cualquier corrientazo\".",
          "feedback": "Sin intervencion cultural, el outsourcing convierte tu restaurante en uno mas del monton. La diferenciacion en alimentos depende 60% del servicio, no solo del producto."
        }
      ]
    },
    "hr_03": {
      "day": 7,
      "title": "Programa de capacitacion",
      "context": "El SENA ofrece cursos gratuitos de manipulacion de alimentos (40h) pero las fechas no cuadran con todos los turnos. Tambien hay oferta privada en Pereira.",
      "type": "multi",
      "multiMax": 3,
      "options": [
        {
          "id": "A",
          "label": "SENA: Manipulacion de alimentos (gratuito)",
          "description": "Curso certificado de 40 horas en jornada sabatina para todo el equipo operativo.",
          "cost": 500000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Certificacion BPM requerida por Secretaria de Salud",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "sena",
            "bpm",
            "obligatorio",
            "gratuito"
          ],
          "next": "hr_04",
          "narrative": "El SENA agenda el curso para los sabados. 35 de 40 empleados asisten sin falta y obtienen certificado.",
          "feedback": "La certificacion en BPM (Buenas Practicas de Manufactura) es obligatoria por Resolucion 2674/2013 del INVIMA. No tenerla puede generar multas desde $5M hasta cierre temporal."
        },
        {
          "id": "B",
          "label": "Diplomado express en cocina rapida ($1.8M/persona)",
          "description": "Instituto de Gastronomia de Risaralda, 60 horas para 10 cocineros clave.",
          "cost": 8000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 4,
            "bsc_internal": 2,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Cocineros certificados elevan percepcion de calidad",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "gastronomia",
            "premium",
            "cocineros"
          ],
          "next": "hr_04",
          "narrative": "Los 10 cocineros vuelven con tecnicas nuevas. Proponen mejoras en tiempos de preparacion que reducen 2 minutos promedio por plato.",
          "feedback": "Capacitar cocineros clave genera efecto multiplicador: cada uno entrena a 3-4 ayudantes. El ROI de la capacitacion tecnica en alimentos se recupera en 3-4 meses por reduccion de desperdicio."
        },
        {
          "id": "C",
          "label": "Taller de servicio al cliente ($500K/persona)",
          "description": "Camara de Comercio de Pereira, 20 horas para cajeros y meseros (15 personas).",
          "cost": 4000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 5,
            "bsc_internal": 1,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Servicio al cliente diferenciado aumenta recompra",
              "bsc": {
                "bsc_customer": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "servicio",
            "cliente",
            "camara-comercio"
          ],
          "next": "hr_04",
          "narrative": "Los meseros aprenden a manejar quejas con empatia. Un cliente en Google Maps escribe: \"la atencion es lo mejor del lugar\".",
          "feedback": "El servicio al cliente es el factor #1 de recompra en comida rapida (por encima del sabor segun estudios de NRA). Una queja bien manejada fideliza mas que un servicio sin problemas."
        },
        {
          "id": "D",
          "label": "Liderazgo para jefes de turno ($800K/persona)",
          "description": "Programa de 30 horas con la UTP para 5 jefes de turno en manejo de equipos y resolucion de conflictos.",
          "cost": 4000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 1,
            "bsc_internal": 4,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Jefes de turno mas autonomos reducen escalamientos",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "liderazgo",
            "jefes-turno",
            "utp"
          ],
          "next": "hr_04",
          "narrative": "Los jefes de turno empiezan a resolver conflictos internos sin escalar a gerencia. La operacion fluye mejor.",
          "feedback": "Invertir en mandos medios tiene el mayor impacto en eficiencia operativa. Un jefe de turno capacitado reduce ausentismo en su equipo hasta un 30% segun estudios de Hay Group."
        },
        {
          "id": "E",
          "label": "Solo induccion interna (sin capacitacion externa)",
          "description": "Entrenar con recursos propios: manuales internos, acompanamiento del gerente y aprender haciendo.",
          "cost": 500000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": -1,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [],
          "tags": [
            "induccion-basica",
            "bajo-costo",
            "minimo"
          ],
          "next": "hr_04",
          "narrative": "La induccion dura 2 dias. Los empleados aprenden rapido lo basico, pero sin tecnica formal cometen errores de manipulacion.",
          "feedback": "Ahorrar en capacitacion parece eficiente, pero sin certificacion BPM se arriesga sancion del INVIMA. Ademas, el costo de un empleado que renuncia por falta de desarrollo es 2-3 salarios."
        }
      ]
    },
    "hr_04": {
      "day": 10,
      "title": "Conflicto laboral en la cocina",
      "context": "Dos cocineros del turno de la noche se enfrentan por el control de la parrilla. Uno amenaza con renunciar y el otro exige traslado. El equipo esta dividido y la productividad del turno cayo 25%.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Mediacion formal con acta de compromisos",
          "description": "Reunion con ambas partes, lider de turno y RRHH; se firma acta con compromisos medibles y seguimiento semanal.",
          "cost": 500000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 1,
            "bsc_internal": 4,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Turno nocturno recupera productividad tras acuerdos",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "mediacion",
            "acta",
            "conflicto"
          ],
          "next": "hr_05",
          "narrative": "La reunion dura 1 hora. Ambos firman el acta. La semana siguiente la productividad del turno sube al 90%. No son amigos, pero trabajan en paz.",
          "feedback": "La mediacion formal con acta tiene valor legal (Art. 104 CST). Documenta el conflicto y protege a la empresa si escala a demanda. Ademas, sienta precedente para futuros casos."
        },
        {
          "id": "B",
          "label": "Separar turnos y reasignar roles",
          "description": "Mover a uno al turno diurno y redefinir estaciones para que no compartan espacio.",
          "cost": 200000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 0,
            "bsc_internal": 2,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Cambio de turno altera la dinamica del equipo diurno",
              "bsc": {
                "bsc_internal": -1
              },
              "cost": 0
            }
          ],
          "tags": [
            "separacion",
            "turnos",
            "evasion"
          ],
          "next": "hr_05",
          "narrative": "Se traslada al cocinero junior al turno de la manana. El problema inmediato se resuelve, pero el equipo nota que \"al que pelea lo premian con mejor horario\".",
          "feedback": "Separar sin mediar resuelve el sintoma pero no la causa. El mensaje implicito es que pelear tiene beneficios (mejor horario). Otros empleados pueden replicar el patron buscando traslados."
        }
      ]
    },
    "hr_05": {
      "day": 13,
      "title": "Sistema de evaluacion de desempeno",
      "context": "Llevan 2 semanas operando y necesitan medir quien rinde y quien no. Sin datos, las decisiones de ascenso o despido seran subjetivas y generaran conflictos.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "KPIs cuantitativos por cargo",
          "description": "Platos/hora para cocineros, tiempo de atencion para cajeros, satisfaccion para meseros; dashboard digital.",
          "cost": 4000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 5,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Datos en tiempo real permiten ajustar turnos sobre la marcha",
              "bsc": {
                "bsc_internal": 4
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Software de medicion requiere licencia mensual de $300K",
              "bsc": {
                "bsc_financial": -1
              },
              "cost": -300000
            }
          ],
          "tags": [
            "kpis",
            "cuantitativo",
            "dashboard"
          ],
          "next": "hr_06",
          "narrative": "En una semana ya hay datos claros: el cocinero estrella saca 18 platos/hora, el promedio es 12. Los cajeros compiten sanamente por mejor tiempo.",
          "feedback": "Lo que se mide se mejora. Los KPIs cuantitativos eliminan favoritismos en evaluaciones. Riesgo: los empleados pueden optimizar solo lo medido e ignorar la calidad si no se incluye."
        },
        {
          "id": "B",
          "label": "Evaluacion 360 grados (jefes, pares, clientes)",
          "description": "Cada empleado recibe feedback de su jefe, companeros y clientes cada 15 dias via formulario breve.",
          "cost": 2000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 3,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Clientes sienten que su opinion importa al evaluar servicio",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "360-grados",
            "feedback",
            "integral"
          ],
          "next": "hr_06",
          "narrative": "Las primeras evaluaciones sorprenden: el mesero mas callado resulta ser el mejor evaluado por clientes. La gerencia ni lo tenia en el radar.",
          "feedback": "La evaluacion 360 da una imagen completa del desempeno. Desventaja: consume tiempo y en equipos pequenos puede generar tension si no es anonima. Funciona mejor con madurez organizacional."
        },
        {
          "id": "C",
          "label": "Evaluacion por competencias con retroalimentacion mensual",
          "description": "Matriz de competencias por rol (tecnicas + blandas), evaluacion mensual del jefe directo.",
          "cost": 1500000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 3,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Jefes de turno dedican 2 horas/mes a evaluar su equipo",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 0
            }
          ],
          "tags": [
            "competencias",
            "retroalimentacion",
            "desarrollo"
          ],
          "next": "hr_06",
          "narrative": "Se disenan 5 competencias por cargo. Los jefes de turno se reunen 15 minutos con cada persona. Algunos descubren areas de mejora que no sabian.",
          "feedback": "Las competencias combinan el \"que\" (resultados) con el \"como\" (comportamientos). Es el modelo mas equilibrado, pero depende de la calidad de los evaluadores. Jefes sin entrenamiento tienden a dar calificaciones planas."
        },
        {
          "id": "D",
          "label": "Sin evaluacion formal — confiar en la observacion directa",
          "description": "El gerente observa y decide quien rinde con base en su experiencia diaria.",
          "cost": 0,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": -1,
            "bsc_internal": -2,
            "bsc_learning": -3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Sin datos, las decisiones de personal son subjetivas",
              "bsc": {
                "bsc_internal": -3
              },
              "cost": 0
            }
          ],
          "tags": [
            "sin-evaluacion",
            "informal",
            "riesgo"
          ],
          "next": "hr_06",
          "narrative": "El gerente cree que \"el sabe quien sirve\". Dos meses despues, despide a alguien que resulta ser uno de los mejores evaluados por clientes. Demanda laboral.",
          "feedback": "Sin evaluacion documentada, un despido \"por bajo rendimiento\" no tiene soporte legal. El Art. 62 del CST exige justa causa demostrable. Sin evidencia, el juez falla a favor del trabajador."
        }
      ]
    },
    "hr_06": {
      "day": 15,
      "title": "Plan de incentivos y compensacion",
      "context": "Los empleados preguntan si habra incentivos mas alla del salario basico. La competencia ofrece alimentacion gratis y bonos trimestrales. Retener talento en Pereira exige diferenciarse.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Bonos por desempeno individual mensual",
          "description": "Bono de $200K-$400K segun cumplimiento de KPIs; pago en nomina con retencion de ley.",
          "cost": 6000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 4,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Bonos suman ~$5M/mes al costo de nomina",
              "bsc": {
                "bsc_financial": -2
              },
              "cost": -5000000
            },
            {
              "area": "operations",
              "message": "Empleados motivados mejoran velocidad de servicio",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "bonos",
            "individual",
            "desempeno"
          ],
          "next": "hr_07",
          "narrative": "Los primeros bonos generan emocion. Los top performers ganan $400K extra y el resto se motiva a mejorar. Algunos sienten frustracion si los KPIs son inalcanzables.",
          "feedback": "Los bonos individuales son el incentivo mas directo, pero generan carga prestacional adicional (se incluyen en base de liquidacion). Art. 127 CST: todo pago habitual es salario. Pactar como no salarial requiere acuerdo escrito."
        },
        {
          "id": "B",
          "label": "Beneficios en especie (alimentacion + transporte)",
          "description": "Almuerzo gratis para todos los turnos + subsidio de $100K para transporte mensual.",
          "cost": 5000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 1,
            "bsc_internal": 3,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Menos tiempo perdido: empleados no salen a almorzar",
              "bsc": {
                "bsc_internal": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "beneficios",
            "alimentacion",
            "transporte"
          ],
          "next": "hr_07",
          "narrative": "El almuerzo gratis se vuelve el beneficio mas valorado. \"Aqui como mejor que en mi casa\", dice un mesero. La rotacion baja notablemente.",
          "feedback": "Los beneficios en especie tienen ventaja tributaria: si se pactan como no salariales (Art. 128 CST), no generan carga prestacional. Son estables y valoran al empleado sin generar competencia interna."
        },
        {
          "id": "C",
          "label": "Plan de carrera y ascensos rapidos",
          "description": "Ruta clara: auxiliar > lider de estacion > jefe de turno > administrador de sede en 18 meses max.",
          "cost": 2000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 2,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Empleados con vision a largo plazo cuidan mas los procesos",
              "bsc": {
                "bsc_internal": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "plan-carrera",
            "ascensos",
            "desarrollo"
          ],
          "next": "hr_07",
          "narrative": "Se publica la ruta de carrera en cada sede. Tres auxiliares ya preguntan que necesitan para ascender. La motivacion es palpable.",
          "feedback": "El plan de carrera es el incentivo con mejor relacion costo-beneficio: bajo costo directo, alta retencion. Millennials y Gen-Z valoran crecimiento sobre salario. El riesgo es prometer ascensos que no se cumplan."
        },
        {
          "id": "D",
          "label": "Salario emocional: flexibilidad + reconocimiento publico",
          "description": "Horarios flexibles donde se pueda, empleado del mes con dia libre, reconocimiento en redes.",
          "cost": 1000000,
          "revenue": 0,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Empleado del mes en redes sociales genera contenido autentico",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "salario-emocional",
            "flexibilidad",
            "reconocimiento"
          ],
          "next": "hr_07",
          "narrative": "La primera empleada del mes llora de emocion al ver su foto en Instagram. La publicacion tiene 400 likes. El equipo se esfuerza por el proximo reconocimiento.",
          "feedback": "El salario emocional cuesta poco y retiene mucho. Segun Gallup, el reconocimiento frecuente aumenta productividad un 14%. Ojo: no reemplaza un salario justo — complementa."
        }
      ]
    },
    "hr_07": {
      "day": 17,
      "title": "Crisis de retencion de talento",
      "context": "La cadena rival ofrece $200K mas a tres cocineros estrella y al mejor cajero. Si se van, perder 4 personas clave impacta calidad y moral. Responder rapido es clave.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Contraoferta salarial inmediata",
          "description": "Igualar la oferta rival ($200K mas) para los 4 empleados en riesgo y firmar clausula de permanencia de 6 meses.",
          "cost": 3500000,
          "revenue": 12830960,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Incremento salarial permanente de $800K/mes para 4 personas",
              "bsc": {
                "bsc_financial": -2
              },
              "cost": -800000
            },
            {
              "area": "operations",
              "message": "Empleados clave retenidos: continuidad operativa garantizada",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "contraoferta",
            "salarial",
            "retencion"
          ],
          "next": "hr_08",
          "narrative": "Los 4 aceptan la contraoferta. Pero el resto del equipo se entera y algunos sienten inequidad: \"para ganar mas toca amenazar con irse?\".",
          "feedback": "La contraoferta retiene a corto plazo pero crea precedente peligroso. Estudios muestran que el 50% de empleados que aceptan contraoferta se van en 12 meses de todas formas. Ademas, genera efecto \"para ganar mas, amenazo con irme\"."
        },
        {
          "id": "B",
          "label": "Paquete de retencion no salarial",
          "description": "Horario preferencial, bono unico de $500K, capacitacion premium y compromiso de ascenso en 3 meses.",
          "cost": 2800000,
          "revenue": 7639706,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Empleados clave con horario preferencial cubren los turnos criticos",
              "bsc": {
                "bsc_internal": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "retencion",
            "no-salarial",
            "paquete"
          ],
          "next": "hr_08",
          "narrative": "Tres de los cuatro aceptan. El cuarto se va a la competencia. El paquete cuesta menos que igualar salarios y no genera precedente de \"subir por amenaza\".",
          "feedback": "El paquete no salarial es mas sostenible que la contraoferta pura. Mezclar beneficios tangibles (bono unico no es salario recurrente) con intangibles (horario, carrera) tiene mejor ROI a largo plazo."
        },
        {
          "id": "C",
          "label": "Dejarlos ir y promover internamente",
          "description": "Aceptar las renuncias con profesionalismo y ascender auxiliares destacados a las posiciones vacantes.",
          "cost": 1400000,
          "revenue": 12900017,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": -2,
            "bsc_internal": -1,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Curva de aprendizaje de los ascendidos baja productividad 2 semanas",
              "bsc": {
                "bsc_internal": -3
              },
              "cost": 0
            }
          ],
          "tags": [
            "rotacion",
            "promocion-interna",
            "riesgo"
          ],
          "next": "hr_08",
          "narrative": "Se van los 4. Tres auxiliares son ascendidos y reciben mentoria acelerada. El equipo ve que hay oportunidad real de crecer. En 10 dias estan al 85% de productividad.",
          "feedback": "Dejar ir talento duele a corto plazo pero envia un mensaje poderoso: aqui se crece por merito. El costo de reemplazo (reclutamiento + curva) es ~2.5 salarios por persona, pero la motivacion del equipo restante compensa."
        },
        {
          "id": "D",
          "label": "Renegociar condiciones para todo el equipo",
          "description": "Usar la crisis como oportunidad para revisar salarios y beneficios de todos, no solo los 4 en riesgo.",
          "cost": 5600000,
          "revenue": 7145282,
          "bsc": {
            "bsc_financial": -3,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Revision salarial general incrementa nomina $3M/mes",
              "bsc": {
                "bsc_financial": -3
              },
              "cost": -3000000
            },
            {
              "area": "operations",
              "message": "Equipo completo motivado: productividad sube 15%",
              "bsc": {
                "bsc_internal": 4
              },
              "cost": 0
            }
          ],
          "tags": [
            "revision-general",
            "equidad",
            "alto-costo"
          ],
          "next": "hr_08",
          "narrative": "Se hace una revision de mercado y se ajustan salarios al percentil 60 de Pereira. Nadie se va. La moral es la mejor desde el inicio. El costo es significativo.",
          "feedback": "La revision general es la opcion mas equitativa y elimina el riesgo de \"fuga por goteo\". Pero consume presupuesto que podria ir a capacitacion u operacion. Es la decision mas estrategica pero mas costosa."
        }
      ]
    },
    "hr_08": {
      "day": 19,
      "title": "Programa de bienestar laboral",
      "context": "La ARL Sura reporta 4 incidentes menores (quemaduras leves) y un caso de estres. La Ley 1562/2012 exige SG-SST. Comfamiliar Risaralda ofrece subsidios si la empresa esta al dia en aportes.",
      "type": "multi",
      "multiMax": 3,
      "options": [
        {
          "id": "A",
          "label": "SG-SST completo con ARL Sura",
          "description": "Implementar el Sistema de Gestion de Seguridad y Salud en el Trabajo con asesoria de la ARL.",
          "cost": 2100000,
          "revenue": 14258769,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 1,
            "bsc_internal": 5,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Protocolos de seguridad reducen incidentes en cocina",
              "bsc": {
                "bsc_internal": 4
              },
              "cost": 0
            }
          ],
          "tags": [
            "sg-sst",
            "arl",
            "obligatorio",
            "seguridad"
          ],
          "next": "hr_09",
          "narrative": "La ARL Sura envia un profesional que implementa el SG-SST en 5 dias. Se instalan extintores, senalizacion y botiquin reglamentario. Los incidentes bajan a cero.",
          "feedback": "El SG-SST es obligatorio (Decreto 1072/2015). No tenerlo genera multas de 1-500 SMMLV y en caso de accidente grave, responsabilidad penal para el representante legal."
        },
        {
          "id": "B",
          "label": "Actividades de integracion con Comfamiliar",
          "description": "Jornada recreativa mensual con subsidio de caja de compensacion: deporte, caminatas y talleres de bienestar.",
          "cost": 1400000,
          "revenue": 6084516,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Fotos de integracion en redes muestran equipo unido",
              "bsc": {
                "bsc_customer": 1
              },
              "cost": 0
            }
          ],
          "tags": [
            "integracion",
            "comfamiliar",
            "bienestar"
          ],
          "next": "hr_09",
          "narrative": "La primera jornada es en el Parque del Cafe. El equipo vuelve renovado. \"Necesitabamos esto\", dice la jefe de turno del centro.",
          "feedback": "Las actividades de integracion reducen el ausentismo hasta 25% segun Comfamiliar. Al usar subsidios de la caja, el costo real para la empresa se reduce al 40%. Ventaja: ya se paga el aporte, hay que aprovecharlo."
        },
        {
          "id": "C",
          "label": "Programa de salud mental (psicologo laboral)",
          "description": "Contratar psicologo 2 dias/semana para consultas individuales y talleres de manejo de estres.",
          "cost": 2450000,
          "revenue": 14249647,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 1,
            "bsc_internal": 3,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Empleados con mejor salud mental son mas productivos y empáticos",
              "bsc": {
                "bsc_internal": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "salud-mental",
            "psicologo",
            "estres"
          ],
          "next": "hr_09",
          "narrative": "El psicologo identifica 3 casos de ansiedad que nadie habia detectado. Con atencion temprana, se evitan incapacidades costosas.",
          "feedback": "La Resolucion 2646/2008 obliga a evaluar riesgo psicosocial. Un caso de burnout cuesta ~$8M entre incapacidad, reemplazo y baja productividad. Invertir en salud mental es prevencion, no lujo."
        },
        {
          "id": "D",
          "label": "Dotacion premium y mejora de espacios",
          "description": "Uniformes comodos de buena calidad, zona de descanso con nevera y microondas, casilleros personales.",
          "cost": 2800000,
          "revenue": 11003388,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Uniformes premium proyectan imagen profesional",
              "bsc": {
                "bsc_customer": 2
              },
              "cost": 0
            }
          ],
          "tags": [
            "dotacion",
            "espacios",
            "comodidad"
          ],
          "next": "hr_09",
          "narrative": "Los uniformes nuevos generan orgullo. La zona de descanso se convierte en punto de encuentro y mejora la convivencia. \"Ya no comemos parados\", celebra el equipo.",
          "feedback": "La dotacion es obligatoria para empleados con salario hasta 2 SMMLV (Art. 230 CST): zapatos y vestido de labor cada 4 meses. Ir mas alla de lo minimo (calidad premium, espacios dignos) impacta directamente la percepcion del empleado."
        },
        {
          "id": "E",
          "label": "Solo cumplir lo minimo legal",
          "description": "Botiquin basico, ARL al dia y dotacion estandar; invertir el presupuesto en otra area.",
          "cost": 350000,
          "revenue": 5446379,
          "bsc": {
            "bsc_financial": 3,
            "bsc_customer": -1,
            "bsc_internal": 0,
            "bsc_learning": -2
          },
          "crossEffects": [],
          "tags": [
            "minimo-legal",
            "ahorro",
            "basico"
          ],
          "next": "hr_09",
          "narrative": "Se cumple el minimo. Los empleados notan que otras empresas en Pereira ofrecen mas. \"Aqui no les importamos como personas\", comenta una cajera.",
          "feedback": "Cumplir solo lo minimo legal evita multas pero no genera compromiso. En un mercado competido como Pereira, donde Frisby y Kokoriko ofrecen beneficios adicionales, el minimo es insuficiente para retener."
        }
      ]
    },
    "hr_09": {
      "day": 22,
      "title": "Reestructuracion organizacional",
      "context": "Tras 3 semanas de operacion, los datos muestran que un punto de venta tiene 30% mas demanda que el otro. El organigrama inicial ya no sirve. Hay que redistribuir el equipo.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Reforzar el punto fuerte y reducir el debil",
          "description": "Mover 8 personas al punto de alta demanda y dejar el otro con equipo minimo.",
          "cost": 1050000,
          "revenue": 7500000,
          "bsc": {
            "bsc_financial": 3,
            "bsc_customer": 2,
            "bsc_internal": 2,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Punto fuerte opera a maxima capacidad, el debil apenas cubre",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Ingresos suben $3M/mes por capitalizar demanda del punto fuerte",
              "bsc": {
                "bsc_financial": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "redistribucion",
            "concentrar",
            "demanda"
          ],
          "next": "hr_10",
          "narrative": "El punto del centro ahora tiene 28 personas y fluye perfecto. El de Cuba queda con 12 y los clientes notan filas mas largas. \"Alla atienden rapido, aca toca esperar\", se quejan.",
          "feedback": "Concentrar recursos donde hay demanda maximiza ingresos a corto plazo (eficiencia asignativa). Pero descuidar un punto puede hacerlo inviable y perder la inversion de apertura."
        },
        {
          "id": "B",
          "label": "Crear equipo flotante entre sedes",
          "description": "6 empleados polivalentes rotan entre sedes segun demanda diaria; incentivo de $5K/dia por desplazamiento.",
          "cost": 2100000,
          "revenue": 3750000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 3,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Equipo flotante cubre picos sin sobrecarga fija",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            },
            {
              "area": "finance",
              "message": "Costo adicional de $900K/mes en bonificacion de desplazamiento",
              "bsc": {
                "bsc_financial": -1
              },
              "cost": -900000
            }
          ],
          "tags": [
            "flotante",
            "polivalente",
            "flexible"
          ],
          "next": "hr_10",
          "narrative": "Los 6 flotantes se convierten en los mas versatiles del equipo. Conocen ambas sedes, resuelven problemas rapido y son candidatos naturales a jefatura.",
          "feedback": "El equipo flotante es un modelo de flexibilidad laboral que reduce costos fijos. Legalmente, el cambio de lugar de trabajo debe pactarse en el contrato (Art. 23 CST) o se requiere consentimiento del trabajador."
        },
        {
          "id": "C",
          "label": "Promover jefes de sede con autonomia local",
          "description": "Ascender dos lideres a administradores de sede con poder de contratar auxiliares segun necesidad local.",
          "cost": 2450000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Decisiones locales agilizan respuesta a demanda cambiante",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "descentralizar",
            "jefes-sede",
            "autonomia"
          ],
          "next": "hr_10",
          "narrative": "Los dos nuevos administradores sienten el peso de la responsabilidad y responden. El del punto debil propone un menu express que sube ventas 20%.",
          "feedback": "Descentralizar la decision crea ownership y velocidad de respuesta. Es el paso natural hacia escalar la cadena. Riesgo: sin control central, cada sede puede divergir del estandar."
        },
        {
          "id": "D",
          "label": "Mantener estructura actual y contratar 5 mas",
          "description": "No reestructurar; simplemente agregar 5 personas al punto de alta demanda.",
          "cost": 3500000,
          "revenue": 2500000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 1,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Nomina crece sin optimizar la estructura existente",
              "bsc": {
                "bsc_financial": -2
              },
              "cost": -2000000
            }
          ],
          "tags": [
            "statu-quo",
            "contratar-mas",
            "ineficiente"
          ],
          "next": "hr_10",
          "narrative": "Se contratan 5 personas mas. El punto fuerte mejora, pero el organigrama plano genera confusion: \"¿quien manda aqui?\" pregunta un nuevo.",
          "feedback": "Agregar personas sin reestructurar es la solucion mas costosa y menos sostenible. La eficiencia no depende solo de la cantidad de personas sino de como se organizan. Un restaurante con 50 personas mal organizadas rinde menos que uno con 35 bien estructuradas."
        }
      ]
    },
    "hr_10": {
      "day": 25,
      "title": "Encuesta de clima y decision final",
      "context": "Se aplica la encuesta de clima laboral y el resultado es 6.8/10. La competencia presiona fuerte y el equipo necesita una senal clara de la direccion para el cierre del primer mes.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Gran evento de cierre con compromisos publicos",
          "description": "Asamblea general con resultados transparentes, plan de accion y fiesta de cierre de mes con premios al equipo.",
          "cost": 2800000,
          "revenue": 5352634,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Evento genera contenido para redes y fortalece marca empleadora",
              "bsc": {
                "bsc_customer": 3
              },
              "cost": 0
            },
            {
              "area": "operations",
              "message": "Equipo motivado arranca el mes 2 con energia renovada",
              "bsc": {
                "bsc_internal": 3
              },
              "cost": 0
            }
          ],
          "tags": [
            "evento",
            "transparencia",
            "clima",
            "motivacion"
          ],
          "next": null,
          "narrative": "La asamblea dura 2 horas. Se presentan resultados, se reconocen los mejores y se comparten los planes. El equipo aplaude. Clima sube a 8.2/10 en la siguiente medicion. El mes 2 arranca con la moral por las nubes.",
          "feedback": "La transparencia en resultados genera confianza y compromiso. Celebrar los logros colectivos refuerza la identidad. Las empresas con clima laboral >8/10 tienen 21% mas productividad segun Gallup. El costo del evento es una inversion en retencion."
        },
        {
          "id": "B",
          "label": "Plan de mejora silencioso sin evento",
          "description": "Implementar mejoras puntuales basadas en la encuesta sin hacer ruido ni generar expectativas adicionales.",
          "cost": 700000,
          "revenue": 14081148,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 0,
            "bsc_internal": 1,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "operations",
              "message": "Mejoras graduales sin disrupcion operativa",
              "bsc": {
                "bsc_internal": 1
              },
              "cost": 0
            }
          ],
          "tags": [
            "mejora-silenciosa",
            "bajo-perfil",
            "conservador"
          ],
          "next": null,
          "narrative": "Se implementan ajustes sin anunciarlos. Los empleados notan algunas mejoras pero nadie les explica el \"por que\". El clima sube apenas a 7.1/10. \"Aqui nunca nos dicen nada\", comenta un mesero.",
          "feedback": "Las mejoras silenciosas son eficientes en costo pero desperdician la oportunidad de generar engagement. Los empleados valoran que les cuenten los planes tanto como los cambios mismos. La comunicacion interna es un motivador gratuito que muchas empresas ignoran."
        }
      ]
    }
  }
};
