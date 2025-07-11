import Image from "../img/goblin.png";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameField = document.getElementById("game-field");
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  gameField.appendChild(cell);
}

function randomPosition() {
  const cells = Array.from(gameField.children);
  const currentCellIndex = cells.findIndex((cell) => cell.contains(goblin));
  let newCellIndex;

  do {
    newCellIndex = getRandomInt(0, 15);
  } while (newCellIndex === currentCellIndex);

  const newCell = cells[newCellIndex];
  newCell.appendChild(goblin);
}

const goblin = document.createElement("img");
goblin.src = Image;

randomPosition();

setInterval(randomPosition, 1500);
