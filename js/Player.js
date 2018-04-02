//// Constructor
function Player (game) {
  // Estamos pasando el Canvas para pintar con los metodos CTX
  this.game = game;

  // ancho y alto del Player
  this.w = 30;
  this.h = 70;

  // posicion del Player
  this.x = document.getElementById("canvas").width / 3; // aparece en 1/3 del ancho del canvas
  this.y = document.getElementById("canvas").height - this.h;

}

//// EL RECTANGULO PARA QUE SE VEA EL PLAYER. CUANDO LO CAMBIE POR UNA IMG ESTO NO HARÁ FALTA
Player.prototype.drawRect = function (x, y, width, height) {
  this.game.ctx.fillRect(x, y, width, height);
}

//// Pintamos el player
Player.prototype.draw = function (x, y, width, height) {
  //this.game.ctx.drawImage(); // LO NECESITARÉ PARA COLOCAR LA IMG DEL PLAYER AQUI
  this.game.ctx.fillStyle = "#ff0000";
  this.drawRect(this.x, this.y, this.w, this.h); // Pintamos el rectangulo
}

// el player salta
Player.prototype.moveJump = function () {
  this.y -= 10;
}
