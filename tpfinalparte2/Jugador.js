class Jugador {
  constructor(suelo, imgs, sndSalto) {
    this.imgs = imgs;
    this.sndSalto = sndSalto;
    this.ancho = 50;
    this.alto = 65;
    this.x = -50;
    this.ySuelo = suelo - this.alto;
    this.y = this.ySuelo;
    this.velocidadY = 0;
    this.gravedad = 0.4;
    this.fuerzaSalto = 12.5;
    this.enSuelo = true;
    this.frame = 0;
    this.contador = 0;
    this.velAnim = 6;
    this.velEntrada = 0.6;
  }

  actualizar() {
    if (this.x < 100) {
      this.x += this.velEntrada;
      if (this.x > 100) this.x = 100;
    }
    this.velocidadY += this.gravedad;
    this.y += this.velocidadY;
    if (this.y >= this.ySuelo) {
      this.y = this.ySuelo;
      this.velocidadY = 0;
      this.enSuelo = true;
    }
    if (this.enSuelo) {
      this.contador++;
      if (this.contador >= this.velAnim) {
        this.contador = 0;
        this.frame++;
        if (this.frame >= this.imgs.length) this.frame = 0;
      }
    }
  }

  saltar() {
    if (this.enSuelo) {
      this.velocidadY = -this.fuerzaSalto;
      this.enSuelo = false;
      this.sndSalto.play();
    }
  }

  estaEnSuelo() {
    return this.enSuelo;
  }

  dibujar() {
    image(this.imgs[this.frame], this.x, this.y, this.ancho, this.alto);
  }
}
