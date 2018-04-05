function Score (game){
  this.game = game;
  this.point = 0;
}

Score.prototype.incrementScore = function(){
  this.point++;
}
Score.prototype.draw = function () {
  this.game.ctx.font = "30px cursive, sans-serif",
  this.game.ctx.fillText("Score: " + this.point, 800, 100);
}