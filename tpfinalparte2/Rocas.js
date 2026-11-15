class Rocas {
  constructor(x, suelo, img) {
    this.x = x;
    this.y = suelo - 80 + 9;
    this.ancho = 92;
    this.alto = 80;
    this.margen = 15;
    this.img = img;
  }

  actualizar(vel) {
    this.x -= vel;
  }

  desaparecer() {
    this.x = -100;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }

  colisionaCon(j) {
    return this.x + this.margen < j.x + j.ancho &&
           this.x + this.ancho - this.margen > j.x &&
           this.y + this.margen < j.y + j.alto &&
           this.y + this.alto - this.margen > j.y;
  }
}
