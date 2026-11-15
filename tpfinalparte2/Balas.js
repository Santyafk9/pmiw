class Balas {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 15;
    this.velocidad = 7;
    this.img = img;
  }

  actualizar() {
    this.x -= this.velocidad;
  }

  desaparecer() {
    this.x = -100;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }

  colisionaCon(j) {
    return this.x < j.x + j.ancho &&
           this.x + this.ancho > j.x &&
           this.y < j.y + j.alto &&
           this.y + this.alto > j.y;
  }
}
