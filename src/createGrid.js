// const blue = "#458588";

const colors = [
  "#cc241d",
  "#98971A",
  "#d79921",
  "#458588",
  "#b16286",
  "#689d6a",
  "#d65d0e",
];

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
            backgroundColor: colors[Math.floor(7*Math.random())],
            width: `calc(100% / ${width})`,
            height: `calc(100% / ${height})`,
          }}
        ></div>
      );
    }
  }
  return grid;
}

export default createGrid;
