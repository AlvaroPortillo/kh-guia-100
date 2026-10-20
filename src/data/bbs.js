// Datos de Kingdom Hearts Birth by Sleep Final Mix (versión HD 1.5+2.5 ReMIX, Steam).
// Regla: ningún dato sin fuente. Cada bloque indica de dónde sale.
import { LOGROS_BBS } from './bbs-logros.js';

export const FUENTES = {
  steam: { nombre: 'Steam — logros oficiales (español)', url: 'https://steamcommunity.com/stats/2552430/achievements/?l=spanish' },
  wikiEs: { nombre: 'Wiki Kingdom Hearts en español (Fandom)', url: 'https://kingdomhearts.fandom.com/es/wiki/Kingdom_Hearts_Birth_by_Sleep' },
  wikiEsGolpes: { nombre: 'Wiki ES — Golpe Final', url: 'https://kingdomhearts.fandom.com/es/wiki/Golpe_Final' },
  wikiEsEstilos: { nombre: 'Wiki ES — Estilo de Comandos', url: 'https://kingdomhearts.fandom.com/es/wiki/Estilo_de_Comandos' },
  wikiEsCoso: { nombre: 'Wiki ES — Coso Virtual', url: 'https://kingdomhearts.fandom.com/es/wiki/Coso_Virtual' },
  wikiEsSecreto: { nombre: 'Wiki ES — A Fragmentary Passage (episodio secreto)', url: 'https://kingdomhearts.fandom.com/es/wiki/A_Fragmentary_Passage' },
  wikiEsFinal: { nombre: 'Wiki ES — Episodio Final', url: 'https://kingdomhearts.fandom.com/es/wiki/Episodio_Final' },
  wikiEsVanitas: { nombre: 'Wiki ES — Reminiscencia de Vanitas', url: 'https://kingdomhearts.fandom.com/es/wiki/Reminiscencia_de_Vanitas' },
  wikiEsCuartelillo: { nombre: 'Wiki ES — Cuartelillo', url: 'https://kingdomhearts.fandom.com/es/wiki/Cuartelillo' },
  wikiEsTrofeos: { nombre: 'Wiki ES — Trofeos', url: 'https://kingdomhearts.fandom.com/es/wiki/Trofeos' },
  khwikiGolpes: { nombre: 'KHWiki — Finish Command (KHBBS)', url: 'https://www.khwiki.com/Finish_command_(KHBBS)' },
  khwikiArena: { nombre: 'KHWiki — Arena Mission', url: 'https://www.khwiki.com/Arena_Mission' },
  trueTrophies: { nombre: 'TrueTrophies — comentarios sobre «El Maestro»', url: 'https://www.truetrophies.com/t90563/critical-competitor-trophy' },
};

export const PERSONAJES = {
  terra: { id: 'terra', nombre: 'Terra', img: 'assets/img/bbs/terra.png' },
  ventus: { id: 'ventus', nombre: 'Ventus', img: 'assets/img/bbs/ventus.png' },
  aqua: { id: 'aqua', nombre: 'Aqua', img: 'assets/img/bbs/aqua.png' },
};

// Agrupación de los logros que no pertenecen a un único personaje.
export const GRUPOS_LOGROS = [
  { titulo: 'Historia y dificultad', ids: ['ACH_183', 'ACH_158', 'ACH_154', 'ACH_153'] },
  { titulo: 'Jefes secretos', ids: ['ACH_159', 'ACH_160', 'ACH_161', 'ACH_162'] },
  { titulo: 'Coleccionables', ids: ['ACH_164', 'ACH_165', 'ACH_163', 'ACH_178'] },
  { titulo: 'Combate', ids: ['ACH_169', 'ACH_170', 'ACH_171'] },
  { titulo: 'Minijuegos de Ciudad Disney', ids: ['ACH_179', 'ACH_180', 'ACH_181', 'ACH_182'] },
  { titulo: 'Coso Virtual', ids: ['ACH_192', 'ACH_193', 'ACH_194', 'ACH_195', 'ACH_196', 'ACH_197'] },
];

