var gameloop_func = () => {};

var gameLoopIntravel = setInterval(gameloop_func, 750);
function gameloop(_function) {
  gameloop_func = _function;
  clearInterval(gameLoopIntravel);
  gameLoopIntravel = setInterval(gameloop_func, 750);
}
var rotate_func = () => {};
function rotate(_function) {
  rotate_func = _function;
}

var left_func = () => {};
function left(_function) {
  left_func = _function;
}

var right_func = () => {};
function right(_function) {
  right_func = _function;
}

var down_func = () => {};
function down(_function) {
  down_func = _function;
}

var fall_func = () => {};
function fall(_function) {
  fall_func = _function;
}

function call(_function) {
  clearInterval(gameLoopIntravel);
  _function();
  gameLoopIntravel = setInterval(gameloop_func, 750);
}

function keyUp(event) {}

function keyDown(event) {
  switch (event.key) {
    case "w":
      call(rotate_func);
      break;
    case "a":
      call(left_func);
      break;
    case "d":
      call(right_func);
      break;
    case "s":
      call(down_func);
      break;
    case "space":
      call(fall_func);
      break;
    default:
      console.log("What the fuck are you doing?");
      break;
  }
}

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

module.exports = { gameloop, rotate, left, right, down, fall };
