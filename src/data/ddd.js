// Datos de Kingdom Hearts Dream Drop Distance (versión HD, colección HD 2.8 Final Chapter Prologue, Steam app 2552440).
// Regla: ningún dato sin fuente. Los 54 logros de DDD son ACH_16…ACH_69 (ACH_01…ACH_15 son de KH 0.2 Birth by Sleep).
// Nombres: los de los logros de Steam en español; para Lucientes, Nexos y mecánicas, Gamerbase (versión HD) y la Wiki ES.
// Los consejos están redactados con palabras propias a partir de las guías citadas (Gamerbase prohíbe copiar sus textos).
import { LOGROS_DDD } from './ddd-logros.js';

const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_DDD = {
  steamDdd: { nombre: 'Steam — logros oficiales (español)', url: 'https://steamcommunity.com/achievements/2552440' },
  gbTrofeos: { nombre: 'Gamerbase — Guía de trofeos de KH Dream Drop Distance (xamo92)', url: 'https://gamerbase.net/guia-de-trofeos/kingdom-hearts-dream-drop-distance-93' },
  gbAnexo: { nombre: 'Gamerbase — Anexo: Fusiones Nexo, Nexos Duales y creación de Lucientes', url: 'https://gamerbase.net/guias/anexo-fusiones-nexo-nexos-duales-y-creacion-de-lucientes-kingdom-hearts-dream-drop-distance-94' },
  kwGuia: { nombre: 'KHWorld — Guía paso a paso de KH Dream Drop Distance (Antonio Matías González Blanco)', url: 'https://khworld.org/iceberg/?centro=guiakh3d' },
  kwSpirits: { nombre: 'KHWorld — Guía de Spirits', url: 'http://www.khworld.org/iceberg/?centro=spirits' },
  kwPortales: { nombre: 'KHWorld — Portales Especiales (traducción de HollowRiku)', url: 'http://www.khworld.org/iceberg/?centro=portaleskh3d' },
  wikiEsOnirido: { nombre: 'Wiki ES — Onírido (Lucientes, Terrores y jefes)', url: `${WES}On%C3%ADrido` },
  wikiEsOnirita: { nombre: 'Wiki ES — Onirita', url: `${WES}Onirita` },
  wikiEsNaiperama: { nombre: 'Wiki ES — Naiperama', url: `${WES}Naiperama` },
  khwikiNaiperama: { nombre: 'KHWiki — Flick Rush (copas y nivel del Naiperama)', url: 'https://www.khwiki.com/Flick_Rush' },
  wikiEsNexario: { nombre: 'Wiki ES — Nexario', url: `${WES}Nexario` },
  khwikiPortal: { nombre: 'KHWiki — Portal (portales secretos)', url: 'https://www.khwiki.com/Portal#Secret_Portal' },
  khwikiDreamEater: { nombre: 'KHWiki — Dream Eater (imágenes y nombres en inglés)', url: 'https://www.khwiki.com/Dream_Eater' },
  laps4: { nombre: 'Laps4 — Guía de trofeos de KH Dream Drop Distance (contraste)', url: 'https://www.laps4.com/comunidad/threads/guia-trofeos-kingdom-hearts-dream-drop-distance.432266/' },
  guiasxamonicas: { nombre: 'Guías Xamónicas — Kingdom Hearts: Dream Drop Distance (contraste)', url: 'https://guiasxamonicas.com/2019/02/23/kingdom-hearts-dream-drop-distance-guia-de-trofeos/' },
};

export const DDD = {
  id: 'ddd',
  nombre: 'Kingdom Hearts Dream Drop Distance',
  logo: 'assets/img/logos/ddd.webp',
  logros: LOGROS_DDD,
};

// Los 54 logros agrupados por la sección de la guía donde se explican (cada logro en una sola).
export const GRUPOS_LOGROS_DDD = [
  { id: 'historia', titulo: 'Historia y mundos', ids: ['ACH_29', 'ACH_30', 'ACH_31', 'ACH_32', 'ACH_33', 'ACH_34', 'ACH_35', 'ACH_36', 'ACH_37'] },
  { id: 'portales', titulo: 'Portales y Nexos', ids: ['ACH_61', 'ACH_62', 'ACH_63', 'ACH_64', 'ACH_65', 'ACH_66', 'ACH_67', 'ACH_68', 'ACH_69'] },
  { id: 'lucientes', titulo: 'Lucientes', ids: ['ACH_46', 'ACH_47', 'ACH_48', 'ACH_49', 'ACH_50', 'ACH_51', 'ACH_52', 'ACH_53'] },
  { id: 'minijuegos', titulo: 'Naiperama y minijuegos', ids: ['ACH_39', 'ACH_40', 'ACH_41', 'ACH_42', 'ACH_43', 'ACH_44', 'ACH_45'] },
  { id: 'realidad', titulo: 'Realidad Alterna', ids: ['ACH_54', 'ACH_55', 'ACH_56', 'ACH_57', 'ACH_58', 'ACH_59', 'ACH_60'] },
  { id: 'progreso', titulo: 'Progreso', ids: ['ACH_16', 'ACH_17', 'ACH_18', 'ACH_20', 'ACH_21', 'ACH_22', 'ACH_23', 'ACH_24'] },
  { id: 'coleccion', titulo: 'Coleccionismo', ids: ['ACH_19', 'ACH_25', 'ACH_26', 'ACH_27', 'ACH_28', 'ACH_38'] },
];