// Ruta al 100 %: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA = [
  {
    id: 'r-dificultad',
    titulo: 'Elige la dificultad Maestro desde el principio',
    texto: 'El logro «El Maestro» pide completar el juego en Maestro. Jugadores en TrueTrophies indican que cuenta completar las historias en esa dificultad, y que terminar solo el episodio secreto en Maestro no basta. Además, en Maestro el episodio secreto se desbloquea solo con completar el Episodio Final (ver más abajo).',
    logros: ['ACH_153', 'ACH_154'],
    fuentes: ['steam', 'trueTrophies', 'wikiEsSecreto'],
  },
  {
    id: 'r-historias',
    titulo: 'Completa las tres historias y reúne todos los Informes Xehanort',
    texto: 'El Episodio Final se desbloquea tras encontrar todos los Informes Xehanort y completar la historia de los tres personajes. Guarda al final de cada historia: el juego te pedirá crear el archivo del Episodio Final.',
    logros: ['ACH_155', 'ACH_156', 'ACH_157', 'ACH_164', 'ACH_158'],
    fuentes: ['wikiEsFinal', 'wikiEsVanitas'],
  },
  {
    id: 'r-trance',
    titulo: 'Desbloquea Trance armónico al terminar tu primera historia',
    texto: 'El trofeo interno «Cosa de uno» (completar la historia de un personaje) da el estilo de comandos Trance armónico. También se obtiene con 140 puntos del Álbum de pegatinas. Se activa llenando la barra con ataques de tipo Rayo o Minas. Úsalo 20 veces para «A todo ritmo».',
    logros: ['ACH_171'],
    fuentes: ['wikiEsTrofeos', 'wikiEsEstilos'],
  },
  {
    id: 'r-secreto',
    titulo: 'Desbloquea el episodio secreto',
    texto: 'Primero hay que desbloquear el Episodio Final. Después depende de la dificultad: Principiante, inaccesible. Normal, completar el Álbum de pegatinas con los tres personajes y obtener el trofeo interno «Gladiador» (derrotar a 9999 nescientes). Experto, completar el Álbum de pegatinas con los tres. Maestro, completar el Episodio Final.',
    logros: ['ACH_154', 'ACH_165'],
    fuentes: ['wikiEsSecreto', 'wikiEsTrofeos'],
  },
  {
    id: 'r-vanitas',
    titulo: 'Reminiscencia de Vanitas y el desconocido',
    texto: 'Ambos combates se desbloquean al terminar el Episodio Final. Para la reminiscencia: carga cualquier partida, viaja a la Necrópolis de Llaves Espada, entra en el Páramo, acércate al símbolo morado de la roca central y elige «¡Quién dijo miedo!».',
    logros: ['ACH_159', 'ACH_160'],
    fuentes: ['wikiEsFinal', 'wikiEsVanitas'],
  },
  {
    id: 'r-coso',
    titulo: 'Noheart y la armadura de Eraqus están en el Coso Virtual',
    texto: 'Noheart es el rival de «Oscuridad manifiesta» (nivel 30, recompensa: Corona Eterna). La armadura de Eraqus es el rival de «Mentor de la Luz» (nivel 28, recompensa: VT máx. +5). Ambas batallas son exclusivas de Final Mix.',
    logros: ['ACH_161', 'ACH_162'],
    fuentes: ['wikiEsCoso'],
  },
  {
    id: 'r-cuartelillo',
    titulo: 'Consigue Cuartelillo con cada personaje',
    texto: 'Hay un cofre con Cuartelillo en Ciudad Disney (sala de juegos de Pete) y también se puede sintetizar (10 % de probabilidad; el 90 % restante sale Hoja Afortunada). Las recetas cambian según el personaje: las tienes en su página.',
    logros: ['ACH_175', 'ACH_176', 'ACH_177'],
    fuentes: ['wikiEsCuartelillo'],
  },
];

// Golpes finales. Nombres: Wiki ES. Condiciones: KHWiki (más detallada).
// Si la Wiki ES dice otra cosa, se indica en `nota`.
const COMUNES = {
  final: { nombre: 'Final', nivel: 1, cond: 'Disponible desde el principio.', desc: 'Golpe final básico, distinto para cada personaje.' },
  tajo1: { nombre: 'Tajo Pírico I', nivel: 2, cond: 'Activa el estilo Lluvia Pírica 8 veces con Final equipado.', desc: 'Ataque giratorio envuelto en llamas.' },
  oro: { nombre: 'Fiebre del Oro', nivel: 2, cond: 'Consigue 1.000 platines con Final equipado.', desc: 'Ataque con salto que puede hacer soltar platines al enemigo.' },
  sorpresa1: { nombre: '¡Sorpresa! I', nivel: 3, cond: 'Consigue 1.400 platines con Fiebre del Oro equipado.', desc: 'Ataque con salto: pulsa los botones que aparecen y obtendrás premios.' },
};

