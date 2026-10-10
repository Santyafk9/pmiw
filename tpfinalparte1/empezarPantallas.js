function dibujarPantalla1() {
  image(fondos[0], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Acabas de terminar un curso a distancia para ser investigador privado.\nEstas en tu departamento pensando en tu primer caso\ncuando golpean la puerta.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla2() {
  image(fondos[1], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Es un anciano llamado Buckingham. Aposto toda su fortuna contra\nun millonario llamado Crossley para demostrar que la levitacion\nexiste en un valle secreto del Tibet llamado Siling-La.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla3() {
  image(fondos[2], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Buckingham te deja dos pistas antes de irse. Un recorte con la foto\nde Sylvia Morrison, antropologa que estudio la levitacion en el Himalaya.\nY el nombre de Snide, conservador del Museo de Historia Natural.", 20, altura - 110);

  dibujarBoton("Ir al museo a ver a Snide", ancho - 230, altura - 75, 210, 30);
  dibujarBoton("Llamar a Sylvia Morrison", ancho - 230, altura - 40, 210, 30);
}

function dibujarPantalla4a() {
  image(fondos[3], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Llegas al museo antes de que cierre. La sala tibetana esta llena\nde estatuas de budas y pergaminos con demonios.\nSnide, un hombre menudo con gafas, esta en su escritorio.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla4b() {
  image(fondos[4], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Tomas un taxi hacia la casa de Sylvia Morrison.\nA mitad de camino notas que otro auto te sigue.\nFinalmente llegas al edificio donde vive Sylvia.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla5a() {
  image(fondos[5], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Sylvia abre apenas la puerta. Esta nerviosa y haciendo las maletas.\nTe cuenta que Crossley la contrato para buscar Siling-La\npero descubrio que es un contrabandista de arte robado.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla5b() {
  image(fondos[6], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Le preguntas a Snide por Siling-La. Su rostro cambia por completo.\nEmpieza a temblar y dice que no puede ayudarte.\nDesplaza la mano hacia un boton en el escritorio.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla6() {
  image(fondos[7], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Con las pistas que conseguiste decides viajar al Tibet.\nCompras un pasaje a Pekin y de ahi tomas un vuelo\nmas pequeno hacia Lhasa, la capital del Tibet.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla7() {
  image(fondos[8], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Llegas a Lhasa. En el avion conociste a un monje llamado Lobsang.\nTe habla del tesoro de Gengis Kan que podria estar en Siling-La.\nTienes que decidir si seguir adelante o volver a casa.", 20, altura - 110);

  dibujarBoton("Abandonar la investigacion", ancho - 230, altura - 75, 210, 30);
  dibujarBoton("Seguir las pistas de Lobsang", ancho - 230, altura - 40, 210, 30);
}

function dibujarPantalla8a() {
  image(fondos[9], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Decides que la investigacion es demasiado peligrosa.\nVuelves a casa sin encontrar Siling-La.\nBuckingham perdio su apuesta pero al menos estas a salvo.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla8b() {
  image(fondos[10], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Decides seguir adelante. Lobsang te da una carta\npara el monasterio de Chetrapa, que segun dicen\nes el primer paso en el camino hacia Siling-La.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarEndingNeutro() {
  image(fondos[11], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("FINAL NEUTRO\nVuelves a casa sin el tesoro pero con vida.\nBuckingham perdio su apuesta. El secreto de Siling-La sigue protegido.", 20, altura - 110);

  dibujarBoton("Volver al inicio", ancho - 230, altura - 45, 210, 35);
}

function dibujarPantalla9() {
  image(fondos[12], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Llegas a Chetrapa, una pequena aldea de casas bajas de piedra\nagrupadas en torno al monasterio. Los monjes te reciben\ny te guian por las profundidades del templo.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla10() {
  image(fondos[13], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("En una sala de meditacion un lama anciano cierra los ojos.\nSientes que eres transportado sobre un valle tropical\nentre montanas cubiertas de nieve. Es Siling-La.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla11() {
  image(fondos[14], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Un lago color zafiro, un monasterio con techo de oro\ny monjes que levitan sobre el agua. El secreto de\nla levitacion existe de verdad.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla12() {
  image(fondos[15], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("El abad te lleva por una escalera de piedra hasta una caverna inmensa.\nMiles de objetos de oro relumbran: estatuas, tronos y gemas.\nEs el tesoro de Gengis Kan.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla13() {
  image(fondos[16], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("De repente aparece Crossley con sus hombres armados.\nQuiere apoderarse del tesoro de Siling-La.\nTienes que tomar una decision rapida.", 20, altura - 110);

  dibujarBoton("Darle el tesoro a Crossley", ancho - 230, altura - 75, 210, 30);
  dibujarBoton("Escapar con una reliquia", ancho - 230, altura - 40, 210, 30);
}

function dibujarPantalla14a() {
  image(fondos[17], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Decides entregarle el tesoro a Crossley para salvar tu vida.\nCrossley se apodera de Siling-La y su tesoro.\nEl secreto mas antiguo del Tibet cae en manos equivocadas.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarPantalla14b() {
  image(fondos[18], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("Decides escapar con una pequeña reliquia como prueba.\nLos monjes con sus visiones de demonios detienen a Crossley\nmientras tu huyes del valle hacia la civilizacion.", 20, altura - 110);

  dibujarBoton("Siguiente", ancho - 150, altura - 45, 130, 35);
}

function dibujarEndingBueno() {
  image(fondos[19], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("FINAL BUENO\nLogras escapar con la reliquia. Crossley es arrestado.\nLa fortuna de Buckingham esta a salvo. Eres un heroe.", 20, altura - 110);

  dibujarBoton("Volver al inicio", ancho - 230, altura - 45, 210, 35);
}

function dibujarEndingMalo() {
  image(fondos[20], 0, 0, ancho, altura);

  fill(0, 0, 0, 150);
  rect(0, altura - 120, ancho, 120);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  noStroke();
  text("FINAL MALO\nCrossley obtiene el tesoro de Siling-La.\nEl secreto del Tibet queda en manos equivocadas para siempre.", 20, altura - 110);

  dibujarBoton("Volver al inicio", ancho - 230, altura - 45, 210, 35);
}
