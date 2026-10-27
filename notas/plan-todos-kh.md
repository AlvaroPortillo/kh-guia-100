# Plan maestro · Todos los KH: guía para sacar todos los logros

Plan general, pendiente de aprobación. Cada juego tiene su propio plan por entregas (`plan-kh2fm.md`, `plan-ddd.md`…).
Mismas reglas que siempre: castellano oficial, nunca inventar datos, fuente en cada sección, todo marcable, sin datos no se pone nada.

## Principio: un 100 % por cada logro
- Cada logro de Steam tiene una forma de conseguirlo que la guía debe explicar. Si el logro pide el **100 % de algo**
  (todos los cofres, todos los objetos, todas las pegatinas, todas las misiones, todas las copas…), la guía tiene que
  dar **la lista completa** de ese «algo», marcable, con cómo se consigue cada elemento.
- Un logro que pide un 100 % no se considera cubierto hasta que su lista está entera en la web.

## Alcance: juegos con logros de Steam en la colección
| Juego | Steam (app) | Logros | Logros (ids) | Estado en la web |
|---|---|---|---|---|
| Kingdom Hearts Final Mix | 2552430 | 55 | ACH_001–055 | Hecho (revisión pendiente) |
| Re:Chain of Memories | 2552430 | 47 | ACH_056–102 | **Falta** (`recom`, «Próximamente») |
| Kingdom Hearts II Final Mix | 2552430 | 50 | ACH_103–152 | 8 de 9 entregas (falta gumi) |
| Birth by Sleep Final Mix | 2552430 | 45 | ACH_153–197 | Hecho (revisión pendiente) |
| Kingdom Hearts Dream Drop Distance | 2552440 (HD 2.8) | 54 | ACH_16–69 | **Falta** (ver `plan-ddd.md`) |
| Kingdom Hearts 0.2 Birth by Sleep | 2552440 (HD 2.8) | 15 | ACH_01–15 | **Falta** (decisión pendiente) |
| Kingdom Hearts III + Re Mind | 2552450 | 51 | `kh3-logros.js` | Hecho (revisión pendiente) |

Total: **317 logros**. Comprobado: los % globales de 2552440 devuelven 69 (54 de DDD + 15 de 0.2).

Fuera de alcance, sin logros de Steam: **358/2 Days** y **Re:coded**. En la colección son películas.
Si el usuario quiere que aparezcan, serían solo una nota informativa, sin marcas.

## Orden propuesto (a confirmar)
1. **Terminar KH II FM**: entrega 9 (gumi). Ya está en marcha y es lo que más cerca está.
2. **Re:Chain of Memories** (47 logros, misma app 2552430 que el resto de 1.5+2.5; la base de datos y el generador ya existen).
3. **Dream Drop Distance** (54 logros, app 2552440; plan en `plan-ddd.md`).
4. **Revisión conjunta**: revisar las entregas pendientes de BBS, KH FM y KH III, y comprobar que todos los logros de
   317 aparecen y se pueden marcar.

## Guías de «100 %»: inventario (punto de partida)
Algunos ejemplos de logros que piden un 100 % y que ya tienen o necesitan guía. La lista completa sale de un script sobre
las descripciones de los 317 logros (paso 1).