export const GOLPES_FINALES = {
  terra: [
    COMUNES.final,
    { nombre: 'Columnata I', nivel: 2, cond: 'Consigue 2.000 PJ con Final equipado.', desc: 'Combinación de ataque giratorio y aéreo.' },
    COMUNES.tajo1,
    COMUNES.oro,
    { nombre: 'Columnata II', nivel: 3, cond: 'Consigue 4.200 PJ con Columnata I equipado.', desc: 'Ataque giratorio con salto y rocas que lanzan a los enemigos por los aires.' },
    { nombre: 'Juicio de Lamú', nivel: 3, cond: 'Activa el estilo Pulso Galvánico 12 veces con Columnata I equipado.', desc: 'Ataques repetidos envueltos en electricidad.' },
    { nombre: 'Tiempo Trabado', nivel: 3, cond: 'Camina 7.000 pasos con Columnata I o Fiebre del Oro equipado.', desc: 'Lanza la llave espada varias veces; puede frenar y paralizar.', nota: 'La Wiki ES solo cita Fiebre del Oro como antecesor.' },
    COMUNES.sorpresa1,
    { nombre: 'Estrella Oscura I', nivel: 4, cond: 'Derrota a 420 enemigos con Columnata II equipado.', desc: 'Ataque giratorio y de salto que lanza un meteorito.' },
    { nombre: 'Golpe Sanador', nivel: 4, cond: 'Sobrevive 5 veces a un golpe mortal (Último Estertor / Una vez más) con Columnata II equipado.', desc: 'Ataque de carga y giratorio que restablece tu VT.' },
    { nombre: 'Fin Arbitrario', nivel: 4, cond: 'Camina 8.000 pasos con Tiempo Trabado equipado.', desc: 'Lanza la llave espada y encadena ataques; provoca estados alterados.' },
    { nombre: '¡Sorpresa! II', nivel: 4, cond: 'Consigue 5.200 platines con Tiempo Trabado o ¡Sorpresa! I equipado.', desc: 'Pulsa tres veces bien los botones para obtener premios.' },
    { nombre: 'Estrella Oscura II', nivel: 5, cond: 'Derrota a 550 enemigos con Estrella Oscura I equipado.', desc: 'Lanza varios meteoritos.' },
    { nombre: 'Explosión', nivel: 5, cond: 'Consigue 6.400 PJ con Estrella Oscura I equipado.', desc: 'Ataque de salto que provoca una explosión; aturde.' },
    { nombre: 'Demolición', nivel: 6, cond: 'Consigue 10.000 PJ con Estrella Oscura II equipado.', desc: 'Meteoritos explosivos que guías con el joystick.' },
  ],
  ventus: [
    COMUNES.final,
    { nombre: 'Fulgor Aéreo I', nivel: 2, cond: 'Consigue 2.000 PJ con Final equipado.', desc: 'Ráfaga de viento que eleva al enemigo y le asesta golpes rápidos.' },
    COMUNES.tajo1,
    COMUNES.oro,
    { nombre: 'Fulgor Aéreo II', nivel: 3, cond: 'Consigue 4.000 PJ con Fulgor Aéreo I equipado.', desc: 'Eleva al enemigo con el viento y encadena golpes.', nota: 'La Wiki ES indica 2.000 PJ.' },
    { nombre: 'Juicio de Lamú', nivel: 3, cond: 'Activa el estilo Pulso Galvánico 12 veces con Fulgor Aéreo I equipado.', desc: 'Ataques repetidos envueltos en electricidad.' },
    { nombre: 'Tiempo Trabado', nivel: 3, cond: 'Camina 7.000 pasos con Fulgor Aéreo I o Fiebre del Oro equipado.', desc: 'Lanza la llave espada varias veces; puede frenar y paralizar.' },
    COMUNES.sorpresa1,
    { nombre: 'Fulgor Aéreo III', nivel: 4, cond: 'Camina 4.500 pasos con Fulgor Aéreo II equipado.', desc: 'Sucesión de golpes que termina en un ataque giratorio.' },
    { nombre: 'Golpe Sanador', nivel: 4, cond: 'Sobrevive 5 veces a un golpe mortal (Último Estertor / Una vez más) con Fulgor Aéreo II equipado.', desc: 'Ataque de carga y giratorio que restablece tu VT.' },
    { nombre: '¡Sorpresa! II', nivel: 4, cond: 'Consigue 5.200 platines con Tiempo Trabado o ¡Sorpresa! I equipado.', desc: 'Pulsa tres veces bien los botones para obtener premios.' },
    { nombre: 'Fulgor Aéreo IV', nivel: 5, cond: 'Camina 7.000 pasos con Fulgor Aéreo III equipado.', desc: 'Como el III, pero aturde siempre.' },
    { nombre: 'Explosión', nivel: 5, cond: 'Consigue 6.400 PJ con Fulgor Aéreo III equipado.', desc: 'Ataque de salto que provoca una explosión; aturde.' },
    { nombre: 'Celebración', nivel: 5, cond: 'Consigue 7.000 platines con ¡Sorpresa! II equipado.', desc: 'Hace aparecer platines y premios por doquier.' },
    { nombre: 'Estratosfera', nivel: 6, cond: 'Derrota a 800 enemigos con Fulgor Aéreo IV equipado.', desc: 'Torbellino y picado final que produce una tormenta.' },
  ],
  aqua: [
    COMUNES.final,
    { nombre: 'Pulso Mágico I', nivel: 2, cond: 'Consigue 2.000 PJ con Final equipado.', desc: 'Ataque mágico que lanza por los aires a los enemigos cercanos.' },
    COMUNES.tajo1,
    COMUNES.oro,
    { nombre: 'Pulso Mágico II', nivel: 3, cond: 'Consigue 3.800 PJ con Pulso Mágico I equipado.', desc: 'Orbes mágicos que pueden confundir o congelar.' },
    { nombre: 'Tajo Pírico II', nivel: 3, cond: 'Activa el estilo Lluvia Pírica 12 veces con Tajo Pírico I equipado.', desc: 'Ataques repetidos envueltos en llamas.', nota: 'La Wiki ES indica Final como antecesor.' },
    { nombre: 'Juicio de Lamú', nivel: 3, cond: 'Activa el estilo Pulso Galvánico 12 veces con Pulso Mágico I equipado.', desc: 'Ataques repetidos envueltos en electricidad.' },
    { nombre: 'Tiempo Trabado', nivel: 3, cond: 'Camina 7.000 pasos con Pulso Mágico I o Fiebre del Oro equipado.', desc: 'Lanza la llave espada varias veces; puede frenar y paralizar.' },
    COMUNES.sorpresa1,
    { nombre: 'Pulso Mágico III', nivel: 4, cond: 'Derrota a 350 enemigos con Pulso Mágico II equipado.', desc: 'Orbes que confunden, congelan o enlazan.' },
    { nombre: 'Golpe Sanador', nivel: 4, cond: 'Sobrevive 5 veces a un golpe mortal (Último Estertor / Una vez más) con Pulso Mágico II equipado.', desc: 'Ataque de carga y giratorio que restablece tu VT.' },
    { nombre: '¡Sorpresa! II', nivel: 4, cond: 'Consigue 5.200 platines con Tiempo Trabado o ¡Sorpresa! I equipado.', desc: 'Pulsa tres veces bien los botones para obtener premios.' },
    { nombre: 'Pulso Mágico IV', nivel: 5, cond: 'Derrota a 500 enemigos con Pulso Mágico III equipado.', desc: 'Orbes mágicos con diversos estados alterados.' },
    { nombre: 'Explosión', nivel: 5, cond: 'Consigue 6.400 PJ con Pulso Mágico III equipado.', desc: 'Ataque de salto que provoca una explosión; aturde.' },
    { nombre: 'Impacto Gélido', nivel: 5, cond: 'Activa Polvo de Diamante o Dicha Helada 15 veces con Pulso Mágico III equipado.', desc: 'Ataque giratorio seguido de hechizos de hielo.', nota: 'La Wiki ES indica 12 veces Polvo de Diamante.' },
    { nombre: 'Orbevórtice', nivel: 6, cond: 'Derrota a 800 enemigos con Pulso Mágico IV equipado.', desc: 'Vórtices mágicos entre los que te teletransportas atacando.' },
  ],
};