// Antes de empezar: solo hechos con fuente. `logros` enlaza con los logros a los que ayuda.
export const RUTA_DDD = [
  {
    id: 'r-perdible',
    titulo: 'Un solo logro perdible: Habilidad máxima',
    texto: 'Según Gamerbase, el único que se puede perder es «Habilidad máxima», porque exige la habilidad EXP 0 y esa solo existe en las dificultades Experto y Maestro. El resto cabe en cualquier dificultad. Gamerbase recomienda una primera partida en una dificultad baja para hacerlo todo y, al final, empezar otra en Experto importando los Lucientes (vuelven a nivel 1) solo para ese logro.',
    logros: ['ACH_53'],
    fuentes: ['gbTrofeos'],
  },
  {
    id: 'r-orden',
    titulo: 'Orden recomendado en siete pasos',
    texto: '1) Pasarte la historia y, mientras, abrir todos los cofres de Sora y de Riku, usar la Realidad Alterna de cada mundo y comprar algo en cada tienda Moguri. 2) Completar los portales especiales y los secretos con los dos personajes. 3) Cumplir lo que pide el Historial del Diario (fusiones Nexo, tránsitos, minijuegos…). 4) Subir el Naiperama al nivel 20. 5) Conseguir todas las fórmulas, comandos, oniritas y objetos, y crear un Luciente de cada tipo. 6) Los logros de desarrollo de Lucientes. 7) Una partida en Experto para «Habilidad máxima».',
    logros: ['ACH_16', 'ACH_17', 'ACH_18', 'ACH_19'],
    fuentes: ['gbTrofeos'],
  },
  {
    id: 'r-sopor',
    titulo: 'Caer en Sopor cambia los portales',
    texto: 'Cada vez que cambias de personaje (a mano desde el menú principal o automáticamente) caes en Sopor, y solo así cambia el portal especial activo de cada mundo. Por eso «Una vida soporífera» sale casi sola al completar los portales; si quieres adelantarla, pulsa «Caer en Sopor» 100 veces en el menú principal.',
    logros: ['ACH_22', 'ACH_61'],
    fuentes: ['gbTrofeos', 'kwPortales'],
  },
  {
    id: 'r-final',
    titulo: 'El final secreto',
    texto: 'Para el 100 % de la historia hay que ver el final secreto. Tras el jefe final necesitas haber conseguido cierto número de trofeos del juego (13 en Principiante, 7 en Normal, 5 en Experto; en Maestro basta con acabarlo) y responder bien a las tres preguntas finales: «Sí, he perdido algo importante», «Un amigo importante» y «Para devolver aquello que es importante». Si ya acabaste el juego, puedes volver a ver los créditos desde Escenas para repetir esa parte.',
    logros: ['ACH_18', 'ACH_16'],
    fuentes: ['gbTrofeos'],
  },
  {
    id: 'r-guardar',
    titulo: 'Guarda varias partidas',
    texto: 'Hay jugadores que informan de que «Coleccionista de objetos» no se desbloqueó al llegar al 100 % en objetos. Conviene conservar partidas anteriores cerca del final de la colección.',
    logros: ['ACH_19'],
    fuentes: ['laps4'],
  },
];

