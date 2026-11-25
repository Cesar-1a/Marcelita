/* =========================================================================
   Configuración del concurso – PGN Convocatoria 143-2026
   Profesional Universitario 3PU-17 · Procuradurías Delegadas con Funciones Mixtas
   (6: Conciliación Administrativa · 10: Moralidad y Transparencia Pública).
   Procesos: preventivo, intervención, disciplinario y conciliación.
   Fuentes: Ficha del cargo (TH-F-211 v3, Conv. 143 v3, Res. 212 de 2026),
   Res. 076/2026 (arts. 18-21), Res. 133/2026 (antecedentes),
   Diccionario de Competencias Comportamentales PGN (2012),
   Guías de orientación al aspirante de la Universidad de Antioquia.
   ========================================================================= */
window.BANCO = [];
window.BANCO_COMP = [];

/* Ítem de conocimientos (formato UdeA). Los ítems cuyo eje no esté en EJES se descartan,
   para poder reutilizar archivos de banco de otras convocatorias (217 y 388). */
window.Q = function (id, eje, dif, dim, e, o, c, j, r) {
  if (!window.EJES[eje]) return;
  const ov = window.OPC && window.OPC[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (+k !== c && o[+k] != null) o[+k] = ov[k]; }); }
  const ot = window.OPCT && window.OPCT[id];
  if (ot) { o = o.map((x, i) => (i !== c && ot[x]) ? ot[x] : x); }
  let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const t = h % 4;
  if (t !== c) {
    o = o.slice(); j = j.slice();
    [o[t], o[c]] = [o[c], o[t]]; [j[t], j[c]] = [j[c], j[t]];
    c = t;
  }
  window.BANCO.push({ id, eje, dif, dim, e, o, c, j, r });
};
window.C = function (id, comp, e, o, p, j) {
  if (!window.COMPETENCIAS[comp]) return;
  const ov = window.OPC_C && window.OPC_C[id];
  if (ov) { o = o.slice(); Object.keys(ov).forEach(k => { if (p[+k] !== 2 && o[+k] != null) o[+k] = ov[k]; }); }
  const ot = window.OPCT_C && window.OPCT_C[id];
  if (ot) { o = o.map((x, i) => (p[i] !== 2 && ot[x]) ? ot[x] : x); }
  window.BANCO_COMP.push({ id, comp, e, o, p, j });
};

window.CONCURSO = {
  storageKey: 'pgn143_v1',
  nombre: 'Concurso Abierto de Méritos PGN 2026',
  convocatoria: 'Convocatoria 143-2026',
  cargo: 'Profesional Universitario 3PU-17',
  dependencia: 'Procuradurías Delegadas con Funciones Mixtas (Conciliación Administrativa · Moralidad y Transparencia Pública)',
  operador: 'Universidad de Antioquia',
  nivel: 'profesional',
  reqMin: 'título en administración de empresas o administración pública y 2 años de experiencia profesional',
  minimo: 65,
  pesos: { conocimientos: 70, comportamental: 20, antecedentes: 10 },
  umbralElegibles: 70,
  duracionMin: 240,
  enfoque: 'Las preguntas de la UdeA se contextualizan en las funciones del empleo: contribuir a las políticas y planes de la Procuraduría Delegada; adelantar actuaciones preventivas, de control de gestión y de intervención en defensa del orden jurídico, el patrimonio público y los derechos; evaluar actuaciones disciplinarias, proyectar decisiones, practicar pruebas y preparar decisiones sobre conflictos de competencia, recursos, impedimentos, recusaciones, segunda instancia y consulta de la suspensión provisional; adelantar la conciliación extrajudicial en lo contencioso administrativo por asignación especial del Procurador; preparar solicitudes de poder preferente y vigilancia superior; orientar espacios con la sociedad; atender consultas; elaborar bases de datos, informes y estadísticas; y orientar los sistemas de gestión. Al estudiar, pregúntese: <i>¿cómo aparecería esto en un caso de la Delegada para la Conciliación Administrativa o de la Delegada para la Moralidad y Transparencia Pública?</i>',
  estado: {
    corte: '25 de noviembre de 2026',
    portal: 'www.meritoconstruyendoexcelencia.com.co',
    etapa: 'Reclutamiento – verificación de requisitos mínimos. Al 21 de noviembre de 2026 no se había publicado la Guía de Orientación para la prueba escrita ni citación a pruebas.',
    cronograma: [
      ['Fijación de la Convocatoria 143 (v3, Res. 212 de 2026)', '24 de marzo de 2026'],
      ['Inscripciones (cerradas)', '7 al 18 de septiembre de 2026'],
      ['Lista de admitidos y no admitidos', '30 de octubre de 2026'],
      ['Reclamaciones contra la lista', '3 y 4 de noviembre de 2026'],
      ['Lista DEFINITIVA de admitidos', '30 de noviembre de 2026 (según cronograma de VRM)'],
      ['Pruebas escritas (conocimientos y comportamental, el mismo día)', 'Por definir – pendiente la Guía de Orientación']
    ],
    notas: [
      'Dos (2) cargos en Bogotá, planta global: uno en la Procuraduría Delegada con Funciones Mixtas 6 (Conciliación Administrativa) y otro en la 10 (Moralidad y Transparencia Pública). Asignación básica $8.972.318 (vigencia 2025).',
      'Requisitos: título en administración de empresas o administración pública, tarjeta profesional cuando aplique y 2 años de experiencia profesional o docente.',
      'Reglas: Res. 076 de 2026 y sus modificaciones. Conocimientos eliminatoria (65/100, 70%), comportamental 20%, antecedentes 10%; elegibles con 70 o más.',
      'El temario específico de la ficha es amplio (varias ramas del derecho «de acuerdo con la dependencia»). Este simulador prioriza lo que corresponde a las dos delegadas convocadas: conciliación, régimen disciplinario, anticorrupción, transparencia, constitucional y administrativo.'
    ]
  },
  antecedentes: { maxEdu: 50, maxExp: 50, doc: 50, mae: 25, esp: 10, prof: 4, anio: 10, maxEsp: 2, maxMae: 1,
    docencia: [[97, 30], [79, 25], [61, 20], [43, 15], [24, 10]] }
};

