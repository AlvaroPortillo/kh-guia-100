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
| `--aqua` | `#63C9FF` | `#0B6EA8` | Acento de Aqua |
| `--khfm` | `#6FA8FF` | `#1F55B8` | Acento de KH Final Mix: azul del corazón del logo (va con el dorado de la corona) |

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
`Título → Elección de juego → Hub del juego (ruta 100 %, logros comunes, extras, personajes)
→ Página de personaje (logros, golpes finales, estilos, comandos…)`

## Reglas
- Contraste WCAG AA, foco visible (anillo dorado), funciona a 390 px y 1280 px.
- Nada de emojis como iconos: SVG en línea.
- Ningún dato sin fuente: cada sección cita de dónde sale.
