import { store } from './store.js';
import { JUEGOS } from './data/juegos.js';
import {
  BBS, PERSONAJES, GRUPOS_LOGROS, RUTA, GOLPES_FINALES, ESTILOS, CUARTELILLO, COSO, COSO_INFO,
  CONSEJOS, BUILDS, FUENTES,
} from './data/bbs.js';
import { INFORMES_XEHANORT, MINIJUEGOS, RETOS, HELADOS, PEGATINAS } from './data/bbs-informes.js';
import { iniciarEstela } from './cursor.js';

const $main = document.getElementById('main');
const $top = document.getElementById('topbar');

// ---------- utilidades ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pctFmt = (n) => (n == null ? '' : `${n.toLocaleString('es-ES', { maximumFractionDigits: 1 })} % de jugadores en Steam`);
const logroPorId = Object.fromEntries(BBS.logros.map((l) => [l.id, l]));
const PJS = Object.values(PERSONAJES);

const ID = {
  logro: (id) => `bbs.logro.${id}`,
  golpe: (pj, nombre) => `bbs.golpe.${pj}.${slug(nombre)}`,
  estilo: (pj, nombre) => `bbs.estilo.${pj}.${slug(nombre)}`,
  coso: (id) => `bbs.coso.${id}`,
  xeh: (id) => `bbs.inf.xeh.${id}`,
  mini: (g, id) => `bbs.inf.mini.${g}.${id}`,
  reto: (id) => `bbs.inf.reto.${id}`,
  helado: (id) => `bbs.inf.helado.${id}`,
  pegatina: (pj, pts) => `bbs.peg.${pj}.${pts}`,
};

// Dos progresos independientes: logros de Steam y 100 % del juego (menú Informes).
const logrosPj = (pj) => BBS.logros.filter((l) => l.pj === pj).map((l) => ID.logro(l.id));
const juegoPj = (pj) => [
  ...INFORMES_XEHANORT.filter((x) => x.pj === pj).map((x) => ID.xeh(x.id)),
  ...GOLPES_FINALES[pj].map((g) => ID.golpe(pj, g.nombre)),
  ...ESTILOS[pj].map((e) => ID.estilo(pj, e.nombre)),
  ...PEGATINAS[pj].map(([p]) => ID.pegatina(pj, p)),
];
const juegoComun = () => [
  ...COSO.map((c) => ID.coso(c.id)),
  ...MINIJUEGOS.flatMap((g) => g.items.map((i) => ID.mini(g.id, i.id))),
  ...RETOS.map((r) => ID.reto(r.id)),
  ...HELADOS.map((h) => ID.helado(h.id)),
];
const juegoBBS = () => [...juegoComun(), ...PJS.flatMap((p) => juegoPj(p.id))];
const ETQ_LOGROS = 'Logros de Steam';
const ETQ_JUEGO = '100 % del juego (Informes)';

const modo = () => store.ajuste('modo', 'logros');

