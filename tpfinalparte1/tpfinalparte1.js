let altura = 450;
let ancho = 800;
let pantallaActual = 0;

let nombresFondos = [
  "pantalla1ExplicacionDelRolDelPersonaje.png",
  "pantalla2EncuentroConBuckingham.png",
  "pantalla3ExplicacionDeDondeIr.png",
  "pantalla4YendoAlMuseo.png",
  "pantalla4YendoEnTaxiALoDeSilvia.png",
  "Pantalla5EncuentroConSilviaYPistasDeSiling-La.png",
  "Pantalla5InvestigacionDeDocumentosTibetanosPistasDeSiling-La.png",
  "Pantalla6ViajeATibet.png",
  "Pantalla7LlegadaALhasa.png",
  "Pantalla8AbandonarLaInvestigacion.png",
  "Pantalla8SeguirASiling-La.png",
  "ENDING-NEOTRO-ElJugadorSobrevive-PeroVuelveSinElTesoro.png",
  "Pantalla9SeguirPistasDeLobsang.png",
  "Pantalla10LlegadaAChetrapa.png",
  "Pantalla11MonjesRevelanElSecreto.png",
  "Pantalla12SeDescubreElTesoroDeGengisKan.png",
  "Pantalla13CrossleyAparecePorElTesoro.png",
  "Pantalla14DarleACrossleyElTesoro.png",
  "Pantalla14EscaparConElTesoro.png",
  "ENDING-BUENOElJugadorLograEscaparDelTibetConElTesoro.png",
  "ENDING-MALOCrossleyOBtieneElTesoro.png"
];

let fondos = [];
let personajeCamina = [];
let personajeCayendo = [];
let personajeLevantando = [];

function preload() {
  for (let i = 1; i <= 6; i++) {
    personajeCamina.push(loadImage("assets/camina" + i + ".png"));
  }
  for (let i = 1; i <= 3; i++) {
    personajeCayendo.push(loadImage("assets/cayendo" + i + ".png"));
  }
  for (let i = 1; i <= 7; i++) {
    personajeLevantando.push(loadImage("assets/levantando" + i + ".png"));
  }
  for (let i = 0; i < nombresFondos.length; i++) {
    fondos.push(loadImage("assets/" + nombresFondos[i]));
  }
}

function setup() {
  createCanvas(ancho, altura);
  reiniciarCreditos();
}

function draw() {
  background(220);
  textSize(32);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  stroke(0);
  strokeWeight(1);

  if (pantallaActual == 0) {
    mostrarInicio();
  } else if (pantallaActual == 1) {
    dibujarPantalla1();
  } else if (pantallaActual == 2) {
    dibujarPantalla2();
  } else if (pantallaActual == 3) {
    dibujarPantalla3();
  } else if (pantallaActual == 4) {
    dibujarPantalla4a();
  } else if (pantallaActual == 5) {
    dibujarPantalla4b();
  } else if (pantallaActual == 6) {
    dibujarPantalla5a();
  } else if (pantallaActual == 7) {
    dibujarPantalla5b();
  } else if (pantallaActual == 8) {
    dibujarPantalla6();
  } else if (pantallaActual == 9) {
    dibujarPantalla7();
  } else if (pantallaActual == 10) {
    dibujarPantalla8a();
  } else if (pantallaActual == 11) {
    dibujarPantalla8b();
  } else if (pantallaActual == 12) {
    dibujarEndingNeutro();
  } else if (pantallaActual == 13) {
    dibujarPantalla9();
  } else if (pantallaActual == 14) {
    dibujarPantalla10();
  } else if (pantallaActual == 15) {
    dibujarPantalla11();
  } else if (pantallaActual == 16) {
    dibujarPantalla12();
  } else if (pantallaActual == 17) {
    dibujarPantalla13();
  } else if (pantallaActual == 18) {
    dibujarPantalla14a();
  } else if (pantallaActual == 19) {
    dibujarPantalla14b();
  } else if (pantallaActual == 20) {
    dibujarEndingBueno();
  } else if (pantallaActual == 21) {
    dibujarEndingMalo();
  } else if (pantallaActual == 22) {
    mostrarCreditos();
  }
}

function mousePressed() {
  if (pantallaActual == 0) {
    if (dentro(290, 180, 220, 40)) {
      pantallaActual = 1;
    }
    if (dentro(290, 230, 220, 40)) {
      pantallaActual = 22;
      reiniciarCreditos();
    }
  } else if (pantallaActual == 1) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 2;
    }
  } else if (pantallaActual == 2) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 3;
    }
  } else if (pantallaActual == 3) {
    if (dentro(ancho - 230, altura - 75, 210, 30)) {
      pantallaActual = 4;
    }
    if (dentro(ancho - 230, altura - 40, 210, 30)) {
      pantallaActual = 5;
    }
  } else if (pantallaActual == 4) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 6;
    }
  } else if (pantallaActual == 5) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 7;
    }
  } else if (pantallaActual == 6 || pantallaActual == 7) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 8;
    }
  } else if (pantallaActual == 8) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 9;
    }
  } else if (pantallaActual == 9) {
    if (dentro(ancho - 230, altura - 75, 210, 30)) {
      pantallaActual = 10;
    }
    if (dentro(ancho - 230, altura - 40, 210, 30)) {
      pantallaActual = 11;
    }
  } else if (pantallaActual == 10) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 12;
    }
  } else if (pantallaActual == 11) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 13;
    }
  } else if (pantallaActual == 12 || pantallaActual == 20 || pantallaActual == 21) {
    if (dentro(ancho - 230, altura - 45, 210, 35)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual == 13) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 14;
    }
  } else if (pantallaActual == 14) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 15;
    }
  } else if (pantallaActual == 15) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 16;
    }
  } else if (pantallaActual == 16) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 17;
    }
  } else if (pantallaActual == 17) {
    if (dentro(ancho - 230, altura - 75, 210, 30)) {
      pantallaActual = 18;
    }
    if (dentro(ancho - 230, altura - 40, 210, 30)) {
      pantallaActual = 19;
    }
  } else if (pantallaActual == 18) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 21;
    }
  } else if (pantallaActual == 19) {
    if (dentro(ancho - 150, altura - 45, 130, 35)) {
      pantallaActual = 20;
    }
  } else if (pantallaActual == 22) {
    if (dentro(300, 380, 200, 40)) {
      pantallaActual = 0;
    }
  }
}

function dentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w &&
         mouseY > y && mouseY < y + h;
}

function dibujarBoton(t, x, y, w, h) {
  if (dentro(x, y, w, h)) {
    fill(10, 0, 0);
  } else {
    fill(120, 20, 20);
  }
  stroke(255);
  strokeWeight(1);
  rect(x, y, w, h, 8);

  fill(255);
  textSize(14);
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  noStroke();
  text(t, x + w / 2, y + h / 2);
}
