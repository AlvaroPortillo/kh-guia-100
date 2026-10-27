import { store } from './store.js';
import { JUEGOS } from './data/juegos.js';
import {
  BBS, PERSONAJES, GRUPOS_LOGROS, RUTA, GOLPES_FINALES, ESTILOS, CUARTELILLO, COSO, COSO_INFO,
  CONSEJOS, FUENTES, NIVELES_COSO, NIVELES_COSO_INTRO, FUENTES_NIVELES_COSO,
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
  FUENTES_COLISEO, IMG_COLISEO, COPAS, COMBATES_COLISEO, NOTAS_COLISEO, JEFES_SECRETOS, FUENTES_COLISEO_LISTA, FUENTES_JEFES_LISTA,
} from './data/khfm-coliseo.js';
import {
  FUENTES_SORA, ELECCION, ELECCION_CONSEJO, PREGUNTAS, RITMOS, NOTA_RITMOS, MAGIAS, NOTA_MAGIAS, INVOCACIONES, NOTA_INVOC, NIVEL_100, PARTIDAS,
} from './data/khfm-sora.js';
import { FUENTES_JEFES_HISTORIA, JEFES_HISTORIA } from './data/khfm-jefes.js';
import {
  FUENTES_SINTESIS, DESC_COMANDOS, CRISTALES_ORDEN, TABLA_TIPOS, NOTAS_TABLA, LETRA_TIPO, HABILIDADES_BBS, CRISTALES_EXTRA, LIBROS_RECETAS,
} from './data/bbs-sintesis.js';
import { FUENTES_KH3, KH3, GRUPOS_LOGROS_KH3, RUTA_KH3, CONSEJOS_KH3, FUENTES_CONSEJOS_KH3, NOTA_RANGO_A } from './data/kh3.js';
import {
  IMG_ARTEMA, REQUISITO_ARTEMA, RECETA_ARTEMA, NOTA_RECETA, ORICALCOS, FLANES, CRISTALES_ARTEMA, MEJORAS_ARTEMA, NOTA_MEJORAS, FICHA_ARTEMA, FUENTES_ARTEMA,
} from './data/kh3-artema.js';
import { IMG_PF, MUNDOS_PF, PREMIOS_PF, INTRO_PF, FUENTES_PF } from './data/kh3-portafortuna.js';
import { IMG_TES, TIPOS_TESORO, MUNDOS_TESOROS, INTRO_TES, FUENTES_TESOROS } from './data/kh3-tesoros.js';
import { MATERIALES_KH3, FAMILIAS_KH3, SINTESIS_KH3 } from './data/kh3-sintesis.js';
import { IMG_SINT, FOTOS_KH3, INTRO_ORF, FUENTES_ORF } from './data/kh3-orfebreria.js';
import {
  FLANES_INFO, INTRO_FLANES, MINIJUEGOS_KH3, CLASICO_KH3, INTRO_CLASICO, RECORDS_KH3, INTRO_RECORDS, FUENTES_MINI,
} from './data/kh3-minijuegos.js';
import { PLATOS_KH3, INGREDIENTES_KH3 } from './data/kh3-cocina.js';
import { INTRO_COCINA, JUEGOS_COCINA, ESTRELLAS_BISTRO, CONSEJOS_COCINA, FUENTES_COCINA } from './data/kh3-bistro.js';
import {
  PASOS_REMIND, DATOS_ORG, MERITOS_PRIN, CODIGOS_EXP, JEFES_MERITO, RANGOS_MERITO, NOTA_RANGO_B, CONSEJOS_EXP, FUENTES_REMIND,
} from './data/kh3-remind.js';
import { ADVERSARIOS_KH3 } from './data/kh3-adversarios.js';
import { IMG_JEFES_KH3, JEFES_KH3, DATOS_ESTRATEGIA, YOZORA, FUENTES_JEFES_KH3 } from './data/kh3-jefes.js';
import { RUTAS_GUMI, INTRO_CONST, INTRO_TES_GUMI, SCHWARZGEIST, FUENTES_GUMI as FUENTES_GUMI_KH3 } from './data/kh3-gumi.js';
import {
  FUENTES_KH2FM, KH2FM, GRUPOS_LOGROS_KH2FM, RUTA_KH2FM, CONSEJOS_KH2FM, FUENTES_CONSEJOS_KH2FM, MUNDOS_KH2FM, FUENTES_MUNDOS_KH2FM,
} from './data/kh2fm.js';
import {
  FUENTES_DIARIO_KH2FM, INTRO_DIARIO_KH2FM, INFORMES_ANSEM_KH2FM, SINCORAZON_KH2FM, NOTA_SINCORAZON, INCORPOREOS_KH2FM, LIMITES_KH2FM, APARTADOS_SIN_LISTA,
} from './data/kh2fm-diario.js';
import { TESOROS_KH2FM, PUZLES_KH2FM, MAPAS_KH2FM } from './data/kh2fm-tesoros.js';
import {
  FUENTES_TESOROS_KH2FM, INTRO_TESOROS_KH2FM, NOTA_TESOROS_KH2FM, INTRO_PUZLES_KH2FM, NOTA_PUZLES_KH2FM, INTRO_MAPAS_KH2FM,
} from './data/kh2fm-tesoros-info.js';
import { GRUPOS_LIBRE_KH2FM, SINTESIS_KH2FM, MATERIALES_KH2FM } from './data/kh2fm-orfebreria.js';
import {
  IMG_ORF_KH2, FUENTES_ORF_KH2FM, INTRO_ORF_KH2FM, NIVELES_MOGURI, NOTA_ESPECIALES, COLECCION_KH2FM, NOTA_COLECCION, ORICALCOS_KH2FM,
  ARMA_ARTEMA_KH2FM, FUENTES_ARTEMA_KH2FM,
} from './data/kh2fm-artema.js';
import {
  FUENTES_SORA_KH2FM, BARRA_FUSION, FUSIONES_KH2FM, NOTA_FUSIONES, INVOCACIONES_KH2FM, NIVEL_INVOC, MAGIAS_KH2FM, NOTA_MAGIAS_KH2FM,
} from './data/kh2fm-sora.js';
import { ARMAS_KH2FM } from './data/kh2fm-armas.js';
import { FUENTES_MINI_KH2FM, INTRO_MINI_KH2FM, MINIJUEGOS_KH2FM, NOTA_SETAS } from './data/kh2fm-minijuegos.js';
import {
  FUENTES_JEFES_KH2FM, IMG_JEFES_KH2, INTRO_JEFES_KH2FM, JEFES_HISTORIA_KH2FM, SEPHIROTH, CONSCIENCIA, METODO_FENRIR, REPLICAS_INTRO, ORGANIZACION_KH2FM, SETAS_KH2FM,
} from './data/kh2fm-jefes.js';
import { FUENTES_COLISEO_KH2FM, IMG_COLISEO_KH2, INTRO_COLISEO_KH2FM, COPAS_KH2FM } from './data/kh2fm-coliseo.js';
import { FUENTES_DDD, DDD, GRUPOS_LOGROS_DDD, RUTA_DDD, CONSEJOS_DDD } from './data/ddd.js';
import { FUENTES_MUNDOS_DDD, INTRO_MUNDOS_DDD, MUNDOS_DDD, SECRETOS_DDD } from './data/ddd-mundos.js';
import {
  TRANSITOS_DDD, NOTA_TRANSITOS, CIEN_DDD, NOTA_CIEN, FINAL_SECRETO_DDD, NAIPERAMA_DDD, MINIJUEGOS_DDD, REALIDAD_DDD, NOTA_REALIDAD,
  DESCIFRADO_DDD, HISTORIETA_DDD, NEXO_OBJETIVOS_DDD, NOTA_NEXO_OBJ, HABILIDADES_DDD, INTRO_PORTALES_DDD, COMO_PORTALES_DDD, NOTA_PORTALES_DDD,
  INTRO_LUCIENTES_DDD, NOTA_LUCIENTES_DDD, INTRO_COLECCION_DDD, NOTA_COMANDOS_DDD, NOTA_LLAVES_DDD, NOTA_ONIRITAS_DDD, HUECOS_DDD,
} from './data/ddd-progreso.js';
import { COMANDOS_DDD, ONIRITAS_DDD, JUGUETES_DDD, LLAVES_DDD, LUCIENTES_DDD, NEXOS_DDD } from './data/ddd-datos.js';
import { PORTALES_DDD, SECRETOS_PORTALES_DDD } from './data/ddd-portales.js';
import { FUENTES_BBS02, BBS02, GRUPOS_LOGROS_BBS02, RUTA_BBS02, CONSEJOS_BBS02, PERDIBLES_BBS02, INTRO_PERDIBLES_BBS02, FASES_BBS02 } from './data/bbs02.js';
import { FUENTES_HISTORIA_BBS02, INTRO_HISTORIA_BBS02, ZONAS_BBS02, JEFE_SECRETO_BBS02 } from './data/bbs02-historia.js';
import { FUENTES_OBJETIVOS_BBS02, INTRO_OBJETIVOS_BBS02, CUANDO_BBS02, RANURAS_BBS02, ZONAS_OBJ_BBS02, OBJETIVOS_BBS02, RECUERDOS_BBS02, INTRO_RECUERDOS_BBS02, INTRO_ARMARIO_BBS02, PRENDAS_ES } from './data/bbs02-objetivos.js';
import { FUENTES_COFRES_BBS02, INTRO_COFRES_BBS02, TIPOS_COFRE_BBS02, ZONAS_COFRES_BBS02 } from './data/bbs02-cofres.js';
import { FUENTES_COMBATE_BBS02, INTRO_COMBATE_BBS02, BARRA_BBS02, COMANDOS_BBS02, NOTA_MAGIA_BBS02, TIRO_BBS02 } from './data/bbs02-combate.js';
import { iniciarEstela } from './cursor.js';

const $main = document.getElementById('main');
const $top = document.getElementById('topbar');

