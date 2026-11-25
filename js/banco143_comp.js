/* Convocatoria 143 – Banco COMPORTAMENTAL (situaciones de una Procuraduría Delegada con funciones mixtas).
   Puntajes: 2 = máximo ajuste al nivel exigido, 1 = parcial, 0 = bajo. Opciones de longitud similar. */

/* ---- Responsabilidad con la organización (B) ---- */
C('C143-RES-01','responsabilidad',
 'Usted nota que muchas solicitudes de conciliación llegan incompletas y se pierden semanas pidiendo documentos. Ante esta situación, usted',
 ['propone una lista de chequeo para los convocantes y la publica en los canales de la Delegada.',
  'sigue requiriendo los documentos en cada caso, porque así lo dispone el procedimiento vigente y no le corresponde cambiarlo.',
  'comenta el problema en las reuniones de equipo y espera a que la coordinación defina alguna medida para todos los procuradores.'],
 [2,0,1],
 ['Propone una mejora concreta del proceso (nivel B).','Cumple, pero no contribuye a mejorar.','Identifica el problema, sin aportar solución.'])

C('C143-RES-02','responsabilidad',
 'Un día antes de vencer el término para proyectar una decisión de segunda instancia, usted detecta que falta valorar una prueba relevante. Ante esta situación, usted',
 ['entrega el proyecto en la fecha prevista con una nota que advierte que no se valoró esa prueba, para que el jefe decida qué hacer.',
  'informa de inmediato a su jefe, valora la prueba con prioridad y ajusta el proyecto para que la decisión sea completa.',
  'pide que se amplíe el término.'],
 [1,2,0],
 ['Cumple el plazo, pero traslada el problema.','Asume el compromiso con la calidad de la decisión.','Sin fundamento legal y sin buscar solución.'])

C('C143-RES-03','responsabilidad',
 'Le asignan apoyar una jornada de la Delegada con veedurías ciudadanas, aunque no está entre sus tareas habituales. Ante esta situación, usted',
 ['acepta, prepara la información que se requiere y propone cómo aprovechar la jornada para recibir alertas sobre riesgos de corrupción.',
  'acepta y asiste, aunque considera que su función es proyectar decisiones.',
  'pide que la asignen a otra persona, porque tiene expedientes pendientes y la jornada no hace parte de sus funciones.'],
 [2,1,0],
 ['Contribuye a los objetivos y propone mejoras.','Cumple la tarea sin aportar.','Prioriza sus tareas sobre la necesidad institucional.'])

C('C143-RES-04','responsabilidad',
 'Usted advierte que un compañero dejó vencer el término para remitir un acta de conciliación al juez. Ante esta situación, usted',
 ['le avisa a su compañero y al coordinador, ayuda a remitir el acta cuanto antes y propone una alerta de términos.',
  'no dice nada, porque se trata de un asunto que no le fue asignado.',
  'informa al coordinador por escrito que el compañero incumplió el término legal, para que se tomen las medidas correspondientes.'],
 [2,0,1],
 ['Se compromete con los objetivos y propone mejora.','Se desentiende.','Informa, pero no contribuye a la solución.'])

C('C143-RES-05','responsabilidad',
 'La Delegada fijó la meta de reducir el tiempo de los conceptos sobre riesgos de corrupción, pero a usted no le asignaron indicadores. Ante esta situación, usted',
 ['espera a que le asignen formalmente una parte de la meta.',
  'revisa sus propios tiempos, identifica dónde se pierden días y propone ajustes que aporten a la meta de la dependencia.',
  'sigue trabajando como siempre, porque la meta es de la Delegada y no de cada profesional, y su desempeño se mide con otros indicadores.'],
 [1,2,0],
 ['Cumple cuando se le asigna.','Contribuye activamente a los objetivos.','No se compromete con la meta institucional.'])

