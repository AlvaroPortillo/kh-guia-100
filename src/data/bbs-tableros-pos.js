// Posición de cada casilla bonus en los mapas de assets/img/bbs/build/tablero-<id>.webp.
// Medida a mano sobre los propios mapas (círculo rojo numerado de la guía oficial japonesa, vía KHWiki):
// `c[num]` = centro del círculo en píxeles de la imagen; `d` = diámetro del círculo.
// La casilla está abajo a la derecha del círculo, y mide unas tres veces su diámetro.

export const POS_CASILLAS = {
  'llave-espada': { w: 1400, h: 809, d: 29, c: { 1: [38, 396], 2: [220, 396], 3: [494, 488], 4: [766, 672], 5: [948, 488] } },
  real: { w: 1400, h: 840, d: 29, c: { 1: [180, 446], 2: [270, 447], 3: [630, 268], 4: [898, 628], 5: [1258, 540] } },
  espacial: { w: 1400, h: 932, d: 30, c: { 1: [138, 38], 2: [428, 330], 3: [428, 525], 4: [524, 818], 5: [816, 41], 6: [1299, 140], 7: [1299, 722] } },
  animado: { w: 1250, h: 1400, d: 33, c: { 1: [218, 780], 2: [428, 358], 3: [532, 42], 4: [636, 42], 5: [742, 43], 6: [952, 463], 7: [952, 1094] } },
  calavera: { w: 750, h: 808, d: 19, c: { 1: [139, 15], 2: [140, 445], 3: [263, 629], 4: [508, 751], 5: [570, 324], 6: [570, 386], 7: [693, 628] } },
  miel: { w: 1107, h: 1400, d: 34, c: { 1: [262, 528], 2: [368, 528], 3: [475, 528], 4: [475, 635] } },
  secreto: { w: 1382, h: 1400, d: 29, c: { 1: [209, 572], 2: [575, 210], 3: [572, 757], 4: [662, 849], 5: [754, 576], 6: [845, 668], 7: [843, 1032], 8: [1025, 853], 9: [1114, 1218], 10: [1206, 1128] } },
};
