function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.message = new Message (this);
  this.background = new Background (this);
  this.player = new Player (this);
  this.arrObstacle = [];
  this.howManyObstacles =  5;
  this.fps = 60;
}

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacle = new Obstacle (this, this.canvas.width - 400);
  this.generateObstacle( this.howManyObstacles );

  this.message.draw(this.message.text.hit);
  console.log("HIT");
};
Game.prototype.clearAll = function () {
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
    this.player.jump();
    this.background.end();
    if (this.player.y <= 400) { this.player.isJumping = false; }
    if (this.player.y + this.player.height >= this.canvas.height - 30) { this.player.onFloor = true; }
    if (this.isCollision()) { this.gameOver(); }
    this.setListener();
  }.bind(this), 1000/this.fps);
  this.generateObstacle( this.howManyObstacles );
  this.message.draw(this.message.text.welcome);
  console.log("AL TURRÓN!!");
}
Game.prototype.setListener = function () {
  document.onkeyup = function (event) {
    if (event.keyCode === 65 || event.keyCode === 83) {
      this.background.moveForward();
      for (var i = 0; i < this.howManyObstacles; i++) { this.arrObstacle[i].moveForward(); }
      //this.background.slide();
    }
    if (event.keyCode === 32 && this.player.onFloor){
      this.player.isJumping = true;
    } 
  }.bind(this);
}

Game.prototype.stop = function() {
  this.arrObstacle = [];
  clearInterval(this.interval);
};
Game.prototype.generateObstacle = function( numObstacles ) {
  var posObtacleX = Math.random() * 100 + this.player.x + 150;
  for (var i = 1; i <= numObstacles; i++) {
    posObtacleX = i * 100 + posObtacleX;
    this.arrObstacle.push(new Obstacle(this, posObtacleX));
    console.log(this.arrObstacle);
    console.log(posObtacleX);
  }
};
Game.prototype.isCollision = function () {
/*
  if (this.x < this.obstacle.x + this.obstacle.width && this.x + this.w > this.obstacle.x &&
    this.y < this.obstacle.y + this.obstacle.height && this.y + this.h > this.obstacle.y) {
    return true;
    }*/

   return this.arrObstacle.some( function ( obs ) {
    return ( this.player.x + this.player.width > obs.x ) &&
      ( obs.x + obs.width > this.player.x ) && 
      ( this.player.y + this.player.height > obs.y )
  }.bind(this) )
};
Game.prototype.gameOver = function () {
  this.message.draw( this.message.text.gameover );
  this.stop();
  if( confirm("GAME OVER. Play again?") ) {
    this.reset();
    this.start();
  }
};