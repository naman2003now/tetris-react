import { setScore, setBoard, setLevel } from "./setters.js";
import { gameloop, down } from "./event-handler.js";

let score = 0;

function board(score) {
  let grid = [];
  for (let i = 0; i < 10; i++) {
    let temp_board = [];
    for (let j = 0; j < 24; j++) {
      temp_board.push(-1);
    }
    grid.push(temp_board);
  }
  grid[4][score % 24] = Math.floor(7 * Math.random());
  return grid;
}

gameloop(() => {
	score+=1;
  setScore(score);
  setBoard(board(score));
});

down(() => {
  score += 1;
  setLevel(score);
  setBoard(board(score));
});
