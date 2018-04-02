//// Contrsuctor
function Move (game) {
  // Estamos pasando el Canvas para pintar con los metodos CTX
  this.game = game;

  // La posicion del la imagen en el canvas
  this.x = document.getElementById("canvas").width / 3;;
  this.y = document.getElementById("canvas").height - this.h;;

  // esta es la velocidad que va a llevar el Player
  this.vx = 1;
  this.vy = 1;
//  this.move = [false, false]
}


// el backgorund se mueve hacia atras
Move.prototype.moveForward = function () {
  console.log("A | S");
  this.x -= 10;
}

// el player salta
Move.prototype.moveJump = function () {
  console.log("SPACE");
  this.y -= this.vy;
}

// escuchamos el teclado para mover el background
Move.prototype.setListener = function () {
  document.onkeyup = function (k) {
    if (k.keyCode === 65 || k.keyCode === 83) { this.background.moveForward(); }
    if (k.keyCode === 32) { this.player.moveJump(); }
  }.bind(this);
}
