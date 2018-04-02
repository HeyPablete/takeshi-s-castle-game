// Constructor
function Background (game) {
  // Estamos pasando el Canvas para pintar con los metodos CTX
  this.game = game;

  // La posicion del la imagen en el canvas
  this.x = 0;
  this.y = 0;

  this.dx = 0; // esto va en el drawImage. NO SE COMO VA
  this.dy = 0; // esto va en el drawImage. NO SE COMO VA

  this.dWidth = 1280; // esto va en el drawImage. NO SE COMO VA
  this.dHeight = 680; // esto va en el drawImage. NO SE COMO VA

  // creamos una nueva imagen, PARA VARIOS ESCENARIOS TENDRÉ QUE CREAR UN ARRAY DE IMAGENES
  this.img = new Image();
  this.img.src = "images/01-bg.png";
}

// pintamos el fondo
Background.prototype.draw = function() {
  this.game.ctx.drawImage(
//    (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.img, 
    this.x, 
    this.y, 
    this.game.canvas.width, 
    this.game.canvas.height, 
    this.dx, 
    this.dy, 
    this.dWidth, 
    this.dHeight
  );
}

// Movemos el fondo
Background.prototype.move = function() {}