C('C143-RES-06','responsabilidad',
 'El apoderado de una de las partes de una conciliación le ofrece «agradecerle» si la audiencia se programa pronto. Ante esta situación, usted',
 ['rechaza el ofrecimiento, programa la audiencia según el orden y el término legal, y lo informa a su jefe.',
  'rechaza el ofrecimiento con amabilidad y continúa con el trámite normal, sin informarlo, porque no lo aceptó.',
  'programa la audiencia en la primera fecha disponible, porque de todos modos la ley pide celeridad.'],
 [2,1,0],
 ['Protege la integridad del trámite y la entidad.','Rechaza, pero no gestiona el riesgo.','Da apariencia de favorecimiento.'])

C('C143-RES-07','responsabilidad',
 'La dependencia cambia el sistema de registro de actuaciones y usted es uno de los que mejor lo maneja. Ante esta situación, usted',
 ['usa el sistema correctamente y resuelve las dudas que le formulen.',
  'prepara una guía breve con los errores frecuentes, la comparte con el equipo y propone una sesión práctica para todos.',
  'sigue registrando en la hoja de cálculo anterior y pasa los datos al nuevo sistema al final de cada mes, porque así se demora menos en cada actuación.'],
 [1,2,0],
 ['Cumple con su parte.','Contribuye al objetivo institucional y propone mejoras.','Desconoce el cambio institucional.'])

/* ---- Organización del trabajo (B) ---- */
C('C143-ORG-01','organizacion',
 'Tiene a cargo veinte expedientes disciplinarios con términos distintos. Ante esta situación, usted',
 ['construye un cuadro de control con etapas, términos y alertas, y lo revisa cada semana.',
  'atiende los expedientes en el orden en que llegaron a su despacho, para ser equitativo con todos los investigados.',
  'trabaja primero los expedientes más sencillos, para cerrar más casos en el mes.'],
 [2,0,1],
 ['Organiza con oportunidad y seguimiento (nivel B).','No considera los vencimientos.','Prioriza volumen sobre términos.'])

C('C143-ORG-02','organizacion',
 'Usted revisa los proyectos de decisión de dos profesionales nuevos y encuentra errores repetidos en la cita de normas. Ante esta situación, usted',
 ['corrige los errores directamente en cada proyecto, para que no se demoren las decisiones.',
  'les señala los errores, acuerda con ellos una plantilla de citación y revisa los siguientes proyectos para verificar que se corrigieron.',
  'devuelve los proyectos indicando que tienen errores y que deben revisarlos completos.'],
 [1,2,0],
 ['Resuelve, pero sin aprendizaje ni control.','Verifica las labores de otros e implementa control (nivel B).','Señala sin orientar.'])

C('C143-ORG-03','organizacion',
 'En la misma semana debe preparar dos audiencias de conciliación, proyectar una decisión de consulta de suspensión provisional y entregar un informe estadístico. Ante esta situación, usted',
 ['prioriza la consulta de la suspensión provisional y las audiencias por sus términos legales, y agenda el informe.',
  'empieza por el informe estadístico, porque es el que le tomará menos tiempo y le permite cerrar un pendiente.',
  'pide prórroga para todo, porque la carga de la semana es excesiva y no alcanza a cumplir con calidad.'],
 [2,1,0],
 ['Organiza según oportunidad y términos.','Puede comprometer términos legales.','No gestiona sus prioridades.'])

C('C143-ORG-04','organizacion',
 'Los expedientes de conciliación se guardan en distintas carpetas de red y correos. Ante esta situación, usted',
 ['guarda una copia personal de todo lo que recibe.',
  'organiza los expedientes según la TRD, define dónde va cada documento y verifica que el equipo siga la misma regla.',
  'deja el tema al área de gestión documental, porque la organización de los archivos no hace parte de las funciones de los profesionales de la Delegada.'],
 [1,2,0],
 ['Solución individual.','Organización con control y verificación.','Desconoce su responsabilidad.'])

