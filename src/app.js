import { store } from './store.js';
import { JUEGOS } from './data/juegos.js';
import {
  BBS, PERSONAJES, GRUPOS_LOGROS, RUTA, GOLPES_FINALES, ESTILOS, CUARTELILLO, COSO, COSO_INFO,
  CONSEJOS, FUENTES,
} from './data/bbs.js';
import { PIEZAS, COMBATES, HABILIDADES, CRISTALES, VIAS, IMG_BUILD } from './data/bbs-build.js';
import { COSO_RONDAS, COSO_ESTRATEGIA, COSO_GENERAL } from './data/bbs-coso.js';
import { JEFES, FASES } from './data/bbs-jefes.js';
import { LISTAS_COMANDOS, COMANDOS } from './data/bbs-comandos.js';
import { NEXOS } from './data/bbs-nexos.js';
import { PEGATINAS_MUNDOS } from './data/bbs-pegatinas.js';
import { TESOROS } from './data/bbs-tesoros.js';
import { TABLEROS } from './data/bbs-tableros.js';
import { TABLEROS_INFO } from './data/bbs-tableros-info.js';
import { POS_CASILLAS } from './data/bbs-tableros-pos.js';
import { AVANCE } from './data/bbs-avance.js';
import { INFORMES_XEHANORT, MINIJUEGOS, RETOS, HELADOS, PEGATINAS } from './data/bbs-informes.js';
import {
  KHFM, FUENTES_KHFM, GRUPOS_LOGROS_KHFM, RUTA_KHFM, CONSEJOS_KHFM, FUENTES_CONSEJOS_KHFM, MUNDOS_KHFM, FUENTES_MUNDOS_KHFM,
} from './data/khfm.js';
import {
  FUENTES_DIARIO, SECCIONES_DIARIO, INFORMES_ANSEM, DALMATAS, PREMIOS_DALMATAS, TIPOS_TRIO, MARCAS_TRIO, RECORDS, PAGINAS_POOH,
} from './data/khfm-diario.js';
import {
  FUENTES_ARMAS, IMG_ARMAS, ARMAS, FUENTES_ARMAS_LISTA, MATERIALES, LISTAS_SINTESIS, PASOS_SINTESIS, FUENTES_SINTESIS_KHFM,
} from './data/khfm-armas.js';
import {
  FUENTES_GUMI, IMG_GUMI, MISIONES_GUMI, MISIONES_INFO, NAVE_BASE, PLANOS_BASICOS, PLANOS_ENEMIGOS, PLANO_BAHAMUT,
} from './data/khfm-gumi.js';
import {
  FUENTES_SINTESIS, DESC_COMANDOS, CRISTALES_ORDEN, TABLA_TIPOS, NOTAS_TABLA, LETRA_TIPO, HABILIDADES_BBS, CRISTALES_EXTRA, LIBROS_RECETAS,
} from './data/bbs-sintesis.js';
import { iniciarEstela } from './cursor.js';

const $main = document.getElementById('main');
const $top = document.getElementById('topbar');

// ---------- utilidades ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pctFmt = (n) => (n == null ? '' : `${n.toLocaleString('es-ES', { maximumFractionDigits: 1 })} % de jugadores en Steam`);
const logroPorId = Object.fromEntries(BBS.logros.map((l) => [l.id, l]));
const logroKhfm = Object.fromEntries(KHFM.logros.map((l) => [l.id, l]));
const TODAS_FUENTES = { ...FUENTES, ...FUENTES_KHFM, ...FUENTES_SINTESIS, ...FUENTES_DIARIO, ...FUENTES_ARMAS, ...FUENTES_GUMI };
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
  pegMundo: (pj, mundo) => `bbs.peg.mundo.${pj}.${mundo}`,
  tesoro: (pj, mundo, t) => `bbs.tesoro.${pj}.${mundo}.${t}`,
  tablero: (pj, t) => `bbs.tablero.${pj}.${t}`,
  tableroCoso: (pj, t) => `bbs.tablero.coso.${pj}.${t}`,
  tableroCmd: (pj, n) => `bbs.tablero.cmd.${pj}.${slug(n)}`,
  khfmLogro: (id) => `khfm.logro.${id}`,
  khfmAnsem: (n) => `khfm.ansem.${n}`,
  khfmDalmata: (n) => `khfm.dalmata.${n}`,
  khfmTrio: (tipo, i) => `khfm.trio.${tipo}.${i}`,
  khfmRecord: (id) => `khfm.record.${id}`,
  khfmArma: (id) => `khfm.arma.${id}`,
  khfmSintesis: (id) => `khfm.sintesis.${id}`,
  khfmMision: (mundo, n) => `khfm.gumi.mision.${mundo}.${n}`,
  khfmPlano: (id) => `khfm.gumi.plano.${id}`,
};

// Dos progresos independientes: logros de Steam y 100 % del juego (menú Informes).
const idsTesoros = (pj) => TESOROS[pj].flatMap((m) => m.tesoros.filter((t) => !t.extra).map((t) => ID.tesoro(pj, m.id, t.id)));
const logrosPj = (pj) => BBS.logros.filter((l) => l.pj === pj).map((l) => ID.logro(l.id));
const juegoPj = (pj) => [
  ...INFORMES_XEHANORT.filter((x) => x.pj === pj).map((x) => ID.xeh(x.id)),
  ...GOLPES_FINALES[pj].map((g) => ID.golpe(pj, g.nombre)),
  ...ESTILOS[pj].map((e) => ID.estilo(pj, e.nombre)),
  ...PEGATINAS_MUNDOS[pj].map((m) => ID.pegMundo(pj, m.id)),
  ...PEGATINAS[pj].map(([p]) => ID.pegatina(pj, p)),
  ...idsTesoros(pj),
  ...TABLEROS.map((t) => ID.tablero(pj, t.id)),
  ...exclusivosDeTablero(pj).map((e) => ID.tableroCmd(pj, e.n)),
];
const juegoComun = () => [
  ...COSO.map((c) => ID.coso(c.id)),
  ...MINIJUEGOS.flatMap((g) => g.items.map((i) => ID.mini(g.id, i.id))),
  ...RETOS.map((r) => ID.reto(r.id)),
  ...HELADOS.map((h) => ID.helado(h.id)),
];
const juegoBBS = () => [...juegoComun(), ...PJS.flatMap((p) => juegoPj(p.id))];
// KH Final Mix: las cerraduras son logros, así que el 100 % usa sus mismas marcas.
const logrosKHFM = () => KHFM.logros.map((l) => ID.khfmLogro(l.id));
const triosDe = (tipo) => MARCAS_TRIO.filter((m) => m[0] === tipo);
const idsAnsem = () => INFORMES_ANSEM.map((x) => ID.khfmAnsem(x.n));
const idsDalmatas = () => DALMATAS.map((d) => ID.khfmDalmata(d.n));
const idsTrio = () => TIPOS_TRIO.flatMap((tp) => triosDe(tp.id).map((_, i) => ID.khfmTrio(tp.id, i + 1)));
const idsRecords = () => RECORDS.map((r) => ID.khfmRecord(r.id));
const idsArmas = () => ARMAS.flatMap((g) => g.items.map((a) => ID.khfmArma(a.id)));
// Las armas que se sintetizan comparten la marca de su ficha de arma.
const idSintesis = (x) => (x.arma ? ID.khfmArma(x.arma) : ID.khfmSintesis(x.id));
const idsSintesis = () => LISTAS_SINTESIS.flatMap((l) => l.items.map(idSintesis));
const idsMisiones = () => MISIONES_GUMI.flatMap((w) => w.m.map((_, i) => ID.khfmMision(w.mundo, i + 1)));
// Los planos que se ganan con una misión III comparten su marca.
const misionDePlano = Object.fromEntries(MISIONES_GUMI.flatMap((w) => w.m.map((x, i) => [x.plano, ID.khfmMision(w.mundo, i + 1)]).filter(([p]) => p)));
const idPlano = (id) => misionDePlano[id] ?? ID.khfmPlano(id);
const idsPlanos = () => [...PLANOS_BASICOS, ...PLANOS_ENEMIGOS].map((p) => idPlano(p.id))
  .concat(Object.values(misionDePlano), idPlano(PLANO_BAHAMUT.id));
const juegoKHFM = () => [...new Set([
  ...MUNDOS_KHFM.map((m) => ID.khfmLogro(m.logro)), ...idsAnsem(), ...idsDalmatas(), ...idsTrio(), ...idsRecords(),
  ...idsArmas(), ...idsSintesis(), ...idsMisiones(), ...idsPlanos(),
])];
const PROGRESO = {
  bbs: { logros: () => BBS.logros.map((l) => ID.logro(l.id)), juego: () => juegoBBS() },
  khfm: { logros: logrosKHFM, juego: juegoKHFM },
};
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
    .map((k) => `<a href="${esc(TODAS_FUENTES[k].url)}" target="_blank" rel="noopener">${esc(TODAS_FUENTES[k].nombre)}</a>`)
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

// Casilla compacta con el mismo guardado que item(); `texto` ya va escapado.
function marca(id, texto, clase = '') {
  const hecho = store.hecho(id);
  return `
    <label class="marca ${clase}${hecho ? ' is-done' : ''}">
      <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
      <span class="crown">${CORONA}</span><span>${texto}</span>
    </label>`;
}

const LOGROS_DE = {
  bbs: { id: ID.logro, carpeta: 'assets/img/bbs/logros', consejos: CONSEJOS },
  khfm: { id: ID.khfmLogro, carpeta: 'assets/img/khfm/logros', consejos: CONSEJOS_KHFM },
};
const itemLogro = (l, juego = 'bbs') => {
  const { id, carpeta, consejos } = LOGROS_DE[juego];
  return item({
    id: id(l.id),
    titulo: l.nombre,
    desc: l.desc,
    meta: esc(pctFmt(l.pct)),
    icono: `${carpeta}/${l.id}.jpg`,
    spoiler: l.oculto,
    extra: consejos[l.id] ? `<details class="tip"><summary>Cómo conseguirlo</summary><p>${esc(consejos[l.id])}</p></details>` : '',
  });
};

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
          <p>Tu progreso se guarda en la base de datos de la guía (con <code>python server.py</code>) y en este navegador. Exporta una copia para no perderlo o pasarlo a otro equipo.</p>
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
      ? `<div class="meters-2">${medidor(`juego-${j.id}-logros`, PROGRESO[j.id].logros(), ETQ_LOGROS)}
         ${medidor(`juego-${j.id}-100`, PROGRESO[j.id].juego(), ETQ_JUEGO)}</div>`
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
    <p class="lead">Birth by Sleep y Kingdom Hearts Final Mix ya están en marcha. El resto irá apareciendo según avance la guía.</p>
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
// --- Tableros de comandos: qué hace falta, comandos exclusivos y casillas bonus de cada tablero ---
// Un comando es «solo de tablero» para un personaje si no tiene receta ni otra vía independiente
// (la tienda «una vez conseguido por otra vía» no cuenta) y sí alguna casilla de tablero.
function exclusivosDeTablero(pj) {
  const res = [];
  for (const l of Object.values(LISTAS_COMANDOS[pj])) {
    for (const n of l) {
      const c = COMANDOS[n];
      const vias = c.vias.filter((v) => !v.pj || v.pj.includes(pj));
      const recetas = c.recetas.filter((r) => !r.excl || r.excl.toLowerCase().includes(pj));
      const otras = vias.filter((v) => v.v !== 'tablero' && !(v.v === 'tienda' && /^[\d.]+ platines, una vez conseguido por otra vía\.$/.test(v.t)));
      if (recetas.length || otras.length || !vias.some((v) => v.v === 'tablero')) continue;
      const donde = [];
      for (const t of TABLEROS) {
        for (const cas of t.casillas) {
          for (const [tipo, lista] of [['normal', cas.normal], ['limitada', cas.limitada]]) {
            if (lista.some((x) => x.n === n && (!x.solo || x.solo.includes(pj)))) donde.push({ t, num: cas.num, tipo });
          }
        }
      }
      res.push({ n, donde });
    }
  }
  return res;
}

const nombreCmdTablero = (x) => `${esc(x.n)}${x.pct ? ` <small>${esc(x.pct)} %</small>` : ''}${x.solo ? ` <small>(solo ${x.solo.map((p) => PERSONAJES[p].nombre).join(' y ')})</small>` : ''}`;
const listaTablero = (xs) => xs.map(nombreCmdTablero).join(' · ');
const premiosCasilla = (c) => `${listaTablero(c.normal)}${c.limitada.length ? `<br><span class="tb-lim">Mientras no lo tengas: ${listaTablero(c.limitada)}</span>` : ''}${c.coso.length ? `<br><span class="tb-coso">En el Coso: ${listaTablero(c.coso)}</span>` : ''}`;
const ICONO_MAPA = '<path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11Z"/><circle cx="12" cy="10" r="2.2"/>';
// Botón que abre el mapa del tablero en una ventana, con la casilla `num` resaltada (o ninguna).
const verCasilla = (t, num, texto) => `<button type="button" class="tb-ver" data-casilla="${t.id}${num ? `:${num}` : ''}">${svg(ICONO_MAPA)}<span>${texto}</span></button>`;