// ---------- utilidades ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const slugCmd = (n) => slug(n.replace(/\+/g, ' mas '));
const pctFmt = (n) => (n == null ? '' : `${n.toLocaleString('es-ES', { maximumFractionDigits: 1 })} % de jugadores en Steam`);
const logroPorId = Object.fromEntries(BBS.logros.map((l) => [l.id, l]));
const logroKhfm = Object.fromEntries(KHFM.logros.map((l) => [l.id, l]));
const logroKh2fm = Object.fromEntries(KH2FM.logros.map((l) => [l.id, l]));
const logroKh3 = Object.fromEntries(KH3.logros.map((l) => [l.id, l]));
const logroDdd = Object.fromEntries(DDD.logros.map((l) => [l.id, l]));
const logroBbs02 = Object.fromEntries(BBS02.logros.map((l) => [l.id, l]));
const TODAS_FUENTES = { ...FUENTES_BBS02, ...FUENTES_DDD, ...FUENTES, ...FUENTES_KHFM, ...FUENTES_SINTESIS, ...FUENTES_DIARIO, ...FUENTES_ARMAS, ...FUENTES_GUMI, ...FUENTES_COLISEO, ...FUENTES_SORA, ...FUENTES_JEFES_HISTORIA, ...FUENTES_KH3, ...FUENTES_KH2FM, ...FUENTES_DIARIO_KH2FM, ...FUENTES_TESOROS_KH2FM, ...FUENTES_ORF_KH2FM, ...FUENTES_SORA_KH2FM, ...FUENTES_MINI_KH2FM, ...FUENTES_COLISEO_KH2FM, ...FUENTES_JEFES_KH2FM };
const IMG_JEFES = 'assets/img/khfm/coliseo/jefe-';
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
  cosoNivel: (pj, m) => `bbs.cosonivel.${pj}.${m}`,
  // slug() quita los «+»: Piro, Piro+ y Piro++ compartían marca. La versión base conserva su id de siempre.
  tableroCmd: (pj, n) => `bbs.tablero.cmd.${pj}.${slugCmd(n)}`,
  cmd: (pj, n) => `bbs.cmd.${pj}.${slugCmd(n)}`,
  khfmLogro: (id) => `khfm.logro.${id}`,
  khfmAnsem: (n) => `khfm.ansem.${n}`,
  khfmDalmata: (n) => `khfm.dalmata.${n}`,
  khfmTrio: (tipo, i) => `khfm.trio.${tipo}.${i}`,
  khfmRecord: (id) => `khfm.record.${id}`,
  khfmArma: (id) => `khfm.arma.${id}`,
  khfmSintesis: (id) => `khfm.sintesis.${id}`,
  khfmMision: (mundo, n) => `khfm.gumi.mision.${mundo}.${n}`,
  khfmPlano: (id) => `khfm.gumi.plano.${id}`,
  khfmCopa: (copa, modo) => `khfm.coliseo.${copa}.${modo}`,
  khfmJefe: (id) => `khfm.jefe.${id}`,
  khfmMagia: (id, n) => `khfm.magia.${id}.${n}`,
  khfmInvoc: (id) => `khfm.invoc.${id}`,
  kh3Logro: (id) => `kh3.logro.${id}`,
  kh3Oricalco: (id) => `kh3.oricalco.${id}`,
  kh3Artema: (paso) => `kh3.artema.${paso}`,
  kh3Pf: (mundo, n) => `kh3.portafortuna.${mundo}.${n}`,
  kh3Tesoro: (mundo, n) => `kh3.tesoro.${mundo}.${n}`,
  kh3Sintesis: (id) => (id === 'ultima-weapon' ? 'kh3.logro.ACH_44' : `kh3.sintesis.${id}`),
  kh3Foto: (n) => `kh3.foto.${n}`,
  kh3Material: (id) => `kh3.material.${id}`,
  kh3Flan: (id, alta) => `kh3.flan.${id}${alta ? '.alta' : ''}`,
  kh3Mini: (id) => `kh3.mini.${id}`,
  kh3Clasico: (n) => `kh3.clasico.${n}`,
  kh3Record: (g, n) => `kh3.record.${g}.${n}`,
  kh3Const: (id) => `kh3.constelacion.${id}`,
  kh3Plato: (id) => `kh3.plato.${id}`,
  kh3Datos: (id) => `kh3.datos.${id}`,
  kh3Adversario: (id) => `kh3.adversario.${id}`,
  kh3Jefe: (id) => `kh3.jefe.${id}`,
  kh3Merito: (id) => `kh3.merito.${id}`,
  kh3JefeExp: (id) => `kh3.jefe-exp.${id}`,
  kh3Ingrediente: (id) => `kh3.ingrediente.${id}`,
  kh3GumiTes: (ruta, n) => `kh3.gumi.tesoro.${ruta}.${n}`,
  kh2fmLogro: (id) => `kh2fm.logro.${id}`,
  kh2fmAnsem: (n) => `kh2fm.ansem.${n}`,
  kh2fmSincorazon: (n) => `kh2fm.sincorazon.${slug(n)}`,
  kh2fmIncorporeo: (n) => `kh2fm.incorporeo.${slug(n)}`,
  kh2fmLimite: (n) => `kh2fm.limite.${slug(n)}`,
  kh2fmTesoro: (mundo, n) => `kh2fm.tesoro.${mundo}.${n}`,
  kh2fmPieza: (puzle, n) => `kh2fm.puzle.${puzle}.${n}`,
  kh2fmMapa: (en) => `kh2fm.mapa.${slug(en)}`,
  kh2fmSintesis: (id) => `kh2fm.sintesis.${id}`,
  kh2fmMaterial: (id) => `kh2fm.material.${id}`,
  kh2fmOricalco: (id) => `kh2fm.oricalco.${id}`,
  kh2fmFusion: (forma, n) => `kh2fm.fusion.${forma}.${n}`,
  kh2fmInvoc: (id) => `kh2fm.invoc.${id}`,
  kh2fmInvocNivel: (n) => `kh2fm.invoc.nivel.${n}`,
  kh2fmMagia: (id, n) => `kh2fm.magia.${id}.${n}`,
  kh2fmArma: (id) => `kh2fm.arma.${id}`,
  kh2fmMinijuego: (id) => `kh2fm.minijuego.${id}`,
  kh2fmMision: (id, i) => `kh2fm.mision.${id}.${i}`,
  kh2fmSeta: (n) => `kh2fm.seta.${n}`,
  kh2fmEsencia: (id) => `kh2fm.esencia.${id}`,
  kh2fmReplica: (id) => `kh2fm.replica.${id}`,
  kh2fmJefe: (id) => `kh2fm.jefe.${id}`,
  dddLogro: (id) => `ddd.logro.${id}`,
  dddJefe: (id) => `ddd.jefe.${id}`,
  dddSecreto: (id, k) => `ddd.secreto.${id}.${k}`,
  dddPortal: (mundo, pj, n) => `ddd.portal.${mundo}.${pj.toLowerCase()}.${n}`,
  dddNexoObj: (i) => `ddd.nexoobj.${i}`,
  dddFormula: (id) => `ddd.formula.${id}`,
  dddLuciente: (id) => `ddd.luciente.${id}`,
  dddNexo: (grupo, n) => `ddd.nexo.${grupo}.${slugCmd(n)}`,
  dddHabilidad: (n) => `ddd.habilidad.${slugCmd(n)}`,
  dddMinijuego: (id) => `ddd.minijuego.${id}`,
  dddRealidad: (id) => `ddd.realidad.${id}`,
  dddDescifrado: (n) => `ddd.descifrado.${slug(n)}`,
  dddHistorieta: (n) => `ddd.historieta.${slug(n)}`,
  dddAcrobata: (n) => `ddd.acrobata.${slugCmd(n)}`,
  dddTransito: (mundo, pj) => `ddd.transito.${mundo}.${pj}`,
  dddCmd: (cat, n) => `ddd.cmd.${slug(cat)}.${slugCmd(n)}`,
  dddLlave: (n, pj) => `ddd.llave.${pj}.${slugCmd(n)}`,
  dddOnirita: (n) => `ddd.onirita.${slug(n)}`,
  dddJuguete: (n) => `ddd.juguete.${slugCmd(n)}`,
  dddCien: (id) => `ddd.cien.${id}`,
  bbs02Logro: (id) => `bbs02.logro.${id}`,
  bbs02Jefe: (id) => `bbs02.jefe.${id}`,
  bbs02Objetivo: (n) => `bbs02.objetivo.${n}`,
  bbs02Cofre: (zona, n) => `bbs02.cofre.${zona}.${n}`,
  bbs02Magia: (id) => `bbs02.magia.${id}`,
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
  ...idsComandos(pj),
  ...idsNivelesCoso(pj),
];
// Misiones del Coso de un personaje: su nivel del Coso es 1 + las que lleve.
const idsNivelesCoso = (pj) => NIVELES_COSO.flatMap((g) => g.misiones.map((m) => ID.cosoNivel(pj, m.id)));
// Comandos marcables; los que solo salen de un tablero comparten la marca de la sección Tableros.
const EXCL_TABLERO = {};
const idComando = (pj, n) => ((EXCL_TABLERO[pj] ??= new Set(exclusivosDeTablero(pj).map((e) => e.n))).has(n) ? ID.tableroCmd(pj, n) : ID.cmd(pj, n));
const idsComandos = (pj, cat) => (cat ? LISTAS_COMANDOS[pj][cat] : Object.values(LISTAS_COMANDOS[pj]).flat()).map((n) => idComando(pj, n));
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
const MODOS_COPA = [['normal', 'Normal'], ['solo', 'En solitario'], ['contrarreloj', 'Contrarreloj']];
const idsColiseo = () => [...COPAS.flatMap((c) => MODOS_COPA.map(([m]) => ID.khfmCopa(c.id, m))), ...COMBATES_COLISEO.map((c) => ID.khfmJefe(c.id))];
const idsJefesSecretos = () => JEFES_SECRETOS.map((j) => ID.khfmJefe(j.id));
const idsJefesHistoria = () => JEFES_HISTORIA.map((j) => ID.khfmJefe(j.id));
const idsMagias = () => MAGIAS.flatMap((m) => m.niveles.map((_, i) => ID.khfmMagia(m.id, i + 1)));
const idsInvoc = () => INVOCACIONES.map((x) => ID.khfmInvoc(x.id));
const juegoKHFM = () => [...new Set([
  ...MUNDOS_KHFM.map((m) => ID.khfmLogro(m.logro)), ...idsAnsem(), ...idsDalmatas(), ...idsTrio(), ...idsRecords(),
  ...idsArmas(), ...idsSintesis(), ...idsMisiones(), ...idsPlanos(), ...idsColiseo(), ...idsJefesSecretos(), ...idsJefesHistoria(), ...idsMagias(), ...idsInvoc(),
])];
// KH III: por ahora el 100 % cuenta la preparación del Arma Artema (se ampliará con cada entrega).
const logrosKH3 = () => KH3.logros.map((l) => ID.kh3Logro(l.id));
const PASOS_ARTEMA = [
  { id: 'materiales', t: 'Registrar 58 materiales distintos (abre la receta)' },
  ...CRISTALES_ARTEMA.map((c) => ({ id: c.id, t: `Tener ${c.falta} ${c.nombre.replace('Cristal', 'Cristales')}` })),
  { id: 'nivel10', t: 'Mejorarla hasta el nivel 10' },
];
const idsArtema = () => [...ORICALCOS.map((o) => ID.kh3Oricalco(o.id)), ...PASOS_ARTEMA.map((p) => ID.kh3Artema(p.id)), ID.kh3Logro('ACH_44')];
const idsPf = (m) => (m ? [m] : MUNDOS_PF).flatMap((w) => w.pf.map((_, i) => ID.kh3Pf(w.id, i + 1)));
// Los dos cofres con Orichalcum+ usan el id de la sección Arma Artema: el Set evita contarlos dos veces.
const idTesoroKh3 = (w, x) => x.id ?? ID.kh3Tesoro(w.id, x.n);
const idsTesKh3 = (m) => (m ? [m] : MUNDOS_TESOROS).flatMap((w) => w.t.map((x) => idTesoroKh3(w, x)));
const idsMatKh3 = () => MATERIALES_KH3.map((m) => ID.kh3Material(m.id));
const idsOrf = () => [...SINTESIS_KH3.map((o) => ID.kh3Sintesis(o.id)), ...FOTOS_KH3.map((f) => ID.kh3Foto(f.n)), ...idsMatKh3()];
const idsRecordsKh3 = () => RECORDS_KH3.flatMap((r) => r.items.map((_, i) => ID.kh3Record(r.id, i + 1)));
const idsMiniKh3 = () => [
  ...FLANES.flatMap((f) => [ID.kh3Flan(f.id), ID.kh3Flan(f.id, true)]), ...MINIJUEGOS_KH3.map((m) => ID.kh3Mini(m.id)),
  ...CLASICO_KH3.map((g) => ID.kh3Clasico(g.n)), ...idsRecordsKh3(),
];
const idsConstKh3 = () => RUTAS_GUMI.flatMap((r) => r.constelaciones.map((c) => ID.kh3Const(c.id)));
const idsGumiTesKh3 = () => RUTAS_GUMI.flatMap((r) => r.tesoros.map((_, i) => ID.kh3GumiTes(r.id, i + 1)));
const idsGumiKh3 = () => [...idsConstKh3(), ...idsGumiTesKh3(), ID.kh3Logro('ACH_29')];
const idsPlatosClasicos = () => PLATOS_KH3.filter((p) => p.menu === 'clasico').map((p) => ID.kh3Plato(p.id));
const idsCocinaKh3 = () => [...PLATOS_KH3.map((p) => ID.kh3Plato(p.id)), ...INGREDIENTES_KH3.map((i) => ID.kh3Ingrediente(i.id))];
const idsRemindKh3 = () => [...DATOS_ORG.map((d) => ID.kh3Datos(d.id)), ...MERITOS_PRIN.map((m) => ID.kh3Merito(m.id))];
const juegoKH3 = () => [...new Set([...idsPf(), ...idsTesKh3(), ...idsOrf(), ...idsMiniKh3(), ...idsGumiKh3(), ...idsCocinaKh3(), ...idsRemindKh3(), ...ADVERSARIOS_KH3.map((a) => ID.kh3Adversario(a.id)), ...idsJefesKh3(), ...idsArtema()])];
const idsJefesKh3 = () => JEFES_KH3.flatMap((g) => g.jefes.map((j) => ID.kh3Jefe(j.id)));
// KH II FM: el 100 % crece con cada entrega. Los mundos, Personajes y Relaciones usan las marcas de sus logros.
const logrosKH2FM = () => KH2FM.logros.map((l) => ID.kh2fmLogro(l.id));
const idsMundosKh2fm = () => MUNDOS_KH2FM.flatMap((m) => m.logros.map(ID.kh2fmLogro));
const idsAnsemKh2fm = () => INFORMES_ANSEM_KH2FM.map((x) => ID.kh2fmAnsem(x.n));
const idsSincorazonKh2fm = (g) => (g ? [g] : SINCORAZON_KH2FM).flatMap((x) => x.items.map(([n]) => ID.kh2fmSincorazon(n)));
const idsIncorporeosKh2fm = () => INCORPOREOS_KH2FM.map(ID.kh2fmIncorporeo);
const idsLimitesKh2fm = (g) => (g ? [g] : LIMITES_KH2FM).flatMap((x) => x.items.map((l) => ID.kh2fmLimite(l.n)));
const idsDiarioKh2fm = () => [...idsAnsemKh2fm(), ...idsSincorazonKh2fm(), ...idsIncorporeosKh2fm(), ...idsLimitesKh2fm(), ...APARTADOS_SIN_LISTA.map((a) => ID.kh2fmLogro(a.logro))];
// Los mapas que salen de un cofre usan la marca de ese cofre; cada puzle tiene además su marca de «resuelto».
const idsTesorosKh2fm = (w) => (w ? [w] : TESOROS_KH2FM).flatMap((x) => x.cofres.map((c) => ID.kh2fmTesoro(x.id, c.n)));
const idPuzleResuelto = (p) => ID.kh2fmPieza(p.id, 'resuelto');
const idsPuzlesKh2fm = (p) => (p ? [p] : PUZLES_KH2FM).flatMap((x) => [...x.piezas.map((c) => ID.kh2fmPieza(x.id, c.n)), idPuzleResuelto(x)]);
const idMapaKh2fm = (m) => (m.cofre ? ID.kh2fmTesoro(...m.cofre.split('.')) : ID.kh2fmMapa(m.en));
const idsMapasKh2fm = () => MAPAS_KH2FM.map(idMapaKh2fm);
const idsSecTesorosKh2fm = () => [...new Set([...idsTesorosKh2fm(), ...idsPuzlesKh2fm(), ...idsMapasKh2fm()])];
const idsSintesisKh2fm = () => SINTESIS_KH2FM.flatMap((o) => [ID.kh2fmSintesis(o.id), ...(o.mejora ? [ID.kh2fmSintesis(o.mejora.id)] : [])]);
const matKh2PorNombre = Object.fromEntries(MATERIALES_KH2FM.map((m) => [m.nombre, m]));
const idsOrfKh2fm = () => [...new Set([...idsSintesisKh2fm(), ...MATERIALES_KH2FM.map((m) => ID.kh2fmMaterial(m.id)), ...idsOricalcosKh2()])];
const idsFusionKh2 = (f) => [1, 2, 3, 4, 5, 6, 7].map((n) => ID.kh2fmFusion(f.id, n));
const idsInvocKh2 = () => [...INVOCACIONES_KH2FM.map((x) => ID.kh2fmInvoc(x.id)), ...[2, 3, 4, 5, 6, 7].map(ID.kh2fmInvocNivel)];
const idsMagiaKh2 = () => MAGIAS_KH2FM.flatMap((m) => [1, 2, 3].map((n) => ID.kh2fmMagia(m.id, n)));
// Sora: niveles de forma, invocaciones, magia, antiforma (logro) y nivel 99 (logro).
const idsSoraKh2fm = () => [...FUSIONES_KH2FM.flatMap(idsFusionKh2), ...idsInvocKh2(), ...idsMagiaKh2(), ID.kh2fmLogro('ACH_148'), ID.kh2fmLogro('ACH_106')];
// Armas: las que se fabrican usan la marca de la Orfebrería y las que salen de un cofre, la de ese cofre de Tesoros.
const SINT_POR_ID = new Set(SINTESIS_KH2FM.flatMap((o) => [o.id, ...(o.mejora ? [o.mejora.id] : [])]));
function idArmaKh2(a) {
  if (SINT_POR_ID.has(a.id)) return ID.kh2fmSintesis(a.id);
  for (const w of TESOROS_KH2FM) {
    const c = w.cofres.find((x) => x.obj && x.obj.toLowerCase() === a.nombre.toLowerCase());
    if (c) return ID.kh2fmTesoro(w.id, c.n);
  }
  return ID.kh2fmArma(a.id);
}
const idsArmasKh2 = (g) => (g ? [g] : ARMAS_KH2FM).flatMap((x) => x.armas.map(idArmaKh2));
// Minijuegos y misiones: las setas, Esencias y réplicas usan ids propios para compartirlos con la sección Jefes.
const idRetoKh2 = (x, r, i) => (r.seta ? ID.kh2fmSeta(r.seta) : r.esencia ? ID.kh2fmEsencia(r.esencia) : r.replica ? ID.kh2fmReplica(r.replica) : ID.kh2fmMision(x.id, i + 1));
const itemsMiniKh2 = (w) => (w ? [w] : MINIJUEGOS_KH2FM).flatMap((g) => g.items);
const idsJuegosKh2 = (w) => itemsMiniKh2(w).filter((x) => x.juego).map((x) => ID.kh2fmMinijuego(x.id));
const idsMisionesKh2 = (w) => itemsMiniKh2(w).flatMap((x) => x.retos.map((r, i) => idRetoKh2(x, r, i)));
const idsMiniKh2 = (w) => [...new Set([...idsJuegosKh2(w), ...idsMisionesKh2(w)])];
// Copa: su logro y las marcas de su entrada del diario (las mismas que en Minijuegos y misiones).
const miniDeCopa = (c) => itemsMiniKh2().find((x) => x.id === c.mini);
const idsCopaKh2 = (c) => [ID.kh2fmLogro(c.logro), ...idsMiniKh2({ items: [miniDeCopa(c)] })];
const idsColiseoKh2 = () => COPAS_KH2FM.flatMap(idsCopaKh2);
// Jefes: los de la historia tienen marca propia; los secretos reutilizan logros, Esencias, réplicas y setas.
const idsHistoriaKh2 = () => JEFES_HISTORIA_KH2FM.map((j) => ID.kh2fmJefe(j.id));
const idsOrgKh2 = () => ORGANIZACION_KH2FM.flatMap((o) => [...(o.esencia ? [ID.kh2fmEsencia(o.slug)] : []), ID.kh2fmReplica(o.slug)]);
const idsSecretosKh2 = () => [...['ACH_108', 'ACH_109', 'ACH_110', 'ACH_111'].map(ID.kh2fmLogro), ...idsOrgKh2(), ...SETAS_KH2FM.map((s) => ID.kh2fmSeta(s.n))];
const idsJefesKh2 = () => [...idsHistoriaKh2(), ...idsSecretosKh2()];
const juegoKH2FM = () => [...new Set([...idsMundosKh2fm(), ...idsDiarioKh2fm(), ...idsSecTesorosKh2fm(), ...idsOrfKh2fm(), ...idsSoraKh2fm(), ...idsArmasKh2(), ...idsMiniKh2(), ...idsColiseoKh2(), ...idsJefesKh2()])];
// KH DDD: el 100 % es lo que piden los logros. Los mundos usan la marca de su logro.
const logrosDdd = () => DDD.logros.map((l) => ID.dddLogro(l.id));
const PJ_DDD = ['sora', 'riku'];
const MUNDOS_PORTALES_DDD = [...new Set(PORTALES_DDD.map((p) => p.mundo))];
const GRUPOS_NEXO_DDD = [['ataquesSora', 'Ataques Nexo de Sora'], ['dualesSora', 'Nexos duales de Sora'], ['fusionesRiku', 'Fusiones Nexo de Riku'], ['dualesRiku', 'Nexos duales de Riku']];
const idsJefesDdd = () => MUNDOS_DDD.flatMap((m) => m.jefes.map((j) => ID.dddJefe(j.id)));
const idsSecretosDdd = () => SECRETOS_DDD.flatMap((s) => s.marcas.map(([k]) => ID.dddSecreto(s.id, k)));
// Julius ya tiene su marca en Jefes secretos: el 100 % la reutiliza.
const idCienDdd = (c) => (c.id.startsWith('julius-') ? ID.dddSecreto('julius', c.id.slice(7)) : ID.dddCien(c.id));
const portalesDdd = (m, pj) => PORTALES_DDD.filter((p) => p.mundo === m && p.pj.toLowerCase() === pj);
const secretoPortalDdd = (m, pj) => SECRETOS_PORTALES_DDD.find((s) => s.mundo === m && s.pj.toLowerCase() === pj);
const idsPortalesMundoDdd = (m) => PJ_DDD.flatMap((pj) => [
  ...portalesDdd(m, pj).map((p) => ID.dddPortal(p.mundo, p.pj, p.n)),
  ...(secretoPortalDdd(m, pj) ? [ID.dddPortal(m, pj, 'secreto')] : []),
]);
const idsPortalesDdd = () => MUNDOS_PORTALES_DDD.flatMap(idsPortalesMundoDdd);
const idsNexoObjDdd = () => NEXO_OBJETIVOS_DDD.map((_, i) => ID.dddNexoObj(i + 1));
const idsNexosDdd = () => GRUPOS_NEXO_DDD.flatMap(([k]) => NEXOS_DDD[k].map((x) => ID.dddNexo(k, x.n)));
const idsFormulasDdd = () => LUCIENTES_DDD.map((l) => ID.dddFormula(l.id));
const idsCreadosDdd = () => LUCIENTES_DDD.map((l) => ID.dddLuciente(l.id));
const idsHabilidadesDdd = () => [...HABILIDADES_DDD.apoyo, ...HABILIDADES_DDD.lucientes].map(ID.dddHabilidad);
const idsMinijuegosDdd = () => MINIJUEGOS_DDD.map((m) => ID.dddMinijuego(m.id));
const acrobatasDdd = () => COMANDOS_DDD.find((c) => c.cat === 'Modo Acróbata').items.map((x) => x.n);
const idsRealidadDdd = () => [
  ...REALIDAD_DDD.map((r) => ID.dddRealidad(r.id)), ...DESCIFRADO_DDD.map((x) => ID.dddDescifrado(x.n)),
  ...HISTORIETA_DDD.map((x) => ID.dddHistorieta(x.n)), ...acrobatasDdd().map(ID.dddAcrobata),
];
const idsTransitosDdd = () => TRANSITOS_DDD.flatMap((t) => PJ_DDD.map((pj) => ID.dddTransito(t.id, pj)));
const idsCienDdd = () => CIEN_DDD.filter((c) => c.marca).map(idCienDdd);
const idsComandosDdd = () => COMANDOS_DDD.flatMap((c) => c.items.map((x) => ID.dddCmd(c.cat, x.n)));
// Una entrada por Llave Espada y personaje («Sora/Riku» = dos marcas).
const llavesDdd = () => LLAVES_DDD.flatMap((l) => l.pj.map((p) => ({ n: l.n, p: p.toLowerCase(), como: l.como })));
const idsLlavesDdd = () => llavesDdd().map((l) => ID.dddLlave(l.n, l.p));
const idsOniritasDdd = () => ONIRITAS_DDD.map(ID.dddOnirita);
const idsJuguetesDdd = () => JUGUETES_DDD.map(ID.dddJuguete);
const idsSecHistoriaDdd = () => [...MUNDOS_DDD.map((m) => ID.dddLogro(m.logro)), ...idsJefesDdd(), ...idsSecretosDdd()];
const idsSecPortalesDdd = () => [...idsPortalesDdd(), ...idsNexoObjDdd()];
const idsSecLucientesDdd = () => [...idsFormulasDdd(), ...idsCreadosDdd(), ...idsNexosDdd(), ...idsHabilidadesDdd()];
const idsSecMinijuegosDdd = () => idsMinijuegosDdd();
const idsSecRealidadDdd = () => idsRealidadDdd();
const idsSecProgresoDdd = () => [...new Set([...idsCienDdd(), ...idsTransitosDdd()])];
const idsSecColeccionDdd = () => [...idsComandosDdd(), ...idsLlavesDdd(), ...idsOniritasDdd(), ...idsJuguetesDdd()];
const juegoDDD = () => [...new Set([
  ...idsSecHistoriaDdd(), ...idsSecPortalesDdd(), ...idsSecLucientesDdd(), ...idsSecMinijuegosDdd(),
  ...idsSecRealidadDdd(), ...idsSecProgresoDdd(), ...idsSecColeccionDdd(),
])];
// KH 0.2: el 100 % crece con cada entrega. Las zonas usan la marca de su logro.
const logrosBbs02 = () => BBS02.logros.map((l) => ID.bbs02Logro(l.id));
const idsJefesBbs02 = () => [...ZONAS_BBS02.flatMap((z) => z.jefes.map((j) => ID.bbs02Jefe(j.id))), ID.bbs02Jefe(JEFE_SECRETO_BBS02.id)];
const idsSecHistoriaBbs02 = () => [...ZONAS_BBS02.filter((z) => z.logro).map((z) => ID.bbs02Logro(z.logro)), ...idsJefesBbs02(), ID.bbs02Logro('ACH_08'), ID.bbs02Logro('ACH_11')];
const idsObjetivosBbs02 = () => OBJETIVOS_BBS02.map((o) => ID.bbs02Objetivo(o.n));
const idsSecObjetivosBbs02 = () => [ID.bbs02Logro('ACH_07'), ID.bbs02Logro('ACH_15'), ...idsObjetivosBbs02()];
const idsCofresZonaBbs02 = (z) => z.cofres.map((x) => ID.bbs02Cofre(z.id, x.n));
const idsCofresBbs02 = () => ZONAS_COFRES_BBS02.flatMap(idsCofresZonaBbs02);
const idsSecCofresBbs02 = () => [ID.bbs02Logro('ACH_06'), ...idsCofresBbs02()];
const LOGROS_COMBATE_BBS02 = ['ACH_09', 'ACH_10', 'ACH_12', 'ACH_13', 'ACH_14'];
const idsMagiaBbs02 = () => COMANDOS_BBS02.filter((x) => x.marca).map((x) => ID.bbs02Magia(x.id));
const idsSecCombateBbs02 = () => [...LOGROS_COMBATE_BBS02.map(ID.bbs02Logro), ...idsMagiaBbs02()];
const objetivosDeBbs02 = (c) => OBJETIVOS_BBS02.filter((o) => o.c === c).map((o) => ID.bbs02Objetivo(o.n));
const cofresVisitaBbs02 = (v) => ZONAS_COFRES_BBS02.flatMap((z) => z.cofres.filter((x) => x.v === v).map((x) => ID.bbs02Cofre(z.id, x.n)));
const IDS_FASE_BBS02 = {
  primera: () => [...['ACH_01', 'ACH_02', 'ACH_03', 'ACH_04', 'ACH_05', 'ACH_08', 'ACH_09', 'ACH_10', 'ACH_12', 'ACH_13', 'ACH_14', 'ACH_15'].map(ID.bbs02Logro),
    ...ZONAS_BBS02.flatMap((z) => z.jefes.map((j) => ID.bbs02Jefe(j.id))), ...cofresVisitaBbs02(1), ...objetivosDeBbs02('primera'), ...idsMagiaBbs02()],
  final: () => [...cofresVisitaBbs02(2), ...objetivosDeBbs02('final'), ID.bbs02Jefe(JEFE_SECRETO_BBS02.id), ID.bbs02Logro('ACH_06')],
  plus: () => [...objetivosDeBbs02('plus'), ID.bbs02Logro('ACH_11'), ID.bbs02Logro('ACH_07')],
};
const juegoBBS02 = () => [...new Set([...idsSecHistoriaBbs02(), ...idsSecObjetivosBbs02(), ...idsSecCofresBbs02(), ...idsSecCombateBbs02()])];
const PROGRESO = {
  bbs: { logros: () => BBS.logros.map((l) => ID.logro(l.id)), juego: () => juegoBBS() },
  khfm: { logros: logrosKHFM, juego: juegoKHFM },
  kh3: { logros: () => logrosKH3(), juego: () => juegoKH3() },
  kh2fm: { logros: logrosKH2FM, juego: juegoKH2FM },
  ddd: { logros: logrosDdd, juego: juegoDDD },
  bbs02: { logros: logrosBbs02, juego: juegoBBS02 },
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
  document.querySelectorAll('[data-hito]').forEach((el) => el.classList.toggle('is-on', store.contar(idsPf()) >= Number(el.dataset.hito)));
  document.querySelectorAll('[data-nivel-coso]').forEach((el) => { el.textContent = 1 + store.contar(idsNivelesCoso(el.dataset.nivelCoso)); });
  const nMat = store.contar(idsMatKh3());
  document.querySelectorAll('[data-umbral]').forEach((el) => el.classList.toggle('is-on', nMat >= Number(el.dataset.umbral)));
  const nCoc = store.contar(idsPlatosClasicos());
  document.querySelectorAll('[data-estrella]').forEach((el) => el.classList.toggle('is-on', nCoc >= Number(el.dataset.estrella)));
  document.querySelectorAll('[data-count="coc-clasicos"]').forEach((el) => { el.textContent = `${nCoc}/20`; });
  if (document.querySelector('[data-puntos-exp]')) {
    const pExp = puntosExpKh3();
    document.querySelectorAll('[data-puntos-exp]').forEach((el) => { el.textContent = fmtNum(pExp); });
    document.querySelectorAll('[data-rango-exp]').forEach((el) => el.classList.toggle('is-on', pExp >= Number(el.dataset.rangoExp)));
  }
  document.querySelectorAll('[data-gema]').forEach((el) => el.classList.toggle('is-on', store.hecho(el.dataset.gema)));
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
  kh3: { id: ID.kh3Logro, carpeta: 'assets/img/kh3/logros', consejos: CONSEJOS_KH3 },
  kh2fm: { id: ID.kh2fmLogro, carpeta: 'assets/img/kh2fm/logros', consejos: CONSEJOS_KH2FM },
  ddd: { id: ID.dddLogro, carpeta: 'assets/img/ddd/logros', consejos: CONSEJOS_DDD },
  bbs02: { id: ID.bbs02Logro, carpeta: 'assets/img/bbs02/logros', consejos: CONSEJOS_BBS02 },
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
// Portada con el resto de proyectos (repo alvaroportillo.github.io)
const PORTADA = 'https://alvaroportillo.github.io/';
const ICONO_PROYECTOS = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>';

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
      <a class="tool tool-proyectos" href="${PORTADA}" aria-label="Mis proyectos">${ICONO_PROYECTOS}<span class="t-long">Mis proyectos</span></a>
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
      <div class="title-logos">
        <img class="title-logo" src="assets/img/logos/remix.png" alt="Kingdom Hearts HD 1.5+2.5 ReMIX" width="699" height="491">
        <img class="title-logo" src="assets/img/logos/kh3-remind.webp" alt="Kingdom Hearts III Re Mind" width="720" height="460">
      </div>
      <h1 class="title-word">Guía al 100 %</h1>
      <p class="title-sub">Logros de Steam, coleccionables y comandos de cada juego, en castellano. Marca lo que consigas y lleva tu propio registro.</p>
      <a class="btn-start" href="#/juegos">Empezar</a>
      <a class="title-proyectos" href="${PORTADA}">${ICONO_PROYECTOS}Mis proyectos</a>
    </div>
  </section>`;
}

function vistaJuegos() {
  topbar([{ t: 'Juegos' }]);
  const tile = (j) => {
    const meta = j.etiqueta
      ? `<p class="soon">${esc(j.etiqueta)}</p>`
      : `<div class="meters-2">${medidor(`juego-${j.id}-logros`, PROGRESO[j.id].logros(), ETQ_LOGROS)}
         ${medidor(`juego-${j.id}-100`, PROGRESO[j.id].juego(), ETQ_JUEGO)}</div>`;
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
    <p class="lead">Birth by Sleep, Kingdom Hearts Final Mix, Kingdom Hearts III y Dream Drop Distance ya están en marcha. Kingdom Hearts II Final Mix y Kingdom Hearts 0.2 están en preparación, y Re:Chain of Memories llegará después.</p>
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
// Premio «limitado» (KHWiki — Command Board): sale solo si ese comando no está en tu lista (baraja o reserva); si lo
// tienes, la casilla da el premio normal. Si para ese personaje no hay premio normal, la casilla deja de ser bonus.
const sinPremioNormal = (c) => PJS.filter((p) => c.limitada.some((x) => !x.solo || x.solo.includes(p.id))
  && !c.normal.some((x) => !x.solo || x.solo.includes(p.id))).map((p) => p.nombre);
const premiosCasilla = (c) => {
  const sin = c.limitada.length ? sinPremioNormal(c) : [];
  return `${c.normal.length ? listaTablero(c.normal) : ''}${c.limitada.length ? `${c.normal.length ? '<br>' : ''}<span class="tb-lim">Solo si aún no lo tienes: ${listaTablero(c.limitada)}</span>` : ''}${sin.length ? `<br><span class="tb-sin">Si ya lo tienes, para ${sin.join(' y ')} esta casilla deja de ser bonus: no tiene estrella ni da nada.</span>` : ''}${c.coso.length ? `<br><span class="tb-coso">En el Coso: ${listaTablero(c.coso)}</span>` : ''}`;
};
const ICONO_MAPA = '<path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11Z"/><circle cx="12" cy="10" r="2.2"/>';
// Botón que abre el mapa del tablero en una ventana, con la casilla `num` resaltada (o ninguna).
const verCasilla = (t, num, texto) => `<button type="button" class="tb-ver" data-casilla="${t.id}${num ? `:${num}` : ''}">${svg(ICONO_MAPA)}<span>${texto}</span></button>`;

function tablerosBloque() {
  const exclusivos = PJS.map((p) => `
    <div class="tb-pj pj-${p.id}">
      <h4>${esc(p.nombre)}</h4>
      <ul>${exclusivosDeTablero(p.id).map((e) => `
        <li>${marca(ID.tableroCmd(p.id, e.n), `<b>${esc(e.n)}</b>`)}<span class="tb-donde">${e.donde.map((d) => `<span>${verCasilla(d.t, d.num, `${esc(d.t.nombre)}, casilla ${d.num}`)}${d.tipo === 'limitada' ? ' <small>(solo si aún no lo tienes)</small>' : ''}</span>`).join('')}</span></li>`).join('')}</ul>
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
        <p class="tb-pista">Toca un número para ver dónde está la casilla en el mapa. Los premios «solo si aún no lo tienes» desaparecen en cuanto ese comando está en tu lista (baraja o reserva); si vendes todas tus copias, vuelven a salir.</p>
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
    ${subnav([['ruta', 'Ruta de logros'], ['logros', 'Logros comunes'], ['logros-pj', 'Logros de personaje'], ['coso-niveles', 'Niveles del Coso'], ['tableros', 'Tableros'], ['sintesis', 'Síntesis']])}
    ${bloque('ruta', 'Ruta de logros', `<ol class="steps">${ruta}</ol>`, { lead: 'Lo que conviene saber antes de empezar para no repetir partidas.' })}
    ${bloque('logros', 'Logros comunes', `${comunes}${fuentes(['steam', 'guiaSteam'])}`, {
      meter: medidor('bbs-comunes-logros', GRUPOS_LOGROS.flatMap((g) => g.ids).map(ID.logro), 'Logros comunes'),
      lead: 'Abre «Cómo conseguirlo» para ver el consejo de cada uno.',
    })}
    ${bloque('logros-pj', 'Logros de cada personaje', porPj)}
    ${bloque('coso-niveles', 'Niveles del Coso', nivelesCoso(), { lead: esc(NIVELES_COSO_INTRO) })}
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

// Las 29 misiones que suben el nivel del Coso, con una marca por personaje.
function nivelesCoso() {
  const cosoPorId = Object.fromEntries(COSO.map((c) => [c.id, c]));
  const fila = (m) => {
    const c = m.coso && cosoPorId[m.coso];
    const titulo = c ? `Supera «${c.nombre}»` : m.t;
    const req = c ? [c.nivel ? `Pide nivel ${c.nivel}${c.ticket ? ' o su ticket' : ''}.` : '', c.abre || ''].filter(Boolean).join(' ') : '';
    return `
    <li class="cn-fila">
      ${c ? `<img class="cn-icono" src="${IMG_BUILD}coso-${c.id}.webp" alt="" width="40" height="40" loading="lazy">` : ''}
      <div class="cn-txt"><span class="cn-titulo">${esc(titulo)}</span>${req ? `<span class="cn-req">${esc(req)}</span>` : ''}</div>
      <div class="cn-marcas">${PJS.map((p) => marca(ID.cosoNivel(p.id, m.id), esc(p.nombre), `pj-${p.id}`)).join('')}</div>
    </li>`;
  };
  const niveles = PJS.map((p) => {
    const ids = idsNivelesCoso(p.id);
    medidores[`cn-${p.id}`] = ids;
    return `<div class="cn-pj pj-${p.id}"><span class="cn-pj-nombre">${esc(p.nombre)}</span>
      <span class="cn-pj-nivel">Nivel <b data-nivel-coso="${p.id}">${1 + store.contar(ids)}</b> / 30</span>
      <span class="cn-pj-mis"><span data-count="cn-${p.id}">${store.contar(ids)}/${ids.length}</span> misiones</span></div>`;
  }).join('');
  const grupos = NIVELES_COSO.map((g) => {
    const ids = PJS.flatMap((p) => g.misiones.map((m) => ID.cosoNivel(p.id, m.id)));
    medidores[`cn-g-${g.id}`] = ids;
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="cn-g-${g.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">${esc(g.intro)}</p>
      <ul class="cn-lista">${g.misiones.map(fila).join('')}</ul>
    </div>`;
  }).join('');
  return `<div class="cn-niveles">${niveles}</div>${grupos}${fuentes(FUENTES_NIVELES_COSO)}`;
}

// Misiones del Coso de un personaje, con una casilla cada una (mismas marcas que en el hub de BBS).
function nivelesCosoPj(pj) {
  const cosoPorId = Object.fromEntries(COSO.map((c) => [c.id, c]));
  const grupos = NIVELES_COSO.map((g) => {
    const ids = g.misiones.map((m) => ID.cosoNivel(pj, m.id));
    medidores[`cn-${pj}-${g.id}`] = ids;
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="cn-${pj}-${g.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">${esc(g.intro)}</p>
      <ul class="list">${g.misiones.map((m) => {
        const c = m.coso && cosoPorId[m.coso];
        const abre = c ? [c.nivel ? `Pide nivel ${c.nivel}${c.ticket ? ' o su ticket' : ''}.` : '', c.abre || ''].filter(Boolean).join(' ') : '';
        return item({
          id: ID.cosoNivel(pj, m.id),
          titulo: c ? `Supera «${c.nombre}»` : m.t,
          desc: abre,
          icono: c ? `${IMG_BUILD}coso-${c.id}.webp` : '',
          meta: c?.premio?.[pj] ? tagPj(pj, `Recompensa: ${c.premio[pj]}`) : '',
        });
      }).join('')}</ul>
    </div>`;
  }).join('');
  return `
    <div class="cn-niveles"><div class="cn-pj pj-${pj}"><span class="cn-pj-nombre">${esc(PERSONAJES[pj].nombre)}</span>
      <span class="cn-pj-nivel">Nivel <b data-nivel-coso="${pj}">${1 + store.contar(idsNivelesCoso(pj))}</b> / 30</span>
      <span class="cn-pj-mis">Los combates, con sus rondas y estrategia, están en <a href="#/bbs" data-ir-seccion="coso">Birth by Sleep › Coso Virtual</a>.</span></div></div>
    ${grupos}${fuentes(FUENTES_NIVELES_COSO)}`;
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
    ${subnav([['xehanort', 'Informes Xehanort'], ['coso', 'Coso Virtual'], ['coso-niveles', 'Niveles del Coso'], ['minijuegos', 'Minijuegos'], ['tableros', 'Tableros'], ['sintesis', 'Síntesis'], ['retos', 'Retos'], ['helados', 'Helados']])}
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
    ${bloque('coso-niveles', 'Niveles del Coso', nivelesCoso(), {
      lead: esc(NIVELES_COSO_INTRO),
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

// Una misma mezcla puede dar varios comandos (p. ej. Poder Desatado + Gravedad++: Sismo 90 %, Meteo 10 %).
// Índice por ingredientes, tipo y exclusividad para enseñar en cada receta qué más puede salir.
const claveMezcla = (r) => [r.a, r.b, r.tipo ?? '', r.excl ?? ''].join('|');
const RESULTADOS_MEZCLA = Object.entries(COMANDOS).reduce((idx, [n, c]) => {
  c.recetas.forEach((r) => { (idx[claveMezcla(r)] ??= []).push({ n, pct: Number(r.pct) || 0 }); });
  return idx;
}, {});
const probReceta = (r) => (r.pct ? Number(r.pct) : 100);

function filaComando(n, cat, pj) {
  const c = COMANDOS[n];
  const vias = c.vias.filter((x) => !x.pj || x.pj.includes(pj));
  // Las recetas seguras primero.
  const recetas = c.recetas.filter((r) => !r.excl || r.excl.toLowerCase().includes(pj)).sort((x, y) => probReceta(y) - probReceta(x));
  const tipos = [...new Set([...(recetas.length ? ['sintesis'] : []), ...vias.map((v) => VIA_FILTRO[v.v] ?? v.v)])];
  const otros = (r) => (RESULTADOS_MEZCLA[claveMezcla(r)] ?? []).filter((x) => x.n !== n).sort((x, y) => y.pct - x.pct);
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
      ${marca(idComando(pj, n), `<span class="sr-only">Conseguido: ${esc(n)}</span>`, 'cmd-marca')}
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
                <li${probReceta(r) < 50 ? ' class="cmd-receta-baja"' : ''}><span class="eq">${ing(r.a)}<span class="eq-op">+</span>${ing(r.b)}</span>
                  <span class="cmd-receta-meta">${[r.tipo ? `tipo ${esc(r.tipo)}` : '', r.pct ? `<b>${esc(r.pct)} %</b> de probabilidad` : '', r.excl ? `solo ${esc(r.excl.replace('/', ' y '))}` : ''].filter(Boolean).join(' · ')}</span>
                  ${otros(r).length ? `<span class="cmd-receta-otros">Con esta mezcla también puede salir ${otros(r).map((x) => `<b>${esc(x.n)}</b> (${x.pct} %)`).join(' o ')}.</span>` : ''}
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
  for (const [k] of cats) medidores[`pj-${pj}-cmd-${k}`] = idsComandos(pj, k);
  return `
    <div class="cmds" data-pj="${pj}" data-cat="${cats[0][0]}">
      <div class="cmd-tabs" role="tablist" aria-label="Tipo de comando">${cats.map(([k, t], i) => `
        <button type="button" role="tab" class="cmd-tab" data-cmd-cat="${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          <img src="${IMG_BUILD}ico-${k}.webp" alt="" width="22" height="22"><span>${t}</span><b data-count="pj-${pj}-cmd-${k}">${store.contar(idsComandos(pj, k))}/${listas[k].length}</b></button>`).join('')}
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
    ${bloque('logros', `Logros de ${p.nombre}`, `<ul class="list">${logros.map((l) => itemLogro(l)).join('')}</ul>${fuentes(['steam', 'guiaSteam'])}`)}
    ${bloque('cuartelillo', 'Cuartelillo', `
      <ul class="recipes">${CUARTELILLO[pj].map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <p class="hint">Cada síntesis tiene un 10 % de probabilidad de dar Cuartelillo; el 90 % restante da Hoja Afortunada.</p>
      ${fuentes(['wikiEsCuartelillo'])}`, {
      lead: `Ejecutarlo con ${p.nombre} da el logro «${esc(logros.find((l) => /Cuartelillo/.test(l.desc))?.nombre)}». Hay uno en un cofre de Ciudad Disney (sala de juegos de Pete) o puedes sintetizarlo:`,
    })}
    ${bloque('comandos', `Comandos de ${p.nombre}`, comandosPj(pj), {
      meter: medidor(`pj-${pj}-comandos`, idsComandos(pj), 'Comandos'),
      lead: 'Todos sus comandos, en el orden del menú del juego: cómo se consigue cada uno y sus recetas de síntesis. Marca los que ya tengas, busca por nombre o ingrediente, o filtra por cómo se obtienen.',
    })}
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
        excl.map((e) => item({ id: ID.tableroCmd(pj, e.n), titulo: e.n, desc: e.donde.some((d) => d.tipo === 'limitada') ? 'Solo sale si aún no lo tienes (ni en la baraja ni en la reserva).' : '',
          extra: `<div class="tb-extra">${e.donde.map((d) => verCasilla(d.t, d.num, `${esc(d.t.nombre)}, casilla ${d.num}`)).join('')}</div>` })).join(''))}
      ${grupoTab('Victorias en el Coso Virtual', `pj-${pj}-tabc`, idsTabCoso, 'Para llevar la cuenta. No suman al 100 %: ninguna fuente dice que hagan falta con cada personaje.',
        TABLEROS.map((t) => item({ id: ID.tableroCoso(pj, t.id), titulo: t.nombre })).join(''))}
      <p class="hint">Los mapas y lo que da cada casilla están en <a href="#/bbs" data-ir-seccion="tableros">Birth by Sleep › Tableros</a>.</p>
      ${fuentes(['khwikiTableros', 'wikiEsTableros'])}`;
  const contInformes = () => `
    ${subnav([['build', 'Build'], ...(JEFES[pj] ? [['jefes', 'Jefes']] : []), ['xehanort', 'Informes Xehanort'], ['golpes', 'Golpes finales'], ['estilos', 'Estilos'], ['pegatinas', 'Pegatinas'], ['tesoros', 'Tesoros'], ['tableros', 'Tableros'], ['coso-niveles', 'Coso'], ['comandos', 'Comandos'], ['nexos', 'Nexos-D']])}
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
    ${bloque('coso-niveles', `Niveles del Coso de ${p.nombre}`, nivelesCosoPj(pj), {
      meter: medidor(`pj-${pj}-coso`, idsNivelesCoso(pj), 'Misiones'),
      lead: `${p.nombre} empieza en el nivel 1 del Coso y sube uno por misión: con las 29 llega al 30, el máximo. Se pueden hacer en cualquier orden; lo más cómodo es dejarlas para después de terminar las tres historias.`,
    })}
    ${bloque('comandos', `Comandos de ${p.nombre}`, comandosPj(pj), {
      meter: medidor(`pj-${pj}-comandos`, idsComandos(pj), 'Comandos'),
      lead: 'Todos sus comandos, en el orden del menú del juego: cómo se consigue cada uno y sus recetas de síntesis. Marca los que ya tengas, busca por nombre o ingrediente, o filtra por cómo se obtienen.',
    })}
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
      subLogros: `Logros propios de ${p.nombre}`, subJuego: 'Informes, golpes, estilos, pegatinas, tesoros, tableros y Coso',
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

// Cada grupo de logros enlaza con la sección de la guía donde se explica.
const GRUPO_A_SECCION = { historia: 'sora', mundos: 'mundos', coliseo: 'coliseo', jefes: 'jefes', diario: 'diario', sintesis: 'sintesis', gumi: 'gumi', armas: 'armas', contadores: 'sora' };
function khfmLogros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.khfmLogro);
    medidores[`khfm-g-${g.id}`] = ids;
    const sec = seccionKhfm(GRUPO_A_SECCION[g.id]);
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="khfm-g-${g.id}">${store.contar(ids)}/${ids.length}</span>
        ${sec ? `<a class="ir-seccion" href="#/khfm/${sec.id}">Ver la sección ${esc(sec.titulo)}</a>` : ''}</h3>
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

// Ficha de jefe (mismo diseño que los jefes de BBS) con casilla para marcarlo.
function jefeKhfm(j, { titulo = j.nombre, subtitulo = j.mundo } = {}) {
  const id = ID.khfmJefe(j.id);
  const src = j.src ?? `${IMG_COLISEO}${j.img}.webp`;
  const chips = [j.premio ? `<li class="chip">Premio: ${esc(j.premio)}</li>` : '', j.logro ? `<li class="chip chip-logro">Logro: ${esc(logroKhfm[j.logro].nombre)}</li>` : ''].join('');
  return `
    <article class="boss boss-khfm" id="jefe-${j.id}">
      ${j.captura ? `<img class="boss-vs" src="${src}" alt="Combate contra ${esc(j.nombre)} en el juego" width="800" height="450" loading="lazy">` : ''}
      <div class="boss-main${j.captura ? ' sin-art' : ''}">
        ${j.captura ? '' : `<div class="boss-art"><img src="${src}" alt="" loading="lazy"></div>`}
        <div class="boss-body">
          <p class="boss-world">${esc(subtitulo)}</p>
          <h3>${esc(titulo)}</h3>
          ${chips ? `<ul class="boss-premios" aria-label="Recompensas">${chips}</ul>` : ''}
          ${j.abre ? `<p class="boss-abre"><b>Cómo se llega:</b> ${esc(j.abre)}</p>` : ''}
          ${marca(id, 'Vencido', 'boss-marca')}
        </div>
      </div>
      <details class="boss-est">
        <summary>Cómo vencerle</summary>
        <p>${esc(j.t)}</p>
      </details>
    </article>`;
}

function khfmColiseo() {
  const copa = (c) => {
    const ids = MODOS_COPA.map(([m]) => ID.khfmCopa(c.id, m));
    const clave = `khfm-copa-${c.id}`;
    medidores[clave] = ids;
    return `
    <article class="copa">
      <div class="copa-head">
        <img class="copa-trofeo" src="${IMG_COLISEO}${c.img}.webp" alt="" loading="lazy">
        <div>
          <h3>${esc(c.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/3</span></h3>
          <p class="copa-meta">${c.rondas} combates · <span class="chip chip-logro">Logro: ${esc(logroKhfm[c.logro].nombre)}</span></p>
          <p class="copa-abre"><b>Se abre:</b> ${esc(c.abre)}</p>
        </div>
      </div>
      <div class="copa-modos">${MODOS_COPA.map(([m, t]) => marca(ID.khfmCopa(c.id, m), `<b>${t}</b><small>${esc(c.modos[m])}</small>`, 'copa-modo')).join('')}</div>
      ${c.nota ? `<p class="arma-nota">${esc(c.nota)}</p>` : ''}
      ${c.rivales ? `<details class="copa-rivales"><summary>Combates clave</summary><ul>${c.rivales.map((r) => `
        <li><img src="${IMG_COLISEO}${r.img}.webp" alt="" loading="lazy"><div><b>Puesto ${r.puesto}: ${esc(r.rival)}</b>${r.t ? `<p>${esc(r.t)}</p>` : ''}</div></li>`).join('')}</ul></details>` : ''}
    </article>`;
  };
  return `
    <ul class="sx-pasos bullets">${NOTAS_COLISEO.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <div class="copas">${COPAS.map(copa).join('')}</div>
    <h3 class="bx-sub copa-sub">Combates de oro y de platino</h3>
    <div class="bosses">${COMBATES_COLISEO.map((c) => jefeKhfm(c, { titulo: c.rival, subtitulo: `Coliseo del Olimpo · ${c.nombre}` })).join('')}</div>`;
}

const SUFIJO_NIVEL = ['', '+', '++'];
function khfmSora() {
  const eleccion = `
    <div class="sx-tabla-wrap sora-tabla"><table class="sx-tabla">
      <thead><tr><th>Te quedas</th><th>Desechas</th><th>VT</th><th>PM</th><th>PH</th><th>Fuerza</th><th>Defensa</th></tr></thead>
      <tbody>${ELECCION.map((e) => `<tr${e.rec ? ' class="is-rec"' : ''}><th><b>${esc(e.quedas)}</b>${e.rec ? ' <span class="chip chip-fm">Recomendada</span>' : ''}</th><td>${esc(e.dejas)}</td>
        <td>${e.vt}</td><td>${e.pm}</td><td>${e.ph}</td><td>${e.fue}</td><td>${e.def}</td></tr>`).join('')}</tbody>
    </table></div>
    <ul class="sx-pasos bullets">${ELECCION_CONSEJO.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;

  const preguntas = `
    <div class="info-cards">${PREGUNTAS.map((q) => `
      <div class="info-card"><h3>${esc(q.quien)}: ${esc(q.p)}</h3>
        <ol class="sora-resp">${q.r.map((r) => `<li>${esc(r)}</li>`).join('')}</ol></div>`).join('')}</div>
    <div class="info-cards sora-ritmos">${RITMOS.map((r) => `
      <div class="info-card"><h3>${esc(r.nombre)}</h3><p><b>${esc(r.como)}</b></p><p>${esc(r.t)}</p></div>`).join('')}</div>
    <p class="arma-nota sora-nota">${esc(NOTA_RITMOS)}</p>`;

  const magias = MAGIAS.map((m) => {
    const ids = m.niveles.map((_, i) => ID.khfmMagia(m.id, i + 1));
    const clave = `khfm-magia-${m.id}`;
    medidores[clave] = ids;
    return `
    <article class="copa magia">
      <h3>${esc(m.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/3</span></h3>
      <ul class="magia-niveles">${m.niveles.map((t, i) => `<li>${marca(ids[i], `<b>${esc(m.nombre + SUFIJO_NIVEL[i])}</b>`, 'magia-nivel')}<span>${esc(t)}</span></li>`).join('')}</ul>
    </article>`;
  }).join('');

  const invoc = INVOCACIONES.map((x) => item({
    id: ID.khfmInvoc(x.id), titulo: x.nombre, desc: x.como,
    meta: `<span class="chip">${x.pm} PM</span> <span>${esc(x.efecto)}</span>`,
  })).join('');

  medidores['khfm-sora-magias'] = idsMagias();
  medidores['khfm-sora-invoc'] = idsInvoc();
  return `
    <h3 class="bx-sub">Las dos partidas</h3>
    <div class="info-cards">${PARTIDAS.map((p) => `<div class="info-card"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join('')}</div>
    <h3 class="bx-sub copa-sub">Elección inicial</h3>
    <p class="group-intro">En el Despertar eliges un arma y desechas otra: decide tus estadísticas y las habilidades que aprendes. Estadísticas a nivel 1:</p>
    ${eleccion}
    <h3 class="bx-sub copa-sub">Las tres preguntas</h3>
    <p class="group-intro">Da igual lo que respondas: lo que cuenta es si eliges la primera opción, la del medio o la última. Eso fija tu ritmo de experiencia para toda la partida.</p>
    ${preguntas}
    <h3 class="bx-sub copa-sub">Magias <span class="count" data-count="khfm-sora-magias">${store.contar(idsMagias())}/${idsMagias().length}</span></h3>
    <p class="group-intro">${esc(NOTA_MAGIAS)}</p>
    <div class="copas magias">${magias}</div>
    <div class="group">
      <h3>Invocaciones <span class="count" data-count="khfm-sora-invoc">${store.contar(idsInvoc())}/${idsInvoc().length}</span></h3>
      <p class="group-intro">Lleva cada gema al Hada Madrina, en la Casa de Merlín de Ciudad de Paso. Para invocar hacen falta los tres miembros del grupo en pie. ${esc(NOTA_INVOC)}</p>
      <ul class="list">${invoc}</ul>
    </div>
    <h3 class="bx-sub copa-sub">Nivel 100 y contadores</h3>
    <ul class="sx-pasos bullets">${NIVEL_100.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
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

// Sección de una sola parte: entradilla y contenido, sin repetir el título de la página.
const seccionSimple = (html, lead) => `<p class="lead seccion-lead">${lead}</p>${html}`;
// --- KH FM: una página por sección (#/khfm/<id>) y portada con una tarjeta por sección ---
function khfmMundos() {
  const mundos = MUNDOS_KHFM.map((m) => item({
    id: ID.khfmLogro(m.logro), titulo: m.nombre, desc: m.cerradura,
    meta: `<span class="chip">Logro: ${esc(logroKhfm[m.logro].nombre)}</span>`,
  })).join('');
  return seccionSimple(`<ul class="list">${mundos}</ul>
      <div class="group"><h3>Páginas arrancadas del libro de Pooh</h3>
        <p class="group-intro">Abren las zonas del Bosque de los Cien Acres; con todas puedes sellar su cerradura. Datos del KH original.</p>
        <ul class="bullets">${PAGINAS_POOH.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      ${fuentes([...FUENTES_MUNDOS_KHFM, 'wikiEsBosque'])}`, 'En el orden de sus logros. Marcar una cerradura aquí también marca su logro, y al revés.');
}

function khfmDiario() {
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
    ${subnav([['secciones', 'Secciones'], ['ansem', 'Informes Ansem'], ['dalmatas', 'Dálmatas'], ['trio', 'Marcas Trío'], ['records', 'Récords']])}
    ${bloque('secciones', 'Las secciones del diario', `<div class="info-cards">${secciones}</div>${fuentes(['wikiEsDiario', 'guiaSteamKhfm', 'steamKhfm'])}`, {
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
    })}`;
}

function khfmJefes() {
  const historia = JEFES_HISTORIA.map((j) => jefeKhfm({ ...j, src: `${IMG_JEFES}${j.img}.webp` })).join('');
  return `
    ${subnav([['historia', 'De la historia'], ['secretos', 'Secretos']])}
    ${bloque('historia', 'Jefes de la historia', `<div class="bosses">${historia}</div>${fuentes(['wikiEsJefes', 'khwikiJefesKh', 'wikiEsAccesoriosKh'])}`, {
      meter: medidor('khfm-jefes-historia', idsJefesHistoria(), 'Jefes'),
      lead: 'En el orden en que aparecen, con lo que dan en Final Mix y cómo vencerlos. Los del Coliseo están en su sección.',
    })}
    ${bloque('secretos', 'Jefes secretos', `<div class="bosses">${JEFES_SECRETOS.map((j) => jefeKhfm(j)).join('')}</div>${fuentes(FUENTES_JEFES_LISTA)}`, {
      meter: medidor('khfm-jefes', idsJefesSecretos(), 'Jefes'),
      lead: 'Los tres jefes de Final Mix fuera del Coliseo. La guía recomienda ir con la historia terminada, el nivel alto y la magia al máximo.',
    })}`;
}

// `ids`: lo que cuenta para su medidor; `img`: imagen de la tarjeta; `html`: contenido de su página.
const SECCIONES_KHFM = [
  { id: 'mundos', titulo: 'Mundos y cerraduras', desc: 'Dónde está cada cerradura y cómo se sella.', img: 'assets/img/khfm/logros/ACH_022.jpg',
    ids: () => MUNDOS_KHFM.map((m) => ID.khfmLogro(m.logro)), html: khfmMundos },
  { id: 'diario', titulo: 'Diario de Pepito', desc: 'Informes Ansem, 99 dálmatas, marcas Trío y récords.', img: 'assets/img/khfm/logros/ACH_033.jpg',
    ids: () => [...idsAnsem(), ...idsDalmatas(), ...idsTrio(), ...idsRecords()], html: khfmDiario },
  { id: 'armas', titulo: 'Armas', desc: 'Las 48 llaves espada, bastones y escudos.', img: `${IMG_ARMAS}arma-artema.webp`,
    ids: idsArmas,
    html: () => seccionSimple(`${khfmArmas()}${fuentes(FUENTES_ARMAS_LISTA)}`, 'Las 48 armas de Sora, Donald y Goofy, con su bonificación en Final Mix y el texto del juego. Hay un logro por cada grupo completo.') },
  { id: 'sintesis', titulo: 'Síntesis', desc: 'Los 33 objetos de la Orfebrería y sus materiales.', img: 'assets/img/khfm/logros/ACH_040.jpg',
    ids: idsSintesis,
    html: () => seccionSimple(`${khfmSintesis()}${fuentes(FUENTES_SINTESIS_KHFM)}`, 'Los 33 objetos de la Orfebrería de Ciudad de Paso, en sus 6 listas. Cada lista se abre al fabricar cierto número de objetos distintos.') },
  { id: 'gumi', titulo: 'Naves gumi', desc: 'Las 30 misiones y los 48 planos.', img: `${IMG_GUMI}kingdom.webp`,
    ids: () => [...new Set([...idsMisiones(), ...idsPlanos()])],
    html: () => seccionSimple(`${khfmGumi()}${fuentes(['khwikiMisiones', 'diMisiones', 'khwikiPlanos', 'diPlanos', 'khwikiNaves', 'guiaSteamKhfm100', 'guiaSteamKhfm', 'wikiEsTrio'])}`, 'Las 30 misiones y los 48 planos, con la nave enemiga y la ruta de cada uno. Las piezas sin nombre oficial en castellano van en inglés entre «».') },
  { id: 'coliseo', titulo: 'Coliseo del Olimpo', desc: 'Las cuatro copas, sus tres modos y los combates de oro y platino.', img: `${IMG_COLISEO}copa-hades.webp`,
    ids: idsColiseo,
    html: () => seccionSimple(`${khfmColiseo()}${fuentes(FUENTES_COLISEO_LISTA)}`, 'Las cuatro copas con sus tres modos y lo que da cada uno, los combates clave y los dos combates secretos de Final Mix.') },
  { id: 'jefes', titulo: 'Jefes', desc: 'Los de la historia y los tres secretos de Final Mix.', img: `${IMG_JEFES}lado-oscuro.webp`,
    ids: () => [...idsJefesHistoria(), ...idsJefesSecretos()], html: khfmJefes },
  { id: 'sora', titulo: 'Sora y dificultad', desc: 'Partidas, elección inicial, magias e invocaciones.', img: 'assets/img/khfm/logros/ACH_018.jpg',
    ids: () => [...idsMagias(), ...idsInvoc()],
    html: () => seccionSimple(`${khfmSora()}${fuentes(['guiaSteamKhfm', 'diStats', 'fandomEnExp', 'diMagia', 'diInvoc', 'wikiEsCopas', 'wikiEsEspectro'])}`, 'Cómo planificar las partidas, qué elegir al empezar y dónde se consigue cada nivel de magia y cada invocación.') },
];
const seccionKhfm = (id) => SECCIONES_KHFM.find((s) => s.id === id);

function khfmPortada() {
  return `
    <p class="mode-note">El 100 % cuenta las cerraduras, lo que pide el diario de Pepito, las armas, la síntesis, las naves gumi, el Coliseo, los jefes, las magias y las invocaciones.</p>
    <div class="secciones-khfm">${SECCIONES_KHFM.map((s) => `
      <a class="seccion-khfm" href="#/khfm/${s.id}">
        <span class="seccion-art"><img src="${esc(s.img)}" alt="" loading="lazy"></span>
        <span class="seccion-cuerpo">
          <span class="seccion-titulo">${esc(s.titulo)}</span>
          <span class="seccion-desc">${esc(s.desc)}</span>
          ${medidor(`khfm-sec-${s.id}`, s.ids(), 'Progreso')}
        </span>
      </a>`).join('')}</div>`;
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
    ${modo() === 'logros' ? khfmLogros() : khfmPortada()}
  </section>`;
}

function vistaSeccionKHFM(s) {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: 'Kingdom Hearts Final Mix', href: '#/khfm' }, { t: s.titulo }]);
  const i = SECCIONES_KHFM.indexOf(s);
  const ant = SECCIONES_KHFM[i - 1];
  const sig = SECCIONES_KHFM[i + 1];
  return `
  <section class="page juego-khfm seccion-pagina">
    <header class="seccion-head">
      <img class="seccion-head-art" src="${esc(s.img)}" alt="" width="72" height="72">
      <div class="seccion-head-txt">
        <p class="seccion-juego"><a href="#/khfm">Kingdom Hearts Final Mix</a> · Informes · 100 %</p>
        <h1 class="page-title">${esc(s.titulo)}</h1>
      </div>
      ${medidor(`khfm-pag-${s.id}`, s.ids(), 'Progreso de la sección')}
    </header>
    ${s.html()}
    <nav class="seccion-nav" aria-label="Otras secciones">
      ${ant ? `<a href="#/khfm/${ant.id}"><small>Anterior</small><b>${esc(ant.titulo)}</b></a>` : '<span></span>'}
      ${sig ? `<a class="seccion-sig" href="#/khfm/${sig.id}"><small>Siguiente</small><b>${esc(sig.titulo)}</b></a>` : '<a class="seccion-sig" href="#/khfm"><small>Volver</small><b>Portada del juego</b></a>'}
    </nav>
  </section>`;
}

// ---------- KH III + Re Mind ----------
const GRUPO_A_SECCION_KH3 = { artema: ['artema', 'orfebreria'], gumifono: ['portafortuna', 'tesoros', 'adversarios', 'orfebreria', 'minijuegos'], minijuegos: ['minijuegos'], gumi: ['gumi'], fotos: ['cocina'], remind: ['remind', 'jefes'], codigos: ['remind'], historia: ['jefes'] };
function kh3Logros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.kh3Logro);
    medidores[`kh3-g-${g.id}`] = ids;
    const secs = (GRUPO_A_SECCION_KH3[g.id] ?? []).map(seccionKh3);
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="kh3-g-${g.id}">${store.contar(ids)}/${ids.length}</span>
        ${secs.map((sec) => `<a class="ir-seccion" href="#/kh3/${sec.id}">Ver la sección ${esc(sec.titulo)}</a>`).join('')}</h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroKh3[id], 'kh3')).join('')}</ul>
      ${g.id === 'codigos' ? `<p class="nota-fuente">${esc(NOTA_RANGO_A)}</p>` : ''}
    </div>`;
  };
  return `
    ${subnav([['ruta', 'Antes de empezar'], ['logros', 'Logros']])}
    ${bloque('ruta', 'Antes de empezar', `<ol class="steps">${rutaPasos(RUTA_KH3, logroKh3)}</ol>`, { lead: 'Lo que conviene saber antes de la primera partida.' })}
    ${bloque('logros', 'Los 51 logros', `${GRUPOS_LOGROS_KH3.map(grupo).join('')}${fuentes(FUENTES_CONSEJOS_KH3)}`, {
      meter: medidor('kh3-logros-lista', logrosKH3(), 'Logros'),
      lead: 'Abre «Cómo conseguirlo» donde lo haya. Los logros ocultos esconden su descripción hasta que la abras.',
    })}`;
}

// Anillo con los 7 Orichalcum+: cada gema se enciende al marcar el suyo y lleva a su ficha.
function anilloOricalcos() {
  const gemas = ORICALCOS.map((o, i) => {
    const id = ID.kh3Oricalco(o.id);
    return `<a class="gema${store.hecho(id) ? ' is-on' : ''}" data-gema="${id}" href="#ori-${o.id}" data-goto="ori-${o.id}" style="--i:${i}" title="${esc(o.titulo)}">
      <img src="${IMG_ARTEMA}oricalco-plus.webp" alt="${esc(o.titulo)}" width="40" height="35"></a>`;
  }).join('');
  return `<div class="anillo" style="--n:${ORICALCOS.length}">
    <img class="anillo-arma" src="${IMG_ARTEMA}arma-artema.webp" alt="Arma Artema de Kingdom Hearts III" width="480" height="456">
    ${gemas}
  </div>`;
}

const imgMat = (id, n = 36) => `<img src="${IMG_ARTEMA}${id}.webp" alt="" width="${n}" height="${n}" loading="lazy">`;

function kh3Artema() {
  const idsOri = ORICALCOS.map((o) => ID.kh3Oricalco(o.id));
  medidores['kh3-ori'] = idsOri;
  const tablaFlanes = `<div class="sx-tabla-wrap"><table class="sx-tabla flanes">
    <thead><tr><th scope="col">Flan</th><th scope="col">Dónde</th><th scope="col">Puntos</th></tr></thead>
    <tbody>${FLANES.map((f) => `<tr><th scope="row"><span class="flan">${imgMat(`flan-${f.id}`, 32)}${esc(f.nombre)}</span></th>
      <td>${esc(f.mundo)}: ${esc(f.zona)}</td><td>más de ${esc(f.pts)}${f.nota ? `<small class="flan-nota">${esc(f.nota)}</small>` : ''}</td></tr>`).join('')}</tbody>
  </table></div>`;
  const oricalco = (o) => item({
    id: ID.kh3Oricalco(o.id), titulo: o.titulo, desc: o.como, meta: esc(o.donde), icono: `${IMG_ARTEMA}${o.img ?? 'oricalco-plus'}.webp`,
    extra: o.flanes ? tablaFlanes : '',
  }).replace('<li class="item', `<li id="ori-${o.id}" class="item`);
  const cristal = (c) => `<article class="cristal">
    <header class="cristal-head">${imgMat(c.id, 48)}<div><h3>${esc(c.nombre)}</h3><p class="cristal-en">${esc(c.en)}. Hacen falta ${c.falta}.</p></div></header>
    <ul class="caidas">${c.caidas.map((d) => `<li>${imgMat(d.img, 44)}<span><b>${esc(d.enemigo)}</b> <span class="pct">${d.pct} %</span><small>${esc(d.donde)}</small></span></li>`).join('')}</ul>
    ${c.receta ? `<p class="cristal-receta"><b>O fabrícalo:</b> ${esc(c.receta.mats)}. ${esc(c.receta.abre)}</p>` : ''}
    ${c.extra ? `<p class="cristal-receta">${esc(c.extra)}</p>` : ''}
  </article>`;
  return `
    <section class="forja">
      ${anilloOricalcos()}
      <div class="forja-txt">
        <p class="lead">${esc(REQUISITO_ARTEMA)}</p>
        <p class="forja-n"><b data-count="kh3-ori">${store.contar(idsOri)}/${ORICALCOS.length}</b> Orichalcum+ conseguidos</p>
        <ul class="receta forja-receta" aria-label="Receta">${RECETA_ARTEMA.map((m) => `<li class="mat-chip" title="${esc(m.en)}">${imgMat(m.id, 22)}<b>×${m.n}</b> ${esc(m.nombre)}</li>`).join('')}</ul>
        <p class="nota-fuente">${esc(NOTA_RECETA)}</p>
        <div class="forja-pasos">${PASOS_ARTEMA.slice(0, -1).map((p) => marca(ID.kh3Artema(p.id), esc(p.t))).join('')}
          ${marca(ID.kh3Logro('ACH_44'), 'Fabricar el Arma Artema (logro «Arma Artema»)')}
          ${marca(ID.kh3Artema('nivel10'), esc(PASOS_ARTEMA.at(-1).t))}</div>
      </div>
    </section>
    ${subnav([['oricalcos', 'Los 7 Orichalcum+'], ['cristales', 'Cristales'], ['mejoras', 'Mejoras'], ['ficha', 'Forma Suprema']])}
    ${bloque('oricalcos', 'Los 7 Orichalcum+', `<ul class="list">${ORICALCOS.map(oricalco).join('')}</ul>`, {
      meter: medidor('kh3-ori-lista', idsOri, 'Orichalcum+'),
      lead: 'Hay justo siete en todo el juego y no se compran: marca cada uno al conseguirlo.',
    })}
    ${bloque('cristales', 'Dónde caen los cristales', `<div class="cristales">${CRISTALES_ARTEMA.map(cristal).join('')}</div>`, {
      lead: 'Probabilidad de que lo suelte cada enemigo. Las «Battlegate» son los combates opcionales de cada mundo.',
    })}
    ${bloque('mejoras', 'Mejoras hasta el nivel 10', `<div class="sx-tabla-wrap"><table class="sx-tabla mejoras">
      <thead><tr><th scope="col">Nivel</th><th scope="col">Fuerza</th><th scope="col">Magia</th><th scope="col">Materiales</th></tr></thead>
      <tbody>${MEJORAS_ARTEMA.map((m) => `<tr><th scope="row">${m.nv}</th><td>+${m.fue}</td><td>+${m.mag}</td><td>${esc(m.mats)}</td></tr>`).join('')}</tbody>
    </table></div><p class="nota-fuente">${esc(NOTA_MEJORAS)}</p>`, { lead: 'Se mejora en la tienda Moguri. Llevar cualquier llave espada al nivel 10 da el logro «Maestro armero».' })}
    ${bloque('ficha', 'Qué hace y Forma Suprema', `<div class="ficha-artema">
      <img src="${IMG_ARTEMA}forma-suprema.webp" alt="Sora en Forma Suprema" width="640" height="376" loading="lazy">
      <div><p>${esc(FICHA_ARTEMA.base)}</p><p><b>Habilidades:</b> ${esc(FICHA_ARTEMA.habilidades)}.</p><p>${esc(FICHA_ARTEMA.forma)}</p></div>
    </div>`)}
    ${fuentes(FUENTES_ARTEMA)}`;
}

function kh3Portafortuna() {
  const total = idsPf().length;
  medidores['kh3-pf-total'] = idsPf();
  const n = store.contar(idsPf());
  const premios = `<ol class="hitos" aria-label="Premios por número de portafortuna">${PREMIOS_PF.map(([h, premio]) => `
    <li class="hito${n >= h ? ' is-on' : ''}${premio === 'Orichalcum+' ? ' hito-ori' : ''}" data-hito="${h}"><b>${h}</b><span>${esc(premio)}</span></li>`).join('')}</ol>`;
  const tarjeta = (w, x, i) => {
    const id = ID.kh3Pf(w.id, i + 1);
    const hecho = store.hecho(id);
    return `<li class="item pf${hecho ? ' is-done' : ''}">
      <label class="pf-label">
        <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
        <span class="pf-foto"><img src="${IMG_PF}pf-${w.id}-${i + 1}.webp" alt="Portafortuna ${i + 1} de ${esc(w.nombre)}" width="480" height="270" loading="lazy">
          <span class="pf-n">${i + 1}</span><span class="crown">${CORONA}</span></span>
        <span class="pf-txt"><span class="pf-zona" title="${esc(x.en)}">${esc(x.zona)}</span><span class="pf-nota">${esc(x.t)}</span></span>
      </label>
    </li>`;
  };
  const mundo = (w) => bloque(`pf-${w.id}`, esc(w.nombre), `${w.aviso ? `<p class="nota-fuente">${esc(w.aviso)}</p>` : ''}
    <ul class="pfs">${w.pf.map((x, i) => tarjeta(w, x, i)).join('')}</ul>`, { meter: medidor(`kh3-pf-${w.id}`, idsPf(w), 'Fotografiados') });
  return `
    <p class="lead seccion-lead">${esc(INTRO_PF)}</p>
    <h2 class="hitos-tit">Premios <span class="count" data-count="kh3-pf-total">${n}/${total}</span></h2>
    ${premios}
    ${subnav(MUNDOS_PF.map((w) => [`pf-${w.id}`, `${w.nombre} (${w.pf.length})`]))}
    ${MUNDOS_PF.map(mundo).join('')}
    ${fuentes(FUENTES_PF)}`;
}

// Cofres de un mundo agrupados por tramos seguidos de la misma zona (la ruta vuelve a veces a una zona ya vista).
function kh3Tesoros() {
  const fila = (w, x) => {
    const id = idTesoroKh3(w, x);
    const hecho = store.hecho(id);
    const tipo = TIPOS_TESORO[x.tipo];
    const traducido = !x.nombre.startsWith('«');
    return `
    <li class="item tes3${hecho ? ' is-done' : ''}">
      <label class="item-row">
        <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
        <span class="crown">${CORONA}</span>
        <img class="item-icon tes3-icono" src="${IMG_TES}${tipo.icono}.webp" alt="" width="32" height="32" loading="lazy">
        <span class="item-body">
          <span class="item-title"${traducido && x.tipo !== 'mapa' ? ` title="En inglés: ${esc(x.en)}"` : ''}>${esc(x.nombre)}</span>
          <span class="item-desc">${esc(x.t)}</span>
          <span class="item-meta"><span class="tes3-n">n.º ${x.n}</span><span class="chip">${esc(tipo.t)}</span></span>
        </span>
      </label>
    </li>`;
  };
  const tramos = (w) => w.t.reduce((acc, x) => {
    const ult = acc.at(-1);
    if (ult && ult.zona === x.zona) ult.t.push(x);
    else acc.push({ zona: x.zona, en: x.zonaEn, t: [x] });
    return acc;
  }, []);
  const zonaTit = (z) => (z.zona ? `<h3 class="tes3-zona"${z.zona.startsWith('«') ? '' : ` title="En inglés: ${esc(z.en)}"`}>${esc(z.zona)}</h3>` : '');
  const mundo = (w) => bloque(`tes-${w.id}`,
    `<img class="tes3-cofre" src="${IMG_TES}cofre-${w.id}.webp" alt="" width="56" height="49" loading="lazy">${esc(w.nombre)}`,
    `${w.aviso ? `<p class="nota-fuente">${esc(w.aviso)}</p>` : ''}
    ${tramos(w).map((z) => `${zonaTit(z)}<ul class="list tes3-lista">${z.t.map((x) => fila(w, x)).join('')}</ul>`).join('')}`,
    { meter: medidor(`kh3-tes-${w.id}`, idsTesKh3(w), 'Cofres') });
  return `
    <p class="lead seccion-lead">${esc(INTRO_TES)}</p>
    ${subnav(MUNDOS_TESOROS.map((w) => [`tes-${w.id}`, `${w.nombre} (${w.t.length})`])).replace('class="subnav"', 'class="subnav subnav-wrap"')}
    ${MUNDOS_TESOROS.map(mundo).join('')}
    ${fuentes(FUENTES_TESOROS)}`;
}

// Orfebrería: recetas por lo que las desbloquea, misiones fotográficas y materiales (con sus enemigos).
const ICONO_SINT = { objeto: `${IMG_TES}icono-objeto.webp`, llave: `${IMG_SINT}icono-llave.webp`, baston: `${IMG_TES}icono-baston.webp`,
  escudo: `${IMG_TES}icono-escudo.webp`, proteccion: `${IMG_TES}icono-proteccion.webp`, accesorio: `${IMG_TES}icono-accesorio.webp` };
const matKh3PorId = Object.fromEntries(MATERIALES_KH3.map((m) => [m.id, m]));
const imgMatKh3 = (id, n = 22) => `<img src="${IMG_SINT}${id}.webp" alt="" width="${n}" height="${n}" loading="lazy">`;
function kh3Orfebreria() {
  const nMat = store.contar(idsMatKh3());
  const receta = (o) => `<span class="rec">${o.mats.map(([id, q]) => `<span class="rec-mat">${imgMatKh3(id)}${q} × ${esc(matKh3PorId[id].nombre)}</span>`).join('')}</span>`;
  const objeto = (o) => item({
    id: ID.kh3Sintesis(o.id),
    titulo: o.nombre,
    icono: o.tipo === 'material' ? `${IMG_SINT}${o.id}.webp` : ICONO_SINT[o.tipo],
    meta: `${receta(o)}${o.nota ? `<span class="note">${esc(o.nota)}</span>` : ''}${o.id === 'ultima-weapon' ? '<span class="chip chip-logro">Logro «Arma Artema»</span>' : ''}`,
  });
  const grupo = (clave, titulo, lista, extra = '') => {
    const ids = lista.map((o) => ID.kh3Sintesis(o.id));
    medidores[clave] = ids;
    return `<div class="group orf-grupo">
      <h3>${titulo} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span>${extra}</h3>
      <ul class="list orf-lista">${lista.map(objeto).join('')}</ul></div>`;
  };
  const umbrales = [...new Set(SINTESIS_KH3.filter((o) => o.req).map((o) => o.req))].sort((a, b) => a - b);
  const recetas = [
    grupo('orf-u0', 'Desde el principio', SINTESIS_KH3.filter((o) => !o.req && !o.foto)),
    ...umbrales.map((u) => grupo(`orf-u${u}`, `${u} materiales distintos`, SINTESIS_KH3.filter((o) => o.req === u),
      `<span class="umbral${nMat >= u ? ' is-on' : ''}" data-umbral="${u}"><span class="u-si">Desbloqueado</span><span class="u-no">Bloqueado</span></span>`)),
    grupo('orf-foto', 'Con una misión fotográfica', SINTESIS_KH3.filter((o) => o.foto).sort((a, b) => a.foto - b.foto)),
  ].join('');

  const sintPorId = Object.fromEntries(SINTESIS_KH3.map((o) => [o.id, o]));
  const fotos = FOTOS_KH3.map((f) => item({
    id: ID.kh3Foto(f.n), titulo: `${f.n}. ${f.que}`, desc: f.donde,
    meta: `<span class="chip">Se abre: ${esc(f.abre)}</span><span class="chip">Receta: ${esc(sintPorId[f.objeto].nombre)}</span>`,
  })).join('');

  // Cofres de la sección Tesoros que dan cada material.
  const cofres = {};
  MUNDOS_TESOROS.forEach((w) => w.t.forEach((x) => { cofres[x.en] = (cofres[x.en] ?? 0) + 1; }));
  const material = (m) => {
    const vias = [
      m.enemigos.length ? `<span><b>Enemigos:</b> ${m.enemigos.map((e) => `${esc(e.e)}${e.p ? ` (${e.p})` : ''}`).join(', ')}.</span>` : '',
      m.gumi.length ? `<span><b>Nave gumi:</b> asteroides de ${m.gumi.map((g) => `${esc(g.r)} (${g.p})`).join(', ')}.</span>` : '',
      cofres[m.en] ? `<span><b>Cofres:</b> ${cofres[m.en]} en la <a href="#/kh3/tesoros">sección Tesoros</a>.</span>` : '',
      m.mundos.length ? `<span><b>También en:</b> ${esc(m.mundos.join(', '))}.</span>` : '',
      ...m.otras.map((t) => `<span>${esc(t)}</span>`),
    ].filter(Boolean).join('');
    return item({ id: ID.kh3Material(m.id), titulo: m.nombre, icono: `${IMG_SINT}${m.id}.webp`, meta: `<span class="mat-vias">${vias}</span>` });
  };
  const familias = FAMILIAS_KH3.map((f) => {
    const ids = f.materiales.map(ID.kh3Material);
    medidores[`orf-f-${f.id}`] = ids;
    return `<div class="group"><h3>${esc(f.nombre)} <span class="count" data-count="orf-f-${f.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list orf-lista">${f.materiales.map((id) => material(matKh3PorId[id])).join('')}</ul></div>`;
  }).join('');

  return `
    <p class="lead seccion-lead">${esc(INTRO_ORF)}</p>
    ${subnav([['orf-recetas', 'Recetas (88)'], ['orf-fotos', 'Misiones fotográficas (20)'], ['orf-materiales', 'Materiales (60)']])}
    ${bloque('orf-recetas', 'Recetas', recetas, {
      meter: medidor('orf-sint', SINTESIS_KH3.map((o) => ID.kh3Sintesis(o.id)), 'Fabricados'),
      lead: 'Marca cada objeto cuando lo fabriques. «Desbloqueado» se enciende según los materiales que marques abajo.',
    })}
    ${bloque('orf-fotos', 'Misiones fotográficas', `<ul class="list">${fotos}</ul>`, {
      meter: medidor('orf-fotos', FOTOS_KH3.map((f) => ID.kh3Foto(f.n)), 'Fotos'),
      lead: 'Te las encargan los moguris de las tiendas a partir de Villa Crepúsculo. Cada una da un objeto y su receta. Haz la foto con el gumífono: un aviso rojo confirma que vale.',
    })}
    ${bloque('orf-materiales', 'Materiales', familias, {
      meter: medidor('orf-mat', idsMatKh3(), 'Registrados'),
      lead: 'Hay 60 y con 58 distintos se desbloquean todas las recetas. Marca los que ya hayas conseguido al menos una vez: es lo que cuenta el juego en sus objetivos de coleccionista.',
    })}
    ${fuentes(FUENTES_ORF)}`;
}

// Minijuegos: Siete Flantásticos, minijuegos de los mundos, Reino clásico y récords del gumífono.
const chipLogroKh3 = (id) => `<span class="chip chip-logro">Logro «${esc(logroKh3[id].nombre)}»</span>`;
function kh3Minijuegos() {
  const flan = (f) => {
    const info = FLANES_INFO[f.id];
    const premios = info.premios.map(([pts, p]) => `<li><b>Más de ${pts}</b><span>${esc(p)}</span></li>`).join('');
    return item({
      id: ID.kh3Flan(f.id), titulo: f.nombre, icono: `${IMG_ARTEMA}flan-${f.id}.webp`,
      desc: `${f.mundo}, ${f.zona}. ${info.donde}`,
      meta: '<span>Márcalo al jugarlo una vez, con cualquier puntuación.</span>',
      extra: `<div class="mini-extra"><p>${esc(info.como)}</p><ul class="mini-premios">${premios}</ul>
        ${marca(ID.kh3Flan(f.id, true), `Puntuación alta (más de ${esc(f.pts)})`)}</div>`,
    });
  };
  const mini = (m) => item({
    id: ID.kh3Mini(m.id), titulo: `${m.nombre} · rango A`, desc: `${m.mundo}. ${m.donde}`,
    meta: `<b class="mini-meta">${esc(m.meta)}</b>${chipLogroKh3(m.logro)}`,
    extra: `<div class="mini-extra"><p>${esc(m.como)}</p><p class="mini-premio">${esc(m.premio)}</p></div>`,
  });
  const nombreMundo = Object.fromEntries(MUNDOS_TESOROS.map((w) => [w.id, w.nombre]));
  const clasico = (g) => item({
    id: ID.kh3Clasico(g.n), titulo: `${g.n}. «${g.en}»`, desc: g.obj,
    meta: g.cofre
      ? `<span>Cofre n.º ${g.cofre[1]} de ${esc(nombreMundo[g.cofre[0]])} (<a href="#/kh3/tesoros" data-goto="tes-${g.cofre[0]}">sección Tesoros</a>)</span>`
      : `<span>${esc(g.origen)}</span>`,
  });
  const records = RECORDS_KH3.map((r) => {
    const ids = r.items.map((_, i) => ID.kh3Record(r.id, i + 1));
    medidores[`rec-${r.id}`] = ids;
    return `<div class="group"><h3>${esc(r.titulo)} <span class="count" data-count="rec-${r.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">${esc(r.intro)}</p>
      <ul class="list list-tight">${r.items.map((t, i) => item({ id: ID.kh3Record(r.id, i + 1), titulo: t })).join('')}</ul></div>`;
  }).join('');
  const idsFlan = FLANES.flatMap((f) => [ID.kh3Flan(f.id), ID.kh3Flan(f.id, true)]);
  return `
    <p class="lead seccion-lead">Los Siete Flantásticos, los cuatro minijuegos de los mundos, los 23 juegos del Reino clásico y los récords del gumífono, con lo que pide cada logro.</p>
    ${subnav([['mini-flanes', 'Flantásticos (7)'], ['mini-mundos', 'Minijuegos (4)'], ['mini-clasico', 'Reino clásico (23)'], ['mini-records', 'Récords']])}
    ${bloque('mini-flanes', 'Los Siete Flantásticos', `<ul class="list mini-lista">${FLANES.map(flan).join('')}</ul>`, {
      meter: medidor('mini-flanes', idsFlan, 'Flanes'), lead: esc(INTRO_FLANES),
    })}
    ${bloque('mini-mundos', 'Minijuegos de los mundos', `<ul class="list mini-lista">${MINIJUEGOS_KH3.map(mini).join('')}</ul>`, {
      meter: medidor('mini-rango', MINIJUEGOS_KH3.map((m) => ID.kh3Mini(m.id)), 'Rango A'),
      lead: 'Se repiten después de terminar su mundo. Marca cada uno al sacar el rango A. Los logros piden algo más: la cifra está en cada uno.',
    })}
    ${bloque('mini-clasico', 'Reino clásico', `<ul class="list">${CLASICO_KH3.map(clasico).join('')}</ul>`, {
      meter: medidor('mini-clasico', CLASICO_KH3.map((g) => ID.kh3Clasico(g.n)), 'Récords batidos'),
      lead: `${esc(INTRO_CLASICO)} ${chipLogroKh3('ACH_41')} ${chipLogroKh3('ACH_42')}`,
    })}
    ${bloque('mini-records', 'Récords del gumífono', records, {
      meter: medidor('mini-records', idsRecordsKh3(), 'Récords'),
      lead: `${esc(INTRO_RECORDS)} ${chipLogroKh3('ACH_19')}`,
    })}
    ${fuentes(FUENTES_MINI)}`;
}

// Nave gumi: constelaciones, tesoros de los combates y Schwarzgeist.
const IMG_GUMI3 = 'assets/img/kh3/gumi/';
function kh3Gumi() {
  const rango = (r) => (r ? `<span class="chip">Rango ${r}${r === 'C' ? ' o mejor' : ''}</span>` : '<span class="chip">Al ganarlo</span>');
  const constelaciones = RUTAS_GUMI.map((r) => {
    const ids = r.constelaciones.map((c) => ID.kh3Const(c.id));
    medidores[`gumi-c-${r.id}`] = ids;
    return `<div class="group"><h3>${r.nombre} <span class="count" data-count="gumi-c-${r.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list">${r.constelaciones.map((c) => item({ id: ID.kh3Const(c.id), titulo: `«${c.en}»`, desc: c.donde })).join('')}</ul></div>`;
  }).join('');
  const tesoros = RUTAS_GUMI.map((r) => {
    const ids = r.tesoros.map((_, i) => ID.kh3GumiTes(r.id, i + 1));
    medidores[`gumi-t-${r.id}`] = ids;
    return `<div class="group"><h3>${r.nombre} <span class="count" data-count="gumi-t-${r.id}">${store.contar(ids)}/${ids.length}</span></h3>
      <p class="group-intro">Ruta de ${esc(r.mundos)}. ${esc(r.nota)}</p>
      <ul class="list list-tight">${r.tesoros.map(([t, combate, ra], i) => item({
        id: ID.kh3GumiTes(r.id, i + 1), titulo: `«${t}»`,
        meta: `<span>${t.endsWith('/G') ? 'Pieza decorativa' : 'Plano de nave'} · combate «${esc(combate)}»</span>${rango(ra)}`,
      })).join('')}</ul></div>`;
  }).join('');
  const chip = (id) => `<span class="chip chip-logro">Logro «${esc(logroKh3[id].nombre)}»</span>`;
  return `
    <p class="lead seccion-lead">Las tres rutas de la nave gumi: dónde está cada constelación, qué combate da cada tesoro y cómo vencer a Schwarzgeist.</p>
    ${subnav([['gumi-const', 'Constelaciones (9)'], ['gumi-tes', 'Tesoros (36)'], ['gumi-schwarz', 'Schwarzgeist']])}
    ${bloque('gumi-const', 'Constelaciones', constelaciones, {
      meter: medidor('gumi-const', idsConstKh3(), 'Fotografiadas'), lead: `${esc(INTRO_CONST)} ${chip('ACH_28')}`,
    })}
    ${bloque('gumi-tes', 'Tesoros de la nave', tesoros, {
      meter: medidor('gumi-tes', idsGumiTesKh3(), 'Tesoros'), lead: `${esc(INTRO_TES_GUMI)} ${chip('ACH_27')}`,
    })}
    ${bloque('gumi-schwarz', 'Schwarzgeist', `
      <div class="schwarz">
        <img src="${IMG_GUMI3}schwarzgeist.webp" alt="Schwarzgeist, jefe de la nave gumi" width="480" height="412" loading="lazy">
        <div><p><b>Dónde:</b> ${esc(SCHWARZGEIST.donde)}</p><p><b>Cómo:</b> ${esc(SCHWARZGEIST.como)}</p><p><b>Premios:</b> ${esc(SCHWARZGEIST.premios)}</p>
          ${marca(ID.kh3Logro('ACH_29'), `Derrotado (logro «${esc(logroKh3.ACH_29.nombre)}»)`)}</div>
      </div>`)}
    ${fuentes(FUENTES_GUMI_KH3)}`;
}

// Cocina: platos (con su minijuego), estrellas del bistró e ingredientes.
const ingKh3PorId = Object.fromEntries(INGREDIENTES_KH3.map((i) => [i.id, i]));
function kh3Cocina() {
  const chip = (id) => `<span class="chip chip-logro">Logro «${esc(logroKh3[id].nombre)}»</span>`;
  const nClasicos = store.contar(idsPlatosClasicos());
  const estrellas = `<ol class="hitos" aria-label="Estrellas del bistró">${ESTRELLAS_BISTRO.map(([e, n, premio]) => `
    <li class="hito${nClasicos >= n ? ' is-on' : ''}" data-estrella="${n}"><b>${'★'.repeat(e)}</b><span>${n} platos${premio ? ` · ${esc(premio)}` : ''}</span></li>`).join('')}</ol>`;
  const plato = (p) => item({
    id: ID.kh3Plato(p.id), titulo: p.nombre,
    meta: `<span class="chip">${p.menu === 'especial' ? 'Menú especial' : 'Menú clásico'}</span>
      <span class="chip">${esc(JUEGOS_COCINA[p.juego].t)} · dificultad ${p.dif}</span>
      <span class="rec">${p.ings.map((id) => `<span class="rec-mat">${esc(ingKh3PorId[id].nombre)}</span>`).join('')}</span>`,
  });
  const cats = [...new Set(PLATOS_KH3.map((p) => p.cat))];
  const platos = cats.map((c) => {
    const lista = PLATOS_KH3.filter((p) => p.cat === c);
    const ids = lista.map((p) => ID.kh3Plato(p.id));
    medidores[`coc-${slug(c)}`] = ids;
    return `<div class="group"><h3>${esc(c)} <span class="count" data-count="coc-${slug(c)}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list list-tight">${lista.map(plato).join('')}</ul></div>`;
  }).join('');
  const juegos = Object.values(JUEGOS_COCINA).map((j) => `<div class="info-card"><h3>${esc(j.t)}</h3><p>${esc(j.como)}</p></div>`).join('');
  const nombreFlan = Object.fromEntries(FLANES.map((f) => [f.id, f.nombre]));
  const ingrediente = (i) => item({
    id: ID.kh3Ingrediente(i.id), titulo: i.nombre,
    meta: `<span class="mat-vias">${[
      i.flan ? `<span><b>Flan:</b> el ${esc(nombreFlan[i.flan])} la da al superar su puntuación (<a href="#/kh3/minijuegos" data-goto="mini-flanes">sección Minijuegos</a>).</span>` : '',
      i.tienda ? '<span><b>Tienda Moguri:</b> se vende (más variedad según avanzas en la historia).</span>' : '',
      i.zonas.length ? `<span><b>Dónde:</b> ${esc(i.zonas.join(', '))}.</span>` : '',
    ].filter(Boolean).join('')}</span>`,
  });
  const grupos = [...new Set(INGREDIENTES_KH3.map((i) => i.grupo))].map((g) => {
    const lista = INGREDIENTES_KH3.filter((i) => i.grupo === g);
    const ids = lista.map((i) => ID.kh3Ingrediente(i.id));
    medidores[`ing-${slug(g)}`] = ids;
    return `<div class="group"><h3>${esc(g)} <span class="count" data-count="ing-${slug(g)}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="list list-tight">${lista.map(ingrediente).join('')}</ul></div>`;
  }).join('');
  return `
    <p class="lead seccion-lead">${esc(INTRO_COCINA)}</p>
    ${subnav([['coc-platos', 'Platos (28)'], ['coc-juegos', 'Minijuegos de cocina'], ['coc-ingredientes', 'Ingredientes (59)']])}
    ${bloque('coc-platos', 'Platos', `
      <h3 class="hitos-tit">Estrellas del bistró <span class="count" data-count="coc-clasicos">${nClasicos}/20</span></h3>
      ${estrellas}
      ${platos}`, {
      meter: medidor('coc-platos', PLATOS_KH3.map((p) => ID.kh3Plato(p.id)), 'Con «Excelente»'),
      lead: `Marca cada plato cuando lo saques con «Excelente». Solo los 20 del menú clásico dan estrellas al bistró. ${chip('ACH_39')} ${chip('ACH_40')}`,
    })}
    ${bloque('coc-juegos', 'Minijuegos de cocina', `<div class="info-cards">${juegos}</div>
      <ul class="recipes">${CONSEJOS_COCINA.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`, {
      lead: 'Cada plato usa uno de estos cuatro. Al final, la pantalla se oscurece y salen chispas rojas: marcan el momento de la última acción.',
    })}
    ${bloque('coc-ingredientes', 'Ingredientes', grupos, {
      meter: medidor('coc-ing', INGREDIENTES_KH3.map((i) => ID.kh3Ingrediente(i.id)), 'Conseguidos'),
      lead: `Se compran en la tienda Moguri, se recogen por los mundos (cajas, arbustos, burbujas en el agua…) o los dan los flanes. ${chip('ACH_38')}`,
    })}
    ${fuentes(FUENTES_COCINA)}`;
}

// Re Mind: episodios, combates de datos, retos PRINCIPIANTE y méritos EXPERTO (con suma de puntos).
const META_RANGO_A = RANGOS_MERITO.at(-1)[1];
// Jefes de mérito desplegados: los 13 datos cuentan uno a uno.
const jefesMeritoKh3 = () => JEFES_MERITO.flatMap((j) => (j.por
  ? DATOS_ORG.map((d) => ({ id: `datos-${d.id}`, mundo: j.mundo, n: `Datos de ${d.n}`, base: j.base }))
  : [j]));
const puntosExpKh3 = () => jefesMeritoKh3().reduce((t, j) => t + (store.hecho(ID.kh3JefeExp(j.id)) ? j.base * 50 : 0), 0);
const fmtNum = (n) => n.toLocaleString('es-ES');
function kh3Remind() {
  const chip = (id) => `<span class="chip chip-logro">Logro «${esc(logroKh3[id].nombre)}»</span>`;
  const pasos = PASOS_REMIND.map((p, i) => `
    <li class="step"><span class="step-n" aria-hidden="true">${i + 1}</span>
      <div class="step-body"><h3>${esc(p.t)}</h3><p>${esc(p.texto)}</p><div class="item-foot">${chip(p.logro)}</div></div></li>`).join('');
  const datos = DATOS_ORG.map((d) => item({
    id: ID.kh3Datos(d.id), titulo: d.n,
    meta: `<span class="chip">Premio: ${esc(d.premio)}</span>${d.tarde ? '<span class="note">Se abre al vencer a los otros once.</span>' : ''}`,
  })).join('');
  const meritos = MERITOS_PRIN.map((m) => item({
    id: ID.kh3Merito(m.id), titulo: `«${m.en}»`, desc: m.pide,
    extra: `<details class="tip"><summary>Cómo conseguirlo</summary><p>${esc(m.como)}</p></details>`,
  })).join('');
  const pts = puntosExpKh3();
  const jefes = jefesMeritoKh3().map((j) => item({
    id: ID.kh3JefeExp(j.id), titulo: j.n, desc: j.mundo,
    meta: `<span class="chip">${fmtNum(j.base)} puntos base · ${fmtNum(j.base * 50)} con todos los códigos</span>`,
  })).join('');
  const codigos = `<div class="sx-tabla-wrap"><table class="sx-tabla">
    <thead><tr><th scope="col">Código</th><th scope="col">Estrellas</th><th scope="col">Qué hace</th></tr></thead>
    <tbody>${CODIGOS_EXP.map(([n, e, t]) => `<tr><th scope="row">«${esc(n)}»</th><td>${'★'.repeat(e)}</td><td>${esc(t)}</td></tr>`).join('')}</tbody>
  </table></div>`;
  const rangos = `<ol class="hitos">${RANGOS_MERITO.map(([r, p]) => `<li class="hito${pts >= p ? ' is-on' : ''}" data-rango-exp="${p}"><b>${r}</b><span>${fmtNum(p)}</span></li>`).join('')}</ol>`;
  return `
    <p class="lead seccion-lead">El contenido descargable de KH III: la historia extra, los trece combates de datos, Yozora y los méritos de los dos menús de códigos.</p>
    ${subnav([['rm-pasos', 'Episodios'], ['rm-datos', 'Datos (13)'], ['rm-prin', 'Méritos PRINCIPIANTE'], ['rm-exp', 'Méritos EXPERTO']])}
    ${bloque('rm-pasos', 'Los tres episodios', `<ol class="steps">${pasos}</ol>`, { lead: 'Van en este orden: cada uno se abre al terminar el anterior.' })}
    ${bloque('rm-datos', 'Datos de la Organización XIII', `<ul class="list">${datos}</ul>`, {
      meter: medidor('rm-datos', DATOS_ORG.map((d) => ID.kh3Datos(d.id)), 'Vencidos'),
      lead: `Marca cada combate al ganarlo. ${chip('ACH_49')} ${chip('ACH_50')}`,
    })}
    ${bloque('rm-prin', 'Méritos de los códigos PRINCIPIANTE', `<ul class="list">${meritos}</ul>`, {
      meter: medidor('rm-prin', MERITOS_PRIN.map((m) => ID.kh3Merito(m.id)), 'Méritos'),
      lead: `Se abren eligiendo la aventura fácil al empezar o al vencer a Yozora. Salvo el de supervivencia, no hace falta activar ningún código; con los dos menús abiertos (tras Yozora) son mucho más fáciles. ${chip('ACH_46')}`,
    })}
    ${bloque('rm-exp', 'Méritos de los códigos EXPERTO', `
      <div class="exp-suma"><span>Puntos con los jefes marcados</span><b data-puntos-exp>${fmtNum(pts)}</b><span>de ${fmtNum(META_RANGO_A)} para el rango A</span></div>
      ${rangos}
      <p class="nota-fuente">${esc(NOTA_RANGO_A)} ${esc(NOTA_RANGO_B)}</p>
      <h3 class="hitos-tit">Consejos</h3>
      <ul class="recipes">${CONSEJOS_EXP.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <h3 class="hitos-tit">Los 13 códigos</h3>${codigos}
      <h3 class="hitos-tit">Jefes que dan puntos</h3>
      <p class="group-intro">Marca cada jefe que hayas vencido con todos los códigos activados (×50) y la suma de arriba se actualiza.</p>
      <ul class="list list-tight">${jefes}</ul>`, {
      lead: `Se ganan venciendo a ciertos jefes con códigos EXPERTO activados: cada estrella de código multiplica por 1,25 los puntos del jefe y, con los trece, el multiplicador es ×50. ${chip('ACH_47')}`,
    })}
    ${fuentes(FUENTES_REMIND)}`;
}

// Adversarios: los 81 tipos de enemigo del gumífono, en su orden, con imagen y dónde salen.
const IMG_ADV = 'assets/img/kh3/adversarios/';
function kh3Adversarios() {
  let n = 0;
  const tarjeta = (a) => {
    n += 1;
    const id = ID.kh3Adversario(a.id);
    const hecho = store.hecho(id);
    return `<li class="item adv${hecho ? ' is-done' : ''}">
      <label class="adv-label">
        <input type="checkbox" class="sr-only check-input" data-id="${esc(id)}"${hecho ? ' checked' : ''}>
        <span class="adv-img"><img src="${IMG_ADV}adv-${a.id}.webp" alt="" loading="lazy"><span class="pf-n">${n}</span><span class="crown">${CORONA}</span></span>
        <span class="adv-txt"><b${a.nombre.startsWith('«') ? '' : ` title="En inglés: ${esc(a.en)}"`}>${esc(a.nombre)}</b>
          ${a.mundos.length ? `<span>${esc(a.mundos.join(' · '))}</span>` : ''}
          ${a.nota ? `<span class="adv-nota">${esc(a.nota)}</span>` : ''}</span>
      </label>
    </li>`;
  };
  const tipos = [...new Set(ADVERSARIOS_KH3.map((a) => a.tipo))];
  const grupos = tipos.map((t) => {
    const lista = ADVERSARIOS_KH3.filter((a) => a.tipo === t);
    const ids = lista.map((a) => ID.kh3Adversario(a.id));
    medidores[`adv-${slug(t)}`] = ids;
    return `<div class="group"><h3>${esc(t)} <span class="count" data-count="adv-${slug(t)}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="adv-grid">${lista.map(tarjeta).join('')}</ul></div>`;
  }).join('');
  return `
    <p class="lead seccion-lead">Para «Conoce a tu enemigo» basta con derrotar al menos a uno de cada tipo. Están en el orden del gumífono, con su número, para que encuentres el que te falte. Los flanes solo salen al volver a su mundo y varios enemigos solo aparecen en los portales de batalla, después de la historia. <span class="chip chip-logro">Logro «${esc(logroKh3.ACH_16.nombre)}»</span></p>
    ${bloque('adv', 'Adversarios', grupos, { meter: medidor('adv-total', ADVERSARIOS_KH3.map((a) => ID.kh3Adversario(a.id)), 'Derrotados') })}
    ${fuentes(['ppxAdversarios', 'khwMateriales', 'wesEnemigos'])}`;
}

// Jefes de la historia y de Re Mind (misma tarjeta que los jefes de KH FM).
function jefeKh3({ id, n, img, premio, t, nota, logro }, mundo) {
  const chips = [premio ? `<li class="chip">Premio: ${esc(premio)}</li>` : '', logro ? `<li class="chip chip-logro">Logro «${esc(logroKh3[logro].nombre)}»</li>` : ''].join('');
  return `
    <article class="boss boss-khfm">
      <div class="boss-main">
        <div class="boss-art"><img src="${IMG_JEFES_KH3}${img}.webp" alt="" loading="lazy"></div>
        <div class="boss-body">
          <p class="boss-world">${esc(mundo)}</p>
          <h3>${esc(n)}</h3>
          ${chips ? `<ul class="boss-premios" aria-label="Recompensas">${chips}</ul>` : ''}
          ${nota ? `<p class="boss-abre">${esc(nota)}</p>` : ''}
          ${marca(id, 'Vencido', 'boss-marca')}
        </div>
      </div>
      ${t ? `<details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(t)}</p></details>` : ''}
    </article>`;
}
function kh3Jefes() {
  const mundos = JEFES_KH3.map((g) => {
    const ids = g.jefes.map((j) => ID.kh3Jefe(j.id));
    medidores[`jefes-${slug(g.mundo)}`] = ids;
    return `<div class="group"><h3>${esc(g.mundo)} <span class="count" data-count="jefes-${slug(g.mundo)}">${store.contar(ids)}/${ids.length}</span></h3>
      <div class="bosses">${g.jefes.map((j) => jefeKh3({ ...j, id: ID.kh3Jefe(j.id), img: j.img ?? j.id }, g.mundo)).join('')}</div></div>`;
  }).join('');
  const datos = DATOS_ORG.map((d) => jefeKh3({
    id: ID.kh3Datos(d.id), n: `Datos de ${d.n}`, img: `datos-${d.id}`, premio: d.premio, t: DATOS_ESTRATEGIA[d.id],
    nota: d.tarde ? 'Se abre al vencer a los otros once.' : '',
  }, 'Episodio Limitcut')).join('');
  const yozora = jefeKh3({ id: ID.kh3Logro('ACH_51'), n: 'Yozora', img: 'yozora', premio: YOZORA.premio, t: YOZORA.t, logro: 'ACH_51' }, 'Episodio secreto');
  return `
    <p class="lead seccion-lead">Los jefes de la historia, mundo a mundo, con su premio y cómo vencerlos, y los combates de Re Mind. La estrategia está resumida de KHWiki; algunos jefes no tienen estrategia allí y solo llevan su premio.</p>
    ${subnav([['jefes-historia', 'Historia'], ['jefes-remind', 'Re Mind']])}
    ${bloque('jefes-historia', 'Jefes de la historia', mundos, { meter: medidor('jefes-kh3', idsJefesKh3(), 'Vencidos') })}
    ${bloque('jefes-remind', 'Re Mind: datos y Yozora', `<div class="bosses">${datos}${yozora}</div>`, {
      meter: medidor('jefes-datos', DATOS_ORG.map((d) => ID.kh3Datos(d.id)), 'Datos vencidos'),
      lead: 'Las marcas son las mismas que en la sección Re Mind. Son los combates más difíciles del juego: aquí van los consejos clave de cada uno.',
    })}
    ${fuentes(FUENTES_JEFES_KH3)}`;
}

const SECCIONES_KH3 = [
  { id: 'portafortuna', titulo: 'Portafortuna', desc: 'Los 90, con captura de cada uno, y sus premios.', img: `${IMG_PF}pf-villa-1.webp`, ids: () => idsPf(), html: kh3Portafortuna },
  { id: 'tesoros', titulo: 'Tesoros', desc: 'Los 245 cofres del gumífono, mundo a mundo y con cómo llegar a cada uno.', img: `${IMG_TES}cofre-olimpo.webp`, ids: () => idsTesKh3(), html: kh3Tesoros },
  { id: 'orfebreria', titulo: 'Orfebrería', desc: 'Los 88 objetos con su receta, las 20 misiones fotográficas y los 60 materiales con sus enemigos.', img: `${IMG_SINT}lucid-crystal.webp`, ids: () => idsOrf(), html: kh3Orfebreria },
  { id: 'minijuegos', titulo: 'Minijuegos', desc: 'Siete Flantásticos, los minijuegos de los mundos, el Reino clásico y los récords.', img: `${IMG_ARTEMA}flan-cereza.webp`, ids: () => idsMiniKh3(), html: kh3Minijuegos },
  { id: 'gumi', titulo: 'Nave gumi', desc: 'Las 9 constelaciones, los 36 tesoros de los combates y Schwarzgeist.', img: `${IMG_GUMI3}golden-highwind.webp`, ids: () => idsGumiKh3(), html: kh3Gumi },
  { id: 'cocina', titulo: 'Cocina', desc: 'Los 28 platos con su minijuego, las estrellas del bistró y los 59 ingredientes.', img: `${IMG_TES}icono-cocina.webp`, ids: () => idsCocinaKh3(), html: kh3Cocina },
  { id: 'jefes', titulo: 'Jefes', desc: 'Los jefes de la historia con su premio y cómo vencerlos, y los combates de datos y Yozora.', img: `${IMG_JEFES_KH3}maestro.webp`, ids: () => [...idsJefesKh3(), ...DATOS_ORG.map((d) => ID.kh3Datos(d.id)), ID.kh3Logro('ACH_51')], html: kh3Jefes },
  { id: 'remind', titulo: 'Re Mind', desc: 'Los tres episodios, los 13 combates de datos, Yozora y los méritos de los códigos.', img: 'assets/img/logos/kh3-remind.webp', ids: () => idsRemindKh3(), html: kh3Remind },
  { id: 'adversarios', titulo: 'Adversarios', desc: 'Los 81 tipos de enemigo del gumífono, con su imagen y dónde salen.', img: `${IMG_ADV}adv-shadow.webp`, ids: () => ADVERSARIOS_KH3.map((a) => ID.kh3Adversario(a.id)), html: kh3Adversarios },
  { id: 'artema', titulo: 'Arma Artema', desc: 'Receta, los 7 Orichalcum+, cristales y mejoras.', img: `${IMG_ARTEMA}arma-artema.webp`, ids: () => idsArtema(), html: kh3Artema },
];
const seccionKh3 = (id) => SECCIONES_KH3.find((s) => s.id === id);

function vistaKH3() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: KH3.nombre }]);
  return `
  <section class="page juego-kh3" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${KH3.logo}" alt="Kingdom Hearts III" width="720" height="438">
      <div class="game-hero-stats">
        ${medidor('kh3-logros', logrosKH3(), ETQ_LOGROS)}
        ${medidor('kh3-100', juegoKH3(), ETQ_JUEGO)}
      </div>
    </header>
    ${selectorModo('kh3-modo-logros', logrosKH3(), 'kh3-modo-100', juegoKH3(), { subLogros: 'Los 51 logros oficiales', subJuego: 'Lo que llevas preparado' })}
    ${modo() === 'logros' ? kh3Logros() : `<div class="secciones-khfm">${SECCIONES_KH3.map((s) => `
      <a class="seccion-khfm" href="#/kh3/${s.id}">
        <span class="seccion-art"><img src="${esc(s.img)}" alt="" loading="lazy"></span>
        <span class="seccion-cuerpo"><span class="seccion-titulo">${esc(s.titulo)}</span><span class="seccion-desc">${esc(s.desc)}</span>
          ${medidor(`kh3-sec-${s.id}`, s.ids(), 'Progreso')}</span>
      </a>`).join('')}</div>`}
  </section>`;
}

function vistaSeccionKH3(s) {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: KH3.nombre, href: '#/kh3' }, { t: s.titulo }]);
  const i = SECCIONES_KH3.indexOf(s);
  const ant = SECCIONES_KH3[i - 1];
  const sig = SECCIONES_KH3[i + 1];
  return `
  <section class="page juego-kh3 seccion-pagina">
    <header class="seccion-head">
      <img class="seccion-head-art" src="${esc(s.img)}" alt="" width="72" height="72">
      <div class="seccion-head-txt">
        <p class="seccion-juego"><a href="#/kh3">${esc(KH3.nombre)}</a></p>
        <h1 class="page-title">${esc(s.titulo)}</h1>
      </div>
      ${medidor(`kh3-pag-${s.id}`, s.ids(), 'Progreso de la sección')}
    </header>
    ${s.html()}
    <nav class="seccion-nav" aria-label="Otras secciones">
      ${ant ? `<a href="#/kh3/${ant.id}"><small>Anterior</small><b>${esc(ant.titulo)}</b></a>` : '<span></span>'}
      ${sig ? `<a class="seccion-sig" href="#/kh3/${sig.id}"><small>Siguiente</small><b>${esc(sig.titulo)}</b></a>` : '<a class="seccion-sig" href="#/kh3"><small>Volver</small><b>Portada del juego</b></a>'}
    </nav>
  </section>`;
}

// ---------- KH II Final Mix ----------
const GRUPO_A_SECCION_KH2FM = { mundos: 'mundos', diario: 'diario', coleccion: 'sora' };
function kh2fmLogros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.kh2fmLogro);
    medidores[`kh2fm-g-${g.id}`] = ids;
    const sec = seccionKh2fm(GRUPO_A_SECCION_KH2FM[g.id]);
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="kh2fm-g-${g.id}">${store.contar(ids)}/${ids.length}</span>
        ${sec ? `<a class="ir-seccion" href="#/kh2fm/${sec.id}">Ver la sección ${esc(sec.titulo)}</a>` : ''}</h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroKh2fm[id], 'kh2fm')).join('')}</ul>
    </div>`;
  };
  return `
    ${subnav([['ruta', 'Antes de empezar'], ['logros', 'Logros']])}
    ${bloque('ruta', 'Antes de empezar', `<ol class="steps">${rutaPasos(RUTA_KH2FM, logroKh2fm)}</ol>`, { lead: 'Lo que conviene saber antes de la primera partida.' })}
    ${bloque('logros', 'Los 50 logros', `${GRUPOS_LOGROS_KH2FM.map(grupo).join('')}${fuentes(FUENTES_CONSEJOS_KH2FM)}`, {
      meter: medidor('kh2fm-logros-lista', logrosKH2FM(), 'Logros'),
      lead: 'Abre «Cómo conseguirlo» donde lo haya. Los logros ocultos esconden su descripción hasta que la abras.',
    })}`;
}

// Cofres y piezas de puzle de un mundo, con enlace a su sección.
function tesorosDe(id) {
  const cofres = TESOROS_KH2FM.find((w) => w.id === id)?.cofres.length ?? 0;
  const piezas = PUZLES_KH2FM.reduce((n, p) => n + p.piezas.filter((x) => x.mundo === id).length, 0);
  if (!cofres && !piezas) return null;
  const partes = [cofres && `${cofres} ${cofres === 1 ? 'cofre' : 'cofres'}`, piezas && `${piezas} ${piezas === 1 ? 'pieza' : 'piezas'} de puzle`].filter(Boolean);
  return ['Tesoros', `${partes.join(' y ')} · <a href="#/kh2fm/tesoros">sección Tesoros</a>`];
}

// Cada mundo: sus logros de historia (marcables) y lo que hay allí. Los que no tienen logro solo informan.
function kh2fmMundos() {
  const mundo = (m) => {
    const ids = m.logros.map(ID.kh2fmLogro);
    const clave = `kh2fm-mundo-${m.id}`;
    medidores[clave] = ids;
    const datos = [
      m.esencia && ['Esencia intangible', esc(m.esencia)],
      m.setas && ['Micorganización XIII', m.setas.map(([n, d]) => `<b>N.º ${n}</b> · ${esc(d)}`).join('<br>')],
      m.mini && ['Minijuegos y misiones', m.mini.map(esc).join(' · ')],
      m.secretos && ['Jefes secretos', esc(m.secretos)],
      m.mickey && ['Mickey puede rescatarte en', m.mickey.map(esc).join(' · ')],
      tesorosDe(m.id),
    ].filter(Boolean);
    return `
    <article class="mundo-kh2" id="mundo-${m.id}">
      <h3>${esc(m.nombre)}${ids.length ? ` <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span>` : ''}</h3>
      ${ids.length ? `<ul class="list">${m.logros.map((id) => itemLogro(logroKh2fm[id], 'kh2fm')).join('')}</ul>` : '<p class="mundo-sin">Sin logro de historia propio.</p>'}
      ${datos.length ? `<dl class="mundo-datos">${datos.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl>` : ''}
    </article>`;
  };
  return seccionSimple(`
    <nav class="subnav" aria-label="Mundos">${MUNDOS_KH2FM.map((m) => `<a href="#mundo-${m.id}" data-goto="mundo-${m.id}">${esc(m.nombre)}</a>`).join('')}</nav>
    <div class="mundos-kh2">${MUNDOS_KH2FM.map(mundo).join('')}</div>
    ${fuentes(FUENTES_MUNDOS_KH2FM)}`,
  'Los mundos en el orden de la Wiki ES. Cada logro de historia salta al terminar los episodios de su mundo; marcarlo aquí también lo marca en Logros, y al revés. Debajo, lo que hay en cada mundo: Esencias intangibles, setas de la Micorganización XIII, minijuegos y los jefes donde Mickey puede rescatarte.');
}

// Diario de Pepito: lo que tiene lista con fuente es marcable uno a uno; Personajes y Relaciones, solo su logro.
const chipLogroKh2 = (id) => `<p class="info-logro"><span class="chip chip-logro">Logro: ${esc(logroKh2fm[id].nombre)}</span></p>`;
function kh2fmDiario() {
  const informes = INFORMES_ANSEM_KH2FM.map((x) => item({ id: ID.kh2fmAnsem(x.n), titulo: `Informe Ansem ${x.n}`, desc: x.como })).join('');
  const sincorazon = SINCORAZON_KH2FM.map((g) => {
    const ids = idsSincorazonKh2fm(g);
    const intro = `<p class="group-intro">${esc(g.intro)}</p>`;
    const filas = g.items.some(([, d]) => d)
      ? g.items.map(([n, d]) => item({ id: ID.kh2fmSincorazon(n), titulo: n, desc: d })).join('')
      : `<li class="marcas-diario">${g.items.map(([n]) => marca(ID.kh2fmSincorazon(n), esc(n))).join('')}</li>`;
    return grupoKhfm(`kh2fm-sc-${g.id}`, esc(g.titulo), ids, filas, intro);
  }).join('');
  const limites = LIMITES_KH2FM.map((g) => grupoKhfm(`kh2fm-lim-${g.id}`, esc(g.titulo), idsLimitesKh2fm(g), g.items.map((l) => item({
    id: ID.kh2fmLimite(l.n), titulo: l.n, desc: l.como ?? '', meta: `<span class="chip">${esc(l.quien)}</span>`,
  })).join(''))).join('');
  const apartados = APARTADOS_SIN_LISTA.map((a) => `
    <div class="group"><h3>${esc(a.titulo)}</h3><p class="group-intro">${esc(a.texto)}</p>
      <ul class="list">${itemLogro(logroKh2fm[a.logro], 'kh2fm')}</ul></div>`).join('');
  return `
    <p class="lead seccion-lead">${esc(INTRO_DIARIO_KH2FM)}</p>
    ${subnav([['diario-ansem', 'Informes Ansem'], ['diario-sincorazon', 'Sincorazón'], ['diario-incorporeos', 'Incorpóreos'], ['diario-limites', 'Límites'], ['diario-personajes', 'Personajes y relaciones']])}
    ${bloque('diario-ansem', 'Informes Ansem', `<ul class="list">${informes}</ul>${chipLogroKh2('ACH_134')}${fuentes(['khwikiAnsem', 'guiaSteamKh2fmEn', 'guiaSteamKh2fm'])}`, {
      meter: medidor('kh2fm-ansem', idsAnsemKh2fm(), 'Informes'),
      lead: 'Los 13 salen solos con la historia: el último, al vencer a Xemnas por primera vez.',
    })}
    ${bloque('diario-sincorazon', 'Sincorazón', `${sincorazon}<p class="nota-fuente">${esc(NOTA_SINCORAZON)}</p>${chipLogroKh2('ACH_136')}${fuentes(['guiaSteamKh2fm', 'guiaSteamKh2fmEn', 'wikiEsJefesKh2', 'wikiEsIluminador', 'wikiEsSincorazon', 'khwikiPerplex'])}`, {
      meter: medidor('kh2fm-sincorazon', idsSincorazonKh2fm(), 'Sincorazón'),
      lead: 'Cada tipo con los mundos donde sale. Los de la Gruta de la Evocación y la Micorganización XIII son lo último.',
    })}
    ${bloque('diario-incorporeos', 'Incorpóreos', `<ul class="list"><li class="marcas-diario">${INCORPOREOS_KH2FM.map((n) => marca(ID.kh2fmIncorporeo(n), esc(n))).join('')}</li></ul>${chipLogroKh2('ACH_137')}${fuentes(['guiaSteamKh2fmEn', 'guiaSteamKh2fm', 'wikiEsIncorporeos'])}`, {
      meter: medidor('kh2fm-incorporeos', idsIncorporeosKh2fm(), 'Incorpóreos'),
      lead: 'Los 11 se completan solos al final de la historia principal.',
    })}
    ${bloque('diario-limites', 'Límites', `${limites}${chipLogroKh2('ACH_143')}${fuentes(['guiaSteamKh2fm', 'khwikiLimites', 'wikiEsJefesKh2'])}`, {
      meter: medidor('kh2fm-limites', idsLimitesKh2fm(), 'Límites'),
      lead: 'Hay que activar cada límite al menos una vez. Los de aliado piden tener su habilidad equipada en ese aliado; los de invocación gastan barra de invocación. El del Genio cambia según su forma.',
    })}
    ${bloque('diario-personajes', 'Personajes y relaciones', `${apartados}${fuentes(['guiaSteamKh2fm', 'khwikiDiario'])}`, {
      lead: 'No hay una lista con fuente de cada ficha, así que aquí solo va lo que pide cada apartado. Marcar su logro aquí también lo marca en Logros.',
    })}`;
}

// Tesoros, puzles y mapas. Las zonas traducidas por nosotros llevan subrayado de puntos y el inglés al pasar el ratón.
const COFRE_GEN = '<svg class="tes-cofre tes-cofre-gen" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/><path d="M4 11h16M10 11v3h4v-3"/></svg>';
const PIEZA_GEN = '<svg class="tes-cofre tes-cofre-gen" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h5a2 2 0 1 1 4 0h5v5a2 2 0 1 0 0 4v6h-6a2 2 0 1 0-4 0H5v-6a2 2 0 1 1 0-4Z"/></svg>';
const nombreMundoKh2 = Object.fromEntries(MUNDOS_KH2FM.map((m) => [m.id, m.nombre.replace(' / Vergel Radiante', '')]));
const zonaTitKh2 = (x) => `<h4${x.zt ? ` class="tes-trad" title="Traducción propia; en inglés: ${esc(x.en)}"` : ''}>${esc(x.zona)}</h4>`;
const notaTrad = (en, t = 'Nombre traducido') => `<span class="note" title="En inglés: ${esc(en)}">${t}</span>`;
// Agrupa en tramos seguidos de la misma zona (mantiene el orden de la fuente).
const tramosZona = (lista) => lista.reduce((acc, x) => {
  const ult = acc.at(-1);
  if (ult && ult.zona === x.zona) ult.items.push(x); else acc.push({ ...x, items: [x] });
  return acc;
}, []);
function desplegableKh2(id, icono, titulo, clave, ids, cuerpo) {
  medidores[clave] = ids;
  return `
    <details class="tes-mundo" id="${id}">
      <summary>${icono}<span class="tes-nombre">${titulo}</span>
        <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></summary>
      ${cuerpo}
    </details>`;
}
function kh2fmTesoros() {
  const cofre = (w, c) => item({
    id: ID.kh2fmTesoro(w.id, c.n),
    titulo: c.obj ?? c.mapa,
    desc: c.como,
    meta: [c.mapa && '<span class="chip">Mapa</span>', c.visita && `<span class="chip">${esc(c.visita)}</span>`, c.fm && chipFM('Final Mix'),
      c.objt && notaTrad(c.objt)].filter(Boolean).join(' '),
  });
  const mundos = TESOROS_KH2FM.map((w) => desplegableKh2(`tes-${w.id}`, COFRE_GEN, esc(w.nombre), `kh2fm-tes-${w.id}`, idsTesorosKh2fm(w),
    `<div class="tes-zonas">${tramosZona(w.cofres).map((z) => `
      <div class="tes-zona">${zonaTitKh2(z)}<ul class="list list-tight">${z.items.map((c) => cofre(w, c)).join('')}</ul></div>`).join('')}</div>`)).join('');
  const puzles = PUZLES_KH2FM.map((p) => {
    const porMundo = MUNDOS_KH2FM.map((m) => [m.id, p.piezas.filter((x) => x.mundo === m.id)]).filter(([, l]) => l.length);
    return desplegableKh2(`puz-${p.id}`, PIEZA_GEN, `${esc(p.nombre)} <small class="tes-premio">${p.piezas.length} piezas · premio: ${esc(p.premio)}</small>`,
      `kh2fm-puz-${p.id}`, idsPuzlesKh2fm(p), `
      <div class="tes-resuelto">${marca(idPuzleResuelto(p), `Puzle resuelto en el diario · ${esc(p.premio)}`)}</div>
      <div class="tes-zonas">${porMundo.map(([mid, l]) => `
        <div class="tes-zona"><h4>${esc(nombreMundoKh2[mid])}</h4><ul class="list list-tight">${l.map((x) => item({
          id: ID.kh2fmPieza(p.id, x.n), titulo: `Pieza ${x.n} · ${x.zona}`, desc: x.nota ?? '', meta: x.zt ? notaTrad(x.en, 'Zona traducida') : '',
        })).join('')}</ul></div>`).join('')}</div>`);
  }).join('');
  const mapas = MUNDOS_KH2FM.map((m) => [m, MAPAS_KH2FM.filter((x) => x.mundo === m.id)]).filter(([, l]) => l.length).map(([m, l]) => `
    <div class="tes-zona"><h4>${esc(nombreMundoKh2[m.id])}</h4><ul class="list list-tight">${l.map((x) => item({
      id: idMapaKh2fm(x), titulo: x.nombre, desc: x.como,
      meta: [x.fm && chipFM('Final Mix'), x.nt && notaTrad(x.en)].filter(Boolean).join(' '),
    })).join('')}</ul></div>`).join('');
  return `
    <p class="lead seccion-lead">Todo lo que piden los apartados Tesoros, Puzles y Mapas del diario de Pepito.</p>
    ${subnav([['kh2-tesoros', 'Tesoros'], ['kh2-puzles', 'Puzles'], ['kh2-mapas', 'Mapas']])}
    ${bloque('kh2-tesoros', 'Tesoros', `<p class="nota-fuente">${esc(NOTA_TESOROS_KH2FM)}</p><div class="tes-mundos">${mundos}</div>${chipLogroKh2('ACH_138')}
      ${fuentes(['fandomCofresKh2', 'guiaMegido', 'eliteguiasKh2', 'khworldKh2', 'joakokhKh2', 'wikiEsMateriales', 'wikiEsReceta', 'wikiEsViejaMansion', 'wikiEsCastilloInexistente', 'wikiEsGruta', 'wikiEsAmuletoPlumas', 'guiaSteamKh2fm'])}`, {
      meter: medidor('kh2fm-tesoros', idsTesorosKh2fm(), 'Cofres'), lead: esc(INTRO_TESOROS_KH2FM),
    })}
    ${bloque('kh2-puzles', 'Puzles', `<p class="nota-fuente">${esc(NOTA_PUZLES_KH2FM)}</p><div class="tes-mundos">${puzles}</div>${chipLogroKh2('ACH_139')}
      ${fuentes(['khwikiPuzzle', 'guiaMegido', 'eliteguiasKh2', 'joakokhKh2', 'wikiEsReceta', 'wikiEsAnilloSupremo', 'wikiEsCorona'])}`, {
      meter: medidor('kh2fm-puzles', idsPuzlesKh2fm(), 'Piezas y puzles'), lead: esc(INTRO_PUZLES_KH2FM),
    })}
    ${bloque('kh2-mapas', 'Mapas', `<div class="tes-zonas tes-mapas">${mapas}</div>${chipLogroKh2('ACH_140')}${fuentes(['khwikiMap', 'guiaMegido', 'eliteguiasKh2'])}`, {
      meter: medidor('kh2fm-mapas', idsMapasKh2fm(), 'Mapas'), lead: esc(INTRO_MAPAS_KH2FM),
    })}`;
}

// Orfebrería Moguri: Arma Artema con sus 7 Orichalcum+, objetos por lo que los abre, materiales con sus enemigos y listas.
const imgOrf = (id, n = 22) => `<img src="${IMG_ORF_KH2}${id}.webp" alt="" width="${n}" height="${n}" loading="lazy">`;
// Orichalcum+ de un cofre: misma marca que ese cofre de Tesoros; el de la Copa Diosa del Destino, la de su logro.
function idOricalcoKh2(o) {
  if (o.logro) return ID.kh2fmLogro(o.logro);
  if (o.cofre) {
    const w = TESOROS_KH2FM.find((x) => x.id === o.cofre);
    const c = w.cofres.find((x) => x.obj === 'Orichalcum+');
    return ID.kh2fmTesoro(w.id, c.n);
  }
  return ID.kh2fmOricalco(o.id);
}
const idsOricalcosKh2 = () => ORICALCOS_KH2FM.map(idOricalcoKh2);
function kh2fmOrfebreria() {
  const idsOri = idsOricalcosKh2();
  medidores['kh2-ori'] = idsOri;
  const artema = SINTESIS_KH2FM.find((o) => o.en === 'Ultima Weapon');
  const gemas = ORICALCOS_KH2FM.map((o, i) => {
    const id = idOricalcoKh2(o);
    return `<a class="gema${store.hecho(id) ? ' is-on' : ''}" data-gema="${id}" href="#ori2-${o.id}" data-goto="ori2-${o.id}" style="--i:${i}" title="${esc(o.titulo)}">
      <img src="${IMG_ORF_KH2}orichalcum-plus.webp" alt="${esc(o.titulo)}" width="40" height="40"></a>`;
  }).join('');
  const receta = (o) => `<span class="rec">${o.mats.map((m) => `<span class="rec-mat">${imgOrf(matKh2PorNombre[m.m]?.img ?? '', 22)}${m.n} × ${esc(m.m)}</span>`).join('')}</span>`;
  const objeto = (o) => [item({
    id: ID.kh2fmSintesis(o.id), titulo: o.nombre, icono: `${IMG_ORF_KH2}${o.img}.webp`,
    meta: `<span class="chip">Rango ${o.rangos ? o.rangos.join(' o ') : o.rango}</span>${o.rangos ? '<span class="note">Las páginas de KHWiki no coinciden en su rango.</span>' : ''}${o.receta ? `<span class="chip">${esc(o.receta)}</span>` : ''}${receta(o)}
      ${o.donde ? `<span class="note">${esc(o.donde)}</span>` : ''}${o.en === 'Ultima Weapon' ? `<span class="note">${esc(ARMA_ARTEMA_KH2FM.truco)}</span>` : ''}`,
  }), o.mejora ? item({
    id: ID.kh2fmSintesis(o.mejora.id), titulo: o.mejora.nombre, icono: `${IMG_ORF_KH2}${o.mejora.img}.webp`,
    meta: `<span class="chip">Mejora</span><span class="note">En Creaciones, a partir de ${esc(o.nombre)} añadiendo ${esc(o.mejora.con)} (moguri nivel 3).</span>`,
  }) : ''].join('');
  const grupo = (clave, titulo, lista, intro = '') => {
    const ids = lista.flatMap((o) => [ID.kh2fmSintesis(o.id), ...(o.mejora ? [ID.kh2fmSintesis(o.mejora.id)] : [])]);
    medidores[clave] = ids;
    return `<div class="group orf-grupo"><h3>${titulo} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      ${intro ? `<p class="group-intro">${esc(intro)}</p>` : ''}<ul class="list orf-lista">${lista.map(objeto).join('')}</ul></div>`;
  };
  const objetos = [
    grupo('kh2-orf-recetas', 'Con receta', SINTESIS_KH2FM.filter((o) => o.receta).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')),
      'Cada receta abre un objeto y su mejora. Dónde está cada receta, debajo de sus materiales.'),
    ...GRUPOS_LIBRE_KH2FM.map((g) => grupo(`kh2-orf-${g.id}`, esc(g.titulo), SINTESIS_KH2FM.filter((o) => o.libre === g.id), g.texto)),
  ].join('');
  const material = (m) => item({
    id: ID.kh2fmMaterial(m.id), titulo: m.nombre, icono: `${IMG_ORF_KH2}${m.img}.webp`,
    meta: `<span class="chip">Rango ${m.rango}</span><span class="mat-vias">${m.enem.length ? `<span><b>Enemigos:</b> ${m.enem.map((e) => `${esc(e.e)}${e.p ? ` (${esc(e.p)})` : ''}`).join(', ')}.</span>` : ''}
      ${m.otra ? `<span>${esc(m.otra)}</span>` : ''}</span>`,
  });
  const idsMat = MATERIALES_KH2FM.map((m) => ID.kh2fmMaterial(m.id));
  const oricalco = (o) => item({
    id: idOricalcoKh2(o), titulo: o.titulo, desc: o.como, icono: `${IMG_ORF_KH2}orichalcum-plus.webp`,
    meta: [o.cofre && '<span class="chip">Cofre de Tesoros (misma marca)</span>', o.logro && `<span class="chip chip-logro">Misma marca que el logro «${esc(logroKh2fm[o.logro].nombre)}»</span>`].filter(Boolean).join(''),
  }).replace('<li class="item', `<li id="ori2-${o.id}" class="item`);
  return `
    <p class="lead seccion-lead">${esc(INTRO_ORF_KH2FM)}</p>
    <section class="forja">
      <div class="anillo" style="--n:${ORICALCOS_KH2FM.length}">
        <img class="anillo-arma" src="${IMG_ORF_KH2}arma-artema.webp" alt="Arma Artema de Kingdom Hearts II" width="480" height="480">
        ${gemas}
      </div>
      <div class="forja-txt">
        <h2 class="forja-tit">Arma Artema</h2>
        <p class="lead">${esc(ARMA_ARTEMA_KH2FM.receta)}</p>
        <p class="forja-n"><b data-count="kh2-ori">${store.contar(idsOri)}/${ORICALCOS_KH2FM.length}</b> Orichalcum+ conseguidos</p>
        <ul class="receta forja-receta" aria-label="Receta">${artema.mats.map((m) => `<li class="mat-chip">${imgOrf(matKh2PorNombre[m.m]?.img ?? '', 22)}<b>×${m.n}</b> ${esc(m.m)}</li>`).join('')}</ul>
        <p class="nota-fuente">${esc(ARMA_ARTEMA_KH2FM.truco)}</p>
        <div class="forja-pasos">${marca(ID.kh2fmSintesis(artema.id), 'Fabricar el Arma Artema')}</div>
      </div>
    </section>
    ${subnav([['kh2-oricalcos', 'Los 7 Orichalcum+'], ['kh2-objetos', 'Objetos'], ['kh2-materiales', 'Materiales'], ['kh2-moguri', 'Nivel y listas']])}
    ${bloque('kh2-oricalcos', 'Los 7 Orichalcum+', `<ul class="list">${ORICALCOS_KH2FM.map(oricalco).join('')}</ul>${fuentes(FUENTES_ARTEMA_KH2FM)}`, {
      meter: medidor('kh2-ori-lista', idsOri, 'Orichalcum+'), lead: 'Hay justo siete en todo el juego. Los de cofre comparten la marca con la sección Tesoros.',
    })}
    ${bloque('kh2-objetos', 'Los 59 objetos', `${objetos}${chipLogroKh2('ACH_144')}${fuentes(['khwikiSintesisKh2', 'guiaMegidoSintesis', 'wikiEsReceta', 'wikiEsArmaduras', 'wikiEsAnilloSupremo'])}`, {
      meter: medidor('kh2-orf-objetos', idsSintesisKh2fm(), 'Fabricados'),
      lead: 'Con sus materiales en Final Mix. Las mejoras salen en Creaciones añadiendo un material sereno de su mismo rango.',
    })}
    ${bloque('kh2-materiales', 'Los 60 materiales', `<ul class="list orf-lista">${MATERIALES_KH2FM.map(material).join('')}</ul>${fuentes(['fandomMaterialesKh2', 'guiaSteamKh2fm', 'guiaSteamSintesisKh2'])}`, {
      meter: medidor('kh2-orf-materiales', idsMat, 'Entregados'),
      lead: 'Probabilidad de que lo suelte cada enemigo (Fandom). Los materiales se entregan solos al abrir la orfebrería; entregar uno de cada tipo da un Orichalcum+.',
    })}
    ${bloque('kh2-moguri', 'Nivel del moguri y listas de colección', `
      <div class="group"><h3>Niveles del moguri</h3><ul class="bullets">${NIVELES_MOGURI.map(([n, t]) => `<li><b>Nivel ${n}:</b> ${esc(t)}</li>`).join('')}</ul>
        <p class="nota-fuente">${esc(NOTA_ESPECIALES)}</p></div>
      <div class="group"><h3>Listas de colección</h3><div class="sx-tabla-wrap"><table class="sx-tabla">
        <thead><tr><th scope="col">Requisito</th><th scope="col">Premio</th></tr></thead>
        <tbody>${COLECCION_KH2FM.map(([r, p]) => `<tr><td>${esc(r)}</td><td>${esc(p)}</td></tr>`).join('')}</tbody></table></div>
        <p class="nota-fuente">${esc(NOTA_COLECCION)}</p></div>
      ${fuentes(['khwikiSintesisKh2', 'guiaMegidoSintesis', 'guiaSteamKh2fm'])}`, {
      lead: 'Cada objeto fabricado da experiencia al moguri, y cada nivel abre ventajas.',
    })}`;
}