// Estilos de comandos por personaje (Wiki ES — Estilo de Comandos).
export const ESTILOS = {
  terra: [
    { nombre: 'Impacto Crítico', tipo: 'Nivel 1 · exclusivo', cond: 'Derrota a las Esferas de Luz.' },
    { nombre: 'Lluvia Pírica', tipo: 'Fuego', cond: 'Derrota al Espejo Mágico.' },
    { nombre: 'Polvo de Diamante', tipo: 'Hielo', cond: 'Derrota a la Rueca Fatal.' },
    { nombre: 'Pulso Galvánico', tipo: 'Rayo', cond: 'Derrota al Experimento 221.' },
    { nombre: 'Quiebrarrocas', tipo: 'Nivel 2 · exclusivo', cond: 'Derrota a la Triarmadura.' },
    { nombre: 'Impulso Umbrío', tipo: 'Nivel 2 · exclusivo', cond: 'Visita la Necrópolis de Llaves Espada por segunda vez.' },
    { nombre: 'Aura de Aceros', tipo: 'Nivel 2', cond: 'Derrota a Peter Pan.' },
    { nombre: 'Dicha Helada', tipo: 'Hielo', cond: 'Consigue «Fantástico» en «Paraíso de Sabores» (Experto) de Ritmo helado, en Ciudad Disney.' },
    { nombre: 'Trance Armónico', tipo: 'Final Mix', cond: 'Trofeo interno «Cosa de uno» o 140 puntos del Álbum de pegatinas.' },
  ],
  ventus: [
    { nombre: 'Exacerbación', tipo: 'Nivel 1 · exclusivo', cond: 'Derrota a las Esferas de Luz.' },
    { nombre: 'Lluvia Pírica', tipo: 'Fuego', cond: 'Derrota al Arbolio Loco.' },
    { nombre: 'Polvo de Diamante', tipo: 'Hielo', cond: 'Derrota a Lucifer.' },
    { nombre: 'Pulso Galvánico', tipo: 'Rayo', cond: 'Derrota a Maléfica.' },
    { nombre: 'Ciclón', tipo: 'Nivel 2 · exclusivo', cond: 'Derrota a la Triarmadura.' },
    { nombre: 'Acero Alado', tipo: 'Nivel 2 · exclusivo', cond: 'Se obtiene al enfrentarte por primera vez a Metamorphosis.' },
    { nombre: 'Trepacielos', tipo: 'Nivel 2', cond: 'Completa «Carcelero Implacable» en el Coso Virtual.' },
    { nombre: 'Dicha Helada', tipo: 'Hielo', cond: 'Consigue «Fantástico» en «Paraíso de Sabores» (Experto) de Ritmo helado, en Ciudad Disney.' },
    { nombre: 'Trance Armónico', tipo: 'Final Mix', cond: 'Trofeo interno «Cosa de uno» o 140 puntos del Álbum de pegatinas.' },
  ],
  aqua: [
    { nombre: 'Hila Encantos', tipo: 'Nivel 1 · exclusivo', cond: 'Derrota a las Esferas de Luz.' },
    { nombre: 'Lluvia Pírica', tipo: 'Fuego', cond: 'Derrota a Maléfica en su forma de dragón.' },
    { nombre: 'Polvo de Diamante', tipo: 'Hielo', cond: 'Derrota al Coloso de Hielo y a Hades.' },
    { nombre: 'Pulso Galvánico', tipo: 'Rayo', cond: 'Escolta a Jaq.' },
    { nombre: 'Marcha Etérea', tipo: 'Nivel 2 · exclusivo', cond: 'Derrota a Vanitas en el País de Nunca Jamás.' },
    { nombre: 'Aura de Aceros', tipo: 'Nivel 2', cond: 'Derrota a la Triarmadura.' },
    { nombre: 'Trepacielos', tipo: 'Nivel 2', cond: 'Completa «Amenaza Conjunta» en el Coso Virtual.' },
    { nombre: 'Dicha Helada', tipo: 'Hielo', cond: 'Consigue «Fantástico» en «Paraíso de Sabores» (Experto) de Ritmo helado, en Ciudad Disney.' },
    { nombre: 'Trance Armónico', tipo: 'Final Mix', cond: 'Trofeo interno «Cosa de uno» o 140 puntos del Álbum de pegatinas.' },
  ],
};

