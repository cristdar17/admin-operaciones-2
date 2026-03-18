# SOLUCIÓN — Modelo de Programación Lineal
## "Tu Primer Día como Jefe de Operaciones"
### Documento exclusivo para el docente

---

## 1. Variables de Decisión

El problema tiene **dos dimensiones clave**: campaña × turno × nivel del asesor.

**Campañas**: Ventas (V), Soporte (S), Retención (R), Cobranzas (C)
**Turnos**: Mañana (M), Tarde (T), Noche (N)
**Niveles**: Junior (x), Senior (y)

**IMPORTANTE**: Ventas y Retención NO operan de noche. Esto elimina 8 variables.

### Variables activas (20 en total):

| Variable | Descripción |
|----------|-------------|
| x_VM | Juniors en Ventas, turno Mañana |
| x_VT | Juniors en Ventas, turno Tarde |
| y_VM | Seniors en Ventas, turno Mañana |
| y_VT | Seniors en Ventas, turno Tarde |
| x_SM | Juniors en Soporte, turno Mañana |
| x_ST | Juniors en Soporte, turno Tarde |
| x_SN | Juniors en Soporte, turno Noche |
| y_SM | Seniors en Soporte, turno Mañana |
| y_ST | Seniors en Soporte, turno Tarde |
| y_SN | Seniors en Soporte, turno Noche |
| x_RM | Juniors en Retención, turno Mañana |
| x_RT | Juniors en Retención, turno Tarde |
| y_RM | Seniors en Retención, turno Mañana |
| y_RT | Seniors en Retención, turno Tarde |
| x_CM | Juniors en Cobranzas, turno Mañana |
| x_CT | Juniors en Cobranzas, turno Tarde |
| x_CN | Juniors en Cobranzas, turno Noche |
| y_CM | Seniors en Cobranzas, turno Mañana |
| y_CT | Seniors en Cobranzas, turno Tarde |
| y_CN | Seniors en Cobranzas, turno Noche |

---

## 2. Cálculo de Salarios (Coeficientes)

**Datos base:**
- Junior día (M o T): $1,400,000
- Senior día (M o T): $2,200,000
- Recargo nocturno: 35%

**Cálculos:**
- Junior noche: $1,400,000 × 1.35 = **$1,890,000**
- Senior noche: $2,200,000 × 1.35 = **$2,970,000**

---

## 3. Función Objetivo

**Minimizar** el costo total mensual de nómina:

```
Min Z = 1,400,000 (x_VM + x_VT + x_SM + x_ST + x_RM + x_RT + x_CM + x_CT)
      + 1,890,000 (x_SN + x_CN)
      + 2,200,000 (y_VM + y_VT + y_SM + y_ST + y_RM + y_RT + y_CM + y_CT)
      + 2,970,000 (y_SN + y_CN)
```

Agrupado por coeficiente:
- **$1,400,000** × (8 variables: todos los juniors diurnos)
- **$1,890,000** × (2 variables: juniors nocturnos de Soporte y Cobranzas)
- **$2,200,000** × (8 variables: todos los seniors diurnos)
- **$2,970,000** × (2 variables: seniors nocturnos de Soporte y Cobranzas)

---

## 4. Restricciones

### 4.1 Restricciones Contractuales — Mínimos por Campaña

**(R1)** Ventas total ≥ 30:
```
x_VM + x_VT + y_VM + y_VT ≥ 30
```

**(R2)** Soporte total ≥ 28:
```
x_SM + x_ST + x_SN + y_SM + y_ST + y_SN ≥ 28
```

**(R3)** Retención total ≥ 20:
```
x_RM + x_RT + y_RM + y_RT ≥ 20
```

**(R4)** Cobranzas total ≥ 22:
```
x_CM + x_CT + x_CN + y_CM + y_CT + y_CN ≥ 22
```

### 4.2 Restricciones Contractuales — Mínimos por Turno Específico

**(R5)** Ventas en la tarde ≥ 14:
```
x_VT + y_VT ≥ 14
```

**(R6)** Soporte mañana ≥ 8:
```
x_SM + y_SM ≥ 8
```

**(R7)** Soporte tarde ≥ 8:
```
x_ST + y_ST ≥ 8
```

**(R8)** Soporte noche ≥ 8:
```
x_SN + y_SN ≥ 8
```

**(R9)** Retención mañana ≥ 9:
```
x_RM + y_RM ≥ 9
```

**(R10)** Cobranzas mañana ≥ 10:
```
x_CM + y_CM ≥ 10
```

### 4.3 Restricciones de Calidad — Porcentaje de Seniors (30% por campaña)

La condición "al menos 30% seniors" se traduce así:

> seniors ≥ 0.30 × (juniors + seniors)
> seniors ≥ 0.30 × juniors + 0.30 × seniors
> 0.70 × seniors ≥ 0.30 × juniors
> **7 × seniors ≥ 3 × juniors** (multiplicando por 10 para evitar decimales)

