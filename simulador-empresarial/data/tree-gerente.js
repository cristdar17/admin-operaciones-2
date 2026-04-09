/* ============================================================
   TREE-GERENTE - Arbol de decisiones de GERENCIA GENERAL
   Simulador Empresarial - Administracion de Operaciones II
   Cadenas de comida rapida en Pereira, Colombia
   Presupuesto: $0 (usa fondos corporativos / total_cash)
   ~15 nodos de decision | Dias 1-45
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
    //  FASE 1 — VISION Y ESTRUCTURA (Dias 1-10)
    // ========================================================

    // --- DIA 1: Estrategia competitiva ---
    'ceo_01': {
      day: 1,
      title: 'Vision estrategica de la compania',
      context: 'Hoy se inaugura oficialmente tu cadena de comida rapida colombiana en Pereira. Como Gerente General, la primera gran decision es definir la estrategia competitiva que guiara TODAS las decisiones de las 6 areas durante los proximos 45 dias. Michael Porter dice que hay 3 estrategias genericas, pero algunos autores modernos defienden un enfoque hibrido. La competencia directa (la otra cadena) tambien esta eligiendo su estrategia en este momento. Tu eleccion determinara la personalidad de la empresa.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Liderazgo en costos',
          description: 'Ser la opcion mas barata del mercado pereirano. Menus desde $9.900 COP. Negociar con proveedores del Eje Cafetero para conseguir los insumos mas baratos. Estandarizar todo al maximo para reducir desperdicios. Volumen alto, margen bajo.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 5, bsc_customer: 2, bsc_internal: 3, bsc_learning: -1 },
          crossEffects: [
            { area: 'operations', message: 'Directriz de gerencia: maximizar eficiencia, reducir costos por plato al minimo. Meta: costo unitario < $5.500 COP', bsc: { bsc_internal: 3, bsc_financial: 2 }, cost: 0 },
            { area: 'finance', message: 'Estrategia de liderazgo en costos: presupuestos austeros, cada peso debe justificarse con ROI', bsc: { bsc_financial: 4 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento por precio: campanas enfocadas en valor y ahorro, no en exclusividad', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'logistics', message: 'Prioridad de logistica: negociar costos minimos con proveedores, compras por volumen', bsc: { bsc_financial: 3 }, cost: 0 },
            { area: 'hr', message: 'Nomina ajustada: equipos lean, multifuncionalidad obligatoria, bonos por ahorro', bsc: { bsc_learning: -2, bsc_internal: 2 }, cost: 0 },
            { area: 'innovation', message: 'Innovacion enfocada en reduccion de costos, no en productos premium', bsc: { bsc_learning: 1 }, cost: 0 }
          ],
          tags: ['liderazgo_costos', 'porter', 'volumen', 'precio_bajo'],
          next: 'ceo_02',
          narrative: 'La decision esta tomada: tu cadena sera la mas barata de Pereira. Los jefes de area reciben la directriz con reacciones mixtas. Operaciones celebra el enfoque en eficiencia. Marketing sabe que tendra que competir por precio. Finanzas advierte que los margenes seran delgados como hoja de papel. Pero en una ciudad donde el salario promedio es $1.4M COP, ser barato es ser relevante. Ahora cada decision de cada area pasara por el filtro: ¿esto reduce costos o los sube?'
        },
        {
          id: 'B',
          label: 'Diferenciacion',
          description: 'Ser la cadena premium de comida rapida: ingredientes de Risaralda de primera calidad, recetas de autor con toques regionales (chorizo santarroseno, trucha del Otun, platano de Armenia). Menu promedio $22.000 COP. Experiencia de marca superior.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 6, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Gerencia exige calidad premium: ingredientes de primera, recetas estandarizadas pero gourmet', bsc: { bsc_internal: 2, bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Estrategia de diferenciacion: margen alto, menor volumen. Invertir en experiencia, no en precio', bsc: { bsc_financial: -1, bsc_customer: 2 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento premium: storytelling de ingredientes locales, imagen aspiracional', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'logistics', message: 'Proveedores premium: fincas del Eje Cafetero, trazabilidad, frescura garantizada', bsc: { bsc_customer: 3, bsc_financial: -2 }, cost: 0 },
            { area: 'hr', message: 'Equipo capacitado en atencion excepcional. Cocineros con formacion en gastronomia regional', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'innovation', message: 'I+D enfocada en nuevos productos gourmet con identidad regional del Eje Cafetero', bsc: { bsc_learning: 4, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['diferenciacion', 'premium', 'porter', 'calidad'],
          next: 'ceo_02',
          narrative: 'Tu cadena sera la experiencia gastronomica de comida rapida. El equipo se emociona: van a crear algo con identidad. Marketing ya imagina las campanas con fotos de las fincas cafeteras. Operaciones advierte que mantener calidad premium en velocidad de fast food es un reto enorme. Finanzas calcula que necesitas vender 30% menos unidades que la competencia, pero a ticket 40% mayor. El riesgo: en Pereira, ¿la gente pagara $22.000 por una hamburguesa gourmet?'
        },
        {
          id: 'C',
          label: 'Enfoque en nicho',
          description: 'Especializarse en un segmento: comida rapida saludable/fit para universitarios y oficinistas jovenes del centro de Pereira. Bowls, wraps y jugos naturales. Menu promedio $16.000 COP. Menos competencia directa pero mercado mas pequeno.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: 1, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Cocina especializada en preparaciones saludables: equipos diferentes (no freidoras, si planchas y hornos)', bsc: { bsc_internal: 1, bsc_learning: 2 }, cost: 0 },
            { area: 'finance', message: 'Nicho saludable: margen medio, demanda acotada. Proyeccion mas conservadora pero estable', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Target claro: universitarios de la UTP, UCPR y oficinistas. Marketing digital + redes sociales', bsc: { bsc_customer: 4, bsc_learning: 2 }, cost: 0 },
            { area: 'logistics', message: 'Cadena de frio mas exigente: frutas, verduras y proteinas frescas requieren logistica diaria', bsc: { bsc_internal: -2, bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'Equipo con conocimientos en nutricion y manipulacion de alimentos frescos', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'I+D en menu saludable: alianzas con nutricionistas locales para validar recetas', bsc: { bsc_learning: 5 }, cost: 0 }
          ],
          tags: ['enfoque', 'nicho', 'porter', 'saludable', 'universitarios'],
          next: 'ceo_02',
          narrative: 'Comida rapida saludable en la capital del Eje Cafetero: suena arriesgado, pero los datos lo respaldan. El 32% de los universitarios pereiranos buscan opciones fit segun un estudio de la UTP. La competencia se concentra en hamburguesas y pollo — tu cadena sera la unica en este segmento. El reto: convencer a jovenes acostumbrados a almuerzos de $8.000 de que paguen el doble por un bowl de quinua con pollo grillado.'
        },
        {
          id: 'D',
          label: 'Estrategia hibrida (best-cost)',
          description: 'Ofrecer buena calidad a precios accesibles. Ni el mas barato ni el mas caro. Menu entre $14.000-$18.000 COP con ingredientes regionales de calidad. Flexibilidad para ajustar segun respuesta del mercado. Mas dificil de ejecutar pero mas adaptable.',
          cost: 2000000,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'Gerencia pide equilibrio calidad-costo: procesos eficientes pero sin sacrificar ingredientes', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 },
            { area: 'finance', message: 'Estrategia hibrida: margenes intermedios, presupuestos balanceados para todas las areas', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Posicionamiento best-value: calidad que sorprende a precios justos', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'logistics', message: 'Proveedores locales con buena relacion calidad-precio. Ni los mas baratos ni los premium', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'hr', message: 'Equipo versatil: capacitacion balanceada entre eficiencia y calidad de servicio', bsc: { bsc_learning: 2 }, cost: 0 },
            { area: 'innovation', message: 'I+D flexible: innovar donde genere mayor impacto segun datos del mercado', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['hibrida', 'best_cost', 'equilibrio', 'flexibilidad'],
          next: 'ceo_02',
          narrative: 'La estrategia del "mejor de ambos mundos" es elegante en teoria y brutal en ejecucion. Necesitas la eficiencia operativa de un lider en costos y la calidad percibida de una marca premium. Los expertos dicen que quedarse "en el medio" es peligroso (Porter lo llama "stuck in the middle"), pero empresas como Crepes & Waffles han demostrado que se puede. Tu apuesta: calidad regional a precios que Pereira pueda pagar. Si funciona, tendras la ventaja de la versatilidad.'
        }
      ]
    },

    // --- DIA 4: Estructura organizacional ---
    'ceo_02': {
      day: 4,
      title: 'Diseño de la estructura organizacional',
      context: 'Ya tienes la estrategia, ahora necesitas la estructura que la ejecute. En la teoria de Mintzberg, la estructura debe seguir a la estrategia. Tienes 6 areas (Operaciones, Finanzas, Marketing, Logistica, RRHH, Innovacion) y ~45 empleados iniciales. ¿Como organizas la cadena de mando? Esto afecta la velocidad de decision, la comunicacion entre areas y la moral del equipo.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Estructura plana (pocos niveles)',
          description: 'Solo 2 niveles: tu como gerente general y los 6 jefes de area. Sin mandos intermedios. Comunicacion directa, decisiones rapidas, pero cada jefe maneja 7-8 personas y tu supervisas todo. Riesgo de sobrecarga.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 3, bsc_customer: 2, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Estructura plana: menos cargos administrativos, nomina mas baja pero mayor carga por jefe', bsc: { bsc_financial: 2, bsc_internal: -1 }, cost: 0 },
            { area: 'operations', message: 'Sin mandos intermedios en cocina: el jefe de operaciones supervisa directamente a todos los cocineros', bsc: { bsc_internal: 2, bsc_learning: 1 }, cost: 0 },
            { area: 'innovation', message: 'Estructura plana facilita propuestas de innovacion: cualquier empleado habla directo con su jefe', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['estructura_plana', 'agil', 'mintzberg', 'startup'],
          next: 'ceo_03',
          narrative: 'Sin burocracia, sin mandos intermedios. Cuando un cocinero tiene una idea, se la dice directamente a su jefe. Cuando un jefe necesita algo, te toca a ti. Las primeras dos semanas todo fluye rapido. Pero al mes, los jefes de area empiezan a quejarse: estan apagando incendios operativos y no tienen tiempo para pensar estrategicamente. Tu bandeja de entrada tiene 40 mensajes diarios de las 6 areas. La velocidad tiene un costo: la sobrecarga gerencial.'
        },
        {
          id: 'B',
          label: 'Estructura jerarquica clasica',
          description: '4 niveles: Gerente General → Jefes de area → Coordinadores → Operarios. Cada area tiene un coordinador intermedio. Roles claros, control formal, pero decision lenta y mas costos de nomina por los mandos intermedios.',
          cost: 8000000,
          revenue: 0,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 5, bsc_learning: -1 },
          crossEffects: [
            { area: 'hr', message: 'Se necesitan 6 coordinadores intermedios adicionales. Nomina sube $8M/mes', bsc: { bsc_financial: -3, bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Estructura jerarquica implica mayor gasto fijo en nomina administrativa', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Coordinador de cocina supervisa equipo, jefe de operaciones se enfoca en mejora continua', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['jerarquia', 'clasica', 'control', 'formal'],
          next: 'ceo_03',
          narrative: 'Organigrama clasico, roles definidos, cadena de mando clara. Los coordinadores intermedios absorben la carga operativa y liberan a los jefes para pensar. Pero la informacion se filtra: cuando un operario reporta un problema, pasa por el coordinador, llega al jefe, y luego a ti. En el camino, el mensaje pierde urgencia. Las decisiones tardan 2-3 dias en bajar. Finanzas advierte que los 6 coordinadores cuestan $8M adicionales al mes. Control vs velocidad: el eterno dilema.'
        },
        {
          id: 'C',
          label: 'Estructura matricial',
          description: 'Los empleados reportan a su jefe de area Y participan en proyectos transversales (ej: un cocinero puede estar en el proyecto "menu de temporada" liderado por innovacion). Maxima colaboracion entre areas pero confusion de autoridad.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 3, bsc_internal: 2, bsc_learning: 6 },
          crossEffects: [
            { area: 'hr', message: 'Estructura matricial: se necesita capacitacion en trabajo por proyectos y doble reporte', bsc: { bsc_learning: 4, bsc_internal: -2 }, cost: 0 },
            { area: 'innovation', message: 'La estructura matricial potencia la innovacion: equipos multidisciplinarios por proyecto', bsc: { bsc_learning: 5, bsc_customer: 2 }, cost: 0 },
            { area: 'operations', message: 'Personal de cocina rota entre operacion diaria y proyectos especiales — requiere planificacion', bsc: { bsc_internal: -1, bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Marketing participa en proyectos con todas las areas: comunicacion mas integrada', bsc: { bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['matricial', 'proyectos', 'colaboracion', 'transversal'],
          next: 'ceo_03',
          narrative: 'La estructura matricial es la mas moderna y la mas caolica. Los empleados tienen un jefe funcional (su area) y un lider de proyecto. Cuando un cocinero esta en el proyecto "nuevo menu fit" liderado por innovacion, ¿quien tiene prioridad: el jefe de operaciones que lo necesita en la linea, o el lider del proyecto? Los conflictos de autoridad aparecen en la primera semana. Pero tambien aparece algo magico: las areas empiezan a hablar entre ellas. Ideas que antes se quedaban en un departamento ahora fluyen.'
        }
      ]
    },

    // --- DIA 7: Prioridades estrategicas (multi-select) ---
    'ceo_03': {
      day: 7,
      title: 'Asignacion de prioridades estrategicas',
      context: 'La junta directiva aprobo un fondo estrategico de $40M COP para fortalecer 2 de las 6 areas. Cada area recibiria $20M adicionales a su presupuesto. Esta decision envía una senal clara a toda la organizacion sobre que valoras como gerente. Las areas no seleccionadas operaran con su presupuesto base. ¿Cuales 2 areas reciben el impulso extra?',
      type: 'multi',
      multiMax: 2,
      options: [
        {
          id: 'A',
          label: 'Operaciones (+$20M)',
          description: 'Invertir en equipos de cocina de ultima generacion, automatizacion parcial y mejora de procesos. Impacto directo en capacidad productiva y calidad.',
          cost: 20000000,
          revenue: 8000000,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 6, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'FONDOS EXTRA DE GERENCIA: $20M adicionales para equipos y mejora de procesos', bsc: { bsc_internal: 5, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['prioridad_operaciones', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'Operaciones celebra: con $20M extra pueden comprar ese horno industrial que llevaban pidiendo. La capacidad productiva sube y la calidad mejora.'
        },
        {
          id: 'B',
          label: 'Finanzas (+$20M)',
          description: 'Reforzar el colchon financiero: reserva de emergencia, herramientas de control de gestion y margen para negociar mejores tasas. Seguridad ante imprevistos.',
          cost: 20000000,
          revenue: 3000000,
          bsc: { bsc_financial: 6, bsc_customer: 0, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'FONDOS EXTRA DE GERENCIA: $20M para reserva estrategica y herramientas financieras', bsc: { bsc_financial: 5 }, cost: 0 }
          ],
          tags: ['prioridad_finanzas', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'Finanzas respira: con la reserva extra, cualquier emergencia de las proximas semanas se puede absorber sin entrar en panico.'
        },
        {
          id: 'C',
          label: 'Marketing (+$20M)',
          description: 'Campanas agresivas de lanzamiento: influencers del Eje Cafetero, vallas en la Circunvalar, sampling masivo en centros comerciales. Capturar mercado rapido.',
          cost: 20000000,
          revenue: 15000000,
          bsc: { bsc_financial: -2, bsc_customer: 7, bsc_internal: 0, bsc_learning: 1 },
          crossEffects: [
            { area: 'marketing', message: 'FONDOS EXTRA DE GERENCIA: $20M para campana de lanzamiento agresiva', bsc: { bsc_customer: 6 }, cost: 0 }
          ],
          tags: ['prioridad_marketing', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'Marketing estalla de alegria. Con $20M extra planifican una campana de lanzamiento que toda Pereira va a recordar. Influencers, redes sociales, sampling en Victoria Plaza.'
        },
        {
          id: 'D',
          label: 'Logistica (+$20M)',
          description: 'Flota de domicilios propia, bodega climatizada y software de gestion de proveedores. Cadena de suministro robusta desde el dia uno.',
          cost: 20000000,
          revenue: 6000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'FONDOS EXTRA DE GERENCIA: $20M para flota, bodega y tecnologia de supply chain', bsc: { bsc_internal: 5, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['prioridad_logistica', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'Logistica aprovecha: compra 4 motos para domicilios propios y monta la bodega climatizada. Ya no dependen de Rappi ni de bodegas alquiladas.'
        },
        {
          id: 'E',
          label: 'Talento Humano (+$20M)',
          description: 'Programas de formacion, bonos de desempeno, mejora del ambiente laboral y contratacion de perfiles clave que la competencia no tiene.',
          cost: 20000000,
          revenue: 4000000,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 3, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'FONDOS EXTRA DE GERENCIA: $20M para formacion, bonos y mejora del clima laboral', bsc: { bsc_learning: 6, bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['prioridad_rrhh', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'RRHH por fin puede implementar todo lo que tenia en lista de espera: plan de formacion, bonos por resultados, uniformes de calidad. El equipo lo nota.'
        },
        {
          id: 'F',
          label: 'Innovacion (+$20M)',
          description: 'Laboratorio de I+D para nuevos productos, alianzas con universidades locales (UTP, UCPR) y tecnologia para testeo de recetas. Ventaja competitiva a mediano plazo.',
          cost: 20000000,
          revenue: 5000000,
          bsc: { bsc_financial: -3, bsc_customer: 2, bsc_internal: 1, bsc_learning: 8 },
          crossEffects: [
            { area: 'innovation', message: 'FONDOS EXTRA DE GERENCIA: $20M para laboratorio de I+D y alianzas universitarias', bsc: { bsc_learning: 7, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['prioridad_innovacion', 'inversion_estrategica'],
          next: 'ceo_04',
          narrative: 'Innovacion recibe la senial mas clara: la gerencia apuesta por el futuro. Empiezan a montar un mini-laboratorio de pruebas de recetas con apoyo de la UTP.'
        }
      ]
    },

    // ========================================================
    //  FASE 2 — INTELIGENCIA Y POSICIONAMIENTO (Dias 10-20)
    // ========================================================

    // --- DIA 10: Inteligencia competitiva ---
    'ceo_04': {
      day: 10,
      title: 'Inteligencia competitiva',
      context: 'Han pasado 10 dias y la cadena rival esta ganando traccion. Te llegan rumores de que estan preparando una promocion agresiva. Un exempleado de la competencia te busca y dice que tiene informacion privilegiada sobre sus planes, precios y proveedores. La informacion seria valiosisima, pero obtenerla de esta forma tiene implicaciones eticas y legales. ¿Como manejas la inteligencia competitiva?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Inteligencia etica y sistematica',
          description: 'Rechazar al exempleado. Montar un sistema de inteligencia competitiva legal: monitoreo de redes sociales, mystery shopping (visitar como cliente), analisis de precios publicos, y revision de sus permisos en Camara de Comercio de Pereira.',
          cost: 4000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Gerencia autoriza mystery shopping semanal a la competencia. Marketing coordina las visitas', bsc: { bsc_customer: 3, bsc_learning: 2 }, cost: 0 },
            { area: 'innovation', message: 'Datos de inteligencia competitiva disponibles para innovacion: que productos tiene la competencia', bsc: { bsc_learning: 3 }, cost: 0 },
            { area: 'hr', message: 'Politica de etica empresarial reforzada: todos firman clausula de competencia leal', bsc: { bsc_learning: 2, bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['etica', 'inteligencia_competitiva', 'mystery_shopping', 'legal'],
          next: 'ceo_05',
          narrative: 'Rechazas la informacion del exempleado y le explicas que tu empresa compite con etica. El equipo lo respeta. Montas un sistema de monitoreo legal que, aunque no tiene los detalles internos de la competencia, te da una vision bastante precisa de sus movimientos publicos. En dos semanas ya sabes sus precios, sus productos estrella y sus horarios pico. Lento pero seguro.'
        },
        {
          id: 'B',
          label: 'Escuchar pero no contratar',
          description: 'Reunirte con el exempleado en un cafe, escuchar lo que quiere contar sin pagarle, pero no contratarlo ni firmar nada. Informacion gratuita con riesgo reputacional medio. Si se entera la competencia, podrian demandar por competencia desleal.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 0, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'hr', message: 'Rumor interno: el gerente se reunio con alguien de la competencia. Algunos empleados cuestionan la etica', bsc: { bsc_internal: -2, bsc_learning: -1 }, cost: 0 },
            { area: 'finance', message: 'Riesgo legal latente: si la competencia se entera, podria haber demanda por competencia desleal', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['zona_gris', 'riesgo_reputacional', 'informacion_informal'],
          next: 'ceo_05',
          narrative: 'Te reuniste con el exempleado. Te conto que la competencia va a lanzar un combo familiar a $29.900. Informacion util, pero al salir del cafe te quedaste pensando: si uno de tus empleados hiciera lo mismo, ¿como te sentirias? Dos dias despues, un empleado tuyo te pregunta directamente si es verdad que te reuniste con alguien de "alla". La confianza interna se resintio un poco.'
        },
        {
          id: 'C',
          label: 'Postura defensiva: blindar tu informacion',
          description: 'Ignorar a la competencia y enfocarte en proteger tu propia informacion. Clausulas de confidencialidad para todos, acceso restringido a recetas y costos, y seguridad informatica basica. Que ellos se preocupen por ti, no al reves.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 5, bsc_learning: 1 },
          crossEffects: [
            { area: 'hr', message: 'Todos los empleados firman clausula de confidencialidad reforzada', bsc: { bsc_internal: 3, bsc_learning: -1 }, cost: 0 },
            { area: 'operations', message: 'Recetas y procesos clasificados como confidenciales: acceso restringido', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Informacion financiera bajo llave: solo gerencia y finanzas ven los numeros reales', bsc: { bsc_internal: 3 }, cost: 0 }
          ],
          tags: ['defensivo', 'confidencialidad', 'seguridad', 'proteccion'],
          next: 'ceo_05',
          narrative: 'Decides que la mejor defensa es una buena defensa. Todos firman clausulas, las recetas se guardan bajo llave, los costos solo los ves tu y finanzas. El equipo entiende la importancia pero algunos sienten que hay desconfianza. La ventaja: si un empleado tuyo se va a la competencia, no se lleva nada. La desventaja: no sabes nada de lo que ellos estan haciendo.'
        }
      ]
    },

    // --- DIA 13: Protocolo de crisis ---
    'ceo_05': {
      day: 13,
      title: 'Protocolo de manejo de crisis',
      context: 'Alerta sanitaria en Pereira: el INVIMA reporto que un lote de pollo de un proveedor regional tiene riesgo de salmonella. Tu cadena usa ese proveedor. Aun no hay casos confirmados en tu restaurante, pero el rumor empezo a circular en redes sociales. Un cliente publico en Twitter: "¿Sera que [tu marca] usa ese pollo contaminado? 🤮". El post tiene 200 likes y subiendo. ¿Como manejas esta crisis?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Transparencia total e inmediata',
          description: 'Sacar un comunicado en redes en las proximas 2 horas: confirmar que usas ese proveedor, anunciar que retiras TODO el pollo preventivamente, ofrecer reembolso a quien haya comprado platos con pollo esta semana, y mostrar el cambio a proveedor certificado INVIMA.',
          cost: 12000000,
          revenue: -5000000,
          bsc: { bsc_financial: -4, bsc_customer: 6, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'CRISIS: Comunicado urgente de gerencia. Marketing maneja la comunicacion en redes, tono transparente', bsc: { bsc_customer: 5 }, cost: 0 },
            { area: 'operations', message: 'CRISIS: Retirar todo el pollo del proveedor afectado. Reconfigurar menu sin platos de pollo por 48h', bsc: { bsc_internal: -3, bsc_customer: 2 }, cost: 0 },
            { area: 'logistics', message: 'EMERGENCIA: Conseguir proveedor de pollo alternativo certificado INVIMA en menos de 24 horas', bsc: { bsc_internal: -4, bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Costo de crisis: reembolsos + pollo perdido + proveedor nuevo de urgencia. Estimado: $12M', bsc: { bsc_financial: -4 }, cost: 0 },
            { area: 'hr', message: 'Capacitacion de emergencia: todo el equipo debe conocer el protocolo de crisis y el mensaje oficial', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['transparencia', 'crisis', 'invima', 'comunicacion', 'reputacion'],
          next: 'ceo_06',
          narrative: 'El comunicado sale en 90 minutos. Es honesto, directo y muestra accion inmediata. Los primeros comentarios son de sorpresa: "Wow, una marca que dice la verdad". En 24 horas el post del cliente enojado quedo enterrado bajo comentarios positivos. Las ventas caen un 15% los dos primeros dias pero al quinto dia ya estan al 95% porque la gente confia. El costo fue alto pero la marca salio fortalecida. Crisis = oportunidad.'
        },
        {
          id: 'B',
          label: 'Accion silenciosa (sin comunicado publico)',
          description: 'Cambiar de proveedor inmediatamente pero sin hacer ruido. No publicar nada en redes. Si alguien pregunta, responder en privado. Esperar que el rumor muera solo. Menos costoso pero si sale a la luz que sabias y no dijiste nada, el dano sera peor.',
          cost: 5000000,
          revenue: -2000000,
          bsc: { bsc_financial: -1, bsc_customer: -3, bsc_internal: 2, bsc_learning: -2 },
          crossEffects: [
            { area: 'logistics', message: 'Cambio silencioso de proveedor de pollo. Sin urgencia publica pero hay que actuar rapido', bsc: { bsc_internal: -2 }, cost: 0 },
            { area: 'operations', message: 'Cambiar proveedor sin interrumpir servicio. El equipo de cocina no debe notar diferencia', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'marketing', message: 'Instruccion de gerencia: NO publicar nada. Si preguntan en redes, responder en privado', bsc: { bsc_customer: -3 }, cost: 0 }
          ],
          tags: ['silencio', 'riesgo_reputacional', 'crisis_oculta'],
          next: 'ceo_06',
          narrative: 'El cambio de proveedor se hizo en 48 horas. Nadie publico nada. El tweet original siguio circulando pero sin respuesta oficial. Al cuarto dia, un periodista de Caracol Pereira pregunto directamente y tuviste que improvisar. La historia: "Ya habiamos cambiado de proveedor antes del reporte". Funciono a medias. Algunos clientes nunca volvieron porque sintieron que les escondieron algo. El ahorro fue real, pero la marca quedo con una sombra de desconfianza.'
        },
        {
          id: 'C',
          label: 'Contraataque mediatico',
          description: 'Publicar contenido mostrando tus certificaciones, tus procesos de calidad, tus proveedores (sin mencionar el del problema). Invertir $5M en pauta digital para posicionar la marca como sinonimo de seguridad alimentaria. Desviar la atencion.',
          cost: 7000000,
          revenue: 2000000,
          bsc: { bsc_financial: -2, bsc_customer: 1, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [
            { area: 'marketing', message: 'Campana de reposicionamiento urgente: $5M en pauta digital mostrando calidad y certificaciones', bsc: { bsc_customer: 2, bsc_financial: -2 }, cost: 0 },
            { area: 'logistics', message: 'Gerencia pide que logistica consiga certificaciones adicionales de proveedores para mostrar en campana', bsc: { bsc_internal: -1, bsc_customer: 1 }, cost: 0 },
            { area: 'operations', message: 'Preparar la cocina para visita de influencers y medios: todo impecable', bsc: { bsc_internal: 1, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['contraataque', 'marketing_crisis', 'reposicionamiento'],
          next: 'ceo_06',
          narrative: 'La campana de "Calidad que se ve" sale en 24 horas con fotos de la cocina impecable, certificaciones y videos de los proveedores. Funciona a corto plazo: los seguidores en Instagram suben. Pero una semana despues, un blogger local publica: "Mucho marketing y poca transparencia — nunca dijeron si usaban o no al proveedor del escandalo". El post se viraliza. El contraataque te compro tiempo pero no resolvio el problema de fondo.'
        }
      ]
    },

    // --- DIA 16: Expansion vs consolidacion ---
    'ceo_06': {
      day: 16,
      title: 'Expansion o consolidacion',
      context: 'Llevas 16 dias operando. Las ventas estan en el 78% de la proyeccion — bueno pero no espectacular. Un local comercial premium se desocupo en el centro de Pereira (calle 19 con carrera 8, zona de alto trafico peatonal) y el arrendatario te ofrece primer mes gratis si firmas contrato de 12 meses ($6M/mes). Seria tu segundo punto de venta. Pero abrir un segundo local cuando el primero aun no alcanza el 100% de su proyeccion es riesgoso. ¿Que decides?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Expandir: abrir segundo local',
          description: 'Firmar el contrato. Invertir ~$45M en adecuacion del local, equipos y personal. Duplicar la operacion. Riesgo alto, pero si funciona, capturas mercado antes que la competencia.',
          cost: 45000000,
          revenue: 20000000,
          bsc: { bsc_financial: -5, bsc_customer: 5, bsc_internal: -2, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'EXPANSION: Preparar operacion completa para segundo local. Duplicar equipos y procesos', bsc: { bsc_internal: -3, bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'EXPANSION: Contratar minimo 15 personas para el segundo local en menos de 10 dias', bsc: { bsc_internal: -4, bsc_learning: -2 }, cost: 0 },
            { area: 'finance', message: 'EXPANSION: Inversion de $45M + arriendo mensual de $6M. Punto de equilibrio del L2 se calcula aparte', bsc: { bsc_financial: -5 }, cost: 0 },
            { area: 'logistics', message: 'EXPANSION: Duplicar cadena de suministro. Nuevos volumenes con proveedores, rutas adicionales', bsc: { bsc_internal: -3 }, cost: 0 },
            { area: 'marketing', message: 'EXPANSION: Campana de apertura del segundo local. Oportunidad de generar novedad mediatica', bsc: { bsc_customer: 4 }, cost: 0 }
          ],
          tags: ['expansion', 'segundo_local', 'crecimiento', 'riesgo_alto'],
          next: 'ceo_07',
          narrative: 'Firmas el contrato. El equipo se divide entre la emocion y el miedo. Abrir un segundo local en 16 dias de operacion es una apuesta agresiva. RRHH corre a contratar, operaciones duplica procesos, logistica renegocia volumenes. Las primeras semanas del segundo local son caoticas: personal sin experiencia, proveedores ajustando entregas. Pero el trafico peatonal de la calle 19 es brutal — 800 personas/hora pasan frente al local. Si sobrevives el primer mes, puede ser un golazo.'
        },
        {
          id: 'B',
          label: 'Consolidar: fortalecer el local actual',
          description: 'Rechazar el local. Invertir esos $45M en llevar el primer punto al 120% de su capacidad: mejoras operativas, marketing local, experiencia del cliente, y construir una base solida antes de crecer.',
          cost: 15000000,
          revenue: 8000000,
          bsc: { bsc_financial: 3, bsc_customer: 3, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Gerencia prioriza consolidacion: invertir en optimizar el local actual al maximo', bsc: { bsc_internal: 4 }, cost: 0 },
            { area: 'marketing', message: 'Presupuesto extra para marketing local: dominar la zona antes de expandir', bsc: { bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Decision conservadora de gerencia: no expansion, foco en alcanzar punto de equilibrio del L1', bsc: { bsc_financial: 4 }, cost: 0 }
          ],
          tags: ['consolidacion', 'prudencia', 'optimizacion', 'base_solida'],
          next: 'ceo_07',
          narrative: 'Dejas ir el local de la calle 19. Algunos en el equipo suspiran de alivio, otros de frustracion. Pero la logica es solida: ¿para que duplicar algo que aun no funciona al 100%? Los $15M que inviertes en mejoras del local actual empiezan a dar frutos: en 10 dias las ventas suben del 78% al 91% de la proyeccion. El equipo gana confianza. La competencia abrio su segundo local y esta sufriendo con la logistica. A veces la paciencia es la mejor estrategia.'
        },
        {
          id: 'C',
          label: 'Negociar: opcion de reserva',
          description: 'No firmar ahora pero negociar una opcion de reserva: pagas $3M para tener derecho preferente sobre el local por 30 dias. Si en un mes tu primer local supera el 95% de proyeccion, firmas. Si no, pierdes los $3M pero evitas un compromiso prematuro.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 2, bsc_learning: 4 },
          crossEffects: [
            { area: 'finance', message: 'Opcion de reserva sobre local: $3M ahora. Gerencia evalua expansion en 30 dias segun KPIs', bsc: { bsc_financial: 0 }, cost: 0 },
            { area: 'operations', message: 'Gerencia da 30 dias para demostrar que el L1 opera al 95%+. Meta clara para operaciones', bsc: { bsc_internal: 3, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['opcion', 'negociacion', 'flexibilidad', 'data_driven'],
          next: 'ceo_07',
          narrative: 'Jugada elegante: no dices si ni no, dices "tal vez". El arrendatario acepta los $3M porque le conviene tener un respaldo. Ahora tienes 30 dias para decidir con datos reales en la mano. Le comunicas a todas las areas: "Tenemos un mes para demostrar que podemos escalar. Si el local actual llega al 95%, abrimos el segundo." El equipo tiene una meta clara y medible. La presion es sana.'
        }
      ]
    },

    // ========================================================
    //  FASE 3 — ALIANZAS Y CULTURA (Dias 19-28)
    // ========================================================

    // --- DIA 19: Alianza estrategica ---
    'ceo_07': {
      day: 19,
      title: 'Oportunidad de alianza estrategica',
      context: 'Juan Valdez Pereira te propone una alianza: ellos ponen el cafe colombiano premium y tu pones la comida. Un "combo desayuno" exclusivo vendido en ambas marcas. Compartir costos de marketing, ingredientes y visibilidad. Pero implica adaptar tu menu, ceder parte del margen y depender de un socio externo. Tambien hay otra opcion sobre la mesa: un influencer pereirano con 200K seguidores quiere ser embajador de marca.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Alianza con Juan Valdez',
          description: 'Firmar alianza de co-branding por 6 meses. Combo desayuno a $12.900 COP. Ambas marcas lo promocionan. Tu aportas sandwich + jugo, ellos el cafe. Margen compartido 60/40. Acceso a sus 3 locales en Pereira como punto de venta indirecto.',
          cost: 8000000,
          revenue: 18000000,
          bsc: { bsc_financial: 3, bsc_customer: 5, bsc_internal: -1, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Alianza JV: producir 200 sandwiches extra/dia para despachar a los 3 locales de Juan Valdez', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'marketing', message: 'Co-branding con Juan Valdez: acceso a su base de clientes y material POP compartido', bsc: { bsc_customer: 5, bsc_learning: 2 }, cost: 0 },
            { area: 'logistics', message: 'Ruta de entrega nueva: despachar sandwiches a 3 locales de JV diariamente antes de las 6am', bsc: { bsc_internal: -2, bsc_customer: 1 }, cost: 0 },
            { area: 'finance', message: 'Proyeccion alianza JV: ingresos adicionales de $18M/mes con margen del 35%', bsc: { bsc_financial: 4 }, cost: 0 },
            { area: 'innovation', message: 'La alianza permite testear nuevos productos (wraps, bowls matutinos) con audiencia de JV', bsc: { bsc_learning: 4 }, cost: 0 }
          ],
          tags: ['alianza', 'juan_valdez', 'cobranding', 'desayuno', 'cafe'],
          next: 'ceo_08',
          narrative: 'La alianza con Juan Valdez es un golpe maestro de posicionamiento. Su marca le da credibilidad a la tuya. El combo desayuno se vuelve viral en Instagram porque la gente lo asocia con "calidad colombiana". Las ventas matutinas suben un 60%. El reto: producir 200 sandwiches adicionales cada madrugada sin afectar la operacion del almuerzo. Operaciones trabaja a marchas forzadas pero los numeros cierran. Es la decision mas comentada en toda la empresa.'
        },
        {
          id: 'B',
          label: 'Embajador influencer',
          description: 'Contratar a @SaborPereira (200K seguidores, 23 anos, contenido de comida) como embajador de marca por 3 meses. $4M/mes + comida gratis. Contenido semanal en Instagram y TikTok. Impacto rapido en redes pero sin los beneficios operativos de una alianza.',
          cost: 12000000,
          revenue: 10000000,
          bsc: { bsc_financial: -1, bsc_customer: 6, bsc_internal: 0, bsc_learning: 2 },
          crossEffects: [
            { area: 'marketing', message: 'Influencer contratado: coordinar contenido semanal, menu de cortesia, y respuesta a comentarios', bsc: { bsc_customer: 6, bsc_learning: 1 }, cost: 0 },
            { area: 'operations', message: 'Preparar platos "instagrameables" para el contenido del influencer. La presentacion importa', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'hr', message: 'El equipo debe saber que hay un influencer viniendo: servicio impecable cuando visite', bsc: { bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['influencer', 'redes_sociales', 'marketing_digital', 'tiktok'],
          next: 'ceo_08',
          narrative: '@SaborPereira publica su primer reel: "Encontre esta joya escondida en Pereira 🔥". 85.000 vistas en 48 horas. El local se llena el sabado siguiente. El efecto influencer es real pero efimero — cada contenido tiene pico de 3 dias. Sin contenido nuevo, las vistas caen. Es como una droga: funciona pero genera dependencia. Cuando se acabe el contrato, ¿la gente seguira viniendo por la comida o solo venia por el hype?'
        },
        {
          id: 'C',
          label: 'Ningun socio externo: crecer solo',
          description: 'Rechazar ambas propuestas. Invertir esos recursos en fortalecer la marca propia sin depender de nadie. Programa de lealtad, menu de temporada diseñado internamente, y marketing organico con contenido propio.',
          cost: 6000000,
          revenue: 5000000,
          bsc: { bsc_financial: 1, bsc_customer: 2, bsc_internal: 3, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Sin alianzas externas: marketing debe crear programa de lealtad y contenido propio 100%', bsc: { bsc_customer: 2, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Desarrollo interno de menu de temporada: total libertad creativa sin restricciones de socio', bsc: { bsc_learning: 4, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['independencia', 'marca_propia', 'organico', 'lealtad'],
          next: 'ceo_08',
          narrative: 'Decides construir la marca con tus propias manos. Es mas lento pero todo lo que ganes sera 100% tuyo. El programa de lealtad arranca con 340 inscritos la primera semana. El menu de temporada (empanadas de choclo por ser abril) tiene buena recepcion. No hay saltos dramaticos en ventas, pero hay crecimiento constante. Mientras la competencia depende de alianzas, tu construyes una base solida. La tortuga vs la liebre.'
        }
      ]
    },

    // --- DIA 22: Poder de VETO ---
    'ceo_08': {
      day: 22,
      title: 'Ejercer el poder de veto',
      context: 'Como Gerente General, tienes un poder unico: el VETO. Puedes anular una decision ya tomada por cualquier area si consideras que perjudica a la empresa. Has revisado las decisiones de los ultimos 22 dias y hay una que te preocupa. El jefe de esa area defiende su decision con datos, pero tu vision estrategica dice otra cosa. Usar el veto es poderoso pero genera tension interna. ¿Lo usas o confias en tu equipo?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Ejercer el VETO',
          description: 'Anular la decision que mas te preocupa. Comunicarlo en reunion con todos los jefes de area, explicando las razones estrategicas. El area afectada pierde el efecto de esa decision (costos, ingresos y BSC se revierten parcialmente). Envia un mensaje claro: el gerente vigila.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 2, bsc_customer: 0, bsc_internal: -3, bsc_learning: 2 },
          crossEffects: [
            { area: 'hr', message: 'VETO GERENCIAL: El gerente anulo una decision de area. Impacto en moral del equipo. RRHH debe mediar', bsc: { bsc_internal: -3, bsc_learning: 1 }, cost: 0 },
            { area: 'operations', message: 'Alerta: gerencia esta monitoreando de cerca todas las decisiones. Cuidar cada paso', bsc: { bsc_internal: 2, bsc_learning: -1 }, cost: 0 },
            { area: 'finance', message: 'El veto revierte parcialmente costos/ingresos de la decision anulada', bsc: { bsc_financial: 2 }, cost: 0 },
            { area: 'innovation', message: 'El veto genera cautela: innovacion siente que las ideas arriesgadas seran bloqueadas', bsc: { bsc_learning: -3 }, cost: 0 }
          ],
          tags: ['veto', 'poder', 'control', 'liderazgo_autoritario'],
          next: 'ceo_09',
          narrative: 'Reunes a los 6 jefes de area y anuncias el veto. El silencio es pesado. El jefe del area afectada defiende su posicion con datos, pero aceptas que "los datos muestran una foto parcial, la estrategia necesita la pelicula completa". Algunos jefes asienten, otros cruzan los brazos. El mensaje quedo claro: las decisiones de area no son autonomas, pasan por el filtro del gerente. La empresa gana control pero pierde un poco de confianza interna. El jefe afectado no volvio a proponer ideas arriesgadas.'
        },
        {
          id: 'B',
          label: 'Confiar en el equipo',
          description: 'No usar el veto. Reunirte con el jefe del area en cuestion, expresar tu preocupacion, pero dejar la decision en sus manos. Confianza > control. Si la decision falla, sera una leccion de aprendizaje. Si funciona, el equipo se fortalece.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 4, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'El gerente decidio confiar en las decisiones del equipo. Boost de moral y autonomia en toda la empresa', bsc: { bsc_internal: 4, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Senial positiva: gerencia respeta las decisiones de area. Innovacion se atreve a proponer mas', bsc: { bsc_learning: 4 }, cost: 0 },
            { area: 'operations', message: 'Autonomia confirmada: operaciones sigue su rumbo con confianza del gerente', bsc: { bsc_internal: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['confianza', 'delegacion', 'liderazgo_participativo', 'empoderamiento'],
          next: 'ceo_09',
          narrative: 'Decides guardar el veto. Te reunes en privado con el jefe del area, le compartes tu preocupacion y le preguntas: "¿Que no estoy viendo que tu si ves?". La conversacion es rica — te da perspectivas que no tenias. Al final, su decision tiene mas sentido de lo que pensabas. Le dices: "Confio en ti, pero monitorearemos los resultados juntos". El equipo se entera de que el gerente escucha antes de actuar. La cultura de confianza se fortalece. El riesgo: si esa decision falla, la responsabilidad es compartida.'
        }
      ]
    },

    // --- DIA 25: Cultura organizacional ---
    'ceo_09': {
      day: 25,
      title: 'Iniciativa de cultura organizacional',
      context: 'A mitad de camino (dia 25 de 45), la moral del equipo esta en un punto critico. Las areas que recibieron fondos extra estan motivadas, las que no, un poco resentidas. Ha habido roces entre operaciones y logistica por tiempos de entrega. Dos cocineros renunciaron la semana pasada. Necesitas una iniciativa de cultura que una a todos. La investigacion dice que la cultura organizacional es el factor #1 de retencion en empresas colombianas (Estudio Mercer 2024).',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Bonos por resultados colectivos',
          description: 'Si la empresa cumple sus metas globales (no por area), todos reciben un bono del 8% del salario. Fomenta colaboracion entre areas porque todos ganan o todos pierden. Costo estimado: $10M si se cumplen las metas.',
          cost: 10000000,
          revenue: 6000000,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'Programa de bonos colectivos: RRHH debe disenar metricas de equipo y comunicar reglas claras', bsc: { bsc_internal: 5, bsc_learning: 3 }, cost: 0 },
            { area: 'finance', message: 'Provision para bonos colectivos: $10M si se cumplen metas. Impacto en flujo de caja del dia 40+', bsc: { bsc_financial: -2 }, cost: 0 },
            { area: 'operations', message: 'Bonos colectivos: el equipo de cocina tiene incentivo para colaborar con logistica y marketing', bsc: { bsc_internal: 3, bsc_customer: 1 }, cost: 0 },
            { area: 'logistics', message: 'Bonos colectivos: logistica y operaciones deben dejar de pelear y trabajar como equipo', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'marketing', message: 'Bonos colectivos motivan a marketing a generar ventas reales, no solo awareness', bsc: { bsc_customer: 2, bsc_financial: 1 }, cost: 0 },
            { area: 'innovation', message: 'Bonos colectivos: innovacion se enfoca en proyectos que impacten resultados medibles', bsc: { bsc_learning: 2, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['bonos', 'incentivos', 'cultura', 'colaboracion', 'metas_colectivas'],
          next: 'ceo_10',
          narrative: 'Anuncias los bonos en una reunion con los 45 empleados. Los ojos brillan. Pero lo mas importante no es el dinero — es el mensaje: "Aqui ganamos todos o no gana nadie". Los roces entre operaciones y logistica se suavizan inmediatamente porque ahora los KPIs son compartidos. Los cocineros empiezan a preguntar "¿como van las ventas?" por primera vez. La empresa dejo de ser 6 islas y se convirtio en un barco. Costo alto, pero la productividad general sube un 12% en una semana.'
        },
        {
          id: 'B',
          label: 'Programa de reconocimiento y bienestar',
          description: 'Crear "El Empleado del Mes" con premio de $200K COP, implementar un almuerzo gratuito diario para todo el equipo (cocinado por ellos mismos), y dia libre de cumpleanos. Bajo costo, alto impacto emocional.',
          cost: 4000000,
          revenue: 2000000,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 4, bsc_learning: 5 },
          crossEffects: [
            { area: 'hr', message: 'Programa de bienestar: RRHH implementa reconocimientos mensuales y beneficios de calidad de vida', bsc: { bsc_internal: 4, bsc_learning: 5 }, cost: 0 },
            { area: 'operations', message: 'Almuerzo gratis para el equipo: la cocina prepara un plato del dia para todos. Moral sube', bsc: { bsc_internal: 3, bsc_learning: 1 }, cost: 0 },
            { area: 'finance', message: 'Costo del programa de bienestar: $4M/mes. Impacto en retencion reduce costos de rotacion', bsc: { bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['bienestar', 'reconocimiento', 'empleado_del_mes', 'retencion'],
          next: 'ceo_10',
          narrative: 'Los cambios "pequenos" resultan ser gigantes. El primer Empleado del Mes es una cajera que siempre llega 15 minutos antes y saluda a todos con nombre. Cuando recibe el premio, llora. El almuerzo gratis se convierte en el momento mas esperado del dia: el equipo come junto, bromea, se conoce. Los dos cocineros que renunciaron? Uno llamo a preguntar si puede volver. La cultura no se compra con bonos — se construye con detalles.'
        },
        {
          id: 'C',
          label: 'Competencia amistosa entre areas',
          description: 'Crear un ranking interno semanal donde las areas compiten por KPIs. El area ganadora elige el playlist del restaurante esa semana y recibe un desayuno especial. Gamificacion + rivalidad sana. Riesgo: puede profundizar la competencia interna en vez de la colaboracion.',
          cost: 2000000,
          revenue: 1000000,
          bsc: { bsc_financial: 1, bsc_customer: 1, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'hr', message: 'Competencia entre areas: RRHH debe monitorear que sea sana y no genere resentimiento', bsc: { bsc_internal: 1, bsc_learning: 2 }, cost: 0 },
            { area: 'operations', message: 'Ranking semanal: operaciones quiere ganar y empuja la productividad', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'marketing', message: 'Marketing quiere ganar el ranking: se vuelven mas creativos con campanas', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'innovation', message: 'Ranking estimula ideas nuevas: innovacion quiere demostrar su valor en KPIs medibles', bsc: { bsc_learning: 3 }, cost: 0 }
          ],
          tags: ['gamificacion', 'competencia', 'ranking', 'motivacion'],
          next: 'ceo_10',
          narrative: 'El primer ranking lo gana marketing por sus resultados en redes. Operaciones protesta: "Nosotros cocinamos 600 platos al dia y ellos ganan por unos likes?" El segundo ranking lo gana operaciones y eligen reggaeton todo el dia — marketing sufre. La competencia es divertida pero no resuelve los roces de fondo. Es entretenimiento, no cultura. Funciona como complemento, no como solucion principal.'
        }
      ]
    },

    // ========================================================
    //  FASE 4 — RIESGO Y ADAPTACION (Dias 28-37)
    // ========================================================

    // --- DIA 28: Gestion de riesgos ---
    'ceo_10': {
      day: 28,
      title: 'Estrategia de gestion de riesgos',
      context: 'El contador te presenta un mapa de riesgos: la empresa tiene 3 amenazas latentes. (1) Dependencia de un solo proveedor de proteinas — si falla, no hay plato principal. (2) El 60% de las ventas se concentra en almuerzo — si cae, no hay como compensar. (3) Solo tienes $X en caja y los gastos fijos son altos. No puedes cubrir todo: ¿que riesgo priorizas mitigar?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Mitigar riesgo de proveedores',
          description: 'Diversificar: conseguir 2 proveedores adicionales de proteinas. Firmar contratos con penalidad por incumplimiento. Crear inventario de seguridad de 5 dias. Costo: $7M entre inventario extra y gestion.',
          cost: 7000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 2 },
          crossEffects: [
            { area: 'logistics', message: 'PRIORIDAD: Diversificar proveedores de proteinas. Buscar 2 alternativas y firmar contratos', bsc: { bsc_internal: 5, bsc_customer: 1 }, cost: 0 },
            { area: 'operations', message: 'Inventario de seguridad de 5 dias: espacio de almacenamiento necesario en cocina', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Capital inmovilizado en inventario de seguridad: $7M adicionales. Afecta liquidez', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['riesgo', 'proveedores', 'diversificacion', 'inventario_seguridad'],
          next: 'ceo_11',
          narrative: 'En 5 dias tienes contratos con 2 proveedores adicionales: uno en Cartago y otro en Manizales. El inventario de seguridad cuesta espacio y dinero, pero duermes mas tranquilo. Dos semanas despues, el proveedor original tiene un problema de transporte por derrumbe en la via. Mientras la competencia se queda sin pollo un dia entero, tu cocina opera con normalidad. La diversificacion se pago sola en un solo incidente.'
        },
        {
          id: 'B',
          label: 'Mitigar riesgo de concentracion de ventas',
          description: 'Desarrollar horarios alternativos: desayuno ejecutivo (6-9am) y merienda/cena (6-9pm). Menus especificos para cada franja. Requiere ajustar turnos, crear nuevos productos y campanas. Meta: que almuerzo represente maximo el 40% de ventas.',
          cost: 10000000,
          revenue: 12000000,
          bsc: { bsc_financial: 1, bsc_customer: 5, bsc_internal: -2, bsc_learning: 4 },
          crossEffects: [
            { area: 'operations', message: 'Nuevos horarios: desayuno (6-9am) y cena (6-9pm). Ajustar produccion y turnos de personal', bsc: { bsc_internal: -3, bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'Nuevos turnos para cubrir desayuno y cena. Recargos y rotacion de personal', bsc: { bsc_internal: -2, bsc_financial: -1 }, cost: 0 },
            { area: 'marketing', message: 'Campanas para posicionar desayuno y cena: nuevos productos, nuevos publicos', bsc: { bsc_customer: 5, bsc_learning: 2 }, cost: 0 },
            { area: 'innovation', message: 'Desarrollo de menu de desayuno y cena: oportunidad creativa para I+D', bsc: { bsc_learning: 4, bsc_customer: 2 }, cost: 0 }
          ],
          tags: ['diversificacion', 'horarios', 'desayuno', 'cena', 'concentracion'],
          next: 'ceo_11',
          narrative: 'Abrir desayuno y cena cambia la dinamica de la empresa. La cocina arranca a las 5am preparando huevos pericos y arepas con queso. De noche, sirven alitas y papas criollas. Las primeras semanas son duras: el equipo esta agotado con los nuevos turnos y las ventas nocturnas son bajas. Pero al tercer turno de cena, un grupo de universitarios descubre que tu restaurante abre hasta las 9pm y se vuelve su spot de estudio. El desayuno tarda mas en despegar pero el combo con tinto a $5.900 empieza a jalar oficinistas.'
        },
        {
          id: 'C',
          label: 'Mitigar riesgo financiero (colchon de liquidez)',
          description: 'Crear una reserva de emergencia equivalente a 15 dias de gastos fijos. Recortar gastos no esenciales en todas las areas (5% parejo). Negociar linea de credito preaprobada con Bancolombia para emergencias.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: 6, bsc_customer: -1, bsc_internal: 2, bsc_learning: 1 },
          crossEffects: [
            { area: 'finance', message: 'PRIORIDAD GERENCIAL: Crear reserva de 15 dias de gastos fijos. Recortar 5% en todas las areas', bsc: { bsc_financial: 6 }, cost: 0 },
            { area: 'operations', message: 'Recorte del 5% en presupuesto operativo por orden de gerencia. Ajustar gastos', bsc: { bsc_internal: -1, bsc_financial: 1 }, cost: 0 },
            { area: 'marketing', message: 'Recorte del 5% en presupuesto de marketing. Priorizar canales organicos sobre pauta pagada', bsc: { bsc_customer: -2, bsc_financial: 1 }, cost: 0 },
            { area: 'hr', message: 'Recorte del 5% en RRHH: reducir capacitaciones no esenciales este mes', bsc: { bsc_learning: -2, bsc_financial: 1 }, cost: 0 },
            { area: 'logistics', message: 'Recorte del 5% en logistica: optimizar rutas y reducir un viaje de abastecimiento semanal', bsc: { bsc_internal: -1, bsc_financial: 1 }, cost: 0 },
            { area: 'innovation', message: 'Recorte del 5% en innovacion: pausar proyectos experimentales, foco en mejoras incrementales', bsc: { bsc_learning: -3, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['liquidez', 'reserva', 'austeridad', 'recorte', 'prudencia'],
          next: 'ceo_11',
          narrative: 'El recorte del 5% duele en todas partes. Marketing pierde su pauta de Instagram. Innovacion pausa su proyecto de receta fusion. Operaciones aprieta un poco el presupuesto de insumos. Pero cuando al dia 35 se dania el horno principal ($8M de reparacion), la reserva esta ahi esperando. Sin esa reserva, habrias tenido que pedir un prestamo de emergencia al 24% E.A. La prudencia no es sexy, pero salva empresas.'
        }
      ]
    },

    // --- DIA 31: Comunicacion con stakeholders ---
    'ceo_11': {
      day: 31,
      title: 'Comunicacion con grupos de interes',
      context: 'Tres stakeholders diferentes te piden atencion al mismo tiempo. (1) La junta directiva quiere un informe de resultados — las proyecciones estaban mas optimistas de lo real. (2) La comunidad del barrio se queja del ruido nocturno y la basura. (3) Los empleados piden una reunion para hablar de carga laboral. Solo tienes tiempo de atender bien a uno esta semana. ¿A quien le das prioridad?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Priorizar a la junta directiva',
          description: 'Preparar un informe detallado con proyecciones ajustadas, plan de accion y timeline para alcanzar las metas. Si la junta pierde confianza, pueden cambiar al gerente.',
          cost: 0,
          revenue: 0,
          bsc: { bsc_financial: 4, bsc_customer: -1, bsc_internal: -2, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Gerencia prepara informe financiero critico para la junta. Finanzas debe proveer datos actualizados YA', bsc: { bsc_financial: 3, bsc_internal: -1 }, cost: 0 },
            { area: 'hr', message: 'Reunion de empleados aplazada por orden de gerencia. Frustracion en el equipo operativo', bsc: { bsc_internal: -3, bsc_learning: -1 }, cost: 0 }
          ],
          tags: ['junta', 'inversionistas', 'gobernanza', 'accountability'],
          next: 'ceo_12',
          narrative: 'Pasas 3 dias preparando el informe. La junta escucha, cuestiona, pero acepta el plan de accion. Tu puesto esta seguro por ahora. Sin embargo, la comunidad del barrio escalo su queja a la Alcaldia y recibiste una notificacion de Planeacion Municipal. Los empleados, ignorados, publican quejas anonimas en un grupo de WhatsApp que filtra hacia afuera. Priorizaste arriba y descuidaste abajo y afuera.'
        },
        {
          id: 'B',
          label: 'Priorizar a la comunidad',
          description: 'Reunirte con los lideres del barrio, ofrecer disculpas, instalar aislamiento acustico, mejorar el manejo de residuos, y crear un programa de "buen vecino" (descuentos para residentes del sector).',
          cost: 5000000,
          revenue: 3000000,
          bsc: { bsc_financial: -1, bsc_customer: 5, bsc_internal: 1, bsc_learning: 3 },
          crossEffects: [
            { area: 'marketing', message: 'Programa "Buen Vecino": descuentos para residentes del barrio. Oportunidad de marketing local', bsc: { bsc_customer: 4, bsc_learning: 1 }, cost: 0 },
            { area: 'operations', message: 'Instalar aislamiento acustico y mejorar manejo de residuos en el local', bsc: { bsc_internal: 2, bsc_customer: 1 }, cost: 0 },
            { area: 'logistics', message: 'Nuevo protocolo de manejo de residuos: separacion en fuente y recoleccion nocturna silenciosa', bsc: { bsc_internal: 1, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['comunidad', 'responsabilidad_social', 'vecinos', 'reputacion'],
          next: 'ceo_12',
          narrative: 'Te reuniste con dona Martha, la lider del barrio. Escuchaste 45 minutos de quejas y respondiste con acciones concretas. En una semana, el aislamiento acustico esta instalado y los residuos se manejan impecablemente. Dona Martha se convierte en tu mejor embajadora: "Esa gente si escucha". Los vecinos empiezan a comprar ahi. La junta recibe un informe escueto y se molesta un poco, pero no escala. Los empleados siguen esperando.'
        },
        {
          id: 'C',
          label: 'Priorizar a los empleados',
          description: 'Reunion abierta con todo el equipo: escuchar quejas, reconocer la carga, y tomar acciones inmediatas (ajuste de turnos, dia de descanso extra, compromiso de contratacion). Tu gente primero.',
          cost: 3000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 1, bsc_internal: 6, bsc_learning: 4 },
          crossEffects: [
            { area: 'hr', message: 'Reunion gerencial con TODO el equipo: escuchar, actuar, y restaurar la confianza interna', bsc: { bsc_internal: 6, bsc_learning: 4 }, cost: 0 },
            { area: 'operations', message: 'Ajuste de turnos por decision gerencial: mejor distribucion de carga sin bajar produccion', bsc: { bsc_internal: 3, bsc_customer: 1 }, cost: 0 },
            { area: 'finance', message: 'Informe a la junta sera breve y tardara una semana mas. Riesgo politico con inversionistas', bsc: { bsc_financial: -2 }, cost: 0 }
          ],
          tags: ['empleados', 'bienestar', 'liderazgo_servicial', 'escucha_activa'],
          next: 'ceo_12',
          narrative: 'La reunion dura 2 horas. Los empleados hablan sin filtro: turnos imposibles, falta de descanso, coordinadores que no escuchan. Tu tomas nota de todo y al dia siguiente anuncias 3 cambios concretos. El efecto es inmediato: la productividad sube un 15% porque la gente siente que su lider los prioriza. Un cocinero te dice: "Es la primera vez que un jefe nos pregunta como estamos". La junta esta molesta por el retraso del informe. La comunidad escala la queja. Pero tu gente esta contigo.'
        }
      ]
    },

    // --- DIA 34: Innovacion vs estabilidad ---
    'ceo_12': {
      day: 34,
      title: 'Innovacion disruptiva o estabilidad operativa',
      context: 'Innovacion te presenta una idea que podria cambiar el juego: lanzar un sistema de "cocina fantasma" (ghost kitchen) donde vendes SOLO por domicilio a traves de Rappi, iFood y Domicilios.com con una marca virtual diferente a la tuya. Duplicarias las ventas sin abrir otro local fisico. Pero requiere inversion, distrae recursos de la operacion principal que aun no esta al 100%, y si la competencia lo copia, pierdes la ventaja.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Lanzar la ghost kitchen',
          description: 'Crear marca virtual "Pereira Express" exclusiva para apps de domicilio. Usar tu cocina en horarios de baja demanda. Menu simplificado (5 combos). Comision del 25% para las apps. Inversion en empaque y registro de marca.',
          cost: 8000000,
          revenue: 15000000,
          bsc: { bsc_financial: 2, bsc_customer: 4, bsc_internal: -2, bsc_learning: 6 },
          crossEffects: [
            { area: 'operations', message: 'GHOST KITCHEN: Producir para marca virtual en horarios de baja demanda. Menu simplificado de 5 combos', bsc: { bsc_internal: -3, bsc_customer: 3, bsc_learning: 3 }, cost: 0 },
            { area: 'marketing', message: 'Nueva marca virtual "Pereira Express": crear identidad, fotos de producto y perfil en 3 apps', bsc: { bsc_customer: 4, bsc_learning: 3 }, cost: 0 },
            { area: 'logistics', message: 'Domicilios para ghost kitchen: coordinar con Rappi, iFood y Domicilios.com', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'finance', message: 'Ghost kitchen: comisiones del 25% a apps + inversion en empaque. Punto de equilibrio: 80 pedidos/dia', bsc: { bsc_financial: 1 }, cost: 0 },
            { area: 'innovation', message: 'Innovacion lidera el proyecto de ghost kitchen: primer restaurante virtual del Eje Cafetero', bsc: { bsc_learning: 6 }, cost: 0 }
          ],
          tags: ['ghost_kitchen', 'innovacion', 'marca_virtual', 'domicilios', 'rappi'],
          next: 'ceo_13',
          narrative: '"Pereira Express" aparece en Rappi un martes a las 7pm. A las 8pm ya tiene 12 pedidos. La gente no sabe que es tu restaurante — solo ven una marca nueva con combos a buen precio. La cocina usa su capacidad ociosa de la noche para producir. Es brillante en teoria. En la practica, los primeros dias son un caos: pedidos que salen tarde, empaques equivocados, Rappi que cobra comisiones mas altas de lo acordado. Pero al dia 10, el flujo se estabiliza y los 80 pedidos diarios se cumplen. Innovacion disruptiva en el Eje Cafetero.'
        },
        {
          id: 'B',
          label: 'Estabilizar la operacion actual primero',
          description: 'Rechazar la ghost kitchen por ahora. Dedicar esos recursos a llevar la operacion principal al 100% de eficiencia: cerrar brechas de calidad, mejorar tiempos de servicio, reducir desperdicios. Innovar cuando la base sea solida.',
          cost: 5000000,
          revenue: 4000000,
          bsc: { bsc_financial: 2, bsc_customer: 2, bsc_internal: 5, bsc_learning: 0 },
          crossEffects: [
            { area: 'operations', message: 'Gerencia prioriza estabilidad: inversion en mejora continua de la operacion actual', bsc: { bsc_internal: 5, bsc_customer: 2 }, cost: 0 },
            { area: 'innovation', message: 'Proyecto de ghost kitchen pospuesto. Innovacion redirigida a mejoras incrementales', bsc: { bsc_learning: -2, bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Inversion conservadora en mejora operativa. Menor riesgo, retorno predecible', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['estabilidad', 'mejora_continua', 'prudencia', 'base_solida'],
          next: 'ceo_13',
          narrative: 'La decision de no innovar fue impopular en innovacion pero aplaudida por operaciones y finanzas. Los $5M se usan en mejorar 3 cuellos de botella que venian generando demoras. En 10 dias, el tiempo promedio de servicio baja de 12 a 8 minutos y los desperdicios se reducen un 20%. La operacion principal pasa del 85% al 97% de eficiencia. No es glamoroso, pero los numeros no mienten. A veces la mejor innovacion es hacer lo basico de manera excepcional.'
        },
        {
          id: 'C',
          label: 'Piloto controlado (version minima)',
          description: 'Lanzar la ghost kitchen pero en version minima: solo 1 app (Rappi), solo 3 combos, solo de lunes a jueves, con limite de 30 pedidos/dia. Evaluar en 2 semanas. Si funciona, escalar. Si no, cerrar sin grandes perdidas.',
          cost: 3000000,
          revenue: 6000000,
          bsc: { bsc_financial: 1, bsc_customer: 3, bsc_internal: 0, bsc_learning: 5 },
          crossEffects: [
            { area: 'operations', message: 'Piloto ghost kitchen: 30 pedidos extra/dia de lunes a jueves. Impacto minimo en operacion principal', bsc: { bsc_internal: -1, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Piloto aprobado: innovacion lidera con metricas claras y decision en 2 semanas', bsc: { bsc_learning: 5 }, cost: 0 },
            { area: 'marketing', message: 'Marca virtual minima: solo Rappi, sin gran inversion en branding', bsc: { bsc_customer: 2, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['piloto', 'mvp', 'lean_startup', 'test_rapido', 'ghost_kitchen'],
          next: 'ceo_13',
          narrative: 'El piloto arranca un lunes con 3 combos en Rappi. Dia 1: 8 pedidos. Dia 2: 14. Dia 3: 22. Para el viernes de la primera semana, estas en 28 pedidos — casi en el tope. La operacion principal no se afecta porque los 30 pedidos se hacen en el horario de la tarde (2-5pm) cuando la cocina esta al 40%. Los datos son claros en 10 dias: el concepto funciona. Ahora la pregunta es: ¿escalar o mantener el piloto? Enfoque Lean Startup: medir antes de invertir.'
        }
      ]
    },

    // ========================================================
    //  FASE 5 — DECISIONES FINALES (Dias 37-45)
    // ========================================================

    // --- DIA 37: Pivot o mantener el rumbo ---
    'ceo_13': {
      day: 37,
      title: 'Pivot estrategico o mantener el rumbo',
      context: 'Quedan 8 dias. Los resultados estan sobre la mesa: algunas decisiones funcionaron, otras no tanto. La competencia acaba de lanzar una promocion de "2x1 en hamburguesas" que esta golpeando tus ventas (-12% esta semana). Tu equipo esta dividido: algunos quieren contraatacar con promociones propias, otros dicen que eso es una guerra de precios suicida. ¿Cambias de rumbo o te mantienes firme?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Pivot: contraatacar con promocion agresiva',
          description: 'Lanzar "Combo Pereirano" a $9.900 (bandeja con arroz, frijoles, carne, maduro y aguapanela). Precio por debajo del costo durante 5 dias para recuperar clientes. Guerra de precios total. Si funciona, destruyes el margen de ambos. Si falla, pierdes dinero y reputacion.',
          cost: 15000000,
          revenue: 12000000,
          bsc: { bsc_financial: -5, bsc_customer: 4, bsc_internal: -1, bsc_learning: 1 },
          crossEffects: [
            { area: 'operations', message: 'PROMOCION DE EMERGENCIA: producir "Combo Pereirano" masivo a precio subsidiado', bsc: { bsc_internal: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'marketing', message: 'CONTRAATAQUE: campana agresiva de "Combo Pereirano $9.900" en todos los canales', bsc: { bsc_customer: 5, bsc_financial: -2 }, cost: 0 },
            { area: 'finance', message: 'ALERTA: venta bajo costo por 5 dias. Perdida estimada de $3M. Gerencia asume el riesgo', bsc: { bsc_financial: -5 }, cost: 0 },
            { area: 'logistics', message: 'Abastecer para 40% mas de volumen esta semana. Compras de emergencia', bsc: { bsc_internal: -3 }, cost: 0 }
          ],
          tags: ['pivot', 'guerra_precios', 'promocion', 'agresivo'],
          next: 'ceo_14',
          narrative: 'El "Combo Pereirano" explota: fila de 30 personas el primer dia. Instagram se llena de fotos. Las ventas se disparan un 80%. Pero el costo es brutal: cada combo te cuesta $11.200 y lo vendes a $9.900. Pierdes $1.300 por unidad. En 5 dias vendes 2.300 combos y pierdes casi $3M netos. La competencia responde bajando su 2x1 a "3x1". Esto es un abismo sin fondo. La pregunta: ¿los clientes que vinieron por el combo volveran cuando el precio sea normal?'
        },
        {
          id: 'B',
          label: 'Mantener el rumbo: no caer en guerra de precios',
          description: 'Ignorar la promocion de la competencia. Enfocarse en lo que te diferencia: calidad, servicio, experiencia. Comunicar "Nosotros no competimos por precio, competimos por sabor". Perder clientes de precio pero retener los de valor.',
          cost: 0,
          revenue: -3000000,
          bsc: { bsc_financial: 1, bsc_customer: -2, bsc_internal: 3, bsc_learning: 4 },
          crossEffects: [
            { area: 'marketing', message: 'Gerencia dice: NO a la guerra de precios. Reposicionar la marca como premium de comida rapida', bsc: { bsc_customer: -1, bsc_learning: 3 }, cost: 0 },
            { area: 'operations', message: 'Mantener calidad y consistencia. No cambiar nada en la operacion por la promocion rival', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'finance', message: 'Margenes protegidos. Las ventas bajan pero la rentabilidad por plato se mantiene', bsc: { bsc_financial: 3 }, cost: 0 }
          ],
          tags: ['firmeza', 'marca', 'no_guerra_precios', 'largo_plazo'],
          next: 'ceo_14',
          narrative: 'Duro. Las ventas caen un 12% y el equipo esta nervioso. Los meseros reportan que los clientes preguntan "¿ustedes no tienen promocion?" y se van. Pero los que se quedan piden platos premium y dejan buenas resenas. Tu ticket promedio sube un 8% porque los "clientes de precio" se fueron y quedaron los "clientes de valor". En 7 dias, la competencia retira su 2x1 porque los margenes se destruyeron. Tu vuelves al nivel de ventas anterior pero con una base de clientes mas leal y un margen intacto. Paciencia: la virtud mas dificil en los negocios.'
        },
        {
          id: 'C',
          label: 'Diferenciarse: crear experiencia unica',
          description: 'En vez de bajar precios, subir la experiencia. Invertir en musica en vivo los viernes, un mural de un artista local, y un "menu secreto" que solo conoces si sigues la marca en Instagram. Hacer que la gente venga por la experiencia, no por el precio.',
          cost: 6000000,
          revenue: 8000000,
          bsc: { bsc_financial: 0, bsc_customer: 5, bsc_internal: 2, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'Estrategia experiencial: musica en vivo, menu secreto, storytelling. Contenido organico potencial', bsc: { bsc_customer: 5, bsc_learning: 3 }, cost: 0 },
            { area: 'innovation', message: 'Menu secreto de 3 platos: innovacion crea recetas exclusivas que rotan cada semana', bsc: { bsc_learning: 5, bsc_customer: 3 }, cost: 0 },
            { area: 'hr', message: 'El equipo se emociona con la musica en vivo y el arte: el ambiente de trabajo mejora', bsc: { bsc_internal: 3 }, cost: 0 },
            { area: 'operations', message: 'Menu secreto agrega complejidad: 3 platos adicionales que rotan. Requiere flexibilidad en cocina', bsc: { bsc_internal: -1, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['experiencia', 'diferenciacion', 'menu_secreto', 'arte', 'musica'],
          next: 'ceo_14',
          narrative: 'El viernes suena musica de un duo acustico local mientras los clientes comen. El mural del artista pereirano se vuelve el fondo de selfie mas popular del barrio. El "menu secreto" genera FOMO: la gente sigue la cuenta de Instagram solo para descubrir el plato secreto de la semana. En 5 dias, tus seguidores suben un 35%. Las ventas no solo se recuperan del -12%, sino que suben un 5% por encima del nivel anterior a la crisis. No competiste por precio — competiste por emociones. Y las emociones no tienen 2x1.'
        }
      ]
    },

    // --- DIA 40: Reasignacion de emergencia ---
    'ceo_14': {
      day: 40,
      title: 'Reasignacion de recursos de emergencia',
      context: 'Dia 40 de 45: recta final. Tienes los puntajes BSC de todas las areas frente a ti. Hay un area que esta muy por debajo de las demas — esta arrastrando el puntaje global de la empresa. Tienes $15M en reserva (o lo que quede). ¿Los inyectas al area debil o refuerzas al area mas fuerte para maximizar el puntaje total?',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Rescatar al area mas debil',
          description: 'Inyectar $15M al area con peor desempeno. Contratar ayuda externa, comprar recursos urgentes, y poner tu atencion personal como gerente en esa area los ultimos 5 dias. Nivelar hacia arriba.',
          cost: 15000000,
          revenue: 5000000,
          bsc: { bsc_financial: -3, bsc_customer: 2, bsc_internal: 4, bsc_learning: 3 },
          crossEffects: [
            { area: 'operations', message: 'EMERGENCIA GERENCIAL: recursos extra para el area mas debil. Operaciones apoya con personal', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Inyeccion de emergencia de $15M. Reserva de caja agotada. Sin margen para mas imprevistos', bsc: { bsc_financial: -4 }, cost: 0 },
            { area: 'hr', message: 'Gerencia enfocada en el area debil: RRHH coordina apoyo temporal de todas las areas', bsc: { bsc_internal: 3, bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['rescate', 'nivelacion', 'emergencia', 'area_debil'],
          next: 'ceo_15',
          narrative: 'Metes toda la reserva en el area que mas sufre. Los otros jefes de area entienden: "Si un eslabón se rompe, la cadena entera falla". En 5 dias, el area debil sube un 25% en sus KPIs. No alcanza a ser la mejor, pero deja de ser el lastre. El puntaje global de la empresa mejora significativamente. El riesgo: si aparece otro imprevisto, no hay colchon. Todo depende de que los ultimos 5 dias sean tranquilos.'
        },
        {
          id: 'B',
          label: 'Potenciar al area mas fuerte',
          description: 'Invertir $15M en el area con mejor desempeno para que sea espectacular. La logica: maximizar donde ya se es bueno genera mayor retorno. Las areas debiles se mantienen con lo que tienen.',
          cost: 15000000,
          revenue: 10000000,
          bsc: { bsc_financial: -1, bsc_customer: 3, bsc_internal: 1, bsc_learning: 2 },
          crossEffects: [
            { area: 'finance', message: 'Inyeccion de $15M en area estrella. Alta probabilidad de retorno positivo', bsc: { bsc_financial: -1 }, cost: 0 },
            { area: 'hr', message: 'El area estrella recibe mas recursos: las demas areas sienten desbalance. Moral mixta', bsc: { bsc_internal: -2, bsc_learning: 1 }, cost: 0 }
          ],
          tags: ['potenciar', 'area_fuerte', 'maximizar', 'retorno'],
          next: 'ceo_15',
          narrative: 'Duplicas la apuesta en tu area estrella. Los resultados son impresionantes: esa area se convierte en referencia. Pero el contraste con el area debil se hace mas evidente. Es como tener un delantero goleador y un portero que no ataja nada. El puntaje total no sube tanto como esperabas porque el BSC premia el equilibrio entre perspectivas. Leccion: en el Balanced Scorecard, la palabra clave es "balanced".'
        },
        {
          id: 'C',
          label: 'Distribucion equitativa',
          description: 'Repartir $15M entre las 6 areas ($2.5M cada una) para un empujon final parejo. Ninguna area recibe trato especial. Democracia presupuestaria.',
          cost: 15000000,
          revenue: 7000000,
          bsc: { bsc_financial: -2, bsc_customer: 2, bsc_internal: 3, bsc_learning: 2 },
          crossEffects: [
            { area: 'operations', message: 'Bono final de gerencia: $2.5M para mejoras de ultimo momento', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'finance', message: 'Distribucion equitativa de $15M entre 6 areas. Impacto moderado en cada una', bsc: { bsc_financial: -1 }, cost: 0 },
            { area: 'marketing', message: 'Bono final: $2.5M para campana de cierre de temporada', bsc: { bsc_customer: 2 }, cost: 0 },
            { area: 'logistics', message: 'Bono final: $2.5M para optimizacion de ultima milla', bsc: { bsc_internal: 1 }, cost: 0 },
            { area: 'hr', message: 'Distribucion justa: todas las areas reciben lo mismo. Moral estable', bsc: { bsc_internal: 2 }, cost: 0 },
            { area: 'innovation', message: 'Bono final: $2.5M para cerrar proyectos pendientes de I+D', bsc: { bsc_learning: 2 }, cost: 0 }
          ],
          tags: ['equitativo', 'democracia', 'parejo', 'final'],
          next: 'ceo_15',
          narrative: 'Cada area recibe $2.5M. Es justo pero no transformador. Ningun area da un salto espectacular ni se hunde. El resultado final es previsible: mejoras marginales en todas partes. Algunos jefes de area agradecen la equidad, otros hubieran preferido una apuesta mas audaz. Es la decision mas "segura" pero tambien la menos memorable. ¿El liderazgo se trata de ser justo o de ser estrategico?'
        }
      ]
    },

    // --- DIA 43: Decision de legado ---
    'ceo_15': {
      day: 43,
      title: 'El legado de tu gerencia',
      context: 'Ultimo nodo de decision. Faltan 2 dias para que termine la simulacion. Como gerente general, la ultima decision es la mas trascendente: ¿que tipo de empresa quieres dejar? No se trata de numeros — se trata de identidad. Esta decision no tiene "respuesta correcta" porque refleja tu filosofia de liderazgo. Los 45 dias quedaran marcados por esta ultima senial.',
      type: 'choice',
      multiMax: null,
      options: [
        {
          id: 'A',
          label: 'Legado de resultados financieros',
          description: 'Dejar la empresa con las finanzas mas solidas posibles: maximizar caja, minimizar deuda, cerrar con numeros azules. Que los numeros hablen. El gerente se mide por resultados.',
          cost: 0,
          revenue: 5000000,
          bsc: { bsc_financial: 7, bsc_customer: 0, bsc_internal: 1, bsc_learning: 0 },
          crossEffects: [
            { area: 'finance', message: 'DIRECTRIZ FINAL: Cerrar con la mayor caja posible. Cobrar todo, pagar lo justo, cortar gastos innecesarios', bsc: { bsc_financial: 6 }, cost: 0 },
            { area: 'operations', message: 'Ultimo esfuerzo: produccion al maximo, desperdicios al minimo. Cada peso cuenta', bsc: { bsc_internal: 2, bsc_financial: 2 }, cost: 0 },
            { area: 'marketing', message: 'Ultima campana enfocada en ventas directas, no en branding. ROI inmediato', bsc: { bsc_financial: 2, bsc_customer: 1 }, cost: 0 }
          ],
          tags: ['legado', 'resultados', 'financiero', 'numeros', 'ROI'],
          next: null,
          narrative: 'Tu legado: una empresa que cierra con numeros solidos. La caja esta llena, la deuda controlada, los margenes sanos. Cuando la junta revise los resultados, van a ver un gerente que supo cuidar el dinero. Pero algunos empleados comentan en voz baja: "Se enfoco tanto en los numeros que a veces se le olvidaba que detras habia personas". Tu filosofia quedo clara: primero la supervivencia financiera, todo lo demas es secundario. ¿Tenias razon? Los numeros diran que si. El equipo... quiza no tanto.'
        },
        {
          id: 'B',
          label: 'Legado de cultura y equipo',
          description: 'Invertir los ultimos dias en fortalecer el equipo: evento de integracion, reconocimientos individuales, carta de agradecimiento a cada empleado, y documentar la cultura que construiste. Que la gente recuerde que aqui se trabajo bien y se trato bien.',
          cost: 5000000,
          revenue: 0,
          bsc: { bsc_financial: -1, bsc_customer: 2, bsc_internal: 5, bsc_learning: 7 },
          crossEffects: [
            { area: 'hr', message: 'LEGADO: Evento de cierre con reconocimientos. El gerente escribe carta personal a cada empleado', bsc: { bsc_internal: 6, bsc_learning: 6 }, cost: 0 },
            { area: 'operations', message: 'El equipo de cocina recibe reconocimiento publico por 45 dias de trabajo intenso', bsc: { bsc_internal: 4, bsc_learning: 2 }, cost: 0 },
            { area: 'innovation', message: 'Se documenta el aprendizaje de 45 dias: que funciono, que no, que hariamos diferente', bsc: { bsc_learning: 5 }, cost: 0 },
            { area: 'marketing', message: 'Campana de cierre humanizada: fotos del equipo, historias reales, gratitud publica', bsc: { bsc_customer: 3, bsc_internal: 2 }, cost: 0 }
          ],
          tags: ['legado', 'cultura', 'equipo', 'personas', 'gratitud'],
          next: null,
          narrative: 'El ultimo dia, reunes a los 45 empleados. Lees una carta donde mencionas a cada area por nombre, cada logro y cada aprendizaje. Varios lloran. El cocinero que casi renuncia en la semana 3 dice: "Nunca habia trabajado con un jefe asi". Documentas todo en un manual de cultura que el proximo gerente pueda usar. Los numeros no son los mejores de la competencia, pero cuando preguntan "¿donde quieren trabajar?", los empleados de tu cadena dicen "aqui". El legado no se mide en pesos — se mide en personas que crecieron contigo.'
        },
        {
          id: 'C',
          label: 'Legado de innovacion y aprendizaje',
          description: 'Documentar todas las innovaciones, crear un "libro de jugadas" con las mejores practicas, y dejar proyectos en marcha que el siguiente gerente pueda continuar. Que la empresa sea mas inteligente de lo que era cuando llegaste.',
          cost: 3000000,
          revenue: 2000000,
          bsc: { bsc_financial: 0, bsc_customer: 1, bsc_internal: 3, bsc_learning: 8 },
          crossEffects: [
            { area: 'innovation', message: 'LEGADO: Documentar todas las innovaciones y crear "playbook" de la empresa', bsc: { bsc_learning: 7 }, cost: 0 },
            { area: 'operations', message: 'Crear manuales de procesos optimizados para que el proximo equipo no empiece de cero', bsc: { bsc_internal: 3, bsc_learning: 4 }, cost: 0 },
            { area: 'hr', message: 'Programa de mentoria: cada jefe de area documenta sus aprendizajes para el sucesor', bsc: { bsc_learning: 5, bsc_internal: 1 }, cost: 0 },
            { area: 'finance', message: 'Dashboard financiero con KPIs automatizados como legado para el proximo gerente financiero', bsc: { bsc_learning: 3, bsc_financial: 1 }, cost: 0 }
          ],
          tags: ['legado', 'innovacion', 'aprendizaje', 'conocimiento', 'playbook'],
          next: null,
          narrative: 'Tu legado es un "libro de jugadas" de 45 dias: que decisiones se tomaron, por que, que resultado tuvieron, y que harias diferente. Cada area documenta sus procesos, errores y mejores practicas. El proximo gerente no empieza de cero — empieza donde tu dejaste. La empresa es mas inteligente que hace 45 dias: sabe pronosticar demanda, gestionar proveedores, manejar crisis, y tomar decisiones con datos. Peter Senge lo llamaria una "organizacion que aprende". Tu legado no es un numero — es conocimiento.'
        },
        {
          id: 'D',
          label: 'Legado de impacto social',
          description: 'Dejar la empresa conectada con la comunidad: alianza con fundacion local, programa de primer empleo para jovenes de estratos 1-2, donacion del 2% de ventas del ultimo dia a banco de alimentos de Pereira. Que la empresa sirva para algo mas que ganar plata.',
          cost: 6000000,
          revenue: 3000000,
          bsc: { bsc_financial: -2, bsc_customer: 5, bsc_internal: 3, bsc_learning: 5 },
          crossEffects: [
            { area: 'marketing', message: 'LEGADO SOCIAL: Campana de cierre con donacion al banco de alimentos. PR positiva masiva', bsc: { bsc_customer: 6, bsc_learning: 2 }, cost: 0 },
            { area: 'hr', message: 'Programa de primer empleo: alianza con SENA Pereira para formar jovenes vulnerables', bsc: { bsc_learning: 5, bsc_internal: 2, bsc_customer: 2 }, cost: 0 },
            { area: 'finance', message: 'Donacion del 2% de ventas + costo del programa social. Impacto financiero negativo pero reputacional positivo', bsc: { bsc_financial: -2, bsc_customer: 3 }, cost: 0 },
            { area: 'operations', message: 'Jornada de capacitacion a jovenes del SENA en la cocina: impacto social + talento futuro', bsc: { bsc_learning: 4, bsc_customer: 1 }, cost: 0 },
            { area: 'logistics', message: 'Logistica coordina entrega de alimentos no vendidos a banco de alimentos en vez de desperdiciarlos', bsc: { bsc_customer: 2, bsc_internal: 1 }, cost: 0 }
          ],
          tags: ['legado', 'impacto_social', 'comunidad', 'responsabilidad', 'sena'],
          next: null,
          narrative: 'El ultimo dia, un grupo de 8 jovenes del SENA Pereira visita tu cocina para aprender. Uno de ellos, de 18 anos, te dice: "Es la primera vez que alguien me deja entrar a una cocina profesional". La donacion al banco de alimentos genera cobertura en RCN Pereira. Los vecinos del barrio — incluso los que se quejaron del ruido — reconocen que tu empresa aportó al barrio. La junta dice: "Los numeros pudieron ser mejores". Tu respondes: "Los numeros miden el pasado, el impacto mide el futuro". No todos estan de acuerdo. Pero el joven del SENA va a recordar este dia por siempre.'
        }
      ]
    }
  }
};
