// Datos de KINGDOM HEARTS III + Re Mind (DLC), Steam (app 2552450, aparte de la colección HD 1.5+2.5 ReMIX).
// Regla: ningún dato sin fuente. Nombres: los de los logros de Steam en español; si no salen allí, los de la Wiki ES.
// Si solo hay nombre en inglés, va en inglés entre «».
import { LOGROS_KH3 } from './kh3-logros.js';

const KHW = 'https://www.khwiki.com/';
const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_KH3 = {
  steamKh3: { nombre: 'Steam — logros oficiales de KH III + Re Mind (español)', url: 'https://steamcommunity.com/stats/2552450/achievements/?l=spanish' },
  ppxKh3: { nombre: 'PowerPyx — guía de trofeos de Kingdom Hearts 3 (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-trophy-guide-roadmap/' },
  khwPremium: { nombre: 'KHWiki — Premium Menu (códigos y méritos)', url: `${KHW}Premium_Menu` },
  khwRemind: { nombre: 'KHWiki — Kingdom Hearts III Re Mind', url: `${KHW}Kingdom_Hearts_III_Re_Mind` },
  khwDatos: { nombre: 'KHWiki — Real Organization XIII\'s Recreated Data', url: `${KHW}Real_Organization_XIII%27s_Recreated_Data` },
  khwPortafortuna: { nombre: 'KHWiki — Lucky Emblem', url: `${KHW}Lucky_Emblem` },
  wesPortafortuna: { nombre: 'Wiki ES — Portafortunas', url: `${WES}Portafortunas` },
  khwArtema: { nombre: 'KHWiki — Ultima Weapon', url: `${KHW}Ultima_Weapon` },
  wesArtema: { nombre: 'Wiki ES — Arma Artema', url: `${WES}Arma_Artema` },
  khwOricalco: { nombre: 'KHWiki — Orichalcum (Orichalcum+)', url: `${KHW}Orichalcum` },
  khwFlanes: { nombre: 'KHWiki — Flantastic Seven', url: `${KHW}Flantastic_Seven` },
  wesFlanes: { nombre: 'Wiki ES — Los Siete Flantásticos', url: `${WES}Los_Siete_Flant%C3%A1sticos` },
  khwDeslizamiento: { nombre: 'KHWiki — Frozen Slider', url: `${KHW}Frozen_Slider` },
  wesIman: { nombre: 'Wiki ES — Imán Maestro', url: `${WES}Im%C3%A1n_Maestro` },
  khwEclipse: { nombre: 'KHWiki — The Eclipse (nave gumi)', url: `${KHW}The_Eclipse` },
  khwPostal: { nombre: 'KHWiki — Prize Postcard', url: `${KHW}Prize_Postcard` },
  khwCaribe: { nombre: 'KHWiki — The Caribbean', url: `${KHW}The_Caribbean` },
  khwPoder: { nombre: 'KHWiki — Wellspring (materiales de Poder)', url: `${KHW}Wellspring` },
  khwClaro: { nombre: 'KHWiki — Lucid (materiales Claros)', url: `${KHW}Lucid` },
  khwFuerza: { nombre: 'KHWiki — Pulsing (materiales de Fuerza)', url: `${KHW}Pulsing` },
  wesPoder: { nombre: 'Wiki ES — Poder (material)', url: `${WES}Poder` },
  wesClaro: { nombre: 'Wiki ES — Claro (material)', url: `${WES}Claro` },
  wesFuerza: { nombre: 'Wiki ES — Fuerza (material)', url: `${WES}Fuerza` },
  wesFluorita: { nombre: 'Wiki ES — Fluorita', url: `${WES}Fluorita` },
  khwGranSoldado: { nombre: 'KHWiki — High Soldier', url: `${KHW}High_Soldier` },
  khwGranYelmo: { nombre: 'KHWiki — Helmed Body', url: `${KHW}Helmed_Body` },
  khwAncla: { nombre: 'KHWiki — Anchor Raider', url: `${KHW}Anchor_Raider` },
  khwSintesis: { nombre: 'KHWiki — Synthesis (Kingdom Hearts III)', url: `${KHW}Synthesis` },
  wesFormaSuprema: { nombre: 'Wiki ES — Forma Suprema', url: `${WES}Forma_Suprema` },
  khwInfinity: { nombre: 'KHWiki — Infinity Circle', url: `${KHW}Infinity_Circle` },
  ppxTesoros: { nombre: 'PowerPyx — coleccionables de KH3 por mundo (tesoros, inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-collectibles-guide-treasures-lucky-emblems/' },
  khwObjetos: { nombre: 'KHWiki — páginas de objeto (dónde sale cada uno en KH III), p. ej. Hi-Refocuser', url: `${KHW}Hi-Refocuser` },
  khwCofres: { nombre: 'KHWiki — Treasure Chest (cofres de cada mundo)', url: `${KHW}Treasure_Chest` },
  ppxSintesis: { nombre: 'PowerPyx — los 88 objetos de síntesis de KH3 (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-synthesis-items-list/' },
  ppxFotos: { nombre: 'PowerPyx — misiones fotográficas de los moguris (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-moogle-photo-missions-locations/' },
  khwSintesis: { nombre: 'KHWiki — Synthesis (objetivos de coleccionista y misiones fotográficas de KH III)', url: `${KHW}Synthesis` },
  khwMateriales: { nombre: 'KHWiki — páginas de cada familia de materiales (enemigos y %), p. ej. Blazing', url: `${KHW}Blazing` },
  wesMateriales: { nombre: 'Wiki ES — Materiales de síntesis', url: `${WES}Categor%C3%ADa:Materiales_de_S%C3%ADntesis` },
  ppxFlanes: { nombre: 'PowerPyx — dónde están los Siete Flantásticos (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-flantastic-seven-locations/' },
  khwMinijuegos: { nombre: 'KHWiki — minijuegos de KH III (Verum Rex, Festival Dance, Frozen Slider, Flash Tracer)', url: `${KHW}Flash_Tracer` },
  khwClasico: { nombre: 'KHWiki — Classic Kingdom', url: `${KHW}Classic_Kingdom` },
  ppxRecords: { nombre: 'PowerPyx — récords del gumífono (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-all-game-records-list/' },
  wesAtracciones: { nombre: 'Wiki ES — Atracciones', url: `${WES}Atracciones` },
  khwRutasGumi: { nombre: 'KHWiki — rutas gumi de KH III (Starlight Way, Misty Stream, The Eclipse)', url: `${KHW}Misty_Stream` },
  ppxConst: { nombre: 'PowerPyx — dónde están las constelaciones (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-constellation-photograph-locations/' },
  khwSchwarz: { nombre: 'KHWiki — Schwarzgeist', url: `${KHW}Schwarzgeist` },
  khwBistro: { nombre: 'KHWiki — Le Grand Bistrot (platos, minijuegos de cocina y estrellas)', url: `${KHW}Le_Grand_Bistrot` },
  khwIngredientes: { nombre: 'KHWiki — Ingredients (dónde sale cada ingrediente)', url: `${KHW}Ingredients` },
  ppxRecetas: { nombre: 'PowerPyx — las 28 recetas de KH3 (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-all-cooking-recipes-list/' },
  ppxIngredientes: { nombre: 'PowerPyx — dónde están los ingredientes (inglés)', url: 'https://www.powerpyx.com/kingdom-hearts-3-all-ingredients-locations/' },
  wesAccesorios: { nombre: 'Wiki ES — Accesorios de Kingdom Hearts III', url: `${WES}Categor%C3%ADa:Accesorios_de_Kingdom_Hearts_III` },
};