**(R11)** Ventas — 30% seniors:
```
7(y_VM + y_VT) ≥ 3(x_VM + x_VT)
```
Forma estándar: `7·y_VM + 7·y_VT - 3·x_VM - 3·x_VT ≥ 0`

**(R12)** Soporte — 30% seniors:
```
7(y_SM + y_ST + y_SN) ≥ 3(x_SM + x_ST + x_SN)
```

**(R13)** Retención — 30% seniors:
```
7(y_RM + y_RT) ≥ 3(x_RM + x_RT)
```

**(R14)** Cobranzas — 30% seniors:
```
7(y_CM + y_CT + y_CN) ≥ 3(x_CM + x_CT + x_CN)
```

### 4.4 Restricción Inter-Campaña — Seniors de Ventas vs Retención

**(R15)** Ventas debe tener al menos 5 seniors más que Retención:
```
(y_VM + y_VT) - (y_RM + y_RT) ≥ 5
```
Forma estándar: `y_VM + y_VT - y_RM - y_RT ≥ 5`

### 4.5 Restricciones de Mercado Laboral

**(R16)** Máximo 65 juniors disponibles:
```
x_VM + x_VT + x_SM + x_ST + x_SN + x_RM + x_RT + x_CM + x_CT + x_CN ≤ 65
```

**(R17)** Máximo 40 seniors disponibles:
```
y_VM + y_VT + y_SM + y_ST + y_SN + y_RM + y_RT + y_CM + y_CT + y_CN ≤ 40
```

### 4.6 Restricciones Operativas — Capacidad de Sede

**(R18)** Máximo 45 personas por turno — Mañana:
```
x_VM + y_VM + x_SM + y_SM + x_RM + y_RM + x_CM + y_CM ≤ 45
```

**(R19)** Máximo 45 personas por turno — Tarde:
```
x_VT + y_VT + x_ST + y_ST + x_RT + y_RT + x_CT + y_CT ≤ 45
```

**(R20)** Máximo 45 personas por turno — Noche:
```
x_SN + y_SN + x_CN + y_CN ≤ 45
```
*(Esta restricción es redundante con R21, pero es válida incluirla)*

### 4.7 Restricción Operativa — Tope Nocturno

**(R21)** Máximo 25 personas en turno noche:
```
x_SN + y_SN + x_CN + y_CN ≤ 25
```

### 4.8 Restricción Presupuestal

**(R22)** Nómina mensual ≤ $185,000,000:
```
1,400,000(x_VM + x_VT + x_SM + x_ST + x_RM + x_RT + x_CM + x_CT)
+ 1,890,000(x_SN + x_CN)
+ 2,200,000(y_VM + y_VT + y_SM + y_ST + y_RM + y_RT + y_CM + y_CT)
+ 2,970,000(y_SN + y_CN) ≤ 185,000,000
```

### 4.9 Restricciones de No Negatividad e Integralidad

**(R23)** Todas las variables ≥ 0

**(R24)** Todas las variables son **enteras** (no se puede contratar fracciones de persona)

---

## 5. Resumen del Modelo

| Elemento | Cantidad |
|----------|----------|
| Variables de decisión | **20** |
| Función objetivo | **Minimizar** costo de nómina |
| Restricciones de mínimo por campaña | 4 (R1-R4) |
| Restricciones de mínimo por turno específico | 6 (R5-R10) |
| Restricciones de calidad (30% seniors) | 4 (R11-R14) |
| Restricción inter-campaña | 1 (R15) |
| Restricciones de mercado laboral | 2 (R16-R17) |
| Restricciones de capacidad de sede | 3 (R18-R20) |
| Restricción de tope nocturno | 1 (R21) |
| Restricción presupuestal | 1 (R22) |
| No negatividad e integralidad | 2 (R23-R24) |
| **Total de restricciones** | **24** |

---

## 6. Errores Comunes que van a Cometer los Estudiantes

1. **Definir 24 variables en vez de 20**: Olvidan que Ventas y Retención no operan de noche. Las 4 variables nocturnas de estas campañas no existen.

2. **No calcular el recargo nocturno**: Se les dice el porcentaje (35%) y el salario base, pero deben hacer la multiplicación. Muchos ponen $1,400,000 para todos los juniors.

3. **Escribir mal las restricciones de porcentaje**: La restricción "30% seniors" es la más complicada de linealizar. Muchos escriben `y ≥ 0.3` en vez de `y ≥ 0.3(x+y)`, o no la pasan bien a forma estándar.

4. **Olvidar la restricción inter-campaña**: El dato de "5 seniors más en Ventas que en Retención" está casi al final del monólogo y es fácil de pasar por alto.

5. **Olvidar la restricción de capacidad por turno**: Se enfocan en los mínimos por campaña y olvidan que hay un límite físico de 45 puestos por turno.

6. **Confundir minimizar con maximizar**: Algunos piensan en maximizar algo (productividad, ventas), pero el gerente pidió explícitamente minimizar el costo de nómina cumpliendo todas las exigencias.

