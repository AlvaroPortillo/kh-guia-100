// Mundos y jefes de KH Dream Drop Distance, en el orden de la historia. A mano.
// Recorrido y estrategias: guía paso a paso de KHWorld (redactadas con palabras propias). Llaves Espada: Gamerbase.
// Nombres: los de los logros de Steam para los mundos; para los jefes Terror, los de la Wiki ES (Onírido, «Jefes Terrores»);
// los que no tienen nombre allí, tal como aparecen en la guía en castellano; «Holey Moley» no tiene nombre con fuente.
// Ids de marca: ddd.jefe.<id> (jefes y combates), ddd.mundo.<id> no se usa: cada mundo se marca con su logro.
export const FUENTES_MUNDOS_DDD = ['kwGuia', 'gbTrofeos', 'wikiEsOnirido'];

export const INTRO_MUNDOS_DDD = 'Los siete mundos del Reino del Sueño, en orden. Sora y Riku los recorren por separado, y cada mundo se completa con los dos. Debajo de cada logro tienes los jefes de cada personaje y la Llave Espada que dan.';

// `pj`: sora | riku | ambos. `t`: cómo vencerle (resumen de la guía de KHWorld).
export const MUNDOS_DDD = [
  {
    id: 'examen', nombre: 'El Examen de Maestro', logro: 'ACH_29',
    nota: 'Al principio de la historia: derrota a la proyección de Úrsula y empieza el examen de graduación.',
    jefes: [],
  },
  {
    id: 'ciudad-de-paso', nombre: 'Ciudad de Paso', logro: 'ACH_30', llaves: ['Retumbadora (Sora y Riku)'],
    jefes: [
      { id: 'macacofre-sora', pj: 'sora', nombre: 'Macacofre', t: 'Es el primer jefe de verdad y no es difícil, aunque conviene ser prudente si andas escaso de Cura y pociones. Esquiva sus embestidas y sus puñetazos a distancia, usa los Nexos cuando estén disponibles y ataca entre medias. Al bajarle la vida rompe el cristal del edificio y el resto del combate pasa dentro, donde hay menos espacio pero se le golpea mejor con Flowmotion.' },
      { id: 'macacofre-riku', pj: 'riku', nombre: 'Macacofre', t: 'Se parece al de Sora, pero todo el combate es dentro del edificio. Ahora flota fuera de tu alcance y ataca a distancia: contrarréstalo con magia o Flowmotion. Más adelante desaparece y manda manos incorpóreas: destrúyelas todas para que reaparezca. Recoge los cofres de los dos pisos si puedes; luego podrás volver.' },
    ],
  },
  {
    id: 'ciudad-de-las-campanas', nombre: 'La Ciudad de las Campanas', logro: 'ACH_31', llaves: ['Tañido guardián (Sora y Riku)'],
    jefes: [
      { id: 'velitargola-sora', pj: 'sora', nombre: 'Velitárgola', t: 'Lo más seguro es pelear a distancia con magias elementales y aprovechar la invulnerabilidad de la barra de Nexo de tus Lucientes. A veces usa un ataque poderoso que, si lo esquivas, lo deja vulnerable: entonces golpea con comandos físicos.' },
      { id: 'velitargola-riku', pj: 'riku', nombre: 'Velitárgola', t: 'Riku puede flotar con las corrientes de aire si salta fuera de la catedral, así que no tienes que esperar a que el jefe se acerque. Sus golpes son fuertes pero sus embestidas físicas tardan en cargarse: conviene pelear de cerca y ponerte a salvo a tiempo.' },
    ],
  },
  {
    id: 'la-red', nombre: 'La Red', logro: 'ACH_32', llaves: ['Bidiscal (Sora y Riku)'],
    jefes: [
      { id: 'tron-sora', pj: 'sora', nombre: 'Rinzler / Tron', t: 'Su fuerte es la velocidad: contrarréstala con volteretas. Vigila el disco, que te sigue por el campo. Cuando cambia la gravedad y la pelea pasa al techo no cambia la estrategia, pero al volver a la normalidad siempre salta hacia ti desde lejos con un ataque grave: empieza a apartarte hacia un lado antes de que llegue.' },
      { id: 'comandantis-riku', pj: 'riku', nombre: 'Comandantis', t: 'Tienes ventaja: el borde del área permite patinar con Flowmotion, que da uno de los ataques más fuertes y seguros. No lo uses a lo loco, porque el jefe deja una estela como las motos; es fácil de esquivar y lo deja vulnerable.' },
    ],
  },
  {
    id: 'paraiso-del-bromista', nombre: 'El Paraíso del Bromista', logro: 'ACH_33', llaves: ['Noria vivaz (Sora)', 'Ira abisal (Riku)'],
    jefes: [
      { id: 'gelivante-sora', pj: 'sora', nombre: 'Gelivante', t: 'Casi todo el combate es en los desniveles alrededor de Monstruo. Salta para aplastarte o se aleja a lanzar proyectiles; ambos se esquivan, y de cerca puedes subirte a él. Cuando vuele lanzando proyectiles, usa un comando de largo alcance o espera a que baje. Al hacerle bastante daño se rompe parte del hielo y hay que llegar hasta allí.' },
      { id: 'pirovante-riku', pj: 'riku', nombre: 'Pirovante', t: 'Huye al otro extremo de la sala y ataca a distancia, así que acércate y pelea de cerca esquivando proyectiles. De vez en cuando se pega al techo: busca y golpea una de las úvulas para invertir la gravedad. Al final se enfurece y gira soltando fuego, dañino pero fácil de esquivar; no te arriesgues, pero sigue atacando.' },
    ],
  },
  {
    id: 'ciudad-de-paso-2', nombre: 'Ciudad de Paso (segunda visita)', logro: 'ACH_34', llaves: ['Nocaut (Sora y Riku)'],
    nota: 'Sora vuelve a luchar contra tres jefes seguidos; Riku no tiene jefe en esta visita.',
    jefes: [
      { id: 'trio-sora', pj: 'sora', nombre: 'Macacofre, Velitárgola y Pirovante', t: 'Tres jefes seguidos en una zona pequeña, sobre todo contra Velitárgola. Si aún no la tienes, consigue la habilidad Hoja sana (la tienen Lucientes como Marramaguau, el Luciente de Sora por defecto) para curarte con seguridad. Macacofre es fácil: reserva los Nexos para después y aprovecha las pausas entre jefes para curarte.' },
    ],
  },
  {
    id: 'pais-de-los-mosqueteros', nombre: 'El País de los Mosqueteros', logro: 'ACH_35', llaves: ['Todos para uno (Sora y Riku)'],
    jefes: [
      { id: 'pete-sora', pj: 'sora', nombre: 'Pete y los Apandadores', t: 'La primera parte es parecida a la anterior; cada vez que derrotes a un Apandador tienes que usar con éxito la Realidad Alterna sobre él para pasar a la segunda fase, contra Pete. Sus golpes no son muy dañinos, pero ten cuidado con las figuras de sol y luna que se balancean cuando él desaparece de un salto: esquívalas con Flowmotion.' },
      { id: 'holey-moley-riku', pj: 'riku', nombre: '«Holey Moley»', t: 'Se teletransporta por toda la sala y apenas llegas a darle uno o dos combos antes de que desaparezca. Pero sus ataques son limitados: sobre todo proyectiles fáciles de esquivar y, más adelante, manos como las de Macacofre. Usa ataques de varios golpes (Globo, Globo+) o comandos de mucho daño, como las magias elementales avanzadas. El peligro real es quedarte sin salud.' },
    ],
  },
  {
    id: 'sinfonia-del-brujo', nombre: 'Sinfonía del Brujo', logro: 'ACH_36', llaves: ['Contrapunto (Sora y Riku)'],
    jefes: [
      { id: 'halconjuro-sora', pj: 'sora', nombre: 'Halconjuro', t: 'Empieza en un raíl de Flowmotion: esquiva sus ataques acelerando hasta darle un golpe para que comience el combate de verdad. No uses el acelerón aéreo si saltas: tardarías en volver al suelo. Tiene tres ataques principales: proyectiles mágicos (esquívalos, no se pueden bloquear), una espada de luz (esta sí se puede bloquear) y un tercero. Con paciencia se le vence.' },
      { id: 'chernabog-riku', pj: 'riku', nombre: 'Chernabog', t: 'No es una pelea normal, sino una secuencia parecida a las de Dive y bastante sencilla. Acércate lo suficiente para iniciar un ataque que le quita una de sus tres barras de vida. Esquiva o bloquea con el escudo las bolas de fuego y los pilares de las dos primeras fases; hay esferas de vida cerca de las formaciones estáticas.' },
    ],
  },
  {
    id: 'mundo-inexistente', nombre: 'El Mundo Inexistente', logro: 'ACH_37',
    jefes: [
      { id: 'xemnas-sora', pj: 'sora', nombre: 'Xemnas', t: 'Se teletransporta, ataca de cerca (puedes bloquear y contraatacar) o a distancia con magia. Al empezar lanza edificios: esquívalos yendo a la izquierda y aprovecha el segundo lanzamiento para atacar. Usa mucho el escudo, que te impide atacarle de frente. Cuando pierde bastante vida, vuelve a lanzar edificios; si llegas hasta él usa tu Realidad Alterna para aturdirlo y golpéalo con los raíles. Cúrate cuando se mueva mucho.' },
      { id: 'terror-encapuchado-riku', pj: 'riku', nombre: 'Terror Encapuchado', t: 'Relativamente sencillo: ataca desde lejos aprovechando la oscuridad. Fija el objetivo al empezar y sabrás siempre dónde está. Cuando lance su proyectil rojo, esquívalo rodando y ve hacia él antes de que desaparezca; si el ataque sale en el suelo, usa el doble salto.' },
      { id: 'ansem-riku', pj: 'riku', nombre: 'Ansem (fases 1 y 2)', t: 'En la fase 1 empiezas flotando; Ansem se aleja y dispara, y se queda quieto cada pocos ataques: ahí atacas. Con la Realidad Alterna le haces daño extra. La fase 2 es posiblemente el jefe más difícil de Riku: tras quitarle cierta vida te lanza hacia atrás con grandes bolas de oscuridad que te persiguen. Para acercarte tienes Flowmotion, o equipar «Dark Aura» o «Dark Splicer» (sin nombre en castellano con fuente): ambos te teletransportan junto a Ansem; fija el objetivo y úsalos cada vez que te mande lejos.' },
      { id: 'xehanort-riku', pj: 'riku', nombre: 'Xehanort joven', t: 'Aunque hace combos y magias, ninguno es especialmente peligroso y tienes tiempo de curarte. Cuidado cuando te rodee el hielo: todas las piezas se unen donde estés. En la fase del tiempo detenido deja un reloj como objetivo mientras copias suyas te atacan: lleva Cura y Curaga y usa comandos fuertes; si tardas demasiado, el combate se reinicia.' },
      { id: 'armadura-ventus-riku', pj: 'riku', nombre: 'Terror Armadura de Ventus', t: 'Mucha menos vida que los anteriores y ataques débiles. Cada cierto tiempo desaparece y vuelve a aparecer mientras esquivas la oscuridad. Al final hay una Realidad Alterna especial: cada vez que lance una ráfaga de energía, pulsa A para generar otra y dañarle. Si mueres aquí, repites todo el combate. Después te hacen las tres preguntas del final secreto.' },
    ],
  },
];