// Sora: formas de fusión (una casilla por nivel), invocaciones, magia y nivel.
const MARCA_NIVEL = ['Conseguida', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5', 'Nivel 6', 'Nivel 7'];
const NUM_CREC = { 3: 1, 5: 2, 7: 3 };
function kh2fmSora() {
  const forma = (f) => {
    const ids = idsFusionKh2(f);
    const clave = `kh2-fus-${f.id}`;
    medidores[clave] = ids;
    const premio = (n) => (n === 1 ? '' : f.habs[n] ?? `${f.crec} ${NUM_CREC[n]}`);
    return `
    <article class="boss forma-kh2" id="fus-${f.id}">
      <header class="forma-head"><h3>${esc(f.nombre)}</h3><span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></header>
      <dl class="mundo-datos">
        <div><dt>Cómo se consigue</dt><dd>${esc(f.consigue)}</dd></div>
        <div><dt>Cómo sube</dt><dd>${esc(f.exp)}</dd></div>
        <div><dt>Dónde subirla</dt><dd>${esc(f.donde)}</dd></div>
      </dl>
      <div class="niveles-forma">${MARCA_NIVEL.map((t, i) => marca(ids[i], `<b>${t}</b>${premio(i + 1) ? ` · ${esc(premio(i + 1))}` : ''}`)).join('')}</div>
    </article>`;
  };
  const invoc = INVOCACIONES_KH2FM.map((x) => item({
    id: ID.kh2fmInvoc(x.id), titulo: x.nombre, desc: x.como,
    meta: `<span class="chip">${esc(x.amuleto)}</span>${x.amuletoT ? `<span class="note" title="En inglés: ${esc(x.amuletoT)}">Nombre traducido</span>` : ''}`,
  })).join('');
  const nivelesInvoc = [2, 3, 4, 5, 6, 7].map((n) => marca(ID.kh2fmInvocNivel(n), `<b>Nivel ${n}</b>`)).join('');
  medidores['kh2-invoc'] = idsInvocKh2();
  const magia = (m) => {
    const ids = [1, 2, 3].map((n) => ID.kh2fmMagia(m.id, n));
    const clave = `kh2-mag-${m.id}`;
    medidores[clave] = ids;
    return `<div class="group"><h3>${esc(m.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/3</span></h3>
      <ul class="bullets">${m.de.map((d) => `<li>${esc(d)}.</li>`).join('')}</ul>
      <div class="niveles-forma">${[m.nombre, `${m.nombre}+`, `${m.nombre}++`].map((t, i) => marca(ids[i], `<b>${esc(t)}</b>`)).join('')}</div></div>`;
  };
  return `
    <p class="lead seccion-lead">Las cinco formas de fusión con lo que da cada nivel, las cuatro invocaciones, los seis hechizos y el nivel 99. Muchas piezas de puzle y la Gruta de la Evocación piden las habilidades de crecimiento de las formas al máximo.</p>
    ${subnav([['kh2-formas', 'Formas'], ['kh2-invoc', 'Invocaciones'], ['kh2-magia', 'Magia'], ['kh2-nivel', 'Nivel 99']])}
    ${bloque('kh2-formas', 'Formas de fusión', `
      <div class="info-cards info-cards-2">
        <div class="info-card"><h3>La barra de fusión</h3><p>${esc(BARRA_FUSION.texto)} ${esc(BARRA_FUSION.coste)}</p></div>
        <div class="info-card"><h3>Subir sin gastar barra</h3><p>${esc(BARRA_FUSION.tope)} ${esc(BARRA_FUSION.truco)}</p></div>
      </div>
      <div class="bosses formas-kh2">${FUSIONES_KH2FM.map(forma).join('')}</div>
      <p class="nota-fuente">${esc(NOTA_FUSIONES)}</p>
      <div class="group"><h3>Antiforma</h3><p class="group-intro">No se elige: sale al azar si abusas de las otras formas. El logro pide activarla 13 veces; la llave espada Dos Serán Uno la fuerza.</p>
        <ul class="list">${itemLogro(logroKh2fm.ACH_148, 'kh2fm')}</ul></div>
      ${fuentes(['khwikiFormas', 'guiaSteamFusiones', 'guiaMegidoFusiones', 'guiaSteamKh2fm'])}`, {
      meter: medidor('kh2-formas', FUSIONES_KH2FM.flatMap(idsFusionKh2), 'Niveles'),
      lead: 'Cada casilla es un nivel de la forma y lo que aprende Sora con él. La habilidad de crecimiento sube a los niveles 3, 5 y 7.',
    })}
    ${bloque('kh2-invoc', 'Invocaciones', `<ul class="list">${invoc}</ul>
      <div class="group"><h3>Nivel de las invocaciones</h3><p class="group-intro">${esc(NIVEL_INVOC)}</p><div class="niveles-forma">${nivelesInvoc}</div></div>
      ${fuentes(['khwikiInvoc', 'guiaMegidoFusiones', 'wikiEsAmuletoPlumas', 'guiaSteamFusiones', 'guiaSteamKh2fm'])}`, {
      meter: medidor('kh2-invoc-lista', idsInvocKh2(), 'Invocaciones y niveles'),
      lead: 'Cada una tiene su límite con Sora, que también cuenta para el apartado Límites del diario.',
    })}
    ${bloque('kh2-magia', 'Magia', `<p class="nota-fuente">${esc(NOTA_MAGIAS_KH2FM)}</p><div class="magias-kh2">${MAGIAS_KH2FM.map(magia).join('')}</div>${fuentes(['khwikiMagia', 'guiaSteamKh2fm'])}`, {
      meter: medidor('kh2-magia', idsMagiaKh2(), 'Niveles de magia'),
      lead: 'Los seis hechizos llegan al nivel ++ con la historia.',
    })}
    ${bloque('kh2-nivel', 'Nivel 99', `<ul class="list">${itemLogro(logroKh2fm.ACH_106, 'kh2fm')}</ul>${fuentes(['guiaSteamKh2fm', 'guiaSteamKh2fmEn'])}`, {
      lead: 'Misma marca que el logro.',
    })}`;
}

// Armas de Sora, Donald y Goofy, con imagen (KHWiki) y lo que da cada una en Final Mix.
const IMG_ARMAS_KH2 = 'assets/img/kh2fm/armas/';
function kh2fmArmas() {
  const tarjeta = (a, g) => {
    const id = idArmaKh2(a);
    const comp = id.startsWith('kh2fm.sintesis') ? 'Misma marca que en Orfebrería.' : id.startsWith('kh2fm.tesoro') ? 'Misma marca que su cofre en Tesoros.' : '';
    return tarjetaImg({
      id, img: `${IMG_ARMAS_KH2}${a.img}.webp`, nombre: a.nombre,
      sub: `Fuerza +${a.fue}${g.id !== 'goofy' ? ` · Magia +${a.mag}` : ''}${a.fm ? ` ${chipFM('Nueva en FM')}` : ''}`,
      cuerpo: `${a.hab ? `<p class="arma-desc"><span class="chip">${esc(a.hab)}</span></p>` : ''}
        <p class="arma-como"><b>Cómo:</b> ${esc(a.como)}</p>
        ${a.nt ? `<p class="arma-nota" title="En inglés: ${esc(a.enFM)}">Nombre traducido: no tiene nombre en castellano con fuente (en inglés, «${esc(a.enFM)}»).</p>` : ''}
        ${comp ? `<p class="arma-nota">${comp}</p>` : ''}`,
    });
  };
  return `
    <p class="lead seccion-lead">Las 64 armas de Sora, Donald y Goofy, con su fuerza, su magia y su habilidad en Final Mix. No dan logro, pero completan el equipo.</p>
    ${subnav(ARMAS_KH2FM.map((g) => [`armas-${g.id}`, g.titulo]))}
    ${ARMAS_KH2FM.map((g) => bloque(`armas-${g.id}`, esc(g.titulo), `<ul class="armas">${g.armas.map((a) => tarjeta(a, g)).join('')}</ul>`, {
      meter: medidor(`kh2-armas-${g.id}`, idsArmasKh2(g), 'Conseguidas'),
    })).join('')}
    <p class="nota-fuente">Los datos son los de la wiki inglesa de Fandom, con los valores de Final Mix. Los nombres, de la Wiki ES (página de cada arma) y de la guía de Megido.</p>
    ${fuentes(['fandomArmasKh2', 'wikiEsArmasKh2', 'wikiEsCetro', 'wikiEsReceta', 'guiaMegidoSintesis'])}`;
}

// Minijuegos y misiones del diario, mundo a mundo.
function kh2fmMinijuegos() {
  const actividad = (x) => `
    <article class="mini-kh2">
      <h4>${esc(x.nombre)}</h4>
      ${x.consejo ? `<p class="mini-consejo">${esc(x.consejo)}</p>` : ''}
      <div class="niveles-forma">${x.juego ? marca(ID.kh2fmMinijuego(x.id), '<b>Jugado</b>', 'marca-juego') : ''}${x.retos.map((r, i) => marca(idRetoKh2(x, r, i), esc(r.t))).join('')}</div>
    </article>`;
  const mundos = MINIJUEGOS_KH2FM.map((g) => bloque(`mini-${g.mundo}`, esc(g.nombre), `<div class="minis-kh2">${g.items.map(actividad).join('')}</div>`, {
    meter: medidor(`kh2-mini-${g.mundo}`, idsMiniKh2(g), 'Minijuegos y misiones'),
  })).join('');
  medidores['kh2-juegos'] = idsJuegosKh2();
  medidores['kh2-misiones'] = idsMisionesKh2();
  return `
    <p class="lead seccion-lead">${esc(INTRO_MINI_KH2FM)}</p>
    <div class="info-cards info-cards-2">
      <div class="info-card"><h3>Minijuegos <span class="count" data-count="kh2-juegos">${store.contar(idsJuegosKh2())}/${idsJuegosKh2().length}</span></h3><p>Las casillas «Jugado»: basta con jugar a cada uno una vez.</p>${chipLogroKh2('ACH_142')}</div>
      <div class="info-card"><h3>Misiones <span class="count" data-count="kh2-misiones">${store.contar(idsMisionesKh2())}/${idsMisionesKh2().length}</span></h3><p>El resto de casillas: cada objetivo que pide el diario.</p>${chipLogroKh2('ACH_141')}</div>
    </div>
    ${subnav(MINIJUEGOS_KH2FM.map((g) => [`mini-${g.mundo}`, g.nombre.replace(' / Vergel Radiante', '')]))}
    ${mundos}
    <p class="nota-fuente">${esc(NOTA_SETAS)} Las réplicas de la Gruta y las Esencias intangibles comparten marca con la sección Jefes.</p>
    ${fuentes(['guiaSteamKh2fmEn', 'guiaSteamKh2fm', 'joakokhKh2'])}`;
}

// Coliseo: las 8 copas con su logro y sus dos marcas del diario.
function kh2fmColiseo() {
  const copa = (c) => {
    const x = miniDeCopa(c);
    const ids = idsCopaKh2(c);
    const clave = `kh2-copa-${c.id}`;
    medidores[clave] = ids;
    return `
    <article class="copa">
      <div class="copa-head">
        <img class="copa-trofeo" src="${IMG_COLISEO_KH2}${c.img}.webp" alt="" loading="lazy">
        <div>
          <h3>${esc(c.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
          <p class="copa-meta">${c.combates} combates · nivel recomendado ${c.nivel}${c.paradoja ? ' · <span class="chip">Paradoja</span>' : ''}</p>
          <p class="copa-abre"><b>Se abre:</b> ${esc(c.abre)}</p>
          <p class="copa-abre"><b>Reglas:</b> ${esc(c.reglas)}</p>
          <p class="copa-abre"><b>Último rival:</b> ${esc(c.rival)}${c.premios ? ` · <b>Premio:</b> ${c.premios.map(esc).join(', ')}` : ''}</p>
        </div>
      </div>
      <div class="niveles-forma">${marca(ID.kh2fmLogro(c.logro), `<b>${esc(logroKh2fm[c.logro].nombre)}</b>`, 'marca-juego')}${marca(ID.kh2fmMinijuego(x.id), '<b>Jugado</b>')}${x.retos.map((r, i) => marca(idRetoKh2(x, r, i), esc(r.t))).join('')}</div>
      ${x.consejo ? `<p class="mini-consejo">${esc(x.consejo)}</p>` : ''}
      ${c.nota ? `<p class="arma-nota">${esc(c.nota)}</p>` : ''}
      ${c.rondas ? `<details class="copa-rivales"><summary>Combates clave</summary><ul class="copa-rondas">${c.rondas.map(([n, t]) => `
        <li><b>${esc(n)}</b><p>${esc(t)}</p></li>`).join('')}</ul></details>` : ''}
    </article>`;
  };
  const grupo = (par) => `<div class="copas">${COPAS_KH2FM.filter((c) => !!c.paradoja === par).map(copa).join('')}</div>`;
  return `
    <p class="lead seccion-lead">${esc(INTRO_COLISEO_KH2FM)}</p>
    <h3 class="bx-sub">Copas del Infiernódromo</h3>
    ${grupo(false)}
    <h3 class="bx-sub copa-sub">Copas Paradoja</h3>
    ${grupo(true)}
    ${fuentes(['khwikiCopasKh2', 'wikiEsCopasKh2', 'guiaSteamKh2fm'])}`;
}

// Jefes: historia (ficha con imagen y estrategia) y secretos (con las marcas compartidas con Minijuegos).
function jefeKh2(j, { id = ID.kh2fmJefe(j.id), img = j.img ?? j.id, premios = [], marcaTxt = 'Vencido' } = {}) {
  const chips = [j.bonus ? `<li class="chip">Bonificación: ${esc(j.bonus)}</li>` : '', j.opcional ? '<li class="chip">Opcional</li>' : '', ...premios].join('');
  return `
    <article class="boss boss-khfm" id="jefe-${j.id}">
      <div class="boss-main">
        <div class="boss-art"><img src="${IMG_JEFES_KH2}${img}.webp" alt="" loading="lazy"></div>
        <div class="boss-body">
          <p class="boss-world">${esc(j.lugar)}</p>
          <h3>${esc(j.nombre)}</h3>
          ${chips ? `<ul class="boss-premios" aria-label="Recompensas">${chips}</ul>` : ''}
          ${j.abre ? `<p class="boss-abre"><b>Cómo se llega:</b> ${esc(j.abre)}</p>` : ''}
          ${marca(id, marcaTxt, 'boss-marca')}
        </div>
      </div>
      ${j.t ? `<details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(j.t)}</p></details>` : ''}
      ${j.nota ? `<p class="arma-nota">${esc(j.nota)}</p>` : ''}
    </article>`;
}

