function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background (this);
  this.player = new Player (this);
  this.obstacle = new Obstacle (this);
  this.arrObstacle = [];
  this.howManyObstacles = 3;
  this.generateObstacle();
  this.fps = 60;
  this.message = new Message (this);
}

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.arrObstacle = [];
};
Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.drawAll = function () {
  this.background.draw();
  for (var i = 0; i < this.howManyObstacles; i++) { this.obstacle.draw(); }
  this.player.draw();
  //this.obstacle.forEach( function (o) { o.draw(); } );
}
Game.prototype.start = function () {
  console.log("AL TURRÓN!!");
  this.message.draw(this.message.text.welcome);
  this.interval = setInterval( function () {
    this.clearAll();
    this.generateObstacle( this.howManyObstacles );
    this.arrObstacle.forEach( function (o) { o.moveForward(); } );
    this.drawAll();
    //if (this.isCollision()) { this.gameOver(); }
    //if (this.framesCounter % 100 === 0) { this.score.incrementScore(); }

    this.setListener();

  }.bind(this), 1000/this.fps);
}
Game.prototype.setListener = function () {
  document.onkeydown = function (event) {
    if (event.keyCode === 32) this.player.isJumping = true;
  }.bind(this);
  document.onkeyup = function (event) {
    if (event.keyCode === 65 || event.keyCode === 83) {
      this.background.moveForward();
      this.obstacle.moveForward();
      //this.background.slide();
    }
    if (event.keyCode === 32) {
      this.player.isJumping = false;
    }
  }.bind(this);
}



Game.prototype.generateObstacle = function( numObstacles ) {
  // vamos a cojer todos los obstaculos y los vamos a poner cada uno en una posicion
  var posObtacleX = numObstacles * this.canvas.width;

  for (var i = 0; i < numObstacles; i++) {
    this.arrObstacle.push( new Obstacle(this) );
  }
};