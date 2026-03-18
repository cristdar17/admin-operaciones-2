# Guía del Docente - Semana 5, Clase 2
## "PL en Acción: Juegos para pensar como optimizadores"

**Duración:** 90 minutos | **Estudiantes:** ~15 | **Materiales:** Solo papel de cuaderno y lapiceros de los estudiantes | **Formato:** Presentación por celular (sin proyector)

---

## Preparación: CERO materiales previos

Todo se prepara en los primeros 2 minutos con ayuda de los estudiantes (Slide 4). Solo necesitan lo que ya traen: cuaderno y lapicero.

---

## Estructura Minuto a Minuto

### BLOQUE 1: Apertura (8 min) — Slides 1-3

| Min | Slide | Qué hacer |
|-----|-------|-----------|
| 0-1 | 1 | Compartir el link de la presentación. "Abran esto, hoy la clase es un juego." |
| 1-4 | 2 | Lanzar la pregunta. Que 4-5 respondan. Todo lo que dicen → "Eso es optimización." |
| 4-7 | 3 | Repaso rápido. Señalar cada caja: un estudiante diferente explica cada concepto SIN usar el nombre técnico. |
| 7-8 | 4 | **SETUP**: Pedir 3 voluntarios: (1) uno parte 10 hojas en 4 pedazos = 40 papelitos, (2) otro dibuja tabla de puntos en el tablero, (3) los demás forman 3 equipos de ~5. |

---

### BLOQUE 2: Juego 1 — El Mercado de la 21 (30 min) — Slides 5-14

**Concepto**: Los equipos compiten para maximizar ganancia comprando frutas. Deciden a ojo, luego formalizan como PL.

| Min | Slide | Qué hacer |
|-----|-------|-----------|
| 8-9 | 5 | Título del juego. Generar expectativa. |
| 9-10 | 6 | Contexto: la Galería, 5 AM, hay que comprar para revender. |
| 10-12 | 7 | Productos y ganancias. Que lean en el cel. |
| 12-13 | 8 | Restricciones. Leerlas en voz alta. Preguntar: "¿Alguna duda?" |
| 13-15 | 9 | Instrucciones paso a paso. Cada equipo debe decidir combinación y verificar restricciones. |
| 15-17 | 10 | **HOJA DE TRABAJO.** Cada equipo copia el formato en un papel. Esto es clave: les da estructura. |
| 17-18 | 11 | "¡A OPTIMIZAR!" Arranca el cronómetro de 8 minutos. |
| 18-26 | — | **TRABAJO EN EQUIPOS.** Circula entre mesas. NO des respuestas. Preguntas guía: "¿Ya verificaron el presupuesto?", "¿Qué pasa si meten más plátanos?", "¿Ese total de espacio está bien?" |
| 26-29 | 12 | **MOMENTO DE VERDAD.** Cada equipo lee su decisión en voz alta. Los OTROS verifican restricciones. Si alguien se pasó → descalificado. El válido con más ganancia gana. |
| 29-32 | 13 | "Lo que hicieron a ojo... es PL." Cada equipo tiene 3 min para escribir variables, F.O. y restricciones formales. |
| 32-35 | 14 | Mostrar la solución. "¿Su intuición se acercó al óptimo?" Discutir brevemente. |
| 35-38 | — | Anotar puntos en el tablero. |

**Solución del modelo:**
- Variables: x₁ = aguacates, x₂ = mangos, x₃ = plátanos
- Max Z = 1.500x₁ + 1.000x₂ + 700x₃
- 2.000x₁ + 1.000x₂ + 800x₃ ≤ 500.000
- 2x₁ + x₂ + x₃ ≤ 400
- 3x₁ + 2x₂ + x₃ ≤ 480
- x₁, x₂, x₃ ≥ 0

**Puntuación Juego 1:**
- Más ganancia (válida): 10 pts | Segundo: 7 pts | Tercero: 5 pts
- Modelo PL correcto: +5 pts bonus

**Dinámica de movimiento:** Aunque están sentados decidiendo, el "reveal" es público y social. Los equipos se cuestionan entre sí ("¡eso se pasa de tiempo!"). Se genera competencia y debate natural.

---

### BLOQUE 3: Juego 2 — Batalla de Escenarios (25 min) — Slides 15-20