C('C143-ORG-05','organizacion',
 'A mitad de una investigación prevé que no alcanzará a practicar todas las pruebas dentro del término. Ante esta situación, usted',
 ['informa con anticipación al jefe, prioriza las pruebas conducentes y propone, si procede, la prórroga legal.',
  'sigue practicando pruebas y avisa al vencer el término.',
  'deja de practicar las pruebas restantes y proyecta la decisión con lo que hay, para no incumplir el término legal de la investigación.'],
 [2,0,1],
 ['Gestiona con oportunidad y seguimiento.','Aviso tardío.','Cumple el término a costa de la calidad.'])

C('C143-ORG-06','organizacion',
 'Usted coordina con otros dos profesionales un informe sobre el cumplimiento de la Ley de Transparencia en 40 entidades. Ante esta situación, usted',
 ['distribuye las entidades y pide los resultados al final.',
  'define un formato común, un cronograma con entregas parciales y una revisión cruzada de los resultados antes de consolidar.',
  'hace usted mismo la revisión de las 40 entidades, para garantizar que todas se evalúen con el mismo criterio y entregar a tiempo.'],
 [1,2,0],
 ['Distribuye sin seguimiento.','Organiza con calidad y verificación de labores de otros.','No organiza el trabajo del equipo.'])

C('C143-ORG-07','organizacion',
 'Las actas de las audiencias de conciliación se redactan de forma distinta según el profesional. Ante esta situación, usted',
 ['redacta las suyas de la forma más completa posible.',
  'propone una plantilla con los contenidos mínimos del acta y una lista de verificación, y la socializa con el equipo.',
  'pide a la coordinación que cada profesional reciba capacitación sobre redacción de actas antes de la próxima vigencia.'],
 [1,2,1],
 ['Cuida su trabajo, pero no el del equipo.','Implementa herramientas de control para el equipo.','Propone, pero sin herramienta concreta.'])

/* ---- Investigación (B) ---- */
C('C143-INV-01','investigacion',
 'La Delegada quiere entender por qué fracasan tantas conciliaciones con una misma entidad. Ante esta situación, usted',
 ['revisa las actas y decisiones del comité de conciliación de la entidad, clasifica las causas y propone acciones de prevención.',
  'pregunta a los procuradores su opinión y resume las respuestas.',
  'presenta el número de conciliaciones fallidas por mes, con gráficos de tendencia para la dirección.'],
 [2,1,0],
 ['Diseña un estudio con método (nivel B).','Información subjetiva.','Describe sin investigar causas.'])

C('C143-INV-02','investigacion',
 'Una universidad ofrece a la Delegada un estudio conjunto sobre riesgos de corrupción en la contratación municipal. Ante esta situación, usted',
 ['recomienda no participar.',
  'analiza la propuesta, define con la universidad preguntas y métodos, y propone un convenio con reglas de reserva.',
  'sugiere aceptar solo si la universidad hace todo el trabajo y la Delegada recibe el informe final.'],
 [0,2,1],
 ['Desaprovecha la alianza.','Realiza alianzas con instituciones educativas (nivel B).','Participación limitada.'])

C('C143-INV-03','investigacion',
 'Debe emitir un concepto sobre si un tipo de controversia es conciliable en lo contencioso administrativo. Ante esta situación, usted',
 ['revisa la Ley 2220 de 2022, la jurisprudencia del Consejo de Estado y conceptos previos de la entidad antes de concluir.',
  'reutiliza un concepto similar de hace cinco años.',
  'consulta a un colega con experiencia en conciliación y transcribe su opinión en el concepto, porque conoce bien el tema.'],
 [2,0,1],
 ['Busca información pertinente y la evalúa con dominio técnico.','Puede estar desactualizado (la ley cambió en 2022).','Fuente útil, pero sin método propio.'])

