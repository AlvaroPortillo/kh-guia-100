import { store } from './store.js';
import { JUEGOS } from './data/juegos.js';
import {
  BBS, PERSONAJES, GRUPOS_LOGROS, RUTA, GOLPES_FINALES, ESTILOS, CUARTELILLO, COSO, FUENTES,
} from './data/bbs.js';

const $main = document.getElementById('main');
const $top = document.getElementById('topbar');

// ---------- utilidades ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pctFmt = (n) => (n == null ? '' : `${n.toLocaleString('es-ES', { maximumFractionDigits: 1 })} % de jugadores en Steam`);
const logroPorId = Object.fromEntries(BBS.logros.map((l) => [l.id, l]));

const ID = {
  logro: (id) => `bbs.logro.${id}`,
  ruta: (id) => `bbs.ruta.${id}`,
  golpe: (pj, nombre) => `bbs.golpe.${pj}.${slug(nombre)}`,
  estilo: (pj, nombre) => `bbs.estilo.${pj}.${slug(nombre)}`,
  coso: (id) => `bbs.coso.${id}`,
};

// Medidores de progreso que se actualizan sin repintar la página.
let medidores = {};
function medidor(clave, ids, etiqueta) {
  medidores[clave] = ids;
  const n = store.contar(ids);
  const total = ids.length;
  return `
    <div class="meter" data-meter="${clave}">
      <div class="meter-head"><span class="meter-label">${esc(etiqueta)}</span>
        <span class="meter-num"><b>${n}</b> / ${total}</span></div>
      <div class="meter-track" role="progressbar" aria-label="${esc(etiqueta)}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}">
        <span class="meter-fill" style="--p:${total ? n / total : 0}"></span></div>
    </div>`;
}
function refrescarMedidores() {
  document.querySelectorAll('[data-meter]').forEach((el) => {
    const ids = medidores[el.dataset.meter];
    if (!ids) return;
    const n = store.contar(ids);
    el.querySelector('.meter-num b').textContent = n;
    el.querySelector('.meter-track').setAttribute('aria-valuenow', n);
    el.querySelector('.meter-fill').style.setProperty('--p', ids.length ? n / ids.length : 0);
    el.classList.toggle('is-full', n === ids.length);
  });
}

// ---------- piezas visuales ----------
const CORONA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18 4.6 7.5l4.6 4.8L12 4l2.8 8.3 4.6-4.8L21 18Z"/><rect x="3" y="19.2" width="18" height="2.3" rx="1.1"/></svg>';

// Vidriera de la Estación del Despertar dibujada en SVG.
let vidrieraN = 0;
function vidriera(colores, { porciones = 18, clase = '' } = {}) {
  const r1 = 38, r2 = 90;
  const p = (r, a) => `${(r * Math.cos(a)).toFixed(2)} ${(r * Math.sin(a)).toFixed(2)}`;
  let segs = '';
  for (let i = 0; i < porciones; i++) {
    const a0 = (i / porciones) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((i + 1) / porciones) * Math.PI * 2 - Math.PI / 2;
    const c = colores[i % colores.length];
    const o = [0.95, 0.6, 0.8][i % 3];
    segs += `<path d="M${p(r1, a0)} L${p(r2, a0)} A${r2} ${r2} 0 0 1 ${p(r2, a1)} L${p(r1, a1)} A${r1} ${r1} 0 0 0 ${p(r1, a0)}Z" style="fill:${c};fill-opacity:${o}"/>`;
  }
  let medallas = '';
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    medallas += `<circle cx="${(64 * Math.cos(a)).toFixed(2)}" cy="${(64 * Math.sin(a)).toFixed(2)}" r="13" class="v-medal"/>`;
  }
  const gid = `vcore${++vidrieraN}`;
  return `
  <svg class="vidriera ${clase}" viewBox="-100 -100 200 200" aria-hidden="true">
    <defs><radialGradient id="${gid}" r="0.6"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" style="stop-color:${colores[0]};stop-opacity:.55"/></radialGradient></defs>
    <circle r="98" class="v-rim"/>
    <g class="v-lead">${segs}</g>
    <circle r="${r2}" class="v-ring"/>
    ${medallas}
    <circle r="${r1}" fill="url(#${gid})" class="v-core"/>
    <path class="v-crown" d="M-16 9 -13 -9 -5 -1 0 -14 5 -1 13 -9 16 9Z"/>
    <rect class="v-crown" x="-16" y="11" width="32" height="4" rx="2"/>
  </svg>`;
}