**Concepto**: Cada equipo recibe un negocio real de Pereira y formula el modelo de PL. Luego lo pasan al equipo vecino que lo REVISA. El movimiento es pasar hojas, cuestionar, corregir.

| Min | Slide | Qué hacer |
|-----|-------|-----------|
| 38-40 | 15 | Título. "Ahora cada equipo modela un negocio de Pereira." |
| 40-43 | 16 | Reglas: (1) reciben escenario, (2) 10 min para modelar, (3) pasan hoja al vecino para revisión, (4) primero en ser validado gana. |
| 43-44 | 17-20 | Cada equipo abre SU escenario en el cel. Si hay 3 equipos usar A, B, D. Si hay 4 usar todos. |
| 44-54 | — | **10 MINUTOS DE TRABAJO.** Cada equipo escribe su modelo completo en una hoja. Circular dando pistas (no respuestas): "¿Esa ganancia es por unidad o total?", "¿Ya pusieron la restricción de demanda?" |
| 54-56 | — | **ROTACIÓN.** Cada equipo pasa su hoja al equipo de la derecha. Ahora son REVISORES. 2 min para revisar y marcar errores. |
| 56-58 | — | **DEVOLUCIÓN.** Si hay errores marcados, el equipo original tiene 2 min para corregir. Si no hay errores → modelo aprobado. |
| 58-63 | — | **EXPOSICIÓN RÁPIDA.** Cada equipo explica su modelo en 1.5 min. Los demás pueden cuestionar. Frase clave: "¿Y si cambia la demanda?" "¿Qué pasa si sube el precio?" |

**Escenarios — Soluciones para el docente:**

**A — Juan's Café (Centro):**
- x₁ = kg Mezcla Premium, x₂ = kg Mezcla Clásica
- Max Z = 12.800x₁ + 7.000x₂
  - (Ganancia Premium: 35.000 - 25.000×0.6 - 18.000×0.4 = 12.800)
  - (Ganancia Clásica: 20.000 - 18.000×0.5 - 8.000×0.5 = 7.000)
- 15.000x₁ + 9.000x₂ ≤ 2.000.000 (presupuesto en grano)
- x₁ + x₂ ≤ 150 (espacio)
- x₁ ≤ 80, x₂ ≤ 100 (demanda)

**B — Megabús:**
- x₁ = buses Cuba, x₂ = buses Dosquebradas, x₃ = buses Universidad
- Max Z = 800.000x₁ + 650.000x₂ + 900.000x₃
- x₁ + x₂ + x₃ = 10
- 2x₁ + 2x₂ + 3x₃ ≤ 25
- x₁ ≥ 2, x₂ ≥ 2, x₃ ≥ 2

**C — Arboleda:**
- x₁ = camisetas, x₂ = jeans, x₃ = chaquetas
- Max Z = 17.000x₁ + 40.000x₂ + 70.000x₃
- 15.000x₁ + 35.000x₂ + 50.000x₃ ≤ 5.000.000
- x₁ + x₂ + x₃ ≤ 300
- x₁ ≤ 150, x₂ ≤ 100, x₃ ≤ 50

**D — Food Truck Circunvalar:**
- x₁ = hamburguesas, x₂ = perros, x₃ = arepas
- Max Z = 8.000x₁ + 5.500x₂ + 4.000x₃
- 4.000x₁ + 2.500x₂ + 2.000x₃ ≤ 300.000
- x₁ + x₂ + x₃ ≤ 120
- 5x₁ + 3x₂ + 2x₃ ≤ 480

**Puntuación Juego 2:**
- Primer equipo validado correctamente: 15 pts
- Segundo: 10 pts | Tercero: 8 pts
- Mejor exposición (votación grupal a mano alzada): +3 pts

**Dinámica de movimiento:** La rotación de hojas genera interacción física entre equipos. Cuando revisan el modelo del otro, se levantan, señalan errores, discuten. En la exposición, cada equipo defiende su modelo de pie frente a los demás.

---

### BLOQUE 4: Juego 3 — La Cadena del Café (17 min) — Slides 21-23

**Concepto**: El salón se convierte en cadena de suministro. Tres esquinas = tres estaciones. Estudiantes caminan entre estaciones negociando cantidades y precios. Los papelitos partidos al inicio son los "kilos de café".