window.NUCLEOS = {
  general: 'Núcleo general (conocimientos esenciales comunes)',
  especifico: 'Núcleo específico (conocimientos esenciales específicos)'
};

window.EJES = {
  estado:         { n: 'Gestión pública y funcionamiento del Estado', nucleo: 'general', ic: '🏛️' },
  pgn:            { n: 'Estructura y funciones de la PGN', nucleo: 'general', ic: '⚖️' },
  atencion:       { n: 'Atención al usuario y derecho de petición', nucleo: 'general', ic: '🤝' },
  documental:     { n: 'Gestión documental y documentos de oficina', nucleo: 'general', ic: '🗂️' },
  sistemas:       { n: 'Sistemas de gestión (MIPG, calidad, seguridad)', nucleo: 'general', ic: '🔁' },
  ofimatica:      { n: 'Herramientas ofimáticas', nucleo: 'general', ic: '💻' },
  conciliacion:   { n: 'Estatuto de Conciliación y arbitramento', nucleo: 'especifico', ic: '🤝' },
  disciplinario:  { n: 'Derecho disciplinario (Código General Disciplinario)', nucleo: 'especifico', ic: '🧑‍⚖️' },
  anticorrupcion: { n: 'Estatuto Anticorrupción', nucleo: 'especifico', ic: '🛡️' },
  transparencia:  { n: 'Transparencia y acceso a la información pública', nucleo: 'especifico', ic: '🔎' },
  constitucional: { n: 'Derecho constitucional y administrativo', nucleo: 'especifico', ic: '📜' },
  contratacion:   { n: 'Contratación estatal', nucleo: 'especifico', ic: '📑' },
  ddhh:           { n: 'Derechos humanos y DIH', nucleo: 'especifico', ic: '🕊️' },
  victimas:       { n: 'Ley de víctimas y justicia transicional', nucleo: 'especifico', ic: '🧭' },
  electoral:      { n: 'Democracia y régimen electoral', nucleo: 'especifico', ic: '🗳️' },
  argumentacion:  { n: 'Interpretación y argumentación jurídica', nucleo: 'especifico', ic: '💬' },
  planeacion:     { n: 'Planeación estratégica y políticas públicas', nucleo: 'especifico', ic: '🧩' },
  presupuesto:    { n: 'Finanzas públicas y presupuesto', nucleo: 'especifico', ic: '💰' },
  proyectos:      { n: 'Formulación y evaluación de proyectos', nucleo: 'especifico', ic: '📈' },
  social:         { n: 'Gestión social, discapacidad, ambiente y ruralidad', nucleo: 'especifico', ic: '🌱' }
};

window.DIMENSIONES = {
  recordar:   'Recordar: dominio de normas, conceptos, métodos o marcos de referencia.',
  comprender: 'Comprender: explicar relaciones entre datos o principios de una clasificación.',
  aplicar:    'Aplicar: seleccionar y usar datos y principios para resolver un problema concreto.',
  analizar:   'Analizar: descomponer un caso en sus partes y resolver problemas complejos.'
};

