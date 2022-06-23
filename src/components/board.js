import "./style/board.css";

const grid_height = 24;
const grid_width = 10;

const blue = "#83A599";

function createGrid(width, height) {
  let grid = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      grid.push(
        <div
          className="cell"
          id={"" + i + "," + j + ""}
          key={width * j + i}
          style={{
            backgroundColor: blue,
            width: "10%",
            height: "calc(100% / 24)",
          }}
        ></div>
      );
    }
  }
  return grid;
}

function Board() {
  return <div className="board">{createGrid(grid_width, grid_height)}</div>;
}

export default Board;