function fuentes(claves) {
  return `<p class="sources">Fuente${claves.length > 1 ? 's' : ''}: ${claves
    .map((k) => `<a href="${esc(FUENTES[k].url)}" target="_blank" rel="noopener">${esc(FUENTES[k].nombre)}</a>`)
    .join(' · ')}</p>`;
}

function item({ id, titulo, desc, meta = '', icono = '', spoiler = false, extra = '' }) {
  const hecho = store.hecho(id);
  return `
  <li class="item${hecho ? ' is-done' : ''}">
    <label class="item-row">
      <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
      <span class="crown">${CORONA}</span>
      ${icono ? `<img class="item-icon" src="${esc(icono)}" alt="" width="48" height="48" loading="lazy">` : ''}
      <span class="item-body">
        <span class="item-title">${esc(titulo)}</span>
        ${desc && !spoiler ? `<span class="item-desc">${esc(desc)}</span>` : ''}
        ${meta ? `<span class="item-meta">${meta}</span>` : ''}
      </span>
    </label>
    ${spoiler ? `<details class="spoiler"><summary>Logro oculto · ver descripción</summary><p>${esc(desc)}</p></details>` : ''}
    ${extra}
  </li>`;
}

const itemLogro = (l) => item({
  id: ID.logro(l.id),
  titulo: l.nombre,
  desc: l.desc,
  meta: esc(pctFmt(l.pct)),
  icono: `assets/img/bbs/logros/${l.id}.jpg`,
  spoiler: l.oculto,
});

// ---------- barra superior ----------
function topbar(migas) {
  const ocultar = store.ajuste('ocultarHechos', false);
  const tema = document.documentElement.dataset.theme;
  $top.hidden = false;
  $top.innerHTML = `
    <a class="brand" href="#/juegos"><span class="brand-crown">${CORONA}</span><span>Guía 100 %</span></a>
    <nav class="crumbs" aria-label="Ruta">${migas.map((m, i) => (i < migas.length - 1
      ? `<a href="${m.href}">${esc(m.t)}</a><span aria-hidden="true">/</span>`
      : `<span aria-current="page">${esc(m.t)}</span>`)).join('')}</nav>
    <div class="tools">
      <button class="tool" type="button" data-accion="ocultar" aria-pressed="${ocultar}"><span class="t-long">Ocultar conseguidos</span><span class="t-short">Ocultar</span></button>
      <button class="tool tool-icon" type="button" data-accion="tema" aria-label="Cambiar a tema ${tema === 'dark' ? 'claro' : 'oscuro'}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z"/></svg></button>
      <details class="menu">
        <summary class="tool"><span class="t-long">Mi progreso</span><span class="t-short">Copia</span></summary>
        <div class="menu-panel">
          <p>Tu progreso se guarda en este navegador. Exporta una copia para no perderlo o pasarlo a otro equipo.</p>
          <button type="button" data-accion="exportar">Exportar copia</button>
          <label class="file-btn">Importar copia<input type="file" accept="application/json" data-accion="importar" class="sr-only"></label>
          <button type="button" class="danger" data-accion="borrar">Borrar todo el progreso</button>
        </div>
      </details>
    </div>`;
  document.body.classList.toggle('hide-done', ocultar);
}

// ---------- vistas ----------
function vistaTitulo() {
  $top.hidden = true;
  return `
  <section class="title-screen">
    <div class="title-glass">${vidriera(['var(--aqua)', 'var(--ventus)', 'var(--terra)'], { porciones: 18, clase: 'spin' })}</div>
    <div class="title-copy">
      <img class="title-logo" src="assets/img/logos/remix.png" alt="Kingdom Hearts HD 1.5+2.5 ReMIX" width="699" height="491">
      <h1 class="title-word">Guía al 100 %</h1>
      <p class="title-sub">Logros de Steam, coleccionables y comandos de cada juego, en castellano. Marca lo que consigas y lleva tu propio registro.</p>
      <a class="btn-start" href="#/juegos">Empezar</a>
    </div>
  </section>`;
}