window.COMPETENCIAS = {
  responsabilidad: {
    n: 'Responsabilidad con la organización', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de asumir compromiso con los objetivos de la Procuraduría General de la Nación o aquellos que le son asignados.',
    nivelTxt: 'Nivel B – Contribuye al desarrollo de los objetivos de la entidad y propone estrategias de mejoramiento continuo.',
    conductas: ['Enfoca su actividad hacia el cumplimiento de los objetivos de la institución.', 'Busca permanentemente la mejora de los procesos institucionales.']
  },
  organizacion: {
    n: 'Organización del trabajo', nivel: 'B', tipo: 'Transversal',
    def: 'Capacidad de organización, excelencia y precisión en la realización de labores.',
    nivelTxt: 'Nivel B – Efectúa su trabajo con organización, calidad, oportunidad, seguimiento y verificación de sus labores y las de los demás.',
    conductas: ['Cumple con las normas establecidas para el desarrollo de las actividades a su cargo.', 'Implementa herramientas de control y seguimiento para vigilar el cumplimiento con calidad de las tareas asignadas al equipo.']
  },
  investigacion: {
    n: 'Investigación', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para buscar información relevante y pertinente para analizarla y evaluarla con dominio técnico y experticia.',
    nivelTxt: 'Nivel B – Diseña y realiza estudios conjuntamente para facilitar el funcionamiento de la entidad y proponer planes y programas de mejoramiento institucional.',
    conductas: ['Incorpora elementos en la búsqueda de métodos aplicables a la investigación.', 'Realiza alianzas con instituciones educativas reconocidas para desarrollar nuevos modelos de investigación.']
  },
  conceptual: {
    n: 'Pensamiento conceptual', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de entender una situación o un problema a partir de los elementos que la conforman.',
    nivelTxt: 'Nivel A (máximo) – Explica problemas de alta complejidad y formula directrices para atenderlos.',
    conductas: ['Aclara situaciones o problemas que requieren rigurosidad técnica y conceptual.', 'Genera lineamientos claros y precisos que permiten entender situaciones o problemas específicos.']
  },
  resultados: {
    n: 'Orientación a resultados', nivel: 'A', tipo: 'Por perfil del cargo',
    def: 'Capacidad de lograr las metas propuestas alineadas con la estrategia corporativa o con la misión de la entidad.',
    nivelTxt: 'Nivel A (máximo) – Establece, alcanza y supera los resultados esperados de metas desafiantes en la entidad.',
    conductas: ['Fija metas que trascienden los propósitos actuales.', 'Compromete recursos y tiempos para mejorar las metas establecidas.']
  },
  parametros: {
    n: 'Cumplimiento de parámetros de trabajo', nivel: 'B', tipo: 'Por perfil del cargo',
    def: 'Capacidad para aplicar en sus labores la normatividad interna o externa.',
    nivelTxt: 'Nivel B – Aplica criterios con el fin de desempeñarse dentro de procesos organizacionales.',
    conductas: ['Sigue las reglas y lineamientos establecidos para el desempeño dentro de diferentes procesos organizacionales.', 'Define objetivos para su equipo alineados con procedimientos definidos.']
  }
};