// Cómo conseguir cada logro, con palabras propias. Las listas completas están en la sección indicada.
export const CONSEJOS_DDD = {
  ACH_16: 'Es la suma de tres cosas: el 100 % en combate (Luchador curtido), el 100 % en historia (Cuentacuentos) y todos los objetos (Coleccionista de objetos), además de los demás logros. El porcentaje de cada uno se ve en Informes, en el menú principal. En la sección Progreso está la lista de lo que cuenta para cada uno.',
  ACH_17: 'Pide el 100 % en combate. Gamerbase exige subir el Naiperama al nivel 20 para este logro; la lista de lo que cuenta (Julius con los dos personajes, portales, tránsitos con rango A…) está en la sección Progreso. Las guías no coinciden del todo en qué entra aquí: Laps4 y Guías Xamónicas piden cosas distintas.',
  ACH_18: 'Pide el 100 % en la historia: terminar el juego y ver el final secreto. Los pasos están en «Antes de empezar» y en la sección Progreso.',
  ACH_19: 'Hay que tener todas las Llaves Espada, oniritas, fórmulas, comandos y objetos de los Lucientes, y haber abierto todos los cofres (los «Tesoros») con los dos personajes. En Informes > Tesoros ves cuáles te faltan y, como están numerados, puedes localizarlos en los mapas de cada mundo. Guarda varias partidas cerca del final.',
  ACH_20: 'Se consigue cuando el nivel de Sora más el de Riku suma 100 (por ejemplo, 54 y 46). Sale solo mientras haces el resto.',
  ACH_21: 'Los puntos de Sopor son las gotitas que sueltan los enemigos al caer y los portales también dan. Hay que reunir 300 en un solo turno, sin caer en Sopor; objetos como Desvelo ayudan a no caer.',
  ACH_22: 'Cambiar de personaje cuenta como caer en Sopor, a mano o automáticamente. Sale sola al completar portales, o pulsando «Caer en Sopor» 100 veces en el menú principal, donde ves el contador.',
  ACH_23: 'Cualquier tránsito sin daño. El más fácil es el primero del juego: esquiva todos los obstáculos. Si te golpean, reinícialo desde la pausa.',
  ACH_24: 'Un tránsito con calificación A. Cada mundo y personaje tiene un objetivo de puntuación y de tiempo (tabla en la sección Progreso). Lo más sencillo es ir rápido y evitar los golpes, que te frenan.',
  ACH_25: 'Compra algo en cada tienda Moguri, con cada personaje (son distintas para Sora y Riku). Están junto a los puntos de guardado: compra cada vez que encuentres una nueva.',
  ACH_26: 'La lista de comandos está en Coleccionismo, con cómo se consigue cada uno. Algunos solo salen como premio al caer en Sopor.',
  ACH_27: 'Hay 54 fórmulas, una por Luciente. Dónde está cada una, en la sección Lucientes.',
  ACH_28: 'Hay 36 oniritas. Las sueltan algunos Terrores, están en cofres, en las tiendas Moguri (las rebajas traen exclusivas) y como premio en los Portales Nexo. Lista en Coleccionismo.',
  ACH_29: 'Es de historia: derrota a la proyección de Úrsula y empieza el examen de graduación.',
  ACH_30: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_31: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_32: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_33: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_34: 'Es de historia: se completa en la segunda visita a Ciudad de Paso, con Sora y con Riku.',
  ACH_35: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_36: 'Es de historia: se completa al acabar el mundo con Sora y con Riku.',
  ACH_37: 'Es de historia: se completa al acabar el último mundo con Sora y con Riku.',
  ACH_38: 'Los recuerdos son escenas que se desbloquean al avanzar la historia. Si no las ves en el momento, están en Mementos, en el menú principal. Basta con entrar a cada una y salir.',
  ACH_39: 'Hay que sacar la calificación de estrella en todas las copas. Un truco: lleva al menos un Luciente que sepa Megafulgor (como Rextiriano o Draconte), que daña a los tres Lucientes rivales a la vez, y gana sin perder casi vida.',
  ACH_40: 'Cada partida da medallas, ganes o pierdas. Cuando sumes 3000, sale el logro.',
  ACH_41: 'Sale en el tutorial del Naiperama: cuando se enfrentan dos cartas del mismo valor, aparece una máquina tragaperras de tres rodillos. Alinea tres 7; el rival es lento.',
  ACH_42: 'No se puede conseguir durante la historia de La Red. Vuelve con Riku a la zona Ciudad y usa el vehículo de transporte para jugar a la moto de luz. 1000 puntos es fácil si eliminas a todos los enemigos; puedes cambiar entre atacar de frente o por detrás.',
  ACH_43: 'Globo es un juguete para los Lucientes. Hay que sumar 200 puntos explotando los globos que lanzan. Espera a que el globo esté muy cerca (las flechas cambian de color) para ganar 3 puntos por cada uno.',
  ACH_44: 'Tonel es otro juguete: los Lucientes van dentro de burbujas, como en un pinball. Golpéalos para llevarlos a los objetivos (flores amarillas, cofres, bolas rojas) y usa las corrientes de agua. Mantén al menos dos Lucientes en juego y recoge las esferas rojas.',
  ACH_45: 'Gologafas es otro juguete: lanza caramelos rosas y azules a los Lucientes según el que pidan. Las cajas de caramelos satisfacen de golpe a los que están cerca de ella.',
  ACH_46: 'Basta con equipar tres Lucientes.',
  ACH_47: 'Hay que usar en el menú Lucientes el Globo, el Tonel, las Gologafas y el Spray de pintura (tintes).',
  ACH_48: 'Forma un grupo de tres Lucientes y juega a minijuegos o acarícialos hasta que los tres tengan estrellitas alrededor.',
  ACH_49: 'Hay que subir la afinidad de un Luciente al nivel 9, acariciándolo o con minijuegos. Activa la bonificación de Sopor «Afinidad de nivel 3»: da más puntos por minijuego.',
  ACH_50: 'Hay que criar un Luciente de clase ★. Un ejemplo que funciona: Maliflor con 4 Fantasía atribulada y 5 Ensueño alado. Guarda antes por si te quedas sin materiales.',
  ACH_51: 'Hay que desbloquear con puntos de Nexo todos los nodos del Nexario de un Luciente. Algunos nodos están ocultos y solo se desbloquean cambiando su disposición (con caricias, toquecitos o comidas). Los Lucientes con todos los nodos desde el principio son Arlefoquín, Chiguaumiau, Voráznade, Demidraco, Majemaguau, Nekulebra, Circurso y Focaspá.',
  ACH_52: 'En combate, un Luciente caído muestra una cuenta atrás en su barra de vida. Acércate y pulsa repetidamente para rellenársela. Hazlo tres veces.',
  ACH_53: 'Perdible: requiere Experto o Maestro por la habilidad EXP 0. Hay que desbloquear y activar todas las habilidades de apoyo y de Lucientes (lista en la sección Lucientes) desarrollando el Nexario de distintos Lucientes.',
  ACH_54: 'Tirachinas: usa la Realidad Alterna en Ciudad de Paso (barril o enemigo) y derrota a 5 enemigos con un solo golpe. Hay un barril con 5 enemigos en la plaza del Naiperama, subiendo las escaleras de enfrente.',
  ACH_55: 'Lazo sacro: usa la Realidad Alterna en La Ciudad de las Campanas sobre las esferas blancas y une 6 puntos con un mismo lazo. El mejor sitio es la plaza delante de la catedral.',
  ACH_56: 'Descifrado: usa la Realidad Alterna en La Red y activa los siete comandos (lista en la sección Realidad Alterna) sobre el objetivo que corresponde a cada uno.',
  ACH_57: 'Explota burbujas: usa la Realidad Alterna en El Paraíso del Bromista y atrapa a 6 enemigos en una burbuja. Un buen sitio son las Entrañas de Monstruo, por la cantidad de enemigos.',
  ACH_58: 'Historieta: usa la Realidad Alterna en El País de los Mosqueteros y activa las cuatro viñetas (lista en la sección Realidad Alterna). La quinta viñeta, exclusiva del jefe de Sora, no cuenta.',
  ACH_59: 'Golpe de ritmo: usa la Realidad Alterna en Sinfonía del Brujo y derrota a 4 enemigos en un turno. Un buen sitio es la última zona antes de la Arboleda Dorada: salen cinco enemigos débiles.',
  ACH_60: 'Fantasía dual / Ilusión dual: usa la Realidad Alterna en El Mundo Inexistente sobre un enemigo y corta todas las cadenas de un solo golpe, tres veces seguidas. No hay límite de tiempo: espera a que los eslabones claros se alineen.',
  ACH_61: 'Cada mundo tiene 6 portales especiales por personaje y solo puedes completar uno por mundo cada vez que caes en Sopor. Basta con eliminar a todos los Lucientes que salgan: no hace falta cumplir el objetivo de bonificación. El 6.º no aparece hasta completar los anteriores.',
  ACH_62: 'Igual que en Ciudad de Paso: 6 portales por personaje (sección Portales y Nexos).',
  ACH_63: 'Igual que en Ciudad de Paso: 6 portales por personaje (sección Portales y Nexos).',
  ACH_64: 'Igual que en Ciudad de Paso: 6 portales por personaje (sección Portales y Nexos).',
  ACH_65: 'Igual que en Ciudad de Paso: 6 portales por personaje (sección Portales y Nexos).',
  ACH_66: 'Igual que en Ciudad de Paso: 6 portales por personaje (sección Portales y Nexos).',
  ACH_67: 'En El Mundo Inexistente son solo 3 portales especiales por personaje; el 3.º no aparece hasta completar los anteriores.',
  ACH_68: 'Cada Portal Nexo propone un objetivo de bonificación. Hay 7 distintos y hay que superar al menos uno de cada tipo (lista en la sección Portales y Nexos).',
  ACH_69: 'Al acabar el juego se abren los portales secretos, en los lugares donde luchaste contra los jefes: son esos jefes con más vida y más daño. Hay que completarlos con los dos personajes.',
};
