function Obstacle (game) {
  this.game = game;
  this.x = 300;
  this.x = this.game.canvas.width - 300;
  this.y = this.game.canvas.height - 50;
  this.width = 100;
  this.height = 50;
  this.colorObstacle = "#0000ff";
//  this.y = this.game.canvas.height - this.height;
}
Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = this.colorObstacle;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
}
Obstacle.prototype.move = function() {
  this.x -= 4;
}
