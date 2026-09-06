let logo;
let fondo;
let quieto = [];
let camina = [];
let corre = [];
let salta = [];
let interaccion = [];
let superMario = [];
let caja1 = [];
let caja2 = [];

let estadoActual = "intro";
let tiempoInicioEstado = 0;
let velocidadAnimacion = 150;

let marioX = 50;
let marioY = 467;

let fondoX = 0;
let anchoFondo = 3100;
let detenerFondo = false;

let estrellaPosX = 1000;
let estrellaY = 488;

let tiempoInicioCajas = 0;
let cajasArrancaron = false;

let duracionIntro = 3000;
let duracionQuieto = 3900;
let duracionCamina = 1900;
let duracionCorre = 1650;
let duracionSalta = 1300;

function preload() {
  logo = loadImage("assets/logo.png");
  
  fondo = loadImage("assets/fondo1.png");

  for (let i = 1; i <= 14; i++) {
    quieto.push(loadImage("assets/quieto" + i + ".png"));
  }
  for (let i = 1; i <= 10; i++) {
    camina.push(loadImage("assets/camina" + i + ".png"));
  }
  for (let i = 1; i <= 22; i++) {
    corre.push(loadImage("assets/corre" + i + ".png"));
  }
  for (let i = 1; i <= 14; i++) {
    salta.push(loadImage("assets/salta" + i + ".png"));
  }
  for (let i = 1; i <= 3; i++) {
    interaccion.push(loadImage("assets/estrella" + i + ".png"));
  }
  for (let i = 1; i <= 5; i++) {
    superMario.push(loadImage("assets/superMario" + i + ".png"));
  }
  for (let i = 1; i <= 15; i++) {
    caja1.push(loadImage("assets/cubo" + i + ".png"));
  }
  for (let i = 1; i <= 15; i++) {
    caja2.push(loadImage("assets/cuadrado" + i + ".png"));
  }
}

function setup() {
  createCanvas(800, 600);
  tiempoInicioEstado = millis();
}

function draw() {
  
  if (estadoActual == "intro") {
    dibujarIntro(millis() - tiempoInicioEstado);
    return;
  }

  moverFondo(estadoActual);
  image(fondo, fondoX, 0, anchoFondo, 600);
  dibujarCajas1();
  dibujarCajas2();

  let tiempoTranscurrido = millis() - tiempoInicioEstado;

  moverPersonaje(estadoActual, tiempoTranscurrido);
  dibujarEstrella(estadoActual, tiempoTranscurrido, velocidadAnimacion);

  let frames = obtenerFramesDelEstado(estadoActual);
  let detener = (estadoActual == "superMario");
  dibujarAnimacion(frames, marioX, marioY, velocidadAnimacion, detener);

  actualizarEstado(tiempoTranscurrido);
  
  if (detenerFondo) {
  mostrarTextoReinicio();
}
}

function dibujarIntro(tiempoTranscurrido) {
  background(250);
  image(logo, 250, 250);

  let progreso = tiempoTranscurrido / duracionIntro;
  let opacidad = lerp(0, 255, progreso);

  if (opacidad > 255) {
    opacidad = 255;
  }

  fill(0, 0, 0, opacidad);
  noStroke();
  rect(0, 0, width, height);

  if (tiempoTranscurrido > duracionIntro) {
    cambiarEstado("quieto");
  }
}

function dibujarAnimacion(frames, x, y, velocidad, detener) {
  let tiempoTranscurrido = millis() - tiempoInicioEstado;
  let indice = floor(tiempoTranscurrido / velocidad);

  if (detener) {
    if (indice > frames.length - 1) {
      indice = frames.length - 1;
      if (!detenerFondo) {
        tiempoInicioCajas = millis();
        cajasArrancaron = true;
      }
      detenerFondo = true;
    }
  } else {
    indice = indice % frames.length;
  }

  image(frames[indice], x, y);
}

function dibujarEstrella(estado, tiempoTranscurrido, velocidad) {
  let posicion = fondoX + estrellaPosX;

  if (estado == "superMario") {
    let indice = floor(tiempoTranscurrido / velocidad);
    if (indice < interaccion.length) {
      image(interaccion[indice], posicion, estrellaY);
    }
  } else {
    image(interaccion[0], posicion, estrellaY);
  }
}