window.FICHAS = {
  estado: ['C.P. arts. 113-121: ramas del poder y órganos de control.', 'Ley 489 de 1998: delegación, desconcentración, descentralización.', 'C.P. art. 209: principios de la función administrativa.', 'C.P. art. 125 y régimen especial de carrera de la PGN (Decreto Ley 262 de 2000).', 'Planeación (Ley 152 de 1994), indicadores, control interno (Ley 87 de 1993).'],
  pgn: ['C.P. arts. 118, 275-278: Ministerio Público y funciones del Procurador.', 'Decreto Ley 262 de 2000 modificado por el Decreto Ley 1851 de 2021: procuradurías delegadas (incluidas las de funciones mixtas).', 'Funciones preventiva, de intervención, disciplinaria y de conciliación.', 'Ley 1952 de 2019 modificada por la Ley 2094 de 2021; Sentencia C-030 de 2023.'],
  atencion: ['C.P. art. 23 y Ley 1755 de 2015: términos de 15, 10 y 30 días; peticiones incompletas, verbales y entre autoridades.', 'Atención prioritaria, lenguaje claro y ajustes razonables (Ley 1618 de 2013).'],
  documental: ['Ley 594 de 2000; ciclo vital; TRD, TVD, PGD, PINAR, FUID.', 'Expediente electrónico; Acuerdo AGN 001 de 2024.', 'Documentos de oficina: GTC 185.', 'Expedientes disciplinarios y de conciliación: reserva, foliación, actas.'],
  sistemas: ['MIPG (Decreto 1499 de 2017): 7 dimensiones; FURAG; líneas de defensa.', 'ISO 9001, PHVA, acciones correctivas; gestión del riesgo (guía DAFP), incluido el riesgo de corrupción.'],
  ofimatica: ['Excel: BUSCARX, CONTAR.SI.CONJUNTO, tablas dinámicas, DIAS.LAB (términos procesales en días hábiles).', 'Word: estilos, combinación de correspondencia, control de cambios.'],
  conciliacion: ['Ley 2220 de 2022 (Estatuto de Conciliación): definición y fines (art. 3), principios (art. 4), asuntos conciliables (art. 7).', 'Término de 3 meses para la conciliación extrajudicial, prorrogable de mutuo acuerdo hasta 3 meses más (art. 60); suspensión de la caducidad o prescripción una sola vez (arts. 56 y 96).', 'Acta de conciliación: presta mérito ejecutivo y hace tránsito a cosa juzgada (art. 64).', 'Contencioso administrativo (arts. 88 y ss.): ante agentes del Ministerio Público; requisito de procedibilidad en nulidad y restablecimiento, reparación directa y controversias contractuales (art. 92); facultativo en ejecutivos, medidas cautelares patrimoniales, repetición o cuando demanda una entidad pública (art. 93).', 'Asuntos no conciliables (art. 90): tributarios, ejecutivos contractuales, caducados, nulidad y restablecimiento sin agotar recursos, acto ocurrido por medios fraudulentos.', 'Trámite: admisión en 10 días y audiencia dentro de los 30 siguientes (art. 106); pruebas en 20 días calendario (art. 107); inasistencia injustificada: indicio grave y multa hasta 2 SMMLV (art. 110); acuerdo remitido al juez en 3 días para aprobación (art. 113); reposición en 3 días (art. 114).', 'Comités de conciliación (arts. 115-120): decisión en 15 días; se reúnen mínimo dos veces al mes; prevención del daño antijurídico.'],
  disciplinario: ['Ley 1952 de 2019 (modificada por la Ley 2094 de 2021): poder preferente (art. 3), prescripción de 5 años y 12 para faltas del art. 52 (art. 33), faltas gravísimas, graves y leves (arts. 46-47), sanciones (art. 48).', 'Indagación previa: 6 meses (art. 208). Investigación: 6 meses, prorrogable en otro tanto con varias faltas o investigados; 18 meses en DD.HH. y DIH (art. 213).', 'Suspensión provisional (art. 217): faltas gravísimas o graves; 3 meses prorrogables otro tanto; consulta ante el superior (3 días para alegar y 10 para decidir).', 'Recursos (arts. 130-136): reposición, apelación y queja; 5 días desde la notificación; prohibición de reformatio in pejus.', 'Impedimentos y recusaciones (art. 104); conflicto de competencias (art. 99); revocatoria directa (art. 141).'],
  anticorrupcion: ['Ley 1474 de 2011: inhabilidades por actos de corrupción (art. 1), ex empleados del nivel directivo (art. 4), Comisión Nacional y comisiones regionales de moralización (arts. 62-65), oficina de quejas (art. 76), democratización de la gestión (art. 78).', 'Ley 2195 de 2022: Programas de Transparencia y Ética Pública (modifica el art. 73 de la Ley 1474), debida diligencia y Registro Único de Beneficiarios Finales (arts. 12-13), responsabilidad de personas jurídicas.', 'Delitos contra la administración pública (Ley 1474, arts. 13-33).'],
  transparencia: ['Ley 1712 de 2014: máxima publicidad; información clasificada (art. 18) y reservada (art. 19, máximo 15 años); recurso de insistencia; ITA administrado por la PGN.', 'Resolución MinTIC 1519 de 2020; datos abiertos.'],
  constitucional: ['C.P. art. 1, 4, 29, 85, 86-88, 93; acciones constitucionales.', 'CPACA: actos, recursos (10 días), silencio negativo (3 meses), revocatoria directa; medios de control y caducidad (nulidad y restablecimiento 4 meses; reparación directa y controversias contractuales 2 años).'],
  contratacion: ['Ley 80 de 1993, Ley 1150 de 2007, Ley 1474 de 2011, Decreto 1082 de 2015.', 'Modalidades, principios, cláusulas excepcionales, supervisión e interventoría, liquidación.'],
  ddhh: ['C.P. arts. 93 y 214: bloque de constitucionalidad; DIH en estados de excepción.', 'Sistema interamericano: Comisión y Corte IDH; control de convencionalidad.', 'DIH: Convenios de Ginebra y Protocolos; principios de distinción, proporcionalidad y precaución.'],
  victimas: ['Ley 1448 de 2011 (modificada por la Ley 2421 de 2024): víctimas por hechos desde el 1 de enero de 1985 (art. 3); reparación integral: restitución, indemnización, rehabilitación, satisfacción y garantías de no repetición (art. 25).', 'Acto Legislativo 01 de 2017: Sistema Integral de Verdad, Justicia, Reparación y No Repetición (JEP, Comisión de la Verdad, Unidad de Búsqueda).'],
  electoral: ['C.P. arts. 258-266: voto, organización electoral (CNE y Registraduría).', 'Ley 1475 de 2011: prohibición de doble militancia (art. 2); listas con 5 o más curules: mínimo 30 % de uno de los géneros (art. 28).', 'Intervención en política de servidores públicos (C.P. art. 127; Ley 1952, art. 60).'],
  argumentacion: ['Métodos de interpretación: gramatical, sistemático, teleológico, histórico.', 'Estructura del argumento: premisas, conclusión, falacias; ponderación y proporcionalidad; precedente judicial.'],
  planeacion: ['Planeación estratégica: misión, visión, objetivos, DOFA, indicadores, cuadro de mando integral.', 'Ciclo de las políticas públicas: agenda, formulación, decisión, implementación y evaluación.'],
  presupuesto: ['Decreto 111 de 1996: principios, CDP y registro, PAC, reservas, vigencias futuras (Ley 819 de 2003), BPIN.'],
  proyectos: ['MGA, marco lógico, VPN, TIR, B/C, ruta crítica, valor ganado.'],
  social: ['Ley 1618 de 2013 y Ley 1996 de 2019 (capacidad legal plena de las personas con discapacidad).', 'Ambiente: Ley 99 de 1993; Ley 1931 de 2018 (cambio climático); Acuerdo de Escazú (Ley 2273 de 2022).', 'Ruralidad: Ley 160 de 1994 (reforma agraria y desarrollo rural).']
};

