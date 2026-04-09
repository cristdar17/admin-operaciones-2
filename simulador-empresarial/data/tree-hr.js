/* ============================================================
   TREE-HR - Arbol de decisiones del area de TALENTO HUMANO
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto del area: $65.000.000 COP
   ============================================================ */

window.TREE_HR = {
  name: 'Talento Humano',
  icon: '👥',
  color: '#FF2D55',
  startNode: 'hr_01',
  nodes: {

    // ============================================================
    //  FASE 1 - CONFORMACION DEL EQUIPO (Dias 2-8)
    // ============================================================

    // --- DIA 2: Plan de contratacion ---
    'hr_01': {
      day: 2,
      title: 'Plan de contratacion inicial',
      context: 'La cadena necesita 45 empleados operativos para arrancar: cocineros, cajeros, meseros y personal de limpieza. En Pereira, el mercado laboral de comida rapida es competido — Frisby, Kokoriko, El Corral y PPC ya absorben mucho talento. El salario minimo 2026 es $1.423.500 COP. Contratar por nomina directa implica pagar EPS (8.5%), pension (12%), ARL (segun riesgo), caja de compensacion (4%), ICBF (3%) y SENA (2%). Externalizar reduce carga administrativa pero aleja al empleado de la cultura organizacional. ¿Como conformar el equipo base?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Contratacion masiva directa (45 personas por nomina)',
          description: 'Publicar convocatoria abierta en Computrabajo y redes sociales. Proceso de seleccion de 5 dias: prueba psicotecnica, entrevista y prueba practica en cocina. Todos entran con contrato a termino fijo a 6 meses, con posibilidad de pasar a indefinido. Costo de nomina mensual alto, pero control total del equipo.',
          cost: 18000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 3, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Equipo completo desde el dia 1: turnos cubiertos al 100%', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'finance', message: 'Carga prestacional alta: $28M/mes en nomina total', bsc: { bsc_financial: -3 }, cost: -5000000 }
          ],
          tags: ['nomina-directa', 'control-total', 'alto-costo'],
          next: 'hr_02',
          narrative: 'Llegan 230 hojas de vida en 3 dias. El proceso de seleccion es agotador pero se logran filtrar los 45 mejores perfiles. La nomina queda lista con todos los parafiscales al dia — la ARL clasifica la operacion en riesgo II por manejo de freidoras y cuchillos.'
        },
        {
          id: 'B',
          label: 'Contratacion selectiva (25 nomina + 20 temporales)',
          description: 'Contratar directamente los cargos clave (jefes de turno, cocineros principales, cajeros lider) y tercerizar los operativos con una temporal como Activos S.A. o Adecco. La temporal cobra 1.35x el salario por trabajador pero maneja toda la carga prestacional de los 20.',
          cost: 12000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Personal temporal requiere mas supervision en procesos', bsc: { bsc_internal: -1 }, cost: 0 },
            { area: 'finance', message: 'Nomina mixta: $18M/mes total, mas manejable', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['mixto', 'temporal', 'equilibrado'],
          next: 'hr_02',
          narrative: 'Activos S.A. entrega 20 trabajadores en 48 horas — ya tienen base de datos de personal con experiencia en alimentos. Los 25 de nomina directa pasan por proceso completo. El equipo queda listo, aunque hay diferencias visibles entre "los de planta" y "los de temporal".'
        },
        {
          id: 'C',
          label: 'Outsourcing total con operador especializado',
          description: 'Contratar a Sodexo o Compass Group para manejar toda la operacion de personal. Ellos ponen, capacitan y rotan la gente. Se paga una tarifa fija mensual de $52M que incluye salarios, prestaciones y reemplazos. Cero dolores de cabeza administrativos pero cero control sobre el equipo.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: -2, bsc_internal: -1, bsc_learning: -3 },
          crossEffects: [
            { area: 'operations', message: 'Operador externo controla ritmos y metodos de trabajo', bsc: { bsc_internal: -3 }, cost: 0 },
            { area: 'marketing', message: 'Personal sin identidad de marca: atienden igual en cualquier restaurante', bsc: { bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['outsourcing', 'bajo-costo', 'sin-control'],
          next: 'hr_02_outsource',
          narrative: 'Sodexo asigna personal en 24 horas — son eficientes, pero los empleados llevan uniforme generico y no conocen la marca. "Yo trabajo para Sodexo, no para ustedes" dice un cocinero cuando le piden usar la receta de la casa.'
        },
        {
          id: 'D',
          label: 'Arranque lean: 30 personas + contratacion gradual',
          description: 'Empezar con el 65% del personal y cubrir los picos con horas extra. Contratar los 15 restantes en el mes 2, cuando ya se conozca la demanda real. Ahorra costos iniciales pero exige mucho al equipo base. Riesgo de burnout temprano.',
          cost: 10000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Turnos apretados: 30 personas cubriendo capacidad para 45', bsc: { bsc_internal: -3 }, cost: 0 },
            { area: 'logistics', message: 'Menos personal en recepcion de mercancias, posibles demoras', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['lean', 'gradual', 'riesgo-burnout'],
          next: 'hr_02',
          narrative: 'El equipo de 30 arranca motivado: "somos los fundadores". Pero la primera semana a tope deja a todos agotados. Los cocineros hacen doble turno, los cajeros limpian mesas, y un mesero amenaza con irse si no llega refuerzo pronto.'
        }
      ]
    },

    // --- DIA 5: Cultura organizacional ---
    'hr_02': {
      day: 5,
      title: 'Definicion de cultura organizacional',
      context: 'El equipo esta contratado pero cada quien viene de culturas laborales distintas: unos de Frisby (disciplina militar), otros de negocios familiares (informalidad total), algunos primer empleo. Se necesita definir la identidad cultural de la cadena. La investigacion en gestion humana muestra que las empresas con cultura definida tienen 33% menos rotacion — critico en comida rapida donde la rotacion anual puede superar el 80%. ¿Que tipo de cultura se va a construir?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Cultura de alto rendimiento con incentivos',
          description: 'Metas agresivas por turno (tiempos de servicio, ventas por empleado, cero desperdicio). Bonificaciones semanales para el mejor turno. Tablero de resultados visible. Estilo McDonald\'s: todo medido, todo cronometrado.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Empleados enfocados en tiempos: servicio mas rapido', bsc: { bsc_internal: 3, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['alto-rendimiento', 'metricas', 'competitivo'],
          next: 'hr_03',
          narrative: 'Se instala un tablero LED en la cocina con tiempos en vivo. "Turno A: 3:42 promedio por pedido. Turno B: 4:15". La competencia enciende al equipo pero algunos sienten la presion como estres, no como motivacion.'
        },
        {
          id: 'B',
          label: 'Cultura familiar y de servicio',
          description: 'Priorizar el bienestar del equipo, comunicacion abierta, celebraciones de cumpleanos, almuerzos compartidos. Lema: "Cuidamos a nuestra gente para que cuiden a nuestros clientes". Estilo Chick-fil-A: trato humano primero.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Empleados felices transmiten buena energia a los clientes', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['familiar', 'bienestar', 'servicio'],
          next: 'hr_03',
          narrative: 'El primer "viernes de compartir" une al equipo: los cocineros preparan su receta favorita y todos comen juntos. Un cajero dice: "En Frisby nunca me preguntaron como me sentia". La rotacion empieza a parecer que sera baja.'
        },
        {
          id: 'C',
          label: 'Cultura de innovacion y empoderamiento',
          description: 'Dar autonomia a los empleados para proponer mejoras. Buzon de ideas con premio mensual de $200.000 para la mejor propuesta. Equipos autodirigidos por turno. Estilo startup: fallar rapido, aprender rapido.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Empleados proponen mejoras en procesos de cocina', bsc: { bsc_internal: 2, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['innovacion', 'autonomia', 'aprendizaje'],
          next: 'hr_03',
          narrative: 'En la primera semana del buzon, llegan 12 propuestas. Un cocinero sugiere reorganizar la estacion de frituras para reducir movimientos — la idea ahorra 20 segundos por pedido. El equipo siente que su voz importa.'
        }
      ]
    },

    // --- DIA 5: Cultura organizacional (rama outsourcing) ---
    'hr_02_outsource': {
      day: 5,
      title: 'Integracion del personal tercerizado',
      context: 'Sodexo manda personal capacitado en manipulacion de alimentos, pero no conocen la marca ni los productos. El contrato establece que Sodexo maneja la disciplina interna, pero ustedes definen la receta y el servicio. Hay una zona gris peligrosa: si dan ordenes directas al personal de Sodexo, la UGPP puede reclasificar la relacion como contrato realidad y multarlos. ¿Como manejar la integracion?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Aceptar las reglas de Sodexo y adaptarse',
          description: 'Respetar la linea de mando de Sodexo. Comunicar todo cambio a traves del coordinador de Sodexo, nunca directamente al personal. Mas lento pero legalmente seguro.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: -2, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Cambios en procesos requieren pasar por Sodexo: demoras de 2-3 dias', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['tercerizado', 'seguro', 'lento'],
          next: 'hr_03',
          narrative: 'El coordinador de Sodexo se convierte en un cuello de botella. Cuando el jefe de cocina necesita que un empleado cambie de estacion, debe llamar al coordinador. "Esto no es un restaurante, es una oficina del gobierno", se queja.'
        },
        {
          id: 'B',
          label: 'Crear programa de inmersion de marca (riesgo legal)',
          description: 'Disenar una semana de inmersion donde el personal de Sodexo aprende la cultura, recetas y servicio. El riesgo es que la UGPP interprete esto como subordinacion directa. Consultar con un abogado laboralista cuesta $3M adicionales.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Personal tercerizado ahora conoce y proyecta la marca', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Honorarios del abogado laboralista: consultoria preventiva', bsc: { bsc_financial: -1 }, cost: -3000000 }
          ],
          tags: ['tercerizado', 'inmersion', 'riesgo-legal'],
          next: 'hr_03',
          narrative: 'El abogado revisa el programa y ajusta el lenguaje: "No es capacitacion obligatoria, es una invitacion voluntaria a conocer la marca". Sodexo acepta de mala gana. El personal sale entusiasmado pero el coordinador de Sodexo toma nota de todo.'
        }
      ]
    },

    // ============================================================
    //  FASE 2 - DESARROLLO DEL TALENTO (Dias 8-14)
    // ============================================================

    // --- DIA 8: Programa de formacion (multi-select) ---
    'hr_03': {
      day: 8,
      title: 'Programa de capacitacion integral',
      context: 'El SENA ofrece cursos gratuitos de manipulacion de alimentos (40 horas) y servicio al cliente (20 horas), pero las fechas no siempre cuadran con los turnos. Tambien hay oferta privada: el Instituto de Gastronomia de Risaralda tiene un diplomado express de cocina rapida ($1.8M por persona) y la Camara de Comercio ofrece talleres de liderazgo ($500.000 por persona). Con presupuesto limitado, hay que elegir en que invertir. Se pueden seleccionar hasta 3 programas.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Capacitacion operativa SENA (manipulacion de alimentos)',
          description: 'Certificar a los 45 empleados en BPM (Buenas Practicas de Manufactura). El SENA lo ofrece gratis pero exige 40 horas presenciales — hay que reorganizar turnos durante 2 semanas. Certificacion obligatoria por Secretaria de Salud de Pereira.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Personal certificado en BPM: menos riesgo sanitario', bsc: { bsc_internal: 4, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['sena', 'bpm', 'obligatorio', 'formacion'],
          next: 'hr_04',
          narrative: 'El instructor del SENA se presenta el lunes a las 6am. Los empleados del turno nocturno llegan con cara de sueno pero la clase es dinamica. Al final, todos entienden por que no se puede dejar el pollo fuera de la nevera mas de 2 horas.'
        },
        {
          id: 'B',
          label: 'Servicio al cliente (SENA + roleplay interno)',
          description: 'Combinar el curso del SENA (gratis, 20 horas) con sesiones internas de roleplay: simular clientes dificiles, manejar quejas, upselling de combos. Invertir en material audiovisual propio.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 5, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Equipo capacitado en upselling: ticket promedio puede subir 15%', bsc: { bsc_customer: 3, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['servicio', 'upselling', 'roleplay', 'formacion'],
          next: 'hr_04',
          narrative: 'En la primera sesion de roleplay, un cajero hace de "cliente Karen que pide hablar con el gerente". Las risas rompen el hielo y todos practican frases clave: "Con mucho gusto", "Le puedo ofrecer nuestro combo del dia", "Entiendo su frustracion".'
        },
        {
          id: 'C',
          label: 'Seguridad alimentaria avanzada (INVIMA + HACCP)',
          description: 'Ir mas alla de las BPM basicas: certificar al equipo de cocina en el sistema HACCP (Analisis de Peligros y Puntos Criticos de Control). Curso privado con auditor de INVIMA retirado. Solo para los 15 cocineros.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Sistema HACCP implementado: cero riesgo de cierre sanitario', bsc: { bsc_internal: 5 }, cost: 0 },
            { area: 'logistics', message: 'Protocolos HACCP exigen trazabilidad de insumos desde el proveedor', bsc: { bsc_internal: 2 }, cost: -1000000 }
          ],
          tags: ['haccp', 'invima', 'seguridad-alimentaria', 'formacion'],
          next: 'hr_04',
          narrative: 'El auditor retirado de INVIMA no se anda con cuentos: "En 2019 cerre 3 restaurantes en Pereira por salmonella. ¿Quieren ser el cuarto?". Los cocineros aprenden a medir temperaturas, documentar procesos y cero tolerancia con la contaminacion cruzada.'
        },
        {
          id: 'D',
          label: 'Liderazgo y gestion de equipos (jefes de turno)',
          description: 'Enviar a los 5 jefes de turno al taller de la Camara de Comercio de Pereira: liderazgo situacional, manejo de conflictos, comunicacion asertiva. 3 sabados, 4 horas cada uno.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Jefes de turno con mejores herramientas para gestionar equipos', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['liderazgo', 'jefes', 'camara-comercio', 'formacion'],
          next: 'hr_04',
          narrative: 'Los jefes de turno regresan del primer sabado transformados. "Me ensenaron que gritar no es liderar", dice uno. Otro practica la tecnica de feedback sandwich con su equipo el lunes — la diferencia es inmediata.'
        }
      ]
    },

    // --- DIA 11: Conflicto laboral ---
    'hr_04': {
      day: 11,
      title: 'Conflicto laboral: queja por horarios',
      context: 'Tres empleados presentan queja formal ante el Comite de Convivencia Laboral (obligatorio segun Ley 1010 de 2006). Alegan que los turnos rotativos no respetan las 8 horas entre jornadas que exige el Codigo Sustantivo del Trabajo (Art. 161). Ademas, una empleada madre cabeza de hogar dice que nunca le dan el turno de la manana, lo cual le impide recoger a su hijo del jardin. El sindicato de SINALTRAINAL en Pereira esta atento al caso. Si no se maneja bien, puede escalar a una queja ante el Ministerio del Trabajo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Reorganizar turnos respetando la ley al pie de la letra',
          description: 'Contratar un especialista en programacion de turnos ($2M) que diseñe cuadros de turno que cumplan: 8 horas de descanso entre jornadas, maximo 48 horas semanales, prioridad para madres cabeza de hogar en turnos diurnos. Solucion integral pero costosa y reduce flexibilidad operativa.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Turnos rigidos: menos flexibilidad para cubrir picos de demanda', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['legal', 'cumplimiento', 'turnos'],
          next: 'hr_05',
          narrative: 'El especialista entrega un cuadro de turnos impecable en 3 dias. La empleada recibe turno fijo de 6am a 2pm. Los demas rotan pero siempre con 8+ horas de descanso. El Comite de Convivencia cierra el caso satisfactoriamente. SINALTRAINAL pierde interes.'
        },
        {
          id: 'B',
          label: 'Negociar directamente con los empleados afectados',
          description: 'Reunion privada con los 3 quejosos. Ofrecer: turno preferente a la madre, bono de transporte nocturno ($150.000/mes) a los otros dos, y compromiso de mejorar la rotacion. No se contrata especialista, se ajusta internamente.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [],
          tags: ['negociacion', 'informal', 'rapido'],
          next: 'hr_05',
          narrative: 'Los tres empleados salen conformes de la reunion. Sin embargo, otros se enteran del bono de transporte y piden lo mismo: "¿Por que solo a ellos?". El precedente puede ser costoso.'
        },
        {
          id: 'C',
          label: 'Implementar sistema de autogestion de turnos',
          description: 'Comprar licencia de software como Sling o 7shifts ($800.000/mes). Los empleados eligen sus turnos con reglas automaticas que garantizan cobertura minima y cumplimiento legal. La tecnologia resuelve el conflicto humano.',
          cost: 5500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Software de turnos optimiza cobertura automaticamente', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'finance', message: 'Costo mensual recurrente de licencia de software', bsc: { bsc_financial: -1 }, cost: -800000 }
          ],
          tags: ['tecnologia', 'autogestion', 'software'],
          next: 'hr_05',
          narrative: 'La app se instala en los celulares de todos. Al principio hay resistencia: "Yo no manejo eso". Pero en 2 semanas todos la dominan. La madre cabeza de hogar bloquea su turno de manana permanentemente. Los cambios de turno entre companeros se hacen en 2 clics.'
        }
      ]
    },

    // --- DIA 14: Sistema de evaluacion de desempeno ---
    'hr_05': {
      day: 14,
      title: 'Sistema de evaluacion de desempeno',
      context: 'Se cumplen 2 semanas de operacion y ya se nota quienes rinden y quienes no. Hay un cocinero que produce el doble que sus companeros pero es grosero con el equipo. Una cajera es adorada por los clientes pero llega tarde todos los dias. Se necesita un sistema de evaluacion justo y transparente. En administracion de operaciones, la medicion del desempeno es clave para la mejora continua — lo que no se mide no se mejora.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'KPIs cuantitativos puros (estilo ingenieria industrial)',
          description: 'Medir todo con numeros: pedidos/hora, tiempos de preparacion, porcentaje de asistencia, desperdicio generado, ventas por turno. Evaluacion mensual con ranking publico. Sin subjetividad. El que cumple numeros, se queda.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 0, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'KPIs alineados con indicadores de eficiencia operativa', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['kpi', 'cuantitativo', 'ranking'],
          next: 'hr_06',
          narrative: 'El cocinero rapido pero grosero queda primero en el ranking. La cajera querida queda de penultima por sus llegadas tarde. Los numeros no mienten, pero el equipo siente que faltan matices importantes.'
        },
        {
          id: 'B',
          label: 'Evaluacion 360° (jefes, companeros y clientes)',
          description: 'Combinar metricas cuantitativas (50%) con evaluacion de pares (25%) y retroalimentacion de clientes via encuesta en tablet (25%). Mas completa y justa, pero mas compleja de administrar y vulnerable a subjetividad.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Encuestas de satisfaccion generan datos utiles para mejorar servicio', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['360', 'integral', 'clientes'],
          next: 'hr_06',
          narrative: 'El cocinero grosero queda con 95% en produccion pero 35% en evaluacion de pares: "Trabaja bien pero nos trata como basura". La cajera querida tiene 95% con clientes y 60% en metricas. Ahora si hay una foto completa para tomar decisiones.'
        },
        {
          id: 'C',
          label: 'BSC simplificado por empleado (Balanced Scorecard individual)',
          description: 'Adaptar el Balanced Scorecard a nivel individual: cada empleado tiene metas en 4 perspectivas — financiera (desperdicio, eficiencia), cliente (satisfaccion, quejas), procesos internos (cumplimiento de estandares), aprendizaje (certificaciones, propuestas de mejora). Evaluacion trimestral.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'BSC individual alineado con BSC organizacional: coherencia estrategica', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Sistema requiere software de seguimiento: inversion adicional', bsc: { bsc_financial: -1 }, cost: -1500000 }
          ],
          tags: ['bsc', 'balanced-scorecard', 'estrategico'],
          next: 'hr_06',
          narrative: 'Cada empleado recibe su "mini BSC" en una tarjeta plastificada. "Nunca habia visto mis metas asi, claras y con colores", dice un mesero. El cocinero grosero se da cuenta que tiene rojo en "aprendizaje" y "cliente" aunque su "procesos" esta en verde brillante.'
        }
      ]
    },

    // ============================================================
    //  FASE 3 - COMPENSACION Y MOTIVACION (Dias 17-23)
    // ============================================================

    // --- DIA 17: Estructura de incentivos ---
    'hr_06': {
      day: 17,
      title: 'Estructura de incentivos y bonificaciones',
      context: 'Las ventas del primer mes superan las expectativas en un 12%. El gerente general quiere premiar al equipo, pero hay que disenar un sistema sostenible — no se puede dar bonos una vez y luego quitarlos porque eso genera mas frustracion que no dar nada. El Codigo Sustantivo del Trabajo dice que un pago habitual y periodico puede convertirse en salario (con implicaciones prestacionales). Hay que ser estrategicos.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bonificacion variable por cumplimiento de metas colectivas',
          description: 'Si el punto de venta cumple la meta mensual, todos reciben una bonificacion no constitutiva de salario (Art. 128 CST). Monto: $180.000 por persona si se cumple el 100%, proporcional entre 90-99%. Nada por debajo del 90%. Fomenta trabajo en equipo.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 4, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Equipo motivado: productividad sube 8% en promedio', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Bonificacion mensual estimada: $8M si se cumplen metas', bsc: { bsc_financial: -2 }, cost: -3000000 }
          ],
          tags: ['bono-colectivo', 'meta', 'art-128'],
          next: 'hr_07',
          narrative: 'El primer mes con el sistema, el punto cumple 103% de la meta. Todos reciben sus $180.000. Se siente un ambiente de celebracion. "¡El proximo mes vamos por el 110%!", grita un cocinero. El incentivo funciona.'
        },
        {
          id: 'B',
          label: 'Comisiones individuales por venta y desempeno',
          description: 'Cajeros: 0.5% de las ventas de su turno. Cocineros: bono por platos/hora por encima del estandar. Meseros: propinas formalizadas + bono por cero quejas. Sistema individual que premia al que mas produce, pero puede generar competencia toxica.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: 'Cajeros motivados hacen upselling agresivo: ventas suben pero algunos clientes se quejan', bsc: { bsc_customer: -1 }, cost: 0 }
          ],
          tags: ['comision', 'individual', 'competencia'],
          next: 'hr_07',
          narrative: 'La cajera estrella gana $320.000 extra en el primer mes. Pero un cocinero se niega a ayudar a otro: "Cada quien con sus pedidos". La competencia empieza a romper el trabajo en equipo.'
        },
        {
          id: 'C',
          label: 'Beneficios no monetarios (salario emocional)',
          description: 'En vez de plata: dia libre en cumpleanos, turno preferente para los mejores evaluados, alimentacion gratis (ya hay comida en el restaurante), convenio con Comfamiliar para recreacion, auxilio educativo de $300.000/semestre para los que estudian.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Beneficios extralegales no generan carga prestacional', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['salario-emocional', 'beneficios', 'bienestar'],
          next: 'hr_07',
          narrative: 'La alimentacion gratis es un hit: "Me ahorro $250.000 al mes en almuerzos". El auxilio educativo motiva a 8 empleados a matricularse en el SENA nocturno. Pero un grupo mas joven dice: "Esta bien, pero yo necesito plata para el arriendo".'
        },
        {
          id: 'D',
          label: 'Sistema hibrido: bono base + beneficios',
          description: 'Combinar un bono colectivo modesto ($100.000/persona por cumplir meta) con beneficios no monetarios (alimentacion gratis + dia libre cumpleanos). Lo mejor de ambos mundos pero el costo total es mayor y la administracion mas compleja.',
          cost: 5500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Equipo satisfecho y motivado: rotacion esperada menor al 30% anual', bsc: { bsc_internal: 2, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Costo mensual de beneficios: $6M (bonos + alimentacion)', bsc: { bsc_financial: -2 }, cost: -2500000 }
          ],
          tags: ['hibrido', 'equilibrado', 'complejo'],
          next: 'hr_07',
          narrative: 'Los empleados reciben la noticia con aplausos. "Bono Y comida gratis? Esto esta mejor que Frisby", dice uno. La administracion de nomina se complica — la contadora pide una auxiliar solo para manejar los beneficios.'
        }
      ]
    },

    // --- DIA 20: Solicitud de aumento salarial ---
    'hr_07': {
      day: 20,
      title: 'Solicitud de aumento para personal clave',
      context: 'El jefe de cocina principal (salario: $2.8M) y la cajera lider (salario: $1.9M) piden reunion urgente. Ambos tienen ofertas de El Corral por $3.5M y $2.4M respectivamente. Son los mejores del equipo: el jefe de cocina creo 3 recetas exclusivas y la cajera tiene el mayor indice de satisfaccion. Perderlos seria catastrofico en semana 3. Pero aumentarles crea un precedente y el presupuesto ya esta ajustado.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Igualar la oferta de El Corral',
          description: 'Subirle al jefe de cocina a $3.5M y a la cajera a $2.4M. Costo adicional anual: $18.7M incluyendo prestaciones. Se retienen, pero otros empleados pueden enterarse y pedir lo mismo.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -3, bsc_customer: 3, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Jefe de cocina retenido: continuidad en recetas y procesos', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'finance', message: 'Incremento salarial no presupuestado: $18.7M/ano adicional', bsc: { bsc_financial: -3 }, cost: -6000000 }
          ],
          tags: ['retencion', 'aumento', 'costoso'],
          next: 'hr_08',
          narrative: 'Ambos aceptan quedarse. Pero el viernes, otro cocinero se entera del aumento y confronta al gerente: "Yo llevo el mismo tiempo y gano la mitad". La cascada de peticiones empieza.'
        },
        {
          id: 'B',
          label: 'Contrapropuesta creativa (ascenso + beneficios)',
          description: 'No igualar el salario base pero ofrecer: ascenso a "Chef ejecutivo" y "Coordinadora de servicio" con funciones de liderazgo, bono trimestral por resultados, horario preferente y auxilio de transporte mejorado. El aumento real es menor pero el cargo suena mejor.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Nuevos roles de liderazgo fortalecen la cadena de mando', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['ascenso', 'creativo', 'retencion-inteligente'],
          next: 'hr_08',
          narrative: '"Chef ejecutivo... eso suena serio", dice el cocinero viendo su nueva tarjeta de presentacion. La cajera acepta el rol de coordinadora y ya esta pensando en mejoras para su equipo. El aumento real fue de $400.000, no de $700.000, pero la motivacion es mayor.'
        },
        {
          id: 'C',
          label: 'Dejarlos ir y promover internamente',
          description: 'Agradecer su trabajo y desearles exito. Promover al segundo mejor cocinero y capacitar a otra cajera como lider. Mensaje al equipo: "Aqui todos somos reemplazables, nadie es indispensable". Ahorra plata pero se pierde talento y conocimiento.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: -3, bsc_internal: -3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Jefe de cocina se va con las recetas en la cabeza: riesgo operativo alto', bsc: { bsc_internal: -5 }, cost: 0 },
            { area: 'marketing', message: 'Cajera estrella se va: clientes preguntan por ella', bsc: { bsc_customer: -3 }, cost: 0 }
          ],
          tags: ['austeridad', 'rotacion', 'riesgo'],
          next: 'hr_08_loss',
          narrative: 'Se van el mismo viernes. El lunes, la cocina es un caos: nadie sabe la receta del pollo especial porque "eso lo sabia solo el jefe". Tres clientes regulares preguntan por la cajera y se van decepcionados. La leccion de gestion del conocimiento duele.'
        }
      ]
    },

    // --- DIA 23: Reestructuracion organizacional ---
    'hr_08': {
      day: 23,
      title: 'Reestructuracion organizacional',
      context: 'Despues de 3 semanas de operacion, los datos muestran ineficiencias: hay demasiados niveles de supervision para un restaurante de comida rapida. El organigrama actual tiene 5 niveles (gerente general > gerente de operaciones > jefes de turno > lideres de area > operarios). En restaurantes exitosos como Crepes & Waffles, la estructura es plana con maximo 3 niveles. Ademas, el area de logistica y el area de operaciones tienen funciones duplicadas en el manejo de inventario.',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Aplanar la estructura a 3 niveles',
          description: 'Eliminar el nivel de "lideres de area" y darle mas autonomia a los jefes de turno. Los 5 lideres de area actuales pasan a ser jefes de turno con mejor salario. Se ahorran 2 posiciones redundantes. Requiere redisenar el manual de funciones.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 3, bsc_customer: 1, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Estructura plana: decisiones mas rapidas en cocina y servicio', bsc: { bsc_internal: 4, bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Ahorro de 2 salarios completos con prestaciones: ~$6M/mes', bsc: { bsc_financial: 4 }, cost: 2000000 }
          ],
          tags: ['reestructuracion', 'eficiencia', 'estructura-plana'],
          next: 'hr_09',
          narrative: 'Los 2 empleados sobrantes reciben liquidacion justa y carta de recomendacion. Los jefes de turno asumen mas responsabilidad pero con un aumento de $300.000. Las decisiones ahora se toman en la cocina, no en una oficina. Los tiempos de respuesta mejoran 25%.'
        },
        {
          id: 'B',
          label: 'Mantener la estructura pero eliminar duplicidades',
          description: 'Conservar los 5 niveles pero redefinir funciones para que no se pisen con logistica y operaciones. Crear una matriz RACI (Responsable, Aprobador, Consultado, Informado) para cada proceso. Sin despidos ni cambios de cargo.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Matriz RACI clara: menos confusion en responsabilidades', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'logistics', message: 'Funciones de inventario ahora claramente asignadas a logistica', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['conservador', 'raci', 'sin-despidos'],
          next: 'hr_09',
          narrative: 'La matriz RACI se imprime en tamano poster y se pega en la oficina. "Ahora si se quien hace que", dice un lider de area aliviado. Sin embargo, el gerente general siente que sigue habiendo mucha burocracia para un restaurante.'
        }
      ]
    },

    // --- DIA 23: Reestructuracion (rama donde se fueron empleados clave) ---
    'hr_08_loss': {
      day: 23,
      title: 'Reconstruccion del equipo tras fuga de talento',
      context: 'La salida del jefe de cocina y la cajera lider dejo un hueco enorme. Las ventas cayeron 15% en la semana. La moral esta baja: "Si ellos se fueron, ¿yo que hago aqui?". Se necesita actuar rapido: o se reconstruye el equipo internamente o se sale al mercado a buscar reemplazos. El SENA tiene una bolsa de egresados de gastronomia que podria ser util.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Reclutar externamente (buscar estrellas en el mercado)',
          description: 'Publicar en LinkedIn, Computrabajo y contactar head hunters del sector gastronomico. Ofrecer salario competitivo ($3.2M para jefe de cocina, $2.2M para lider de servicio). Tiempo estimado de busqueda: 2 semanas.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Dos semanas con cocina sin lider: recetas improvisadas', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['reclutamiento', 'externo', 'costoso'],
          next: 'hr_09',
          narrative: 'Llega un jefe de cocina con 8 anos de experiencia en Archie\'s. Buenisimo en tecnica pero impone sus recetas: "Aqui se cocina como yo digo". El choque cultural es fuerte.'
        },
        {
          id: 'B',
          label: 'Promover internamente y capacitar aceleradamente',
          description: 'Ascender al segundo cocinero mas habil y a una cajera con potencial. Invertir en capacitacion express con el Instituto de Gastronomia de Risaralda (3 dias intensivos). Mas barato y refuerza la cultura, pero hay curva de aprendizaje.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: -1, bsc_internal: 1, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Promocion interna motiva al equipo: "aqui si se puede crecer"', bsc: { bsc_internal: 2, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['promocion-interna', 'capacitacion', 'motivacion'],
          next: 'hr_09',
          narrative: 'El nuevo jefe de cocina esta nervioso pero comprometido. El equipo lo apoya: "Vos podes, hermano". En 10 dias ya maneja la cocina con soltura. No es tan rapido como el anterior pero el equipo trabaja mejor unidos.'
        },
        {
          id: 'C',
          label: 'Documentar todo y crear un sistema a prueba de rotacion',
          description: 'Antes de buscar reemplazo, documentar TODAS las recetas, procesos y protocolos en manuales digitales con video. Crear un sistema donde el conocimiento no dependa de una persona. Luego si, contratar. Toma mas tiempo pero resuelve el problema de raiz.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: -2, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Manuales de procesos estandarizados: cualquiera puede replicar la operacion', bsc: { bsc_internal: 5, bsc_learning: 4 }, cost: 0 },
            { area: 'logistics', message: 'Fichas tecnicas de insumos documentadas: compras mas eficientes', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['gestion-conocimiento', 'manuales', 'sostenible'],
          next: 'hr_09',
          narrative: 'En una semana, la cocina tiene 47 videos de recetas paso a paso, un manual de servicio y fichas de cada producto. "Ya no dependemos de nadie", dice el gerente. Es la mejor inversion a largo plazo, pero las ventas siguen bajas mientras tanto.'
        }
      ]
    },

    // ============================================================
    //  FASE 4 - BIENESTAR Y RETENCION (Dias 26-32)
    // ============================================================

    // --- DIA 26: Programa de bienestar ---
    'hr_09': {
      day: 26,
      title: 'Programa de bienestar laboral',
      context: 'La ARL Sura reporta que en el ultimo mes hubo 3 incidentes menores (quemaduras leves con aceite) y un caso de estres laboral diagnosticado. La caja de compensacion Comfamiliar Risaralda ofrece subsidios para actividades de bienestar si la empresa esta al dia en aportes (4% de la nomina). Ademas, la Ley 1562 de 2012 exige un Sistema de Gestion de Seguridad y Salud en el Trabajo (SG-SST). Es hora de invertir en el bienestar del equipo antes de que los problemas escalen.',
      type: 'multi',
      multiMax: 3,
      options: [
        {
          id: 'A',
          label: 'Programa de seguridad industrial (SG-SST completo)',
          description: 'Contratar un tecnologo en seguridad y salud en el trabajo ($2.5M/mes). Implementar: matriz de riesgos, elementos de proteccion, senalizacion, brigadas de emergencia y pausas activas. Cumple la ley y previene accidentes.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 0, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Elementos de proteccion reducen accidentes en cocina 60%', bsc: { bsc_internal: 4 }, cost: 0 }
          ],
          tags: ['sg-sst', 'seguridad', 'legal', 'bienestar'],
          next: 'hr_10',
          narrative: 'El tecnologo llega y su primera accion es poner guantes de silicona termicos junto a cada freidora. "¿Por que no teniamos esto antes?", dice un cocinero mirando sus cicatrices de quemadura. En 2 semanas, cero accidentes.'
        },
        {
          id: 'B',
          label: 'Actividades recreativas con Comfamiliar',
          description: 'Usar el subsidio de Comfamiliar para: integracion mensual en el parque del cafe, torneos deportivos internos, clases de baile los sabados, y acceso a la piscina de Comfamiliar para empleados y familias. Mejora clima pero no resuelve riesgos laborales.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Empleados contentos publican fotos de las integraciones: marca empleadora', bsc: { bsc_customer: 2, bsc_learning: 1 }, cost: 0 }
          ],
          tags: ['comfamiliar', 'recreacion', 'clima'],
          next: 'hr_10',
          narrative: 'El torneo de micro-futbol interno es un exito: el equipo de cocina le gana al de servicio 3-1 y todos terminan comiendo empanadas juntos. Las fotos en Instagram de los empleados muestran un equipo feliz. Tres personas de Frisby preguntan si hay vacantes.'
        },
        {
          id: 'C',
          label: 'Programa de salud mental y manejo del estres',
          description: 'Convenio con una psicologa organizacional ($1.8M/mes, 3 dias/semana). Ofrecer: consulta confidencial, talleres de manejo del estres, mindfulness antes de cada turno (5 minutos), y linea de atencion 24/7 para crisis. En comida rapida, el burnout es una epidemia.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Empleados con menos estres: menos errores en pedidos (-20% de reprocesos)', bsc: { bsc_internal: 3, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['salud-mental', 'estres', 'psicologa', 'bienestar'],
          next: 'hr_10',
          narrative: 'La psicologa detecta que el estres es peor en el turno de almuerzo (11am-2pm): "Sienten que la gente los mira con desespero". Implementa una rutina de 5 minutos de respiracion antes del turno pico. Los errores en pedidos bajan notablemente.'
        },
        {
          id: 'D',
          label: 'Programa de formacion continua (plan carrera)',
          description: 'Convenio con el SENA y la UTP: empleados que completen 1 ano pueden acceder a tecnologias en Gestion de Restaurantes (SENA, gratis) o descuento del 30% en Administracion de Empresas (UTP). La empresa pone $500.000/semestre por empleado como auxilio educativo.',
          cost: 3500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Auxilio educativo deducible de renta: beneficio tributario', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['plan-carrera', 'educacion', 'sena', 'utp', 'bienestar'],
          next: 'hr_10',
          narrative: 'La noticia del convenio con la UTP electrifica al equipo. 8 empleados se inscriben al SENA nocturno esa misma semana. Un mesero de 19 anos dice: "Si me graduo de la UTP gracias a esto, les doy 10 anos de mi vida aqui". La retencion a futuro se fortalece.'
        }
      ]
    },

    // --- DIA 29: Fuga de talento ---
    'hr_10': {
      day: 29,
      title: 'Crisis: fuga de talento al competidor',
      context: 'La cadena rival (la que compite en el simulador) esta ofreciendo $200.000 mas de salario base a cualquier empleado que se cambie. Ya se fueron 4 operarios esta semana y hay rumores de que 6 mas estan considerando irse. En el Eje Cafetero, los restaurantes de comida rapida sufren rotacion promedio del 80% anual — es el cancer del sector. Si la fuga continua, la operacion colapsa. Hay que actuar ya.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Contraataque salarial: igualar + $50.000 a todos',
          description: 'Aumentar el salario base de TODOS los empleados en $250.000 (igualar la oferta rival + $50.000 de margen). Costo mensual adicional: $11.25M con prestaciones. Frena la fuga inmediatamente pero destruye el presupuesto.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -4, bsc_customer: 2, bsc_internal: 3, bsc_learning: 0 },
          crossEffects: [
            { area: 'finance', message: 'Aumento general no presupuestado: $135M/ano adicional en nomina', bsc: { bsc_financial: -5 }, cost: -8000000 },
            { area: 'operations', message: 'Se detiene la fuga: turnos completos de nuevo', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['aumento-general', 'retencion', 'costoso'],
          next: 'hr_11',
          narrative: 'El anuncio del aumento se recibe con aplausos. Los 6 indecisos se quedan. Pero el gerente financiero pone cara larga: "¿De donde va a salir esa plata todos los meses?". La guerra de salarios con el competidor acaba de empezar.'
        },
        {
          id: 'B',
          label: 'Retencion selectiva: solo empleados clave + refuerzo cultural',
          description: 'Identificar los 15 empleados mas criticos y ofrecerles un bono de permanencia de $500.000 (pago unico, no salarial) + carta de compromiso mutuo por 6 meses. Los demas reciben una reunion motivacional con el gerente y refuerzo de beneficios existentes.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Empleados clave retenidos, pero operarios basicos siguen en riesgo', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['selectivo', 'bono-permanencia', 'diferenciado'],
          next: 'hr_11',
          narrative: 'Los 15 clave firman la carta de compromiso. Pero los operarios que no recibieron bono se sienten ciudadanos de segunda: "¿Nosotros no importamos?". Dos mas se van a la competencia esa semana.'
        },
        {
          id: 'C',
          label: 'Clausula de no competencia + formacion exclusiva',
          description: 'Para nuevos contratos, incluir clausula de no competencia de 6 meses (legal segun Corte Suprema si hay compensacion). Para los actuales, ofrecer un diplomado exclusivo en gestion de restaurantes (valor $4M) con compromiso de permanencia de 1 ano.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'finance', message: 'Clausula de no competencia requiere pagar compensacion proporcional', bsc: { bsc_financial: -1 }, cost: -1500000 }
          ],
          tags: ['no-competencia', 'formacion', 'compromiso'],
          next: 'hr_11',
          narrative: 'El diplomado entusiasma a 20 empleados que firman el compromiso de permanencia. La clausula de no competencia asusta a los nuevos candidatos: "¿No puedo trabajar en ningun restaurante si me voy?". Hay que explicar que solo aplica al competidor directo.'
        },
        {
          id: 'D',
          label: 'Dejar ir a los que quieran y reclutar de la bolsa SENA',
          description: 'No entrar en guerra de salarios. Aceptar la rotacion como parte del negocio. Contactar al SENA para traer egresados frescos que ganen menos y tengan hambre de aprender. "La gente va y viene, los procesos se quedan".',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: -2, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Personal nuevo inexperto: curva de aprendizaje de 2-3 semanas', bsc: { bsc_internal: -3, bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['rotacion-natural', 'sena', 'renovacion'],
          next: 'hr_11',
          narrative: 'Se van 8 en total. El SENA envia 10 egresados jovenes y motivados, pero verdes: uno confunde sal con azucar en su primer dia. La curva de aprendizaje es dolorosa. Sin embargo, en 3 semanas el equipo nuevo supera las expectativas — vienen sin vicios laborales.'
        }
      ]
    },

    // --- DIA 32: Aprendices SENA y practicantes ---
    'hr_11': {
      day: 32,
      title: 'Aprendices SENA y practicantes universitarios',
      context: 'El SENA exige a las empresas con mas de 15 empleados vincular aprendices (Ley 789 de 2002). La cuota regulada es 1 aprendiz por cada 20 trabajadores — con 45 empleados, deben tener al menos 2 aprendices. El apoyo de sostenimiento es el 75% del SMLMV en etapa practica ($1.067.625). Ademas, la UTP ofrece practicantes de Administracion de Empresas que necesitan 6 meses de practica para graduarse — no tienen costo salarial pero hay que darles un auxilio de transporte.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Cumplir cuota minima SENA (2 aprendices)',
          description: 'Vincular exactamente 2 aprendices del SENA de Gastronomia. Asignarles a la cocina con un tutor. Pagar el apoyo de sostenimiento legal. Minimo esfuerzo, minimo costo, cumplimiento basico de la ley.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [],
          tags: ['sena', 'cuota-minima', 'cumplimiento'],
          next: 'hr_12',
          narrative: 'Los 2 aprendices llegan con toda la teoria pero cero practica. Uno no sabe encender una freidora industrial. El tutor asignado se queja: "Me toca hacer mi trabajo y ensernarles a ellos". Pero en 3 semanas ya son productivos y agradecidos.'
        },
        {
          id: 'B',
          label: 'Programa robusto: 4 aprendices SENA + 2 practicantes UTP',
          description: 'Superar la cuota con 4 aprendices SENA (2 cocina, 2 servicio) y 2 practicantes de Administracion de la UTP para el area administrativa. Los practicantes analizan datos, mejoran procesos y presentan propuestas. Mas costo pero genera cantera de talento.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Practicantes de UTP analizan tiempos y movimientos: propuestas de mejora', bsc: { bsc_internal: 3, bsc_learning: 3 }, cost: 0 },
            { area: 'finance', message: 'Practicante de UTP automatiza reportes financieros en Excel avanzado', bsc: { bsc_financial: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['sena', 'utp', 'cantera', 'formacion'],
          next: 'hr_12',
          narrative: 'Los practicantes de la UTP son un descubrimiento: uno crea un dashboard de ventas en Power BI que el gerente usa todos los dias. Otro propone un rediseno del flujo de pedidos basado en teoria de colas — pura administracion de operaciones aplicada.'
        },
        {
          id: 'C',
          label: 'Monetizar la cuota SENA (pagar al SENA en vez de vincular)',
          description: 'La ley permite pagar al SENA el 5% de la nomina en vez de vincular aprendices. Cuesta mas dinero pero evita la carga de supervision y formacion. Totalmente legal, algunas empresas lo prefieren.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 0, bsc_internal: 1, bsc_learning: -3 },
          crossEffects: [
            { area: 'finance', message: 'Pago al SENA mensual recurrente: $2.1M adicionales de nomina', bsc: { bsc_financial: -2 }, cost: -2100000 }
          ],
          tags: ['monetizacion', 'sena', 'sin-aprendices'],
          next: 'hr_12',
          narrative: 'El contador hace la transferencia al SENA cada mes. No hay aprendices, no hay supervision, no hay dolores de cabeza. Pero tampoco hay cantera de talento ni frescura de ideas. Cuando se necesite gente nueva, toca empezar de cero.'
        }
      ]
    },

    // ============================================================
    //  FASE 5 - RELACIONES LABORALES Y CONFLICTOS (Dias 35-41)
    // ============================================================

    // --- DIA 35: Negociacion con sindicato ---
    'hr_12': {
      day: 35,
      title: 'Negociacion con representantes sindicales',
      context: 'SINALTRAINAL (Sindicato Nacional de la Industria de la Alimentacion) se acerca a los empleados. 12 de los 45 ya firmaron afiliacion. Presentan un pliego de peticiones con 5 puntos: 1) Aumento salarial del 10% (por encima del IPC), 2) Reduccion de jornada a 44 horas/semana, 3) Auxilio de transporte extralegal de $200.000, 4) Estabilidad laboral reforzada para afiliados, 5) Hora sindical pagada semanal. Segun el Codigo Sustantivo del Trabajo, si el sindicato agrupa mas de 1/3 de los empleados (16+), cualquier acuerdo aplica a todos.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Negociacion directa y parcial: aceptar 2 de 5 puntos',
          description: 'Aceptar el auxilio de transporte ($200.000) y la hora sindical pagada, pero rechazar el aumento del 10%, la reduccion de jornada y la estabilidad reforzada. Negociar un aumento del 5% (igual al IPC). Posicion firme pero dialogante.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'finance', message: 'Auxilio extralegal + aumento 5%: $4.5M adicionales/mes', bsc: { bsc_financial: -2 }, cost: -4500000 },
            { area: 'operations', message: 'Hora sindical semanal: 12 empleados una hora menos productivos', bsc: { bsc_internal: -1 }, cost: 0 }
          ],
          tags: ['negociacion', 'parcial', 'equilibrado'],
          next: 'hr_13',
          narrative: 'La negociacion toma 3 reuniones tensas. El delegado sindical acepta: "No es todo lo que pedimos, pero es un avance". Los empleados no afiliados tambien reciben el auxilio de transporte para evitar discriminacion. El ambiente se estabiliza.'
        },
        {
          id: 'B',
          label: 'Pacto colectivo alternativo para no sindicalizados',
          description: 'Ofrecer un pacto colectivo a los 33 no sindicalizados con mejores beneficios que el pliego sindical: aumento del 7%, bonificacion semestral, y dias libres adicionales. Legal pero controversial — el sindicato lo vera como sabotaje.',
          cost: 6000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 0, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Doble costo: beneficios sindicales + pacto colectivo', bsc: { bsc_financial: -3 }, cost: -3000000 }
          ],
          tags: ['pacto-colectivo', 'anti-sindical', 'riesgo-legal'],
          next: 'hr_13',
          narrative: 'El sindicato denuncia ante el Ministerio del Trabajo: "Es union busting, estan comprando a los no afiliados". Un inspector laboral visita la empresa. Si bien el pacto es legal, la imagen ante los empleados queda manchada. Tres sindicalizados mas se afilian "por solidaridad".'
        },
        {
          id: 'C',
          label: 'Aceptar el pliego completo para mantener la paz laboral',
          description: 'Ceder en los 5 puntos. Aumento del 10%, jornada de 44 horas, auxilio de transporte, estabilidad reforzada y hora sindical. Paz total con el sindicato pero el impacto financiero es severo y la operacion pierde flexibilidad.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -5, bsc_customer: 1, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Pliego completo: $18M adicionales/mes en costos laborales', bsc: { bsc_financial: -5 }, cost: -8000000 },
            { area: 'operations', message: 'Jornada reducida a 44h: necesario contratar mas personal para cubrir turnos', bsc: { bsc_internal: -3 }, cost: -3000000 }
          ],
          tags: ['cesion-total', 'paz-laboral', 'costoso'],
          next: 'hr_13',
          narrative: 'El sindicato celebra con bombo y platillo. Los empleados estan felices. El gerente financiero, en cambio, no duerme: "Acabamos de agregarle $216M/ano en costos laborales a la empresa". La jornada de 44 horas obliga a contratar 4 personas mas.'
        },
        {
          id: 'D',
          label: 'Abrir mesa de dialogo con mediador del Ministerio',
          description: 'Solicitar al Ministerio del Trabajo de Risaralda un mediador oficial para facilitar la negociacion. Es gratis, imparcial y le da legitimidad al proceso. Toma mas tiempo (4-6 semanas) pero el resultado es mas sostenible.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [],
          tags: ['mediacion', 'ministerio', 'proceso-formal'],
          next: 'hr_13',
          narrative: 'El mediador del Ministerio llega con experiencia en conflictos del sector alimentos. "He mediado con Nestle, con Bimbo, con Zenú — esto se resuelve con datos, no con emociones". Las sesiones son productivas. Se logra un acuerdo intermedio que ambas partes firman con voluntad.'
        }
      ]
    },

    // --- DIA 38: Despidos necesarios ---
    'hr_13': {
      day: 38,
      title: 'Reduccion de personal por optimizacion de costos',
      context: 'El area financiera reporta que los costos laborales representan el 42% de las ventas — en comida rapida, lo saludable es 28-32%. Hay que reducir. Un analisis de carga laboral muestra que con mejoras en procesos (estandarizacion de recetas, reorganizacion de estaciones) se puede operar con 38 personas en vez de 45. Pero despedir en Colombia no es simple: el Art. 64 del CST exige indemnizacion, hay personas con estabilidad laboral reforzada (embarazadas, afiliados sindicales, en situacion de discapacidad), y una mala gestion de los despidos puede destruir la moral del equipo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Plan de retiro voluntario con incentivos',
          description: 'Ofrecer a los 7 empleados con menor evaluacion de desempeno un paquete de retiro voluntario: indemnizacion del 120% de lo legal + carta de recomendacion + 3 meses de acceso a la bolsa de empleo de Comfamiliar. Los que acepten se van con dignidad. Los que no, se quedan.',
          cost: 8000000,
          revenue: 3000000,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Paquetes de retiro: $25M de gasto unico, pero ahorro de $7M/mes en nomina', bsc: { bsc_financial: 2 }, cost: 3000000 },
            { area: 'operations', message: 'Personal reducido pero mas eficiente: procesos optimizados', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['retiro-voluntario', 'digno', 'costoso-corto-plazo'],
          next: 'hr_14',
          narrative: '5 de los 7 aceptan el paquete — algunos ya estaban buscando trabajo. Los 2 que se quedan se comprometen a mejorar. El equipo valora que no hubo despidos frios: "Aqui al menos te tratan como persona". La moral se mantiene.'
        },
        {
          id: 'B',
          label: 'Despido con justa causa documentada',
          description: 'Usar las evaluaciones de desempeno para documentar bajo rendimiento en 5 empleados. Seguir el debido proceso: 2 llamados de atencion escritos, descargos, y terminacion con justa causa (sin indemnizacion). Mas barato pero hay riesgo de demandas ante juez laboral.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: -1, bsc_internal: 1, bsc_learning: -1 },
          crossEffects: [
            { area: 'finance', message: 'Riesgo legal: si un despido se declara sin justa causa, indemnizacion doble', bsc: { bsc_financial: -2 }, cost: -2000000 }
          ],
          tags: ['justa-causa', 'riesgo-legal', 'ahorro'],
          next: 'hr_14',
          narrative: 'El proceso toma 3 semanas por empleado. Uno demanda ante el juez laboral de Pereira alegando persecucion. El abogado dice: "Tenemos la documentacion, pero el juez puede fallar en contra". El ambiente laboral se enrarece: todos cuidan sus espaldas.'
        },
        {
          id: 'C',
          label: 'No despedir: reducir costos por otras vias',
          description: 'En vez de despedir, reducir costos con: jornadas de medio tiempo para 10 empleados (con su consentimiento), eliminacion de horas extra, renegociacion de contratos con proveedores. Nadie pierde su empleo pero los ingresos de algunos bajan.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Jornadas de medio tiempo: personal disponible en horas pico', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'logistics', message: 'Renegociacion con proveedores: descuento del 8% en insumos', bsc: { bsc_financial: 3 }, cost: 2000000 }
          ],
          tags: ['sin-despidos', 'medio-tiempo', 'creativo'],
          next: 'hr_14',
          narrative: '10 empleados aceptan medio tiempo — algunos son estudiantes que prefieren la flexibilidad. Se negocia con Pollos Bucanero un descuento por volumen. Los costos bajan al 35% de las ventas. No es el 28% ideal, pero nadie perdio su empleo.'
        },
        {
          id: 'D',
          label: 'Automatizar y reentrenar (sustitucion tecnologica)',
          description: 'Invertir en kioscos de autoservicio para pedidos ($15M por 3 kioscos) y reducir 4 cajeros. Los cajeros afectados se reentrenan como cocineros o personal de servicio. La tecnologia reemplaza el puesto, no a la persona.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Kioscos de autoservicio: cero errores en pedidos, 30% mas rapido', bsc: { bsc_internal: 5, bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Inversion en kioscos: $15M, pero ahorro de $4M/mes en nomina de cajeros', bsc: { bsc_financial: 1 }, cost: -5000000 },
            { area: 'marketing', message: 'Kioscos de autoservicio proyectan imagen moderna e innovadora', bsc: { bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['automatizacion', 'kioscos', 'reentrenamiento'],
          next: 'hr_14',
          narrative: 'Los kioscos llegan de Bogota y se instalan un sabado. El lunes, los clientes jovenes los adoran: "¡Por fin, como en McDonald\'s!". Los adultos mayores necesitan ayuda. Los 4 cajeros reentrenados estan nerviosos en la cocina pero en 2 semanas ya se adaptan.'
        }
      ]
    },

    // --- DIA 41: Plan de sucesion ---
    'hr_14': {
      day: 41,
      title: 'Plan de sucesion y desarrollo de lideres',
      context: 'Se acercan 6 semanas de operacion y los resultados dependen demasiado de 3 personas: el gerente de operaciones, el chef ejecutivo y la coordinadora de servicio. Si alguno se enferma, se va de vacaciones o renuncia, la operacion se frena. En administracion de operaciones, la redundancia en posiciones criticas es tan importante como la redundancia en equipos. Se necesita un plan de sucesion para garantizar continuidad.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Programa de sombra (shadow) para posiciones criticas',
          description: 'Asignar un "sombra" a cada posicion critica: alguien que acompane al titular durante 4 semanas, aprenda todo y pueda reemplazarlo temporalmente. Costo: horas de doble cobertura + materiales de formacion. No es un ascenso, es preparacion.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Redundancia en posiciones criticas: operacion resiliente', bsc: { bsc_internal: 4 }, cost: 0 }
          ],
          tags: ['sucesion', 'sombra', 'redundancia'],
          next: 'hr_15',
          narrative: 'Tres empleados con potencial empiezan como sombras. La experiencia es transformadora: "Yo no sabia todo lo que hace el chef, ahora lo respeto mas", dice uno. Cuando el gerente de operaciones se enferma un jueves, su sombra maneja el turno sin problemas.'
        },
        {
          id: 'B',
          label: 'Matriz de talento 9-box y plan de desarrollo individual',
          description: 'Evaluar a todos los empleados en una matriz de 9 cuadros (desempeno vs potencial). Los del cuadrante superior derecho (alto desempeno + alto potencial) entran al programa de desarrollo acelerado con mentoria directa del gerente general.',
          cost: 2500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Empleados de alto potencial identificados para roles de liderazgo futuro', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['9-box', 'talento', 'desarrollo'],
          next: 'hr_15',
          narrative: 'La matriz revela 5 empleados en el cuadrante estrella. Sorpresa: un mesero de 22 anos tiene el mayor potencial segun la evaluacion. "Nunca pense que me vieran como lider", dice emocionado. El programa de mentoria arranca con reunion semanal de 1 hora con el gerente general.'
        },
        {
          id: 'C',
          label: 'Cross-training obligatorio: todos aprenden todos los puestos',
          description: 'Rotar a todos los empleados por todas las estaciones durante 2 semanas. Cada persona debe certificarse en al menos 3 funciones diferentes. Filosofia Toyota: polivalencia total. Costoso en tiempo y productividad a corto plazo pero crea un equipo a prueba de fallos.',
          cost: 4500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: -1, bsc_internal: 5, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Empleados polivalentes: cualquiera cubre cualquier puesto en emergencia', bsc: { bsc_internal: 5, bsc_learning: 4 }, cost: 0 },
            { area: 'logistics', message: 'Personal de cocina entiende logistica: mejores pedidos de insumos', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['cross-training', 'polivalencia', 'toyota'],
          next: 'hr_15',
          narrative: 'Las 2 semanas de rotacion son caoticas: un cocinero hace de cajero y cobra mal 3 pedidos. Una cajera en cocina quema las papas. Pero al final, todos entienden el negocio completo. "Ahora se por que la cocina se estresa cuando yo pido cosas raras desde caja", dice una cajera.'
        }
      ]
    },

    // ============================================================
    //  FASE 6 - DECISION FINAL (Dia 44)
    // ============================================================

    // --- DIA 44: Clima organizacional y legado ---
    'hr_15': {
      day: 44,
      title: 'Clima organizacional: la decision final',
      context: 'Han pasado 6 semanas y llega la encuesta de clima organizacional con resultados mixtos. El ENPS (Employee Net Promoter Score) es de +22 (bueno pero no excelente). Los puntos fuertes: companerismo (4.5/5), orgullo de marca (4.2/5), beneficios (4.0/5). Los puntos debiles: comunicacion de la gerencia (3.1/5), oportunidades de crecimiento (3.3/5), equilibrio vida-trabajo (3.0/5). El gerente general pide una accion contundente para cerrar el primer ciclo con una senal clara sobre que tipo de empresa quieren ser.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Gran Pacto de Transparencia: comunicacion abierta total',
          description: 'Implementar reuniones semanales de toda la empresa (30 minutos antes de la apertura). El gerente comparte numeros reales: ventas, costos, utilidades, metas. Canal de WhatsApp directo con gerencia. Politica de puertas abiertas. Si la debilidad es comunicacion, atacarla de frente.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Equipo informado toma mejores decisiones operativas', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 },
            { area: 'marketing', message: 'Cultura de transparencia atrae talento y refuerza marca empleadora', bsc: { bsc_customer: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['transparencia', 'comunicacion', 'confianza'],
          next: null,
          narrative: 'La primera reunion abierta es electrica. El gerente muestra las ventas reales en pantalla: "Esto es lo que vendimos, esto es lo que nos cuesta, y esto es lo que queda". Un cocinero levanta la mano: "¿Y cuanto de eso es nuestra nomina?". La transparencia genera respeto — y responsabilidad. El ENPS sube a +38 en el siguiente mes. La cadena cierra su primer ciclo con un equipo informado, comprometido y con voz.'
        },
        {
          id: 'B',
          label: 'Programa de crecimiento interno: ascensos y plan carrera visible',
          description: 'Publicar un mapa de carrera visible: las rutas de crecimiento desde operario hasta gerente de punto, con requisitos claros (tiempo, certificaciones, evaluaciones). Anunciar 3 ascensos inmediatos de empleados que lo merecen. La senal: aqui si se puede crecer.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Ascensos internos motivan al equipo: productividad sube', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: '3 ascensos implican aumento salarial total de $1.8M/mes', bsc: { bsc_financial: -1 }, cost: -1800000 }
          ],
          tags: ['plan-carrera', 'ascensos', 'crecimiento'],
          next: null,
          narrative: 'El mapa de carrera se imprime en tamano poster y se pega en el vestier. "Yo estoy aqui — y puedo llegar alla", dice un mesero senalando la ruta de operario a jefe de turno. Los 3 ascendidos reciben su nueva escarapela en una ceremonia frente a todo el equipo. Hay aplausos, selfies y lagrimas. "En mi trabajo anterior, lleve 4 anos esperando un ascenso que nunca llego", dice la nueva jefa de turno. La cadena cierra el ciclo con un mensaje poderoso: aqui el esfuerzo se premia.'
        },
        {
          id: 'C',
          label: 'Semana de bienestar integral: cuerpo, mente y familia',
          description: 'Cerrar el ciclo con una semana especial: lunes yoga + mindfulness, martes visita de familiares al restaurante, miercoles chequeo medico gratuito con la EPS, jueves taller de finanzas personales, viernes integracion con almuerzo y reconocimientos. Atacar el punto debil de equilibrio vida-trabajo.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Familias comparten la experiencia en redes: marketing organico gratuito', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'operations', message: 'Semana de bienestar reduce productividad 15% por actividades', bsc: { bsc_internal: -2 }, cost: 0 }
          ],
          tags: ['bienestar', 'familia', 'equilibrio', 'cierre'],
          next: null,
          narrative: 'El martes de "puertas abiertas para familias" es el momento mas emotivo: una mama ve a su hijo de 19 anos manejando la caja con profesionalismo y se le salen las lagrimas. Los hijos de la coordinadora prueban la comida y dicen: "¡Mama, aqui cocinas tu!". Las fotos inundan Instagram y Facebook. Un medio local publica: "El restaurante que trata a sus empleados como familia". La cadena cierra el ciclo con una verdad simple: cuando cuidas a tu gente, tu gente cuida tu negocio.'
        },
        {
          id: 'D',
          label: 'Certificacion Great Place to Work',
          description: 'Iniciar el proceso de certificacion GPTW Colombia. Cuesta $8M pero posiciona a la empresa como referente. Incluye: encuesta oficial, diagnostico profesional, benchmarking con otras empresas del sector alimentos, y si se certifica, sello de calidad laboral que atrae talento.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Sello GPTW: diferenciador competitivo poderoso en Pereira', bsc: { bsc_customer: 4, bsc_learning: 3 }, cost: 0 },
            { area: 'finance', message: 'Certificacion GPTW: $8M de inversion, retorno en marca empleadora', bsc: { bsc_financial: -1 }, cost: -3000000 }
          ],
          tags: ['gptw', 'certificacion', 'marca-empleadora'],
          next: null,
          narrative: 'GPTW Colombia envia la encuesta oficial. Los resultados preliminares son prometedores: 78% de satisfaccion general, por encima del promedio del sector alimentos (65%). El consultor dice: "Con unos ajustes, pueden certificarse en 3 meses". La cadena cierra su primer ciclo con una apuesta ambiciosa: no solo ser un buen restaurante, sino un gran lugar para trabajar. Porque al final, un restaurante es tan bueno como las personas que lo hacen funcionar.'
        }
      ]
    }
  }
};