C('C143-INV-04','investigacion',
 'Sus hallazgos sobre una entidad vigilada contradicen la percepción que tenía la dirección. Ante esta situación, usted',
 ['presenta los hallazgos con su evidencia y método, señala las limitaciones y sugiere verificaciones adicionales.',
  'matiza los hallazgos para que coincidan con lo que esperaba la dirección.',
  'repite el análisis con otros datos hasta obtener resultados acordes con la percepción inicial.'],
 [2,0,0],
 ['Información confiable y veraz.','Afecta la objetividad.','Sesga la investigación.'])

C('C143-INV-05','investigacion',
 'Le piden identificar buenas prácticas de prevención del daño antijurídico en comités de conciliación de otras entidades. Ante esta situación, usted',
 ['toma el primer documento que encuentra en internet.',
  'selecciona entidades comparables, define criterios de comparación y propone prácticas aplicables a la Delegada.',
  'solicita a la Agencia Nacional de Defensa Jurídica del Estado que le envíe lo que tenga sobre el tema y lo presenta sin análisis adicional.'],
 [0,2,1],
 ['No evalúa la fuente.','Busca, analiza y evalúa información con método.','Fuente pertinente, sin análisis propio.'])

C('C143-INV-06','investigacion',
 'Al revisar una base de datos de quejas, usted encuentra registros duplicados que inflan las cifras del informe anual. Ante esta situación, usted',
 ['depura la base con un criterio documentado, recalcula las cifras e informa el ajuste y sus efectos.',
  'presenta las cifras tal como están, porque provienen del sistema oficial.',
  'elimina los duplicados sin dejar constancia del cambio.'],
 [2,0,1],
 ['Analiza y evalúa la información con rigor.','Ignora un problema de calidad.','Corrige, pero sin trazabilidad.'])

C('C143-INV-07','investigacion',
 'Debe preparar en dos semanas un informe sobre el uso de la conciliación por parte de los municipios de un departamento. Ante esta situación, usted',
 ['define preguntas guía, recoge datos de los procuradores judiciales y de los comités de conciliación, y presenta hallazgos con recomendaciones.',
  'traduce un estudio internacional sobre conciliación y lo adapta con algunos datos locales.',
  'pide más tiempo antes de empezar.'],
 [2,1,0],
 ['Diseña y realiza un estudio con método.','Aporta información, pero poco pertinente.','Aplaza sin avanzar.'])

/* ---- Pensamiento conceptual (A) ---- */
C('C143-PC-01','conceptual',
 'Debe explicar a un comité directivo por qué un acuerdo conciliatorio fue improbado por el juez, aunque las partes estaban de acuerdo. Ante esta situación, usted',
 ['presenta el auto del juez completo y la normativa aplicable, para que el comité revise todo el detalle.',
  'explica con claridad los requisitos de aprobación, cuál faltó, y propone lineamientos para evitar que se repita.',
  'explica que la decisión del juez es discrecional y que no hay mucho que hacer al respecto.'],
 [1,2,0],
 ['Riguroso, pero no aclara el problema.','Explica problemas complejos y formula directrices (nivel A).','No aclara la situación.'])

C('C143-PC-02','conceptual',
 'Los procuradores aplican criterios distintos para decidir si un asunto es conciliable, y los usuarios reciben respuestas contradictorias. Ante esta situación, usted',
 ['usa el criterio que considera más acertado en sus propios casos.',
  'analiza los criterios en uso frente a la Ley 2220 y la jurisprudencia, y propone lineamientos claros con ejemplos.',
  'informa a la coordinación que existen criterios distintos, para que convoque una reunión con los procuradores y lo discutan.'],
 [0,2,1],
 ['No resuelve el problema.','Genera lineamientos claros (nivel A).','Advierte, sin aclarar.'])

