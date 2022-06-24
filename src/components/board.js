import "./style/board.css";
import createGrid from "../createGrid.js";

const grid_height = 24;
const grid_width = 10;

function Board() {
  return <div className="board">{createGrid(grid_width, grid_height)}</div>;
}

export default Board;