window.ESTILO_UDEA = [
  { t: 'Selección múltiple con única respuesta', d: 'Los ítems de conocimientos tienen un enunciado y cuatro opciones (A, B, C, D) con una sola correcta. En la prueba de la CGR 2024-2026 la UdeA aplicó 30 ítems de competencias básicas + 60 específicas + 40 comportamentales (130 en total) en máximo 4 horas.' },
  { t: 'Enunciado que se completa', d: 'El enunciado plantea un caso y termina en una frase abierta («Ante esta situación, el profesional de la Delegada debe…»). Las opciones completan la frase y empiezan en minúscula.' },
  { t: 'Casos situados en el cargo', d: 'Para este empleo, espere casos de una solicitud de conciliación con la caducidad corriendo, un comité de conciliación que no decide, un recurso contra una decisión disciplinaria, una suspensión provisional en consulta o un riesgo de corrupción en una entidad vigilada.' },
  { t: 'Taxonomía de Bloom (Anderson & Krathwohl)', d: 'Cada ítem tiene eje temático, nivel de dificultad (bajo, medio, alto) y dimensión cognitiva: recordar, comprender, aplicar y analizar. En los ejes procesales abundan los términos (días, meses) y las reglas de procedencia.' },
  { t: 'Distractores con «porque…»', d: 'Las opciones incorrectas suelen ser plausibles y traer una razón jurídica aparente. La trampa está en la justificación: ambas partes de la opción deben ser ciertas.' },
  { t: 'Opciones de longitud similar', d: 'No elija la opción más larga por reflejo: los distractores están tan desarrollados como la respuesta correcta. Este simulador mide y corrige ese sesgo.' },
  { t: 'Comportamentales de 3 opciones (ipsativas)', d: 'Una situación laboral y tres opciones con distinto nivel de ajuste a la competencia. Para este cargo se evalúan 6 competencias.' },
  { t: 'Calificación estandarizada', d: 'Lectura óptica y escala estándar de 0 a 100; la UdeA puede eliminar ítems defectuosos tras el análisis psicométrico. La pregunta sin responder vale cero.' },
  { t: 'Dos núcleos en la prueba de conocimientos', d: 'Art. 19 Res. 076 de 2026: núcleo general (común) y núcleo específico. Eliminatoria con 65/100.' }
];