function kh2fmJefes() {
  const logro = (id) => `<li class="chip chip-logro">Logro: ${esc(logroKh2fm[id].nombre)}</li>`;
  const sephiroth = jefeKh2({ id: 'sephiroth', nombre: 'Sephiroth', lugar: 'Vergel Radiante', ...SEPHIROTH },
    { id: ID.kh2fmLogro(SEPHIROTH.logro), premios: [logro(SEPHIROTH.logro), `<li class="chip">Premio: ${esc(SEPHIROTH.premio)}</li>`] });
  const consciencia = `
    <article class="info-card"><h3>Consciencia latente</h3>
      <p><b>Cómo se llega:</b> ${esc(CONSCIENCIA.abre)}</p><p>${esc(CONSCIENCIA.t)}</p>
      <div class="niveles-forma">${marca(ID.kh2fmLogro(CONSCIENCIA.logro), `<b>${esc(logroKh2fm[CONSCIENCIA.logro].nombre)}</b>`, 'marca-juego')}</div></article>`;
  const fenrir = `<article class="info-card"><h3>Método Fenrir + Combo Negativo</h3><ol class="sora-resp">${METODO_FENRIR.map((t) => `<li>${esc(t)}</li>`).join('')}</ol></article>`;
  const org = ORGANIZACION_KH2FM.map((o) => `
    <article class="mini-kh2">
      <h4>${esc(o.nombre)}</h4>
      ${o.esencia ? `<p class="mini-consejo"><b>Esencia intangible:</b> ${esc(o.esencia)}</p>` : ''}
      <p class="mini-consejo">${esc(o.t)}</p>
      <div class="niveles-forma">${o.esencia ? marca(ID.kh2fmEsencia(o.slug), 'Esencia vencida') : ''}${marca(ID.kh2fmReplica(o.slug), 'Réplica vencida')}</div>
    </article>`).join('');
  const retoSeta = (n) => itemsMiniKh2().find((x) => x.id === `seta-${n}`)?.retos[0].t ?? 'Satisfecha';
  const setas = SETAS_KH2FM.map((s) => `
    <article class="mini-kh2">
      <h4>N.º ${esc(s.n)}</h4>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(s.donde)}</p>
      <p class="mini-consejo">${esc(s.t)}</p>
      <div class="niveles-forma">${marca(ID.kh2fmSeta(s.n), esc(retoSeta(s.n)))}</div>
    </article>`).join('');
  medidores['kh2-jefes-secretos'] = idsSecretosKh2();
  return `
    <p class="lead seccion-lead">${esc(INTRO_JEFES_KH2FM)}</p>
    ${subnav([['jefes-historia', 'Historia'], ['jefes-secretos', 'Sephiroth y Consciencia'], ['jefes-org', 'Organización XIII'], ['jefes-setas', 'Micorganización XIII']])}
    ${bloque('jefes-historia', 'Jefes de la historia', `<div class="bosses">${JEFES_HISTORIA_KH2FM.map((j) => jefeKh2(j)).join('')}</div>`, {
      meter: medidor('kh2-jefes-historia', idsHistoriaKh2(), 'Vencidos'),
    })}
    ${bloque('jefes-secretos', 'Sephiroth y Consciencia latente', `<div class="bosses">${sephiroth}</div><div class="info-cards info-cards-2">${consciencia}${fenrir}</div>`)}
    ${bloque('jefes-org', 'Organización XIII', `<p class="group-intro">${esc(REPLICAS_INTRO)}</p>
      <div class="niveles-forma">${marca(ID.kh2fmLogro('ACH_110'), `<b>${esc(logroKh2fm.ACH_110.nombre)}</b>`, 'marca-juego')}</div>
      <div class="minis-kh2">${org}</div>`, { meter: medidor('kh2-jefes-org', idsOrgKh2(), 'Esencias y réplicas') })}
    ${bloque('jefes-setas', 'Micorganización XIII', `<div class="niveles-forma">${marca(ID.kh2fmLogro('ACH_111'), `<b>${esc(logroKh2fm.ACH_111.nombre)}</b>`, 'marca-juego')}</div>
      <div class="minis-kh2">${setas}</div>`, { meter: medidor('kh2-jefes-setas', SETAS_KH2FM.map((s) => ID.kh2fmSeta(s.n)), 'Satisfechas') })}
    <p class="nota-fuente">Las marcas de Esencias, réplicas y setas son las mismas que en Minijuegos y misiones.</p>
    ${fuentes(['wikiEsJefesTabla', 'khwikiJefesKh2', 'guiaSteamKh2fm'])}`;
}