C('C143-PC-03','conceptual',
 'Un caso de presunta corrupción involucra aspectos disciplinarios, penales, fiscales y contractuales. Ante esta situación, usted',
 ['descompone el caso por tipo de responsabilidad y autoridad competente, y propone qué debe hacer la Delegada en cada frente.',
  'se concentra en el aspecto disciplinario, porque es la competencia propia de la Procuraduría y los demás frentes corresponden a otras autoridades.',
  'sugiere esperar a que la Fiscalía avance.'],
 [2,1,0],
 ['Entiende el problema desde sus elementos y formula directrices.','Atiende solo una parte.','Aplaza la comprensión del problema.'])

C('C143-PC-04','conceptual',
 'Un indicador muestra que el 90 % de las conciliaciones terminan con acuerdo, pero muchos acuerdos son improbados después por los jueces. Ante esta situación, usted',
 ['reporta el indicador oficial.',
  'explica que el indicador no mide la calidad de los acuerdos y propone medir los acuerdos aprobados judicialmente.',
  'reporta el indicador y agrega una nota general advirtiendo que podría no reflejar toda la realidad de la gestión de la Delegada.'],
 [0,2,1],
 ['No analiza.','Aclara con rigor técnico y conceptual.','Advierte, sin aclarar.'])

C('C143-PC-05','conceptual',
 'Un ciudadano pregunta por qué su queja contra un alcalde terminó con decisión inhibitoria. Ante esta situación, usted',
 ['le responde que la decisión es inapelable y que no hay más que explicar.',
  'le explica en lenguaje claro qué es una decisión inhibitoria, por qué se adoptó en su caso y qué puede hacer si tiene nuevos elementos.',
  'le remite el texto completo del Código General Disciplinario para que consulte los artículos que regulan la decisión inhibitoria.'],
 [0,2,1],
 ['No aclara.','Explica con claridad una situación compleja.','Información sin explicación.'])

C('C143-PC-06','conceptual',
 'Dos fuentes oficiales reportan cifras distintas sobre la cantidad de procesos disciplinarios por corrupción. Ante esta situación, usted',
 ['elige la cifra más alta para ser conservador.',
  'analiza definiciones, periodos y coberturas de cada fuente, explica la diferencia y define cuál usar en cada caso.',
  'reporta ambas cifras en una tabla comparativa con su fuente, sin explicar por qué difieren ni cuál conviene usar.'],
 [0,2,1],
 ['No resuelve.','Explica y formula directrices.','Informa sin aclarar.'])

C('C143-PC-07','conceptual',
 'Debe presentar a un grupo de personeros los cambios del Estatuto de Conciliación. Ante esta situación, usted',
 ['les entrega la ley completa y un resumen de todos sus artículos.',
  'sintetiza los cambios que más impactan su trabajo, con ejemplos prácticos y una guía breve de aplicación.',
  'presenta solo los artículos nuevos, sin relacionarlos con la práctica, porque los personeros ya conocen el procedimiento anterior.'],
 [1,2,0],
 ['Completo, pero no aclara lo esencial.','Explica con claridad y genera lineamientos.','No ayuda a entender el impacto.'])

/* ---- Orientación a resultados (A) ---- */
C('C143-OR-01','resultados',
 'La meta anual de audiencias de conciliación se cumplió en septiembre. Ante esta situación, usted',
 ['reporta el cumplimiento y continúa con el trabajo ordinario.',
  'propone una meta más desafiante centrada en la calidad de los acuerdos (aprobación judicial) y gestiona cómo lograrla.',
  'programa más audiencias si hay tiempo disponible después de las tareas ordinarias de la Delegada.'],
 [0,2,1],
 ['Se conforma con la meta.','Fija metas que trascienden los propósitos actuales (nivel A).','Sin estrategia.'])

C('C143-OR-02','resultados',
 'Una vigilancia preventiva clave se retrasa porque la entidad vigilada no entrega información. Ante esta situación, usted',
 ['informa que la vigilancia queda suspendida hasta que llegue la información.',
  'reitera el requerimiento con fundamento legal, usa fuentes alternativas (SECOP, datos abiertos) y avanza en lo que no depende de la entidad.',
  'avanza en la redacción del informe mientras llega la información, sin cambiar el plan de trabajo de la vigilancia.'],
 [0,2,1],
 ['No enfrenta el obstáculo.','Realiza todas las acciones para lograr el objetivo.','Avance parcial.'])

