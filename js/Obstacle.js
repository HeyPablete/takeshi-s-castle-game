function Obstacle (game, x) {
  this.game = game;
  this.width = 100;
  this.height = 20;
  this.x = x;
  this.y = this.game.canvas.height - this.height;
  this.blueColor = "#0000ff";
}
Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = this.blueColor;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
}
Obstacle.prototype.moveForward = function() {
  this.x -= 10; // si este valor es menor que background.x el fondo y el obstaculo daran una sensacion de perspectiva
}