function vistaJuegos() {
  topbar([{ t: 'Juegos' }]);
  const tile = (j) => {
    const meta = j.disponible
      ? `<div class="meters-2">${medidor(`juego-${j.id}-logros`, BBS.logros.map((l) => ID.logro(l.id)), ETQ_LOGROS)}
         ${medidor(`juego-${j.id}-100`, juegoBBS(), ETQ_JUEGO)}</div>`
      : '<p class="soon">En preparación</p>';
    const inner = `
      <img class="game-logo" src="${j.logo}" alt="" loading="lazy">
      <span class="game-name">${esc(j.nombre)}</span>
      ${meta}`;
    return j.disponible
      ? `<a class="game game-on" href="#/${j.id}">${inner}</a>`
      : `<div class="game game-off" aria-disabled="true">${inner}</div>`;
  };
  return `
  <section class="page games">
    <h1 class="page-title">Elige un juego</h1>
    <p class="lead">Empezamos por Birth by Sleep. El resto irá apareciendo según avance la guía.</p>
    <div class="game-grid">${JUEGOS.map(tile).join('')}</div>
  </section>`;
}

function subnav(secciones) {
  return `<nav class="subnav" aria-label="Secciones">${secciones
    .map(([id, t]) => `<a href="#${id}" data-goto="${id}">${esc(t)}</a>`).join('')}</nav>`;
}

function vistaBBS() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Birth by Sleep' }]);
  const todosLogros = BBS.logros.map((l) => ID.logro(l.id));
  const comunes = GRUPOS_LOGROS.flatMap((g) => g.ids).map(ID.logro);
  const rutaIds = RUTA.map((r) => ID.ruta(r.id));
  const cosoIds = COSO.map((c) => ID.coso(c.id));

  const ruta = RUTA.map((r) => item({
    id: ID.ruta(r.id),
    titulo: r.titulo,
    desc: r.texto,
    extra: `<div class="item-foot">${r.logros.map((id) => `<span class="chip">${esc(logroPorId[id].nombre)}</span>`).join('')}${fuentes(r.fuentes)}</div>`,
  })).join('');

  const grupos = GRUPOS_LOGROS.map((g) => `
    <div class="group">
      <h3>${esc(g.titulo)}</h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroPorId[id])).join('')}</ul>
    </div>`).join('');

  const pjs = Object.values(PERSONAJES);
  const premio = (c) => (c.premio
    ? pjs.filter((p) => c.premio[p.id]).map((p) => `<span class="tag tag-${p.id}">${p.nombre}: ${esc(c.premio[p.id])}</span>`).join('')
    : '');
  const coso = COSO.map((c) => item({
    id: ID.coso(c.id),
    titulo: c.nombre + (c.fm ? ' (Final Mix)' : ''),
    desc: c.nivel ? `Nivel ${c.nivel} · ${c.medallas} medallas · Último asalto: ${c.rival}` : 'Ficha pendiente: la wiki en español aún no detalla este encuentro.',
    meta: [premio(c), c.logro ? `<span class="chip">Logro: ${esc(logroPorId[c.logro].nombre)}</span>` : ''].join(''),
  })).join('');

  const trio = pjs.map((p) => `
    <a class="hero-card pj-${p.id}" href="#/bbs/${p.id}">
      <span class="stage">
        ${vidriera([`var(--${p.id})`], { porciones: 12, clase: 'floor' })}
        <img src="${p.img}" alt="" class="render">
      </span>
      <span class="hero-name">${p.nombre}</span>
      <div class="meters-2">
        ${medidor(`pj-${p.id}-logros`, logrosPj(p.id), 'Logros')}
        ${medidor(`pj-${p.id}-100`, juegoPj(p.id), '100 %')}
      </div>
    </a>`).join('');

  return `
  <section class="page">
    <header class="game-hero">
      <img class="game-hero-logo" src="${BBS.logo}" alt="Kingdom Hearts Birth by Sleep Final Mix" width="652" height="478">
      <div class="game-hero-stats">
        ${medidor('bbs-logros', todosLogros, ETQ_LOGROS)}
        ${medidor('bbs-100', juegoBBS(), ETQ_JUEGO)}
      </div>
    </header>

    <section class="trio-wrap" aria-label="Personajes">
      <div class="trio">${trio}</div>
    </section>

    ${subnav([['ruta', 'Ruta al 100 %'], ['coso', 'Coso Virtual'], ['logros', 'Logros comunes']])}

    <section class="block" id="ruta">
      <div class="block-head"><h2>Ruta al 100 % ${tipo('juego')}</h2>${medidor('bbs-ruta', rutaIds, 'Pasos')}</div>
      <p class="lead">Lo que conviene saber antes de empezar. Marca cada paso cuando lo tengas.</p>
      <ol class="list list-steps">${ruta}</ol>
    </section>

    <section class="block" id="coso">
      <div class="block-head"><h2>Coso Virtual ${tipo('juego')}</h2>${medidor('bbs-coso', cosoIds, 'Encuentros')}</div>
      <p class="lead">Encuentros de combate y su recompensa para cada personaje.</p>
      <ul class="list">${coso}</ul>
      ${fuentes(['wikiEsCoso', 'khwikiArena'])}
    </section>

    <section class="block" id="logros">
      <div class="block-head"><h2>Logros comunes ${tipo('logros')}</h2>${medidor('bbs-comunes', comunes, 'Logros')}</div>
      <p class="lead">Los logros de un solo personaje están en su página.</p>
      ${grupos}
      ${fuentes(['steam'])}
    </section>
  </section>`;
}