C('C143-OR-03','resultados',
 'Le piden reducir a la mitad el tiempo promedio para proyectar decisiones de segunda instancia. Ante esta situación, usted',
 ['explica por qué la meta no es alcanzable con el volumen actual.',
  'analiza dónde se pierde el tiempo, propone plantillas, reparto por complejidad y un plan con indicadores para alcanzar la meta.',
  'trabaja horas adicionales cada semana para sacar más decisiones, sin cambiar la forma en que se organiza el trabajo del grupo.'],
 [0,2,1],
 ['Descarta la meta.','Asume la meta desafiante con estrategia (nivel A).','Esfuerzo sin cambio estructural.'])

C('C143-OR-04','resultados',
 'Un plan de mejoramiento que usted promovió en una entidad vigilada se cumplió formalmente, pero los riesgos de corrupción siguen presentes. Ante esta situación, usted',
 ['considera cerrado el seguimiento, porque la entidad cumplió las acciones pactadas.',
  'evalúa si las acciones atacaron las causas, propone ajustes y mantiene el seguimiento hasta ver resultados.',
  'envía un oficio a la entidad recordándole la importancia de la transparencia y de mantener las acciones del plan.'],
 [0,2,1],
 ['Confunde cumplimiento formal con resultado.','Se orienta al resultado real.','Acción limitada.'])

C('C143-OR-05','resultados',
 'Al final del trimestre no se alcanzó la meta de decisiones proyectadas por una decisión de priorización suya. Ante esta situación, usted',
 ['explica que la meta dependía de la llegada de expedientes.',
  'asume la responsabilidad, analiza la causa y presenta un plan para recuperar el rezago.',
  'propone reducir la meta del siguiente trimestre a un valor que considera más realista para la carga del grupo.'],
 [0,2,0],
 ['Evade la responsabilidad.','Asume la responsabilidad por los resultados.','Rebaja la exigencia.'])

C('C143-OR-06','resultados',
 'La Delegada tiene la meta de aumentar en 20 % las alertas preventivas sobre contratación, y a mitad de año va en 5 %. Ante esta situación, usted',
 ['espera al segundo semestre, porque suelen llegar más denuncias.',
  'analiza las fuentes de información, propone nuevas (cruces de datos de SECOP) y hace seguimiento quincenal al indicador.',
  'solicita reducir la meta, argumentando que fue fijada sin considerar la carga real del grupo de vigilancia preventiva.'],
 [1,2,0],
 ['Pasivo frente al rezago.','Realiza todas las acciones necesarias para lograr la meta.','Rebaja la exigencia.'])

C('C143-OR-07','resultados',
 'Una capacitación que usted organizó para personeros tuvo buena asistencia. Ante esta situación, usted',
 ['da por cumplido el objetivo, porque la asistencia superó lo previsto.',
  'mide si los personeros aplican lo aprendido en sus actuaciones y ajusta el programa con base en los resultados.',
  'envía un informe con el número de asistentes y las evaluaciones de satisfacción diligenciadas al final de la jornada.'],
 [0,2,1],
 ['Confunde actividad con resultado.','Se orienta al resultado real.','Reporta productos, no resultados.'])

/* ---- Cumplimiento de parámetros de trabajo (B) ---- */
C('C143-PAR-01','parametros',
 'Para agilizar una audiencia, el apoderado de una entidad le pide no exigir la certificación del comité de conciliación. Ante esta situación, usted',
 ['exige la certificación, porque es requisito para que la entidad pueda conciliar, y si no la trae, suspende la audiencia.',
  'acepta y deja constancia en el acta de que la certificación se aportará después.',
  'acepta, porque el apoderado tiene poder con facultad para conciliar y eso es suficiente para comprometer a la entidad.'],
 [2,1,0],
 ['Aplica la normatividad con criterio.','Flexibiliza un requisito esencial.','Desconoce la norma.'])

