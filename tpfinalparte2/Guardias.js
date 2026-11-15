class Guardias {
  constructor(x, suelo, imgs, sndDisparo) {
    this.x = x;
    this.y = suelo - 75 + 10;
    this.ancho = 58;
    this.alto = 75;
    this.margen = 12;
    this.imgs = imgs;
    this.sndDisparo = sndDisparo;
    this.disparos = 0;
    this.temp = 0;
    this.flash = 0;
  }

  actualizar(jugador, balas, vel, imgBala) {
    this.x -= vel;
    this.temp++;
    if (this.flash > 0) this.flash--;
    if (this.x > 200 && this.x < 750 && this.disparos < 3 && this.temp > 90) {
      if (this.x - jugador.x > 300 && random(100) < 2) {
        balas.push(new Balas(this.x, this.y + 10, imgBala));
        this.disparos++;
        this.temp = 0;
        this.flash = 20;
        this.sndDisparo.play();
      }
    }
  }

  desaparecer() {
    this.x = -100;
  }

  dibujar() {
    let img = this.flash > 0 ? this.imgs[1] : this.imgs[0];
    image(img, this.x, this.y, this.ancho, this.alto);
  }

  colisionaCon(j) {
    return this.x + this.margen < j.x + j.ancho &&
           this.x + this.ancho - this.margen > j.x &&
           this.y + this.margen < j.y + j.alto &&
           this.y + this.alto - this.margen > j.y;
  }
}
