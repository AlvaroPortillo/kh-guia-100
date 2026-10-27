// ---------- KH Dream Drop Distance ----------
const GRUPO_DDD = (id) => GRUPOS_LOGROS_DDD.find((g) => g.id === id);
const listaLogrosDdd = (g) => `<ul class="list">${GRUPO_DDD(g).ids.map((id) => itemLogro(logroDdd[id], 'ddd')).join('')}</ul>`;
const estrellasDdd = (n) => (n ? `<span class="ddd-estrellas" role="img" aria-label="${n} de 5 estrellas">${'★'.repeat(n)}</span> ` : '');
const lugarDdd = (p) => (p.lugarEn ? `«${esc(p.lugar)}»` : esc(p.lugar));
const NOMBRE_MUNDO_DDD = Object.fromEntries(MUNDOS_DDD.map((m) => [m.id, m.nombre]));

// Portada del juego, modo Logros: antes de empezar y los 54 logros por sección.
function dddLogros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.dddLogro);
    medidores[`ddd-g-${g.id}`] = ids;
    const sec = seccionDdd(g.id);
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="ddd-g-${g.id}">${store.contar(ids)}/${ids.length}</span>
        ${sec ? `<a class="ir-seccion" href="#/ddd/${sec.id}">Ver la sección ${esc(sec.titulo)}</a>` : ''}</h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroDdd[id], 'ddd')).join('')}</ul>
    </div>`;
  };
  return `
    ${subnav([['ruta', 'Antes de empezar'], ['logros', 'Logros']])}
    ${bloque('ruta', 'Antes de empezar', `<ol class="steps">${rutaPasos(RUTA_DDD, logroDdd)}</ol>`, { lead: 'Lo que conviene saber antes de la primera partida.' })}
    ${bloque('logros', 'Los 54 logros', `${GRUPOS_LOGROS_DDD.map(grupo).join('')}${fuentes(['steamDdd', 'gbTrofeos', 'kwGuia'])}`, {
      meter: medidor('ddd-logros-lista', logrosDdd(), 'Logros'),
      lead: 'Abre «Cómo conseguirlo» donde lo haya. Los logros ocultos esconden su descripción hasta que la abras.',
    })}`;
}

// Mundos y jefes.
function dddHistoria() {
  const jefe = (j) => `
    <article class="mini-kh2">
      <h4>${esc(j.nombre)} <span class="chip">${j.pj === 'sora' ? 'Sora' : 'Riku'}</span></h4>
      <details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(j.t)}</p></details>
      <div class="niveles-forma">${marca(ID.dddJefe(j.id), 'Vencido')}</div>
    </article>`;
  const mundo = (m) => {
    const ids = [ID.dddLogro(m.logro), ...m.jefes.map((j) => ID.dddJefe(j.id))];
    const clave = `ddd-mundo-${m.id}`;
    medidores[clave] = ids;
    return `
    <article class="mundo-kh2" id="mundo-${m.id}">
      <h3>${esc(m.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list">${itemLogro(logroDdd[m.logro], 'ddd')}</ul>
      ${m.nota ? `<p class="mini-consejo">${esc(m.nota)}</p>` : ''}
      ${m.llaves ? `<p class="mini-consejo"><b>Llave Espada:</b> ${m.llaves.map(esc).join(' · ')}</p>` : ''}
      ${m.jefes.length ? `<div class="minis-kh2">${m.jefes.map(jefe).join('')}</div>` : ''}
    </article>`;
  };
  const secretos = SECRETOS_DDD.map((s) => `
    <article class="mini-kh2">
      <h4>${esc(s.nombre)}</h4>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(s.donde)}</p>
      <details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(s.t)}</p></details>
      <div class="niveles-forma">${s.marcas.map(([k, t]) => marca(ID.dddSecreto(s.id, k), esc(t))).join('')}</div>
    </article>`).join('');
  medidores['ddd-jefes'] = idsJefesDdd();
  medidores['ddd-secretos'] = idsSecretosDdd();
  return `
    <p class="lead seccion-lead">${esc(INTRO_MUNDOS_DDD)}</p>
    ${subnav([['mundos-ddd', 'Mundos y jefes'], ['secretos-ddd', 'Jefes secretos']])}
    ${bloque('mundos-ddd', 'Mundos y jefes', `<div class="mundos-kh2">${MUNDOS_DDD.map(mundo).join('')}</div>`, { meter: medidor('ddd-jefes', idsJefesDdd(), 'Jefes') })}
    ${bloque('secretos-ddd', 'Jefes secretos', `<div class="minis-kh2">${secretos}</div>`, { meter: medidor('ddd-secretos', idsSecretosDdd(), 'Vencidos') })}
    ${fuentes(FUENTES_MUNDOS_DDD)}`;
}

// Portales especiales, secretos y Portales Nexo.
function dddPortales() {
  const portal = (p) => marca(ID.dddPortal(p.mundo, p.pj, p.n), `<b>Portal ${p.n}</b> · ${lugarDdd(p)}<small>${estrellasDdd(p.estrellas)}${p.luciente ? esc(p.luciente) : `«${esc(p.enemigoEn)}»`} · ${esc(p.objetivo)}</small>`);
  const mundo = (m) => {
    const lista = (pj) => {
      const ps = PORTALES_DDD.filter((p) => p.mundo === m && p.pj.toLowerCase() === pj);
      const sec = SECRETOS_PORTALES_DDD.find((s) => s.mundo === m && s.pj.toLowerCase() === pj);
      return `<h4 class="sub-pj">${pj === 'sora' ? 'Sora' : 'Riku'}</h4>
        <div class="portales-ddd">${ps.map(portal).join('')}${marca(ID.dddPortal(m, pj, 'secreto'), `<b>Portal secreto</b>${sec && sec.lugar ? ` · ${sec.lugar.startsWith('Portal') ? '' : '«'}${esc(sec.lugar)}${sec.lugar.startsWith('Portal') ? '' : '»'}` : ''}<small>Se abre al terminar el juego, en el sitio del jefe</small>`)}</div>`;
    };
    const ids = [...PJ_DDD.flatMap((pj) => [...PORTALES_DDD.filter((p) => p.mundo === m && p.pj.toLowerCase() === pj).map((p) => ID.dddPortal(p.mundo, p.pj, p.n)), ID.dddPortal(m, pj, 'secreto')])];
    medidores[`ddd-portales-${m}`] = ids;
    return `
    <article class="mundo-kh2" id="portales-${m}">
      <h3>${esc(NOMBRE_MUNDO_DDD[m])} <span class="count" data-count="ddd-portales-${m}">${store.contar(ids)}/${ids.length}</span></h3>
      ${PJ_DDD.map(lista).join('')}
    </article>`;
  };
  const obj = NEXO_OBJETIVOS_DDD.map((t, i) => marca(ID.dddNexoObj(i + 1), esc(t))).join('');
  medidores['ddd-nexoobj'] = idsNexoObjDdd();
  return `
    <p class="lead seccion-lead">${esc(INTRO_PORTALES_DDD)}</p>
    ${bloque('logros-portales', 'Los logros', listaLogrosDdd('portales'))}
    <div class="info-cards">${COMO_PORTALES_DDD.map((c) => `<div class="info-card"><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join('')}</div>
    ${subnav([...MUNDOS_PORTALES_DDD.map((m) => [`portales-${m}`, NOMBRE_MUNDO_DDD[m].replace(/^(El|La) /, '')]), ['nexo-objetivos', 'Portales Nexo']])}
    <div class="mundos-kh2">${MUNDOS_PORTALES_DDD.map(mundo).join('')}</div>
    ${bloque('nexo-objetivos', 'Objetivos de los Portales Nexo', `<p class="group-intro">${esc(NOTA_NEXO_OBJ)}</p><div class="portales-ddd">${obj}</div>`, { meter: medidor('ddd-nexoobj', idsNexoObjDdd(), 'Objetivos') })}
    <p class="nota-fuente">${esc(NOTA_PORTALES_DDD)}</p>
    ${fuentes(['kwPortales', 'gbTrofeos'])}`;
}

// Lucientes: fórmulas, creación, Nexos y habilidades.
function dddLucientes() {
  const carta = (l) => `
    <article class="luciente-ddd" id="luciente-${l.id}">
      <div class="luciente-ddd-head">
        ${l.img ? `<img class="luciente-ddd-img" src="assets/img/ddd/lucientes/${l.img}.webp" alt="" loading="lazy" width="72" height="72">` : `<span class="luciente-ddd-ph" aria-hidden="true">${l.n}</span>`}
        <div><h3>${esc(l.nombre)}</h3><small>N.º ${l.n}${l.en ? ` · «${esc(l.en)}»` : ''}</small></div>
      </div>
      <p><b>Fórmula:</b> ${esc(l.como)}</p>
      ${l.ataqueNexo ? `<p><b>Ataque Nexo de Sora:</b> ${esc(l.ataqueNexo)}</p>` : ''}
      ${l.recetas.length ? `<details><summary>Recetas (${l.recetas.length})</summary><ul>${l.recetas.map((r) => `<li>${esc(r[0])} + ${esc(r[1])}</li>`).join('')}</ul></details>` : ''}
      <div class="niveles-forma">${marca(ID.dddFormula(l.id), 'Fórmula')}${marca(ID.dddLuciente(l.id), 'Creado')}</div>
    </article>`;
  const nexos = GRUPOS_NEXO_DDD.map(([k, titulo]) => {
    const ids = NEXOS_DDD[k].map((x) => ID.dddNexo(k, x.n));
    medidores[`ddd-nexo-${k}`] = ids;
    return bloque(`nexo-${k}`, esc(titulo), `<div class="portales-ddd">${NEXOS_DDD[k].map((x) => marca(ID.dddNexo(k, x.n), `<b>${esc(x.n)}</b><small>${x.lucientes.map(esc).join(' + ')}</small>`)).join('')}</div>`, { meter: medidor(`ddd-nexo-${k}`, ids, 'Hechos') });
  }).join('');
  const hab = (titulo, lista) => `<h4 class="sub-pj">${esc(titulo)}</h4><div class="portales-ddd">${lista.map((n) => marca(ID.dddHabilidad(n), esc(n))).join('')}</div>`;
  medidores['ddd-formulas'] = idsFormulasDdd();
  medidores['ddd-creados'] = idsCreadosDdd();
  medidores['ddd-habilidades'] = idsHabilidadesDdd();
  return `
    <p class="lead seccion-lead">${esc(INTRO_LUCIENTES_DDD)}</p>
    ${bloque('logros-lucientes', 'Los logros', listaLogrosDdd('lucientes'))}
    ${subnav([['lista-lucientes', '54 Lucientes'], ['nexos-ddd', 'Nexos'], ['habilidades-ddd', 'Habilidad máxima']])}
    ${bloque('lista-lucientes', 'Los 54 Lucientes', `<p class="group-intro">${esc(NOTA_LUCIENTES_DDD)}</p><div class="lucientes-ddd">${LUCIENTES_DDD.map(carta).join('')}</div>`, {
      meter: `${medidor('ddd-formulas', idsFormulasDdd(), 'Fórmulas')}${medidor('ddd-creados', idsCreadosDdd(), 'Creados')}`,
    })}
    <div id="nexos-ddd">${nexos}</div>
    ${bloque('habilidades-ddd', 'Habilidad máxima', `<p class="group-intro">${esc(HABILIDADES_DDD.nota)}</p>${hab('Habilidades de apoyo', HABILIDADES_DDD.apoyo)}${hab('Habilidades de Lucientes', HABILIDADES_DDD.lucientes)}`, { meter: medidor('ddd-habilidades', idsHabilidadesDdd(), 'Activadas') })}
    <p class="nota-fuente">Los nombres en inglés entre «» son los de KHWiki, solo para identificar a cada Luciente. Las recetas de KHWorld están en inglés y las he emparejado con los nombres de las oniritas en castellano; se han descartado las que no se podían emparejar sin dudas.</p>
    ${fuentes(['gbAnexo', 'kwSpirits', 'wikiEsOnirido', 'wikiEsNexario', 'khwikiDreamEater', 'gbTrofeos'])}`;
}

// Naiperama y minijuegos.
function dddMinijuegos() {
  const mini = (m) => `
    <article class="mini-kh2">
      <h4>${esc(m.nombre)}</h4>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(m.donde)}</p>
      <p class="mini-consejo">${esc(m.t)}</p>
      <div class="niveles-forma">${marca(ID.dddMinijuego(m.id), 'Jugado')}${marca(ID.dddLogro(m.logro), `<b>${esc(logroDdd[m.logro].nombre)}</b>`, 'marca-juego')}</div>
    </article>`;
  medidores['ddd-minijuegos'] = idsMinijuegosDdd();
  return `
    <p class="lead seccion-lead">Los logros de ACH_39 a ACH_45: el Naiperama (juego de cartas) y los minijuegos de los Lucientes y de La Red.</p>
    ${bloque('logros-minijuegos', 'Los logros', listaLogrosDdd('minijuegos'))}
    <div class="info-cards info-cards-2">
      <div class="info-card"><h3>Naiperama</h3><p>${esc(NAIPERAMA_DDD.texto)}</p><p>${esc(NAIPERAMA_DDD.consejo)}</p></div>
      <div class="info-card"><h3>Minijuegos en el diario</h3><p>Para el 100 % hay que jugar a todos una vez: Globo, Tonel, Gologafas y la moto de luz con Riku, en La Red.</p></div>
    </div>
    ${bloque('minijuegos-ddd', 'Minijuegos', `<div class="minis-kh2">${MINIJUEGOS_DDD.map(mini).join('')}</div>`, { meter: medidor('ddd-minijuegos', idsMinijuegosDdd(), 'Jugados') })}
    ${fuentes(['gbTrofeos', 'wikiEsNaiperama'])}`;
}

// Realidad Alterna y comandos acrobáticos.
function dddRealidad() {
  const tipo = (r) => `
    <article class="mini-kh2">
      <h4>${esc(r.nombre)}</h4>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(r.mundo)}</p>
      <p class="mini-consejo">${esc(r.t)}</p>
      <div class="niveles-forma">${marca(ID.dddRealidad(r.id), 'Enemigo derrotado con ella')}${marca(ID.dddLogro(r.logro), `<b>${esc(logroDdd[r.logro].nombre)}</b>`, 'marca-juego')}</div>
    </article>`;
  const lista = (titulo, items, idf) => `<h4 class="sub-pj">${esc(titulo)}</h4><div class="portales-ddd">${items.map((x) => marca(idf(x), `<b>${x.n.startsWith('«') ? x.n : esc(x.n)}</b><small>${esc(x.d)}</small>`)).join('')}</div>`;
  const acro = acrobatasDdd().map((n) => ({ n, d: 'Derrota al menos un enemigo con él.' }));
  medidores['ddd-realidad'] = idsRealidadDdd();
  return `
    <p class="lead seccion-lead">La Realidad Alterna es un ataque especial que se activa sobre un enemigo u objeto cuando aparece el círculo rosa. Cada mundo tiene la suya y cada una tiene su logro.</p>
    ${bloque('logros-realidad', 'Los logros', listaLogrosDdd('realidad'))}
    ${bloque('tipos-realidad', 'Las siete Realidades Alternas', `<p class="group-intro">${esc(NOTA_REALIDAD)}</p><div class="minis-kh2">${REALIDAD_DDD.map(tipo).join('')}</div>`, { meter: medidor('ddd-realidad', idsRealidadDdd(), 'Realidad Alterna') })}
    ${bloque('detalles-realidad', 'Comandos que hay que activar', `${lista('Descifrado (La Red): los siete comandos', DESCIFRADO_DDD, (x) => ID.dddDescifrado(x.n))}${lista('Historieta (País de los Mosqueteros): las cuatro viñetas', HISTORIETA_DDD, (x) => ID.dddHistorieta(x.n))}${lista('Modo acróbata', acro, (x) => ID.dddAcrobata(x.n))}`)}
    <p class="nota-fuente">Los comandos de Descifrado no tienen nombre en castellano en la fuente y van en inglés entre «».</p>
    ${fuentes(['gbTrofeos'])}`;
}

// Progreso: porcentajes, final secreto, tránsitos, Sopor.
function dddProgreso() {
  const cien = CIEN_DDD.map((c) => (c.marca
    ? `<li>${marca(idCienDdd(c), esc(c.t))}${c.nota ? `<p class="mini-consejo">${esc(c.nota)}</p>` : ''}</li>`
    : `<li class="cien-ddd"><span>${esc(c.t)}</span> <a class="ir-seccion" href="#/ddd/${c.seccion}">Ver ${esc(seccionDdd(c.seccion).titulo)}</a></li>`)).join('');
  const celda = (t, pj) => `<td>${marca(ID.dddTransito(t.id, pj), `<b>${esc(t[pj][0])}</b><small>${esc(t[pj][1])}</small>`)}</td>`;
  const tabla = `<div class="sx-tabla-wrap"><table class="sx-tabla">
    <thead><tr><th>Mundo</th><th>Sora: puntos y tiempo</th><th>Riku: puntos y tiempo</th></tr></thead>
    <tbody>${TRANSITOS_DDD.map((t) => `<tr><th>${esc(t.mundo)}</th>${celda(t, 'sora')}${celda(t, 'riku')}</tr>`).join('')}</tbody></table></div>`;
  medidores['ddd-transitos'] = idsTransitosDdd();
  return `
    <p class="lead seccion-lead">Los logros de porcentajes, Sopor y tránsitos, con lo que cuenta para el 100 % de historia, de combate y de objetos.</p>
    ${bloque('logros-progreso', 'Los logros', listaLogrosDdd('progreso'))}
    ${bloque('cien-ddd', 'Lo que cuenta para el 100 %', `<p class="group-intro">${esc(NOTA_CIEN)}</p><ul class="lista-cien-ddd">${cien}</ul>`)}
    ${bloque('final-secreto', 'El final secreto', `<div class="info-cards info-cards-2">
      <div class="info-card"><h3>Trofeos del juego que hacen falta</h3><ul class="bullets">${FINAL_SECRETO_DDD.trofeos.map(([d, t]) => `<li><b>${esc(d)}:</b> ${esc(t)}</li>`).join('')}</ul></div>
      <div class="info-card"><h3>Las tres respuestas</h3><ol class="sora-resp">${FINAL_SECRETO_DDD.preguntas.map((r) => `<li>${esc(r)}</li>`).join('')}</ol></div>
    </div><p class="nota-fuente">${esc(FINAL_SECRETO_DDD.nota)}</p>`)}
    ${bloque('transitos-ddd', 'Tránsitos: objetivo de la calificación A', `<p class="group-intro">${esc(NOTA_TRANSITOS)}</p>${tabla}`, { meter: medidor('ddd-transitos', idsTransitosDdd(), 'Rango A') })}
    ${fuentes(['gbTrofeos', 'laps4', 'guiasxamonicas'])}`;
}

// Coleccionismo: comandos, Llaves Espada, oniritas y juguetes.
function dddColeccion() {
  const comandos = COMANDOS_DDD.map((c) => {
    const ids = c.items.map((x) => ID.dddCmd(c.cat, x.n));
    const clave = `ddd-cmd-${slug(c.cat)}`;
    medidores[clave] = ids;
    return bloque(`cmd-${slug(c.cat)}`, esc(c.cat), `<div class="portales-ddd">${c.items.map((x) => marca(ID.dddCmd(c.cat, x.n), `<b>${esc(x.n)}</b><small>${esc(x.como)}</small>`)).join('')}</div>`, { meter: medidor(clave, ids, 'Conseguidos') });
  }).join('');
  const llaves = llavesDdd().map((l) => marca(ID.dddLlave(l.n, l.p), `<b>${esc(l.n)}</b> · ${l.p === 'sora' ? 'Sora' : 'Riku'}<small>${esc(l.como)}</small>`)).join('');
  const simples = (lista, idf) => `<div class="portales-ddd">${lista.map((n) => marca(idf(n), esc(n))).join('')}</div>`;
  medidores['ddd-llaves'] = idsLlavesDdd();
  medidores['ddd-onir'] = idsOniritasDdd();
  medidores['ddd-jug'] = idsJuguetesDdd();
  return `
    <p class="lead seccion-lead">${esc(INTRO_COLECCION_DDD)}</p>
    ${bloque('logros-coleccion', 'Los logros', listaLogrosDdd('coleccion'))}
    ${subnav([['comandos-ddd', 'Comandos'], ['llaves-ddd', 'Llaves Espada'], ['oniritas-ddd', 'Oniritas'], ['juguetes-ddd', 'Juguetes'], ['huecos-ddd', 'Sin lista']])}
    <div id="comandos-ddd"><h2 class="bx-sub">Comandos</h2><p class="group-intro">${esc(NOTA_COMANDOS_DDD)}</p>${comandos}</div>
    ${bloque('llaves-ddd', 'Llaves Espada', `<p class="group-intro">${esc(NOTA_LLAVES_DDD)}</p><div class="portales-ddd">${llaves}</div>`, { meter: medidor('ddd-llaves', idsLlavesDdd(), 'Conseguidas') })}
    ${bloque('oniritas-ddd', 'Oniritas', `<p class="group-intro">${esc(NOTA_ONIRITAS_DDD)}</p>${simples(ONIRITAS_DDD, ID.dddOnirita)}`, { meter: medidor('ddd-onir', idsOniritasDdd(), 'Conseguidas') })}
    ${bloque('juguetes-ddd', 'Juguetes para Lucientes', `${simples(JUGUETES_DDD, ID.dddJuguete)}`, { meter: medidor('ddd-jug', idsJuguetesDdd(), 'Conseguidos') })}
    ${bloque('huecos-ddd', 'Lo que no tiene lista en la guía', `<ul class="bullets">${HUECOS_DDD.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`)}
    ${fuentes(['gbTrofeos', 'gbAnexo', 'wikiEsOnirita'])}`;
}

const SECCIONES_DDD = [
  { id: 'historia', titulo: 'Historia y mundos', desc: 'Los siete mundos con Sora y Riku, sus jefes, los jefes secretos y la Llave Espada de cada mundo.', img: 'assets/img/ddd/logros/ACH_30.jpg', ids: idsSecHistoriaDdd, html: dddHistoria },
  { id: 'portales', titulo: 'Portales y Nexos', desc: 'Los 78 portales especiales por mundo y personaje, los portales secretos y los siete objetivos de los Portales Nexo.', img: 'assets/img/ddd/logros/ACH_61.jpg', ids: idsSecPortalesDdd, html: dddPortales },
  { id: 'lucientes', titulo: 'Lucientes', desc: 'Los 54 Lucientes con su fórmula y recetas, los Nexos y las habilidades de «Habilidad máxima».', img: 'assets/img/ddd/logros/ACH_51.jpg', ids: idsSecLucientesDdd, html: dddLucientes },
  { id: 'minijuegos', titulo: 'Naiperama y minijuegos', desc: 'El Naiperama, los minijuegos de Lucientes y la moto de luz, con la puntuación de cada logro.', img: 'assets/img/ddd/logros/ACH_39.jpg', ids: idsSecMinijuegosDdd, html: dddMinijuegos },
  { id: 'realidad', titulo: 'Realidad Alterna', desc: 'Las siete Realidades Alternas, sus comandos y los comandos acrobáticos.', img: 'assets/img/ddd/logros/ACH_54.jpg', ids: idsSecRealidadDdd, html: dddRealidad },
  { id: 'progreso', titulo: 'Progreso', desc: 'Qué cuenta para el 100 %, el final secreto, el Sopor y los objetivos de cada tránsito.', img: 'assets/img/ddd/logros/ACH_16.jpg', ids: idsSecProgresoDdd, html: dddProgreso },
  { id: 'coleccion', titulo: 'Coleccionismo', desc: 'Los 124 comandos, las Llaves Espada, las 36 oniritas y los juguetes, con cómo se consigue cada uno.', img: 'assets/img/ddd/logros/ACH_26.jpg', ids: idsSecColeccionDdd, html: dddColeccion },
];
const seccionDdd = (id) => SECCIONES_DDD.find((s) => s.id === id);

function vistaDDD() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: DDD.nombre }]);
  return `
  <section class="page juego-ddd" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${DDD.logo}" alt="Kingdom Hearts Dream Drop Distance" width="708" height="421">
      <div class="game-hero-stats">
        ${medidor('ddd-logros', logrosDdd(), ETQ_LOGROS)}
        ${medidor('ddd-100', juegoDDD(), ETQ_JUEGO)}
      </div>
    </header>
    ${selectorModo('ddd-modo-logros', logrosDdd(), 'ddd-modo-100', juegoDDD(), { subLogros: 'Los 54 logros oficiales', subJuego: 'Lo que piden los logros' })}
    ${modo() === 'logros' ? dddLogros() : `
    <p class="mode-note">Cada logro de Steam, con lo que hay que hacer para conseguirlo: mundos y jefes, portales, Lucientes, minijuegos, Realidad Alterna, progreso y coleccionables. Si un logro pide el 100 % de algo, la lista está completa y se marca elemento a elemento.</p>
    <div class="secciones-khfm">${SECCIONES_DDD.map((s) => `
      <a class="seccion-khfm" href="#/ddd/${s.id}">
        <span class="seccion-art"><img src="${esc(s.img)}" alt="" loading="lazy"></span>
        <span class="seccion-cuerpo"><span class="seccion-titulo">${esc(s.titulo)}</span><span class="seccion-desc">${esc(s.desc)}</span>
          ${medidor(`ddd-sec-${s.id}`, s.ids(), 'Progreso')}</span>
      </a>`).join('')}</div>`}
  </section>`;
}

