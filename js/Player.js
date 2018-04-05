function Player (game) {
  this.game = game;
  this.width = 70;
  this.height = 90;
  this.redColor = "#ff0000";
  this.x = this.game.canvas.width / 3;
  this.y = (this.game.canvas.height - this.game.canvas.height / 5 ) - 20;
  this.speedY = 5;
  this.isJumping = false;
  this.onFloor = true;
  this.img = new Image();
  this.img.src = "images/player-run.png";
  this.img.frames = 8;
  this.img.frameIndex = 1;
}
Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
    this.img,
    this.img.frameIndex * (this.img.width / this.img.frames),
    0,
    100,//this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.width,
    this.height
  );
  //this.game.ctx.fillStyle = this.redColor;
  //this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.gravity();
  this.jump();
  //this.background.slide();
}
Player.prototype.gravity = function () {
  if(this.y < (this.game.canvas.height - this.height - 20)) { this.y += this.speedY; }
}
Player.prototype.jump = function () {
  if(this.isJumping && this.y > 400) {
    this.onFloor = false;
    this.y -= this.speedY * 1.5;
    this.game.background.x += 6;
    this.game.arrObstacle.forEach(function (e) { e.x -= 6; });
  }
}