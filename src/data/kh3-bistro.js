// Textos de la sección Cocina de KH III (a mano). Fuente: KHWiki «Le Grand Bistrot» (minijuegos, estrellas y
// estrategia) y PowerPyx (lista de recetas). Platos e ingredientes: kh3-cocina.js (generado).
// Ids: kh3.plato.<id> (con «Excelente»), kh3.ingrediente.<id>.

export const INTRO_COCINA = 'Se cocina con Remy en el bistró de Villa Crepúsculo (también desde los puntos de guardado). Cada plato se prepara con un minijuego: con «Excelente» sale su versión «+», con «Bien» la normal y si fallas no sale nada. En los tres casos se gastan los ingredientes.';

// Los cuatro minijuegos (nombres descriptivos: no hay nombre oficial en castellano con fuente).
export const JUEGOS_COCINA = {
  cortar: { t: 'Cortar los ingredientes', como: 'Inclina el stick izquierdo hacia abajo una y otra vez para cortar y el derecho para coger el siguiente ingrediente. Cortar sin ingrediente no penaliza: mueve el izquierdo lo más rápido que puedas y pulsa el derecho justo cuando se ilumine su icono.' },
  huevo: { t: 'Cascar el huevo', como: 'Separa los sticks despacio para abrir el huevo y pulsa L1 y R1 a la vez para dejarlo caer. Mantén L1 desde el principio y, cuando salgan las chispas rojas, no muevas más los sticks y pulsa R1 con suavidad: el error típico es separarlos de más.' },
  flambear: { t: 'Flambear', como: 'Gira el stick izquierdo a velocidad media para echar aceite y, cuando salgan las chispas rojas, inclina el derecho para encender el fuego. El aviso del derecho sale antes de tiempo: sigue echando aceite hasta ver las chispas.' },
  pimienta: { t: 'Moler pimienta', como: 'Inclina hacia abajo el stick del lado en el que esté el molinillo cuando el círculo llegue a su icono. Apunta al borde exterior del icono.' },
};

// Estrellas del bistró: platos distintos del menú clásico con «Excelente» (los del especial no cuentan).
export const ESTRELLAS_BISTRO = [
  [1, 4, 'Anillo Gourmet'], [2, 7, ''], [3, 10, 'Elixir'], [4, 14, ''], [5, 20, 'llave espada Gran Chef'],
];

export const CONSEJOS_COCINA = [
  'La habilidad Chef Extraordinario facilita el «Excelente» y se acumula: la llevan los dos Anillos Gourmet (uno por la primera estrella del bistró y otro canjeando postales premiadas en la tienda Moguri) y la llave espada Gran Chef.',
  'El bistró guarda la partida al terminar cada minijuego, así que «Continuar» no deshace un fallo. Guarda a mano fuera del bistró antes de un plato difícil y, si fallas, sal al título y usa «Cargar partida».',
  'El menú especial pide las frutas de los Siete Flantásticos, que dan su fruta al superar su puntuación (sección Minijuegos).',
];
export const FUENTES_COCINA = ['khwBistro', 'khwIngredientes', 'ppxRecetas', 'ppxIngredientes', 'wesFlanes'];