// Dos progresos independientes: los logros de Steam y el 100 % del juego
// (lo que registran los Informes: golpes finales, estilos, Coso Virtual…).
const logrosPj = (pj) => BBS.logros.filter((l) => l.pj === pj).map((l) => ID.logro(l.id));
const juegoPj = (pj) => [
  ...GOLPES_FINALES[pj].map((g) => ID.golpe(pj, g.nombre)),
  ...ESTILOS[pj].map((e) => ID.estilo(pj, e.nombre)),
];
const juegoBBS = () => [
  ...RUTA.map((r) => ID.ruta(r.id)),
  ...COSO.map((c) => ID.coso(c.id)),
  ...Object.keys(PERSONAJES).flatMap(juegoPj),
];
const ETQ_LOGROS = 'Logros de Steam';
const ETQ_JUEGO = '100 % del juego (Informes)';
const tipo = (t) => (t === 'logros'
  ? '<span class="kind kind-logros">Cuenta para logros</span>'
  : '<span class="kind kind-juego">Cuenta para el 100 %</span>');

function vistaPersonaje(pj) {
  const p = PERSONAJES[pj];
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Birth by Sleep', href: '#/bbs' }, { t: p.nombre }]);
  const logros = BBS.logros.filter((l) => l.pj === pj);
  const golpes = GOLPES_FINALES[pj];
  const estilos = ESTILOS[pj];
  const niveles = [...new Set(golpes.map((g) => g.nivel))];
  const otros = Object.values(PERSONAJES).filter((o) => o.id !== pj);

  const arbol = niveles.map((n) => `
    <div class="tier">
      <h3 class="tier-title">Nivel ${n}</h3>
      <ul class="list list-tight">${golpes.filter((g) => g.nivel === n).map((g) => item({
        id: ID.golpe(pj, g.nombre),
        titulo: g.nombre,
        desc: g.cond,
        meta: [esc(g.desc), g.nota ? `<span class="note">${esc(g.nota)}</span>` : ''].filter(Boolean).join('<br>'),
      })).join('')}</ul>
    </div>`).join('');

  return `
  <section class="page pj pj-${pj}">
    <header class="pj-hero">
      <div class="stage stage-lg">
        ${vidriera([`var(--${pj})`], { porciones: 16, clase: 'floor' })}
        <img src="${p.img}" alt="${p.nombre} en Birth by Sleep" class="render">
      </div>
      <div class="pj-copy">
        <h1 class="pj-name">${p.nombre}</h1>
        <div class="meters-2 meters-big">
          ${medidor(`pj-${pj}-logros`, logrosPj(pj), ETQ_LOGROS)}
          ${medidor(`pj-${pj}-100`, juegoPj(pj), ETQ_JUEGO)}
        </div>
        <div class="pj-meters">
          ${medidor(`pj-${pj}-golpes`, golpes.map((g) => ID.golpe(pj, g.nombre)), 'Golpes finales')}
          ${medidor(`pj-${pj}-estilos`, estilos.map((e) => ID.estilo(pj, e.nombre)), 'Estilos de comandos')}
        </div>
        <p class="pj-switch">Cambiar a ${otros.map((o) => `<a href="#/bbs/${o.id}" class="pj-link pj-${o.id}">${o.nombre}</a>`).join(' o ')}</p>
      </div>
    </header>
    ${subnav([['logros', 'Logros'], ['golpes', 'Golpes finales'], ['estilos', 'Estilos de comandos'], ['cuartelillo', 'Cuartelillo'], ['comandos', 'Comandos']])}

    <section class="block" id="logros">
      <h2>Logros de ${p.nombre} ${tipo('logros')}</h2>
      <ul class="list">${logros.map(itemLogro).join('')}</ul>
      ${fuentes(['steam'])}
    </section>

    <section class="block" id="golpes">
      <h2>Golpes finales ${tipo('juego')}</h2>
      <p class="lead">Se aprenden en forma de árbol: para desbloquear uno, equipa su antecesor y cumple la condición. Aprenderlos todos da el logro «El guerrero: ${p.nombre}».</p>
      <div class="tree">${arbol}</div>
      ${fuentes(['wikiEsGolpes', 'khwikiGolpes'])}
    </section>

    <section class="block" id="estilos">
      <h2>Estilos de comandos ${tipo('juego')}</h2>
      <ul class="list">${estilos.map((e) => item({
        id: ID.estilo(pj, e.nombre), titulo: e.nombre, desc: e.cond, meta: esc(e.tipo),
      })).join('')}</ul>
      ${fuentes(['wikiEsEstilos'])}
    </section>

    <section class="block" id="cuartelillo">
      <h2>Cuartelillo</h2>
      <p class="lead">Ejecutarlo con ${p.nombre} da el logro «${esc(logros.find((l) => /Cuartelillo/.test(l.desc))?.nombre)}». Hay uno en un cofre de Ciudad Disney (sala de juegos de Pete) o puedes sintetizarlo:</p>
      <ul class="recipes">${CUARTELILLO[pj].map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <p class="hint">Cada síntesis tiene un 10 % de probabilidad de dar Cuartelillo; el 90 % restante da Hoja Afortunada.</p>
      ${fuentes(['wikiEsCuartelillo'])}
    </section>

    <section class="block" id="comandos">
      <h2>Comandos</h2>
      <div class="empty">
        <p><b>Próxima entrega.</b> Aquí irá la lista completa de comandos de ${p.nombre} (ataque, magia, acción, defensa, Tiro certero y Nexo-D) con cómo conseguir cada uno: tiendas, cofres, síntesis y recompensas.</p>
      </div>
    </section>
  </section>`;
}

