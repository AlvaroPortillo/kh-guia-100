// Sora en KH II Final Mix: formas de fusión, invocaciones, magia y nivel. A mano.
// Fuentes: KHWiki (formas, habilidades, magia, invocaciones), guía de Steam «Drive Form & Summon leveling» (cómo y dónde subir cada
// forma, experiencia del nivel 7, barra de fusión) y guía de Megido (nombres en castellano y dónde subir Valiente, Sabia y Suma).
// Nombres de habilidades: Megido y Wiki ES (Prisa PM = MP Haste, Buena Suerte = Lucky Lucky, Aspirar Daño = MP Rage).
// Ids: kh2fm.fusion.<forma>.<nivel>, kh2fm.invoc.<id>, kh2fm.invoc.nivel.<n>, kh2fm.magia.<id>.<n>.
export const FUENTES_SORA_KH2FM = {
  khwikiFormas: { nombre: 'KHWiki — Drive Form (y páginas de cada forma y habilidad)', url: 'https://www.khwiki.com/Drive_Form' },
  guiaSteamFusiones: { nombre: 'Guía de Steam «KH2FM Drive Form and Summon leveling» (inglés)', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3268532837' },
  guiaMegidoFusiones: { nombre: 'Guía de Megido (GameFAQs, en castellano) — Fusiones e invocaciones', url: 'https://gamefaqs.gamespot.com/pc/312955-kingdom-hearts-hd-i5-plus-ii5-remix/faqs/82144/fusiones' },
  khwikiInvoc: { nombre: 'KHWiki — Summon', url: 'https://www.khwiki.com/Summon' },
  khwikiMagia: { nombre: 'KHWiki — Fire, Blizzard, Thunder, Cure, Magnet y Reflect', url: 'https://www.khwiki.com/Magic' },
  fandomArmasKh2: { nombre: 'Fandom (inglés) — Kingdom Hearts II weapons', url: 'https://kingdomhearts.fandom.com/wiki/Kingdom_Hearts_II_weapons' },
  wikiEsArmasKh2: { nombre: 'Wiki ES — páginas de cada llave espada, bastón y escudo (Armas de Sora, Donald y Goofy)', url: 'https://kingdomhearts.fandom.com/es/wiki/Categor%C3%ADa:Armas_de_Sora' },
};

export const BARRA_FUSION = {
  texto: 'La barra de fusión empieza con 3 niveles y llega a 9. Sube uno al vencer a Barbossa (primera visita a Port Royal), al Programa Hostil (primera visita a Espacio Paranoico), a Sephiroth, a la Esencia intangible de Marluxia, al terminar el juego (Xemnas) y a la Consciencia Latente.',
  coste: 'Valiente y Sabia cuestan 3 niveles; Suma y Maestra, 4; Final, 5; las invocaciones, 3.',
  tope: 'Las formas empiezan con el nivel máximo 3 y el tope sube uno con cada forma nueva, hasta el 7 con todas.',
  truco: 'Si sales del mundo (o de la zona, en sitios donde el grupo se separa) antes de que se acabe la barra, la forma se cancela y recuperas la barra entera. Así puedes repetir en un punto de guardado sin gastar nada.',
};

// Habilidades que gana Sora (fuera de la forma) al subir cada una. `crec`: habilidad de crecimiento (niveles 1, 2 y 3 al 3, 5 y 7).
export const FUSIONES_KH2FM = [
  {
    id: 'valiente', nombre: 'Forma Valiente', exp: 'Un punto por cada golpe con la llave espada. Para el nivel 7, 2.200 golpes.',
    consigue: 'Al recibir la ropa nueva de las hadas en la Torre de los Misterios, antes de salir por primera vez de Villa Crepúsculo.',
    habs: { 2: 'Auto-valor', 4: 'Combo +1', 6: 'Combo +1' }, crec: 'Salto de altura',
    donde: 'En la sala del tesoro de la Cueva de las Maravillas (Agrabah), contra la seta N.º V, con Prometida y Explorador Estelar y los combos aéreos sin el remate. Megido propone la seta N.º XI del Canal de Río Eterno.',
  },
  {
    id: 'sabia', nombre: 'Forma Sabia', exp: 'Un punto por cada sincorazón derrotado. Para el nivel 7, 450.',
    consigue: 'Al completar Río Eterno, en el Castillo Disney.',
    habs: { 2: 'Auto-sabia', 4: 'Aspirar Daño', 6: 'Prisa PM' }, crec: 'Carrera rápida',
    donde: 'Lo más rápido: en El Mundo Inexistente, antes de vencer a su primer jefe, en el Cruce de los Fragmentos solo salen Sombras sin fin. Si no, en el Muelle de Río Eterno con Electro: sal por la puerta y vuelve a entrar.',
  },
  {
    id: 'suma', nombre: 'Forma Suma', exp: 'Un punto cada vez que usas el remate de un comando Suma, aunque no acierte. Para el nivel 7, 90.',
    consigue: 'Tras la segunda visita a Villa Crepúsculo. Es la forma nueva de Final Mix.',
    habs: { 2: 'Auto-suma', 4: 'Atracción', 6: 'Buena Suerte' }, crec: 'Voltereta',
    donde: 'Contra la seta N.º V de la sala del tesoro de la Cueva de las Maravillas, encadenando Estocada Sónica y su remate; repón PM en el punto de guardado.',
  },
  {
    id: 'maestra', nombre: 'Forma Maestra', exp: 'Un punto por cada esfera de fusión pequeña que recoges (tres por cada grande). Para el nivel 7, 1.600.',
    consigue: 'En Bastión Hueco, al hablar con el rey Mickey.',
    habs: { 2: 'Auto-maestra', 4: 'Combo aéreo +1', 6: 'Combo aéreo +1' }, crec: 'Regate aéreo',
    donde: 'En la Calle de los Dulces (Ciudad de Halloween), con el comando de reacción de la noria, que atrae enemigos y suelta esferas. Al final del juego, en la Torre de los Misterios: los Tahúr de la sala de abajo sueltan esferas de fusión en vez de platines con la habilidad «Drive Converter».',
  },
  {
    id: 'final', nombre: 'Forma Final', exp: 'Un punto por cada incorpóreo derrotado. Para el nivel 7, 450.',
    consigue: 'Tras vencer a Roxas en El Mundo Inexistente, cada vez que te convierte en antiforma hay una probabilidad de que salga la Forma Final: 3 %, 9 %, 27 % y luego 75 %. La llave espada Dos Serán Uno fuerza la antiforma. Truco: en el Rascacielos de los Recuerdos, provoca un combate, transfórmate y, si sale la antiforma, pasa al Umbral de la Desesperanza para deshacerla y vuelve.',
    habs: { 2: 'Auto-final', 4: 'Extraforma', 6: 'Extraforma' }, crec: 'Planeador',
    donde: 'En la mansión de Villa Crepúsculo: desde el punto de guardado de la sala del ordenador, recorre el sótano, la biblioteca y el recibidor matando incorpóreos con Piro.',
  },
];
export const NOTA_FUSIONES = 'Las formas usan su habilidad de crecimiento un nivel por encima del que tiene Sora: si Sora tiene Salto de altura 1, en Forma Valiente tiene el 2. Las Auto-forma crean un comando de reacción que te transforma solo; la guía de Steam recomienda no equiparlas.';

export const INVOCACIONES_KH2FM = [
  { id: 'chicken-little', nombre: 'Chicken Little', amuleto: 'Amuleto de béisbol', como: 'En la Casa de Merlín, en la segunda visita a Bastión Hueco, al volver del primer capítulo del Bosque de los Cien Acres (Megido: hablando otra vez con Pooh; KHWiki: te lo da Merlín).' },
  { id: 'genio', nombre: 'Genio', amuleto: 'Amuleto lámpara', como: 'Al terminar la primera visita a Agrabah.' },
  { id: 'stitch', nombre: 'Stitch', amuleto: 'Amuleto ukelele', como: 'En un cofre del Estudio de Ansem, en la segunda visita a Bastión Hueco, al volver de Espacio Paranoico (también en la sección Tesoros).' },
  { id: 'peter-pan', nombre: 'Peter Pan', amuleto: 'Amuleto de Plumas', como: 'En un cofre del Cementerio de Barcos, en la segunda visita a Port Royal (también en la sección Tesoros).' },
];
export const NIVEL_INVOC = 'Todas las invocaciones comparten nivel. Ganan un punto cada vez que baja un nivel la barra mientras están en el campo; para el nivel 7 hacen falta 250. El tope empieza en 3 y sube uno con cada invocación nueva. Truco: deja que baje la barra, súbela un poco golpeando (por ejemplo con Piro) y deja que vuelva a bajar; cada bajada cuenta. El mejor sitio, la seta de la sala del tesoro de la Cueva de las Maravillas, al lado de un punto de guardado (la guía en castellano la llama N.º IV, pero en su propia lista y en la guía inglesa es la N.º V).';

// Magia: cada elemento sube un nivel (normal, + y ++). `de`: los tres eventos que dan un elemento, según KHWiki.
export const MAGIAS_KH2FM = [
  { id: 'piro', nombre: 'Piro', de: ['Al defender la puerta de Bastión Hueco de los incorpóreos', 'Al vencer a Scar', 'Al vencer a Yafar convertido en genio'] },
  { id: 'hielo', nombre: 'Hielo', de: ['Al conocer a Merlín en Bastión Hueco', 'Al vencer a Demyx en Bastión Hueco', 'Al completar Atlántica'] },
  { id: 'electro', nombre: 'Electro', de: ['Al vencer a la Hidra', 'Al vencer al Jinete de Tormentas', 'Al vencer a Terremoto Salvaje'] },
  { id: 'cura', nombre: 'Cura', de: ['Al completar el Castillo de Bestia', 'Al reencontrarte con Goofy en Bastión Hueco', 'Al completar el Bosque de los Cien Acres'] },
  { id: 'magneto', nombre: 'Magneto', de: ['Al vencer a Oogie Boogie', 'Al vencer a la Parca Pirata', 'Al vencer a Luxord (en Final Mix; en el original era Xigbar)'] },
  { id: 'reflejo', nombre: 'Reflejo', de: ['Al vencer a Pete en Río Eterno', 'Al vencer a Xaldin', 'Al vencer al PCM en Espacio Paranoico'] },
];
export const NOTA_MAGIAS_KH2FM = 'Cada evento da un elemento y sube el hechizo un nivel, así que el orden depende de por dónde vayas.';
