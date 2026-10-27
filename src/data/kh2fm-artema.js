// Orfebrería Moguri de KH II Final Mix: textos, niveles, listas de colección, los 7 Orichalcum+ y el Arma Artema.
// A mano. Las recetas y materiales están en kh2fm-orfebreria.js (generado).
export const IMG_ORF_KH2 = 'assets/img/kh2fm/orfebreria/';
const WES = 'https://kingdomhearts.fandom.com/es/wiki/';
export const FUENTES_ORF_KH2FM = {
  khwikiSintesisKh2: { nombre: 'KHWiki — Synthesis (Kingdom Hearts II) y páginas de cada objeto', url: 'https://www.khwiki.com/Synthesis#Kingdom_Hearts_II' },
  fandomMaterialesKh2: { nombre: 'Fandom (inglés) — List of Synthesis Materials', url: 'https://kingdomhearts.fandom.com/wiki/List_of_Synthesis_Materials' },
  guiaMegidoSintesis: { nombre: 'Guía de Megido (GameFAQs, en castellano) — Moguris y síntesis', url: 'https://gamefaqs.gamespot.com/pc/312955-kingdom-hearts-hd-i5-plus-ii5-remix/faqs/82144/moguris-y-sintesis' },
  guiaSteamSintesisKh2: { nombre: 'Guía de Steam «KH2FM Synthesis» (inglés): Orichalcum+ y materiales', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3267058896' },
  wikiEsArmaduras: { nombre: 'Wiki ES — Armadura (objeto) y accesorios de KH II', url: `${WES}Armadura_(objeto)` },
};

export const INTRO_ORF_KH2FM = 'La Orfebrería Moguri está en cualquier tienda moguri: el nivel y los materiales entregados se comparten entre todas. Para el logro «Artesanía» hay que fabricar todos los objetos, mejoras incluidas. Conviene dejarlo para después de la historia: lo que falta aparece como «¿?».';

// Niveles del moguri (KHWiki). Megido coincide en los seis primeros.
export const NIVELES_MOGURI = [
  [1, 'Se pueden fabricar las recetas y lo de Libre desarrollo.'],
  [2, 'Se pueden añadir materiales vitales (doblan la experiencia del moguri) o de poder (reducen los materiales a la mitad).'],
  [3, 'Se pueden añadir materiales serenos: sirven para fabricar las mejoras.'],
  [4, 'Se pueden usar dos materiales especiales a la vez (vital, de poder o sereno).'],
  [5, 'Los objetos de rango C cuestan la mitad.'],
  [6, 'Los objetos de rango B cuestan la mitad.'],
  [7, 'Los objetos de rango A cuestan la mitad.'],
  [8, 'Se abren los objetos más fuertes de Libre desarrollo.'],
  [9, 'Los objetos de rango S cuestan la mitad.'],
];
export const NOTA_ESPECIALES = 'Un material especial solo se puede añadir a un objeto de su mismo rango (C, B, A o S).';

// Listas de colección: premios del moguri al entregar materiales (guía de logros en castellano; Megido coincide).
export const COLECCION_KH2FM = [
  ['1 tipo de material', 'Elixir'], ['5 tipos', 'Libre desarrollo'], ['10 tipos', 'Impulso hábil'], ['15 tipos', 'Omnielixir'],
  ['20 tipos', 'Libre desarrollo 2'], ['25 tipos', 'Impulso hábil'], ['30 tipos', 'Impulso defensivo'], ['35 tipos', 'Impulso hábil'],
  ['40 tipos', 'Impulso de vigor'], ['45 tipos', 'Impulso hábil'], ['50 tipos', 'Impulso mágico'], ['55 tipos', 'Orichalcum'],
  ['Todos los materiales', 'Orichalcum+'],
  ['50 materiales en total', 'Guijarro sereno'], ['100 en total', 'Roca serena'], ['250 en total', 'Piedra serena'], ['500 en total', 'Cristal sereno'],
  ['1.000 en total', 'Orichalcum'],
  ['Todos los densos', 'Piedra serena'], ['Todos los de penumbra', 'Cristal sereno'], ['Todos los de mitrilo', 'Impulso hábil'],
  ['Todos los evocadores', 'Cristal sereno'], ['Todos los de sosiego', 'Cristal sereno'], ['Todos los de brillo', 'Impulso defensivo'],
  ['Todos los de energía', 'Impulso de vigor'], ['Todos los de satisfacción', 'Impulso mágico'],
  ['Todos los de rango C', 'Guijarro sereno'], ['Todos los de rango B', 'Roca serena'], ['Todos los de rango A', 'Ilusión materializada'],
  ['Todos los de rango S', 'Ilusión extraviada'],
];
export const NOTA_COLECCION = 'Además, al entregar 30 guijarros, 25 rocas o 20 piedras de una familia (ígnea, fría, luminosa, clara, fuerte, oscura, densa o crepuscular), ese material se puede comprar en la tienda moguri: 100, 200 y 400 platines (200, 400 y 800 los densos y crepusculares).';

// Los 7 Orichalcum+. `cofre`: el de la sección Tesoros (misma marca); `logro`: misma marca que ese logro.
export const ORICALCOS_KH2FM = [
  { id: 'villa', titulo: 'Villa Crepúsculo', cofre: 'villa-crepusculo', como: 'Cofre encima del edificio más alto de las Terrazas del Atardecer, junto a las vías del tranvía (tercera visita). Se sube con el tranvía.' },
  { id: 'espacio', titulo: 'Espacio Paranoico', cofre: 'espacio-paranoico', como: 'Cofre de la Loma del Ordenador, en el grupo de cofres de justo antes del combate contra el PCM (segunda visita).' },
  { id: 'mundo-inexistente', titulo: 'El Mundo Inexistente', cofre: 'mundo-inexistente', como: 'Cofre del Umbral de la Desesperanza, detrás del edificio de la izquierda, al borde del precipicio.' },
  { id: 'atlantica', titulo: 'Atlántica', como: 'Al completar todas las canciones; la guía en castellano lo sitúa tras «Amanecer de un nuevo día».' },
  { id: 'coliseo', titulo: 'Coliseo del Olimpo', logro: 'ACH_115', como: 'Al ganar la Copa Diosa del Destino (hay que haber vencido a Xemnas la primera vez para que aparezca).' },
  { id: 'bosque', titulo: 'Bosque de los Cien Acres', como: 'Al completar la Colina de las Estrellas. Hacen falta las cinco Páginas arrancadas: Biblioteca del Castillo Disney, Oasis de las Tierras del Reino, Quebrada de Cristal de Bastión Hueco, Salón del Trono de Tierra de Dragones y Cámara en Ruinas de Agrabah.' },
  { id: 'materiales', titulo: 'Orfebrería', como: 'Premio de la lista de colección por entregar todos los tipos de materiales. Hay que salir de la tienda y volver a entrar para entregarlos.' },
];

export const ARMA_ARTEMA_KH2FM = {
  receta: 'La Receta definitiva está en un cofre del Pasillo del Sótano de la Vieja mansión (Villa Crepúsculo, tercera visita). Pide moguri de nivel 2.',
  truco: 'La receta pide 13 Orichalcum+, pero en el juego solo hay 7. Añade un Cristal de poder (material especial de rango S, como el Arma Artema): reduce los materiales a la mitad y así bastan 7.',
};
export const FUENTES_ARTEMA_KH2FM = ['guiaSteamKh2fm', 'guiaSteamSintesisKh2', 'khwikiSintesisKh2', 'fandomCofresKh2'];
