let creditos = [
  "EL TESORO SECRETO DEL TIBET",
  "Autor de la obra: Richard Brightfield",
  "Alumnos: Santiago Casado - Nicanor Garcia",
  "Catedra: Programacion para medios interactivos orientada a la tecnologia web",
  "Comision: 5",
  "Docente: Leo Garay",
  "Ano: 2026"
];

let textoCreditos;
let velocidadTexto = 0.7;
let creditosTerminados = false;

let contadorFramesCamina = 0;
let contadorFramesCayendo = 0;
let contadorFramesLevantando = 0;

let personajeCaminaPosX;
let personajeCaminaPosY;

let personajeCaePosX;
let personajeCaePosY;
let velocidadCaida = 0.7;

let estadoPersonaje = "cayendo";

let velocidadPersonaje = 1.5;
let velocidadAnimacionCamina = 12;
let velocidadAnimacionCayendo = 70;
let velocidadAnimacionLevantando = 15;

let anchoPersonaje = 60;
let altoPersonaje = 80;

function reiniciarCreditos() {
  textoCreditos = altura + 10;
  creditosTerminados = false;
  personajeCaminaPosX = -anchoPersonaje;
  personajeCaminaPosY = altura - altoPersonaje;
  personajeCaePosX = 10;
  personajeCaePosY = -altoPersonaje;
  estadoPersonaje = "cayendo";
  contadorFramesCayendo = 0;
  contadorFramesLevantando = 0;
  contadorFramesCamina = 0;
}

function mostrarCreditos() {
  background(160, 40, 40);

  dibujarCreditos();

  if (creditosTerminados == false) {
    textoCreditos = textoCreditos - velocidadTexto;

    let ultimaLinea = textoCreditos + (creditos.length - 1) * 60;

    if (ultimaLinea <= 60) {
      creditosTerminados = true;
    }

    animarCaida();
  }

  if (creditosTerminados == true) {
    if (estadoPersonaje == "cayendo") {
      animarCaida();
    } else if (estadoPersonaje == "levantando") {
      animarLevantando();
    } else if (estadoPersonaje == "caminando") {
      animarPersonaje();
    }
  }

  dibujarBoton("Volver", 300, 380, 200, 40);
}

function animarCaida() {
  if (personajeCaePosY < altura - altoPersonaje) {
    personajeCaePosY = personajeCaePosY + velocidadCaida;
  } else {
    personajeCaePosY = altura - altoPersonaje;
    if (estadoPersonaje == "cayendo") {
      estadoPersonaje = "levantando";
      contadorFramesLevantando = 0;
    }
  }

  let indice;

  if (contadorFramesCayendo < velocidadAnimacionCayendo) {
    indice = 0;
  } else if (contadorFramesCayendo < velocidadAnimacionCayendo * 2) {
    indice = 1;
  } else {
    indice = 2;
  }

  contadorFramesCayendo++;

  image(
    personajeCayendo[indice],
    personajeCaePosX,
    personajeCaePosY,
    anchoPersonaje,
    altoPersonaje
  );
}

function animarLevantando() {
  let indice = floor(contadorFramesLevantando / velocidadAnimacionLevantando);

  if (indice >= personajeLevantando.length) {
    estadoPersonaje = "caminando";
    personajeCaminaPosX = personajeCaePosX;
    return;
  }

  contadorFramesLevantando++;

  image(
    personajeLevantando[indice],
    personajeCaePosX,
    personajeCaePosY,
    anchoPersonaje,
    altoPersonaje
  );
}

function animarPersonaje() {
  if (personajeCaminaPosX <= ancho) {
    let indice = floor(contadorFramesCamina / velocidadAnimacionCamina) % personajeCamina.length;

    personajeCaminaPosX = personajeCaminaPosX + velocidadPersonaje;
    contadorFramesCamina++;

    image(
      personajeCamina[indice],
      personajeCaminaPosX,
      personajeCaminaPosY,
      anchoPersonaje,
      altoPersonaje
    );
  }
}

function dibujarCreditos() {
  noStroke();

  for (let i = 0; i < creditos.length; i++) {
    let y = textoCreditos + i * 60;

    if (y > 60 && y < altura - 70) {
      fill(255);
      textSize(18);
      textStyle(NORMAL);
      textAlign(CENTER, CENTER);
      text(creditos[i], ancho / 2, y);
    }
  }

  fill(160, 40, 40);
  rect(0, 0, ancho, 60);
  rect(0, altura - 70, ancho, 70);
}