export const KH3 = {
  id: 'kh3',
  nombre: 'Kingdom Hearts III + Re Mind',
  logo: 'assets/img/logos/kh3.webp',
  logros: LOGROS_KH3,
};

// Agrupación de los 51 logros. Orden dentro de cada grupo: de más fácil a más difícil.
export const GRUPOS_LOGROS_KH3 = [
  { id: 'historia', titulo: 'Historia', ids: ['ACH_01', 'ACH_02', 'ACH_03', 'ACH_04', 'ACH_05', 'ACH_06', 'ACH_07', 'ACH_08', 'ACH_09', 'ACH_10', 'ACH_11', 'ACH_12', 'ACH_13', 'ACH_14'] },
  { id: 'remind', titulo: 'Re Mind (DLC)', ids: ['ACH_48', 'ACH_49', 'ACH_50', 'ACH_51'] },
  { id: 'codigos', titulo: 'Códigos PRINCIPIANTE y EXPERTO', ids: ['ACH_46', 'ACH_47'] },
  { id: 'artema', titulo: 'Arma Artema, llaves espada y nivel', ids: ['ACH_43', 'ACH_44', 'ACH_45'] },
  { id: 'gumifono', titulo: 'Gumífono', ids: ['ACH_16', 'ACH_19', 'ACH_17', 'ACH_15', 'ACH_18'] },
  { id: 'combate', titulo: 'Combate', ids: ['ACH_20', 'ACH_21', 'ACH_22', 'ACH_23', 'ACH_24', 'ACH_25'] },
  { id: 'minijuegos', titulo: 'Siete Flantásticos y minijuegos', ids: ['ACH_26', 'ACH_31', 'ACH_32', 'ACH_30', 'ACH_33', 'ACH_41', 'ACH_42'] },
  { id: 'gumi', titulo: 'Nave gumi', ids: ['ACH_27', 'ACH_28', 'ACH_29'] },
  { id: 'caribe', titulo: 'El Caribe', ids: ['ACH_35', 'ACH_34'] },
  { id: 'fotos', titulo: 'Fotos y cocina', ids: ['ACH_36', 'ACH_37', 'ACH_39', 'ACH_38', 'ACH_40'] },
];

