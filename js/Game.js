//// constructor
function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.player = new Player ();
}

//// Limpiamos lo que hay en pantalla para inicializarlo de nuevo
Game.prototype.clear = function() {

};

//// Pintamos los elementos en el canvas
Game.prototype.draw = function () {
  
}

//// Empieza el juego
Game.prototype.start = function () {

}