// Jefes y combates que salen tras terminar el juego (sin logro propio salvo Julius, que da la Arma Artema).
export const SECRETOS_DDD = [
  {
    id: 'julius', nombre: 'Julius', donde: 'La Plaza de la Fuente, en Ciudad de Paso, tras completar el juego.',
    t: 'Es el jefe secreto. Gamerbase recomienda ir como mínimo a nivel 55-65 con las habilidades Último estertor, Una vez más y Hoja sana, y un par de Cura++ y otro par de Globo++ (o Globo+ si no los tienes). KHWorld apunta a que su mayor debilidad es el comando Balloonga (Globo++ en la versión HD), del que se consiguen varias copias con los Lucientes y como premio en copas del Naiperama. Hay que vencerle con los dos personajes para el 100 %. Da la Llave Espada Arma Artema.',
    marcas: [['sora', 'Vencido con Sora'], ['riku', 'Vencido con Riku']],
  },
  {
    id: 'lord-kyroo', nombre: 'Lord Kyroo', donde: 'Aparece en tres sitios: La Ciudad de las Campanas (Nave, con Riku), El Paraíso del Bromista (Promontorio, con Sora) y Sinfonía del Brujo («Moonlight Wood», con Riku).',
    t: 'Es un Luciente especial: su receta se consigue venciéndole. Cada vez que le quitas una parte de su enorme barra de vida desaparece y hay que buscarle en otro de los tres sitios; la vida que le queda se mantiene entre combates. También da un aumento de vitalidad máxima.',
    marcas: [['unico', 'Vencido']],
  },
];
