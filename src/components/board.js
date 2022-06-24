import "./style/board.css";
import Grid from "./grid.js";

const grid_height = 24;
const grid_width = 10;

function Board() {
  return (
    <div className="board">
      <Grid width={grid_width} height={grid_height} />
    </div>
  );
}

export default Board;