// Cuartelillo: recetas por personaje (Wiki ES — Cuartelillo). 10 % Cuartelillo / 90 % Hoja Afortunada.
export const CUARTELILLO = {
  terra: ['Cura++ + Bloqueo Tino (síntesis tipo N)', 'Cura++ + Bloqueo Cura (síntesis tipo P)'],
  ventus: ['Cura++ + Bloqueo Tino (síntesis tipo N)', 'Cura++ + Bloqueo Cura (síntesis tipo P)'],
  aqua: ['Cura++ + Coraza Tino (síntesis tipo N)', 'Cura++ + Coraza Cura (síntesis tipo P)'],
};

// Encuentros del Coso Virtual. Orden: KHWiki (Arena Mission, Final Mix).
// Nombres y fichas: Wiki ES. `null` = la wiki no tiene ficha de ese encuentro todavía.
export const COSO = [
  { id: 'dia-del-juicio', nombre: 'Día del Juicio', nivel: 1, medallas: 75, rival: 'Ferrocustodio I', premio: null },
  { id: 'perdicion-rodada', nombre: 'Perdición Rodada', nivel: 1, medallas: 90, rival: 'Carroza Poseída', premio: { aqua: 'VT máx. +5' } },
  { id: 'traicionera-avaricia', nombre: 'Traicionera Avaricia', nivel: 8, medallas: 105, rival: 'Avituallador', premio: null },
  { id: 'rueca-loca', nombre: 'Rueca Loca', nivel: 1, medallas: 120, rival: 'Rueca Fatal', premio: { terra: 'VT máx. +5' } },
  { id: 'carcelero-implacable', nombre: 'Carcelero Implacable', nivel: 3, medallas: 150, rival: 'Ferrocustodio II', premio: { terra: 'Informe Xehanort V', ventus: 'Trepacielos' } },
  { id: 'el-conjurador', nombre: 'El Conjurador' },
  { id: 'amenaza-conjunta', nombre: 'Amenaza Conjunta', nivel: 7, medallas: 210, rival: 'Triarmadura', premio: { aqua: 'Trepacielos' } },
  { id: 'tesoro-peleon', nombre: 'Tesoro Peleón', nivel: 15, medallas: 240, rival: 'Avituallador', premio: null },
  { id: 'castigo-inexorable', nombre: 'Castigo Inexorable' },
  { id: 'halito-gelido', nombre: 'Hálito Gélido' },
  { id: 'maestro-de-ilusiones', nombre: 'Maestro de Ilusiones' },
  { id: 'custodios-del-coso', nombre: 'Custodios del Coso', logro: 'ACH_196' },
  { id: 'engendro-marino', nombre: 'Engendro Marino', fm: true, nivel: 8, medallas: 675, rival: 'Monstruo', premio: { terra: 'Minimalia', ventus: 'Minimalia', aqua: 'Minimalia' } },
  { id: 'vil-venganza', nombre: 'Vil Venganza', nivel: 25, medallas: 750, rival: 'Jefes del Coso en serie (8 rondas)', premio: { terra: 'Arma Artema', ventus: 'Arma Artema', aqua: 'Arma Artema' }, logro: 'ACH_197' },
  { id: 'mentor-de-la-luz', nombre: 'Mentor de la Luz', fm: true, nivel: 28, medallas: 800, rival: 'Armadura de Eraqus', premio: { terra: 'VT máx. +5', ventus: 'VT máx. +5', aqua: 'VT máx. +5' }, logro: 'ACH_162' },
  { id: 'oscuridad-manifiesta', nombre: 'Oscuridad Manifiesta', fm: true, nivel: 30, medallas: 999, rival: 'Noheart', premio: { terra: 'Corona Eterna', ventus: 'Corona Eterna', aqua: 'Corona Eterna' }, logro: 'ACH_161' },
];

export const BBS = {
  id: 'bbs',
  nombre: 'Birth by Sleep Final Mix',
  logo: 'assets/img/logos/bbsfm.png',
  logros: LOGROS_BBS,
  personajes: PERSONAJES,
};
