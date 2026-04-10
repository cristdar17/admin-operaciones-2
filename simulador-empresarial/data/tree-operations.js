/* v2.1 - Boosted rewards for days 17-25 */
window.TREE_OPERATIONS = {
  "name": "Operaciones",
  "icon": "⚙️",
  "color": "#FF6B35",
  "startNode": "ops_01",
  "nodes": {
    "ops_01": {
      "day": 1,
      "title": "Capacidad de producción",
      "context": "La cocina produce 500 platos/día pero la demanda proyectada es 650. El punto de equilibrio está en 480 platos.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Turno extra nocturno",
          "description": "Capacidad sube a 750 pero costos laborales +35% por recargo nocturno.",
          "cost": 18000000,
          "revenue": 8000000,
          "bsc": {
            "bsc_financial": -3,
            "bsc_customer": 2,
            "bsc_internal": 5,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Se necesitan 8 contrataciones nocturnas urgentes",
              "bsc": {
                "bsc_learning": -2
              }
            }
          ],
          "tags": [
            "turno_extra"
          ],
          "next": "ops_02",
          "narrative": "El turno nocturno arranca con tropiezos pero estabiliza la producción en una semana.",
          "feedback": "⭐ Respuesta rápida de capacidad. En teoría, ampliar turnos es lo más ágil pero sube costos fijos. Ideal si la demanda es estable y confirmada."
        },
        {
          "id": "B",
          "label": "Subcontratar producción parcial",
          "description": "Un tercero en Dosquebradas cubre 200 platos/día a costo variable.",
          "cost": 12000000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 0,
            "bsc_internal": 2,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Costo variable sube pero sin inversión fija",
              "bsc": {
                "bsc_financial": 2
              }
            }
          ],
          "tags": [
            "subcontratacion"
          ],
          "next": "ops_02",
          "narrative": "La subcontratación da flexibilidad pero el control de calidad requiere supervisión constante.",
          "feedback": "📘 Opción de libro de texto ante demanda incierta. Menor riesgo financiero, mayor flexibilidad. Desventaja: dependencia de tercero y riesgo de calidad."
        },
        {
          "id": "C",
          "label": "Optimizar proceso actual",
          "description": "Estudio de tiempos y movimientos para subir eficiencia un 20%.",
          "cost": 6000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 4,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Empleados capacitados en métodos eficientes",
              "bsc": {
                "bsc_learning": 3
              }
            }
          ],
          "tags": [
            "optimizacion"
          ],
          "next": "ops_02",
          "narrative": "La optimización sube la producción a 600. No cubre toda la demanda pero mejora márgenes.",
          "feedback": "Opción conservadora y económica. Desarrolla capacidades internas pero solo cubre 600/650. Buena base antes de invertir más."
        }
      ]
    },
    "ops_02": {
      "day": 3,
      "title": "Control de calidad",
      "context": "El 8% de los platos salen con defectos. Los clientes se quejan en redes y la calificación bajó de 4.5 a 3.8.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Cartas de control SPC",
          "description": "Monitoreo estadístico en cada estación con límites de control.",
          "cost": 8000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 4,
            "bsc_internal": 5,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Calificación online mejora gradualmente",
              "bsc": {
                "bsc_customer": 2
              }
            }
          ],
          "tags": [
            "spc"
          ],
          "next": "ops_03",
          "narrative": "Las cartas de control detectan variaciones antes de que se conviertan en defectos.",
          "feedback": "📘 Enfoque preventivo y sistemático. El SPC detecta causas asignables antes de que afecten al cliente. Requiere disciplina diaria."
        },
        {
          "id": "B",
          "label": "Dispositivos Poka-Yoke",
          "description": "Bandejas con divisiones, temporizadores y checklists visuales anti-error.",
          "cost": 10000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 5,
            "bsc_internal": 4,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Reducción de desperdicio por errores",
              "bsc": {
                "bsc_financial": 2
              }
            }
          ],
          "tags": [
            "poka_yoke"
          ],
          "next": "ops_03",
          "narrative": "Los dispositivos eliminan errores comunes de raíz. Los defectos bajan al 2%.",
          "feedback": "⭐ Excelente para errores repetitivos. Poka-Yoke elimina la posibilidad de error humano. Más costoso pero con resultados inmediatos."
        },
        {
          "id": "C",
          "label": "Inspección final reforzada",
          "description": "Dos supervisores revisan cada plato antes de salir.",
          "cost": 5000000,
          "revenue": 1000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Supervisores sobrecargados y desmotivados",
              "bsc": {
                "bsc_learning": -1
              }
            }
          ],
          "tags": [
            "inspeccion"
          ],
          "next": "ops_03",
          "narrative": "La inspección atrapa defectos pero no los previene. El equipo siente presión.",
          "feedback": "Enfoque reactivo — el peor desde la óptica de calidad total. Deming diría: \"dejar de depender de la inspección masiva\"."
        }
      ]
    },
    "ops_03": {
      "day": 5,
      "title": "Modelo de inventarios",
      "context": "Los ingredientes perecederos generan 12% de desperdicio. El proveedor principal está en La Virginia (40 min).",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "EOQ con stock de seguridad",
          "description": "Pedidos grandes cada 5 días con bodega refrigerada ampliada.",
          "cost": 14000000,
          "revenue": 6000000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Capital inmovilizado en inventario",
              "bsc": {
                "bsc_financial": -1
              }
            }
          ],
          "tags": [
            "eoq"
          ],
          "next": "ops_04",
          "narrative": "La bodega mantiene stock estable. El desperdicio baja al 7% pero el capital queda atado.",
          "feedback": "EOQ minimiza costo total matemáticamente. Bueno para demanda estable. Pero con perecederos el costo de mantenimiento real supera al teórico."
        },
        {
          "id": "B",
          "label": "JIT con entregas diarias",
          "description": "Acuerdo con 3 proveedores locales para entregas frescas cada mañana.",
          "cost": 9000000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Ingredientes frescos como diferenciador de marca",
              "bsc": {
                "bsc_customer": 3
              }
            }
          ],
          "tags": [
            "jit"
          ],
          "next": "ops_04",
          "narrative": "Las entregas diarias eliminan casi todo el desperdicio pero un retraso paraliza la cocina.",
          "feedback": "📘 JIT es superior para perecederos. Riesgo: dependencia de proveedores confiables. Toyota lo perfeccionó pero requiere relaciones sólidas."
        }
      ]
    },
    "ops_04": {
      "day": 8,
      "title": "Pronóstico de demanda",
      "context": "La demanda fluctúa entre 400 y 800 platos/día. Hay picos en quincena y eventos de Pereira.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Promedio móvil ponderado (4 semanas)",
          "description": "Pondera las últimas 4 semanas dando más peso a las recientes.",
          "cost": 3000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "promedio_movil"
          ],
          "next": "ops_05",
          "narrative": "El promedio móvil suaviza la variabilidad pero reacciona lento ante cambios bruscos.",
          "feedback": "Sencillo y robusto para demanda estable. Reacciona lento a tendencias y no captura estacionalidad."
        },
        {
          "id": "B",
          "label": "Suavización exponencial (α=0.3)",
          "description": "Reacciona rápido a cambios recientes con factor de suavización.",
          "cost": 4000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Mejor planificación reduce sobreproducción",
              "bsc": {
                "bsc_financial": 2
              }
            }
          ],
          "tags": [
            "suavizacion"
          ],
          "next": "ops_05",
          "narrative": "El modelo captura tendencias rápido. El error de pronóstico baja un 25%.",
          "feedback": "📘 Mejor balance precisión/simplicidad. α=0.3 reacciona sin ser nervioso. Para eventos, considerar Holt-Winters."
        },
        {
          "id": "C",
          "label": "Regresión con variables externas",
          "description": "Modelo con día de la semana, clima, eventos y quincena como variables.",
          "cost": 8000000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 4,
            "bsc_internal": 5,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Se necesita analista de datos dedicado",
              "bsc": {
                "bsc_learning": 2
              }
            }
          ],
          "tags": [
            "regresion"
          ],
          "next": "ops_05",
          "narrative": "El modelo es preciso pero requiere datos constantes y un analista dedicado.",
          "feedback": "Máxima precisión teórica pero alto costo y riesgo de sobreajuste. Mejor para cadenas grandes con muchos datos."
        }
      ]
    },
    "ops_05": {
      "day": 10,
      "title": "Cuello de botella",
      "context": "La estación de cocción (2 hornos) procesa 40 platos/hora mientras el resto hace 60/hora.",
      "type": "binary",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Elevar la restricción (tercer horno)",
          "description": "Comprar horno industrial para subir cocción a 60 platos/hora.",
          "cost": 22000000,
          "revenue": 10000000,
          "bsc": {
            "bsc_financial": -3,
            "bsc_customer": 3,
            "bsc_internal": 5,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Inversión fuerte en activo fijo",
              "bsc": {
                "bsc_financial": -2
              }
            }
          ],
          "tags": [
            "elevar_restriccion"
          ],
          "next": "ops_06",
          "narrative": "El tercer horno elimina el cuello de botella. La cocina fluye a 60 platos/hora.",
          "feedback": "📘 Paso 4 de Goldratt: elevar la restricción. Correcto si ya explotaste y subordinaste. Ojo: el nuevo cuello aparecerá en otra estación."
        },
        {
          "id": "B",
          "label": "Explotar y subordinar",
          "description": "Buffer antes del horno, lotes optimizados, cero tiempo muerto en cocción.",
          "cost": 5000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 2,
            "bsc_internal": 4,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Equipo aprende a trabajar al ritmo del cuello de botella",
              "bsc": {
                "bsc_learning": 3
              }
            }
          ],
          "tags": [
            "explotar_subordinar"
          ],
          "next": "ops_06",
          "narrative": "La reorganización sube cocción a 52/hora sin comprar nada. No llega a 60 pero mejora mucho.",
          "feedback": "⭐ Pasos 2-3 de Goldratt: explotar y subordinar. Siempre intentar esto ANTES de invertir. Menor costo, mayor aprendizaje."
        }
      ]
    },
    "ops_06": {
      "day": 13,
      "title": "Lean Manufacturing",
      "context": "La cocina tiene desperdicios visibles: movimientos innecesarios, ingredientes desordenados y esperas entre estaciones.",
      "type": "multi",
      "multiMax": 2,
      "options": [
        {
          "id": "A",
          "label": "Programa 5S completo",
          "description": "Clasificar, ordenar, limpiar, estandarizar y disciplinar cada estación.",
          "cost": 4000000,
          "revenue": 2000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 4,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Cultura de orden mejora clima laboral",
              "bsc": {
                "bsc_learning": 2
              }
            }
          ],
          "tags": [
            "5s"
          ],
          "next": "ops_07",
          "narrative": "Las 5S transforman la cocina. El equipo encuentra todo más rápido.",
          "feedback": "⭐ Base de cualquier implementación Lean. Sin 5S, las demás herramientas no se sostienen. Bajo costo, alto impacto cultural."
        },
        {
          "id": "B",
          "label": "Value Stream Mapping (VSM)",
          "description": "Mapear flujo completo desde pedido hasta entrega para identificar mudas.",
          "cost": 6000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 5,
            "bsc_learning": 5
          },
          "crossEffects": [],
          "tags": [
            "vsm"
          ],
          "next": "ops_07",
          "narrative": "El VSM revela que el 40% del tiempo es espera pura. Se identifican 6 mejoras.",
          "feedback": "📘 Herramienta diagnóstica poderosa. Visualiza dónde está el valor y dónde el desperdicio. Combinar con 5S es la dupla más efectiva."
        },
        {
          "id": "C",
          "label": "Eventos Kaizen semanales",
          "description": "Reunión semanal donde el equipo propone mejoras incrementales.",
          "cost": 2000000,
          "revenue": 1500000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 1,
            "bsc_internal": 3,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Empleados empoderados proponen ideas propias",
              "bsc": {
                "bsc_learning": 3
              }
            }
          ],
          "tags": [
            "kaizen"
          ],
          "next": "ops_07",
          "narrative": "Los Kaizen generan 4 mejoras en el primer mes. El equipo se siente dueño del proceso.",
          "feedback": "Mejora continua genuina. Bajo costo y alta participación. Funciona mejor cuando ya hay 5S como base."
        },
        {
          "id": "D",
          "label": "Automatizar con tecnología",
          "description": "Pantallas digitales de pedidos y sensores de temperatura automáticos.",
          "cost": 15000000,
          "revenue": 4000000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 3,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Inversión alta con ROI a mediano plazo",
              "bsc": {
                "bsc_financial": -1
              }
            }
          ],
          "tags": [
            "automatizacion"
          ],
          "next": "ops_07",
          "narrative": "La tecnología reduce errores de comunicación pero el equipo tarda en adaptarse.",
          "feedback": "Automatizar sin estandarizar primero es error clásico. Lean dice: primero simplifica, luego automatiza."
        }
      ]
    },
    "ops_07": {
      "day": 15,
      "title": "Estrategia de mantenimiento",
      "context": "El horno principal falló 3 veces el mes pasado. Cada parada cuesta 2 horas y $800.000 en reparación.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "TPM (Mantenimiento Productivo Total)",
          "description": "Programa preventivo con operarios entrenados en mantenimiento básico diario.",
          "cost": 10000000,
          "revenue": 6000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 3,
            "bsc_internal": 5,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Operarios con nuevas habilidades técnicas",
              "bsc": {
                "bsc_learning": 3
              }
            }
          ],
          "tags": [
            "tpm"
          ],
          "next": "ops_08",
          "narrative": "El TPM reduce fallas un 80%. Los operarios detectan problemas antes de las paradas.",
          "feedback": "📘 Estándar de clase mundial. Los 8 pilares del TPM atacan la raíz. El OEE mejora drásticamente. Se paga solo en 3 meses."
        },
        {
          "id": "B",
          "label": "Preventivo tercerizado",
          "description": "Técnico externo revisa equipos cada 15 días bajo contrato mensual.",
          "cost": 7000000,
          "revenue": 3000000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 1
          },
          "crossEffects": [],
          "tags": [
            "preventivo_externo"
          ],
          "next": "ops_08",
          "narrative": "Las revisiones reducen fallas un 50% pero el equipo no desarrolla habilidades.",
          "feedback": "Reduce fallas pero el conocimiento queda en el tercero. Aceptable como solución intermedia."
        },
        {
          "id": "C",
          "label": "Reactivo + repuestos en stock",
          "description": "Reparar cuando falle pero tener repuestos críticos listos.",
          "cost": 4000000,
          "revenue": 1000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": -1,
            "bsc_internal": 1,
            "bsc_learning": 0
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Paradas generan demoras visibles al cliente",
              "bsc": {
                "bsc_customer": -2
              }
            }
          ],
          "tags": [
            "reactivo"
          ],
          "next": "ops_08",
          "narrative": "Las fallas siguen. Los repuestos aceleran la reparación pero la producción se detiene igual.",
          "feedback": "Peor enfoque desde la teoría. Mantenimiento reactivo es el más costoso a largo plazo por costos ocultos."
        }
      ]
    },
    "ops_08": {
      "day": 18,
      "title": "Balanceo de línea",
      "context": "La línea tiene 5 estaciones: 8, 12, 6, 10 y 9 min. El takt time es 10 min/plato.",
      "type": "multi",
      "multiMax": 2,
      "options": [
        {
          "id": "A",
          "label": "Redistribuir tareas",
          "description": "Mover operaciones de la estación 2 (12 min) a la 3 (6 min).",
          "cost": 2100000,
          "revenue": 5000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 1,
            "bsc_internal": 5,
            "bsc_learning": 3
          },
          "crossEffects": [],
          "tags": [
            "redistribuir"
          ],
          "next": "ops_09",
          "narrative": "Las estaciones quedan entre 9 y 10.5 min. Eficiencia sube del 75% al 92%.",
          "feedback": "⭐ Solución de libro. Eficiencia = Σtiempos / (n × takt). Mínimo costo, máximo impacto."
        },
        {
          "id": "B",
          "label": "Operario adicional en cuello",
          "description": "Segundo cocinero en estación 2 reduce su tiempo a 6 minutos.",
          "cost": 5600000,
          "revenue": 7500000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 3,
            "bsc_learning": 1
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Contratación adicional para la línea",
              "bsc": {
                "bsc_learning": -1
              }
            }
          ],
          "tags": [
            "operario_extra"
          ],
          "next": "ops_09",
          "narrative": "La estación 2 deja de ser cuello pero ahora la 4 es la más lenta.",
          "feedback": "Válida pero costosa. Duplicar recurso sin redistribuir es ineficiente. Nuevo cuello aparece inmediatamente."
        },
        {
          "id": "C",
          "label": "Estación paralela",
          "description": "Duplicar la estación 2 para que dos unidades trabajen en paralelo.",
          "cost": 10500000,
          "revenue": 12500000,
          "bsc": {
            "bsc_financial": -2,
            "bsc_customer": 3,
            "bsc_internal": 4,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Inversión en equipamiento adicional",
              "bsc": {
                "bsc_financial": -1
              }
            }
          ],
          "tags": [
            "estacion_paralela"
          ],
          "next": "ops_09",
          "narrative": "La línea paralela duplica capacidad de cocción. Throughput sube un 40%.",
          "feedback": "Fuerza bruta. Efectiva para escalar pero costosa. Solo se justifica si la demanda supera claramente la capacidad."
        },
        {
          "id": "D",
          "label": "Mejor equipamiento",
          "description": "Equipos más rápidos en estación 2 reducen tiempo de 12 a 9 minutos.",
          "cost": 8400000,
          "revenue": 10000000,
          "bsc": {
            "bsc_financial": -1,
            "bsc_customer": 2,
            "bsc_internal": 4,
            "bsc_learning": 2
          },
          "crossEffects": [],
          "tags": [
            "mejor_equipo"
          ],
          "next": "ops_09",
          "narrative": "El nuevo equipo es más rápido. La estación 2 deja de limitar el flujo.",
          "feedback": "Inversión moderada con buen resultado. Combinada con redistribución (A) sería óptima."
        }
      ]
    },
    "ops_09": {
      "day": 21,
      "title": "Planeación agregada",
      "context": "Los próximos 3 meses: mes 1 (alto por temporada), mes 2 (normal), mes 3 (bajo por vacaciones).",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Estrategia Chase (persecución)",
          "description": "Ajustar fuerza laboral cada mes: contratar en alto, reducir en bajo.",
          "cost": 8400000,
          "revenue": 17500000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 2,
            "bsc_learning": -2
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Alta rotación genera costos y mal clima laboral",
              "bsc": {
                "bsc_learning": -3
              }
            }
          ],
          "tags": [
            "chase"
          ],
          "next": "ops_10",
          "narrative": "La producción se ajusta a la demanda pero el equipo sufre la inestabilidad.",
          "feedback": "Minimiza inventario pero maximiza costos de contratación/despido. En Colombia, los costos de liquidación la hacen muy cara."
        },
        {
          "id": "B",
          "label": "Estrategia Level (nivelación)",
          "description": "Producción constante: acumular inventario en bajos, usarlo en altos.",
          "cost": 7000000,
          "revenue": 12500000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 2,
            "bsc_internal": 4,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "finance",
              "message": "Capital atado en inventario durante meses bajos",
              "bsc": {
                "bsc_financial": -1
              }
            }
          ],
          "tags": [
            "level"
          ],
          "next": "ops_10",
          "narrative": "Equipo estable produce con calidad constante. El inventario en mes bajo requiere almacenamiento.",
          "feedback": "📘 Preferida cuando costos de inventario < costos de contratación/despido. Estabilidad = mejor calidad. Cuidado con perecederos."
        },
        {
          "id": "C",
          "label": "Estrategia mixta",
          "description": "Base fija + temporales en picos, horas extra moderadas y algo de inventario.",
          "cost": 7700000,
          "revenue": 15000000,
          "bsc": {
            "bsc_financial": 1,
            "bsc_customer": 3,
            "bsc_internal": 3,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Equipo base estable con temporales en picos",
              "bsc": {
                "bsc_learning": 1
              }
            }
          ],
          "tags": [
            "mixta"
          ],
          "next": "ops_10",
          "narrative": "La estrategia mixta balancea costos y estabilidad. El equipo base se mantiene motivado.",
          "feedback": "⭐ La más realista. Combina estabilidad del core + flexibilidad para picos. Es lo que hacen la mayoría de empresas exitosas."
        }
      ]
    },
    "ops_10": {
      "day": 24,
      "title": "Estrategia final de operaciones",
      "context": "Día 24: define la estrategia operativa que guiará al restaurante en su próxima fase de crecimiento.",
      "type": "choice",
      "multiMax": null,
      "options": [
        {
          "id": "A",
          "label": "Excelencia operacional (costo)",
          "description": "Priorizar eficiencia, estandarización y costos bajos como ventaja.",
          "cost": 5600000,
          "revenue": 15000000,
          "bsc": {
            "bsc_financial": 5,
            "bsc_customer": 1,
            "bsc_internal": 5,
            "bsc_learning": 2
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Posicionamiento como opción económica y confiable",
              "bsc": {
                "bsc_customer": 2
              }
            }
          ],
          "tags": [
            "costo"
          ],
          "next": null,
          "narrative": "El restaurante lidera en eficiencia. Precios competitivos con margen saludable.",
          "feedback": "Estrategia tipo McDonald's/Toyota. Funciona en mercados sensibles al precio. Riesgo: competir solo por precio es carrera al fondo."
        },
        {
          "id": "B",
          "label": "Diferenciación por calidad",
          "description": "Calidad superior, ingredientes premium y experiencia del cliente.",
          "cost": 10500000,
          "revenue": 25000000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 5,
            "bsc_internal": 3,
            "bsc_learning": 3
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Marca premium reconocida en el Eje Cafetero",
              "bsc": {
                "bsc_customer": 3
              }
            }
          ],
          "tags": [
            "calidad"
          ],
          "next": null,
          "narrative": "El restaurante se posiciona como referente de calidad en Pereira.",
          "feedback": "📘 Estrategia tipo Apple. Márgenes altos si el mercado valora la diferencia. Segmento premium en Pereira crece pero es limitado."
        },
        {
          "id": "C",
          "label": "Flexibilidad y respuesta rápida",
          "description": "Adaptarse rápido a cambios de demanda, menú rotativo, innovación.",
          "cost": 7700000,
          "revenue": 17500000,
          "bsc": {
            "bsc_financial": 2,
            "bsc_customer": 4,
            "bsc_internal": 4,
            "bsc_learning": 5
          },
          "crossEffects": [
            {
              "area": "hr",
              "message": "Equipo polivalente y creativo",
              "bsc": {
                "bsc_learning": 3
              }
            }
          ],
          "tags": [
            "flexibilidad"
          ],
          "next": null,
          "narrative": "El restaurante se reinventa constantemente. Equipo versátil, clientes sorprendidos.",
          "feedback": "⭐ Estrategia tipo Zara. Ideal para mercados cambiantes. Requiere equipo capacitado y procesos ágiles. Difícil de copiar."
        },
        {
          "id": "D",
          "label": "Sostenibilidad integral",
          "description": "Zero waste, proveedores locales, huella de carbono mínima.",
          "cost": 9100000,
          "revenue": 12500000,
          "bsc": {
            "bsc_financial": 0,
            "bsc_customer": 4,
            "bsc_internal": 3,
            "bsc_learning": 4
          },
          "crossEffects": [
            {
              "area": "marketing",
              "message": "Reconocimiento como restaurante sostenible",
              "bsc": {
                "bsc_customer": 4
              }
            }
          ],
          "tags": [
            "sostenibilidad"
          ],
          "next": null,
          "narrative": "El restaurante lidera sostenibilidad en Pereira. Nicho fiel y consciente.",
          "feedback": "Tendencia global fuerte. Diferenciador real en Pereira pero el mercado dispuesto a pagar más aún es pequeño. Apuesta a futuro."
        }
      ]
    }
  }
};
