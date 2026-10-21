// Jefes de la historia de cada personaje: dónde están, debilidades, recompensas, texto del diario
// del juego (Informes, traducción oficial vía Wiki ES) y estrategia resumida en castellano.
// Fuentes: página de cada jefe en la Wiki ES y en KHWiki (debilidades = multiplicador de daño de KHWiki).
// Recompensas sin nombre oficial en castellano comprobado: en inglés y marcadas con `en: true`.
// Datos contrastados el 21-10-2026; ver notas/investigacion-builds.md.

const ES = 'https://kingdomhearts.fandom.com/es/wiki/';
const KH = 'https://www.khwiki.com/';

// Grupos en que se muestran (la Wiki ES confirma que la Rueca Fatal es el primer jefe de Terra;
// el resto de mundos se ordena por mundo, no por orden de visita).
export const FASES = {
  inicio: 'Tierra de Partida',
  mundos: 'Mundos',
  final: 'Desenlace',
  extra: 'Episodio Final y Episodio Secreto',
};

export const JEFES = {
  terra: [
    {
      id: 'esferas-de-luz', nombre: 'Esferas de Luz', mundo: 'Tierra de Partida', fase: 'inicio', img: 'esfera-de-luz',
      premios: [{ t: 'Estilo Impacto Crítico' }],
      estrategia: 'Se mueven muy rápido por el campo y atacan con rayos de luz o embistiéndote. Mientras se mueven, lo más útil es Embestida o Tiro Mortífero; cuando se paran, golpéalas con ataques normales.',
      f: [['wiki', 'Esfera_de_Luz'], ['kh', 'Orb_of_Light']],
    },
    {
      id: 'rueca-fatal', nombre: 'Rueca Fatal', mundo: 'Reino Encantado', fase: 'mundos', img: 'rueca-fatal',
      debil: { Fuego: 1.5 },
      diario: 'Este peculiar nesciente atacaba valiéndose de su rueda e hilos para inmovilizar a sus rivales.',
      premios: [{ t: 'Ranura de baraja +1' }, { t: 'Estilo Polvo de Diamante' }, { t: 'Fairy Stars', en: true }],
      estrategia: 'Es el primer jefe de Terra: golpea y huye. Abre con un rayo; si te atrapa, pulsa ✕ repetidamente para soltarte, aunque se puede bloquear en el momento justo (también puedes fijar su brazo-huso y destruirlo para que no lo repita). Tras lanzarte la rueda salta unas tres veces hasta recuperarla: salta tú antes de que caiga para evitar la onda. Si te acercas mucho gira sobre sí mismo, así que atácale de lejos con magia como Piro o Hielo. Con poca vida se encabrita y carga por sorpresa: aléjate con Impulso.',
      f: [['wiki', 'Rueca_Fatal'], ['kh', 'Wheel_Master']],
    },
    {
      id: 'maestro-de-sinfonias', nombre: 'Maestro de Sinfonías', mundo: 'Castillo de los Sueños', fase: 'mundos', img: 'maestro-de-sinfonias',
      diario: 'Nesciente nacido de los malos sentimientos y los celos que corroyeron a lady Tremaine y sus hijas al ver bailar a Cenicienta y el Príncipe.',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Ranura de baraja +1' }, { t: 'Nexo-D de Cenicienta' }, { t: 'Tablero Real' }, { t: 'Stroke of Midnight', en: true }],
      estrategia: 'Abre con un Tiro certero para quitarle vida rápido. Primero ataca con sus instrumentos (violín, trompeta y tambor); destruirlos da esferas de VT y platines, aunque no es obligatorio. Contra el tambor y el violín, Bloqueo seguido de Maza Postrera; la trompeta flota más alta, así que esquívala con Impulso y usa combos aéreos. Después salta creando ondas al caer (esquiva y castiga) y lanza la batuta como un bumerán. Un remate fuerte le tira el sombrero y lo deja aturdido; cuando brilla con energía oscura es invulnerable: apártate.',
      f: [['wiki', 'Maestro_de_Sinfonías'], ['kh', 'Symphony_Master']],
    },
    {
      id: 'espejo-magico', nombre: 'Espejo Mágico', mundo: 'Bosque de los Enanitos', fase: 'mundos', img: 'espejo-magico',
      diario: 'Misterioso espejo lleno de sabiduría que responde siempre con la verdad a las preguntas de su ama, la Reina.',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Estilo Lluvia Pírica' }, { t: 'Treasure Trove', en: true }],
      estrategia: 'Un jefe sencillo. Se hunde en la superficie y aparece con copias en fila o en círculo que escupen bolas de fuego: el verdadero es la única máscara que sonríe; golpéalo y las copias desaparecen. Cuando carga en línea recta, apártate a un lado. A veces flota sobre ti y dispara desde arriba.',
      f: [['wiki', 'Espejo_Mágico'], ['kh', 'Game:Magic_Mirror']],
    },
    {
      id: 'braig', nombre: 'Braig', mundo: 'Vergel Radiante', fase: 'mundos', img: 'braig', vs: 'vs-braig-terra',
      premios: [{ t: 'Informe Xehanort II' }, { t: 'Dark Volley', en: true }],
      estrategia: 'Empieza disparando desde una plataforma alta como un francotirador: encadena Impulsos o quédate en la línea de fuego y usa Bloqueo, que le devuelve las balas, le hace daño y le obliga a bajar antes. En el suelo dispara ráfagas que también puedes devolver con Bloqueo. Si se queda quieto cargando, golpéale para cancelarlo; si no llegas, esquiva con Impulso, porque ese disparo cargado no se puede bloquear. A veces corre disparando a toda velocidad: bloquea. Como se teletransporta tanto, cuesta aprovechar Tiro certero, estilos y Nexo-D: paciencia y ataca cuando cargue.',
      f: [['wiki', 'Braig'], ['kh', 'Game:Braig']],
    },
    {
      id: 'triarmadura', nombre: 'Triarmadura', mundo: 'Vergel Radiante', fase: 'mundos', img: 'triarmadura',
      diario: 'Este nesciente de ingentes proporciones y oriundo de Vergel Radiante estaba formado por la fusión de otros tres nescientes menores.',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Estilo Quiebrarrocas' }],
      estrategia: 'Luchas con Ventus y Aqua como aliados: no hacen mucho daño, pero reviven solos. Fija enseguida las piernas y golpea y huye. Sus ataques físicos, como la embestida, se pueden bloquear para contraatacar; las bolas de energía y el láser desde el centro se esquivan con Impulso. Cuando solo quedan cabeza y brazos giran disparando un láser: quédate en el borde del campo. Al final la cabeza dispara láseres en todas direcciones; bloquearlos los devuelve, pero si vas justo de vida, mejor esquivar. Destruye la cabeza para terminar.',
      f: [['wiki', 'Triarmadura'], ['kh', 'Trinity_Armor']],
    },
    {
      id: 'zack', nombre: 'Zack', mundo: 'Coliseo del Olimpo', fase: 'mundos', img: 'zack',
      resiste: { Oscuridad: 0.5 },
      premios: [],
      nota: 'La Wiki ES dice que al vencerlo consigues su Nexo-D; KHWiki no da recompensa para este combate.',
      estrategia: 'Hay dos combates. En el primero, Zack abre con un salto y un tajo: esquívalo con Impulso o acércate con Carga Eléctrica. Mantente cerca (de lejos lanza una onda cortante) y tírale al suelo con ataques como Cisco; mezclar físico y magia como Piro activa Impacto Crítico. En la revancha, ya controlado por Hades, mantén la distancia y muévete sin parar. Su combo más peligroso casi siempre te deja al borde: encadena Impulsos o lanza un Tiro certero justo cuando empiece, porque mientras lo usas no recibes daño. Cuando la espada brilla llega una lluvia de meteoros: Impulso. Ataca cuando se detenga luchando contra la oscuridad.',
      f: [['wiki', 'Zack'], ['kh', 'Game:Zack']],
    },
    {
      id: 'experimento-221', nombre: 'Experimento 221', mundo: 'Espacio Profundo', fase: 'mundos', img: 'experimento-221',
      debil: { Hielo: 1.25 }, resiste: { Rayo: 0.75 },
      diario: 'Alienígena creado por el doctor Jumba a través de sus experimentos con ingeniería genética. Tiene la habilidad de cargar de energía eléctrica su cuerpo y ataca liberándola para electrocutar a sus adversarios.',
      premios: [{ t: 'Estilo Pulso Galvánico' }, { t: 'Hyperdrive', en: true }],
      estrategia: 'Fíjalo nada más empezar y no lo persigas: en cuanto te acercas te embiste cargado de electricidad; adelántate o usa Impulso. Haz un combo aéreo rápido y aléjate: al aterrizar se rodea de un campo eléctrico que crece según pierde vida. Si se mete en los cañones del techo, destrúyelos con combos aéreos y quedará aturdido. Cuando lanza bolas eléctricas por toda la arena, quédate cerca de él.',
      f: [['wiki', 'Experimento_221'], ['kh', 'Game:Experiment_221']],
    },
    {
      id: 'peter-pan', nombre: 'Peter Pan', mundo: 'País de Nunca Jamás', fase: 'mundos', img: 'peter-pan',
      premios: [{ t: 'Estilo Aura de Aceros' }, { t: 'Nexo-D de Peter Pan' }],
      estrategia: 'Vuela por la arena y baja de vez en cuando a apuñalarte con su daga. Esquiva sus ataques, que son flojos, y golpéale cuando esté a tu altura. El combate termina cuando le quitas la mitad de la vida.',
      f: [['wiki', 'Peter_Pan'], ['kh', 'Game:Peter_Pan']],
    },
    {
      id: 'eraqus', nombre: 'Maestro Eraqus', mundo: 'Tierra de Partida', fase: 'final', img: 'eraqus',
      resiste: { Oscuridad: 0.5 },
      premios: [{ t: 'Informe Xehanort VIII' }, { t: 'Chaos Ripper', en: true }],
      estrategia: 'Uno de los jefes más duros de Terra; no hay Nexo-D. Golpea y huye. De cerca usa tajos ascendentes: Impulso. Sus combos y embestidas se paran con Bloqueo seguido de Maza Postrera, que además lo derriba. Las cuchillas y esferas de luz que dispara solo se defienden con Bloqueo, que se las devuelve. Si salta y clava cuchillas en el suelo, encadena Impulsos: salen columnas de fuego que te persiguen. Cuanto más lejos estés, más probable es su ataque desesperado. Lleva Cura++; Cuadro de Minas lo hace tropezar. En Crítico hay quien quita los comandos de ataque, deja solo curación y le pega con el ataque normal, porque contraataca enseguida.',
      f: [['kh', 'Game:Eraqus']],
    },
    {
      id: 'maestro-xehanort', nombre: 'Maestro Xehanort', mundo: 'Necrópolis de Llaves Espada', fase: 'final', img: 'maestro-xehanort', vs: 'vs-maestro-xehanort',
      resiste: { Oscuridad: 0.75 },
      premios: [{ t: 'Aumento de VT máx.' }],
      estrategia: 'Hay dos combates. En el primero luchas contra Vanitas y Xehanort a la vez: céntrate en Vanitas, porque Xehanort sobre todo esquiva y mantiene la distancia (en la versión HD hay que vaciar la vida de Vanitas para terminar). El segundo es el combate de verdad: Xehanort se mantiene lejos y usa magia de área, pero todo se puede esquivar con buen tiempo. Llevar Curas y un Tiro certero facilita mucho la pelea. Por debajo de la mitad de vida puede agarrarte: pulsa ✕ repetidamente para escapar antes del golpe de aire helado.',
      f: [['wiki', 'Maestro_Xehanort'], ['kh', 'Game:Master_Xehanort']],
    },
    {
      id: 'terra-xehanort', nombre: 'Terra-Xehanort', mundo: 'Necrópolis de Llaves Espada', fase: 'final', img: 'terra-xehanort', vs: 'vs-terra-xehanort-terra',
      resiste: { Oscuridad: 0.75 },
      premios: [{ t: 'Informe Xehanort XI' }],
      estrategia: 'El combate final de Terra: controlas a la Consciencia Latente, con las habilidades que llevara Terra. No hay Nexo-D, pero sí estilos y Tiro certero. Terra-Xehanort se desplaza con Impulso Sónico envuelto en oscuridad, siendo invulnerable, y castiga los ataques imprudentes y trampas como Cuadro de Minas. Contra sus embestidas y combos, lo mejor es Bloqueo e inmediatamente Maza Postrera; atácale por la espalda, porque él también bloquea y contraataca. Sus proyectiles oscuros se le devuelven con Bloqueo. Con poca vida hace salir rocas del suelo (bloquéalas a tiempo y no lo persigas, que se teletransporta) y, si estás cerca, invoca un meteoro.',
      f: [['wiki', 'Terra-Xehanort'], ['kh', 'Game:Terra-Xehanort']],
    },
  ],
  ventus: [
    {
      id: 'esferas-de-luz', nombre: 'Esferas de Luz', mundo: 'Tierra de Partida', fase: 'inicio', img: 'esfera-de-luz',
      premios: [{ t: 'Estilo Exacerbación' }],
      estrategia: 'Se mueven muy rápido por el campo y atacan con rayos de luz o embistiéndote. Mientras se mueven, lo más útil es Embestida o Tiro Mortífero; cuando se paran, golpéalas con ataques normales.',
      f: [['wiki', 'Esfera_de_Luz'], ['kh', 'Orb_of_Light']],
    },
    {
      id: 'arbolio-loco', nombre: 'Arbolio Loco', mundo: 'Bosque de los Enanitos', fase: 'mundos', img: 'arbolio-loco',
      debil: { Fuego: 1.5, Rayo: 1.5 },
      diario: 'Ventus tuvo que enfrentarse a este gigantesco nesciente con aspecto de árbol en su visita al Bosque de los Enanitos.',
      premios: [{ t: 'Estilo Lluvia Pírica' }, { t: 'Treasure Trove', en: true }],
      estrategia: 'Es el primer jefe de Ventus: sirve para probar sus comandos, y tanto los físicos como la magia funcionan bien. Al principio camina despacio: aprovéchalo para quitarle vida. De repente lanza bombas en todas direcciones: encadena Volteretas. Si estás muy cerca te pisa, y cuando salta crea una onda al caer: salta tú antes. Al aterrizar suelta fruta envenenada que deja charcos morados; no los pises. Si clava las raíces en el suelo, quédate en el aire para evitar las rocas. Cuando cae aturdido suelta esferas de VT: recógelas y golpéale con todo. Al final dispara tres bombas grandes cuya sombra ves en el suelo: Voltereta.',
      f: [['wiki', 'Arbolio_Loco'], ['kh', 'Mad_Treant']],
    },
    {
      id: 'lucifer', nombre: 'Lucifer', mundo: 'Castillo de los Sueños', fase: 'mundos', img: 'lucifer',
      premios: [{ t: 'Estilo Polvo de Diamante' }, { t: 'Stroke of Midnight', en: true }],
      estrategia: 'El segundo jefe de Ventus. De frente es complicado: si te golpea, recupérate y contraataca con Lance Ulterior. Atácale por la espalda y usa Tiro certero siempre que puedas. Ataca con las zarpas, salta desde las zonas altas creando una onda al caer y embiste; después de cada ataque queda expuesto. Con buen tiempo empieza una serie de comandos de reacción en la que montas a Lucifer como a un toro: pulsa los botones que se indiquen hasta que choque contra un mueble y, mientras está aturdido, remata con el comando de reacción que aparece, que hace muchísimo daño.',
      f: [['wiki', 'Lucifer'], ['kh', 'Game:Lucifer']],
    },
    {
      id: 'malefica', nombre: 'Maléfica', mundo: 'Reino Encantado', fase: 'mundos', img: 'malefica',
      premios: [{ t: 'Estilo Pulso Galvánico' }, { t: 'Fairy Stars', en: true }],
      estrategia: 'Luchas con Flora, Fauna y Primavera. Cuando su bastón brilla, forma llamas a su alrededor que las hadas te ayudan a apagar. Cuando lanza su luz maldita, acércate a las hadas y usa el comando de reacción conjunto: disparas una bola de luz que la daña y la duerme. Mientras duerme, castígala con magia y ataques de varios golpes como Tornado o Tiro Eólico; los ataques de Aero pueden activar Exacerbación. Con menos vida se teletransporta a un lado: corre hacia ella esquivando con Voltereta los rayos oscuros. Después cruza el campo convertida en una nube de energía oscura: Voltereta. Al final llama a sus guardias, que son poca cosa. Es inmune a Aero e Imán, pero Tornado sí la levanta.',
      f: [['wiki', 'Maléfica'], ['kh', 'Game:Maleficent']],
    },
    {
      id: 'metamorphosis', nombre: 'Metamorphosis', mundo: 'Espacio Profundo', fase: 'mundos', img: 'metamorphosis',
      diario: 'En su periplo por el Pasaje dimensional, Ventus tuvo la mala fortuna de toparse con este terrible nesciente, capaz de flotar en el aire y de atacar utilizando su nebuloso cuerpo.',
      premios: [{ t: 'Estilo Acero Alado' }, { t: 'Nexo-D del Experimento 626' }, { t: 'Hyperdrive', en: true }],
      estrategia: 'Hay dos combates. El primero, en el Pasaje dimensional sobre la Llave Surcadora, solo tiene cuatro comandos: carga, salto, barrera y giro aéreo. Fíjalo y atácale con el giro aéreo o la carga; basta con quitarle una barra de vida. El segundo, en la nave, es especial: luchas con el Experimento 626 y debes impedir que dañe demasiado el motor (si se llena la barra de arriba a la izquierda, pierdes). No hay Nexo-D. Fíjalo y usa combos aéreos y magia, porque vuela casi siempre fuera de tu alcance. Si se posa en la columna brillante del centro, empieza a dañar el motor: busca a Stitch y usa el comando especial que lo lanza contra Metamorphosis.',
      f: [['wiki', 'Metamorphosis'], ['kh', 'Metamorphosis']],
    },
    {
      id: 'capitan-garfio', nombre: 'Capitán Garfio', mundo: 'País de Nunca Jamás', fase: 'mundos', img: 'capitan-garfio',
      premios: [{ t: 'Pétalo de Hada' }, { t: 'Nexo-D de Peter Pan' }, { t: 'Tablero Calavera' }],
      estrategia: 'Sus ataques duelen: usa Bloqueo o Voltereta. Bloquea tus golpes, así que atácale por la espalda; Tajo Zaguero y Bloqueo Shock son muy útiles, y el estilo Acero Alado también. Cuando carga cortando sin parar no le ataques cuerpo a cuerpo: planea alrededor de la isla, lanza un Tiro certero o interrúmpelo con un bloqueo o con fuego. También lanza bombas con forma de regalo. Cuidado con el agua, donde nada el Cocodrilo; pero si lo golpeas cerca del borde, Garfio cae al agua, el Cocodrilo le hace daño y vuelve corriendo sin defensa. El fuego (o Lluvia Pírica) le prende y lo deja abierto unos golpes.',
      f: [['wiki', 'Capitán_Garfio'], ['kh', 'Game:Captain_Hook']],
    },
    {
      id: 'triarmadura', nombre: 'Triarmadura', mundo: 'Vergel Radiante', fase: 'mundos', img: 'triarmadura',
      diario: 'Este nesciente de ingentes proporciones y oriundo de Vergel Radiante estaba formado por la fusión de otros tres nescientes menores.',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Estilo Ciclón' }],
      estrategia: 'Luchas con Terra y Aqua como aliados: no hacen mucho daño, pero reviven solos. Fija enseguida las piernas y golpea y huye, aprovechando la velocidad de Ventus. Sus ataques físicos se pueden bloquear para contraatacar; las bolas de energía y el láser desde el centro se esquivan con Voltereta. Cuando solo quedan cabeza y brazos giran disparando un láser: quédate en el borde del campo. Al final la cabeza dispara láseres en todas direcciones; bloquearlos los devuelve, pero si vas justo de vida, mejor esquivar. Destruye la cabeza para terminar.',
      f: [['wiki', 'Triarmadura'], ['kh', 'Trinity_Armor']],
    },
    {
      id: 'vanitas', nombre: 'Vanitas', mundo: 'Necrópolis de Llaves Espada', fase: 'final', img: 'vanitas', vs: 'vs-vanitas-ventus-1',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Nexo-D de Mickey' }],
      estrategia: 'Dos combates. El primero tiene dos partes; en la segunda te ayuda Mickey, que revive solo. Golpea y huye mezclando ataques físicos y magia. Si desaparece, Voltereta enseguida o te golpeará desde arriba por la espalda; también esquiva así la bola de fuego que se divide en tres, el rayo oscuro que lanza desde el aire y su combo de dos golpes. Cuadro de Minas y Tornado le hacen mucho daño e interrumpen sus ataques, e Imán, Aero y Gravedad lo levantan en el aire y lo dejan expuesto (esto vale para todos sus combates). En el segundo combate surfea un torbellino de llaves espada lanzando hielo oscuro que te persigue: derríbalo con Tiro certero o magia. Si se hunde en el suelo como un charco de oscuridad, encadena Volteretas a su alrededor. Casi todos sus ataques se pueden contrarrestar con Tajo Zaguero o Carga Postrera.',
      f: [['wiki', 'Vanitas'], ['kh', 'Game:Vanitas']],
    },
    {
      id: 'vanitas-final', nombre: 'Vanitas (combate final)', mundo: 'Dentro del corazón de Ventus', fase: 'final', img: 'vanitas', vs: 'vs-vanitas-ventus-3',
      premios: [],
      estrategia: 'Vanitas se ha fusionado con Ventus y empuña la χ-blade incompleta, con más vida y ataques nuevos. Rodea su arma de energía y embiste, golpea el suelo creando una onda en forma de X y dispara una X que te persigue: Voltereta. Si le atacas mientras carga la χ-blade, cancelas el ataque (Tajo Zaguero va muy bien). Puede teletransportarse y cortarte desde todos lados: bloquea y contraataca con Carga Postrera. También embiste varias veces envuelto en oscuridad: Voltereta. No uses los ataques físicos como base; mejor magia y ataques a distancia, y Tornado y Cuadro de Minas para interrumpirle. Con 1 VT rompe la arena y Ventus hace un Nexo-D con él: ganas tres choques para llenar la barra (pulsa los botones indicados, gira el stick en sentido antihorario o pulsa ✕ rápidamente, según el choque). Luego usa el remate final de cara a él, fijado y ni muy cerca ni muy lejos.',
      f: [['kh', 'Game:Vanitas']],
    },
  ],
  aqua: [
    {
      id: 'esferas-de-luz', nombre: 'Esferas de Luz', mundo: 'Tierra de Partida', fase: 'inicio', img: 'esfera-de-luz',
      premios: [{ t: 'Estilo Hila Encantos' }],
      estrategia: 'Se mueven muy rápido por el campo y atacan con rayos de luz o embistiéndote. Mientras se mueven, lo más útil es Embestida o Tiro Mortífero; cuando se paran, golpéalas con ataques normales.',
      f: [['wiki', 'Esfera_de_Luz'], ['kh', 'Orb_of_Light']],
    },
    {
      id: 'carroza-poseida', nombre: 'Carroza Poseída', mundo: 'Castillo de los Sueños', fase: 'mundos', img: 'carroza-poseida',
      diario: 'Nacido de los malos sentimientos de lady Tremaine y sus hijas, este nesciente podía hacer brotar girespinas de sus extremidades, entre otras lindezas.',
      premios: [{ t: 'Nexo-D de Cenicienta' }, { t: 'Stroke of Midnight', en: true }],
      estrategia: 'El primer jefe de Aqua y probablemente el más fácil del juego: lleva comandos de magia y ataca de lejos o golpea y huye. Abre embistiendo a gran velocidad: bloquéalo con Coraza y contraataca. Se escapa rodando por la arena: síguela encadenando Rueda Veloz. Cuando salta crea una onda al caer, de poco alcance pero que quita mucho: salta antes o bloquéala. Tras varios golpes queda inconsciente y puedes volcarla con un comando de reacción: es el momento de los ataques físicos. Con poca vida abre la boca para tragarte: ponte detrás de ella; si te atrapa, pulsa ✕ rápidamente. Si levita, viene su ataque más peligroso, una lluvia de bombas: encadena Ruedas sin atacar. Los Giraespinas que invoca son opcionales.',
      f: [['wiki', 'Carroza_Poseída'], ['kh', 'Cursed_Coach']],
    },
    {
      id: 'espejo-magico', nombre: 'Espejo Mágico', mundo: 'Bosque de los Enanitos', fase: 'mundos', img: 'espejo-magico',
      diario: 'Misterioso espejo lleno de sabiduría que responde siempre con la verdad a las preguntas de su ama, la Reina.',
      premios: [{ t: 'Ranura de baraja +1' }, { t: 'Nexo-D de Blancanieves' }],
      estrategia: 'Un jefe sencillo. Se hunde en la superficie y aparece con copias en fila o en círculo que escupen bolas de fuego: el verdadero es la única máscara que sonríe; golpéalo y las copias desaparecen. Cuando carga en línea recta, apártate a un lado. Con Aqua, cuidado con la bola de fuego blanca: te confunde e invierte tus movimientos.',
      f: [['wiki', 'Espejo_Mágico'], ['kh', 'Game:Magic_Mirror']],
    },
    {
      id: 'malefica-dragon', nombre: 'Maléfica (dragón)', mundo: 'Reino Encantado', fase: 'mundos', img: 'malefica-dragon',
      premios: [{ t: 'Informe Xehanort VI' }, { t: 'Estilo Lluvia Pírica' }, { t: 'Fairy Stars', en: true }],
      estrategia: 'Luchas con el príncipe Felipe. Su único punto débil es la cabeza y solo ataca lo que tiene delante: ponte a su lado con Rueda Veloz y castígala con Electro, Hielo y Piro. Si estás a tiro de sus mordiscos, suelta un Cuadro de Minas y apártate: al caer de sus saltos pisa las minas. Cuando escupe su fuego verde, el príncipe te avisa: ponte detrás de su escudo y, con el comando de reacción, te lanza por encima de las llamas a su cabeza, dejándola aturdida. Con poca vida echa a volar: el príncipe puede lanzarte otra vez hasta ella, y a veces caes sobre su lomo para seguir atacando. Una alternativa lenta pero segura: quédate detrás de ella lanzando magia todo el combate.',
      f: [['wiki', 'Maléfica'], ['kh', 'Game:Maleficent_(Dragon)']],
    },
    {
      id: 'hades', nombre: 'Hades y Coloso de Hielo', mundo: 'Coliseo del Olimpo', fase: 'mundos', img: 'hades', vs: 'vs-hades-coloso',
      resiste: { Fuego: 0.5, Hielo: 0.5, Rayo: 0.75, Oscuridad: 0.75 },
      premios: [{ t: 'Estilo Polvo de Diamante' }, { t: 'Mark of Hero', en: true }],
      estrategia: 'Céntrate primero en el Coloso de Hielo: sus fragmentos de hielo quitan muchísima vida, y Hades se queda casi todo el rato a distancia dándole órdenes. Los ataques de Hades (zarpazo en llamas, bolas de fuego y llamarada) son de corto alcance, fáciles de esquivar y se pueden bloquear, pero pegan fuerte. Cuando caiga el Coloso, Hades se acercará: usa estilos, Tiro certero o un Nexo-D y caerá enseguida. Las resistencias que se indican arriba son las de Hades.',
      f: [['wiki', 'Hades'], ['kh', 'Game:Hades']],
    },
    {
      id: 'zack', nombre: 'Zack', mundo: 'Coliseo del Olimpo', fase: 'mundos', img: 'zack-aqua', vs: 'vs-zack-aqua',
      resiste: { Oscuridad: 0.5 },
      premios: [],
      nota: 'La Wiki ES dice que al vencerlo consigues su Nexo-D; KHWiki no da recompensa para este combate.',
      estrategia: 'Un combate amistoso, ya libre del control de Hades. Abre con un salto y una estocada hacia abajo: Rueda Veloz. Golpea y huye, castigándolo entre ataque y ataque con magia como Aero o Piro; con Cuadro de Minas puedes hacerle tropezar, incluso al caer de su salto. A fuerza de magia se activará Hila Encantos: acércate con Carga Eléctrica y aprovecha sus golpes; si sigues llenando la barra puede pasar a Aura de Aceros.',
      f: [['wiki', 'Zack'], ['kh', 'Game:Zack']],
    },
    {
      id: 'gantu', nombre: 'Gantu', mundo: 'Espacio Profundo', fase: 'mundos', img: 'gantu',
      premios: [{ t: 'Hyperdrive', en: true }],
      estrategia: 'Dispara de dos formas: tiros apuntados (si te da uno, te dan todos) y ráfagas rápidas. Esquívalos con Rueda Veloz o devuélveselos con Coraza, que le hace bastante daño. Bajo él estás bastante a salvo, porque le cuesta apuntar a algo tan pequeño. De cerca te da manotazos (vigila su brazo derecho) y embiste: cuando eche los dos brazos atrás, prepárate para esquivar; un Cuadro de Minas en su camino le hará mucho daño. Junto al Experimento 626 tienes un comando de reacción que se lo lanza a la cara y lo distrae unos 6 segundos: aprovéchalo para curarte o atacar.',
      f: [['wiki', 'Gantu'], ['kh', 'Game:Gantu']],
    },
    {
      id: 'vanitas', nombre: 'Vanitas', mundo: 'Vergel Radiante y País de Nunca Jamás', fase: 'mundos', img: 'vanitas',
      premios: [{ t: 'Ranura de baraja +1' }, { t: 'Estilo Marcha Etérea' }],
      estrategia: 'Dos combates: el primero en el Vergel Radiante y el segundo en el País de Nunca Jamás. Golpea y huye, con la magia como arma principal. Si desaparece, Rueda Veloz enseguida o te golpeará desde arriba; esquiva igual la bola de fuego que se divide en tres, el rayo oscuro desde el aire (no se puede bloquear) y su combo de dos golpes, que en el segundo combate lanza además una onda que persigue. En el segundo también se hunde en el suelo como un charco de oscuridad: encadena Ruedas cerca de él para que salga antes sin hacerte daño. Mina Astuta le hace mucho daño e interrumpe sus ataques.',
      f: [['wiki', 'Vanitas'], ['kh', 'Game:Vanitas']],
    },
    {
      id: 'triarmadura', nombre: 'Triarmadura', mundo: 'Vergel Radiante', fase: 'mundos', img: 'triarmadura',
      diario: 'Este nesciente de ingentes proporciones y oriundo de Vergel Radiante estaba formado por la fusión de otros tres nescientes menores.',
      premios: [{ t: 'Aumento de VT máx.' }, { t: 'Estilo Aura de Aceros' }],
      estrategia: 'Luchas con Terra y Ventus como aliados: no hacen mucho daño, pero reviven solos. Fija enseguida las piernas y golpea y huye, apoyándote en la magia de Aqua. Sus ataques físicos se pueden parar con Coraza para contraatacar; las bolas de energía y el láser desde el centro se esquivan con Rueda Veloz. Cuando solo quedan cabeza y brazos giran disparando un láser: quédate en el borde del campo. Al final la cabeza dispara láseres en todas direcciones; bloquearlos los devuelve, pero si vas justo de vida, mejor esquivar. Destruye la cabeza para terminar.',
      f: [['wiki', 'Triarmadura'], ['kh', 'Trinity_Armor']],
    },
    {
      id: 'braig', nombre: 'Braig', mundo: 'Necrópolis de Llaves Espada', fase: 'final', img: 'braig-aqua', vs: 'vs-braig-aqua',
      premios: [{ t: 'Aumento de VT máx.' }],
      estrategia: 'Más fuerte que contra Terra y con ataques nuevos. Abre teletransportándose junto a ti y cargando mientras dispara: esquiva con Rueda Veloz o para las balas con Coraza. Suelta un Cuadro de Minas por si choca con él. Después golpea y huye, mejor con magia que con ataques físicos. Como se teletransporta tanto, cuesta aprovechar Tiro certero, estilos y Nexo-D.',
      f: [['wiki', 'Braig'], ['kh', 'Game:Braig']],
    },
    {
      id: 'ventus-vanitas', nombre: 'Ventus-Vanitas', mundo: 'Necrópolis de Llaves Espada', fase: 'final', img: 'ventus-vanitas', vs: 'vs-ventus-vanitas',
      premios: [{ t: 'Informe Xehanort VII' }],
      estrategia: 'El combate final de Aqua, junto a Mickey (revive solo). Al empezar, fíjalo y usa el comando de reacción con Mickey cuando aparezca: te hace invulnerable, hace daño continuo si pulsas ✕ y su remate lo lanza por los aires. Mina Astuta interrumpe sus embestidas. Si se hunde en el suelo como un charco de oscuridad, encadena Ruedas cerca para que salga antes. Esquiva con Rueda Veloz la onda que lanza tras su combo de dos golpes y los rayos oscuros desde arriba. A media vida gana un ataque definitivo: se coloca en el centro y carga energía; ataca fuerte mientras carga y, cuando salte, usa el comando con Mickey o un Tiro certero para no recibir la explosión (o encadena Ruedas por el borde y cúrate con Cura++ si te alcanza). Contra él van bien los ataques que persiguen, como Descarga Ígnea e Hilatiempo.',
      f: [['kh', 'Ventus-Vanitas']],
    },
    {
      id: 'terra-xehanort', nombre: 'Terra-Xehanort', mundo: 'Vergel Radiante (Episodio Final)', fase: 'extra', img: 'terra-xehanort', vs: 'vs-terra-xehanort-final',
      resiste: { Oscuridad: 0.75 },
      premios: [],
      estrategia: 'Usa casi los mismos ataques que contra la Consciencia Latente en la historia de Terra. Apártate con Rueda Veloz y suelta Cuadros de Minas: cuando se lanza con Impulso Sónico envuelto en oscuridad, las minas le hacen daño y le interrumpen, aunque a veces las rodea, así que úsalas sobre todo para controlar por dónde se mueve. Golpea y huye con magia, porque los ataques físicos de Aqua son flojos (y aun así puede esquivar la magia). Coraza para sus proyectiles oscuros; lleva Coraza Cura y al menos dos Curas (mejor Cura+ o Cura++). Si estás cerca levanta columnas de roca; con poca vida se cura con Cura++, así que no le des respiro.',
      f: [['wiki', 'Terra-Xehanort'], ['kh', 'Game:Terra-Xehanort']],
    },
    {
      id: 'engendro-oscuro', nombre: 'Engendro Oscuro', mundo: 'Reino de la Oscuridad (Episodio Secreto, Final Mix)', fase: 'extra', img: 'engendro-oscuro', vs: 'vs-engendro-oscuro',
      premios: [],
      estrategia: 'El jefe del Episodio Secreto y último jefe del juego. Es rápido e impredecible. Al principio ataca desde la oscuridad (solo se ven sus ojos rojos): embiste con la cámara desde su punto de vista, da zarpazos, coletazos y cargas que dejan fuego. Justo después de la escena en la que te mira, bloquea con Coraza y contraataca; luego se queda quieto unos segundos: aprovéchalos. Tras perder barra y media muestra su forma real. Es débil a los ataques a distancia: Triple Piro++ y Carga Eléctrica funcionan muy bien. Después añade bolas de fuego y orbes oscuros que te atraen antes de explotar, y al final usa imágenes rojas, azules y verdes de sí mismo para cargar contra ti. Cúrate cuando haga falta.',
      f: [['wiki', 'Engendro_Oscuro'], ['kh', 'Dark_Hide']],
    },
  ],
};

// Fuentes de todos los jefes, para fuentes([...]) al final de la sección.
export const FUENTES_JEFES = {};
for (const lista of Object.values(JEFES)) {
  for (const j of lista) {
    for (const [tipo, pag] of j.f) {
      const clave = `${tipo}Jefe:${pag}`;
      FUENTES_JEFES[clave] = tipo === 'wiki'
        ? { nombre: `Wiki ES — ${pag.replace(/_/g, ' ')}`, url: ES + encodeURIComponent(pag) }
        : { nombre: `KHWiki — ${pag.replace('Game:', '').replace(/_/g, ' ')}`, url: KH + encodeURIComponent(pag) };
    }
  }
}