function dibujarCajas1() {
  if (!cajasArrancaron) {
    image(caja1[0], fondoX + 680, 320);
    return;
  }

  let tiempoAnimando = millis() - tiempoInicioCajas;
  let vuelta = floor(tiempoAnimando / (velocidadAnimacion * caja1.length));

  let indice;
  if (vuelta >= 2) {
    indice = 0;
  } else {
    indice = floor(tiempoAnimando / velocidadAnimacion) % caja1.length;
  }

  image(caja1[indice], fondoX + 680, 320);
}

function dibujarCajas2() {
  if (!cajasArrancaron) {
    image(caja2[0], fondoX + 680, 180);
    return;
  }

  let tiempoAnimando = millis() - tiempoInicioCajas;
  let vuelta = floor(tiempoAnimando / (velocidadAnimacion * caja2.length));

  let indice;
  if (vuelta >= 2) {
    indice = 0;
  } else {
    indice = floor(tiempoAnimando / velocidadAnimacion) % caja2.length;
  }

  image(caja2[indice], fondoX + 680, 180);
}

function obtenerFramesDelEstado(estado) {
  if (estado == "quieto") {
    return quieto;
  } else if (estado == "camina") {
    return camina;
  } else if (estado == "corre") {
    return corre;
  } else if (estado == "salta") {
    return salta;
  } else if (estado == "superMario") {
    return superMario;
  } else {
    return quieto;
  }
}

function moverPersonaje(estado, tiempoTranscurrido) {
  if (estado == "quieto") {
    marioX = 50;
    marioY = 467;
  } else if (estado == "camina") {
    marioX = map(tiempoTranscurrido, 0, duracionCamina, 50, 250);
    marioY = 469;
  } else if (estado == "corre") {
    marioX = map(tiempoTranscurrido, 0, duracionCorre, 250, 500);
    marioY = 474;
  } else if (estado == "salta") {
    marioX = map(tiempoTranscurrido, 0, duracionSalta, 500, 600);
    let progreso = tiempoTranscurrido / duracionSalta;
    marioY = calcularSuavizado(465, 80, progreso);
  } else if (estado == "superMario") {
    marioX = 600;
    marioY = 365;
  }
}

function calcularSuavizado(alturaPiso, alturaMaxima, progreso) {
  let puntoMasAlto = alturaPiso - alturaMaxima;

  if (progreso < 0.5) {
    return lerp(alturaPiso, puntoMasAlto, progreso / 0.5);
  } else {
    return lerp(puntoMasAlto, alturaPiso, (progreso - 0.5) / 0.5);
  }
}

function actualizarEstado(tiempoTranscurrido) {
  if (estadoActual == "quieto" && tiempoTranscurrido > duracionQuieto) {
    cambiarEstado("camina");
  } else if (estadoActual == "camina" && tiempoTranscurrido > duracionCamina) {
    cambiarEstado("corre");
  } else if (estadoActual == "corre" && tiempoTranscurrido > duracionCorre) {
    cambiarEstado("salta");
  } else if (estadoActual == "salta" && tiempoTranscurrido > duracionSalta) {
    cambiarEstado("superMario");
  }
}

function moverFondo(estado) {
  let velocidad = velocidadesEstado(estado);
  fondoX = fondoX - velocidad;
  let limite = -(anchoFondo - 800);
  if (fondoX < limite) {
    fondoX = limite;
  }
}

function velocidadesEstado(estado) {
  let velocidad = 0;

  if (estado == "camina") {
    velocidad = 0.8;
  } else if (estado == "corre") {
    velocidad = 1.6;
  } else if (estado == "salta") {
    velocidad = 1;
  } else if (estado == "superMario" && !detenerFondo) {
    velocidad = 0.1;
  }

  return velocidad;
}

function cambiarEstado(nuevoEstado) {
  estadoActual = nuevoEstado;
  tiempoInicioEstado = millis();
}

function mostrarTextoReinicio() {
  fill(255);
  noStroke();
  textAlign(RIGHT);
  textSize(16);
  text("Presioná r o R para reiniciar", width - 20, 30);
}

function keyPressed() {
  if (key == "r" || key == "R") {
    estadoActual = "intro";
    tiempoInicioEstado = millis();
    marioX = 50;
    marioY = 465;
    fondoX = 0;
    detenerFondo = false;
    cajasArrancaron = false;
  }
}
