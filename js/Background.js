function Background (game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;
  this.dWidth = 1680;
  this.dHeight = 1900;
  this.img = new Image(); // creamos una nueva imagen, PARA VARIOS ESCENARIOS TENDRÉ QUE CREAR UN ARRAY DE IMAGENES
  this.img.src = "images/04-bg.png";
//  this.slideX = 10;
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
  this.x += 10;
}/*
Background.prototype.slide = function () {
  if(this.isSliding) { this.x += this.slideX * 2 }
}*/


Background.prototype.end = function () {
  if (this.x >= 2500 && this.y < this.dHeight) {
    window.location.href = "theend.html";
//    this.game.message.end();
  }
}