//// Constructor
function Game (canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.player = new Player (this);
  this.background = new Background (this);
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
  // movemos el player
  this.player.setListener();
}

//// Empieza el juego. Inicializamos todo
Game.prototype.start = function () {
  this.interval = setInterval( function () {
    //console.log("estoy en setInterval");
    this.clearAll();// limpiamos cada intervalo para dar un efecto frames
    this.drawAll(); // pintamos todo
    this.moveAll(); // movemos el Player

  }.bind(this), 3);

}