// `ids`: lo que cuenta para su medidor; `img`: imagen de la tarjeta; `html`: contenido de su página.
const SECCIONES_KH2FM = [
  { id: 'mundos', titulo: 'Mundos', desc: 'Los logros de historia de cada mundo y lo que hay en él.', img: 'assets/img/kh2fm/logros/ACH_121.jpg',
    ids: idsMundosKh2fm, html: kh2fmMundos },
  { id: 'diario', titulo: 'Diario de Pepito', desc: 'Informes Ansem, sincorazón, incorpóreos, límites, personajes y relaciones.', img: 'assets/img/kh2fm/logros/ACH_134.jpg',
    ids: idsDiarioKh2fm, html: kh2fmDiario },
  { id: 'tesoros', titulo: 'Tesoros, puzles y mapas', desc: 'Los 301 cofres con cómo llegar, las 144 piezas de puzle y los 40 mapas.', img: 'assets/img/kh2fm/logros/ACH_138.jpg',
    ids: idsSecTesorosKh2fm, html: kh2fmTesoros },
  { id: 'orfebreria', titulo: 'Orfebrería y Arma Artema', desc: 'Los 59 objetos con sus materiales, los 60 materiales con sus enemigos y los 7 Orichalcum+.', img: `${IMG_ORF_KH2}arma-artema.webp`,
    ids: idsOrfKh2fm, html: kh2fmOrfebreria },
  { id: 'sora', titulo: 'Sora', desc: 'Las cinco formas de fusión nivel a nivel, las invocaciones, la magia y el nivel 99.', img: 'assets/img/kh2fm/logros/ACH_148.jpg',
    ids: idsSoraKh2fm, html: kh2fmSora },
  { id: 'armas', titulo: 'Armas', desc: 'Las 24 llaves espada, los 20 bastones y los 20 escudos, con su habilidad y cómo se consiguen.', img: `${IMG_ARMAS_KH2}ultima-weapon.webp`,
    ids: () => idsArmasKh2(), html: kh2fmArmas },
  { id: 'minijuegos', titulo: 'Minijuegos y misiones', desc: 'Todo lo que piden los apartados Minijuegos y Misiones del diario, mundo a mundo y con consejos.', img: 'assets/img/kh2fm/logros/ACH_141.jpg',
    ids: () => idsMiniKh2(), html: kh2fmMinijuegos },
  { id: 'coliseo', titulo: 'Coliseo', desc: 'Las 4 copas del Infiernódromo y las 4 Paradoja: desbloqueo, reglas, premios y combates clave.', img: `${IMG_COLISEO_KH2}hades.webp`,
    ids: idsColiseoKh2, html: kh2fmColiseo },
  { id: 'jefes', titulo: 'Jefes', desc: 'Los jefes de la historia con su bonificación y estrategia, Sephiroth, la Consciencia latente, la Organización XIII y las 13 setas.', img: `${IMG_JEFES_KH2}sephiroth.webp`,
    ids: idsJefesKh2, html: kh2fmJefes },
];
const seccionKh2fm = (id) => SECCIONES_KH2FM.find((s) => s.id === id);

