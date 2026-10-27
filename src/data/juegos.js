// Juegos de Kingdom Hearts con logros de Steam, agrupados por la colección en que se venden.
// `etiqueta` sustituye al progreso en la ficha; `disponible` decide si es un enlace.
export const JUEGOS = [
  { id: 'khfm', nombre: 'Kingdom Hearts Final Mix', logo: 'assets/img/logos/khfm.png', disponible: true },
  { id: 'kh2fm', nombre: 'Kingdom Hearts II Final Mix', logo: 'assets/img/logos/kh2fm.png', disponible: true },
  { id: 'bbs', nombre: 'Birth by Sleep Final Mix', logo: 'assets/img/logos/bbsfm.png', disponible: true },
  { id: 'recom', nombre: 'Re:Chain of Memories', logo: 'assets/img/logos/recom.png', disponible: false, etiqueta: 'En preparación' },
  { id: 'ddd', nombre: 'Kingdom Hearts Dream Drop Distance', logo: 'assets/img/logos/ddd.webp', disponible: true },
  { id: 'bbs02', nombre: 'Kingdom Hearts 0.2 Birth by Sleep', logo: 'assets/img/logos/bbs02.webp', disponible: true },
  { id: 'kh3', nombre: 'Kingdom Hearts III + Re Mind', logo: 'assets/img/logos/kh3.webp', disponible: true },
];

// Las tres compras de Steam. `logo`: el de la colección (KHWiki). `colores`: tokens de los juegos que contiene, para teñir su vidriera.
// La ReMIX va en el orden que pidió el usuario: KH, KH II, BBS y Re:CoM (en preparación) al final.
export const COLECCIONES = [
  {
    id: 'remix', nombre: 'Kingdom Hearts HD 1.5+2.5 ReMIX', app: 2552430, logo: 'assets/img/logos/remix.png', ancho: 699, alto: 491,
    colores: ['var(--khfm)', 'var(--kh2fm)', 'var(--aqua)', 'var(--ventus)', 'var(--terra)'],
    juegos: ['khfm', 'kh2fm', 'bbs', 'recom'],
  },
  {
    id: 'fcp', nombre: 'Kingdom Hearts HD 2.8 Final Chapter Prologue', app: 2552440, logo: 'assets/img/logos/fcp.webp', ancho: 889, alto: 607,
    colores: ['var(--ddd)', 'var(--aqua)'],
    juegos: ['ddd', 'bbs02'],
  },
  {
    id: 'kh3', nombre: 'Kingdom Hearts III + Re Mind', app: 2552450, logo: 'assets/img/logos/kh3-remind.webp', ancho: 720, alto: 460,
    colores: ['var(--kh3)', 'var(--gold)'],
    juegos: ['kh3'],
  },
];
