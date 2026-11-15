https://youtu.be/iMUZuvkWeGk

let juego;
               
function preload() {
  juego = new Juego();
  juego.cargarRecursos();
}

function setup() {
  createCanvas(800, 400);
  juego.iniciar();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function mousePressed() {
  juego.mousePressed();
}

function keyPressed() {
  juego.keyPressed();
}  