function vistaKH2FM() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: KH2FM.nombre }]);
  return `
  <section class="page juego-kh2fm" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${KH2FM.logo}" alt="Kingdom Hearts II Final Mix" width="708" height="480">
      <div class="game-hero-stats">
        ${medidor('kh2fm-logros', logrosKH2FM(), ETQ_LOGROS)}
        ${medidor('kh2fm-100', juegoKH2FM(), ETQ_JUEGO)}
      </div>
    </header>
    ${selectorModo('kh2fm-modo-logros', logrosKH2FM(), 'kh2fm-modo-100', juegoKH2FM(), { subLogros: 'Los 50 logros oficiales', subJuego: 'Lo que registra el diario' })}
    ${modo() === 'logros' ? kh2fmLogros() : `
    <p class="mode-note">Guía en preparación: por ahora el 100 % cuenta la historia de cada mundo, el diario de Pepito (informes, sincorazón, incorpóreos, límites, personajes y relaciones) los tesoros, puzles y mapas, la Orfebrería, Sora (formas, invocaciones y magia), las armas y los minijuegos y misiones. Cada entrega añadirá una sección (Coliseo, jefes y nave gumi).</p>
    <div class="secciones-khfm">${SECCIONES_KH2FM.map((s) => `
      <a class="seccion-khfm" href="#/kh2fm/${s.id}">
        <span class="seccion-art"><img src="${esc(s.img)}" alt="" loading="lazy"></span>
        <span class="seccion-cuerpo"><span class="seccion-titulo">${esc(s.titulo)}</span><span class="seccion-desc">${esc(s.desc)}</span>
          ${medidor(`kh2fm-sec-${s.id}`, s.ids(), 'Progreso')}</span>
      </a>`).join('')}</div>`}
  </section>`;
}