7. **Olvidar integralidad**: Muchos formulan todo bien pero olvidan que las variables deben ser enteras.

---

## 7. Rúbrica de Calificación Detallada

### Variables (20 pts)
- 20 variables correctamente definidas con nomenclatura clara: **20 pts**
- 20 variables pero nomenclatura confusa: **15 pts**
- Incluyen variables nocturnas de Ventas/Retención (error): **-5 pts**
- Faltan variables: **-2 pts por cada una**
- Definen variables pero sin explicar qué representan: **-5 pts**

### Función Objetivo (15 pts)
- FO correcta con todos los coeficientes bien calculados: **15 pts**
- FO correcta pero sin calcular recargo nocturno: **10 pts**
- Maximizan en vez de minimizar: **-5 pts**
- Coeficientes incorrectos: **-2 pts por error**

### Restricciones Contractuales (20 pts)
- R1-R4 correctas (mínimos por campaña): **8 pts**
- R5-R10 correctas (mínimos por turno): **12 pts**
- Error en dirección de desigualdad: **-1 pt por error**

### Restricción de Calidad (10 pts)
- 4 restricciones de 30% seniors correctas y linealizadas: **10 pts**
- Identifican la restricción pero no la linealizan bien: **6 pts**
- Solo escriben "30% seniors" sin formalizar: **3 pts**

### Restricciones Operativas (15 pts)
- Capacidad sede (3 restricciones de turno): **5 pts**
- Tope nocturno: **3 pts**
- Mercado laboral (juniors ≤ 65, seniors ≤ 40): **4 pts**
- Presupuesto: **3 pts**

### Restricción Inter-Campaña (5 pts)
- Correcta: **5 pts**
- Identificada pero mal formulada: **3 pts**
- No identificada: **0 pts**

### No Negatividad e Integralidad (5 pts)
- Ambas presentes: **5 pts**
- Solo no negatividad: **3 pts**
- Ninguna: **0 pts**

### Resumen Ejecutivo (10 pts)
- Conteo correcto de variables y restricciones: **4 pts**
- Reflexión sobre dificultades de extracción: **3 pts**
- Reflexión sobre viabilidad de resolución manual: **3 pts**

---

## 8. Verificación Rápida de Factibilidad

Para confirmar que el problema es factible:

**Escenario mínimo** (contratando solo los mínimos posibles):
- Ventas: 30 (mín 14 tarde, 16 mañana) → ~9 seniors, ~21 juniors
- Soporte: 28 (mín 8 por turno = 24, +4 extras) → ~9 seniors, ~19 juniors
- Retención: 20 (mín 9 mañana, 11 tarde) → ~6 seniors, ~14 juniors
- Cobranzas: 22 (mín 10 mañana, +12 entre tarde y noche) → ~7 seniors, ~15 juniors
- **Total**: 100 personas, ~31 seniors, ~69 juniors

**Verificación de restricciones en escenario mínimo**:
- Juniors ≤ 65: 69 > 65 → **Ajustar**: necesitamos más seniors para compensar → sube costo
- Seniors ≤ 40: 31 < 40 ✓
- Presupuesto: ~100 × $1,600,000 promedio = ~$160M < $185M ✓
- Espacio: ~33 por turno < 45 ✓
- Noche: ~16 personas < 25 ✓
- R15 (Ventas 5 seniors más que Retención): 9 - 6 = 3 < 5 → **Ajustar**

El problema es factible pero requiere balancear varias restricciones que compiten entre sí. No se resuelve trivialmente poniendo mínimos en todo.

---

## 9. Guía de Tiempos para el Docente

| Minuto | Actividad |
|--------|-----------|
| 0-5 | Entregar el documento. Leer en silencio los primeros 5 min. |
| 5-10 | Preguntas de clarificación (solo sobre el formato, NO sobre los datos). |
| 10-25 | Trabajo individual/parejas: identificar variables. |
| 25-35 | Trabajo: función objetivo y cálculo de coeficientes. |
| 35-60 | Trabajo: restricciones (la parte más larga). |
| 60-70 | Trabajo: resumen ejecutivo y revisión final. |
| 70-75 | Socialización: 2-3 estudiantes comparten en voz alta cuántas variables y restricciones encontraron. Debate si alguien encontró más/menos. |
| 75-80 | Revelar la solución completa. Comparar. Cerrar con: "La próxima clase resolvemos este modelo con software." |

### Intervenciones sugeridas durante el trabajo:
- **Min 15**: "¿Ya tienen claro cuántas campañas operan de noche?"
- **Min 30**: "¿El salario nocturno se lo dieron calculado o les toca sacarlo?"
- **Min 45**: "¿Cuántas restricciones llevan? Si llevan menos de 15, relean el texto."
- **Min 55**: "¿Se acuerdan de la exigencia de CelPro sobre Ventas y Retención?"