function vistaSeccionDDD(s) {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: DDD.nombre, href: '#/ddd' }, { t: s.titulo }]);
  const i = SECCIONES_DDD.indexOf(s);
  const ant = SECCIONES_DDD[i - 1];
  const sig = SECCIONES_DDD[i + 1];
  return `
  <section class="page juego-ddd seccion-pagina">
    <header class="seccion-head">
      <img class="seccion-head-art" src="${esc(s.img)}" alt="" width="72" height="72">
      <div class="seccion-head-txt">
        <p class="seccion-juego"><a href="#/ddd">${esc(DDD.nombre)}</a> · Informes · 100 %</p>
        <h1 class="page-title">${esc(s.titulo)}</h1>
      </div>
      ${medidor(`ddd-pag-${s.id}`, s.ids(), 'Progreso de la sección')}
    </header>
    ${s.html()}
    <nav class="seccion-nav" aria-label="Otras secciones">
      ${ant ? `<a href="#/ddd/${ant.id}"><small>Anterior</small><b>${esc(ant.titulo)}</b></a>` : '<span></span>'}
      ${sig ? `<a class="seccion-sig" href="#/ddd/${sig.id}"><small>Siguiente</small><b>${esc(sig.titulo)}</b></a>` : '<a class="seccion-sig" href="#/ddd"><small>Volver</small><b>Portada del juego</b></a>'}
    </nav>
  </section>`;
}

