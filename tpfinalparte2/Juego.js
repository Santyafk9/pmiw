class Juego {
  constructor() {
    this.imgCorre = [];
    this.imgBala = null;
    this.imgRoca = null;
    this.imgGuardias = [];
    this.imgFondo = null;
    this.sonidoPasos = null;
    this.sonidoSalto = null;
    this.sonidoDano = null;
    this.sonidoPierde = null;
    this.sonidoGana = null;
    this.sonidoDisparo = null;
    this.musicaInstrucciones = null;
    this.musicaCreditos = null;
    this.suelo = 330;
    this.vel = 2.5;
    this.distMax = 7500;
    this.duracionInstr = 1200;
    this.estado = "instrucciones";
    this.framesInstr = 0;
    this.framesPerdiste = 0;
    this.fondoX = 0;
    this.vidas = 3;
    this.dist = 0;
    this.jugador = null;
    this.guardias = [];
    this.rocas = [];
    this.balas = [];
  }

  cargarRecursos() {
    for (let i = 1; i <= 8; i++) {
      this.imgCorre.push(loadImage("assets/corre" + i + ".png"));
    }
    this.imgBala = loadImage("assets/bala.png");
    this.imgRoca = loadImage("assets/roca2.png");
    this.imgGuardias.push(loadImage("assets/guardia1.png"));
    this.imgGuardias.push(loadImage("assets/guardia2.png"));
    this.imgFondo = loadImage("assets/fondo.png");

    this.sonidoPasos = loadSound("assets/pasos.mp3");
    this.sonidoSalto = loadSound("assets/salto.mp3");
    this.sonidoDano = loadSound("assets/dano.mp3");
    this.sonidoPierde = loadSound("assets/pierde.mp3");
    this.sonidoGana = loadSound("assets/gana.mp3");
    this.sonidoDisparo = loadSound("assets/disparo.mp3");
    this.musicaInstrucciones = loadSound("assets/musicainstruccionesjaja.mp3");
    this.musicaCreditos = loadSound("assets/creditos.mp3");
  }

  iniciar() {
    this.sonidoPasos.setVolume(0.4);
    this.sonidoSalto.setVolume(0.7);
    this.sonidoDano.setVolume(0.8);
    this.sonidoPierde.setVolume(0.9);
    this.sonidoGana.setVolume(0.9);
    this.sonidoDisparo.setVolume(0.5);
    this.musicaInstrucciones.setVolume(0.3);
    this.musicaCreditos.setVolume(0.3);

    this.anchoFondo = this.imgFondo.width * (400 / this.imgFondo.height);
    this.jugador = new Jugador(this.suelo, this.imgCorre, this.sonidoSalto);
    this.guardias = [];
    this.rocas = [];
    this.balas = [];
    for (let i = 0; i < 6; i++) {
      this.guardias.push(new Guardias(1400 + i * 950, this.suelo, this.imgGuardias, this.sonidoDisparo));
    }
    for (let i = 0; i < 5; i++) {
      this.rocas.push(new Rocas(1700 + i * 950, this.suelo, this.imgRoca));
    }
    this.estado = "instrucciones";
    this.framesInstr = 0;
    this.framesPerdiste = 0;
    this.fondoX = 0;
    this.vidas = 3;
    this.dist = 0;
  }

  actualizar() {
    if (this.estado == "instrucciones") {
      this.framesInstr++;
      if (this.framesInstr > this.duracionInstr - 255) {
        this.jugador.actualizar();
      }
      if (this.framesInstr >= this.duracionInstr) {
        this.estado = "jugando";
      }
    }
    if (this.estado == "perdiste") {
      this.framesPerdiste++;
    }
    if (this.estado == "jugando") {
      this.jugar();
    }
    this.controlarPasos();
    this.controlarMusica();
  }

  jugar() {
    this.jugador.actualizar();
    this.dist += this.vel;
    this.fondoX -= this.vel;
    if (this.fondoX <= -this.anchoFondo) this.fondoX = 0;

    for (let i = 0; i < this.guardias.length; i++) {
      this.guardias[i].actualizar(this.jugador, this.balas, this.vel, this.imgBala);
      if (this.guardias[i].colisionaCon(this.jugador)) this.recibirDano(this.guardias[i]);
    }
    for (let i = 0; i < this.rocas.length; i++) {
      this.rocas[i].actualizar(this.vel);
      if (this.rocas[i].colisionaCon(this.jugador)) this.recibirDano(this.rocas[i]);
    }
    for (let i = this.balas.length - 1; i >= 0; i--) {
      this.balas[i].actualizar();
      if (this.balas[i].colisionaCon(this.jugador)) {
        this.recibirDano(this.balas[i]);
        this.balas.splice(i, 1);
      } else if (this.balas[i].x < -50) {
        this.balas.splice(i, 1);
      }
    }
    if (this.dist >= this.distMax) {
      this.sonidoGana.play();
      this.estado = "ganaste";
    }
  }

  recibirDano(ent) {
    this.vidas--;
    this.sonidoDano.play();
    ent.desaparecer();
    if (this.vidas <= 0) {
      this.sonidoPierde.play();
      this.estado = "perdiste";
    }
  }

  controlarPasos() {
    if (this.estado == "jugando" && this.jugador.estaEnSuelo()) {
      if (!this.sonidoPasos.isPlaying()) this.sonidoPasos.loop();
    } else if (this.sonidoPasos.isPlaying()) {
      this.sonidoPasos.pause();
    }
  }

  controlarMusica() {
    if (this.estado == "instrucciones") {
      if (this.musicaCreditos.isPlaying()) this.musicaCreditos.pause();
      if (!this.musicaInstrucciones.isPlaying()) this.musicaInstrucciones.loop();
    } else if (this.estado == "creditos") {
      if (this.musicaInstrucciones.isPlaying()) this.musicaInstrucciones.pause();
      if (!this.musicaCreditos.isPlaying()) this.musicaCreditos.loop();
    } else {
      if (this.musicaInstrucciones.isPlaying()) this.musicaInstrucciones.pause();
      if (this.musicaCreditos.isPlaying()) this.musicaCreditos.pause();
    }
  }

  dibujar() {
    if (this.estado == "instrucciones") this.dibujarInstrucciones();
    if (this.estado == "jugando") this.dibujarJuego();
    if (this.estado == "ganaste") this.dibujarGanaste();
    if (this.estado == "perdiste") this.dibujarPerdiste();
    if (this.estado == "creditos") this.dibujarCreditos();
  }

  dibujarFondo() {
    image(this.imgFondo, this.fondoX, 0, this.anchoFondo, 400);
    image(this.imgFondo, this.fondoX + this.anchoFondo, 0, this.anchoFondo, 400);
  }

  dibujarInstrucciones() {
    let alfa = this.duracionInstr - this.framesInstr;
    if (alfa > 255) alfa = 255;

    this.dibujarJuego();

    noStroke();
    fill(135, 22, 22, alfa);
    rect(0, 0, 800, 400);

    fill(255, alfa);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("INSTRUCCIONES", 400, 45);
    textSize(16);
    text("ESPACIO = Saltar", 400, 85);
    textSize(22);
    text("¡RAPIDO, ESCAPA Y SAL DEL VALLE!", 400, 135);
    textSize(16);
    text("Debes escapar de los guardias de Crossley", 400, 180);
    text("con la reliquia sagrada", 400, 205);
    textSize(14);
    text("Esquiva guardias, rocas y balas", 400, 245);
    text("Tienes 3 vidas", 400, 275);
    textSize(12);
    text("Click o espera para comenzar", 400, 340);
    text("C = Creditos", 400, 370);
  }

  dibujarJuego() {
    this.dibujarFondo();
    this.jugador.dibujar();
    for (let i = 0; i < this.guardias.length; i++) this.guardias[i].dibujar();
    for (let i = 0; i < this.rocas.length; i++) this.rocas[i].dibujar();
    for (let i = 0; i < this.balas.length; i++) this.balas[i].dibujar();

    noStroke();
    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Vidas: " + this.vidas, 10, 10);

    fill(100);
    rect(330, 8, 140, 12, 6);
    fill(0, 180, 0);
    let progreso = (this.dist / this.distMax) * 140;
    rect(330, 8, progreso, 12, 6);
  }

  dibujarGanaste() {
    background(30, 80, 30);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("ESCAPASTE CON LA RELIQUIA", 400, 150);
    textSize(18);
    text("Has logrado huir de los guardias de Crossley", 400, 200);
    textSize(14);
    text("R = Reiniciar  |  C = Creditos", 400, 300);
  }

  dibujarPerdiste() {
    let rojo = 20 + this.framesPerdiste;
    if (rojo > 170) rojo = 170;
    background(rojo, 15, 15);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("HAS CAIDO...", 400, 150);
    textSize(18);
    text("Los guardias de Crossley te atraparon", 400, 200);
    text("La historia acabo...", 400, 230);
    textSize(14);
    text("R = Reiniciar  |  C = Creditos", 400, 300);
  }

  dibujarCreditos() {
    background(135, 22, 22);
    fill(255);
    textSize(25);
    textAlign(CENTER, CENTER);
    text("EL TESORO SECRETO DEL TIBET", 400, 50);
    textSize(18);
    text("Autor de la obra: Richard Brightfield", 400, 120);
    text("Alumno: Santiago Casado - Nicanor Garcia", 400, 150);
    text("Catedra: Programacion para medios interactivos orientada a la tecnologia web", 400, 200);
    text("Comision: 5", 400, 250);
    text("Docente: Leo Garay", 400, 275);
    text("Año: 2026", 400, 300);
    textSize(16);
    text("R = Volver al inicio", 400, 350);
  }

  mousePressed() {
    userStartAudio();
    if (mouseX >= 0 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400) {
      if (this.estado == "instrucciones") {
        this.estado = "jugando";
      }
    }
  }

  keyPressed() {
    userStartAudio();
    if (key == " " && this.estado == "jugando") {
      this.jugador.saltar();
    }
    if (key == "r" || key == "R") {
      if (this.estado == "ganaste" || this.estado == "perdiste" || this.estado == "creditos") {
        this.iniciar();
      }
    }
    if (key == "c" || key == "C") {
      if (this.estado == "instrucciones" || this.estado == "ganaste" || this.estado == "perdiste") {
        this.estado = "creditos";
      }
    }
  }
}
