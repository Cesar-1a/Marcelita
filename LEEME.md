# Simulador Mérito 2026 – PGN Convocatoria 143

Simulador de las pruebas escritas para la **Convocatoria 143-2026** de la Procuraduría General de la Nación:
**Profesional Universitario 3PU-17**, Procuradurías Delegadas con Funciones Mixtas
(6: Conciliación Administrativa; 10: Moralidad y Transparencia Pública). 2 cargos en Bogotá.
Formato de preguntas de la Universidad de Antioquia.

## Cómo abrirlo
Doble clic en `index.html`. Funciona sin internet. El progreso se guarda con una clave propia (`pgn143_v1`),
separada de las apps de las convocatorias 217 y 388.

## Banco (25-nov-2026)
- 319 ítems de conocimientos (131 núcleo general + 188 núcleo específico) y 42 comportamentales (7 por competencia).
- Propios de esta convocatoria (`banco143_a.js`, `banco143_b.js`): conciliación (Ley 2220 de 2022), derecho disciplinario
  (Ley 1952 de 2019), anticorrupción (Leyes 1474 y 2195), DD.HH. y DIH, víctimas (Ley 1448), régimen electoral,
  argumentación jurídica, planeación estratégica y gestión social.
- Reutilizados: núcleo general (217), constitucional, transparencia y contratación (217), presupuesto y proyectos (388).
  Los ejes que no están en `config.js` se descartan automáticamente.
- `ajuste143.js` (más `ajuste_opciones.js`, `ajuste388.js` y `ajuste388b.js`) reescribe distractores para que la
  opción correcta no sea siempre la más larga. Medición final: la correcta es la más larga en 27 % de los ítems
  propios y 32 % del núcleo específico; la mejor comportamental es la más larga en 33 %.

## Fuentes verificadas al redactar
Textos vigentes en la Secretaría del Senado (consulta del 25-nov-2026): Ley 2220 de 2022 (arts. 3, 4, 7, 56, 60, 64, 67,
88-120), Ley 1952 de 2019 (arts. 3, 33, 46, 47, 99, 104, 130-136, 141, 208, 209, 211, 213, 217, 218, 221, 224, 232, 233),
Ley 1474 de 2011 (arts. 1, 3, 4, 8, 9, 62, 65, 73, 76, 78), Ley 2195 de 2022 (arts. 1, 12, 13, 31),
Ley 1448 de 2011 (arts. 3, 13, 25, 155, con sus reformas de 2023 y 2024), Ley 1475 de 2011 (arts. 2 y 28),
Ley 996 de 2005 (art. 33) y Ley 1996 de 2019 (art. 6).

No verificados contra texto oficial en esta pasada: Convención Americana (arts. 46 y 61), Protocolo II y art. 3 común,
C.P. arts. 127, 214, 264 y 266, Código Penal (peculado, cohecho, concusión, prevaricato), Ley 99 de 1993, Ley 160 de 1994,
Ley 1931 de 2018, Ley 2273 de 2022, y los ítems conceptuales de argumentación y planeación.

Al agregar un archivo de banco nuevo, inclúyalo en `index.html` antes de `js/app.js` y mida el sesgo de longitud.

## Contador de visitas
`js/visitas.js` envía a GoatCounter (`https://simuladorpgn.goatcounter.com`) solo la sección abierta, con el prefijo `/143/` para separar esta convocatoria. Para apagarlo, deje `codigo: ''`.