// Medidores de progreso que se actualizan sin repintar la página.
let medidores = {};
function medidor(clave, ids, etiqueta) {
  medidores[clave] = ids;
  const n = store.contar(ids);
  const total = ids.length;
  return `
    <div class="meter${n === total && total ? ' is-full' : ''}" data-meter="${clave}">
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
  document.querySelectorAll('[data-count]').forEach((el) => {
    const ids = medidores[el.dataset.count];
    if (ids) el.textContent = `${store.contar(ids)}/${ids.length}`;
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
  const unicas = [...new Set(claves)];
  return `<p class="sources">Fuente${unicas.length > 1 ? 's' : ''}: ${unicas
    .map((k) => `<a href="${esc(FUENTES[k].url)}" target="_blank" rel="noopener">${esc(FUENTES[k].nombre)}</a>`)
    .join(' · ')}</p>`;
}

const estrellas = (n) => `<span class="stars" aria-label="${n} de 5 estrellas">${'★'.repeat(n)}<span class="stars-off">${'★'.repeat(5 - n)}</span></span>`;
const tagPj = (pj, texto) => `<span class="tag tag-${pj}">${esc(texto)}</span>`;

function item({ id, titulo, desc, meta = '', icono = '', spoiler = false, extra = '', antes = '' }) {
  const hecho = store.hecho(id);
  return `
  <li class="item${hecho ? ' is-done' : ''}">
    <label class="item-row">
      <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
      <span class="crown">${CORONA}</span>
      ${icono ? `<img class="item-icon" src="${esc(icono)}" alt="" width="48" height="48" loading="lazy">` : ''}
      <span class="item-body">
        <span class="item-title">${antes}${esc(titulo)}</span>
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
  extra: CONSEJOS[l.id] ? `<details class="tip"><summary>Cómo conseguirlo</summary><p>${esc(CONSEJOS[l.id])}</p></details>` : '',
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

// Selector de modo: Logros de Steam / Informes (100 %).
function selectorModo(clLogros, idsLogros, clJuego, idsJuego, { subLogros = 'Los 45 logros oficiales', subJuego = 'Todo lo que registra el juego' } = {}) {
  medidores[clLogros] = idsLogros;
  medidores[clJuego] = idsJuego;
  const m = modo();
  const tab = (valor, titulo, sub, cl, ids) => `
    <button type="button" role="tab" class="mode mode-${valor}" data-modo="${valor}" aria-selected="${m === valor}">
      <span class="mode-title">${titulo}</span>
      <span class="mode-sub"><span class="mode-desc">${sub} · </span><b data-count="${cl}">${store.contar(ids)}/${ids.length}</b></span>
    </button>`;
  return `<div class="modes" role="tablist" aria-label="Qué quieres ver">
    ${tab('logros', 'Logros de Steam', subLogros, clLogros, idsLogros)}
    ${tab('informes', 'Informes · 100 %', subJuego, clJuego, idsJuego)}
  </div>`;
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

function bloque(id, titulo, contenido, { meter = '', lead = '' } = {}) {
  return `
    <section class="block" id="${id}">
      <div class="block-head"><h2>${titulo}</h2>${meter}</div>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${contenido}
    </section>`;
}

// --- Hub de BBS: modo Logros ---
function hubLogros() {
  const ruta = RUTA.map((r, i) => `
    <li class="step">
      <span class="step-n" aria-hidden="true">${i + 1}</span>
      <div class="step-body">
        <h3>${esc(r.titulo)}</h3>
        <p>${esc(r.texto)}</p>
        <div class="item-foot">${r.logros.map((id) => `<span class="chip">${esc(logroPorId[id].nombre)}</span>`).join('')}</div>
        ${fuentes(r.fuentes)}
      </div>
    </li>`).join('');

  const grupo = (titulo, ids) => {
    const clave = `g-${slug(titulo)}`;
    medidores[clave] = ids.map(ID.logro);
    return `
    <div class="group">
      <h3>${esc(titulo)} <span class="count" data-count="${clave}">${store.contar(medidores[clave])}/${ids.length}</span></h3>
      <ul class="list">${ids.map((id) => itemLogro(logroPorId[id])).join('')}</ul>
    </div>`;
  };

  const comunes = GRUPOS_LOGROS.map((g) => grupo(g.titulo, g.ids)).join('');
  const porPj = PJS.map((p) => `<div class="pj-${p.id}">${grupo(`Logros de ${p.nombre}`, BBS.logros.filter((l) => l.pj === p.id).map((l) => l.id))}</div>`).join('');

  return `
    ${subnav([['ruta', 'Ruta de logros'], ['logros', 'Logros comunes'], ['logros-pj', 'Logros de personaje']])}
    ${bloque('ruta', 'Ruta de logros', `<ol class="steps">${ruta}</ol>`, { lead: 'Lo que conviene saber antes de empezar para no repetir partidas.' })}
    ${bloque('logros', 'Logros comunes', `${comunes}${fuentes(['steam', 'guiaSteam'])}`, {
      meter: medidor('bbs-comunes-logros', GRUPOS_LOGROS.flatMap((g) => g.ids).map(ID.logro), 'Logros comunes'),
      lead: 'Abre «Cómo conseguirlo» para ver el consejo de cada uno.',
    })}
    ${bloque('logros-pj', 'Logros de cada personaje', porPj)}`;
}

// --- Hub de BBS: modo Informes ---
function cosoLista() {
  const premio = (c) => (c.premio ? PJS.filter((p) => c.premio[p.id]).map((p) => tagPj(p.id, `${p.nombre}: ${c.premio[p.id]}`)).join('') : '');
  const entrada = (c) => [
    c.nivel ? `Nivel ${c.nivel} del Coso${c.ticket ? ', o compra su ticket en la tienda de medallas' : ''}.` : '',
    c.abre || '',
  ].filter(Boolean).join(' ');
  const logroEstrellas = { 1: 'ACH_192', 2: 'ACH_193', 3: 'ACH_194', 4: 'ACH_195' };
  return [1, 2, 3, 4, 5].map((n) => {
    const lista = COSO.filter((c) => c.estrellas === n);
    const l = logroEstrellas[n] && logroPorId[logroEstrellas[n]];
    return `
    <div class="group">
      <h3>${estrellas(n)} ${l ? `<span class="chip chip-logro">Logro «${esc(l.nombre)}»</span>` : '<span class="chip">Cada uno tiene su propio logro</span>'}</h3>
      <ul class="list">${lista.map((c) => item({
        id: ID.coso(c.id),
        titulo: c.nombre + (c.fm ? ' · Final Mix' : ''),
        desc: `Cómo entrar: ${entrada(c)}`,
        meta: [
          `<span>${c.rondas} ${c.rondas === 1 ? 'ronda' : 'rondas'} · ${c.medallas} medallas (${Math.round(c.medallas * 1.5)} como MVP)${c.rival ? ` · Jefe: ${esc(c.rival)}` : ''}</span>`,
          premio(c),
          c.logro ? `<span class="chip chip-logro">Logro «${esc(logroPorId[c.logro].nombre)}»</span>` : '',
          c.nota ? `<span class="note">${esc(c.nota)}</span>` : '',
        ].join(''),
      })).join('')}</ul>
    </div>`;
  }).join('');
}

function hubInformes() {
  const xeh = INFORMES_XEHANORT.map((x) => item({
    id: ID.xeh(x.id), titulo: x.nombre, desc: x.donde, meta: tagPj(x.pj, PERSONAJES[x.pj].nombre),
  })).join('');

  const minis = MINIJUEGOS.map((g) => {
    const ids = g.items.map((i) => ID.mini(g.id, i.id));
    medidores[`mini-${g.id}`] = ids;
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="mini-${g.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">${esc(g.intro)}</p>
      <ul class="list">${g.items.map((i) => item({ id: ID.mini(g.id, i.id), titulo: i.nombre, desc: i.desc })).join('')}</ul>
    </div>`;
  }).join('');

  const retos = RETOS.map((r) => item({
    id: ID.reto(r.id), titulo: `${r.mundo}: ${r.rival}`, desc: `Rango 3: ${r.meta}.`,
    meta: r.premio ? `<span class="chip">Recompensa: ${esc(r.premio)}</span>` : '',
  })).join('');

  const helados = HELADOS.map((h) => item({
    id: ID.helado(h.id), titulo: h.nombre, desc: `Ingredientes: ${h.ing}.`,
    meta: `<span>Activa ${esc(h.estilo)} · ${esc(h.pjs)}</span>`,
  })).join('');

  return `
    ${subnav([['xehanort', 'Informes Xehanort'], ['coso', 'Coso Virtual'], ['minijuegos', 'Minijuegos'], ['retos', 'Retos'], ['helados', 'Helados']])}
    <p class="mode-note">Los golpes finales, estilos de comandos y pegatinas de cada personaje están en su página.</p>
    ${bloque('xehanort', 'Informes Xehanort', `<ul class="list">${xeh}</ul>${fuentes(['wikiEsXehanort', 'guiaSteam'])}`, {
      meter: medidor('inf-xeh', INFORMES_XEHANORT.map((x) => ID.xeh(x.id)), 'Documentos'),
      lead: 'Son 13 documentos repartidos entre los tres personajes. Con todos y las tres historias terminadas se desbloquea el Episodio Final.',
    })}
    ${bloque('coso', 'Coso Virtual', `
      <div class="info-cards">
        <div class="info-card"><h3>Nivel del Coso</h3><p>${esc(COSO_INFO.nivel)}</p></div>
        <div class="info-card"><h3>Tickets</h3><p>${esc(COSO_INFO.tickets)}</p></div>
        <div class="info-card"><h3>Medallas rápidas</h3><p>${esc(COSO_INFO.medallas)}</p></div>
      </div>
      ${cosoLista()}
      ${fuentes(['khwikiArenaMode', 'khwikiTickets', 'khwikiCoso', 'wikiEsCoso', 'guiaSteam'])}`, {
      meter: medidor('inf-coso', COSO.map((c) => ID.coso(c.id)), 'Combates'),
      lead: 'Agrupados por estrellas, que es como cuentan los logros. Cada combate indica cómo se desbloquea.',
    })}
    ${bloque('minijuegos', 'Minijuegos', `${minis}${fuentes(['guiaSteam'])}`, {
      meter: medidor('inf-mini', MINIJUEGOS.flatMap((g) => g.items.map((i) => ID.mini(g.id, i.id))), 'Minijuegos'),
    })}
    ${bloque('retos', 'Retos de los nescientes', `<ul class="list">${retos}</ul>${fuentes(['guiaSteam'])}`, {
      meter: medidor('inf-retos', RETOS.map((r) => ID.reto(r.id)), 'Retos'),
      lead: 'Uno por mundo. Hay que sacar el rango más alto (3) en todos para el logro «Exterminador».',
    })}
    ${bloque('helados', 'Helados', `<ul class="list">${helados}</ul>${fuentes(['wikiEsHelado', 'guiaSteam'])}`, {
      meter: medidor('inf-helados', HELADOS.map((h) => ID.helado(h.id)), 'Helados'),
      lead: 'Se preparan con los sobrinos en la Plaza Mayor de Ciudad Disney. Los ingredientes los suelta el Avituallador. Al prepararlos todos recibes la llave espada Dulce Sorpresa.',
    })}`;
}

function vistaBBS() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Birth by Sleep' }]);
  const todosLogros = BBS.logros.map((l) => ID.logro(l.id));

  const trio = PJS.map((p) => `
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
  <section class="page" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${BBS.logo}" alt="Kingdom Hearts Birth by Sleep Final Mix" width="652" height="478">
      <div class="game-hero-stats">
        ${medidor('bbs-logros', todosLogros, ETQ_LOGROS)}
        ${medidor('bbs-100', juegoBBS(), ETQ_JUEGO)}
      </div>
    </header>
    <section class="trio-wrap" aria-label="Personajes"><div class="trio">${trio}</div></section>
    ${selectorModo('modo-logros', todosLogros, 'modo-100', juegoBBS())}
    ${modo() === 'logros' ? hubLogros() : hubInformes()}
  </section>`;
}

// --- Página de personaje ---
function buildPj(pj) {
  const b = BUILDS[pj];
  const c = BUILDS.comun;
  const linea = (x) => `<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span><a class="src" href="${esc(FUENTES[x.f].url)}" target="_blank" rel="noopener">${esc(FUENTES[x.f].nombre)}</a></li>`;
  const tarjeta = (titulo, lineas) => `<div class="build-card"><h3>${titulo}</h3><ul>${lineas.map(linea).join('')}</ul></div>`;
  return `
    <div class="build">
      ${tarjeta('Llave espada', c.llave)}
      ${tarjeta('Ataque', b.ataque)}
      ${tarjeta('Magia', b.magia)}
      ${tarjeta('Tiro certero', [b.tiro])}
      ${tarjeta('Acción y defensa', [b.accion, c.defensa])}
      ${tarjeta('Habilidades', [c.habilidades])}
    </div>`;
}

function vistaPersonaje(pj) {
  const p = PERSONAJES[pj];
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Birth by Sleep', href: '#/bbs' }, { t: p.nombre }]);
  const logros = BBS.logros.filter((l) => l.pj === pj);
  const golpes = GOLPES_FINALES[pj];
  const estilos = ESTILOS[pj];
  const niveles = [...new Set(golpes.map((g) => g.nivel))];
  const otros = PJS.filter((o) => o.id !== pj);
  const m = modo();

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

  const contLogros = `
    ${subnav([['build', 'Build'], ['logros', 'Logros'], ['cuartelillo', 'Cuartelillo']])}
    ${bloque('build', 'Build recomendada', buildPj(pj), { lead: 'Equipamiento que recomiendan las guías para los jefes más duros. Cada línea enlaza su fuente.' })}
    ${bloque('logros', `Logros de ${p.nombre}`, `<ul class="list">${logros.map(itemLogro).join('')}</ul>${fuentes(['steam', 'guiaSteam'])}`)}
    ${bloque('cuartelillo', 'Cuartelillo', `
      <ul class="recipes">${CUARTELILLO[pj].map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <p class="hint">Cada síntesis tiene un 10 % de probabilidad de dar Cuartelillo; el 90 % restante da Hoja Afortunada.</p>
      ${fuentes(['wikiEsCuartelillo'])}`, {
      lead: `Ejecutarlo con ${p.nombre} da el logro «${esc(logros.find((l) => /Cuartelillo/.test(l.desc))?.nombre)}». Hay uno en un cofre de Ciudad Disney (sala de juegos de Pete) o puedes sintetizarlo:`,
    })}`;

  const xeh = INFORMES_XEHANORT.filter((x) => x.pj === pj);
  const contInformes = `
    ${subnav([['build', 'Build'], ['xehanort', 'Informes Xehanort'], ['golpes', 'Golpes finales'], ['estilos', 'Estilos'], ['pegatinas', 'Pegatinas'], ['comandos', 'Comandos']])}
    ${bloque('build', 'Build recomendada', buildPj(pj), { lead: 'Equipamiento que recomiendan las guías para los jefes más duros. Cada línea enlaza su fuente.' })}
    ${bloque('xehanort', `Informes Xehanort de ${p.nombre}`, `<ul class="list">${xeh.map((x) => item({ id: ID.xeh(x.id), titulo: x.nombre, desc: x.donde })).join('')}</ul>${fuentes(['wikiEsXehanort'])}`, {
      meter: medidor(`pj-${pj}-xeh`, xeh.map((x) => ID.xeh(x.id)), 'Documentos'),
    })}
    ${bloque('golpes', 'Golpes finales', `<div class="tree">${arbol}</div>${fuentes(['wikiEsGolpes', 'khwikiGolpes'])}`, {
      meter: medidor(`pj-${pj}-golpes`, golpes.map((g) => ID.golpe(pj, g.nombre)), 'Golpes finales'),
      lead: `Se aprenden en forma de árbol: para desbloquear uno, equipa su antecesor y cumple la condición. Aprenderlos todos da el logro «El guerrero: ${p.nombre}».`,
    })}
    ${bloque('estilos', 'Estilos de comandos', `<ul class="list">${estilos.map((e) => item({
      id: ID.estilo(pj, e.nombre), titulo: e.nombre, desc: e.cond, meta: esc(e.tipo),
    })).join('')}</ul>${fuentes(['wikiEsEstilos'])}`, {
      meter: medidor(`pj-${pj}-estilos`, estilos.map((e) => ID.estilo(pj, e.nombre)), 'Estilos'),
    })}
    ${bloque('pegatinas', 'Álbum de pegatinas', `<ul class="list">${PEGATINAS[pj].map(([pts, premio]) => item({
      id: ID.pegatina(pj, pts), titulo: `${pts} puntos`, desc: `Recompensa: ${premio}.`,
    })).join('')}</ul>${fuentes(['wikiEsPegatinas', 'guiaSteam'])}`, {
      meter: medidor(`pj-${pj}-peg`, PEGATINAS[pj].map(([pts]) => ID.pegatina(pj, pts)), 'Recompensas'),
      lead: 'Cada pegatina da entre 5 y 7 puntos según lo bien que la coloques. Hay que encontrarlas todas y pegarlas bien para llegar a 140.',
    })}
    ${bloque('comandos', 'Comandos', `<div class="empty"><p><b>Próxima entrega.</b> Lista completa de comandos de ${p.nombre} (ataque, magia, acción, defensa, Tiro certero y Nexo-D) con su receta de síntesis o dónde conseguirlos.</p></div>`)}`;

  return `
  <section class="page pj pj-${pj}" data-modo="${m}">
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
        <p class="pj-switch">Cambiar a ${otros.map((o) => `<a href="#/bbs/${o.id}" class="pj-link pj-${o.id}">${o.nombre}</a>`).join(' o ')}</p>
      </div>
    </header>
    ${selectorModo(`pj-${pj}-modo-logros`, logrosPj(pj), `pj-${pj}-modo-100`, juegoPj(pj), {
      subLogros: `Logros propios de ${p.nombre}`, subJuego: 'Informes, golpes, estilos y pegatinas',
    })}
    ${m === 'logros' ? contLogros : contInformes}
  </section>`;
}

function vista404() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'No encontrado' }]);
  return `<section class="page"><h1 class="page-title">Esta página no existe</h1><p class="lead"><a href="#/juegos">Vuelve a la elección de juego</a>.</p></section>`;
}

// ---------- router ----------
function render({ conservarScroll = false } = {}) {
  medidores = {};
  const y = window.scrollY;
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
  if (conservarScroll) window.scrollTo(0, y);
  else {
    window.scrollTo(0, 0);
    $main.focus({ preventScroll: true });
  }
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
  const tab = e.target.closest('[data-modo]');
  if (tab && tab.matches('button')) {
    if (tab.dataset.modo !== modo()) {
      store.fijarAjuste('modo', tab.dataset.modo);
      render({ conservarScroll: true });
      document.querySelector(`.mode-${tab.dataset.modo}`)?.focus({ preventScroll: true });
    }
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

// Flechas izquierda/derecha entre las dos pestañas del selector de modo.
document.addEventListener('keydown', (e) => {
  const tab = e.target.closest?.('.modes [role="tab"]');
  if (!tab || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const otro = tab.parentElement.querySelector(`[role="tab"]:not([data-modo="${tab.dataset.modo}"])`);
  otro?.click();
});

store.alCambiar(refrescarMedidores);
window.addEventListener('hashchange', () => render());
render();
iniciarEstela();
