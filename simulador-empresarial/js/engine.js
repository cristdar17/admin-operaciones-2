/* ============================================================
   ENGINE - Motor del juego: árboles, rotación, carga, gerente
   ============================================================ */
const Engine = (() => {

  // Todas las áreas funcionales (se agregan dinámicamente al cargar trees)
  const AREA_CODES = ['operations', 'finance', 'marketing', 'hr', 'logistics', 'innovation'];
  const ALL_ROLES = [...AREA_CODES, 'gerente'];

  /* ----------------------------------------------------------
     Obtener el árbol de un área
  ---------------------------------------------------------- */
  function getTree(areaCode) {
    const map = {
      operations: window.TREE_OPERATIONS,
      finance:    window.TREE_FINANCE,
      marketing:  window.TREE_MARKETING,
      hr:         window.TREE_HR,
      logistics:  window.TREE_LOGISTICS,
      innovation: window.TREE_INNOVATION,
      gerente:    window.TREE_GERENTE
    };
    return map[areaCode] || null;
  }

  /* ----------------------------------------------------------
     Obtener nodo actual de un área para una empresa
  ---------------------------------------------------------- */
  function getCurrentNode(areaCode, currentNodeId) {
    const tree = getTree(areaCode);
    if (!tree) return null;
    const nodeId = currentNodeId || tree.startNode;
    return tree.nodes[nodeId] || null;
  }

  /* ----------------------------------------------------------
     Determinar qué áreas tienen decisión hoy
     - No todas las áreas deciden todos los días
     - Las áreas con 1 solo miembro descansan cada 2 decisiones
  ---------------------------------------------------------- */
  function getActiveAreas(day, areas, students) {
    const active = [];

    ALL_ROLES.forEach(code => {
      const tree = getTree(code);
      if (!tree) return;

      // Buscar si hay un nodo para hoy o el nodo actual pendiente
      // Recorrer todos los nodos y encontrar los que aplican para este día
      const currentNodeId = code === 'gerente' ? null :
        areas.find(a => a.area_code === code)?.current_node;

      const node = getCurrentNode(code, currentNodeId);
      if (!node) return;

      // El nodo aplica si su día coincide o si es el nodo pendiente
      if (node.day <= day) {
        active.push(code);
      }
    });

    return active;
  }

  /* ----------------------------------------------------------
     Calendario de decisiones por área
     Retorna { areaCode: [day1, day2, ...] }
  ---------------------------------------------------------- */
  function getDecisionSchedule() {
    const schedule = {};
    ALL_ROLES.forEach(code => {
      const tree = getTree(code);
      if (!tree) return;
      const days = new Set();
      Object.values(tree.nodes).forEach(n => days.add(n.day));
      schedule[code] = [...days].sort((a, b) => a - b);
    });
    return schedule;
  }

  /* ----------------------------------------------------------
     Verificar si un área debe descansar hoy
     (áreas con 1 solo miembro descansan cada 3 decisiones)
  ---------------------------------------------------------- */
  function shouldRest(areaCode, companyId, students, decisions) {
    // Descanso deshabilitado - causaba deadlocks.
    // El balanceo se maneja naturalmente porque no todas las áreas
    // tienen decisiones todos los días.
    return false;
  }

  /* ----------------------------------------------------------
     Rotación de decisor dentro del área
     Retorna el student que debe decidir hoy
  ---------------------------------------------------------- */
  function getDecisionMaker(areaCode, companyId, students, day) {
    const members = students
      .filter(s => s.company_id === companyId && s.area_code === areaCode)
      .sort((a, b) => new Date(a.joined_at) - new Date(b.joined_at));

    if (members.length === 0) return null;
    if (members.length === 1) return members[0];

    // Rotación basada en el día
    const idx = (day - 1) % members.length;
    return members[idx];
  }

  /* ----------------------------------------------------------
     Calcular efectos de una opción seleccionada
  ---------------------------------------------------------- */
  function calculateEffects(option) {
    return {
      cost: option.cost || 0,
      revenue: option.revenue || 0,
      bsc: option.bsc || {},
      crossEffects: option.crossEffects || [],
      tags: option.tags || [],
      narrative: option.narrative || '',
      next: option.next
    };
  }

  /* ----------------------------------------------------------
     Para tipo 'multi': calcular efectos combinados
  ---------------------------------------------------------- */
  function calculateMultiEffects(selectedOptions) {
    const combined = {
      cost: 0, revenue: 0,
      bsc: { bsc_financial: 0, bsc_customer: 0, bsc_internal: 0, bsc_learning: 0 },
      crossEffects: [],
      tags: [],
      narratives: [],
      next: null
    };

    selectedOptions.forEach(opt => {
      combined.cost += opt.cost || 0;
      combined.revenue += opt.revenue || 0;
      Object.keys(opt.bsc || {}).forEach(k => {
        combined.bsc[k] = (combined.bsc[k] || 0) + (opt.bsc[k] || 0);
      });
      combined.crossEffects.push(...(opt.crossEffects || []));
      combined.tags.push(...(opt.tags || []));
      combined.narratives.push(opt.narrative);
      if (opt.next) combined.next = opt.next; // Último next gana
    });

    combined.narrative = combined.narratives.join(' ');
    return combined;
  }

  /* ----------------------------------------------------------
     MECÁNICA DEL GERENTE
  ---------------------------------------------------------- */

  // El gerente puede ver todas las decisiones pendientes de su empresa
  function getGerenteOverview(companyId, areas, decisions, day) {
    return AREA_CODES.map(code => {
      const area = areas.find(a => a.company_id === companyId && a.area_code === code);
      const lastDecision = decisions
        .filter(d => d.company_id === companyId && d.area_code === code)
        .sort((a, b) => b.day - a.day)[0];

      const tree = getTree(code);
      const currentNode = area ? getCurrentNode(code, area.current_node) : null;

      return {
        area_code: code,
        area_name: tree?.name || code,
        icon: tree?.icon || '❓',
        budget: area?.budget || 0,
        spent: area?.spent || 0,
        revenue: area?.revenue || 0,
        bsc: {
          financial: area?.bsc_financial || 50,
          customer: area?.bsc_customer || 50,
          internal: area?.bsc_internal || 50,
          learning: area?.bsc_learning || 50
        },
        lastDecision: lastDecision ? {
          day: lastDecision.day,
          choice: lastDecision.choice,
          narrative: lastDecision.narrative
        } : null,
        pendingDecision: currentNode && currentNode.day <= day,
        hasDecided: decisions.some(d => d.company_id === companyId && d.area_code === code && d.day === day)
      };
    });
  }

  // Veto del gerente: puede revertir la última decisión de un área
  // (cuesta un % del costo original como penalización)
  function calculateVetoCost(originalDecision) {
    const penalty = Math.round(Math.abs(originalDecision.cost_amount || 0) * 0.3);
    return Math.max(penalty, 5000000); // Mínimo $5M de penalización por veto
  }

  /* ----------------------------------------------------------
     Progreso del árbol para visualización
  ---------------------------------------------------------- */
  function getTreeProgress(areaCode, companyId, decisions) {
    const tree = getTree(areaCode);
    if (!tree) return { nodes: [], edges: [], visited: [], current: null };

    const visited = new Set();
    const areaDecisions = decisions
      .filter(d => d.company_id === companyId && d.area_code === areaCode)
      .sort((a, b) => a.day - b.day);

    // Reconstruir camino
    const path = [];
    let currentId = tree.startNode;
    areaDecisions.forEach(d => {
      visited.add(d.node_id);
      path.push({ from: currentId, to: d.node_id, choice: d.choice });
      // Buscar a dónde lleva esta decisión
      const node = tree.nodes[d.node_id];
      if (node) {
        const opt = node.options.find(o => o.id === d.choice);
        if (opt && opt.next) currentId = opt.next;
      }
    });

    // Construir lista de todos los nodos con posiciones
    const allNodes = Object.entries(tree.nodes).map(([id, node]) => ({
      id,
      day: node.day,
      title: node.title,
      visited: visited.has(id),
      current: id === currentId && !visited.has(id)
    }));

    return { allNodes, path, currentId, visited: [...visited] };
  }

  /* ----------------------------------------------------------
     Distribución de estudiantes por áreas
     Asegurar mínimo 1 por área activa
  ---------------------------------------------------------- */
  function validateDistribution(students, companyId) {
    const counts = {};
    ALL_ROLES.forEach(r => counts[r] = 0);
    students
      .filter(s => s.company_id === companyId)
      .forEach(s => { counts[s.area_code] = (counts[s.area_code] || 0) + 1; });

    const warnings = [];
    AREA_CODES.forEach(code => {
      if (counts[code] === 0) {
        warnings.push(`⚠️ ${code} no tiene integrantes`);
      }
    });
    if (counts.gerente === 0) {
      warnings.push('⚠️ No hay Gerente General asignado');
    }
    if (counts.gerente > 1) {
      warnings.push('⚠️ Solo puede haber 1 Gerente General');
    }
    return { counts, warnings };
  }

  /* ----------------------------------------------------------
     Calcular score final de una empresa
  ---------------------------------------------------------- */
  function calculateFinalScore(company, areas) {
    const companyAreas = areas.filter(a => a.company_id === company.id);

    // Utilidad neta
    const netProfit = company.total_revenue - company.total_costs;

    // BSC promedio ponderado
    const w = CONFIG.BSC_WEIGHTS;
    const bscScore =
      company.bsc_financial * w.financial +
      company.bsc_customer * w.customer +
      company.bsc_internal * w.internal +
      company.bsc_learning * w.learning;

    // ROI por área
    const areaROIs = companyAreas.map(a => ({
      area: a.area_code,
      roi: a.spent > 0 ? ((a.revenue - a.spent) / a.spent * 100) : 0
    }));

    // Score compuesto: 50% utilidad + 30% BSC + 20% salud de áreas
    const profitScore = Math.min(100, Math.max(0, 50 + (netProfit / CONFIG.INITIAL_CASH) * 50));
    const areaHealth = companyAreas.reduce((sum, a) => {
      const remaining = a.budget - a.spent + a.revenue;
      return sum + (remaining > 0 ? 1 : 0);
    }, 0) / companyAreas.length * 100;

    const finalScore = profitScore * 0.5 + bscScore * 0.3 + areaHealth * 0.2;

    return {
      netProfit,
      bscScore: Math.round(bscScore),
      areaROIs,
      areaHealth: Math.round(areaHealth),
      finalScore: Math.round(finalScore)
    };
  }

  /* ----------------------------------------------------------
     Auto-decisión cuando se acaba el tiempo
     (elige la opción menos costosa como default)
  ---------------------------------------------------------- */
  function getDefaultChoice(node) {
    if (!node || !node.options || node.options.length === 0) return null;
    // Elegir la opción con menor costo neto
    return node.options.reduce((best, opt) => {
      const net = (opt.cost || 0) - (opt.revenue || 0);
      const bestNet = (best.cost || 0) - (best.revenue || 0);
      return net < bestNet ? opt : best;
    });
  }

  return {
    AREA_CODES,
    ALL_ROLES,
    getTree,
    getCurrentNode,
    getActiveAreas,
    getDecisionSchedule,
    shouldRest,
    getDecisionMaker,
    calculateEffects,
    calculateMultiEffects,
    getGerenteOverview,
    calculateVetoCost,
    getTreeProgress,
    validateDistribution,
    calculateFinalScore,
    getDefaultChoice
  };
})();
