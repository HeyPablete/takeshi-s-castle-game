//// Constructor
function Player (Game) {
  // el Player tiene una posicion
  this.x = 30;
  this.y = 20;

  // el Player tiene un ancho y alto
  this.w = 30;
  this.h = 70;

}

//// EL RECTANGULO PARA QUE SE VEA EL PLAYER. CUANDO LO CAMBIE POR UNA IMG ESTO NO HARÁ FALTA
Player.prototype.drawRect = function (x, y, width, height) {
  this.ctx.fillRect(this.x, this.y, this.w, this.h);
  // this.ctx.fillRect(x, y, width, height);
}

//// Pintamos el player
Player.prototype.draw = function (x, y, width, height) {
  //this.Game.ctx.drawImage(); // LO NECESITARÉ PARA COLOCAR LA IMG DEL PLAYER AQUI
}

//// Movimientos del player
Player.prototype.move = function () {
  // saltar

  // ir hacia alante

  // ir hacia atras

  // agacharse

}