C('C143-PAR-02','parametros',
 'Un directivo de la entidad le pide entregar copia de un expediente disciplinario en curso a un periodista. Ante esta situación, usted',
 ['entrega la copia, porque la orden viene de un superior jerárquico.',
  'explica que la actuación disciplinaria tiene reserva legal y propone una respuesta institucional que no la vulnere.',
  'entrega solo los documentos que considera menos sensibles, después de revisar el expediente completo.'],
 [0,2,1],
 ['Incumple la reserva.','Aplica la normatividad y propone una solución.','Mitiga, sin cumplir la regla.'])

C('C143-PAR-03','parametros',
 'La entidad adoptó un nuevo procedimiento para registrar las actuaciones en el sistema dentro de los dos días siguientes. Ante esta situación, usted',
 ['registra cada fin de semana todas las actuaciones juntas.',
  'aplica el procedimiento, orienta a los demás para que lo sigan y propone ajustes por los canales formales si los necesita.',
  'aplica el procedimiento solo en los expedientes que considera relevantes, y registra los demás cuando tenga tiempo.'],
 [1,2,0],
 ['Cumple tarde.','Sigue los lineamientos y alinea al equipo (nivel B).','Aplicación discrecional.'])

C('C143-PAR-04','parametros',
 'Un compañero le sugiere archivar una investigación vencida para «no afectar los indicadores», aunque hay pruebas por valorar. Ante esta situación, usted',
 ['acepta, porque el término ya venció.',
  'analiza la situación conforme al Código General Disciplinario, informa al jefe y propone la actuación que proceda legalmente.',
  'archiva y deja una nota en el expediente explicando que no alcanzó a valorar las pruebas por la carga de trabajo del grupo.'],
 [0,2,0],
 ['Desconoce la norma.','Aplica la normatividad.','Igualmente incumple.'])

C('C143-PAR-05','parametros',
 'Un convocante pide que la audiencia se haga por teléfono, sin video ni identificación. Ante esta situación, usted',
 ['acepta, porque la ley permite el uso de tecnologías.',
  'ofrece la audiencia virtual por los medios dispuestos por la entidad, verificando la identidad de los asistentes.',
  'niega cualquier opción virtual y exige que todos asistan presencialmente a la sede de la Delegada en Bogotá.'],
 [1,2,0],
 ['Usa la tecnología, pero sin garantías.','Aplica los criterios del proceso (nivel B).','Restringe sin fundamento.'])

C('C143-PAR-06','parametros',
 'Al proyectar una decisión, usted encuentra que la plantilla oficial no incluye un aparte exigido por una reforma legal reciente. Ante esta situación, usted',
 ['usa la plantilla tal como está.',
  'incluye el aparte exigido por la ley e informa al área responsable para que actualice la plantilla.',
  'diseña su propia plantilla con todos los apartes que considera necesarios y la usa a partir de ahora en todos sus proyectos.'],
 [0,2,1],
 ['Cumple la forma, no la norma.','Aplica criterios y propone el ajuste por el canal adecuado.','Se aparta del parámetro institucional.'])

C('C143-PAR-07','parametros',
 'Un procurador regional le pide proyectar una decisión en un caso en el que usted conoció antes como asesor de la entidad investigada. Ante esta situación, usted',
 ['proyecta la decisión, porque su intervención anterior fue técnica.',
  'manifiesta el posible impedimento por escrito para que se decida conforme a la ley.',
  'proyecta la decisión con especial cuidado y deja constancia en el expediente de que conoció el caso anteriormente.'],
 [0,2,1],
 ['Desconoce el régimen de impedimentos.','Aplica la normatividad.','Transparente, pero no sigue el procedimiento.'])
