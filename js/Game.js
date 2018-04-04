function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.message = new Message (this);
  this.background = new Background (this);
  this.player = new Player (this);
  this.obstacle = new Obstacle (this, this.canvas.width - 400); // 400 es la posicion X donde se va a poner el primer objeto
  this.arrObstacle = [];
  this.howManyObstacles = 5;
//  this.generateObstacle();
  console.log("xxxxxx");
  this.fps = 60;
}


Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacle = new Obstacle (this, this.canvas.width - 400);
};
Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.drawAll = function () {
  this.background.draw();
  this.player.draw();
  for (var i = 0; i < this.howManyObstacles; i++) { this.arrObstacle[i].draw(); }
}
Game.prototype.start = function () {
  this.interval = setInterval( function () {
    this.clearAll();
    this.drawAll();
    this.setListener();
  }.bind(this), 1000/this.fps);
  this.generateObstacle( this.howManyObstacles );
  this.message.draw(this.message.text.welcome);
  console.log("AL TURRÓN!!");
}
Game.prototype.setListener = function () {
  document.onkeydown = function (event) {
    if (event.keyCode === 32) this.player.isJumping = true;
  }.bind(this);
  document.onkeyup = function (event) {
    if (event.keyCode === 65 || event.keyCode === 83) {
      this.background.moveForward();
      this.arrObstacle.moveForward();
      //this.background.slide();
    }
    if (event.keyCode === 32) {
      this.player.isJumping = false;
    }
  }.bind(this);
}

Game.prototype.generateObstacle = function( numObstacles ) {
  // cojer todos los obstaculos y ponerlos en una posicion diferente
  var posObtacleX = this.player.x + 200;
  for (var i = 1; i <= numObstacles; i++) {
    posObtacleX = i * 100 + posObtacleX;
    this.arrObstacle.push( new Obstacle(this, posObtacleX) );
    console.log(this.arrObstacle);
    console.log(posObtacleX);
  }

};