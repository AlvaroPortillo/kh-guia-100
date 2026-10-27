# DESIGN.md — Guía 100% Kingdom Hearts HD 1.5+2.5 ReMIX

## Idea central
La **vidriera** (la plataforma de cristal de la Estación del Despertar) es el elemento memorable.
Aparece en la pantalla de título y bajo cada personaje, teñida con su color. Todo lo demás es
sobrio: listas tipo menú de KH, superficies translúcidas y mucho aire.

## Paleta (tokens en `:root`)
| Token | Oscuro (por defecto) | Claro | Uso |
|---|---|---|---|
| `--bg` | `#070B1A` | `#EEF2FA` | Fondo: noche de la Tierra de Partida |
| `--surface` | `rgba(132,160,255,.07)` | `rgba(255,255,255,.72)` | Paneles translúcidos |
| `--line` | `rgba(170,195,255,.18)` | `rgba(20,32,80,.14)` | Bordes sutiles |
| `--text` | `#ECF0FF` | `#0F1633` | Texto principal |
| `--text-2` | `#AEB9DA` | `#3D4770` | Texto secundario (AA sobre `--bg`) |
| `--gold` | `#EBC765` | `#9A6B00` | Corona, completado, foco |
| `--terra` | `#E7A35E` | `#9A5412` | Acento de Terra |
| `--ventus` | `#7EE3A0` | `#1E7A43` | Acento de Ventus |
| `--aqua` | `#63C9FF` | `#0B6EA8` | Acento de Aqua; también de KH 0.2 Birth by Sleep (`.juego-bbs02`), que es su juego |
| `--khfm` | `#6FA8FF` | `#1F55B8` | Acento de KH Final Mix: azul del corazón del logo (va con el dorado de la corona) |
| `--kh3` | `#B9ABFF` | `#5A3DB8` | Acento de KH III: lila plateado del trazo del logo |
| `--kh2fm` | `#8C9AFF` | `#3343B3` | Acento de KH II Final Mix: azul cobalto del «II» del logo |
| `--ddd` | `#FF66B2` | `#B3105F` | Acento de KH Dream Drop Distance: fucsia del logo y de los marcos de sus logros (7,3:1 sobre el fondo oscuro, 5,4:1 sobre `--bg-2` claro) |

Cada página de personaje redefine `--accent` con su color. Máximo dos acentos visibles a la vez
(`--accent` + `--gold`).

## Tipografía
- **Cinzel** (700): nombres propios grandes — título, nombres de juego y de personaje. Evoca los
  rótulos tallados de la saga.
- **Sora** (400/600/800): todo lo demás. Titulares de sección en 800.
- Escala (ratio 1.25): 0.8 · 1 · 1.25 · 1.563 · 1.953 · 2.441 · 3.815 rem. Cuerpo 1rem/1.6.
- Líneas de texto ≤ 70 caracteres.

## Espaciado y radios
- Escala de 4 px: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112.
- Radios: `--r-s: 10px` (casillas, chips) · `--r-m: 18px` (paneles) · `--r-l: 28px` (héroes).
  La jerarquía manda: los elementos pequeños tienen radios pequeños.

## Movimiento
- Interacciones: 160–240 ms, `cubic-bezier(.2,.7,.2,1)`.
- Un único momento orquestado: la vidriera del título gira lentamente y la entrada del título.
- Marcar un conseguible: la corona se ilumina en dorado (200 ms).
- `prefers-reduced-motion`: sin rotación ni transiciones de desplazamiento.

## Estructura
`Portada única (#/ y #/juegos) → Hub del juego (ruta 100 %, logros comunes, extras, personajes)
→ Página de personaje o sección (logros, golpes finales, estilos, comandos…)`

## Portada
- Sin titular visible (h1 solo para lectores de pantalla). Las tres colecciones de Steam son la portada: sus logos
  (`COLECCIONES` en `src/data/juegos.js`) como puertas, con los logros de Steam que llevas en cada una.
- Fondo: aurora con los acentos de las tres colecciones (deriva lenta, solo `transform`) y vidriera girando detrás.
- Debajo, una sección por colección con su vidriera teñida de sus juegos (a un lado, alternando) y las fichas de juego.
- Movimiento, el único momento orquestado de la guía junto a la vidriera: los logos entran escalonados; cada logo se inclina hacia
  el ratón y lo recorre un destello (máscara del propio logo, `.logo3d`); cada colección enciende su vidriera y sube sus fichas al
  entrar en pantalla. Con `prefers-reduced-motion`, todo quieto y visible.

## Reglas
- Contraste WCAG AA, foco visible (anillo dorado), funciona a 390 px y 1280 px.
- Nada de emojis como iconos: SVG en línea.
- Ningún dato sin fuente: cada sección cita de dónde sale.
