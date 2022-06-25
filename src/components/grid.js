import { useState } from "react";

const colors = [
  "#cc241d",
  "#98971A",
  "#d79921",
  "#458588",
  "#b16286",
  "#689d6a",
  "#d65d0e",
];

function createGrid(width, height, cell_colors) {
  let grid = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      grid.push(
        <div
          className="cell"
          id={"" + i + "," + j + ""}
          key={width * i + j}
          style={{
            backgroundColor:
              cell_colors[i][j] === -1 ? undefined : colors[cell_colors[i][j]],
            width: `calc(100% / ${width})`,
            height: `calc(100% / ${height})`,
          }}
        ></div>
      );
    }
  }
  return grid;
}

function Grid(props) {
  let final_grid = [];
  for (let i = 0; i < props.width; i++) {
    let temp_grid = [];
    for (let j = 0; j < props.height; j++) {
      temp_grid.push(-1);
    }
    final_grid.push(temp_grid);
  }
  const [grid, setGrid] = useState(final_grid);
  props.setter(setGrid);
  return <>{createGrid(props.width, props.height, grid)}</>;
}

export default Grid;
