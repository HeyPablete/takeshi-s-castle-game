function Player (game) {
  this.game = game;
  this.width = 30;
  this.height = 70;
  this.color = "#ff0000";
  this.x = this.game.canvas.width / 3;
  this.y = 0;
  this.speedY = 6;
  this.isJumping = false;
}
Player.prototype.draw = function () {
  this.game.ctx.fillStyle = this.color;
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.gravity();
  this.jump();
}
Player.prototype.gravity = function () {
  if(this.y < (this.game.canvas.height - this.height)) { this.y += this.speedY; }
};
Player.prototype.jump = function () {
  if(this.isJumping && this.y >= 400) { this.y -= this.speedY * 2 }
};