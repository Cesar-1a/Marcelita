/* Contador de visitas anónimo con GoatCounter (https://www.goatcounter.com).
   Para activarlo, escriba entre las comillas el código de su sitio en GoatCounter
   (lo que va antes de ".goatcounter.com"). Si se deja vacío, no se cuenta nada.
   "prefijo" separa cada convocatoria en el panel (p. ej. /217/simulacro, /388/simulacro).
   Se registra solo qué sección se abre; nunca respuestas, puntajes ni datos personales.
   GoatCounter no cuenta las visitas desde localhost (pruebas en el computador). */
window.VISITAS = { codigo: 'simuladorpgn', prefijo: '143' };

(function () {
  const codigo = (window.VISITAS.codigo || '').trim();
  if (!codigo) return;
  window.goatcounter = { no_onload: true };
  const pre = (window.VISITAS.prefijo || '').trim();
  const seccion = () => (pre ? '/' + pre : '') + '/' + ((location.hash || '#inicio').slice(1).split('/')[0] || 'inicio');
  const contar = () => {
    try { if (window.goatcounter.count) window.goatcounter.count({ path: seccion(), title: document.title }); } catch (e) { /* sin conexión: se ignora */ }
  };
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = 'https://' + encodeURIComponent(codigo) + '.goatcounter.com/count';
  s.onload = contar;
  document.head.appendChild(s);
  window.addEventListener('hashchange', contar);
})();
