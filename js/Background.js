// Constructor
function Background (game) {
  // Estamos pasando el Canvas para pintar con los metodos CTX
  this.game = game;

  // La posicion del la imagen en el canvas
  this.x = 0;
  this.y = 0;

  // creamos una nueva imagen, PARA VARIOS ESCENARIOS TENDRÉ QUE CREAR UN ARRAY DE IMAGENES
  this.img = new Image();
  this.img.src = "images/01-bg.png";
}

// pintamos el fondo
Background.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img, 
    this.x, 
    this.y, 
    this.game.canvas.width, 
    this.game.canvas.height,
    0,
    100,
    400,
    600
  );
}

// Movemos el fondo
Background.prototype.move = function() {}