// Antes de empezar: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA_KH3 = [
  {
    id: 'r-aventura',
    titulo: 'La única elección que importa: qué aventura eliges al empezar',
    texto: 'En el Descenso al Corazón, tras elegir el poder, el juego ofrece tres aventuras: la habitual (sin menú de códigos), la fácil (abre los códigos PRINCIPIANTE) y la desafiante (abre los códigos EXPERTO). «Versátil» pide méritos PRINCIPIANTE y «Temerario», el rango más alto de méritos EXPERTO, así que con la elección decides cuál puedes empezar a hacer. Al derrotar a Yozora en el Episodio secreto se abren los dos menús en esa partida, elijas lo que elijas. Si eliges la desafiante, los códigos EXPERTO empiezan todos activados.',
    logros: ['ACH_46', 'ACH_47', 'ACH_51'],
    fuentes: ['khwPremium'],
  },
  {
    id: 'r-perdibles',
    titulo: 'No hay nada perdible',
    texto: 'Todo se puede hacer después de la historia, recorriendo los mundos con libertad, y en cualquier dificultad. Basta una partida para todos los logros del juego base. Guarda al terminar el juego para poder seguir con lo que falte.',
    logros: [],
    fuentes: ['ppxKh3'],
  },
  {
    id: 'r-codigos',
    titulo: 'Cuidado con los códigos PRINCIPIANTE activados',
    texto: 'Con códigos PRINCIPIANTE activados hay logros que no se pueden conseguir, y con códigos de combate PRINCIPIANTE activados no se ganan puntos de mérito EXPERTO. Para los méritos PRINCIPIANTE no hace falta activar ningún código, salvo en el reto de Supervivencia.',
    logros: ['ACH_46', 'ACH_47'],
    fuentes: ['khwPremium'],
  },
  {
    id: 'r-artema',
    titulo: 'El Arma Artema se prepara durante todo el juego',
    texto: 'Su receta se abre al registrar 58 materiales de síntesis distintos y pide 7 Orichalcum+, que no se compran ni caen de enemigos: cada uno sale de un sitio concreto. Tienes la lista completa, marcable, en la sección Arma Artema.',
    logros: ['ACH_44', 'ACH_18'],
    fuentes: ['khwArtema', 'khwOricalco'],
  },
  {
    id: 'r-final-secreto',
    titulo: 'Los portafortuna y el final secreto',
    texto: 'Para ver el final secreto hay que fotografiar portafortuna según la dificultad: los 90 en «Beginner», 60 en «Standard», 30 en «Proud» y ninguno en «Critical». Los del Olimpo solo se pueden fotografiar al volver al mundo después de luchar contra la Ola Infernal en Villa Crepúsculo.',
    logros: ['ACH_15'],
    fuentes: ['khwPortafortuna'],
  },
  {
    id: 'r-remind',
    titulo: 'Re Mind va en tres partes y en orden',
    texto: 'Primero Re Mind, la historia extra durante el clímax del juego. Después el episodio Limitcut: en el ordenador de la casa de Merlín, en Vergel Radiante, se abren trece combates contra los datos de la Organización XIII real (al principio once; el maestro Xehanort y Xion, al vencer a los demás). Al vencer a los trece se abre el Episodio secreto, con el combate contra Yozora. Son los combates más difíciles del juego.',
    logros: ['ACH_48', 'ACH_49', 'ACH_50', 'ACH_51'],
    fuentes: ['khwRemind', 'khwDatos'],
  },
];

