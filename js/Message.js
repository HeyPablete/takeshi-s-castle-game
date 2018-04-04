// Constructor
function Message (game) {
  this.game = game;

  this.text = {
    welcome: "Al turrón!!!",
    hit: "Ouch",
    gameOver: "Nikito nipongooo!!!"
  }

}
Message.prototype.draw = function (textToPrint) {
  this.game.ctx.font = '48px serif';
  this.game.ctx.fillText(textToPrint, 10, 50);
}



//Messages.prototype.list = function () {}