| Logro (juego) | Pide | Guía necesaria | Estado |
|---|---|---|---|
| Abre 100 cofres de tesoros (KH FM) | 100 cofres | Lista de cofres de KH FM | Revisar: `khfm` (tesoros) |
| Fabrica todos los objetos posibles (KH FM) | todos los objetos | Sintesis de KH FM | Hecho (`khfm-armas`) |
| Consigue todas las llaves espada, bastones y escudos (KH FM) | todas | Armas de KH FM | Hecho |
| Completa todas las rutas con la nave gumi (KH FM) | todas las rutas | Gumi de KH FM | Hecho |
| Consigue todas las pegatinas (BBS) | todas | Pegatinas por mundo | Hecho |
| Consigue todos los informes secretos (BBS) | todos | Informes Xehanort | Hecho |
| Completa todos los retos de los nescientes con el rango más alto (BBS) | todos los retos | Retos | Revisar |
| Vence en cada uno de los Tableros de comandos (BBS) | todos | Tableros | Hecho |
| Completa todas las misiones de ★1–★4 del Coso Virtual (BBS) | todas las misiones | Coso | Hecho |
| Prepara todos los helados (BBS) | todos | Helados | Hecho |
| Aprende todos los golpes finales de Terra, Ventus y Aqua (BBS) | todos | Golpes finales | Hecho |
| Satisface a cada miembro de la Micorganización XIII (KH II FM) | 13 setas | Setas | Hecho (entrega 8) |
| Gana un combate de Struggle arrebatando todas las esferas (KH II FM) | un combate | Struggle | Hecho (entrega 6) |
| Rango S en todas las misiones gumi y EX (KH II FM) | todas | Nave gumi | **Entrega 9** |
| Consigue todos los planos de naves gumi (KH II FM) | todos | Planos | **Entrega 9** |
| Completa todas las misiones de los Siete Flantásticos (KH III) | todas | Minijuegos KH III | Hecho |
| Utiliza la nave gumi para fotografiar todas las constelaciones (KH III) | todas | Gumi KH III | Hecho |
| Consigue todos los tipos de ingredientes (KH III) | todos | Cocina | Hecho |
| Consigue «Excelente» en todos los tipos de platos (KH III) | todos | Cocina | Hecho |
| Puntuación más alta en todos los juegos del Reino clásico (KH III) | 23 juegos | Minijuegos | Hecho |
| Consigue todos los méritos de los códigos PRINCIPIANTE (KH III) | todos | Re Mind | Hecho |

Los logros de 100 % que faltan (Re:CoM, DDD y la lista completa) se identifican en el paso 1.

## Pasos
1. **Inventario de los 317 logros.** Script: extraer descripciones de cada juego (JSON de Steam en castellano) y marcar
   los que contienen «todos», «todas», «100», «cada», «completa» o un número alto. Resultado: tabla de «logros de 100 %».
   Dónde: `notas/herramientas/inventario_logros.py` (nuevo), salida `notas/inventario-logros.md`.
2. **Guía de cada 100 %.** Para cada logro de la tabla: la lista completa (ids marcables) y cómo se consigue cada elemento.
   Fuentes: guías de Steam en castellano, Wiki ES, KHWiki. Si no hay lista con fuente, se avisa en la web y no se inventa.
3. **Hacer los juegos que faltan** (Re:CoM, DDD), cada uno con su plan.
4. **Cerrar huecos** de KH II FM y de los demás planes (ver `plan-kh2fm.md`, «Pendiente»).
5. **Verificación final:** contar los 317 logros en la web, comprobar que cada 100 % tiene su lista, que todo se puede
   marcar y que funciona a 390 y 1280 px.

## Fuentes (comunes)
- **Steam:** logros en castellano (`steamcommunity.com/achievements/<app>` o la página `?l=spanish`) y % globales
  (`GetGlobalAchievementPercentagesForApp`). Guías en castellano: `steamcommunity.com/app/<app>/guides/`.
- **Wiki ES** (`kingdomhearts.fandom.com/es/api.php`): nombres oficiales. Las imágenes dan 403: usar KHWiki.
- **KHWiki** (`khwiki.com/api.php`, o `notas/herramientas/khtexto.py`): fichas, estrategias e imágenes.
- Cuando dos fuentes no coincidan: mostrar ambas o `nota`.

## Decisiones pendientes
1. **Orden:** ¿de acuerdo con el orden propuesto?
2. **Guías de 100 %:** ¿una sección propia por juego, o una página «100 %» por juego con todas las listas?
3. **358/2 Days y Re:coded:** ¿solo nota informativa, o fuera del todo?
