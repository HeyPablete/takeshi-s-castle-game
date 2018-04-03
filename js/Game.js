function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background (this);
  this.player = new Player (this);
  this.fps = 60;
}
Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.drawAll = function () {
  this.background.draw();
  this.player.draw();
}
Game.prototype.start = function () {
  this.interval = setInterval( function () {
    this.clearAll();
    this.drawAll(); 
    this.setListener();
  }.bind(this), 1000/this.fps);
}
Game.prototype.setListener = function () {
  document.onkeydown = function (event) {
    if (event.keyCode === 32) this.player.isJumping = true;
  }.bind(this);
  document.onkeyup = function (event) {
    if (event.keyCode === 65 || event.keyCode === 83) this.background.moveForward();
    if (event.keyCode === 32) this.player.isJumping = false;
  }.bind(this);
}
