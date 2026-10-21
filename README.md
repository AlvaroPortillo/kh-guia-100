# Guía 100 % · Kingdom Hearts HD 1.5+2.5 ReMIX

Guía personal en castellano para completar al 100 % los juegos de la colección en Steam,
con dos progresos separados:

- **Logros de Steam**: los logros oficiales, con su texto en español y el % global de jugadores.
- **100 % del juego (Informes)**: todo lo que registra el juego (golpes finales, estilos de
  comandos, Coso Virtual…).

Cada conseguible se puede marcar. El progreso se guarda en una base de datos SQLite local
(`datos/progreso.db`, fuera de git) y, como copia, en el navegador (`localStorage`). También se
puede exportar/importar como archivo JSON desde «Mi progreso».

## Estado

| Juego | Estado |
|---|---|
| Birth by Sleep Final Mix | En curso: logros con consejos, Informes (Informes Xehanort, Coso Virtual con desbloqueos, minijuegos, retos, helados, pegatinas), golpes finales, estilos y build por personaje. Falta: lista de comandos |
| Kingdom Hearts Final Mix | Pendiente |
| Re:Chain of Memories | Pendiente |
| Kingdom Hearts II Final Mix | Pendiente |

## Arrancar en local

Sin dependencias ni compilación; solo Python 3:

```sh
python server.py
```

y abre http://127.0.0.1:5173. `server.py` sirve la web y guarda el progreso en `datos/progreso.db`.
Con cualquier otro servidor estático la web también funciona, pero el progreso queda solo en el navegador.

## Estructura

```
index.html
src/
  app.js            router por hash y vistas
  store.js          progreso (localStorage + exportar/importar)
  styles.css        estilos (tokens en :root, ver DESIGN.md)
  data/
    juegos.js       lista de juegos
    bbs.js          datos de BBS con sus fuentes
    bbs-logros.js   logros generados desde Steam
assets/img/         renders, logos e iconos de logros
DESIGN.md           sistema de diseño
```

## Fuentes

Ningún dato está inventado: cada sección de la app enlaza su fuente. Principales:

- [Logros de Steam en español](https://steamcommunity.com/stats/2552430/achievements/?l=spanish)
- [Wiki Kingdom Hearts en español](https://kingdomhearts.fandom.com/es/)
- [KHWiki](https://www.khwiki.com/) (datos y renders)

Kingdom Hearts © Disney / Square Enix. Proyecto personal sin ánimo de lucro.
