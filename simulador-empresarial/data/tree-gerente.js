/* ============================================================
   TREE-GERENTE v2 - Arbol de decisiones de GERENCIA GENERAL
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto: $0 (usa fondos corporativos / total_cash)
   10 nodos de decision | Dias 1-25
   ROL ESPECIAL: Un estudiante por empresa. Decisiones
   estrategicas que afectan a TODAS las areas.
   ============================================================ */

window.TREE_GERENTE = {
  name: 'Gerencia General',
  icon: '👔',
  color: '#5856D6',
  startNode: 'ceo_01',
  nodes: {

    // ========================================================
    //  FASE 1 — FUNDAMENTOS ESTRATEGICOS (Dias 1-8)
    // ========================================================

    // --- DIA 1: Vision de la compania ---
    'ceo_01': {
      day: 1,
      title: 'Vision y estrategia competitiva',
      context: 'Hoy arranca tu cadena de comida rapida en Pereira. Como Gerente General, debes definir la estrategia que guiara a las 6 areas durante los proximos 25 dias.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Liderazgo en costos',
          description: 'Ser la opcion mas barata: menus desde $9.900 COP, operacion ultraeficiente.',
          feedback: 'Porter ensena que el lider en costos gana por volumen. En Pereira, donde el salario promedio es $1.4M COP, ser barato es ser relevante — pero los margenes delgados no perdonan errores.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 2, bsc_internal: 3, bsc_learning: -1 },
          crossEffects: [
            { area: 'operations', message: 'Directriz: maximizar eficiencia, costo unitario < $5.500 COP', bsc: { bsc_internal: 3, bsc_financial: 2 }, cost: 0 },
            { area: 'finance', message: 'Presupuestos austeros, cada peso debe justificar su ROI', bsc: { bsc_financial: 4 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento por precio: campanas de valor y ahorro', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'logistics', message: 'Compras por volumen, negociar costos minimos con proveedores', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'hr', message: 'Equipos lean y multifuncionales, bonos por ahorro', bsc: { bsc_learning: -2, bsc_internal: 2 }, cost: 0 },
            { area: 'innovation', message: 'Innovacion enfocada en reducir costos, no en productos premium', bsc: { bsc_learning: 1 }, cost: 0 }
          ],
          tags: ['liderazgo_costos', 'porter', 'volumen'],
          next: 'ceo_02',
          narrative: 'Tu cadena sera la mas barata de Pereira. Operaciones celebra; Finanzas advierte que los margenes seran como hoja de papel.'
        },
        {
          id: 'B',
          label: 'Diferenciacion premium',
          description: 'Ingredientes de primera del Eje Cafetero, recetas de autor. Menu promedio $22.000 COP.',
          feedback: 'La diferenciacion crea lealtad de marca y margenes altos, pero exige consistencia impecable. Un solo plato decepcionante destruye la percepcion premium que costó meses construir.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 6, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Calidad premium: ingredientes de primera, recetas gourmet estandarizadas', bsc: { bsc_internal: 2, bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Margen alto, menor volumen. Invertir en experiencia, no en precio', bsc: { bsc_financial: -1, bsc_customer: 2 }, cost: 0 },
            { area: 'marketing', message: 'Storytelling de ingredientes locales, imagen aspiracional', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'logistics', message: 'Proveedores premium: fincas del Eje Cafetero con trazabilidad', bsc: { bsc_customer: 3, bsc_financial: -2 }, cost: 0 },
            { area: 'hr', message: 'Cocineros con formacion en gastronomia regional, atencion excepcional', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'innovation', message: 'I+D en productos gourmet con identidad regional', bsc: { bsc_learning: 4, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['diferenciacion', 'premium', 'porter'],
          next: 'ceo_02',
          narrative: 'Tu cadena sera la experiencia gastronomica. Marketing imagina campanas con fotos de fincas cafeteras. El reto: ¿Pereira pagara $22.000 por una hamburguesa gourmet?'
        },
        {
          id: 'C',
          label: 'Enfoque en nicho saludable',
          description: 'Comida rapida fit para universitarios y oficinistas: bowls, wraps, jugos. Menu $16.000 COP.',
          feedback: 'El enfoque en nicho reduce la competencia directa pero limita el mercado. Si tu segmento no crece, la empresa tampoco — concentracion es poder y riesgo al mismo tiempo.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 1, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Cocina especializada: planchas y hornos, nada de freidoras', bsc: { bsc_internal: 1, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Nicho saludable: margen medio, demanda acotada pero estable', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Target: universitarios UTP/UCPR y oficinistas. Redes sociales', bsc: { bsc_customer: 4, bsc_learning: 2 }, cost: 0 },
            { area: 'logistics', message: 'Cadena de frio exigente: frutas y verduras frescas a diario', bsc: { bsc_internal: -2, bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'Equipo con conocimiento en nutricion y alimentos frescos', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Alianzas con nutricionistas locales para validar recetas', bsc: { bsc_learning: 5 }, cost: 0 }
          ],
          tags: ['enfoque', 'nicho', 'saludable'],
          next: 'ceo_02',
          narrative: 'Comida saludable en la capital cafetera: arriesgado, pero el 32% de universitarios pereiranos buscan opciones fit.'
        },
        {
          id: 'D',
          label: 'Estrategia hibrida (best-cost)',
          description: 'Buena calidad a precios accesibles: menu $14.000-$18.000 COP con ingredientes regionales.',
          feedback: 'La estrategia best-cost busca lo mejor de ambos mundos. Porter advierte del "stuck in the middle", pero Crepes & Waffles demostro que es posible — si la ejecucion es impecable.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Equilibrio calidad-costo: procesos eficientes sin sacrificar ingredientes', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 },
            { area: 'finance', message: 'Margenes intermedios, presupuestos balanceados', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento best-value: calidad que sorprende a precios justos', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'logistics', message: 'Proveedores locales con buena relacion calidad-precio', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'hr', message: 'Capacitacion balanceada entre eficiencia y calidad de servicio', bsc: { bsc_learning: 2 }, cost: 0 },
            { area: 'innovation', message: 'I+D flexible segun datos del mercado', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['hibrida', 'best_cost', 'equilibrio'],
          next: 'ceo_02',
          narrative: 'La apuesta del equilibrio. Necesitas eficiencia de lider en costos y percepcion de marca premium. Dificil, pero si funciona, seras imbatible.'
        }
      ]
    },

    // --- DIA 3: Estructura organizacional ---
    'ceo_02': {
      day: 3,
      title: 'Estructura organizacional',
      context: 'Tienes 6 areas y ~45 empleados. Mintzberg dice que la estructura sigue a la estrategia. ¿Como organizas la cadena de mando?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estructura plana',
          description: 'Solo 2 niveles: tu y los 6 jefes de area. Rapido pero riesgo de sobrecarga.',
          feedback: 'Las estructuras planas aceleran la comunicacion y reducen costos, pero generan cuellos de botella en la gerencia. Funciona en startups; se quiebra cuando la complejidad crece.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Menos cargos administrativos, mayor carga por jefe de area', bsc: { bsc_financial: 2, bsc_internal: -1 }, cost: 0 },
            { area: 'operations', message: 'Jefe de operaciones supervisa directamente a todos los cocineros', bsc: { bsc_internal: 2, bsc_learning: 1 }, cost: 0 },
            { area: 'innovation', message: 'Cualquier empleado propone ideas directo a su jefe', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['estructura_plana', 'agil'],
          next: 'ceo_03',
          narrative: 'Sin burocracia, todo fluye rapido. Pero al mes, los jefes tienen 40 mensajes diarios sin resolver.'
        },
        {
          id: 'B',
          label: 'Jerarquia clasica (4 niveles)',
          description: 'Gerente → Jefes → Coordinadores → Operarios. Control formal pero decisiones lentas.',
          feedback: 'La jerarquia clasica da orden y control, pero la informacion se filtra y pierde urgencia en cada nivel. Henry Fayol estaria orgulloso; tus clientes quizas no.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 5, bsc_learning: -1 },
          crossEffects: [
            { area: 'hr', message: 'Se requieren 6 coordinadores intermedios: nomina sube $8M/mes', bsc: { bsc_financial: -3, bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Mayor gasto fijo en nomina administrativa', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Coordinador de cocina libera al jefe para mejora continua', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['jerarquia', 'clasica', 'control'],
          next: 'ceo_03',
          narrative: 'Organigrama clasico, roles claros. Pero una queja del cliente tarda 3 dias en llegar a tu escritorio.'
        },
        {
          id: 'C',
          label: 'Estructura matricial',
          description: 'Doble reporte: area funcional + proyectos transversales. Maxima colaboracion, confusion posible.',
          feedback: 'La matriz potencia innovacion cruzando talento entre areas, pero crea conflictos de autoridad. Solo funciona si los lideres manejan bien la ambiguedad — pocas empresas lo logran.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 2, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Capacitacion en trabajo por proyectos y doble reporte', bsc: { bsc_learning: 4, bsc_internal: -2 }, cost: 0 },
            { area: 'innovation', message: 'Equipos multidisciplinarios por proyecto potencian la creatividad', bsc: { bsc_learning: 5, bsc_customer: 2 }, cost: 0 },
            { area: 'operations', message: 'Personal rota entre operacion diaria y proyectos especiales', bsc: { bsc_internal: -1, bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['matricial', 'proyectos', 'colaboracion'],
          next: 'ceo_03',
          narrative: 'La matriz genera ideas brillantes en las reuniones, pero nadie sabe quien aprueba el pedido de insumos del viernes.'
        }
      ]
    },

    // --- DIA 6: Asignacion de prioridades ---
    'ceo_03': {
      day: 6,
      title: 'Asignacion estrategica de recursos',
      context: 'La junta aprobo $40M COP para fortalecer 2 de las 6 areas. Cada area seleccionada recibe $20M extra. Las demas operan con presupuesto base.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Operaciones',
          description: 'Equipos de cocina de ultima generacion y mejora de procesos.',
          feedback: 'Invertir en operaciones mejora la capacidad productiva y reduce desperdicios. Es la columna vertebral — si la cocina falla, nada mas importa.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Inyeccion de $20M: equipos nuevos y capacidad ampliada', bsc: { bsc_internal: 5, bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['inversion', 'operaciones'],
          next: 'ceo_04',
          narrative: 'Operaciones recibe un impulso fuerte. Los nuevos equipos llegan la proxima semana.'
        },
        {
          id: 'B',
          label: 'Marketing',
          description: 'Campanas agresivas en redes y alianzas con influencers locales.',
          feedback: 'El marketing multiplica el alcance, pero sin producto solido detras, solo acelera la decepcion del cliente. Asegurate de que la cocina respalde lo que prometes.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 6, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Presupuesto extra de $20M: campanas de alto impacto', bsc: { bsc_customer: 6 }, cost: 0 }
          ],
          tags: ['inversion', 'marketing'],
          next: 'ceo_04',
          narrative: 'Marketing celebra: por fin tiene musculo para competir en redes sociales.'
        },
        {
          id: 'C',
          label: 'Finanzas',
          description: 'Software de control financiero y dashboards de rentabilidad en tiempo real.',
          feedback: 'Los datos financieros en tiempo real permiten decisiones informadas. Peter Drucker decia: "Lo que no se mide, no se gestiona." Pero medir sin actuar es solo reporteria.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: 6, bsc_customer: 0, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Dashboards en tiempo real: control total de costos y margenes', bsc: { bsc_financial: 6 }, cost: 0 }
          ],
          tags: ['inversion', 'finanzas'],
          next: 'ceo_04',
          narrative: 'Finanzas implementa dashboards. Ahora cada area ve su impacto en el P&L diario.'
        },
        {
          id: 'D',
          label: 'Logistica',
          description: 'Flota de frio, sistema de inventarios y alianzas con proveedores.',
          feedback: 'La logistica es invisible cuando funciona y catastrofica cuando falla. Invertir aqui reduce desperdicios y garantiza frescura — ventaja competitiva silenciosa pero letal.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Flota de frio nueva y software de inventarios automatizado', bsc: { bsc_internal: 5, bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['inversion', 'logistica'],
          next: 'ceo_04',
          narrative: 'Logistica estrena vehiculos refrigerados. Los proveedores del Eje Cafetero entregan con trazabilidad.'
        },
        {
          id: 'E',
          label: 'Talento Humano',
          description: 'Programa de formacion, bonos de retencion y clima laboral.',
          feedback: 'El talento es el unico activo que se va a casa cada noche. Invertir en la gente genera lealtad y reduce rotacion — el costo oculto mas caro de la comida rapida.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 2, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Programa de formacion integral y bonos de retencion activados', bsc: { bsc_learning: 6, bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['inversion', 'rrhh'],
          next: 'ceo_04',
          narrative: 'RRHH lanza programa de formacion. La moral del equipo sube visiblemente.'
        },
        {
          id: 'F',
          label: 'Innovacion',
          description: 'Laboratorio de nuevos productos y programa de intraemprendimiento.',
          feedback: 'La innovacion genera diferenciacion futura, pero sus resultados tardan. Es una apuesta a mediano plazo — si la empresa no sobrevive el corto plazo, no hay futuro que innovar.',
          cost: 20000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 7 },
          crossEffects: [
            { area: 'innovation', message: 'Laboratorio de I+D activo: 3 prototipos en desarrollo', bsc: { bsc_learning: 7, bsc_customer: 3 }, cost: 0 }
          ],
          tags: ['inversion', 'innovacion'],
          next: 'ceo_04',
          narrative: 'Innovacion abre su laboratorio. Los cocineros ya experimentan con recetas disruptivas.'
        }
      ]
    },

    // ========================================================
    //  FASE 2 — INTELIGENCIA Y CRISIS (Dias 9-16)
    // ========================================================

    // --- DIA 9: Inteligencia competitiva ---
    'ceo_04': {
      day: 9,
      title: 'Inteligencia competitiva',
      context: 'La cadena rival abrio su segundo punto en el centro de Pereira. Necesitas informacion para reaccionar. ¿Como la consigues?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Mystery shopper profesional',
          description: 'Contratar evaluadores que visiten al rival y reporten precios, calidad y servicio.',
          feedback: 'El mystery shopping da datos de primera mano sobre la experiencia del rival. Es etico y legal — la informacion publica es de todos. Sun Tzu: "Conoce a tu enemigo."',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Inteligencia del rival: precios, promociones y posicionamiento mapeados', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Benchmarking de tiempos de servicio y calidad del rival', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'innovation', message: 'Analisis de menu rival: oportunidades de diferenciacion identificadas', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['inteligencia', 'mystery_shopper', 'competencia'],
          next: 'ceo_05',
          narrative: 'Los reportes llegan: el rival tiene tiempos de servicio 20% mas rapidos pero calificaciones de sabor inferiores.'
        },
        {
          id: 'B',
          label: 'Analisis de redes sociales',
          description: 'Monitorear resenas, comentarios y menciones del rival en Google, Instagram y TikTok.',
          feedback: 'El social listening es barato y revela lo que los clientes realmente piensan — no lo que dicen en encuestas. Las quejas publicas son oro puro para tu estrategia.',
          cost: 500000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 4, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Mapa de sentimiento del rival: 68% positivo, quejas en tiempos de espera', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'hr', message: 'Resenas mencionan mal servicio del rival: oportunidad de diferenciarnos en atencion', bsc: { bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Datos de precios del rival recopilados: ajustar pricing strategy', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['social_listening', 'digital', 'competencia'],
          next: 'ceo_05',
          narrative: 'Las redes revelan que el rival tiene problemas con tiempos de espera. Tu oportunidad esta clara.'
        },
        {
          id: 'C',
          label: 'Encuesta directa a clientes',
          description: 'Preguntarle a tus propios clientes que opinan del rival y por que te eligieron a ti.',
          feedback: 'Escuchar a TUS clientes es mas valioso que espiar al rival. Ellos te dicen que haces bien y que mejorar — la voz del cliente es la brujula mas confiable del liderazgo.',
          cost: 800000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 5, bsc_internal: 2, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Insights de clientes: valoran sabor pero piden mas variedad', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'operations', message: 'Clientes piden reducir 3 minutos el tiempo de servicio', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 },
            { area: 'logistics', message: 'Feedback: los clientes quieren domicilios mas rapidos', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['encuesta', 'voz_cliente', 'insight'],
          next: 'ceo_05',
          narrative: 'Los resultados sorprenden: el 40% de tus clientes ya probo al rival pero regreso. La razon: tu sabor.'
        },
        {
          id: 'D',
          label: 'Ignorar al rival y enfocarse internamente',
          description: 'No gastar en espionaje: toda la energia a mejorar tus propios procesos y productos.',
          feedback: 'Enfocarse internamente es valido cuando tu ventaja es clara, pero la ceguera competitiva ha matado empresas. Kodak no vigilo a los smartphones y desaparecio.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: -1, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Foco total en mejora interna sin distracciones del rival', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'marketing', message: 'Sin datos del rival: posicionamiento basado solo en intuicion', bsc: { bsc_customer: -2 }, cost: 0 }
          ],
          tags: ['foco_interno', 'ignorar_rival'],
          next: 'ceo_05',
          narrative: 'Decides enfocarte en lo tuyo. Los equipos mejoran pero no sabes que planea el rival para la proxima semana.'
        }
      ]
    },

    // --- DIA 12: Protocolo de crisis ---
    'ceo_05': {
      day: 12,
      title: 'Protocolo ante crisis',
      context: 'Un cliente publico un video en TikTok mostrando un cabello en su plato. Tiene 15.000 vistas y subiendo. ¿Como reaccionas?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Respuesta publica inmediata',
          description: 'Comunicado en redes, disculpa directa al cliente, invitacion a volver con cortesia.',
          feedback: 'La transparencia en crisis genera confianza. Johnson & Johnson salvo su marca con Tylenol siendo radical en honestidad. El silencio siempre se interpreta como culpa.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Crisis management: comunicado publico, narrativa de transparencia', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'operations', message: 'Revision inmediata de protocolos de higiene en todas las estaciones', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'hr', message: 'Reentrenamiento obligatorio de BPM para todo el personal de cocina', bsc: { bsc_learning: 3, bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Cortesia al cliente y costos de reentrenamiento: $1.5M COP', bsc: { bsc_financial: -1 }, cost: 0 }
          ],
          tags: ['crisis', 'transparencia', 'reputacion'],
          next: 'ceo_06',
          narrative: 'Tu respuesta publica recibe 8.000 likes. Los comentarios pasan de "que asco" a "al menos respondieron rapido". La crisis se contiene.'
        },
        {
          id: 'B',
          label: 'Gestion privada y silenciosa',
          description: 'Contactar al cliente en privado, ofrecer compensacion generosa y corregir internamente.',
          feedback: 'La gestion privada puede funcionar si el cliente acepta, pero en la era de TikTok el video ya es publico. No responder publicamente deja la narrativa en manos de internet.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: 'Sin respuesta publica: la narrativa la controlan los comentaristas', bsc: { bsc_customer: -3 }, cost: 0 },
            { area: 'operations', message: 'Correccion interna sin alarma: cambios silenciosos en protocolos', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Compensacion generosa al cliente: $3M COP en cortesias y reembolso', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['crisis', 'privado', 'silencioso'],
          next: 'ceo_06',
          narrative: 'El cliente acepta la compensacion, pero el video sigue acumulando vistas. Otros usuarios preguntan: ¿y la empresa no dice nada?'
        }
      ]
    },

    // --- DIA 14: Decision de expansion ---
    'ceo_06': {
      day: 14,
      title: 'Expansion: segundo punto de venta',
      context: 'Las ventas del primer local superan proyecciones en 20%. Hay oportunidad de abrir un segundo punto. ¿Donde y como?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Centro comercial Victoria',
          description: 'Alto trafico pero arriendo de $12M/mes y competencia directa en el food court.',
          feedback: 'Los centros comerciales garantizan flujo de personas pero los costos fijos son implacables. Si un mes las ventas caen, el arriendo no perdona — apalancamiento operativo puro.',
          cost: 25000000,
          revenue: 8000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: -2, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'Segundo punto en CC Victoria: duplicar equipos y estandarizar recetas', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'logistics', message: 'Ruta de abastecimiento adicional al centro de la ciudad', bsc: { bsc_internal: -1, bsc_financial: -1 }, cost: 0 },
            { area: 'hr', message: 'Contratar 12 personas para el nuevo punto: urgente', bsc: { bsc_learning: -1, bsc_financial: -2 }, cost: 0 },
            { area: 'finance', message: 'Arriendo CC Victoria: $12M/mes fijo. Punto de equilibrio alto', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'marketing', message: 'Visibilidad premium en el centro comercial mas visitado de Pereira', bsc: { bsc_customer: 5 }, cost: 0 }
          ],
          tags: ['expansion', 'centro_comercial', 'alto_trafico'],
          next: 'ceo_07',
          narrative: 'El espacio en Victoria esta asegurado. El food court tiene 8 marcas — seras la novena. Todo depende de que tu marca se destaque.'
        },
        {
          id: 'B',
          label: 'Local en la Circunvalar',
          description: 'Zona universitaria, arriendo $5M/mes, menos trafico pero publico joven y fiel.',
          feedback: 'Ubicarse cerca de universidades crea clientes habituales con horarios predecibles. El LTV (lifetime value) de un universitario fiel supera al comprador ocasional del mall.',
          cost: 12000000,
          revenue: 5000000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Punto Circunvalar: cocina mas pequena, operacion simplificada', bsc: { bsc_internal: 2, bsc_financial: 1 }, cost: 0 },
            { area: 'logistics', message: 'Ruta corta desde bodega: menor costo de transporte', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'hr', message: 'Contratar 8 personas, perfil joven, media jornada compatible con estudios', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Activaciones directas en UTP y UCPR: sampling y descuentos estudiantiles', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['expansion', 'universitario', 'circunvalar'],
          next: 'ceo_07',
          narrative: 'El local queda a 3 cuadras de la UTP. Los estudiantes empiezan a reconocer la marca desde el primer dia.'
        },
        {
          id: 'C',
          label: 'Dark kitchen (solo domicilios)',
          description: 'Cocina oculta en zona industrial, sin local fisico. Arriendo $2.5M/mes, solo delivery.',
          feedback: 'Las dark kitchens minimizan costos fijos y prueban demanda sin riesgo de ubicacion. La pandemia demostro su poder, pero sin vitrina fisica, tu marca depende 100% del mundo digital.',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: 5, bsc_customer: 1, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Dark kitchen: produccion enfocada sin atencion presencial', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'logistics', message: 'Integrar con Rappi y plataformas: comisiones del 25% por pedido', bsc: { bsc_financial: -2, bsc_customer: 2 }, cost: 0 },
            { area: 'marketing', message: 'Marca 100% digital en el segundo punto: SEO y ads geolocalizados', bsc: { bsc_customer: 2, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Testear productos nuevos en delivery antes de llevarlos al local fisico', bsc: { bsc_learning: 5 }, cost: 0 }
          ],
          tags: ['expansion', 'dark_kitchen', 'delivery'],
          next: 'ceo_07',
          narrative: 'La dark kitchen arranca sin prensa ni inauguracion. En 48 horas ya hay 25 pedidos diarios por Rappi.'
        },
        {
          id: 'D',
          label: 'Posponer y consolidar',
          description: 'No expandir aun: invertir en perfeccionar el primer punto antes de crecer.',
          feedback: 'La disciplina de NO expandir prematuramente es una de las decisiones mas dificiles. Muchas empresas mueren por crecer demasiado rapido, no demasiado lento.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: 1, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Foco total en perfeccionar procesos del primer punto', bsc: { bsc_internal: 5, bsc_financial: 2 }, cost: 0 },
            { area: 'finance', message: 'Cero riesgo de expansion: flujo de caja protegido', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['consolidar', 'prudencia', 'no_expandir'],
          next: 'ceo_07',
          narrative: 'Decides no expandir. Tu equipo respira aliviado. El primer punto mejora cada dia, pero el rival ya tiene dos.'
        }
      ]
    },

    // ========================================================
    //  FASE 3 — ALIANZAS Y CULTURA (Dias 17-22)
    // ========================================================

    // --- DIA 17: Alianza estrategica ---
    'ceo_07': {
      day: 17,
      title: 'Alianza estrategica',
      context: 'Tres actores locales quieren aliarse contigo. Solo puedes comprometerte con uno para no dispersar recursos. ¿Con quien?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Alianza con finca cafetera (turismo)',
          description: 'Combo cafe + comida con Finca El Roble. Tu marca en la ruta del cafe.',
          feedback: 'Las alianzas con turismo amplifican la marca ante publicos nuevos sin costo de adquisicion. El Eje Cafetero recibe 800.000 turistas/ano — es publicidad que camina sola.',
          cost: 3000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 5, bsc_internal: 0, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Co-branding con Finca El Roble: presencia en ruta del cafe', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'logistics', message: 'Cafe de origen directo a precio preferencial', bsc: { bsc_financial: 2, bsc_customer: 1 }, cost: 0 },
            { area: 'innovation', message: 'Productos exclusivos con cafe de origen para el menu', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['alianza', 'cafe', 'turismo'],
          next: 'ceo_08',
          narrative: 'La alianza con Finca El Roble pone tu logo en cada recorrido turistico. Los turistas llegan preguntando por "la cadena de la finca".'
        },
        {
          id: 'B',
          label: 'Alianza con universidad (UTP)',
          description: 'Convenio de practicas, descuentos estudiantiles y presencia en campus.',
          feedback: 'Las alianzas academicas dan acceso a talento joven y crean habito de consumo temprano. Un estudiante fiel hoy puede ser un ejecutivo que almuerce contigo manana.',
          cost: 1500000,
          revenue: 3000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Practicantes de la UTP en operaciones y marketing: talento fresco', bsc: { bsc_learning: 5, bsc_financial: 1 }, cost: 0 },
            { area: 'marketing', message: 'Presencia en campus UTP: stand permanente y descuentos con carnet', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'innovation', message: 'Semillero de innovacion: estudiantes proponen mejoras reales', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['alianza', 'universidad', 'talento'],
          next: 'ceo_08',
          narrative: 'El convenio con la UTP activa 6 practicantes y descuentos con carnet. La fila a la hora del almuerzo se triplica.'
        },
        {
          id: 'C',
          label: 'Alianza con app de delivery',
          description: 'Exclusividad 3 meses con Rappi a cambio de comision reducida (18% en vez de 25%).',
          feedback: 'Las plataformas de delivery son canal y competidor al mismo tiempo. La exclusividad da mejores condiciones hoy, pero te ata a un solo canal — cuidado con la dependencia.',
          cost: 0,
          revenue: 6000000,
          bsc: { bsc_financial: 4, bsc_customer: 3, bsc_internal: 1, bsc_learning: 1 },
          crossEffects: [
            { area: 'logistics', message: 'Exclusividad Rappi: comision del 18%, posicion destacada en app', bsc: { bsc_financial: 3, bsc_customer: 3 }, cost: 0 },
            { area: 'marketing', message: 'Banner destacado en Rappi Pereira durante 3 meses', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Ajustar empaque y tiempos para pedidos delivery', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['alianza', 'delivery', 'rappi'],
          next: 'ceo_08',
          narrative: 'Rappi te da el mejor espacio en la app. Los pedidos de delivery suben 60% en la primera semana.'
        }
      ]
    },

    // --- DIA 19: Iniciativa cultural ---
    'ceo_08': {
      day: 19,
      title: 'Cultura organizacional',
      context: 'La encuesta de clima arroja 65% de satisfaccion (bajo). Puedes implementar hasta 2 iniciativas culturales para mejorar el ambiente.',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Programa de reconocimiento semanal',
          description: 'Empleado destacado cada semana con bono de $100.000 COP y mencion publica.',
          feedback: 'El reconocimiento frecuente activa la motivacion intrinseca. Herzberg demostro que el reconocimiento es factor motivador, no el salario — la plata retiene, el aplauso inspira.',
          cost: 1500000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'Programa de reconocimiento activo: moral del equipo en aumento', bsc: { bsc_learning: 4, bsc_internal: 2 }, cost: 0 },
            { area: 'operations', message: 'Cocineros compiten sanamente por el reconocimiento: calidad sube', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['cultura', 'reconocimiento', 'motivacion'],
          next: 'ceo_09',
          narrative: 'El primer empleado destacado recibe su bono frente a todos. Los aplausos son genuinos. La energia cambia.'
        },
        {
          id: 'B',
          label: 'Horarios flexibles y bienestar',
          description: 'Turnos rotativos con preferencia, dia libre por cumpleanos y fruta diaria.',
          feedback: 'La flexibilidad laboral reduce rotacion y ausentismo. En comida rapida, donde la rotacion supera el 100% anual, retener gente buena es la ventaja mas subestimada.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Horarios flexibles implementados: rotacion proyectada baja 30%', bsc: { bsc_learning: 5, bsc_financial: 1 }, cost: 0 },
            { area: 'operations', message: 'Turnos rotativos requieren mejor planificacion pero mejoran asistencia', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['cultura', 'flexibilidad', 'bienestar'],
          next: 'ceo_09',
          narrative: 'Los empleados eligen sus turnos preferidos. El ausentismo cae a la mitad en la primera semana.'
        },
        {
          id: 'C',
          label: 'Comite de innovacion participativo',
          description: 'Reunion mensual donde cualquier empleado propone ideas. Las mejores se implementan.',
          feedback: 'Dar voz a los empleados genera sentido de pertenencia y captura ideas que la gerencia nunca veria. Toyota construyo su imperio con el kaizen: mejora continua desde la base.',
          cost: 500000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 2, bsc_internal: 2, bsc_learning: 6 },
          crossEffects: [
            { area: 'innovation', message: 'Comite participativo: 3 ideas viables propuestas por operarios', bsc: { bsc_learning: 6, bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'Sentido de pertenencia aumenta: los empleados se sienten escuchados', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['cultura', 'innovacion', 'participacion'],
          next: 'ceo_09',
          narrative: 'En la primera reunion, un mesero propone cambiar el orden de la linea de servicio. Ahorra 45 segundos por pedido.'
        },
        {
          id: 'D',
          label: 'Capacitacion en liderazgo para jefes',
          description: 'Taller de 8 horas para los 6 jefes de area con coach profesional.',
          feedback: 'Los jefes intermedios son el punto de contacto con el 80% del equipo. Si ellos lideran mal, ninguna iniciativa de gerencia funciona. Invertir en mandos medios multiplica impacto.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Jefes de area con nuevas herramientas de liderazgo situacional', bsc: { bsc_learning: 5, bsc_internal: 3 }, cost: 0 },
            { area: 'operations', message: 'Jefe de operaciones mejora manejo de conflictos en cocina', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Jefe de finanzas comunica mejor los numeros al equipo: todos entienden costos', bsc: { bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['cultura', 'liderazgo', 'capacitacion'],
          next: 'ceo_09',
          narrative: 'Despues del taller, el jefe de operaciones deja de gritar y empieza a preguntar. La cocina mejora sin presion.'
        }
      ]
    },

    // ========================================================
    //  FASE 4 — DECISIONES FINALES (Dias 23-25)
    // ========================================================

    // --- DIA 22: Reasignacion de emergencia ---
    'ceo_09': {
      day: 22,
      title: 'Reasignacion de emergencia',
      context: 'Logistica reporta que un proveedor clave quebro. Necesitas $15M COP urgentes para asegurar insumos alternativos. ¿De donde los sacas?',
      type: 'binary',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Recortar marketing y eventos',
          description: 'Pausar toda publicidad paga y eventos por 2 semanas para liberar los $15M.',
          feedback: 'Recortar marketing en crisis protege la operacion pero te hace invisible justo cuando el rival puede atacar. Es como apagar la luz para ahorrar energia en medio de una tormenta.',
          cost: 0,
          revenue: -5000000,
          bsc: { bsc_financial: 3, bsc_customer: -3, bsc_internal: 2, bsc_learning: 0 },
          crossEffects: [
            { area: 'marketing', message: 'ALERTA: presupuesto de marketing congelado 2 semanas por emergencia', bsc: { bsc_customer: -4 }, cost: 0 },
            { area: 'logistics', message: 'Fondos asegurados: negociando con proveedor alternativo de Manizales', bsc: { bsc_internal: 3, bsc_financial: 1 }, cost: 0 },
            { area: 'operations', message: 'Insumos garantizados: produccion no se detiene', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Reasignacion aprobada: $15M de marketing a logistica', bsc: { bsc_financial: 2 }, cost: 0 }
          ],
          tags: ['emergencia', 'reasignacion', 'marketing'],
          next: 'ceo_10',
          narrative: 'Marketing pierde su presupuesto pero la cocina no para. El rival lanza una promo agresiva justo esa semana.'
        },
        {
          id: 'B',
          label: 'Credito de emergencia bancario',
          description: 'Prestamo rapido a 6 meses con Bancolombia al 2.1% mensual. $15M ahora, pagas $17.2M despues.',
          feedback: 'El credito protege todas las areas pero crea deuda. El costo del dinero es real: $2.2M en intereses no es gratis. A veces endeudarse es sabio; otras veces es adictivo.',
          cost: 2200000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Credito aprobado: $15M disponibles, cuota mensual de $2.87M por 6 meses', bsc: { bsc_financial: -3 }, cost: 0 },
            { area: 'logistics', message: 'Fondos del credito aseguran proveedor alternativo sin recortar areas', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Presupuesto de marketing intacto: campanas continuan sin pausa', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'operations', message: 'Produccion garantizada con insumos del nuevo proveedor', bsc: { bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['emergencia', 'credito', 'deuda'],
          next: 'ceo_10',
          narrative: 'Bancolombia aprueba el credito en 48 horas. Todas las areas siguen operando pero la cuota mensual pesa.'
        }
      ]
    },

    // --- DIA 25: Decision de legado ---
    'ceo_10': {
      day: 25,
      title: 'Legado: el futuro de la cadena',
      context: 'Ultimo dia como gerente. Debes dejar una directriz estrategica que guiara a la empresa los proximos 6 meses. ¿Cual es tu vision de cierre?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Escalar agresivamente',
          description: 'Meta: 5 puntos de venta en Pereira y expansion al Eje Cafetero en 6 meses.',
          feedback: 'El crecimiento agresivo captura mercado antes que el rival, pero multiplica la complejidad operativa. Jeff Bezos priorizo crecimiento sobre utilidades y creo Amazon — pero miles de startups murieron intentando lo mismo.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: -2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Directriz final: preparar procesos para escalar a 5 puntos', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Plan de expansion aprobado: buscar inversionistas o credito a largo plazo', bsc: { bsc_financial: -2, bsc_learning: 2 }, cost: 0 },
            { area: 'hr', message: 'Triplicar la planta de personal en 6 meses: reclutamiento masivo', bsc: { bsc_learning: -1, bsc_internal: -2 }, cost: 0 },
            { area: 'logistics', message: 'Centro de distribucion necesario para abastecer 5 puntos', bsc: { bsc_internal: -3, bsc_financial: -1 }, cost: 0 },
            { area: 'marketing', message: 'Campana de posicionamiento regional: Pereira, Manizales, Armenia', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'innovation', message: 'Adaptar menu a gustos de cada ciudad del Eje Cafetero', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['legado', 'escalar', 'crecimiento'],
          next: null,
          narrative: 'Tu legado es la ambicion. El equipo sabe que los proximos 6 meses seran intensos, pero si funciona, la cadena sera regional.'
        },
        {
          id: 'B',
          label: 'Rentabilidad y solidez',
          description: 'Meta: ser el restaurante mas rentable de Pereira. Cero deuda, margen neto del 15%.',
          feedback: 'La rentabilidad sostenible construye empresas que sobreviven decadas. Warren Buffett invierte en negocios rentables, no en los que crecen mas rapido. La disciplina financiera no es glamorosa pero es inmortal.',
          cost: 0,
          revenue: 3000000,
          bsc: { bsc_financial: 6, bsc_customer: 1, bsc_internal: 4, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'Directriz final: margen neto del 15%, cero deuda nueva', bsc: { bsc_financial: 6 }, cost: 0 },
            { area: 'operations', message: 'Optimizar cada proceso para eliminar desperdicios: lean manufacturing', bsc: { bsc_internal: 5, bsc_financial: 3 }, cost: 0 },
            { area: 'logistics', message: 'Renegociar contratos con proveedores: mejores condiciones de pago', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'hr', message: 'Equipo estable: retener a los mejores, no crecer en headcount', bsc: { bsc_learning: 2, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['legado', 'rentabilidad', 'solidez'],
          next: null,
          narrative: 'Tu legado es la disciplina. Cada peso cuenta, cada proceso se optimiza. La empresa quizas no sera la mas grande, pero sera la mas solida.'
        },
        {
          id: 'C',
          label: 'Innovacion y diferenciacion radical',
          description: 'Meta: ser la marca mas innovadora de comida rapida en Colombia. Laboratorio permanente de I+D.',
          feedback: 'La innovacion radical crea mercados nuevos y destruye competidores, pero requiere tolerancia al fracaso. Apple lanzo decenas de productos fallidos antes del iPhone. ¿Tu equipo soporta el camino?',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 4, bsc_internal: 1, bsc_learning: 7 },
          crossEffects: [
            { area: 'innovation', message: 'Directriz final: laboratorio permanente de I+D con 5% de ventas asignado', bsc: { bsc_learning: 7, bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Flexibilizar cocina para testear nuevos productos cada semana', bsc: { bsc_internal: -1, bsc_learning: 4 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento como la marca mas creativa del Eje Cafetero', bsc: { bsc_customer: 4 }, cost: 0 },
            { area: 'hr', message: 'Contratar perfiles creativos: chef investigador y food designer', bsc: { bsc_learning: 5, bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['legado', 'innovacion', 'disrupcion'],
          next: null,
          narrative: 'Tu legado es la creatividad. La empresa sera un laboratorio donde cada semana nace algo nuevo. Riesgoso, pero memorable.'
        },
        {
          id: 'D',
          label: 'Impacto social y sostenibilidad',
          description: 'Meta: ser la primera cadena B Corp de comida rapida en el Eje Cafetero. Triple impacto.',
          feedback: 'Las empresas con proposito atraen talento y clientes leales. Patagonia demostro que la sostenibilidad vende, pero requiere coherencia total — un solo escandalo de greenwashing destruye anos de credibilidad.',
          cost: 4000000,
          revenue: 2000000,
          bsc: { bsc_financial: 0, bsc_customer: 4, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'logistics', message: 'Proveedores 100% locales, empaques biodegradables, cero desperdicio', bsc: { bsc_customer: 3, bsc_financial: -1 }, cost: 0 },
            { area: 'hr', message: 'Salarios 20% por encima del minimo, bienestar integral', bsc: { bsc_learning: 5, bsc_financial: -2 }, cost: 0 },
            { area: 'marketing', message: 'Storytelling de impacto social: cada plato apoya productores locales', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'finance', message: 'Certificacion B Corp: inversion inicial alta pero acceso a fondos de impacto', bsc: { bsc_financial: 1, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'I+D en empaques sostenibles y reduccion de huella de carbono', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'operations', message: 'Procesos verdes: energia solar, reciclaje de aceite, compostaje', bsc: { bsc_internal: 3, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['legado', 'sostenibilidad', 'impacto_social'],
          next: null,
          narrative: 'Tu legado es el proposito. La empresa no solo vende comida, transforma su comunidad. Los empleados estan orgullosos de donde trabajan.'
        }
      ]
    }

  }
};
