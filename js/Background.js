function Background (game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.dx = 0; // esto va en el drawImage. NO SE COMO VA
  this.dy = 0; // esto va en el drawImage. NO SE COMO VA
  this.dWidth = 1280; // esto va en el drawImage. NO SE COMO VA
  this.dHeight = 680; // esto va en el drawImage. NO SE COMO VA
  this.img = new Image(); // creamos una nueva imagen, PARA VARIOS ESCENARIOS TENDRÉ QUE CREAR UN ARRAY DE IMAGENES
  this.img.src = "images/01-bg.png";
  this.slideX = 10;
//  this.isSliding = false;
}
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
Background.prototype.moveForward = function () {
  this.x += 4;
}/*
Background.prototype.slide = function () {
  if(this.isSliding) { this.x += this.slideX * 2 }
}*/