function vistaSeccionKH2FM(s) {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: KH2FM.nombre, href: '#/kh2fm' }, { t: s.titulo }]);
  const i = SECCIONES_KH2FM.indexOf(s);
  const ant = SECCIONES_KH2FM[i - 1];
  const sig = SECCIONES_KH2FM[i + 1];
  return `
  <section class="page juego-kh2fm seccion-pagina">
    <header class="seccion-head">
      <img class="seccion-head-art" src="${esc(s.img)}" alt="" width="72" height="72">
      <div class="seccion-head-txt">
        <p class="seccion-juego"><a href="#/kh2fm">${esc(KH2FM.nombre)}</a> · Informes · 100 %</p>
        <h1 class="page-title">${esc(s.titulo)}</h1>
      </div>
      ${medidor(`kh2fm-pag-${s.id}`, s.ids(), 'Progreso de la sección')}
    </header>
    ${s.html()}
    <nav class="seccion-nav" aria-label="Otras secciones">
      ${ant ? `<a href="#/kh2fm/${ant.id}"><small>Anterior</small><b>${esc(ant.titulo)}</b></a>` : '<span></span>'}
      ${sig ? `<a class="seccion-sig" href="#/kh2fm/${sig.id}"><small>Siguiente</small><b>${esc(sig.titulo)}</b></a>` : '<a class="seccion-sig" href="#/kh2fm"><small>Volver</small><b>Portada del juego</b></a>'}
    </nav>
  </section>`;
}

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
  const portal = (p) => marca(ID.dddPortal(p.mundo, p.pj, p.n), `<b>Portal ${p.n} · ${lugarDdd(p)}</b><small>${estrellasDdd(p.estrellas)}${p.luciente ? esc(p.luciente) : `«${esc(p.enemigoEn)}»`} · ${esc(p.objetivo)}</small>`);
  const mundo = (m) => {
    // Portal secreto: solo donde lo hay (no en El Mundo Inexistente ni en Sinfonía del Brujo con Riku).
    const lista = (pj) => {
      const sec = secretoPortalDdd(m, pj);
      const secreto = sec ? marca(ID.dddPortal(m, pj, 'secreto'), `<b>Portal secreto${sec.lugar ? ` · «${esc(sec.lugar)}»` : ''}</b><small>Se abre al terminar el juego: revancha con el jefe del mundo</small>`) : '';
      return `<h4 class="sub-pj">${pj === 'sora' ? 'Sora' : 'Riku'}</h4>
        <div class="portales-ddd">${portalesDdd(m, pj).map(portal).join('')}${secreto}</div>`;
    };
    const ids = idsPortalesMundoDdd(m);
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
    ${subnav([...MUNDOS_PORTALES_DDD.map((m) => [`portales-${m}`, NOMBRE_MUNDO_DDD[m].replace(/^(El|La) (?!Red)/, '')]), ['nexo-objetivos', 'Portales Nexo']])}
    <div class="mundos-kh2">${MUNDOS_PORTALES_DDD.map(mundo).join('')}</div>
    ${bloque('nexo-objetivos', 'Objetivos de los Portales Nexo', `<p class="group-intro">${esc(NOTA_NEXO_OBJ)}</p><div class="portales-ddd">${obj}</div>`, { meter: medidor('ddd-nexoobj', idsNexoObjDdd(), 'Objetivos') })}
    <p class="nota-fuente">${esc(NOTA_PORTALES_DDD)}</p>
    ${fuentes(['kwPortales', 'gbTrofeos', 'khwikiPortal'])}`;
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
  const celda = (t, pj) => marca(ID.dddTransito(t.id, pj), `<b>${pj === 'sora' ? 'Sora' : 'Riku'}</b><small>${esc(t[pj][0])} puntos · ${esc(t[pj][1])}</small>`);
  const tabla = `<div class="transitos-ddd">${TRANSITOS_DDD.map((t) => `
    <div class="transito-ddd"><h4>${esc(t.mundo)}</h4><div class="portales-ddd">${celda(t, 'sora')}${celda(t, 'riku')}</div></div>`).join('')}</div>`;
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
  const llaves = llavesDdd().map((l) => marca(ID.dddLlave(l.n, l.p), `<b>${esc(l.n)} · ${l.p === 'sora' ? 'Sora' : 'Riku'}</b><small>${esc(l.como)}</small>`)).join('');
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

// ---------- KH 0.2 Birth by Sleep -A fragmentary passage- ----------
const objetivosBbs02 = (obj) => (obj ? `<p class="mini-consejo"><b>Objetivo${obj.length > 1 ? 's' : ''} del armario:</b> n.º ${obj.join(' y ')}</p>` : '');

// Portada del juego, modo Logros: antes de empezar y los 15 logros por sección.
function bbs02Logros() {
  const grupo = (g) => {
    const ids = g.ids.map(ID.bbs02Logro);
    medidores[`bbs02-g-${g.id}`] = ids;
    const sec = seccionBbs02(g.id);
    return `
    <div class="group">
      <h3>${esc(g.titulo)} <span class="count" data-count="bbs02-g-${g.id}">${store.contar(ids)}/${ids.length}</span>
        ${sec ? `<a class="ir-seccion" href="#/bbs02/${sec.id}">Ver la sección ${esc(sec.titulo)}</a>` : ''}</h3>
      <ul class="list">${g.ids.map((id) => itemLogro(logroBbs02[id], 'bbs02')).join('')}</ul>
    </div>`;
  };
  // Lo perdible: cada combate o cofre con su casilla (la del objetivo, el cofre o el logro).
  const idPerdible = (x) => (x.obj ? ID.bbs02Objetivo(x.obj) : x.cofre ? ID.bbs02Cofre(...x.cofre.split('.')) : ID.bbs02Logro(x.logro));
  const perdible = (x) => `
    <article class="mini-kh2 cmd02 perd02">
      <p class="perd02-cab"><span class="chip">${esc(x.partida)}</span>${x.obj ? `<span class="chip">Objetivo ${x.obj}</span>` : ''}</p>
      <h3>${esc(x.titulo)}</h3>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(x.zona)}</p>
      <p class="mini-consejo"><b>Qué pide:</b> ${esc(x.pide)}</p>
      <p class="mini-consejo"><b>Si sale mal:</b> ${esc(x.fallo)}</p>
      <p class="mini-consejo"><b>Logro:</b> ${esc(logroBbs02[x.logro].nombre)} · <a href="#/bbs02/${x.seccion}">Ver en ${esc(seccionBbs02(x.seccion).titulo)}</a></p>
      <div class="niveles-forma">${marca(idPerdible(x), 'Hecho')}</div>
    </article>`;
  medidores['bbs02-perdibles'] = PERDIBLES_BBS02.map(idPerdible);
  // Ruta al 100 %: una tarjeta por fase con sus pasos y el progreso de lo que toca en ella.
  const fase = (f, i) => {
    const ids = IDS_FASE_BBS02[f.id]();
    medidores[`bbs02-fase-${f.id}`] = ids;
    return `
    <article class="fase02">
      <header class="fase02-cab">
        <span class="fase02-n" aria-hidden="true">${i + 1}</span>
        <div><h3>${esc(f.titulo)}</h3><p>${esc(f.sub)}</p></div>
      </header>
      ${medidor(`bbs02-fase-${f.id}`, ids, 'Hecho en esta fase')}
      <ol class="fase02-pasos">${f.pasos.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>
    </article>`;
  };
  return `
    ${subnav([['ruta', 'Antes de empezar'], ['ruta-100', 'Ruta al 100 %'], ['perdibles', 'Lo que se puede perder'], ['logros', 'Logros']])}
    ${bloque('ruta', 'Antes de empezar', `<ol class="steps">${rutaPasos(RUTA_BBS02, logroBbs02)}</ol>`, { lead: 'Lo que conviene saber antes de la primera partida.' })}
    ${bloque('ruta-100', 'Ruta al 100 %', `<div class="fases02">${FASES_BBS02.map(fase).join('')}</div>${fuentes(['laps4Bbs02'])}`, {
      lead: 'Dos partidas bastan: la primera en Principiante, que luego cargas terminada para lo que sale después del final, y una Partida + en Maestro con los objetivos traspasados. Cada fase marca su progreso con las casillas de las secciones.',
    })}
    ${bloque('perdibles', 'Lo que se puede perder', `<div class="minis-kh2">${PERDIBLES_BBS02.map(perdible).join('')}</div>${fuentes(['laps4Bbs02'])}`, {
      meter: medidor('bbs02-perdibles', PERDIBLES_BBS02.map(idPerdible), 'Hechos'), lead: esc(INTRO_PERDIBLES_BBS02),
    })}
    ${bloque('logros', 'Los 15 logros', `${GRUPOS_LOGROS_BBS02.map(grupo).join('')}${fuentes(['steamBbs02', 'laps4Bbs02'])}`, {
      meter: medidor('bbs02-logros-lista', logrosBbs02(), 'Logros'),
      lead: 'Abre «Cómo conseguirlo» donde lo haya. Los logros ocultos esconden su descripción hasta que la abras.',
    })}`;
}

// Zonas en orden, jefes, jefe secreto y logros de dificultad.
function bbs02Historia() {
  const jefe = (j) => `
    <article class="mini-kh2">
      <h3>${esc(j.nombre)}</h3>
      ${objetivosBbs02(j.obj)}
      <details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(j.t)}</p></details>
      <div class="niveles-forma">${marca(ID.bbs02Jefe(j.id), 'Vencido')}</div>
    </article>`;
  const zona = (z) => {
    const ids = [...(z.logro ? [ID.bbs02Logro(z.logro)] : []), ...z.jefes.map((j) => ID.bbs02Jefe(j.id))];
    const clave = `bbs02-zona-${z.id}`;
    medidores[clave] = ids;
    return `
    <article class="mundo-kh2" id="zona-${z.id}">
      <h3>${esc(z.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      ${z.logro ? `<ul class="list">${itemLogro(logroBbs02[z.logro], 'bbs02')}</ul>` : '<p class="mundo-sin">Sin logro de historia propio.</p>'}
      <p class="mini-consejo">${esc(z.nota)}</p>
      ${z.jefes.length ? `<div class="minis-kh2">${z.jefes.map(jefe).join('')}</div>` : ''}
    </article>`;
  };
  const s = JEFE_SECRETO_BBS02;
  const dificultad = ['ACH_08', 'ACH_11'].map((id) => itemLogro(logroBbs02[id], 'bbs02')).join('');
  return `
    <p class="lead seccion-lead">${esc(INTRO_HISTORIA_BBS02)}</p>
    ${subnav([['zonas-bbs02', 'Zonas y jefes'], ['secreto-bbs02', 'Jefe secreto'], ['dificultad-bbs02', 'Dificultad']])}
    ${bloque('zonas-bbs02', 'Zonas y jefes', `<div class="mundos-kh2">${ZONAS_BBS02.map(zona).join('')}</div>`, { meter: medidor('bbs02-jefes', idsJefesBbs02(), 'Jefes') })}
    ${bloque('secreto-bbs02', 'Jefe secreto', `<div class="minis-kh2">
      <article class="mini-kh2">
        <h3>${esc(s.nombre)}</h3>
        <p class="mini-consejo"><b>Dónde:</b> ${esc(s.donde)}</p>
        <p class="mini-consejo">${esc(s.rondas)}</p>
        ${objetivosBbs02(s.obj)}
        <details class="boss-est"><summary>Cómo vencerle</summary><p>${esc(s.t)}</p></details>
        <div class="niveles-forma">${marca(ID.bbs02Jefe(s.id), 'Vencido')}</div>
      </article></div>`)}
    ${bloque('dificultad-bbs02', 'Dificultad', `<ul class="list">${dificultad}</ul>`)}
    ${fuentes(FUENTES_HISTORIA_BBS02)}`;
}

// Objetivos del Armario: filtro por partida, objetivos por zona, prendas por ranura y recuerdos persistentes.
const FILTROS_OBJ_BBS02 = [['todos', 'Todos'], ...Object.entries(CUANDO_BBS02).map(([k, c]) => [k, c.t])];
const filtroObjBbs02 = () => store.ajuste('bbs02ObjFiltro', 'todos');
// Nombre traducido de la prenda, con el inglés de KHWiki al pasar el ratón.
const prendaBbs02 = (en) => `<span class="tes-trad" title="Traducción propia; en inglés: ${esc(en)}">${esc(PRENDAS_ES[en])}</span>`;
function bbs02Objetivos() {
  const f = filtroObjBbs02();
  const oculto = (o) => f !== 'todos' && o.c !== f;
  const tarjeta = (o) => `
    <article class="obj-bbs02" data-cuando="${o.c}"${oculto(o) ? ' hidden' : ''}>
      <div class="obj-bbs02-cab">
        <span class="obj-bbs02-n">N.º ${o.n}</span>
        <span class="chip chip-cuando chip-${o.c}">${esc(CUANDO_BBS02[o.c].t)}</span>
        ${o.guarda ? '<span class="chip chip-guarda">Guarda antes</span>' : ''}
      </div>
      <h3>${esc(o.t)}</h3>
      <p class="mini-consejo">${esc(o.como)}</p>
      ${o.nota ? `<p class="mini-consejo note">${esc(o.nota)}</p>` : ''}
      <p class="obj-bbs02-premio"><span>Premio</span> ${prendaBbs02(o.p[1])} · ${esc(RANURAS_BBS02[o.p[0]])}</p>
      <div class="niveles-forma">${marca(ID.bbs02Objetivo(o.n), 'Conseguido')}</div>
    </article>`;
  const zona = (z) => {
    const objs = OBJETIVOS_BBS02.filter((o) => o.z === z.id);
    const ids = objs.map((o) => ID.bbs02Objetivo(o.n));
    const clave = `bbs02-obj-${z.id}`;
    medidores[clave] = ids;
    return `
    <div class="obj-bbs02-zona"${objs.every(oculto) ? ' hidden' : ''}>
      <h3 class="sub-pj">${esc(z.nombre)} <span class="count" data-count="${clave}">${store.contar(ids)}/${ids.length}</span></h3>
      <div class="minis-kh2">${objs.map(tarjeta).join('')}</div>
    </div>`;
  };
  const filtros = `<div class="cmd-filtros obj-bbs02-filtros" role="group" aria-label="Qué partida">${FILTROS_OBJ_BBS02.map(([k, t]) => `
    <button type="button" class="cmd-filtro" data-obj-filtro="${k}" aria-pressed="${k === f}">${esc(t)}</button>`).join('')}</div>`;
  const leyenda = `<dl class="obj-bbs02-leyenda">${Object.entries(CUANDO_BBS02).map(([k, c]) => `<div><dt><span class="chip chip-cuando chip-${k}">${esc(c.t)}</span></dt><dd>${esc(c.d)}</dd></div>`).join('')}</dl>`;
  const ranura = ([k, nombre]) => {
    const objs = OBJETIVOS_BBS02.filter((o) => o.p[0] === k);
    const ids = objs.map((o) => ID.bbs02Objetivo(o.n));
    medidores[`bbs02-ranura-${k}`] = ids;
    // Misma marca que el objetivo que da la prenda: tenerla es haberlo completado.
    return `<div class="info-card"><h3>${esc(nombre)} <span class="count" data-count="bbs02-ranura-${k}">${store.contar(ids)}/${ids.length}</span></h3>
      <ul class="obj-bbs02-prendas">${objs.map((o) => `<li>${marca(ID.bbs02Objetivo(o.n), `${prendaBbs02(o.p[1])}<small>Obj. ${o.n}</small>`)}</li>`).join('')}</ul></div>`;
  };
  const recuerdo = (r) => `
    <article class="mini-kh2">
      <h3>${esc(r.zona)}</h3>
      <p class="mini-consejo"><b>Qué es:</b> ${esc(r.forma)}.</p>
      <p class="mini-consejo"><b>Dónde:</b> ${esc(r.donde)}</p>
      <div class="niveles-forma">${marca(ID.bbs02Objetivo(r.obj), `Encontrado <small>(objetivo ${r.obj})</small>`)}</div>
    </article>`;
  const logros = ['ACH_07', 'ACH_15'].map((id) => itemLogro(logroBbs02[id], 'bbs02')).join('');
  medidores['bbs02-objetivos'] = idsObjetivosBbs02();
  return `
    <p class="lead seccion-lead">${esc(INTRO_OBJETIVOS_BBS02)}</p>
    ${subnav([['logros-obj-bbs02', 'Los logros'], ['objetivos-bbs02', 'Los 51 objetivos'], ['armario-bbs02', 'Armario'], ['recuerdos-bbs02', 'Recuerdos persistentes']])}
    ${bloque('logros-obj-bbs02', 'Los logros', `<ul class="list">${logros}</ul>`)}
    ${bloque('objetivos-bbs02', 'Los 51 objetivos', `${leyenda}${filtros}${ZONAS_OBJ_BBS02.map(zona).join('')}`, { meter: medidor('bbs02-objetivos', idsObjetivosBbs02(), 'Objetivos') })}
    ${bloque('armario-bbs02', 'Armario: las prendas por ranura', `<p class="group-intro">${esc(INTRO_ARMARIO_BBS02)}</p><div class="info-cards obj-bbs02-ranuras">${Object.entries(RANURAS_BBS02).map(ranura).join('')}</div>`)}
    ${bloque('recuerdos-bbs02', 'Recuerdos persistentes', `<p class="group-intro">${esc(INTRO_RECUERDOS_BBS02)}</p><div class="minis-kh2">${RECUERDOS_BBS02.map(recuerdo).join('')}</div>`)}
    <p class="nota-fuente">Los nombres de las prendas son traducción propia: no salen en ninguna fuente en castellano. Al pasar el ratón se ve el nombre inglés de KHWiki.</p>
    ${fuentes(FUENTES_OBJETIVOS_BBS02)}`;
}

// Cofres, como los de BBS: un desplegable por zona, con los de la primera visita y los de la partida terminada.
const VISITAS_BBS02 = [[1, '1.ª visita'], [2, 'Al cargar la partida terminada']];
function bbs02Cofres() {
  const cofre = (z, x) => item({
    id: ID.bbs02Cofre(z.id, x.n),
    antes: `<span class="cof02-n">${x.n}</span>`,
    titulo: x.nombre,
    desc: x.d,
    meta: [x.tipo !== 'objeto' && `<span class="chip chip-cof02-${x.tipo}">${esc(TIPOS_COFRE_BBS02[x.tipo])}</span>`, x.en && notaTrad(x.en)].filter(Boolean).join(' '),
  });
  const zona = (z) => {
    const n = (v) => z.cofres.filter((x) => x.v === v).length;
    const resumen = [`${n(1)} en la 1.ª visita`, n(2) && `${n(2)} al terminar`].filter(Boolean).join(' · ');
    const grupos = VISITAS_BBS02.map(([v, t]) => [t, z.cofres.filter((x) => x.v === v)]).filter(([, l]) => l.length);
    return desplegableKh2(`cofres-${z.id}`, COFRE_GEN, `${esc(z.nombre)} <small class="tes-premio">${resumen}</small>`, `bbs02-cof-${z.id}`, idsCofresZonaBbs02(z), `
      ${z.nota ? `<p class="nota-fuente">${esc(z.nota)}</p>` : ''}
      ${z.obj ? `<p class="cof02-obj">Abrirlos todos completa el <a href="#/bbs02/objetivos">objetivo ${z.obj}</a> del armario.</p>` : ''}
      <div class="tes-zonas cof02-zonas">${grupos.map(([t, l]) => `
        <div class="tes-zona"><h3>${esc(t)} <span class="cof02-cuenta">${l.length}</span></h3><ul class="list list-tight">${l.map((x) => cofre(z, x)).join('')}</ul></div>`).join('')}</div>`);
  };
  const total = (v) => ZONAS_COFRES_BBS02.reduce((a, z) => a + z.cofres.filter((x) => x.v === v).length, 0);
  medidores['bbs02-cofres'] = idsCofresBbs02();
  return `
    <p class="lead seccion-lead">${esc(INTRO_COFRES_BBS02)}</p>
    ${bloque('logro-cofres-bbs02', 'El logro', `<ul class="list">${itemLogro(logroBbs02.ACH_06, 'bbs02')}</ul>`)}
    ${bloque('cofres-bbs02', 'Los 41 cofres', `
      <p class="group-intro">${total(1)} en la primera visita y ${total(2)} al cargar la partida terminada. Abre cada zona para ver qué guarda cada cofre y dónde está. Si prefieres verlo, el <a href="https://www.youtube.com/watch?v=J43E_iScH3U" target="_blank" rel="noopener">vídeo de factor747</a> (lo enlaza Laps4) los recorre todos.</p>
      <div class="tes-mundos">${ZONAS_COFRES_BBS02.map(zona).join('')}</div>
      <p class="nota-fuente">Las reliquias del Zodíaco no tienen nombre en castellano en ninguna fuente: el nombre es traducción propia (el inglés, al pasar el ratón por la etiqueta).</p>`, { meter: medidor('bbs02-cofres', idsCofresBbs02(), 'Cofres') })}
    ${fuentes(FUENTES_COFRES_BBS02)}`;
}

// Combate: los cinco logros, la barra de situación, sus comandos (los tres de magia, marcables) y el Tiro certero.
function bbs02Combate() {
  const rel = (x) => [
    x.logros && `<b>Logro:</b> ${x.logros.map((id) => esc(logroBbs02[id].nombre)).join(', ')}`,
    x.obj && `<b>Objetivos del armario:</b> n.º ${x.obj.join(', ')}`,
  ].filter(Boolean).map((t) => `<p class="mini-consejo">${t}</p>`).join('');
  const comando = (x) => `
    <article class="mini-kh2 cmd02">
      <h3>${esc(x.nombre)}</h3>
      <p class="mini-consejo"><b>Cómo sale:</b> ${esc(x.como)}</p>
      <p class="mini-consejo">${esc(x.t)}</p>
      ${x.pc ? `<p class="mini-consejo note">${esc(x.pc)}</p>` : ''}
      ${rel(x)}
      ${x.marca ? `<div class="niveles-forma">${marca(ID.bbs02Magia(x.id), 'Usado al menos una vez')}</div>` : ''}
    </article>`;
  const magia = COMANDOS_BBS02.filter((x) => x.marca);
  const otros = COMANDOS_BBS02.filter((x) => !x.marca);
  const logros = LOGROS_COMBATE_BBS02.map(ID.bbs02Logro);
  medidores['bbs02-magia'] = idsMagiaBbs02();
  medidores['bbs02-logros-combate'] = logros;
  return `
    <p class="lead seccion-lead">${esc(INTRO_COMBATE_BBS02)}</p>
    ${subnav([['logros-combate-bbs02', 'Los logros'], ['magia-bbs02', 'Comandos de magia'], ['estilos-bbs02', 'Cambios de estilo'], ['tiro-bbs02', 'Tiro certero']])}
    ${bloque('logros-combate-bbs02', 'Los logros', `<ul class="list">${LOGROS_COMBATE_BBS02.map((id) => itemLogro(logroBbs02[id], 'bbs02')).join('')}</ul>`, { meter: medidor('bbs02-logros-combate', logros, 'Logros') })}
    ${bloque('magia-bbs02', 'Comandos de magia: «Un final mágico»', `
      <p class="group-intro">${esc(BARRA_BBS02)}</p>
      <div class="minis-kh2">${magia.map(comando).join('')}</div>
      <p class="hint">${esc(NOTA_MAGIA_BBS02)}</p>`, { meter: medidor('bbs02-magia', idsMagiaBbs02(), 'Usados') })}
    ${bloque('estilos-bbs02', 'Cambios de estilo', `<div class="minis-kh2">${otros.map(comando).join('')}</div>`)}
    ${bloque('tiro-bbs02', 'Tiro certero', `<div class="minis-kh2"><article class="mini-kh2">
      <h3>${esc(TIRO_BBS02.nombre)}</h3>
      <p class="mini-consejo">Nombre en castellano de Birth by Sleep; en inglés, «${esc(TIRO_BBS02.en)}».</p>
      <p class="mini-consejo">${esc(TIRO_BBS02.t)}</p>${rel(TIRO_BBS02)}
    </article></div>`)}
    ${fuentes(FUENTES_COMBATE_BBS02)}`;
}

function filtrarObjBbs02(boton) {
  const f = boton.dataset.objFiltro;
  store.fijarAjuste('bbs02ObjFiltro', f);
  const bloqueObj = boton.closest('.block, section') ?? document;
  bloqueObj.querySelectorAll('[data-obj-filtro]').forEach((b) => b.setAttribute('aria-pressed', String(b === boton)));
  bloqueObj.querySelectorAll('.obj-bbs02').forEach((a) => { a.hidden = f !== 'todos' && a.dataset.cuando !== f; });
  bloqueObj.querySelectorAll('.obj-bbs02-zona').forEach((z) => { z.hidden = ![...z.querySelectorAll('.obj-bbs02')].some((a) => !a.hidden); });
}

const SECCIONES_BBS02 = [
  { id: 'historia', titulo: 'Historia y jefes', desc: 'Las zonas del Reino de la oscuridad en orden, sus jefes con cómo vencerlos, el jefe secreto y los logros de dificultad.', img: 'assets/img/bbs02/logros/ACH_05.jpg', ids: idsSecHistoriaBbs02, html: bbs02Historia },
  { id: 'objetivos', titulo: 'Objetivos y armario', desc: 'Los 51 objetivos con cómo hacer cada uno, en qué partida conviene y la prenda que dan; las prendas por ranura y los recuerdos persistentes.', img: 'assets/img/bbs02/logros/ACH_07.jpg', ids: idsSecObjetivosBbs02, html: bbs02Objetivos },
  { id: 'cofres', titulo: 'Cofres', desc: 'Los 41 cofres por zona, con qué guarda cada uno y dónde está, separados en primera visita y partida terminada.', img: 'assets/img/bbs02/logros/ACH_06.jpg', ids: idsSecCofresBbs02, html: bbs02Cofres },
  { id: 'combate', titulo: 'Combate', desc: 'Los logros de combate, la barra y los comandos de situación (los tres de magia, marcables) y el Tiro certero.', img: 'assets/img/bbs02/logros/ACH_12.jpg', ids: idsSecCombateBbs02, html: bbs02Combate },
];
const seccionBbs02 = (id) => SECCIONES_BBS02.find((s) => s.id === id);

function vistaBBS02() {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: BBS02.nombre }]);
  return `
  <section class="page juego-bbs02" data-modo="${modo()}">
    <header class="game-hero">
      <img class="game-hero-logo" src="${BBS02.logo}" alt="Kingdom Hearts 0.2 Birth by Sleep -A fragmentary passage-" width="900" height="568">
      <div class="game-hero-stats">
        ${medidor('bbs02-logros', logrosBbs02(), ETQ_LOGROS)}
        ${medidor('bbs02-100', juegoBBS02(), ETQ_JUEGO)}
      </div>
    </header>
    ${selectorModo('bbs02-modo-logros', logrosBbs02(), 'bbs02-modo-100', juegoBBS02(), { subLogros: 'Los 15 logros oficiales', subJuego: 'Lo que piden los logros' })}
    ${modo() === 'logros' ? bbs02Logros() : `
    <p class="mode-note">Cada logro de Steam, con lo que hay que hacer para conseguirlo. Si un logro pide el 100 % de algo, la lista está completa y se marca elemento a elemento. Faltan por llegar las secciones de objetivos, cofres y combate.</p>
    <div class="secciones-khfm">${SECCIONES_BBS02.map((s) => `
      <a class="seccion-khfm" href="#/bbs02/${s.id}">
        <span class="seccion-art"><img src="${esc(s.img)}" alt="" loading="lazy"></span>
        <span class="seccion-cuerpo"><span class="seccion-titulo">${esc(s.titulo)}</span><span class="seccion-desc">${esc(s.desc)}</span>
          ${medidor(`bbs02-sec-${s.id}`, s.ids(), 'Progreso')}</span>
      </a>`).join('')}</div>`}
  </section>`;
}

function vistaSeccionBBS02(s) {
  topbar([{ t: 'Juegos', href: '#/juegos' }, { t: BBS02.nombre, href: '#/bbs02' }, { t: s.titulo }]);
  const i = SECCIONES_BBS02.indexOf(s);
  const ant = SECCIONES_BBS02[i - 1];
  const sig = SECCIONES_BBS02[i + 1];
  return `
  <section class="page juego-bbs02 seccion-pagina">
    <header class="seccion-head">
      <img class="seccion-head-art" src="${esc(s.img)}" alt="" width="72" height="72">
      <div class="seccion-head-txt">
        <p class="seccion-juego"><a href="#/bbs02">${esc(BBS02.nombre)}</a> · Informes · 100 %</p>
        <h1 class="page-title">${esc(s.titulo)}</h1>
      </div>
      ${medidor(`bbs02-pag-${s.id}`, s.ids(), 'Progreso de la sección')}
    </header>
    ${s.html()}
    <nav class="seccion-nav" aria-label="Otras secciones">
      ${ant ? `<a href="#/bbs02/${ant.id}"><small>Anterior</small><b>${esc(ant.titulo)}</b></a>` : '<span></span>'}
      ${sig ? `<a class="seccion-sig" href="#/bbs02/${sig.id}"><small>Siguiente</small><b>${esc(sig.titulo)}</b></a>` : '<a class="seccion-sig" href="#/bbs02"><small>Volver</small><b>Portada del juego</b></a>'}
    </nav>
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
  else if (ruta[0] === 'khfm' && seccionKhfm(ruta[1])) html = vistaSeccionKHFM(seccionKhfm(ruta[1]));
  else if (ruta[0] === 'kh3' && !ruta[1]) html = vistaKH3();
  else if (ruta[0] === 'kh3' && seccionKh3(ruta[1])) html = vistaSeccionKH3(seccionKh3(ruta[1]));
  else if (ruta[0] === 'kh2fm' && !ruta[1]) html = vistaKH2FM();
  else if (ruta[0] === 'kh2fm' && seccionKh2fm(ruta[1])) html = vistaSeccionKH2FM(seccionKh2fm(ruta[1]));
  else if (ruta[0] === 'ddd' && !ruta[1]) html = vistaDDD();
  else if (ruta[0] === 'ddd' && seccionDdd(ruta[1])) html = vistaSeccionDDD(seccionDdd(ruta[1]));
  else if (ruta[0] === 'bbs02' && !ruta[1]) html = vistaBBS02();
  else if (ruta[0] === 'bbs02' && seccionBbs02(ruta[1])) html = vistaSeccionBBS02(seccionBbs02(ruta[1]));
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
  const objFiltro = e.target.closest('[data-obj-filtro]');
  if (objFiltro) { filtrarObjBbs02(objFiltro); return; }
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
