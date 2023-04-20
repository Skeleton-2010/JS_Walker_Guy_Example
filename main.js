let margHor = 8;
let margVer = 0;
let speed = 16;
let player = document.querySelector(".Player");

function moveUp() {
  margVer -= speed;
  wallsCollide();
}

function moveDown() {
  margVer += speed;
  wallsCollide();
}

function moveLeft() {
  margHor -= speed;
  wallsCollide();
}

function moveRight() {
  margHor += speed;
  wallsCollide();
}

function reset() {
  margHor = 8;
  margVer = 0;
}

function wallsCollide() {
  if (margHor < 8) {
    margHor = 8;
  }
  if (margVer < 0) {
    margVer = 0;
  }
  renderLocation();
}

function renderLocation() {
  player.style.marginTop = margVer + "px";
  player.style.marginLeft = margHor + "px";
}

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyW") {
    moveUp();
  }

  if (event.code == "KeyS") {
    moveDown();
  }

  if (event.code == "KeyA") {
    moveLeft();
  }

  if (event.code == "KeyD") {
    moveRight();
  }

  if (event.code == "Space") {
    reset();
  }

  wallsCollide();
  renderLocation();
});
