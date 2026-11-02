/* =====================================================================
   BIBLIOTECA DE EJERCICIOS · Full Body JJB
   Material: M mancuernas (2 × ~11 kg) · B bandas (roja/azul) · D barra de dominadas
             C peso corporal · K bici estática · E elíptica
   Formato: id|zona|equipo|nivel(1-3)|reps mín|reps máx|flags|nombre|clave técnica
   flags: c = compuesto principal · u = unilateral (por lado) · i = isométrico (segundos)
          j = salto/impacto · t = tempo lento (6 s/rep)
   Zonas: rod cuádriceps · cad glúteo/isquio · peH pecho · peV hombro · tiV tirón vertical
          tiH tirón horizontal · core · bra brazos/agarre · gem gemelo/tobillo · ani animal flow
          met metabólico/combos/saltos · mov movilidad · car cardio
   ===================================================================== */
const LIB_RAW = `
rod01|rod|M|1|10|15|c|Sentadilla goblet|Mancuerna al pecho, codos por dentro de las rodillas, bajar a paralelo o más.
rod02|rod|M|2|8|12|c|Sentadilla frontal 2 mancuernas|Mancuernas apoyadas en los hombros, codos altos, tronco vertical.
rod03|rod|M|2|8|12|cu|Sentadilla búlgara 2 mancuernas|Pie trasero en el sofá, rodilla delantera sobre el pie, baja vertical.
rod04|rod|M|3|6|10|cut|Búlgara con pausa 2 s abajo|Pausa real abajo sin apoyar la rodilla. Sube explosivo.
rod05|rod|M|1|10|12|u|Zancada atrás 2 mancuernas|Paso atrás largo, rodilla trasera roza el suelo, empuja con el talón delantero.
rod06|rod|M|2|8|12|u|Zancada adelante 2 mancuernas|Freno controlado en el pie delantero, vuelve empujando.
rod07|rod|M|2|10|12|u|Zancada caminando|Pasos largos, tronco firme, sin pausa entre pasos.
rod08|rod|M|2|8|10|u|Zancada lateral con mancuerna|Cadera atrás hacia el lado, pierna contraria estirada.
rod09|rod|M|2|10|12|u|Curtsy lunge con mancuerna|Pierna cruza por detrás en diagonal, rodilla delantera estable.
rod10|rod|M|1|8|12|u|Step-up a silla|Todo el pie en la silla, sube sin impulsarte con la pierna de abajo.
rod11|rod|M|2|6|10|ut|Step-down excéntrico|Bajar en 4 s desde un escalón, talón roza el suelo. Clave para el esquí.
rod12|rod|M|1|10|12|u|Split squat|Posición de zancada fija, baja y sube en vertical.
rod13|rod|M|2|8|10|t|Sentadilla goblet con pausa 3 s|Pausa abajo sin rebote, tronco erguido.
rod14|rod|M|3|8|10|t|Sentadilla 1½ goblet|Baja, sube a media, vuelve abajo y sube completo = 1 rep.
rod15|rod|M|2|6|8|u|Sentadilla cossack con mancuerna|Peso al lado que flexiona, la otra pierna estirada con la punta arriba.
rod16|rod|C|3|5|8|u|Pistol a caja|Siéntate en una silla a una pierna y levántate sin impulso.
rod17|rod|C|3|6|8|u|Sentadilla skater|Rodilla trasera toca el suelo detrás, brazos al frente de contrapeso.
rod18|rod|B|1|12|20||Sentadilla con banda bajo los pies|Banda bajo los pies y sobre los hombros, más tensión arriba.
rod19|rod|M|1|12|15||Sentadilla sumo con mancuerna|Pies abiertos, puntas fuera, mancuerna colgando entre las piernas.
rod20|rod|C|1|30|60|i|Sentadilla isométrica en pared|Muslos paralelos al suelo, espalda pegada a la pared.
rod21|rod|C|3|8|12||Sissy squat asistida|Agarrado a un marco, rodillas adelante y tronco atrás en línea.
rod22|rod|M|2|10|15||Sentadilla sumo en pared + press al frente|Espalda en la pared, mancuerna al pecho, empuja al frente al subir.
rod23|rod|M|3|8|10|u|Zancada atrás con déficit|Pie delantero sobre un libro o escalón, más recorrido.
rod24|rod|M|2|10|12||Sentadilla + elevación lateral a 1 brazo|Al subir haces la elevación lateral. Alterna brazo.
rod25|rod|M|1|10|12||Sentadilla profunda + curl|Bajas con 2 mancuernas, al subir curl de una. Alterna.
cad01|cad|M|1|10|15|c|Peso muerto rumano 2 mancuernas|Cadera atrás, mancuernas rozando las piernas, espalda neutra.
cad02|cad|M|2|8|12|cu|Peso muerto rumano a 1 pierna|Mancuerna en la mano contraria, cadera cuadrada al suelo.
cad03|cad|M|1|10|15|c|Peso muerto con mancuernas|Rodillas algo más flexionadas que en el rumano, empuja el suelo.
cad04|cad|M|1|12|15||Peso muerto sumo con mancuerna|Pies abiertos, mancuerna entre las piernas, pecho alto.
cad05|cad|M|1|12|20|c|Hip thrust en sofá con mancuerna|Escápulas en el sofá, mancuerna en la cadera, pausa 1 s arriba.
cad06|cad|C|2|10|15|u|Hip thrust a 1 pierna|Escápulas en el sofá, sube con una pierna, cadera nivelada.
cad07|cad|B|1|15|20||Puente de glúteo con banda en rodillas|Abre las rodillas contra la banda mientras subes.
cad08|cad|C|1|10|12|u|Puente de glúteo con marcha|Arriba en puente, alterna levantar un pie sin que caiga la cadera.
cad09|cad|C|2|8|12||Curl femoral deslizante|Toalla bajo los talones en suelo liso, cadera arriba todo el rato.
cad10|cad|C|3|6|10|u|Curl femoral deslizante a 1 pierna|Igual que el anterior con una sola pierna.
cad11|cad|C|3|4|6|t|Nordic curl excéntrico|Pies anclados bajo el sofá, cae lo más lento posible, empuja con las manos.
cad12|cad|B|1|12|15||Good morning con banda|Banda bajo los pies y tras el cuello, bisagra pura.
cad13|cad|B|1|12|20||Pull-through con banda|Banda anclada abajo detrás, tira con la cadera, no con los brazos.
cad14|cad|M|2|15|20||Swing con mancuerna|Bisagra explosiva, la mancuerna sube por la cadera, no por los brazos.
cad15|cad|B|1|15|20|u|Patada de glúteo con banda|En cuadrupedia, talón al techo, sin arquear la lumbar.
cad16|cad|B|1|12|15||Monster walk con banda|Banda en rodillas o tobillos, pasos laterales en semisentadilla.
cad17|cad|B|1|15|20|u|Clamshell con banda|Tumbado de lado, abre la rodilla sin rotar la pelvis.
cad18|cad|C|3|4|6|u|Hip airplane|A una pierna en bisagra, rota la pelvis abriendo y cerrando.
cad19|cad|C|1|20|30||Frog pump|Plantas de los pies juntas, puente corto y rápido.
cad20|cad|C|1|20|40|iu|Puente isométrico a 1 pierna|Cadera alta y nivelada.
cad21|cad|M|2|10|12|u|Peso muerto kickstand|Pie trasero solo de apoyo, 80 % del peso en la pierna delantera.
cad22|cad|M|2|8|10||Peso muerto → mountain climber|Bajas en bisagra, apoyas en las mancuernas, 4 climbers y subes.
peH01|peH|C|1|8|15|c|Flexión estricta|Cuerpo en línea, codos a 45°, pecho al suelo.
peH02|peH|C|2|8|12|c|Flexión con pies elevados|Pies en el sofá, más carga en la parte alta del pecho.
peH03|peH|C|2|6|12||Flexión Tyson (puños)|Sobre los puños, muñeca recta. Calienta muñecas antes.
peH04|peH|C|2|8|12||Flexión diamante|Manos juntas bajo el pecho, codos pegados.
peH05|peH|C|3|5|8|u|Flexión archer|Bajas hacia un lado con el otro brazo estirado.
peH06|peH|C|2|6|10|t|Flexión con pausa 2 s abajo|Pecho a 2 cm del suelo, pausa sin relajarte.
peH07|peH|B|2|8|12|c|Flexión con banda a la espalda|Banda por la espalda sujeta en las manos, más dura arriba.
peH08|peH|M|2|8|12||Flexión profunda sobre mancuernas|Manos en las mancuernas, baja por debajo de las manos.
peH09|peH|M|1|10|15|c|Press de suelo 2 mancuernas|Tumbado, codos a 45°, el tríceps toca el suelo sin golpe.
peH10|peH|M|2|10|12|u|Press de suelo a 1 brazo|Resiste la rotación del tronco.
peH11|peH|M|1|12|15||Aperturas en suelo|Codos semiflexionados, estira el pecho hasta tocar el suelo.
peH12|peH|B|1|12|20||Press de pecho con banda de pie|Banda anclada detrás a la altura del pecho, paso al frente.
peH13|peH|C|2|8|12||Flexión → plancha comando|Flexión, bajas a antebrazos y vuelves a manos. Alterna el brazo.
peH14|peH|C|2|8|12||Flexión → sentadilla profunda|Flexión, pies a las manos, te levantas desde la sentadilla.
peH15|peH|C|2|8|12|u|Flexión trepa|Flexión y rodilla al codo al subir, alterna.
peH16|peH|C|2|6|10||Flexión hindú (dive bomber)|De pica baja rozando el suelo y sube en cobra, y vuelve.
peH17|peH|C|2|8|10|u|Flexión con rotación en T|Al subir rota y lleva un brazo al techo.
peH18|peH|C|3|5|8||Flexión pseudo-planche|Manos a la altura de la cadera, hombros adelantados.
peH19|peH|M|1|12|15||Squeeze press en suelo|Mancuernas juntas apretándolas todo el recorrido.
peV01|peV|M|1|8|12|c|Press militar 2 mancuernas de pie|Glúteo y abdomen apretados, sin arquear la lumbar.
peV02|peV|M|1|10|15||Press militar de espaldas a la pared|Espalda y cabeza pegadas a la pared.
peV03|peV|M|2|8|12||Press Arnold|Empieza con palmas hacia ti y rota al subir.
peV04|peV|M|2|8|12|u|Press a 1 brazo de rodillas|Media rodilla en el suelo, glúteo de la rodilla apoyada apretado.
peV05|peV|C|2|6|12|c|Flexión pica|Cadera alta, cabeza baja entre las manos formando triángulo.
peV06|peV|C|3|5|10|c|Flexión pica con pies elevados|Pies en el sofá, tronco más vertical.
peV07|peV|C|3|20|40|i|Pino asistido en pared|Abdomen hacia la pared, brazos bloqueados, empuja el suelo.
peV08|peV|M|1|12|20||Elevación lateral|Codos ligeramente flexionados, sube hasta la altura del hombro.
peV09|peV|M|1|12|15||Elevación lateral de rodillas|De rodillas para no hacer trampa con las piernas.
peV10|peV|B|1|15|20||Elevación lateral con banda|Banda bajo el pie, tensión constante.
peV11|peV|M|1|10|15||Elevación frontal|Una o dos mancuernas, sin balanceo.
peV12|peV|M|3|8|10||Press Z sentado en el suelo|Piernas estiradas, sin respaldo: exige tronco.
peV13|peV|C|2|8|12||Flexión pica + toque de rodilla cruzado|Pike push-up y rodilla a la mano contraria.
peV14|peV|M|2|8|12||Thruster con mancuernas|Sentadilla frontal y al subir press arriba en un solo gesto.
tiV01|tiV|D|2|4|8|c|Dominada prona|Agarre algo más ancho que los hombros, pecho a la barra.
tiV02|tiV|D|2|4|8|c|Dominada supina (chin-up)|Palmas hacia ti, codos al bolsillo.
tiV03|tiV|D|2|4|8|c|Dominada neutra|Palmas enfrentadas si la barra lo permite, o agarre mixto.
tiV04|tiV|DB|1|6|10|c|Dominada asistida con banda|Banda azul o roja en la barra bajo la rodilla o el pie.
tiV05|tiV|D|1|3|6|t|Negativa de dominada 5 s|Sube con salto o silla y baja en 5 s.
tiV06|tiV|D|3|3|6||Dominada con pausa arriba 2 s|Barbilla sobre la barra, pausa real.
tiV07|tiV|DM|3|3|6|c|Dominada lastrada|Mancuerna sujeta entre los pies.
tiV08|tiV|D|3|3|5|u|Dominada archer|Sube hacia un lado con el otro brazo casi estirado.
tiV09|tiV|D|1|30|60|i|Colgado activo|Hombros abajo y atrás, no colgado pasivo.
tiV10|tiV|D|1|8|12||Dominada escapular|Brazos estirados, solo hunde y eleva las escápulas.
tiV11|tiV|DB|1|12|20||Jalón con banda|Banda anclada arriba en la barra, tira al pecho de rodillas.
tiV12|tiV|DB|1|12|15|u|Jalón a 1 brazo con banda|De rodillas, codo al bolsillo.
tiV13|tiV|D|2|10|30|i|Isométrico arriba en barra|Barbilla sobre la barra, aguanta.
tiV14|tiV|M|1|12|15||Pullover con mancuerna en suelo|Brazos casi estirados, la mancuerna baja detrás de la cabeza.
tiH01|tiH|M|1|10|12|cu|Remo a 1 brazo con mancuerna|Mano y rodilla en el sofá, codo hacia la cadera.
tiH02|tiH|M|1|10|15|c|Remo inclinado 2 mancuernas|Tronco a 45°, codos pegados, aprieta las escápulas arriba.
tiH03|tiH|C|2|8|12|c|Remo invertido bajo mesa|Solo con mesa muy robusta. Cuerpo en línea, pecho a la mesa.
tiH04|tiH|B|1|12|20||Remo con banda sentado|Banda en los pies, codos atrás, pecho alto.
tiH05|tiH|B|1|15|20||Face pull con banda|Banda a la altura de la cara, codos altos, rota hacia fuera.
tiH06|tiH|B|1|15|25||Band pull-apart|Brazos estirados, abre la banda hasta el pecho.
tiH07|tiH|M|2|6|10|u|Remo renegado|En plancha sobre las mancuernas, rema sin rotar la cadera.
tiH08|tiH|M|2|15|25|u|Remo Kroc|Remo a 1 brazo, muchas reps, algo de impulso permitido.
tiH09|tiH|M|2|10|12|u|Remo con pausa 2 s arriba|Pausa con el codo atrás.
tiH10|tiH|M|1|12|20||Pájaro inclinado (deltoide posterior)|Tronco inclinado, abre los brazos con codos suaves.
tiH11|tiH|C|1|8|10||Y-T-W boca abajo|Tumbado boca abajo, dibuja Y, T y W con los brazos = 1 rep.
tiH12|tiH|M|2|8|12|u|Remo gorila|Bisagra con las mancuernas en el suelo, rema alterno.
tiH13|tiH|M|1|12|20||Encogimientos con mancuernas|Hombros a las orejas, pausa 1 s arriba.
tiH14|tiH|M|2|10|12||Remo + encogimiento|Rema y al bajar encoge hombros 1 s.
tiH15|tiH|B|1|12|15|u|Remo a 1 brazo con banda y rotación|Rema y rota el tronco siguiendo el codo.
tiH16|tiH|C|1|10|15||Superman con tirón (W)|Boca abajo, sube el pecho y tira de los codos atrás.
core01|core|C|1|30|60|i|Plancha frontal|Glúteo apretado, costillas abajo.
core02|core|C|1|30|45|iu|Plancha lateral|Cuerpo en línea, cadera alta.
core03|core|C|2|10|12|u|Plancha lateral con elevación de cadera|Baja la cadera y sube controlado.
core04|core|C|1|8|12|u|Dead bug|Lumbar pegada al suelo todo el rato.
core05|core|M|2|8|10|u|Dead bug con mancuerna|Mancuerna sujeta arriba con las dos manos.
core06|core|C|1|8|10|u|Bird dog|Brazo y pierna contrarios estirados, pausa 2 s.
core07|core|B|1|10|12|u|Pallof press con banda|De lado al anclaje, empuja al frente sin rotar.
core08|core|B|1|20|30|iu|Pallof isométrico|Brazos estirados, aguanta sin girar.
core09|core|B|1|10|12|u|Woodchop con banda|De alto a bajo en diagonal, gira desde la cadera.
core10|core|M|2|10|12|u|Woodchop con mancuerna|Diagonal de la rodilla al hombro contrario.
core11|core|M|1|20|30||Giro ruso con mancuerna|Pies apoyados o en el aire, gira desde el tronco. Reps totales.
core12|core|M|1|10|15||Sit-up con mancuerna + giro|Mancuerna al pecho, giras al subir.
core13|core|C|2|10|15||V-up|Brazos y piernas se juntan arriba.
core14|core|C|2|20|40|i|Hollow hold|Lumbar pegada, brazos y piernas bajos.
core15|core|C|2|15|20||Hollow rocks|Balancéate en posición hollow.
core16|core|D|2|8|12||Elevación de rodillas colgado|Sin balanceo, rodillas al pecho.
core17|core|D|3|5|10||Toes to bar|Pies a la barra con control.
core18|core|C|1|16|24||Bicicleta → elevación de piernas|4 bicis + 1 elevación. Reps totales.
core19|core|C|2|8|12||Body saw|En antebrazos con los pies en una toalla, desliza atrás y adelante.
core20|core|C|2|8|12||Body saw → elevación de cadera|Desliza atrás y sube la cadera en pica.
core21|core|C|3|6|10||Rollout con toalla|De rodillas, manos en una toalla, estira el cuerpo sin hundir la lumbar.
core22|core|M|1|30|45|iu|Suitcase hold|Una mancuerna en una mano, de pie, sin inclinarte.
core23|core|M|1|40|60|i|Paseo del granjero|Dos mancuernas, camina erguido por la casa.
core24|core|C|3|15|30|iu|Plancha Copenhagen|Pierna de arriba en el sofá, cadera alta. Aductor.
core25|core|C|1|20|30||Mountain climber|Rodilla al pecho alterna, cadera baja.
core26|core|M|2|20|30||Mountain climber sobre mancuernas|Manos en las mancuernas.
core27|core|C|1|16|24||Plancha con toque de hombro|Pies abiertos, sin balancear la cadera.
core28|core|M|2|8|12|u|Plancha con arrastre de mancuerna|En plancha, pasa la mancuerna de un lado al otro por debajo.
core29|core|D|3|6|10||Limpiaparabrisas colgado|Piernas arriba y de lado a lado.
core30|core|M|2|8|10|u|Rodilla arriba + rotación a 1 pierna|Mancuerna al frente, gira sobre la pierna de apoyo. Surf.
core31|core|C|1|20|40|i|Loaded Beast (aguante)|Cuadrupedia con rodillas a 2 cm del suelo.
core32|core|C|3|10|20|i|L-sit entre sillas|Brazos bloqueados, piernas al frente.
bra01|bra|M|1|10|15||Curl con mancuernas|Codos quietos pegados al cuerpo.
bra02|bra|M|1|10|15||Curl martillo|Agarre neutro, braquial y antebrazo.
bra03|bra|M|1|10|12|u|Curl concentrado|Codo apoyado en el muslo.
bra04|bra|B|1|15|20||Curl con banda|Banda bajo los pies, tensión constante.
bra05|bra|M|2|21|21||Curl 21|7 abajo, 7 arriba, 7 completas.
bra06|bra|M|1|10|15||Extensión de tríceps sobre la cabeza|Una mancuerna a dos manos, codos al techo.
bra07|bra|M|1|10|15||Press francés en suelo|Tumbado, codos fijos, mancuernas a las sienes.
bra08|bra|M|1|12|15|u|Patada de tríceps|Tronco inclinado, codo fijo, extiende atrás.
bra09|bra|B|1|15|20||Extensión de tríceps con banda|Banda anclada arriba, extiende hacia abajo.
bra10|bra|C|1|10|15||Fondos en silla|Manos en la silla detrás, codos atrás, no abiertos.
bra11|bra|M|2|10|12||Curl Zottman|Sube en supino, rota y baja en prono lento.
bra12|bra|D|3|20|40|i|Colgado con toalla (agarre)|Toalla sobre la barra, cuelga de la toalla. Agarre de kite.
bra13|bra|M|1|15|20||Curl de muñeca|Antebrazo apoyado en el muslo.
gem01|gem|C|1|12|20|u|Elevación de talón a 1 pierna en escalón|Recorrido completo, pausa 1 s arriba.
gem02|gem|M|1|15|20||Elevación de talones con mancuernas|De pie, rodillas estiradas.
gem03|gem|M|1|15|25||Sóleo sentado|Sentado, mancuerna sobre la rodilla, sube los talones.
gem04|gem|C|1|15|25||Tibial anterior en pared|Espalda en la pared, levanta las puntas de los pies.
gem05|gem|C|1|30|45|iu|Equilibrio a 1 pie con ojos cerrados|Tobillo y pie, propiocepción para el surf.
gem06|gem|C|2|20|40|j|Pogo jumps|Saltitos con los tobillos rígidos, contacto corto.
ani01|ani|C|1|20|40|i|Bear crawl|Rodillas a 2 cm del suelo, mano y pie contrarios.
ani02|ani|C|1|20|40|i|Bear crawl lateral|Desplazamiento lateral, cadera baja.
ani03|ani|C|1|20|40|i|Crab walk|Cadera alta, desplázate hacia delante y atrás.
ani04|ani|C|2|8|12|u|Ape reach|Sentadilla profunda, una mano alcanza el suelo lejos.
ani05|ani|C|1|6|10|u|Crab reach|Desde crab, sube la cadera y alcanza por encima.
ani06|ani|C|2|6|10|u|Beast underswitch|Desde beast, pasa la pierna por debajo y rota a crab.
ani07|ani|C|2|6|10|u|Side kickthrough|Desde beast, patada lateral pasando por debajo.
ani08|ani|C|2|3|5||Secuencia primal (beast → ape → crab)|Encadena sin pausa. Cuenta secuencias.
ani09|ani|C|2|10|15||Flexión profunda en oso|Posición beast, cabeza por delante de las manos.
ani10|ani|C|3|4|6|u|Flexión venom con desplazamiento|Desplazamiento bajo y lateral, flexión, vuelta.
ani11|ani|C|3|20|30|i|Lizard crawl|Desplazamiento bajo tipo lagarto, codos pegados.
ani12|ani|C|1|6|10||Inchworm + flexión|Camina con las manos a plancha, flexión y vuelve.
ani13|ani|C|1|8|12||Loaded Beast → unload|De beast llevas la cadera a los talones y vuelves.
ani14|ani|C|2|6|8|u|Scorpion reach|En plancha, lleva el pie al lado contrario por detrás.
met01|met|C|2|8|12|j|Burpee|Pecho al suelo y salto al subir.
met02|met|C|3|8|12|j|Burpee con salto de rodillas|Burpee con tuck jump.
met03|met|C|2|10|15|j|Sentadilla con salto|Aterriza suave y encadena.
met04|met|C|2|15|20|j|Pop squats|De pies juntos a sentadilla abierta saltando.
met05|met|C|3|8|12|j|De rodillas a salto|Desde rodillas, pies al suelo y salto vertical.
met06|met|C|3|10|16|ju|Zancada con salto + rodilla arriba|Cambio de pierna en el aire.
met07|met|C|2|12|20|ju|Skater jumps|Salto lateral a una pierna, aterrizaje estable. Esquí y pádel.
met08|met|C|1|30|40|ij|Jumping jacks|Ritmo constante.
met09|met|C|1|20|40|ij|Rodillas altas|Rodillas a la cadera, brazos activos.
met10|met|M|3|5|8||Man maker|Remo renegado, flexión, clean y thruster = 1 rep.
met11|met|M|3|6|10||Devil press|Burpee sobre las mancuernas y swing doble por encima.
met12|met|M|2|8|10||Clean + press con mancuernas|De la cadera a los hombros y press arriba.
met13|met|M|2|8|10|u|Snatch alterno con mancuerna|Del suelo arriba en un gesto, alterna mano.
met14|met|C|1|10|12|u|Zancada atrás + giro + rodilla arriba|Zancada, giro hacia la pierna delantera, sube con rodilla.
met15|met|C|2|8|10|u|Curtsy → zancada lateral|Paso cruzado atrás y luego lateral.
met16|met|C|1|12|16||Sentadilla + toque de talón cruzado|Al subir, talón atrás a la mano contraria.
met17|met|C|1|12|16||Sentadilla + toque de pie cruzado|Al subir, patada al frente y toque con la mano contraria.
met18|met|C|2|10|15||Sprawl|Burpee sin flexión ni salto: caderas al suelo y arriba.
met19|met|C|3|6|10|j|Tuck jump|Rodillas al pecho en el aire.
met20|met|C|2|6|8|j|Salto horizontal|Salto largo a dos pies, aterriza y vuelve caminando.
met21|met|C|2|6|8|ju|Salto lateral a 1 pierna|Aterriza y aguanta 1 s. Surf, esquí y pádel.
met22|met|C|1|8|12||Pop-up de surf|Tumbado boca abajo → de pie en posición de surf en un gesto.
mov01|mov|C|1|8|10||Gato-camello|Columna segmento a segmento.
mov02|mov|C|1|4|6|u|World's greatest stretch|Zancada, codo al suelo, rotación al techo.
mov03|mov|C|1|8|8|u|Rotación torácica en cuadrupedia|Mano en la nuca, abre el codo al techo.
mov04|mov|C|1|6|8|u|90/90 de cadera|Cambia de lado sin manos.
mov05|mov|C|1|30|60|i|Sentadilla profunda con apertura|Codos empujan las rodillas.
mov06|mov|B|1|10|15||Dislocaciones con banda|Brazos estirados por delante y por detrás.
mov07|mov|C|1|10|10|u|Movilidad de tobillo en pared|Rodilla a la pared sin levantar el talón.
mov08|mov|C|1|30|60|i|Movilidad de muñecas|Círculos y apoyos en las palmas y el dorso.
mov09|mov|C|1|5|5|u|Cossack sin peso|Lento, busca profundidad.
car01|car|K|1|0|0||Bici intervalos 30" / 30" × 8|30 s fuerte y 30 s suave.
car02|car|E|1|0|0||Elíptica 1' / 1' × 6|1 min fuerte y 1 min suave.
car03|car|K|2|0|0||Bici sprint 10" / 50" × 6|10 s a tope y 50 s muy suave.
car04|car|K|1|0|0||Bici zona 2 · 10'|Vuelta a la calma: puedes hablar.
car05|car|E|1|0|0||Elíptica zona 2 · 10'|Vuelta a la calma: puedes hablar.
`;
const CARDIO_IV = {car01:[30,30,8], car02:[60,60,6], car03:[10,50,6], car04:[600,0,1], car05:[600,0,1]};
const ZONES = {rod:"Pierna · cuádriceps", cad:"Glúteo e isquios", peH:"Pecho · empuje horizontal", peV:"Hombro · empuje vertical",
  tiV:"Espalda · tirón vertical", tiH:"Espalda · tirón horizontal", core:"Core", bra:"Brazos y agarre", gem:"Gemelo, tobillo y pie",
  ani:"Animal flow", met:"Metabólico, combos y saltos", mov:"Movilidad", car:"Cardio (finisher)"};
const EQ = {M:"Mancuernas", B:"Bandas", D:"Barra", C:"Peso corporal", K:"Bici", E:"Elíptica"};
const LIB = LIB_RAW.trim().split("\n").map(l=>{
  const [id,z,eq,lvl,lo,hi,f,n,cue] = l.split("|");
  const o = {id, z, eq, lvl:+lvl, lo:+lo, hi:+hi, n, cue, c:f.includes("c"), u:f.includes("u"), iso:f.includes("i"), j:f.includes("j"), tp:f.includes("t")?6:3};
  if(CARDIO_IV[id]) o.iv = CARDIO_IV[id];
  return o;
});
const LIB_BY = Object.fromEntries(LIB.map(e=>[e.id,e]));
