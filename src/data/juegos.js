// Juegos de KINGDOM HEARTS HD 1.5+2.5 ReMIX con logros de Steam.
// Birth by Sleep va primero: es por donde empieza la guía.
export const JUEGOS = [
  { id: 'bbs', nombre: 'Birth by Sleep Final Mix', logo: 'assets/img/logos/bbsfm.png', disponible: true },
  { id: 'khfm', nombre: 'Kingdom Hearts Final Mix', logo: 'assets/img/logos/khfm.png', disponible: true },
  // `etiqueta` sustituye al progreso en la ficha; `disponible` decide si es un enlace.
  { id: 'recom', nombre: 'Re:Chain of Memories', logo: 'assets/img/logos/recom.png', disponible: false, etiqueta: 'Próximamente' },
  { id: 'kh2fm', nombre: 'Kingdom Hearts II Final Mix', logo: 'assets/img/logos/kh2fm.png', disponible: true, etiqueta: 'En preparación' },
  // Juego aparte en Steam (app 2552450), no forma parte de la colección HD 1.5+2.5.
  { id: 'kh3', nombre: 'Kingdom Hearts III + Re Mind', logo: 'assets/img/logos/kh3.webp', disponible: true },
  // Colección KH HD 2.8 Final Chapter Prologue (Steam app 2552440).
  { id: 'ddd', nombre: 'Kingdom Hearts Dream Drop Distance', logo: 'assets/img/logos/ddd.webp', disponible: false, etiqueta: 'En preparación' },
];