function tablerosBloque() {
  const exclusivos = PJS.map((p) => `
    <div class="tb-pj pj-${p.id}">
      <h4>${esc(p.nombre)}</h4>
      <ul>${exclusivosDeTablero(p.id).map((e) => `
        <li>${marca(ID.tableroCmd(p.id, e.n), `<b>${esc(e.n)}</b>`)}<span class="tb-donde">${e.donde.map((d) => `<span>${verCasilla(d.t, d.num, `${esc(d.t.nombre)}, casilla ${d.num}`)}${d.tipo === 'limitada' ? ' <small>(sale mientras no lo tengas)</small>' : ''}</span>`).join('')}</span></li>`).join('')}</ul>
    </div>`).join('');
  const tableros = TABLEROS.map((t) => `
    <article class="tb" id="tablero-${t.id}">
      <button type="button" class="tb-mapa" data-casilla="${t.id}" aria-label="Ampliar el mapa del ${esc(t.nombre)}">
        <img src="${IMG_BUILD}tablero-${t.id}.webp" alt="Mapa del ${esc(t.nombre)} con las casillas bonus numeradas" loading="lazy"></button>
      <div class="tb-cuerpo">
        <h3>${esc(t.nombre)}</h3>
        <p><b>Se desbloquea:</b> ${esc(TABLEROS_INFO[t.id].desbloqueo)}</p>
        <p><b>Rivales:</b> ${esc(TABLEROS_INFO[t.id].rivales)}</p>
        <div class="tb-marcas"><span class="tb-marcas-t">Ganado con</span>${PJS.map((p) => marca(ID.tablero(p.id, t.id), esc(p.nombre), `pj-${p.id}`)).join('')}</div>
        <div class="tb-marcas"><span class="tb-marcas-t">En el Coso con</span>${PJS.map((p) => marca(ID.tableroCoso(p.id, t.id), esc(p.nombre), `pj-${p.id}`)).join('')}</div>
        <ol class="tb-casillas">${t.casillas.map((c) => `
          <li><button type="button" class="tb-num" data-casilla="${t.id}:${c.num}" aria-label="Ver la casilla ${c.num} en el mapa">${c.num}</button><span>${premiosCasilla(c)}</span></li>`).join('')}</ol>
        <p class="tb-pista">Toca un número para ver dónde está la casilla en el mapa.</p>
      </div>
    </article>`).join('');
  const todos = (f) => PJS.flatMap((p) => TABLEROS.map((t) => f(p.id, t.id)));
  return `
    <div class="tb-medidores">
      ${medidor('tb-victorias', todos(ID.tablero), 'Victorias (tablero × personaje)')}
      ${medidor('tb-coso', todos(ID.tableroCoso), 'Victorias en el Coso')}
      ${medidor('tb-excl', PJS.flatMap((p) => exclusivosDeTablero(p.id).map((e) => ID.tableroCmd(p.id, e.n))), 'Comandos solo de tablero')}
    </div>
    <p class="hint">Marca cada tablero cuando lo ganes con ese personaje. Se guarda igual que el resto y también se puede marcar en la página de cada personaje.</p>
    <div class="tb-claves">
      <div class="info-card"><h3>Logro «${esc(logroPorId.ACH_179.nombre)}»</h3>
        <p>«${esc(logroPorId.ACH_179.desc)}» (en inglés, «Win each playable Command Board»): <b>una victoria en cada uno de los 7 tableros, con cualquier personaje</b>. La guía de Steam dice que bastan 7 victorias en el Coso Virtual; para ir sobre seguro, gana una vez en cada tablero.</p></div>
      <div class="info-card"><h3>Informes al 100 %</h3>
        <p>Cada personaje tiene su propio Informe, con su colección de comandos y sus récords de minijuegos (KHWiki). Por eso los comandos y los tableros cuentan <b>con cada personaje por separado</b>. Ninguna fuente pide ganar 7 veces en el Coso con cada uno.</p></div>
      <div class="info-card"><h3>Juega desde el menú</h3>
        <p>En el Coso Virtual faltan casi todas las casillas bonus. Los comandos de tablero se consiguen jugando desde el menú, con el personaje de la historia que tengas cargada.</p></div>
    </div>
    <div class="tb-intro">
      <figure class="bx-shot"><img src="${IMG_BUILD}tablero-partida.webp" alt="Partida en el Tablero de la Llave Espada" width="480" height="272" loading="lazy">
        <figcaption>Una partida en el Tablero de la Llave Espada (captura de la versión en inglés).</figcaption></figure>
      <div>
        <h3 class="bx-sub">Qué es una casilla bonus</h3>
        <p class="hint">Son las casillas con una estrella dorada. Si caes en una y pagas su precio, te llevas un comando nuevo sin gastar una carta. En los mapas de abajo están numeradas, y la lista de cada tablero dice qué da cada número.</p>
        <p class="hint">Algunas tienen una recompensa «limitada» (por ejemplo, un Tiro certero): sale mientras no tengas ese comando y, cuando ya lo tienes, la casilla da la recompensa normal.</p>
      </div>
    </div>
    <h3 class="tier-title">Comandos que solo salen de un tablero</h3>
    <p class="group-intro">No se sintetizan, no están en cofres ni los suelta ningún enemigo: para tenerlos con cada personaje hay que caer en esa casilla jugando con él.</p>
    <div class="tb-exclusivos">${exclusivos}</div>
    <h3 class="tier-title">Los 7 tableros</h3>
    <div class="tbs">${tableros}</div>
    ${fuentes(['khwikiTableros', 'wikiEsTableros', 'steam', 'guiaSteam'])}`;
}

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
    ${subnav([['ruta', 'Ruta de logros'], ['logros', 'Logros comunes'], ['logros-pj', 'Logros de personaje'], ['tableros', 'Tableros'], ['sintesis', 'Síntesis']])}
    ${bloque('ruta', 'Ruta de logros', `<ol class="steps">${ruta}</ol>`, { lead: 'Lo que conviene saber antes de empezar para no repetir partidas.' })}
    ${bloque('logros', 'Logros comunes', `${comunes}${fuentes(['steam', 'guiaSteam'])}`, {
      meter: medidor('bbs-comunes-logros', GRUPOS_LOGROS.flatMap((g) => g.ids).map(ID.logro), 'Logros comunes'),
      lead: 'Abre «Cómo conseguirlo» para ver el consejo de cada uno.',
    })}
    ${bloque('logros-pj', 'Logros de cada personaje', porPj)}
    ${bloque('tableros', 'Tableros de comandos', tablerosBloque(), { lead: 'Qué hace falta de verdad, qué comandos solo salen de un tablero y qué da cada casilla bonus.' })}
    ${bloque('sintesis', 'Síntesis de comandos', sintesisBloque(), { lead: 'Cómo funciona, qué habilidad sale con cada tipo de receta y cristal, y de dónde sacar cada cristal.' })}`;
}

// --- Hub de BBS: modo Informes ---
// Estrategia con fichas de la build que se abren en una ventana y enlaces a la build de cada personaje.
function estrategia(est) {
  const piezas = est.piezas.map(([p, pj]) => `
    <button type="button" class="ficha-chip" data-ficha="${esc(p)}" data-ficha-pj="${esc(pj)}">${svg(ICONO_CAT[PIEZAS[p].cat])}${esc(PIEZAS[p].nombre)}</button>`).join('');
  const builds = est.build ? `<p class="coso-builds">Equipación completa: ${PJS.map((p) => `
    <a class="pj-link pj-${p.id}" href="#/bbs/${p.id}" data-ir-build="${est.build}">${p.nombre}</a>`).join(' · ')}</p>` : '';
  return `<p>${esc(est.texto)}</p>${piezas ? `<div class="ficha-chips">${piezas}</div>` : ''}${builds}`;
}

let $dialogo;
function dialogo(etiqueta) {
  if (!$dialogo) {
    $dialogo = document.createElement('dialog');
    $dialogo.className = 'bx-dialog';
    // Clic en el fondo oscuro: cerrar.
    $dialogo.addEventListener('click', (e) => { if (e.target === $dialogo) $dialogo.close(); });
    document.body.append($dialogo);
  }
  $dialogo.setAttribute('aria-label', etiqueta);
  return $dialogo;
}
const BOTON_CERRAR = `<button type="button" class="tool tool-icon" data-cerrar aria-label="Cerrar">${'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'}</button>`;

// Visor de casillas: el mapa del tablero con la casilla elegida resaltada y lo que da.
function abrirCasilla(tId, num) {
  const t = TABLEROS.find((x) => x.id === tId);
  const pos = POS_CASILLAS[tId];
  const cas = t.casillas.find((c) => c.num === num);
  const d = dialogo(`Mapa del ${t.nombre}`);
  let foco = '';
  if (cas) {
    const [x, y] = pos.c[num];
    const lado = pos.d * 3.1;
    const cx = x + pos.d * 0.95, cy = y + pos.d * 0.95;
    foco = `<span class="cas-foco" style="left:${((cx - lado / 2) / pos.w) * 100}%;top:${((cy - lado / 2) / pos.h) * 100}%;width:${(lado / pos.w) * 100}%;height:${(lado / pos.h) * 100}%"></span>`;
  }
  d.innerHTML = `
    <div class="bx-dialog-in cas-dialog">
      <div class="bx-dialog-bar">
        <div class="cas-head"><b>${esc(t.nombre)}</b>
          <div class="cas-nums" role="group" aria-label="Casilla">${t.casillas.map((c) => `
            <button type="button" data-casilla="${t.id}:${c.num}" aria-pressed="${c.num === num}">${c.num}</button>`).join('')}</div>
        </div>
        ${BOTON_CERRAR}
      </div>
      <div class="cas-cuerpo">
        ${cas ? `<p class="cas-premio"><span class="tb-num">${cas.num}</span><span>${premiosCasilla(cas)}</span></p>` : '<p class="cas-premio cas-premio-vacio">Elige una casilla para ver dónde está y qué da.</p>'}
        <div class="cas-scroll"><div class="cas-mapa" style="aspect-ratio:${pos.w}/${pos.h}">
          <img src="${IMG_BUILD}tablero-${t.id}.webp" alt="Mapa del ${esc(t.nombre)}${cas ? `, con la casilla ${cas.num} resaltada` : ''}">
          ${foco}
        </div></div>
        ${fuentes(['khwikiTableros'])}
      </div>
    </div>`;
  if (!d.open) d.showModal();
  (d.querySelector('.cas-nums [aria-pressed="true"]') ?? d.querySelector('[data-cerrar]')).focus();
  d.querySelector('.cas-foco')?.scrollIntoView({ block: 'center', inline: 'center' });
}

function abrirFicha(p, pj) {
  const pz = PIEZAS[p];
  dialogo('Ficha');
  const pjs = PJS.filter((o) => !pz.solo || pz.solo.includes(o.id));
  $dialogo.innerHTML = `
    <div class="bx-dialog-in pj-${pj}">
      <div class="bx-dialog-bar">
        <div class="pj-pick" role="group" aria-label="Ver para">${pjs.map((o) => `
          <button type="button" data-ficha="${esc(p)}" data-ficha-pj="${o.id}" aria-pressed="${o.id === pj}">${esc(o.nombre)}</button>`).join('')}</div>
        ${BOTON_CERRAR}
      </div>
      <div class="bx-ficha">${fichaPieza(p, pj)}</div>
    </div>`;
  if (!$dialogo.open) $dialogo.showModal();
}

function cosoLista() {
  const premio = (c) => (c.premio ? PJS.filter((p) => c.premio[p.id]).map((p) => tagPj(p.id, `${p.nombre}: ${c.premio[p.id]}`)).join('') : '');
  const entrada = (c) => [
    c.nivel ? `Nivel ${c.nivel} del Coso${c.ticket ? ', o compra su ticket en la tienda de medallas' : ''}.` : '',
    c.abre || '',
  ].filter(Boolean).join(' ');
  const fuentesCombate = (id, f = []) => f.map((k) => (k === 'khwiki' ? `khwikiCoso:${id}` : k));
  const detalle = (c) => {
    const r = COSO_RONDAS[c.id];
    const est = COSO_ESTRATEGIA[c.id];
    const rondas = r.rondas.map((ro, i) => `
      <li><span class="ronda-n">Ronda ${i + 1}</span><span class="ronda-e">${ro.map(([n, k]) => (k
        ? `<span class="foe">${esc(n)} <b>×${k}</b></span>`
        : `<span class="foe foe-jefe">${esc(n)}</span>`)).join('')}</span></li>`).join('');
    return `
      <details class="tip coso-det">
        <summary>Rondas, reto extra${est ? ' y estrategia' : ''}</summary>
        ${est ? `<div class="coso-est">${estrategia(est)}</div>` : ''}
        <ol class="rondas">${rondas}</ol>
        <p class="coso-reto"><b>Reto extra de la versión HD:</b> ${esc(r.reto)}</p>
        ${fuentes([`khwikiCoso:${c.id}`, 'wikiEsCoso', ...fuentesCombate(c.id, est?.f)])}
      </details>`;
  };
  const logroEstrellas = { 1: 'ACH_192', 2: 'ACH_193', 3: 'ACH_194', 4: 'ACH_195' };
  return [1, 2, 3, 4, 5].map((n) => {
    const lista = COSO.filter((c) => c.estrellas === n);
    const l = logroEstrellas[n] && logroPorId[logroEstrellas[n]];
    return `
    <div class="group">
      <h3>${estrellas(n)} ${l ? `<span class="chip chip-logro">Logro «${esc(l.nombre)}»</span>` : '<span class="chip">Cada uno tiene su propio logro</span>'}</h3>
      <ul class="list coso-list">${lista.map((c) => item({
        id: ID.coso(c.id),
        icono: `${IMG_BUILD}coso-${c.id}.webp`,
        extra: detalle(c),
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
    ${subnav([['xehanort', 'Informes Xehanort'], ['coso', 'Coso Virtual'], ['minijuegos', 'Minijuegos'], ['tableros', 'Tableros'], ['sintesis', 'Síntesis'], ['retos', 'Retos'], ['helados', 'Helados']])}
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
      <div class="coso-general"><h3>Estrategia general</h3>${estrategia(COSO_GENERAL)}</div>
      ${cosoLista()}
      ${fuentes(['khwikiArenaMode', 'khwikiTickets', 'khwikiCoso', 'wikiEsCoso', 'guiaSteam'])}`, {
      meter: medidor('inf-coso', COSO.map((c) => ID.coso(c.id)), 'Combates'),
      lead: 'Agrupados por estrellas, que es como cuentan los logros. Despliega cada combate para ver sus rondas, el reto extra y la estrategia; toca un comando para ver su ficha.',
    })}
    ${bloque('minijuegos', 'Minijuegos', `${minis}${fuentes(['guiaSteam'])}`, {
      meter: medidor('inf-mini', MINIJUEGOS.flatMap((g) => g.items.map((i) => ID.mini(g.id, i.id))), 'Minijuegos'),
    })}
    ${bloque('tableros', 'Tableros de comandos', tablerosBloque(), { lead: 'Qué hace falta de verdad, qué comandos solo salen de un tablero y qué da cada casilla bonus.' })}
    ${bloque('sintesis', 'Síntesis de comandos', sintesisBloque(), { lead: 'Cómo funciona, qué habilidad sale con cada tipo de receta y cristal, y de dónde sacar cada cristal.' })}
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

// --- Build recomendada (interactiva): combate → baraja → ficha de cada pieza ---
const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const ICONO_CAT = {
  'Llave espada': '<circle cx="7" cy="7" r="3.5"/><path d="m9.5 9.5 10 10M15.5 15.5l2-2M18 18l2-2"/>',
  Ataque: '<path d="M20 4 9.5 14.5M15 4h5v5M7.5 12.5l4 4M4 20l3.5-3.5"/>',
  Magia: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5"/>',
  'Tiro certero': '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
  Movimiento: '<path d="M9 12h11M16 7l5 5-5 5M3 9h3M2 15h4"/>',
  Defensa: '<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/>',
};
const ICONO_VIA = {
  inicial: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  cofre: '<rect x="3" y="9" width="18" height="11" rx="2"/><path d="M3 13h18M5 9V7.5A3.5 3.5 0 0 1 8.5 4h7A3.5 3.5 0 0 1 19 7.5V9M12 12v3"/>',
  tienda: '<path d="M5 8h14l-1.2 12H6.2Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  sintesis: '<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>',
  tablero: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  mision: '<path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M12 13v4M8 20h8M7 6H4a3 3 0 0 0 3 3M17 6h3a3 3 0 0 1-3 3"/>',
  minijuego: '<rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 10v4M5 12h4M16 11h.01M18 13h.01"/>',
  caida: '<path d="M12 3v12M7 10l5 5 5-5M5 20h14"/>',
};
const GRUPOS_BUILD = [['llave', 'Llave espada'], ['baraja', 'Baraja de comandos'], ['tiro', 'Tiro certero'], ['movimiento', 'Movimiento'], ['defensa', 'Defensa']];
const HISTORIA = { id: 'historia', nombre: 'Avanzar por la historia' };
const PESTANAS_BUILD = [HISTORIA, ...COMBATES];
const combateActual = () => PESTANAS_BUILD.find((c) => c.id === store.ajuste('buildCombate')) ?? HISTORIA;
const imgPestana = (c, pj) => (c === HISTORIA ? PERSONAJES[pj].img : `${IMG_BUILD}${c.img}.webp`);

// Contenido de la pestaña «Historia»: qué llevar para grupos, jefes y curación (bbs-avance.js).
function avanceBuild(pj) {
  const a = AVANCE[pj];
  const catDe = (n) => Object.entries(LISTAS_COMANDOS[pj]).find(([, l]) => l.includes(n))?.[0];
  const tarjeta = (n) => {
    const c = COMANDOS[n];
    // Primero las vías que funcionan por sí solas; la tienda «una vez conseguido por otra vía», al final.
    const condicional = (v) => /una vez conseguido por otra vía\.$/.test(v.t);
    const vias = c.vias.filter((v) => !v.pj || v.pj.includes(pj)).sort((x, y) => condicional(x) - condicional(y)).slice(0, 2);
    const receta = c.recetas.filter((r) => !r.excl || r.excl.toLowerCase().includes(pj)).find((r) => r.pct === '100');
    const cat = catDe(n);
    return `
      <li class="av-cmd">
        <img src="${IMG_BUILD}ico-${cat}.webp" alt="" width="24" height="24">
        <div>
          <b>${esc(n)}</b>
          <ul class="av-como">${vias.map((v) => `<li>${svg(ICONO_VIA[v.v === 'historia' ? 'inicial' : v.v])}${esc(v.t)}</li>`).join('')}
            ${receta ? `<li>${svg(ICONO_VIA.sintesis)}${esc(receta.a)} + ${esc(receta.b)}</li>` : ''}</ul>
          <button type="button" class="av-ver" data-ver-cmd="${esc(n)}">Ver su ficha completa</button>
        </div>
      </li>`;
  };
  return `
    <div class="bx-brief">
      <div class="bx-brief-text">
        <p class="bx-kicker">Para la historia, mundo a mundo</p>
        <h3>Avanzar por la historia</h3>
        <p>${esc(a.estilo)} ${esc(a.combo)}</p>
      </div>
      <img class="bx-boss" src="${PERSONAJES[pj].img}" alt="" loading="lazy">
    </div>
    ${a.grupos.map(([titulo, desc, cmds]) => `
      <section class="av-grupo">
        <h3 class="bx-sub">${esc(titulo)}</h3>
        <p class="hint">${esc(desc)}</p>
        <ul class="av-lista">${cmds.map(tarjeta).join('')}</ul>
      </section>`).join('')}
    <p class="hint">Cada tarjeta muestra hasta dos formas de conseguir el comando y su receta más segura; la ficha completa está en «Comandos». Los superjefes tienen sus propias pestañas.</p>
    ${fuentes(a.f)}`;
}

function mediaPieza(pz, pj) {
  const img = typeof pz.img === 'function' ? pz.img(pj) : pz.img;
  if (!img) return `<div class="bx-media bx-media-vacia">${svg(ICONO_CAT[pz.cat])}</div>`;
  const src = IMG_BUILD + img;
  if (pz.fija) return `<div class="bx-media bx-media-llave"><img src="${src}.webp" alt="${esc(pz.nombre)}" width="256" height="256" loading="lazy"></div>`;
  return `<div class="bx-media"><picture>
    <source srcset="${src}.webp" media="(prefers-reduced-motion: no-preference)">
    <img src="${src}-fijo.webp" alt="${esc(pz.nombre)} en el juego" width="320" height="180" loading="lazy"></picture></div>`;
}

function fichaPieza(id, pj) {
  const pz = PIEZAS[id];
  const r = pz.receta;
  const caja = (t, cl = '') => `<span class="eq-box${cl}">${esc(t)}</span>`;
  return `
    <div class="bx-ficha-in">
      <div class="bx-ficha-top">
        ${mediaPieza(pz, pj)}
        <div class="bx-ficha-head">
          <span class="bx-cat">${svg(ICONO_CAT[pz.cat])}${esc(pz.cat)}</span>
          <h3>${esc(pz.nombre)}</h3>
          <p>${esc(pz.que)}</p>
        </div>
      </div>
      <p class="bx-por${pz.quitar ? ' is-quitar' : ''}">${esc(pz.por)}</p>
      <h4 class="bx-h">Cómo conseguirlo</h4>
      <ul class="vias">${pz.como.filter((c) => !c.pj || c.pj.includes(pj)).map((c) => `
        <li><span class="via">${svg(ICONO_VIA[c.v])}${esc(VIAS[c.v])}</span><span>${esc(c.t)}</span></li>`).join('')}</ul>
      ${r ? `
        <h4 class="bx-h">Síntesis</h4>
        <p class="eq">${caja(r.a)}<span class="eq-op">+</span>${caja(r.b)}<span class="eq-op" aria-label="da">→</span>${caja(pz.nombre, ' eq-res')}${r.pct ? `<span class="eq-pct">${esc(r.pct)} %</span>` : ''}</p>
        ${r.alt ? `<p class="hint">Otra receta: ${esc(r.alt)}.</p>` : ''}` : ''}
      ${pz.nota ? `<p class="bx-nota">${esc(pz.nota)}</p>` : ''}
      ${pz.ingredientes ? `
        <h4 class="bx-h">De dónde sacar los ingredientes</h4>
        <dl class="ingr">${pz.ingredientes.map(([n, t]) => `<div><dt>${esc(n)}</dt><dd>${esc(t)}</dd></div>`).join('')}</dl>` : ''}
    </div>`;
}

function habilidadesBuild() {
  return `
    <section class="habs" aria-labelledby="habs-t">
      <h3 class="bx-sub" id="habs-t">Habilidades: deja activadas solo estas</h3>
      <ul class="hab-grid">${HABILIDADES.map((h) => `
        <li class="hab" style="--gem:${esc(CRISTALES[h.cristal].color)}">
          <div class="hab-head"><b>${esc(h.nombre)}</b><span class="hab-max"><span class="sr-only">Se puede equipar hasta </span>×${h.max}</span></div>
          <p class="hab-ef">${esc(h.efecto)}</p>
          <p class="hab-rec"><span class="eq-box">${esc(h.a)}</span><span class="eq-op">+</span><span class="eq-box">${esc(h.b)}</span><span class="eq-op">+</span><span class="gem-chip"><span class="gem"></span>Cristal ${esc(h.cristal)}</span></p>
          <p class="hab-out">Sale <b>${esc(h.sale)}</b> con ${esc(h.nombre)}.${h.extra ? ` ${esc(h.extra)}` : ''}</p>
        </li>`).join('')}</ul>
    </section>`;
}

function escenarioBuild(pj, c) {
  if (c === HISTORIA) return avanceBuild(pj);
  const eq = c.equipo(pj);
  // La primera casilla útil empieza abierta (una sola, aunque la pieza se repita en la baraja).
  const sel = eq.baraja.find((s) => !s.quitar) ?? eq.tiro[0] ?? eq.baraja[0];
  const ranura = (s) => {
    const pz = PIEZAS[s.p];
    const etq = s.quitar ? 'Quítalo' : s.alt ? 'Alternativa' : '';
    return `<li><button type="button" class="slot${s.quitar ? ' is-quitar' : ''}${s.alt ? ' is-alt' : ''}" data-pieza="${esc(s.p)}" aria-pressed="${s === sel}" aria-controls="bx-ficha">
      <span class="slot-ico">${svg(ICONO_CAT[pz.cat])}</span><span class="slot-name">${esc(pz.nombre)}</span>${etq ? `<span class="slot-tag">${etq}</span>` : ''}</button></li>`;
  };
  const grupos = GRUPOS_BUILD.filter(([k]) => eq[k].length).map(([k, t]) => `
    <li class="deck-group"><span class="deck-label">${esc(t)}</span>
      <ol class="deck-slots">${eq[k].map(ranura).join('')}</ol>
      ${k === 'baraja' && eq.bucle ? '<p class="deck-hint">…y así hasta llenar la baraja.</p>' : ''}</li>`).join('');
  const logros = [c.logro, c.logro2].filter(Boolean).map((id) => `«${esc(logroPorId[id].nombre)}»`).join(' y ');
  return `
    <div class="bx-brief">
      <div class="bx-brief-text">
        <p class="bx-kicker">Logro ${logros}</p>
        <h3>${esc(c.nombre)}</h3>
        <p>${esc(c.consejo)}</p>
      </div>
      <img class="bx-boss" src="${IMG_BUILD}${c.img}.webp" alt="" loading="lazy">
    </div>
    <div class="bx-grid">
      <ol class="deck" aria-label="Equipación para ${esc(c.nombre)}">${grupos}</ol>
      <article class="bx-ficha" id="bx-ficha" aria-live="polite">${fichaPieza(sel.p, pj)}</article>
    </div>
    ${eq.habilidades ? habilidadesBuild() : ''}`;
}

function buildPj(pj) {
  const actual = combateActual();
  const usadas = COMBATES.flatMap((c) => Object.values(c.equipo(pj)).filter(Array.isArray).flat().map((s) => PIEZAS[s.p]));
  const claves = [
    ...AVANCE[pj].f, ...COMBATES.flatMap((c) => c.f), ...usadas.flatMap((p) => p.f), ...HABILIDADES.flatMap((h) => h.f),
    'khwikiMeld', 'khwikiAbilities', 'khwikiImagenes',
  ];
  return `
    <div class="bx" data-pj="${pj}">
      <div class="fights" role="tablist" aria-label="Elige el combate">${PESTANAS_BUILD.map((c) => `
        <button type="button" role="tab" class="fight" id="fight-${c.id}" data-combate="${c.id}" aria-selected="${c === actual}" tabindex="${c === actual ? 0 : -1}" aria-controls="bx-stage">
          <img src="${imgPestana(c, pj)}" alt="" loading="lazy"><span>${esc(c.nombre)}</span></button>`).join('')}
      </div>
      <div class="bx-stage" id="bx-stage" role="tabpanel" aria-labelledby="fight-${actual.id}">${escenarioBuild(pj, actual)}</div>
      <details class="bx-how">
        <summary>Cómo se consiguen las habilidades y los cristales</summary>
        <div class="bx-how-in">
          <figure class="bx-shot"><img src="${IMG_BUILD}menu-sintesis.webp" alt="Menú de síntesis de comandos de Birth by Sleep" width="480" height="272" loading="lazy">
            <figcaption>Menú de síntesis de comandos (captura de la versión en inglés).</figcaption></figure>
          <ol class="bx-steps">
            <li>En el menú de síntesis eliges dos comandos (casi siempre tienen que estar dominados, es decir, a su nivel máximo) y puedes añadir un cristal.</li>
            <li>El tipo de receta y el cristal deciden qué habilidad lleva el comando nuevo. Sin cristal puede salir una al azar.</li>
            <li>La habilidad funciona mientras ese comando esté en tu baraja.</li>
            <li>Cuando dominas el comando nuevo, la habilidad se queda aprendida para siempre y puedes activarla o desactivarla en el menú de habilidades.</li>
          </ol>
          <h4 class="bx-h">Quién suelta cada cristal (batallas del Modo Coso del Coso Virtual)</h4>
          <ul class="cristales">${Object.entries(CRISTALES).map(([n, c]) => `
            <li style="--gem:${esc(c.color)}"><span class="gem-chip"><span class="gem"></span>Cristal ${esc(n)}</span><span>${esc(c.enemigos)}</span></li>`).join('')}</ul>
        </div>
      </details>
      ${fuentes(claves)}
    </div>`;
}

function cambiarCombate(boton) {
  const bx = boton.closest('.bx');
  const c = PESTANAS_BUILD.find((x) => x.id === boton.dataset.combate);
  store.fijarAjuste('buildCombate', c.id);
  bx.querySelectorAll('.fight').forEach((b) => {
    b.setAttribute('aria-selected', b === boton);
    b.tabIndex = b === boton ? 0 : -1;
  });
  const stage = bx.querySelector('.bx-stage');
  stage.setAttribute('aria-labelledby', boton.id);
  stage.innerHTML = escenarioBuild(bx.dataset.pj, c);
}

function mostrarPieza(boton) {
  const bx = boton.closest('.bx');
  bx.querySelectorAll('.slot').forEach((b) => b.setAttribute('aria-pressed', b === boton));
  const ficha = bx.querySelector('.bx-ficha');
  ficha.innerHTML = fichaPieza(boton.dataset.pieza, bx.dataset.pj);
  // En móvil la ficha queda debajo de la baraja: llévala a la vista si no se ve.
  if (ficha.getBoundingClientRect().top > innerHeight * 0.6) {
    ficha.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }
}

// --- Jefes de la historia ---
function jefesPj(pj) {
  const num = (x) => String(x).replace('.', ',');
  const elems = (j) => [
    ...Object.entries(j.debil ?? {}).map(([e, x]) => `<span class="elem elem-debil">Débil a ${esc(e)} <b>×${num(x)}</b></span>`),
    ...Object.entries(j.resiste ?? {}).map(([e, x]) => `<span class="elem elem-resiste">Resiste ${esc(e)} <b>×${num(x)}</b></span>`),
  ].join('');
  const tarjeta = (j) => `
    <article class="boss" id="jefe-${j.id}">
      ${j.vs ? `<img class="boss-vs" src="${IMG_BUILD}jefe-${j.vs}.webp" alt="Presentación del combate contra ${esc(j.nombre)} en el juego" width="800" height="447" loading="lazy">` : ''}
      <div class="boss-main">
        <div class="boss-art"><img src="${IMG_BUILD}jefe-${j.img}.webp" alt="" loading="lazy"></div>
        <div class="boss-body">
          <p class="boss-world">${esc(j.mundo)}</p>
          <h3>${esc(j.nombre)}</h3>
          ${elems(j) ? `<div class="boss-elems">${elems(j)}</div>` : ''}
          ${j.premios.length ? `<ul class="boss-premios" aria-label="Recompensas">${j.premios.map((p) => `
            <li class="chip">${esc(p.t)}${p.en ? ' <span class="chip-en">(en inglés)</span>' : ''}</li>`).join('')}</ul>` : ''}
        </div>
      </div>
      ${j.diario ? `<blockquote class="boss-diario"><p>«${esc(j.diario)}»</p><cite>Diario del juego (Informes)</cite></blockquote>` : ''}
      <details class="boss-est">
        <summary>Cómo vencerle</summary>
        <p>${esc(j.estrategia)}</p>
        ${j.nota ? `<p class="bx-nota">${esc(j.nota)}</p>` : ''}
      </details>
    </article>`;
  const lista = JEFES[pj];
  const grupos = Object.entries(FASES).map(([fase, titulo]) => {
    const js = lista.filter((j) => j.fase === fase);
    return js.length ? `<h3 class="tier-title">${esc(titulo)}</h3><div class="bosses">${js.map(tarjeta).join('')}</div>` : '';
  }).join('');
  return `${grupos}${fuentes(lista.flatMap((j) => j.f.map(([t, p]) => `${t}Jefe:${p}`)).concat('khwikiImagenes'))}`;
}

// --- Comandos de cada personaje: pestañas por tipo, buscador y filtros por vía de obtención ---
const CATS_CMD = [['ataque', 'Ataque'], ['magia', 'Magia'], ['movimiento', 'Movimiento'], ['defensa', 'Defensa'], ['contraataque', 'Contraataque'], ['tiro', 'Tiro certero']];
const FILTROS_CMD = [['sintesis', 'Síntesis'], ['cofre', 'Cofre o enemigo'], ['tienda', 'Tienda'], ['tablero', 'Tablero'], ['minijuego', 'Minijuego o Coso'], ['historia', 'Historia']];
const VIA_FILTRO = { mision: 'minijuego', inicial: 'historia', caida: 'cofre' };
const ICONO_FILTRO = { sintesis: 'sintesis', cofre: 'cofre', tienda: 'tienda', tablero: 'tablero', minijuego: 'minijuego', historia: 'inicial' };
const NOMBRE_VIA = { inicial: 'Desde el inicio', cofre: 'Cofre', tienda: 'Tienda', sintesis: 'Síntesis', tablero: 'Tablero', mision: 'Coso Virtual', minijuego: 'Minijuego', caida: 'Lo suelta', historia: 'Historia' };
const PIEZA_POR_NOMBRE = Object.fromEntries(Object.entries(PIEZAS).map(([k, p]) => [p.nombre, k]));
const PROPIOS = Object.fromEntries(Object.entries(LISTAS_COMANDOS).map(([pj, l]) => [pj, new Set(Object.values(l).flat())]));

// --- Síntesis: qué habilidad sale con cada cristal según el tipo de receta ---
const colorCristal = (c) => CRISTALES[c].color;
function habsPorCristal(tipo) {
  return `<ul class="hab-cristal" aria-label="Habilidad que sale con cada cristal">${TABLA_TIPOS[tipo - 1].map((h, i) => `
    <li style="--gem:${esc(colorCristal(CRISTALES_ORDEN[i]))}" title="Cristal ${esc(CRISTALES_ORDEN[i])}"><span class="gem"></span><span class="hc-c">${esc(CRISTALES_ORDEN[i].replace('de ', ''))}<span class="sr-only">:</span></span>${esc(h)}${NOTAS_TABLA[`${tipo}|${CRISTALES_ORDEN[i]}`] ? '*' : ''}</li>`).join('')}</ul>`;
}

const HAB_NOMBRES = [...new Set(TABLA_TIPOS.flat())];
const habEnTabla = (h) => TABLA_TIPOS.flatMap((f, i) => f.map((x, j) => (x === h ? [i + 1, CRISTALES_ORDEN[j]] : null))).filter(Boolean);

function sintesisBloque() {
  const cab = CRISTALES_ORDEN.map((c) => `<th scope="col" style="--gem:${esc(colorCristal(c))}"><span class="gem"></span><span>${esc(c)}</span></th>`).join('');
  const filas = TABLA_TIPOS.map((f, i) => `
    <tr><th scope="row"><b>${i + 1}</b> <small>${LETRA_TIPO[i]}</small></th>${f.map((h, j) => {
      const nota = NOTAS_TABLA[`${i + 1}|${CRISTALES_ORDEN[j]}`];
      return `<td data-hab="${esc(h)}"${nota ? ` title="${esc(nota)}"` : ''}>${esc(h)}${nota ? '<sup>*</sup>' : ''}</td>`;
    }).join('')}</tr>`).join('');
  const porCat = {};
  for (const h of HAB_NOMBRES) (porCat[HABILIDADES_BBS[h]?.cat ?? 'Otras'] ??= []).push(h);
  const picker = Object.entries(porCat).map(([cat, hs]) => `
    <div class="sx-grupo"><span class="sx-grupo-t">${esc(cat)}</span>${hs.map((h) => `
      <button type="button" class="sx-hab" data-sx-hab="${esc(h)}" aria-pressed="false">${esc(h)}</button>`).join('')}</div>`).join('');
  const cristales = CRISTALES_ORDEN.map((c, j) => {
    const x = CRISTALES_EXTRA[c] ?? {};
    const da = [...new Set(TABLA_TIPOS.map((f) => f[j]))];
    return `
    <li class="sx-cristal" style="--gem:${esc(colorCristal(c))}">
      <span class="gem-chip"><span class="gem"></span>Cristal ${esc(c)}</span>
      ${x.para ? `<p>${esc(x.para)}</p>` : ''}
      <p><b>Da:</b> ${da.map(esc).join(' · ')}</p>
      <p><b>Lo sueltan en el Coso Virtual:</b> ${esc(CRISTALES[c].enemigos)}.</p>
      ${x.caida ? `<p><b>Probabilidad:</b> ${esc(x.caida)}</p>` : ''}
      ${x.cofres ? `<p><b>Cofres:</b> ${esc(x.cofres)}</p>` : ''}
      ${x.precio ? `<p><b>Se compra por:</b> ${esc(x.precio)}</p>` : ''}
    </li>`;
  }).join('');
  return `
    <ol class="bx-steps sx-pasos">
      <li>Eliges dos comandos (casi siempre dominados, es decir, a su nivel máximo) y, si quieres, un cristal.</li>
      <li>Cada pareja de comandos tiene un <b>tipo</b> de receta, del 1 al 16. El tipo y el cristal deciden la habilidad del comando nuevo; sin cristal puede salir una al azar.</li>
      <li>La habilidad funciona mientras ese comando esté en tu baraja. Al dominar el comando, se queda aprendida para siempre.</li>
      <li>No hace falta tener la receta para sintetizar: ${LIBROS_RECETAS.map(([n, q]) => `la <b>${esc(n)}</b> ${esc(q)}`).join(', ')} para que veas el resultado antes.</li>
    </ol>
    <h3 class="bx-sub">Busca una habilidad</h3>
    <p class="hint">Toca una habilidad para ver qué hace, con qué tipos y cristal sale y qué recetas de cada personaje sirven. El tipo de cada receta también sale en la lista de comandos de cada personaje.</p>
    <div class="sx-picker">${picker}</div>
    <div class="sx-ficha" aria-live="polite" hidden></div>
    <div class="sx-tabla-wrap" tabindex="0" role="region" aria-label="Tabla de habilidades por tipo de receta y cristal">
      <table class="sx-tabla"><caption class="sr-only">Habilidad que sale según el tipo de receta (filas) y el cristal (columnas)</caption>
        <thead><tr><th scope="col">Tipo</th>${cab}</tr></thead><tbody>${filas}</tbody></table>
    </div>
    <p class="hint">* ${esc(Object.values(NOTAS_TABLA).join(' '))}</p>
    <h3 class="bx-sub">Los cristales</h3>
    <ul class="sx-cristales">${cristales}</ul>
    ${fuentes(['guiaSteamHab', 'wikiEsHabilidadesBBS', 'wikiEsTemporal', 'wikiEsReceta'])}`;
}

function fichaHabilidad(h) {
  const d = HABILIDADES_BBS[h] ?? {};
  const donde = habEnTabla(h);
  const porCristal = {};
  for (const [tipo, c] of donde) (porCristal[c] ??= []).push(tipo);
  const tipos = new Set(donde.map(([tipo]) => String(tipo)));
  const cristalDe = (tipo) => Object.entries(porCristal).filter(([, ts]) => ts.includes(Number(tipo))).map(([c]) => `Cristal ${c}`).join(' o ');
  const lista = PJS.map((p) => {
    const rs = [];
    for (const n of new Set(Object.values(LISTAS_COMANDOS[p.id]).flat())) {
      for (const r of COMANDOS[n]?.recetas ?? []) {
        if (tipos.has(r.tipo) && (!r.excl || r.excl.toLowerCase().includes(p.id))) rs.push({ n, r });
      }
    }
    return `<details class="sx-recetas pj-${p.id}"><summary><span class="pj-link">${esc(p.nombre)}</span> · ${rs.length} recetas</summary>
      <ul>${rs.map(({ n, r }) => `<li><span>${esc(r.a)} + ${esc(r.b)} → <b>${esc(n)}</b></span><small>tipo ${esc(r.tipo)} · ${esc(cristalDe(r.tipo))}</small></li>`).join('')}</ul></details>`;
  }).join('');
  return `
    <div class="sx-ficha-head"><h4>${esc(h)}</h4>${d.max ? `<span class="hab-max">Se equipa hasta ×${d.max}</span>` : ''}</div>
    ${d.efecto ? `<p>${esc(d.efecto)}</p>` : '<p class="hint">La Wiki ES no explica qué hace en este juego.</p>'}
    <p class="sx-donde">${Object.entries(porCristal).map(([c, ts]) => `<span class="gem-chip" style="--gem:${esc(colorCristal(c))}"><span class="gem"></span>Cristal ${esc(c)} · tipo${ts.length > 1 ? 's' : ''} ${ts.join(', ')}</span>`).join(' ')}</p>
    <div class="sx-recetas-lista">${lista}</div>`;
}

function elegirHabilidad(boton) {
  const raiz = boton.closest('.block');
  const h = boton.dataset.sxHab;
  const quitar = boton.getAttribute('aria-pressed') === 'true';
  raiz.querySelectorAll('[data-sx-hab]').forEach((b) => b.setAttribute('aria-pressed', String(!quitar && b === boton)));
  raiz.querySelectorAll('.sx-tabla td').forEach((td) => td.classList.toggle('is-on', !quitar && td.dataset.hab === h));
  raiz.querySelector('.sx-tabla').classList.toggle('is-filtrando', !quitar);
  const ficha = raiz.querySelector('.sx-ficha');
  ficha.hidden = quitar;
  ficha.innerHTML = quitar ? '' : fichaHabilidad(h);
}

function filaComando(n, cat, pj) {
  const c = COMANDOS[n];
  const vias = c.vias.filter((x) => !x.pj || x.pj.includes(pj));
  const recetas = c.recetas.filter((r) => !r.excl || r.excl.toLowerCase().includes(pj));
  const tipos = [...new Set([...(recetas.length ? ['sintesis'] : []), ...vias.map((v) => VIA_FILTRO[v.v] ?? v.v)])];
  const dato = (etq, val) => (val ? `<span class="cmd-dato">${etq ? `<span>${etq}</span> ` : ''}${esc(val)}</span>` : '');
  const ing = (x) => (PROPIOS[pj].has(x)
    ? `<button type="button" class="eq-box cmd-ing" data-ir-cmd="${esc(x)}">${esc(x)}</button>`
    : `<span class="eq-box">${esc(x)}</span>`);
  const habsDe = (r) => (r.tipo ? TABLA_TIPOS[Number(r.tipo) - 1] ?? [] : []);
  const texto = slug([n, ...recetas.flatMap((r) => [r.a, r.b, ...habsDe(r)])].join(' ')).replace(/-/g, ' ');
  const pieza = PIEZA_POR_NOMBRE[n];
  const [frase, paginaEs] = DESC_COMANDOS[n] ?? [];
  return `
    <li class="cmd" data-cat="${cat}" data-vias="${tipos.join(' ')}" data-texto="${esc(texto)}" data-nombre="${esc(n)}">
      <details>
        <summary>
          <img class="cmd-ico" src="${IMG_BUILD}ico-${cat}.webp" alt="" width="24" height="24">
          <span class="cmd-nombre">${esc(n)}${frase ? `<span class="cmd-frase">${esc(frase)}</span>` : ''}</span>
          <span class="cmd-datos">${dato('NV máx.', c.nv)}${dato('Ranuras', c.ranuras && c.ranuras !== '1' ? c.ranuras : '')}${dato('Objetivos', c.objetivos)}${c.elem && !['Neutro', 'Físico'].includes(c.elem) ? dato('', c.elem) : ''}</span>
          <span class="cmd-vias">${tipos.map((t) => `<span class="cmd-via" title="${esc(FILTROS_CMD.find(([k]) => k === t)[1])}">${svg(ICONO_VIA[ICONO_FILTRO[t]])}<span class="sr-only">${esc(FILTROS_CMD.find(([k]) => k === t)[1])}</span></span>`).join('')}</span>
        </summary>
        <div class="cmd-cuerpo">
          ${c.clase ? `<p class="cmd-clase">Comando ${esc(c.clase.toLowerCase())}${c.elem ? ` · elemento ${esc(c.elem.toLowerCase())}` : ''}</p>` : ''}
          <div class="cmd-cols">
            <div>
              ${vias.length ? `<h4 class="bx-h">Cómo conseguirlo</h4><ul class="vias">${vias.map((v) => `
                <li><span class="via">${svg(ICONO_VIA[v.v === 'historia' ? 'inicial' : v.v])}${esc(NOMBRE_VIA[v.v] ?? v.v)}</span><span>${esc(v.t)}</span></li>`).join('')}</ul>` : ''}
            </div>
            ${recetas.length ? `<div>
              <h4 class="bx-h">Síntesis</h4>
              <ul class="cmd-recetas">${recetas.map((r) => `
                <li><span class="eq">${ing(r.a)}<span class="eq-op">+</span>${ing(r.b)}</span>
                  <span class="cmd-receta-meta">${[r.tipo ? `tipo ${esc(r.tipo)}` : '', r.pct ? `<b>${esc(r.pct)} %</b>` : '', r.excl ? `solo ${esc(r.excl.replace('/', ' y '))}` : ''].filter(Boolean).join(' · ')}</span>
                  ${habsDe(r).length ? habsPorCristal(Number(r.tipo)) : ''}</li>`).join('')}</ul>
            </div>` : ''}
          </div>
          <p class="cmd-links">${pieza ? `<button type="button" class="ficha-chip" data-ficha="${pieza}" data-ficha-pj="${pj}">Ver su ficha de la build</button>` : ''}
            ${paginaEs ? `<a href="https://kingdomhearts.fandom.com/es/wiki/${encodeURIComponent(paginaEs.replace(/ /g, '_'))}" target="_blank" rel="noopener">En la Wiki ES: ${esc(paginaEs)}</a>` : ''}
            ${c.en ? `<a href="https://www.khwiki.com/${encodeURIComponent(c.en.replace(/ /g, '_'))}" target="_blank" rel="noopener">En KHWiki: ${esc(c.en)}</a>` : ''}</p>
        </div>
      </details>
    </li>`;
}

function comandosPj(pj) {
  const listas = LISTAS_COMANDOS[pj];
  const cats = CATS_CMD.filter(([k]) => listas[k]?.length);
  return `
    <div class="cmds" data-pj="${pj}" data-cat="${cats[0][0]}">
      <div class="cmd-tabs" role="tablist" aria-label="Tipo de comando">${cats.map(([k, t], i) => `
        <button type="button" role="tab" class="cmd-tab" data-cmd-cat="${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          <img src="${IMG_BUILD}ico-${k}.webp" alt="" width="22" height="22"><span>${t}</span><b>${listas[k].length}</b></button>`).join('')}
      </div>
      <div class="cmd-tools">
        <label class="cmd-buscar"><span class="sr-only">Buscar comando, ingrediente o habilidad</span>
          ${svg('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>')}
          <input type="search" placeholder="Comando, ingrediente o habilidad…" data-cmd-buscar autocomplete="off"></label>
        <div class="cmd-filtros" role="group" aria-label="Cómo se consigue">${FILTROS_CMD.map(([k, t]) => `
          <button type="button" class="cmd-filtro" data-cmd-filtro="${k}" aria-pressed="false">${svg(ICONO_VIA[ICONO_FILTRO[k]])}${t}</button>`).join('')}
        </div>
      </div>
      <p class="cmd-resumen" aria-live="polite"></p>
      <ul class="cmd-list">${cats.flatMap(([k], i) => listas[k].map((n) => filaComando(n, k, pj).replace('<li class="cmd"', i ? '<li hidden class="cmd"' : '<li class="cmd"'))).join('')}</ul>
      <p class="hint cmd-nota">Los ingredientes resaltados llevan a su propio comando. Bajo cada receta ves qué habilidad sale con cada cristal; busca una habilidad (p. ej. «Atracción») para ver qué recetas pueden darla. En los Tiros certeros, la guía de Steam da un 10 % a todas sus recetas; según la Wiki ES, ese 10 % es la probabilidad de que salga otro comando. Las zonas entre «» no tienen nombre oficial en castellano comprobado.</p>
      ${fuentes(['guiaSteam', 'guiaSteamHab', 'wikiEsComandosBBS', 'khwikiDeck', 'khwikiShotlock', 'wikiEsTableros', 'khwikiImagenes'])}
    </div>`;
}

function filtrarComandos(cmds) {
  const q = slug(cmds.querySelector('[data-cmd-buscar]').value).replace(/-/g, ' ').trim();
  const filtros = [...cmds.querySelectorAll('[data-cmd-filtro][aria-pressed="true"]')].map((b) => b.dataset.cmdFiltro);
  let n = 0;
  cmds.querySelectorAll('.cmd').forEach((li) => {
    const ok = (q ? li.dataset.texto.includes(q) : li.dataset.cat === cmds.dataset.cat)
      && (!filtros.length || filtros.some((f) => li.dataset.vias.split(' ').includes(f)));
    li.hidden = !ok;
    if (ok) n++;
  });
  cmds.classList.toggle('is-buscando', Boolean(q));
  cmds.querySelector('.cmd-resumen').textContent = q || filtros.length
    ? (n ? `${n} ${n === 1 ? 'comando' : 'comandos'}${q ? ' (en todas las categorías)' : ''}.` : 'Ningún comando coincide.')
    : '';
}

function elegirCategoria(boton) {
  const cmds = boton.closest('.cmds');
  cmds.dataset.cat = boton.dataset.cmdCat;
  cmds.querySelectorAll('.cmd-tab').forEach((b) => { b.setAttribute('aria-selected', b === boton); b.tabIndex = b === boton ? 0 : -1; });
  filtrarComandos(cmds);
}

function irAComando(boton) {
  const cmds = boton.closest('.cmds') ?? document.querySelector('.cmds');
  const li = cmds?.querySelector(`.cmd[data-nombre="${CSS.escape(boton.dataset.irCmd ?? boton.dataset.verCmd)}"]`);
  if (!li) return;
  cmds.querySelector('[data-cmd-buscar]').value = '';
  cmds.querySelectorAll('[data-cmd-filtro]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  elegirCategoria(cmds.querySelector(`[data-cmd-cat="${li.dataset.cat}"]`));
  li.querySelector('details').open = true;
  li.classList.remove('is-destacado'); void li.offsetWidth; li.classList.add('is-destacado');
  li.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  li.querySelector('summary').focus({ preventScroll: true });
}

// --- Nexos-D: cómo se consigue cada uno ---
function nexosPj(pj) {
  const lista = NEXOS.filter((x) => x.pjs.includes(pj));
  return `
    <ul class="nexos">${lista.map((x) => `
      <li class="nexo">
        <img src="${IMG_BUILD}nexo-${x.id}.webp" alt="Nexo-D de ${esc(x.nombre)}" loading="lazy">
        <div><b>${esc(x.nombre)}</b><p>${esc(typeof x.como === 'string' ? x.como : x.como[pj])}</p></div>
      </li>`).join('')}</ul>
    ${fuentes(['khwikiNexos', 'guiaSteam'])}`;
}

// --- Tesoros: cofres por mundo y zona ---
const CAT_COMANDO = { ataque: 'Ataque', magia: 'Magia', movimiento: 'Movimiento', defensa: 'Defensa', contraataque: 'Contraataque', tiro: 'Tiro certero' };
const TIPO_TESORO = { objeto: 'Objeto', cristal: 'Cristal', receta: 'Receta', mapa: 'Mapa', informe: 'Informe Xehanort' };
// Cofres sin imagen en KHWiki para BBS: se quedan sin ella.
const COFRE_SIN_IMG = new Set(['vergel-radiante', 'torre-de-los-misterios']);
function tipoTesoro(pj, t) {
  if (t.tipo !== 'comando') return TIPO_TESORO[t.tipo];
  const cat = Object.entries(LISTAS_COMANDOS[pj]).find(([, l]) => l.includes(t.c))?.[0];
  return cat ? CAT_COMANDO[cat] : 'Comando';
}

function tesorosPj(pj) {
  const mundos = TESOROS[pj].map((m) => {
    const clave = `pj-${pj}-tes-${m.id}`;
    const ids = m.tesoros.filter((t) => !t.extra).map((t) => ID.tesoro(pj, m.id, t.id));
    medidores[clave] = ids;
    const zonas = [...new Set(m.tesoros.map((t) => t.zona))];
    const filas = zonas.map((z) => {
      const t0 = m.tesoros.find((t) => t.zona === z);
      return `
      <div class="tes-zona">
        <h4${t0.zt ? ` class="tes-trad" title="Traducción propia; en inglés: ${esc(t0.zona_en)}"` : ''}>${esc(z)}</h4>
        <ul class="list list-tight tes-lista">${m.tesoros.filter((t) => t.zona === z).map((t) => item({
          id: ID.tesoro(pj, m.id, t.id),
          titulo: t.c,
          meta: `<span class="chip">${esc(tipoTesoro(pj, t))}</span>${t.extra && !m.extra ? ' <span class="note">Solo en el tutorial; no cuenta en los Informes.</span>' : ''}`,
        })).join('')}</ul>
      </div>`;
    }).join('');
    return `
    <details class="tes-mundo"${m.extra ? ' data-extra' : ''}>
      <summary>
        ${COFRE_SIN_IMG.has(m.id) ? '<svg class="tes-cofre tes-cofre-gen" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/><path d="M4 11h16M10 11v3h4v-3"/></svg>' : `<img class="tes-cofre" src="${IMG_BUILD}cofre-${m.id}.webp" alt="" width="56" height="52" loading="lazy">`}
        <span class="tes-nombre">${esc(m.mundo)}</span>
        ${ids.length ? `<span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span>` : `<span class="count">${m.tesoros.length} ${m.tesoros.length === 1 ? 'cofre' : 'cofres'}</span>`}
      </summary>
      ${m.extra ? '<p class="nota-fuente">Episodio secreto de Final Mix. Según la hoja de seguimiento, estos cofres no cuentan para ningún logro: puedes marcarlos, pero no suman.</p>' : ''}
      <div class="tes-zonas">${filas}</div>
    </details>`;
  }).join('');
  return `<div class="tes-mundos">${mundos}</div>
    <p class="hint">Abrirlos todos forma parte de completar los Informes de cada personaje.</p>
    ${fuentes(['hojaTesoros', 'guiaSteam', 'wikiEsReceta', 'khwikiCofres'])}`;
}

// --- Página de personaje ---

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

  const contLogros = () => `
    ${subnav([['build', 'Build'], ...(JEFES[pj] ? [['jefes', 'Jefes']] : []), ['logros', 'Logros'], ['cuartelillo', 'Cuartelillo'], ['comandos', 'Comandos'], ['nexos', 'Nexos-D']])}
    ${bloque('build', 'Build recomendada', buildPj(pj), { lead: 'Empieza por «Avanzar por la historia» o elige un combate difícil; toca cada pieza para ver qué es y cómo se consigue.' })}
    ${JEFES[pj] ? bloque('jefes', 'Jefes de la historia', jefesPj(pj), { lead: `Los jefes de la historia de ${p.nombre}, con sus debilidades, recompensas y cómo vencerlos. El Desconocido y los jefes secretos están en la build.` }) : ''}
    ${bloque('logros', `Logros de ${p.nombre}`, `<ul class="list">${logros.map(itemLogro).join('')}</ul>${fuentes(['steam', 'guiaSteam'])}`)}
    ${bloque('cuartelillo', 'Cuartelillo', `
      <ul class="recipes">${CUARTELILLO[pj].map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <p class="hint">Cada síntesis tiene un 10 % de probabilidad de dar Cuartelillo; el 90 % restante da Hoja Afortunada.</p>
      ${fuentes(['wikiEsCuartelillo'])}`, {
      lead: `Ejecutarlo con ${p.nombre} da el logro «${esc(logros.find((l) => /Cuartelillo/.test(l.desc))?.nombre)}». Hay uno en un cofre de Ciudad Disney (sala de juegos de Pete) o puedes sintetizarlo:`,
    })}
    ${bloque('comandos', `Comandos de ${p.nombre}`, comandosPj(pj), { lead: 'Todos sus comandos, en el orden del menú del juego: cómo se consigue cada uno y sus recetas de síntesis. Busca por nombre o ingrediente, o filtra por cómo se obtienen.' })}
    ${bloque('nexos', 'Nexos-D', nexosPj(pj), { lead: `Los Nexos-D que puede usar ${p.nombre} y cómo se consigue cada uno.` })}`;

  const xeh = INFORMES_XEHANORT.filter((x) => x.pj === pj);
  const idsPegMundos = PEGATINAS_MUNDOS[pj].map((m) => ID.pegMundo(pj, m.id));
  const idsPegPremios = PEGATINAS[pj].map(([pts]) => ID.pegatina(pj, pts));
  medidores[`pj-${pj}-pegm`] = idsPegMundos;
  medidores[`pj-${pj}-pegr`] = idsPegPremios;
  const idsTab = TABLEROS.map((t) => ID.tablero(pj, t.id));
  const idsTabCoso = TABLEROS.map((t) => ID.tableroCoso(pj, t.id));
  const excl = exclusivosDeTablero(pj);
  const idsExcl = excl.map((e) => ID.tableroCmd(pj, e.n));
  medidores[`pj-${pj}-tab`] = idsTab;
  medidores[`pj-${pj}-tabc`] = idsTabCoso;
  medidores[`pj-${pj}-tabx`] = idsExcl;
  const grupoTab = (titulo, clave, ids, intro, lista) => `
      <div class="group">
        <h3>${titulo} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
        <p class="group-intro">${intro}</p>
        <ul class="list">${lista}</ul>
      </div>`;
  const tablerosPj = `
      ${grupoTab('Victorias en cada tablero', `pj-${pj}-tab`, idsTab, `Gana una partida en cada tablero jugando con ${p.nombre}.`,
        TABLEROS.map((t) => item({ id: ID.tablero(pj, t.id), titulo: t.nombre, desc: `Se desbloquea: ${TABLEROS_INFO[t.id].desbloqueo}`, extra: `<div class="tb-extra">${verCasilla(t, null, 'Ver el tablero')}</div>` })).join(''))}
      ${grupoTab('Comandos que solo salen de un tablero', `pj-${pj}-tabx`, idsExcl, 'No se sintetizan ni salen de cofres o enemigos: hay que caer en esa casilla bonus.',
        excl.map((e) => item({ id: ID.tableroCmd(pj, e.n), titulo: e.n, desc: e.donde.some((d) => d.tipo === 'limitada') ? 'Sale mientras no lo tengas.' : '',
          extra: `<div class="tb-extra">${e.donde.map((d) => verCasilla(d.t, d.num, `${esc(d.t.nombre)}, casilla ${d.num}`)).join('')}</div>` })).join(''))}
      ${grupoTab('Victorias en el Coso Virtual', `pj-${pj}-tabc`, idsTabCoso, 'Para llevar la cuenta. No suman al 100 %: ninguna fuente dice que hagan falta con cada personaje.',
        TABLEROS.map((t) => item({ id: ID.tableroCoso(pj, t.id), titulo: t.nombre })).join(''))}
      <p class="hint">Los mapas y lo que da cada casilla están en <a href="#/bbs" data-ir-seccion="tableros">Birth by Sleep › Tableros</a>.</p>
      ${fuentes(['khwikiTableros', 'wikiEsTableros'])}`;
  const contInformes = () => `
    ${subnav([['build', 'Build'], ...(JEFES[pj] ? [['jefes', 'Jefes']] : []), ['xehanort', 'Informes Xehanort'], ['golpes', 'Golpes finales'], ['estilos', 'Estilos'], ['pegatinas', 'Pegatinas'], ['tesoros', 'Tesoros'], ['tableros', 'Tableros'], ['comandos', 'Comandos'], ['nexos', 'Nexos-D']])}
    ${bloque('build', 'Build recomendada', buildPj(pj), { lead: 'Empieza por «Avanzar por la historia» o elige un combate difícil; toca cada pieza para ver qué es y cómo se consigue.' })}
    ${JEFES[pj] ? bloque('jefes', 'Jefes de la historia', jefesPj(pj), { lead: `Los jefes de la historia de ${p.nombre}, con sus debilidades, recompensas y cómo vencerlos. El Desconocido y los jefes secretos están en la build.` }) : ''}
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
    ${bloque('pegatinas', 'Álbum de pegatinas', `
      <div class="group">
        <h3>Pegatinas por mundo <span class="count" data-count="pj-${pj}-pegm">${store.contar(idsPegMundos)}/${idsPegMundos.length}</span></h3>
        <p class="group-intro">${PEGATINAS_MUNDOS[pj].reduce((t, m) => t + m.n, 0)} pegatinas en total. Marca cada mundo cuando tengas todas las suyas.</p>
        <ul class="list">${PEGATINAS_MUNDOS[pj].map((m) => item({
          id: ID.pegMundo(pj, m.id),
          titulo: `${m.mundo} · ${m.n} ${m.n === 1 ? 'pegatina' : 'pegatinas'}`,
          desc: m.zonas.map((z) => (m.repes[z] ? `${z} (${m.repes[z]})` : z)).join(' · '),
        })).join('')}</ul>
      </div>
      <div class="group">
        <h3>Recompensas del álbum <span class="count" data-count="pj-${pj}-pegr">${store.contar(idsPegPremios)}/${idsPegPremios.length}</span></h3>
        <p class="group-intro">Cada pegatina da entre 5 y 7 puntos según lo bien que la coloques. Hay que encontrarlas todas y pegarlas bien para llegar a 140.</p>
        <ul class="list">${PEGATINAS[pj].map(([pts, premio]) => item({
          id: ID.pegatina(pj, pts), titulo: `${pts} puntos`, desc: `Recompensa: ${premio}.`,
        })).join('')}</ul>
      </div>
      ${fuentes(['khwikiPegatinas', 'wikiEsPegatinas', 'guiaSteam'])}`, {
      meter: medidor(`pj-${pj}-peg`, [...idsPegMundos, ...idsPegPremios], 'Álbum'),
      lead: 'Las zonas van con su nombre en inglés: no tienen nombre oficial en castellano comprobado.',
    })}
    ${bloque('tesoros', 'Tesoros', tesorosPj(pj), {
      meter: medidor(`pj-${pj}-tesoros`, idsTesoros(pj), 'Cofres'),
      lead: `Los cofres de cada mundo con ${p.nombre}, en el orden de la hoja de seguimiento y con la zona donde está cada uno. Las zonas con un punteado debajo no tienen nombre oficial comprobado en castellano: están traducidas, y al pasar el ratón ves su nombre en inglés.`,
    })}
    ${bloque('tableros', 'Tableros de comandos', tablerosPj, {
      meter: medidor(`pj-${pj}-tableros`, [...idsTab, ...idsExcl], 'Tableros'),
    })}
    ${bloque('comandos', `Comandos de ${p.nombre}`, comandosPj(pj), { lead: 'Todos sus comandos, en el orden del menú del juego: cómo se consigue cada uno y sus recetas de síntesis. Busca por nombre o ingrediente, o filtra por cómo se obtienen.' })}
    ${bloque('nexos', 'Nexos-D', nexosPj(pj), { lead: `Los Nexos-D que puede usar ${p.nombre} y cómo se consigue cada uno.` })}`;

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
      subLogros: `Logros propios de ${p.nombre}`, subJuego: 'Informes, golpes, estilos, pegatinas, tesoros y tableros',
    })}
    ${m === 'logros' ? contLogros() : contInformes()}
  </section>`;
}

// ---------- Kingdom Hearts Final Mix ----------
function rutaPasos(ruta, logros) {
  return ruta.map((r, i) => `
    <li class="step">
      <span class="step-n" aria-hidden="true">${i + 1}</span>
      <div class="step-body">
        <h3>${esc(r.titulo)}</h3>
        <p>${esc(r.texto)}</p>
        ${r.logros.length ? `<div class="item-foot">${r.logros.map((id) => `<span class="chip">${esc(logros[id].nombre)}</span>`).join('')}</div>` : ''}
        ${fuentes(r.fuentes)}
      </div>
    </li>`).join('');
}

function khfmLogros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.khfmLogro);
    medidores[`khfm-g-${g.id}`] = ids;
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="khfm-g-${g.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroKhfm[id], 'khfm')).join('')}</ul>
    </div>`;
  };
  return `
    ${subnav([['ruta', 'Ruta'], ['logros', 'Logros']])}
    ${bloque('ruta', 'Antes de empezar', `<ol class="steps">${rutaPasos(RUTA_KHFM, logroKhfm)}</ol>`, { lead: 'Lo que conviene saber antes de la primera partida para no repetirla.' })}
    ${bloque('logros', 'Los 55 logros', `${GRUPOS_LOGROS_KHFM.map(grupo).join('')}${fuentes(FUENTES_CONSEJOS_KHFM)}`, {
      meter: medidor('khfm-logros-lista', logrosKHFM(), 'Logros'),
      lead: 'Abre «Cómo conseguirlo» donde lo haya. Los logros ocultos esconden su descripción hasta que la abras.',
    })}`;
}

function grupoKhfm(clave, titulo, ids, filas, intro = '') {
  medidores[clave] = ids;
  return `
    <div class="group">
      <h3>${titulo} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      ${intro}
      <ul class="list">${filas}</ul>
    </div>`;
}

const armaPorId = Object.fromEntries(ARMAS.flatMap((g) => g.items.map((a) => [a.id, a])));
const matPorId = Object.fromEntries(MATERIALES.map((m) => [m.id, m]));
const signo = (n) => (n < 0 ? `−${-n}` : `+${n}`);
const statsArma = (a) => `Fuerza ${signo(a.fue)}${a.pm ? ` · PM ${signo(a.pm)}` : ''}`;
const chipFM = (texto = 'FM') => `<span class="chip chip-fm" title="Nuevo en Final Mix">${texto}</span>`;

// Tarjeta marcable con imagen (armas y planos gumi). `sub` y `cuerpo` ya van escapados.
function tarjetaImg({ id, img, nombre, sub = '', cuerpo = '' }) {
  const hecho = store.hecho(id);
  return `
    <li class="item arma${hecho ? ' is-done' : ''}">
      <label class="arma-head">
        <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
        <span class="arma-art"><img src="${esc(img)}" alt="" loading="lazy"></span>
        <span class="arma-tit">
          <span class="item-title">${esc(nombre)}</span>
          ${sub ? `<span class="arma-stats">${sub}</span>` : ''}
        </span>
        <span class="crown">${CORONA}</span>
      </label>
      ${cuerpo}
    </li>`;
}

function khfmArmas() {
  const tarjeta = (a) => tarjetaImg({
    id: ID.khfmArma(a.id),
    img: `${IMG_ARMAS}${a.id}.webp`,
    nombre: a.nombre,
    sub: `${esc(statsArma(a))}${a.fm ? ` ${chipFM('Nueva en FM')}` : ''}`,
    cuerpo: `${a.desc ? `<p class="arma-desc">${esc(a.desc)}</p>` : ''}
      <p class="arma-como"><b>Cómo:</b> ${esc(a.como)}</p>
      ${a.nota ? `<p class="arma-nota">${esc(a.nota)}</p>` : ''}`,
  });
  return ARMAS.map((g) => {
    const clave = `khfm-armas-${g.id}`;
    const ids = g.items.map((a) => ID.khfmArma(a.id));
    medidores[clave] = ids;
    const tienda = g.items.filter((a) => a.como.startsWith('Tienda')).length;
    return `
    <div class="group">
      <h3>${esc(g.titulo)} de ${esc(g.quien)} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span>
        <span class="chip chip-logro">Logro: ${esc(logroKhfm[g.logro].nombre)}</span></h3>
      <p class="group-intro">${ids.length} en total${tienda ? `; ${tienda} se compran en la tienda de Juanito, Jaimito y Jorgito (Ciudad de Paso)` : ''}.</p>
      <ul class="armas">${g.items.map(tarjeta).join('')}</ul>
    </div>`;
  }).join('');
}

const ROMANO = ['I', 'II', 'III'];
const estrellasDif = (n) => `<span class="stars" aria-label="Dificultad ${n} de 5">${'★'.repeat(n)}<span class="stars-off">${'★'.repeat(5 - n)}</span></span>`;

function khfmGumi() {
  const misiones = MISIONES_GUMI.map((w) => {
    const ids = w.m.map((_, i) => ID.khfmMision(w.mundo, i + 1));
    return grupoKhfm(`khfm-mis-${w.mundo}`, esc(w.nombre), ids, w.m.map((x, i) => item({
      id: ids[i],
      titulo: `Misión ${ROMANO[i]}`,
      desc: x.t,
      meta: `${estrellasDif(x.e)} <span class="chip${x.plano ? ' chip-fm' : ''}">Premio: ${esc(x.premio)}</span>`,
    })).join(''));
  }).join('');

  const grupoPlanos = (clave, titulo, intro, lista) => {
    const ids = lista.map((p) => p.idMarca);
    medidores[clave] = ids;
    return `
    <div class="group">
      <h3>${titulo} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">${intro}</p>
      <ul class="armas planos">${lista.map((p) => tarjetaImg({ id: p.idMarca, img: `${IMG_GUMI}${p.id}.webp`, nombre: p.nombre, cuerpo: p.cuerpo })).join('')}</ul>
    </div>`;
  };
  const como = (t, nota) => `<p class="arma-como"><b>Cómo:</b> ${esc(t)}</p>${nota ? `<p class="arma-nota">${esc(nota)}</p>` : ''}`;
  const basicos = PLANOS_BASICOS.map((p) => ({ ...p, idMarca: idPlano(p.id), cuerpo: como(p.como, p.nota) }));
  const enemigos = PLANOS_ENEMIGOS.map((p) => ({
    ...p, idMarca: idPlano(p.id),
    cuerpo: `<p class="arma-como"><b>Dónde sale:</b></p><ul class="rutas-gumi">${p.rutas.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>${p.kairi ? '<p class="arma-nota">En algunas de estas rutas solo aparece después de rescatar a Kairi.</p>' : ''}`,
  }));
  const deMision = MISIONES_GUMI.flatMap((w) => w.m.filter((x) => x.plano).map((x) => ({
    id: x.plano, nombre: x.premio.replace('Plano ', ''), idMarca: idPlano(x.plano), cuerpo: como(`Misión III de ${w.nombre}. Se marca a la vez que la misión.`),
  }))).concat({ ...PLANO_BAHAMUT, idMarca: idPlano(PLANO_BAHAMUT.id), cuerpo: como(PLANO_BAHAMUT.como) });

  return `
    <h3 class="bx-sub">Misiones gumi</h3>
    <ul class="sx-pasos bullets">${MISIONES_INFO.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <div class="info-card nave-base"><h3>Una nave base para las misiones</h3>
      <p>La que propone la guía de Steam de 100 %, montada antes de Atlántica:</p>
      <ol>${NAVE_BASE.map((t) => `<li>${esc(t)}</li>`).join('')}</ol></div>
    ${misiones}
    <h3 class="bx-sub" id="khfm-planos">Planos</h3>
    <p class="group-intro">Hay 48. El logro «${esc(logroKhfm.ACH_045.nombre)}» pide 30: lo más rápido son las misiones III, que además te hacen abatir las naves enemigas de las que caen los demás (un 10 % de las veces).</p>
    ${grupoPlanos('khfm-pl-basicos', 'De Geppetto y Pinocho', 'En la casa de Geppetto, en Ciudad de Paso, que aparece después de escapar de Monstruo.', basicos)}
    ${grupoPlanos('khfm-pl-enemigos', 'De naves enemigas', 'Cada nave enemiga suelta su propio plano con un 10 % de probabilidad al abatirla.', enemigos)}
    ${grupoPlanos('khfm-pl-misiones', 'De misiones', 'Uno por cada misión III, y Bahamut al completar todas.', deMision)}`;
}

function khfmSintesis() {
  // Total de cada material para fabricar una vez cada objeto.
  const total = {};
  for (const l of LISTAS_SINTESIS) for (const x of l.items) for (const [m, n] of x.receta) total[m] = (total[m] ?? 0) + n;
  const receta = (r) => `<ul class="receta">${r.map(([m, n]) => `
    <li><a class="mat-chip${matPorId[m].fm ? ' is-fm' : ''}" href="#mat-${m}" data-goto="mat-${m}"><b>${n}×</b> ${esc(matPorId[m].nombre)}</a></li>`).join('')}</ul>`;
  const listas = LISTAS_SINTESIS.map((l) => {
    const ids = l.items.map(idSintesis);
    const filas = l.items.map((x) => {
      const arma = x.arma && armaPorId[x.arma];
      return item({
        id: idSintesis(x),
        titulo: x.nombre,
        desc: arma ? statsArma(arma) : x.efecto,
        icono: arma ? `${IMG_ARMAS}${x.arma}.webp` : '',
        meta: `<span class="chip">${esc(x.tipo)}</span>${x.fm || arma?.fm ? ` ${chipFM()}` : ''}`,
        extra: `<div class="item-foot">${receta(x.receta)}</div>${x.nota ? `<p class="nota-fuente">${esc(x.nota)}</p>` : ''}`,
      });
    }).join('');
    return grupoKhfm(`khfm-sx-${l.n}`, `Lista ${l.n}`, ids, filas, `<p class="group-intro">${esc(l.abre)}</p>`);
  }).join('');
  const mats = MATERIALES.map((m) => `
    <li class="mat${m.fm ? ' is-fm' : ''}" id="mat-${m.id}">
      <div class="mat-head"><b>${esc(m.nombre)}</b>${m.fm ? chipFM() : ''}<span class="mat-n" title="Para fabricar una vez cada objeto">${total[m.id] ?? 0}</span></div>
      <p><span>Lo suelta:</span> ${esc(m.de)}</p>
      <p><span>Dónde:</span> ${esc(m.donde)}</p>
      ${m.nota ? `<p class="mat-nota">${esc(m.nota)}</p>` : ''}
    </li>`).join('');
  return `
    <ol class="sx-pasos bullets">${PASOS_SINTESIS.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>
    ${listas}
    <h3 class="bx-sub" id="khfm-materiales">Materiales</h3>
    <p class="group-intro">El número es cuántos hacen falta para fabricar una vez cada objeto (Mitrilo y Materia Oscura incluidos como ingredientes). Pulsa un material en una receta para saltar aquí.</p>
    <ul class="mats">${mats}</ul>`;
}

function khfmInformes() {
  const idsMundos = MUNDOS_KHFM.map((m) => ID.khfmLogro(m.logro));
  const mundos = MUNDOS_KHFM.map((m) => item({
    id: ID.khfmLogro(m.logro), titulo: m.nombre, desc: m.cerradura,
    meta: `<span class="chip">Logro: ${esc(logroKhfm[m.logro].nombre)}</span>`,
  })).join('');

  const secciones = SECCIONES_DIARIO.map((s) => `
    <div class="info-card"><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p>
      <p class="info-logro"><span class="chip chip-logro">Logro: ${esc(logroKhfm[s.logro].nombre)}</span></p></div>`).join('');

  const ansem = INFORMES_ANSEM.map((x) => item({
    id: ID.khfmAnsem(x.n), titulo: `Informe Ansem ${x.n}`, desc: x.como,
    meta: x.fm ? '<span class="chip">Nuevo en Final Mix</span>' : '',
  })).join('');

  const mundosDalm = [...new Set(DALMATAS.map((d) => d.mundo))];
  const dalmatas = mundosDalm.map((mu) => {
    const ds = DALMATAS.filter((d) => d.mundo === mu);
    return grupoKhfm(`khfm-dalm-${slug(mu)}`, esc(mu), ds.map((d) => ID.khfmDalmata(d.n)), ds.map((d) => item({
      id: ID.khfmDalmata(d.n), titulo: `Cachorros ${d.n}-${d.n + 2}`, desc: d.donde,
      extra: d.nota ? `<p class="nota-fuente">${esc(d.nota)}</p>` : '',
    })).join(''));
  }).join('');

  const trios = TIPOS_TRIO.map((tp) => {
    const ms = triosDe(tp.id);
    return `<div class="trio-tipo" style="--trio:${tp.color}">${grupoKhfm(`khfm-trio-${tp.id}`, `<span class="trio-marca" aria-hidden="true"></span>${esc(tp.nombre)}`,
      ms.map((_, i) => ID.khfmTrio(tp.id, i + 1)), ms.map(([, mundo, zona, donde, efecto, nota], i) => item({
        id: ID.khfmTrio(tp.id, i + 1), titulo: `${mundo} · ${zona}`, desc: donde,
        meta: efecto ? `<span>${esc(efecto)}</span>` : '',
        extra: nota ? `<p class="nota-fuente">${esc(nota)}</p>` : '',
      })).join(''), `<p class="group-intro">Cuándo se aprende: ${esc(tp.aprende.charAt(0).toLowerCase() + tp.aprende.slice(1))}</p>`)}</div>`;
  }).join('');

  const records = RECORDS.map((r) => item({
    id: ID.khfmRecord(r.id), titulo: r.nombre, desc: r.como ?? '',
    meta: `<span class="chip">${esc(r.mundo)}</span>${r.meta ? ` <span>${esc(r.meta)}</span>` : ''}`,
  })).join('');

  return `
    ${subnav([['mundos', 'Mundos'], ['diario', 'Diario de Pepito'], ['ansem', 'Informes Ansem'], ['dalmatas', 'Dálmatas'], ['trio', 'Marcas Trío'], ['records', 'Récords'], ['armas', 'Armas'], ['sintesis', 'Síntesis'], ['gumi', 'Naves gumi']])}
    <p class="mode-note">El 100 % cuenta las cerraduras, lo que pide el diario de Pepito, las armas, la síntesis y las naves gumi.</p>
    ${bloque('mundos', 'Mundos y cerraduras', `<ul class="list">${mundos}</ul>
      <div class="group"><h3>Páginas arrancadas del libro de Pooh</h3>
        <p class="group-intro">Abren las zonas del Bosque de los Cien Acres; con todas puedes sellar su cerradura. Datos del KH original.</p>
        <ul class="bullets">${PAGINAS_POOH.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      ${fuentes([...FUENTES_MUNDOS_KHFM, 'wikiEsBosque'])}`, {
      meter: medidor('khfm-mundos', idsMundos, 'Cerraduras'),
      lead: 'En el orden de sus logros. Marcar una cerradura aquí también marca su logro, y al revés.',
    })}
    ${bloque('diario', 'Diario de Pepito', `<div class="info-cards">${secciones}</div>${fuentes(['wikiEsDiario', 'guiaSteamKhfm', 'steamKhfm'])}`, {
      lead: 'Completarlo entero da «Ayudante de Pepito» y, en Normal, el final secreto «[Deep Dive]». Cada sección tiene su propio logro.',
    })}
    ${bloque('ansem', 'Informes Ansem', `<ul class="list">${ansem}</ul>${fuentes(['wikiEsAnsem', 'khwikiAnsem'])}`, {
      meter: medidor('khfm-ansem', idsAnsem(), 'Informes'),
      lead: 'Los 10 primeros salen como en el KH original; Final Mix añade del 11 al 13.',
    })}
    ${bloque('dalmatas', '99 dálmatas', `
      <h3 class="bx-sub">Premios de Pongo y Perdita</h3>
      <ul class="premios-dalm">${PREMIOS_DALMATAS.map(([n, p]) => `<li><b>${esc(n)}</b><span>${esc(p)}</span></li>`).join('')}</ul>
      <p class="hint">Hay que volver a su casa del Callejón de Ciudad de Paso para recoger cada premio. Con los 99, las cerraduras y la copa Hades en Normal se desbloquea «Another Side, Another Story...».</p>
      ${dalmatas}${fuentes(['diDalmatas', 'fandomEnPuppies', 'wikiEsDalmatas', 'guiaSteamDalmatas', 'khwikiKhfm'])}`, {
      meter: medidor('khfm-dalmatas', idsDalmatas(), 'Cofres'),
      lead: 'Van de tres en tres en 33 cofres. Ubicaciones de Final Mix (varias cambian respecto al KH original). El diario de Pepito te dice cuántos te quedan en cada mundo pulsando Triángulo.',
    })}
    ${bloque('trio', 'Marcas Trío', `${trios}${fuentes(['wikiEsTrio', 'khwikiTrinity', 'diTrinity'])}`, {
      meter: medidor('khfm-trio', idsTrio(), 'Marcas'),
      lead: 'Solo funcionan con Sora, Donald y Goofy en el grupo. Cada color se aprende en un momento de la historia; vuelve a los mundos cuando lo tengas.',
    })}
    ${bloque('records', 'Récords', `<ul class="list">${records}</ul>
      ${fuentes(['guiaSteamKhfm', 'wikiEsMinijuegos', 'wikiEsTobogan', 'diMinijuegos'])}`, {
      meter: medidor('khfm-records', idsRecords(), 'Minijuegos'),
      lead: 'Para el logro «Fan de los minijuegos» basta con jugar estos 9 minijuegos; no pide puntuación. Las puntuaciones de los del Bosque son para el premio de Búho.',
    })}
    ${bloque('armas', 'Armas', `${khfmArmas()}${fuentes(FUENTES_ARMAS_LISTA)}`, {
      meter: medidor('khfm-armas', idsArmas(), 'Armas'),
      lead: 'Las 48 armas de Sora, Donald y Goofy, con su bonificación en Final Mix y el texto del juego. Hay un logro por cada grupo completo.',
    })}
    ${bloque('sintesis', 'Síntesis', `${khfmSintesis()}${fuentes(FUENTES_SINTESIS_KHFM)}`, {
      meter: medidor('khfm-sintesis', idsSintesis(), 'Objetos'),
      lead: 'Los 33 objetos de la Orfebrería de Ciudad de Paso, en sus 6 listas. Cada lista se abre al fabricar cierto número de objetos distintos.',
    })}
    ${bloque('gumi', 'Naves gumi', `${khfmGumi()}${fuentes(['khwikiMisiones', 'diMisiones', 'khwikiPlanos', 'diPlanos', 'khwikiNaves', 'guiaSteamKhfm100', 'guiaSteamKhfm', 'wikiEsTrio'])}`, {
      meter: medidor('khfm-gumi', [...idsMisiones(), ...idsPlanos()], 'Misiones y planos'),
      lead: 'Las 30 misiones y los 48 planos, con la nave enemiga y la ruta de cada uno. Las piezas sin nombre oficial en castellano van en inglés entre «».',
    })}`;
}

function vistaKHFM() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Kingdom Hearts Final Mix' }]);
  return `
  <section class="page juego-khfm" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${KHFM.logo}" alt="Kingdom Hearts Final Mix" width="704" height="478">
      <div class="game-hero-stats">
        ${medidor('khfm-logros', logrosKHFM(), ETQ_LOGROS)}
        ${medidor('khfm-100', juegoKHFM(), ETQ_JUEGO)}
      </div>
    </header>
    ${selectorModo('khfm-modo-logros', logrosKHFM(), 'khfm-modo-100', juegoKHFM(), { subLogros: 'Los 55 logros oficiales', subJuego: 'Lo que registra el juego' })}
    ${modo() === 'logros' ? khfmLogros() : khfmInformes()}
  </section>`;
}

function vista404() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'No encontrado' }]);
  return `<section class="page"><h1 class="page-title">Esta página no existe</h1><p class="lead"><a href="#/juegos">Vuelve a la elección de juego</a>.</p></section>`;
}

// ---------- router ----------
let irA = null; // sección a la que bajar tras el siguiente cambio de página
function render({ conservarScroll = false } = {}) {
  const destino = irA;
  irA = null; // se consume en este render aunque no haya navegación (p. ej., Ctrl+clic)
  medidores = {};
  const y = window.scrollY;
  const ruta = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  let html;
  if (ruta.length === 0) html = vistaTitulo();
  else if (ruta[0] === 'juegos') html = vistaJuegos();
  else if (ruta[0] === 'bbs' && !ruta[1]) html = vistaBBS();
  else if (ruta[0] === 'bbs' && PERSONAJES[ruta[1]]) html = vistaPersonaje(ruta[1]);
  else if (ruta[0] === 'khfm' && !ruta[1]) html = vistaKHFM();
  else html = vista404();
  document.body.dataset.view = ruta[0] || 'titulo';
  $main.innerHTML = html;
  refrescarMedidores();
  if (conservarScroll) window.scrollTo(0, y);
  else if (destino && document.getElementById(destino)) {
    document.getElementById(destino).scrollIntoView();
  } else {
    window.scrollTo(0, 0);
    $main.focus({ preventScroll: true });
  }
}

// ---------- eventos ----------
document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.matches('.check-input')) {
    store.marcar(t.dataset.id, t.checked);
    // Una misma marca puede salir dos veces en la página (p. ej., un arma que también es receta).
    document.querySelectorAll(`.check-input[data-id="${CSS.escape(t.dataset.id)}"]`).forEach((x) => {
      x.checked = t.checked;
      x.closest('.item, .marca').classList.toggle('is-done', t.checked);
    });
  } else if (t.matches('[data-accion="importar"]') && t.files[0]) {
    t.files[0].text().then((txt) => {
      Promise.resolve().then(() => store.importar(txt))
        .then(() => { render(); alert('Progreso importado.'); })
        .catch((err) => { render(); alert(`No se pudo importar: ${err.message}`); });
    });
  }
});

document.addEventListener('click', (e) => {
  const casilla = e.target.closest('[data-casilla]');
  if (casilla) {
    const [t, num] = casilla.dataset.casilla.split(':');
    abrirCasilla(t, num ? Number(num) : null);
    return;
  }
  const goto = e.target.closest('[data-goto]');
  if (goto) {
    e.preventDefault();
    const el = document.getElementById(goto.dataset.goto);
    el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    return;
  }
  const sxHab = e.target.closest('[data-sx-hab]');
  if (sxHab) { elegirHabilidad(sxHab); return; }
  const catCmd = e.target.closest('[data-cmd-cat]');
  if (catCmd) { elegirCategoria(catCmd); return; }
  const filtro = e.target.closest('[data-cmd-filtro]');
  if (filtro) { filtro.setAttribute('aria-pressed', filtro.getAttribute('aria-pressed') !== 'true'); filtrarComandos(filtro.closest('.cmds')); return; }
  const irCmd = e.target.closest('[data-ir-cmd], [data-ver-cmd]');
  if (irCmd) { irAComando(irCmd); return; }
  const ficha = e.target.closest('[data-ficha]');
  if (ficha) { abrirFicha(ficha.dataset.ficha, ficha.dataset.fichaPj); return; }
  if (e.target.closest('[data-cerrar]')) { $dialogo?.close(); return; }
  const irSec = e.target.closest('[data-ir-seccion]');
  if (irSec) { irA = irSec.dataset.irSeccion; return; }
  const irBuild = e.target.closest('[data-ir-build]');
  if (irBuild) {
    // Abre la página del personaje con ese combate elegido en la build y baja hasta ella.
    store.fijarAjuste('buildCombate', irBuild.dataset.irBuild);
    irA = 'build';
    return;
  }
  const combate = e.target.closest('[data-combate]');
  if (combate) { if (combate.getAttribute('aria-selected') !== 'true') cambiarCombate(combate); return; }
  const pieza = e.target.closest('[data-pieza]');
  if (pieza) { mostrarPieza(pieza); return; }
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

// Flechas izquierda/derecha entre las dos pestañas del selector de modo y entre los combates de la build.
document.addEventListener('keydown', (e) => {
  const pestCmd = e.target.closest?.('.cmd-tabs [role="tab"]');
  if (pestCmd && ['ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
    const tabs = [...pestCmd.parentElement.children];
    const destino = tabs[(tabs.indexOf(pestCmd) + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    elegirCategoria(destino); destino.focus();
    return;
  }
  const fight = e.target.closest?.('.fights [role="tab"]');
  if (fight && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
    e.preventDefault();
    const tabs = [...fight.parentElement.children];
    const i = tabs.indexOf(fight);
    const j = { ArrowLeft: i - 1, ArrowRight: i + 1, Home: 0, End: tabs.length - 1 }[e.key];
    const destino = tabs[(j + tabs.length) % tabs.length];
    cambiarCombate(destino);
    destino.focus();
    return;
  }
  const tab = e.target.closest?.('.modes [role="tab"]');
  if (!tab || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const otro = tab.parentElement.querySelector(`[role="tab"]:not([data-modo="${tab.dataset.modo}"])`);
  otro?.click();
});

document.addEventListener('input', (e) => {
  if (e.target.matches('[data-cmd-buscar]')) filtrarComandos(e.target.closest('.cmds'));
});

store.alCambiar(refrescarMedidores);
window.addEventListener('hashchange', () => render());
await store.iniciar();
document.documentElement.dataset.theme = store.ajuste('tema', document.documentElement.dataset.theme);
render();
iniciarEstela();