| Min | Slide | Qué hacer |
|-----|-------|-----------|
| 63-64 | 21 | "Último juego. Ahora son una cadena de suministro de café." |
| 64-66 | 22 | Setup: reasignar los 3 equipos como FINCA, TOSTADORA, TIENDA. Cada grupo va a una esquina. Cada grupo parte una hoja en ~20 pedacitos (kilos de café). La Finca empieza con los papelitos. Cada grupo necesita otra hoja como registro. |
| 66-68 | 23 | Reglas: 3 rondas de 3 min. Para negociar, caminan a la otra estación. Negocian precio y cantidad cara a cara. Anotan en su registro. Papelitos pasan físicamente. |
| 68-77 | — | **3 RONDAS.** Ronda 1 (3 min): La Finca manda negociadores caminando a la Tostadora. Negocian cuántos kg y a qué precio. La Tostadora a su vez manda gente a la Tienda. Ronda 2 y 3 igual. |
| 77-80 | — | **CONTEO.** Cada estación calcula: ingresos por ventas - costos de compra - costos de operación = GANANCIA. |

**Datos clave para el docente:**
- FINCA: Produce 20 kg/ronda. Costo de producción: $5.000/kg. Quiere vender caro.
- TOSTADORA: Compra grano y tuesta. Costo de tostado: $3.000/kg. Compra barato, vende caro.
- TIENDA: Vende al consumidor. Precio local: $18.000/kg. Puede exportar a $22.000/kg pero máx 5 kg por ronda.

**Ejemplo de transacciones:**
- Finca vende 15 kg a Tostadora a $8.000/kg → Finca gana (8.000-5.000)×15 = $45.000
- Tostadora vende 15 kg a Tienda a $14.000/kg → Tostadora gana (14.000-8.000-3.000)×15 = $45.000
- Tienda vende 10 local + 5 export → (18.000×10 + 22.000×5) - 14.000×15 = $80.000

**Dinámica de movimiento:** Este juego es el más físico. Los estudiantes CAMINAN entre esquinas del salón, negocian de pie, regatean precios, pasan papelitos. Es ruidoso y caótico — eso es bueno.

**Puntuación Juego 3:**
- Estación con más ganancia: 10 pts (para el equipo original de sus miembros)
- Mejor negociador (votación grupal): +3 pts

---

### BLOQUE 5: Reflexión y Cierre (10 min) — Slide 24

| Min | Slide | Qué hacer |
|-----|-------|-----------|
| 80-83 | 24 | Preguntas de reflexión sobre el Juego 3: ¿cuello de botella? ¿cooperar vs competir? ¿cómo se modela? |
| 83-86 | — | Sumar puntos totales en el tablero. Anunciar ganador. Aplaudir a todos. |
| 86-88 | — | "Todo lo que vivieron hoy ES programación lineal. Variables, restricciones, optimización. Pero lo sintieron en el cuerpo." |
| 88-90 | 24 | Cierre: "Próxima clase: Modelos de Transporte. Vamos a resolver matemáticamente lo que hicieron en la Cadena del Café." |

---

## Tabla de Puntuación

| Juego | Máx pts |
|-------|---------|
| 1 - Mercado de la 21 | 15 (ganancia) + 5 (modelo) = 20 |
| 2 - Batalla de Escenarios | 15 (velocidad) + 3 (exposición) = 18 |
| 3 - Cadena del Café | 10 (ganancia) + 3 (negociador) = 13 |
| **TOTAL POSIBLE** | **51** |

---

## Tips

1. **Slide 10 (hoja de trabajo) es clave.** Si la copian bien, el Juego 1 fluye solo.
2. **En el reveal del Juego 1**, deja que los otros equipos hagan de "auditores". Genera debate natural.
3. **La rotación de hojas del Juego 2** es donde pasa la magia: corregir al otro enseña más que hacer el propio.
4. **En el Juego 3**, no intervengas mucho. Deja que negocien, que se frustren, que descubran los cuellos de botella solos.
5. **Siempre pregunta**: "¿Qué habrían hecho diferente con un modelo matemático?"

## Si sobra tiempo
Mini-reto: "Escribe un problema de tu vida diaria como modelo de PL. Una F.O., una restricción. El más creativo gana +2 pts."

## Si falta tiempo
- Juego 1: Reducir a 5 min de trabajo + reveal sin formalizar
- Juego 2: Solo 2 escenarios, sin rotación de revisión
- Juego 3: 2 rondas en vez de 3