function vista404() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'No encontrado' }]);
  return `<section class="page"><h1 class="page-title">Esta página no existe</h1><p class="lead"><a href="#/juegos">Vuelve a la elección de juego</a>.</p></section>`;
}

// ---------- router ----------
function render() {
  medidores = {};
  const ruta = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  let html;
  if (ruta.length === 0) html = vistaTitulo();
  else if (ruta[0] === 'juegos') html = vistaJuegos();
  else if (ruta[0] === 'bbs' && !ruta[1]) html = vistaBBS();
  else if (ruta[0] === 'bbs' && PERSONAJES[ruta[1]]) html = vistaPersonaje(ruta[1]);
  else html = vista404();
  document.body.dataset.view = ruta[0] || 'titulo';
  $main.innerHTML = html;
  refrescarMedidores();
  window.scrollTo(0, 0);
  $main.focus({ preventScroll: true });
}

// ---------- eventos ----------
document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.matches('.check-input')) {
    store.marcar(t.dataset.id, t.checked);
    t.closest('.item').classList.toggle('is-done', t.checked);
  } else if (t.matches('[data-accion="importar"]') && t.files[0]) {
    t.files[0].text().then((txt) => {
      try { store.importar(txt); render(); alert('Progreso importado.'); } catch (err) { alert(err.message); }
    });
  }
});

document.addEventListener('click', (e) => {
  const goto = e.target.closest('[data-goto]');
  if (goto) {
    e.preventDefault();
    const el = document.getElementById(goto.dataset.goto);
    el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    return;
  }
  const btn = e.target.closest('button[data-accion]');
  if (!btn) return;
  const accion = btn.dataset.accion;
  if (accion === 'ocultar') {
    const v = !store.ajuste('ocultarHechos', false);
    store.fijarAjuste('ocultarHechos', v);
    btn.setAttribute('aria-pressed', v);
    document.body.classList.toggle('hide-done', v);
  } else if (accion === 'tema') {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    store.fijarAjuste('tema', t);
    btn.setAttribute('aria-label', `Cambiar a tema ${t === 'dark' ? 'claro' : 'oscuro'}`);
  } else if (accion === 'exportar') {
    const blob = new Blob([store.exportar()], { type: 'application/json' });
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(blob),
      download: `kh-guia-100-progreso-${new Date().toISOString().slice(0, 10)}.json`,
    });
    a.click();
    URL.revokeObjectURL(a.href);
  } else if (accion === 'borrar') {
    if (confirm('¿Borrar todo tu progreso? No se puede deshacer (salvo que tengas una copia exportada).')) { store.borrarTodo(); render(); }
  }
});

store.alCambiar(refrescarMedidores);
window.addEventListener('hashchange', render);
render();