// Consejos por logro (solo con fuente; ver FUENTES_CONSEJOS_KH3).
export const CONSEJOS_KH3 = {
  ACH_10: 'Hay que superar los tres minijuegos del Bosque de los Cien Acres. Se desbloquean a través de Merlín, en el Bistró de Villa Crepúsculo.',
  ACH_15: 'Son 90 en total. Al fotografiar 80 te dan un Orichalcum+ (uno de los 7 del Arma Artema) y a los 90, el último premio. Los del Olimpo solo aparecen al volver tras la Ola Infernal de Villa Crepúsculo.',
  ACH_16: 'Basta con derrotar al menos a un enemigo de cada tipo. Mira en el gumífono cuáles te faltan.',
  ACH_17: 'Son 245 cofres. Algunas zonas solo se abren después de la historia, así que habrá que volver a algunos mundos. Los tienes todos, con cómo llegar, en la sección Tesoros.',
  ACH_18: 'Hay que fabricar todos los objetos de la tienda Moguri, también el Arma Artema. Déjalo para el final.',
  ACH_19: 'Consigue el icono de Mickey en todas las categorías de Récords.',
  ACH_20: 'Derrota a un enemigo con una atracción.',
  ACH_21: 'Derrota a un enemigo con un vínculo (unecorazones).',
  ACH_22: 'Lanza una Gran magia. Lo más seguro es rematar a un enemigo con ella.',
  ACH_23: 'Sale solo jugando.',
  ACH_24: 'Sale solo jugando.',
  ACH_25: 'Sale mientras subes de nivel o farmeas materiales.',
  ACH_26: 'Supera una vez los minijuegos de los siete flanes. Aparecen al volver a los mundos. Con la puntuación alta en los siete ganas además un Orichalcum+: las puntuaciones están en la sección Arma Artema.',
  ACH_27: 'Consigue 20 tesoros distintos con rango A en los combates de la nave gumi. La nave Golden Highwind lo pone mucho más fácil.',
  ACH_28: 'Fotografía todas las constelaciones desde la nave gumi.',
  ACH_29: 'Está en el centro del ciclón de «Misty Stream» y para entrar hace falta una nave con velocidad 200 o más: fotografía la constelación Endymion, cerca de El Caribe, y te dan la nave Endymion. Destruye primero los cañones de las patas y lleva el «Repair Kit» para curarte.',
  ACH_30: 'Usa el Gigas morado y no pierdas el multiplicador.',
  ACH_31: 'Encadena todo lo que puedas y no te pares en los barriles.',
  ACH_32: 'No choques: llegar sin recibir daño da 50 000 puntos extra. Si además recoges los 10 tesoros del recorrido, ganas un Orichalcum+.',
  ACH_33: 'Rango A en los dos circuitos. El segundo es el más difícil.',
  ACH_34: 'Mejora el Leviatán hasta el nivel 9 recogiendo cangrejos.',
  ACH_35: 'Sale navegando por El Caribe y combatiendo con el Leviatán.',
  ACH_36: 'La primera foto se puede hacer tras el jefe de Villa Crepúsculo.',
  ACH_37: 'Ten guardadas 50 fotos a la vez.',
  ACH_38: 'Reúne todos los ingredientes. Los de los flanes salen al superar sus minijuegos.',
  ACH_40: 'Saca un «Excelente» en cada receta.',
  ACH_41: 'Supera el récord de cualquiera de los juegos del Reino clásico.',
  ACH_42: 'Supera el récord de los 23 juegos del Reino clásico (cada uno tiene su icono de Mickey).',
  ACH_43: 'Mejora una llave espada hasta el nivel 10 en la tienda Moguri. En la sección Arma Artema tienes el coste de cada mejora del Arma Artema.',
  ACH_44: 'Receta, los 7 Orichalcum+ y dónde caen los cristales: en la sección Arma Artema de esta guía.',
  ACH_45: 'Lo más rápido es repetir las «Battlegate» del Olimpo o de Villa Crepúsculo.',
  ACH_46: 'Son nueve retos (aéreo, «Rage Form», vínculo, congelar, Gigas, sin pisar el suelo en el Reino de Corona, Schwarzgeist con rango A, bolos en Monstruópolis y Supervivencia). Es mucho más fácil después de derrotar a Yozora, con los dos menús de códigos abiertos.',
  ACH_47: 'Los méritos salen al vencer a ciertos jefes con códigos EXPERTO activados: cada estrella de código multiplica por 1,25 los puntos del jefe. Lo más cómodo es una partida nueva+ en «Beginner», llevando el Arma Artema y Gran Chef de la partida terminada, y vencer a todos los jefes del juego base y a Xehanort con armadura de Re Mind con todos los códigos (unos 175 000 puntos). Lo que falta, con los combates de datos: Luxord y el joven Xehanort son los más asequibles.',
  ACH_48: 'Termina la historia de Re Mind.',
  ACH_49: 'Desde el ordenador de la casa de Merlín, en Vergel Radiante (episodio Limitcut), vence a cualquiera de los datos de la Organización XIII.',
  ACH_50: 'Vence a los trece. Al principio hay once; el maestro Xehanort y Xion se abren al vencer a los demás.',
  ACH_51: 'Se abre al vencer a los trece datos de la Organización XIII. Al derrotarle se abren los dos menús de códigos en esa partida.',
};
export const FUENTES_CONSEJOS_KH3 = ['steamKh3', 'ppxKh3', 'khwPremium', 'khwDatos', 'khwPortafortuna', 'khwFlanes', 'khwDeslizamiento', 'khwOricalco'];

// Nota de discrepancia para «Temerario»: la tabla de rangos y la estrategia de KHWiki no dan la misma cifra.
export const NOTA_RANGO_A = 'KHWiki da 364 125 puntos para el rango A en su tabla de rangos y 365 125 en su estrategia. Apunta a la cifra más alta para ir sobre seguro.';
