//// Constructor
function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.background = new Background (this);
  this.player = new Player (this);
}

//// Limpiamos lo que hay en pantalla para inicializarlo de nuevo
Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//// Pintamos los elementos en el canvas
Game.prototype.drawAll = function () {
  this.background.draw(); // pintamos el background
  this.player.draw(); // pintamos el player
}

//// Pintamos los elementos en el canvas
Game.prototype.moveAll = function () {
  this.setListener(); // movemos el player y el background
}

//// Empieza el juego. Inicializamos todo
Game.prototype.start = function () {
  this.interval = setInterval( function () {
    this.clearAll();// limpiamos cada intervalo para dar un efecto frames
    this.drawAll(); // pintamos todo
    this.moveAll(); // movemos el Player

  }.bind(this), 30);

}



// escuchamos el teclado para el movimientos del player
Game.prototype.setListener = function () {
  document.onkeyup = function (k) {
    if (k.keyCode === 65 || k.keyCode === 83) { this.background.moveForward(); }
    if (k.keyCode === 32) { this.player.moveJump(); }
  }.bind(this);
}
