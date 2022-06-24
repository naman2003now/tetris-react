import "./style/left-pane.css";
import createGrid from "../createGrid.js";

function LeftPane() {
  return (
    <div className="left-pane pane">
      <div className="hold">
        <div className="hold-board">{createGrid(5, 5)}</div>
        <h2 className="hold-label"> HOLD </h2>
      </div>
      <h1 className="title">TETRIS</h1>
      <div className="score">
        <h2 className="stats-label"> SCORE: </h2>
        <p className="stats">000000000</p>
        <h2 className="stats-label"> LEVEL: </h2>
        <p className="stats">000000000</p>
        <h2 className="stats-label"> LINES: </h2>
        <p className="stats">000000000</p>
      </div>
    </div>
  );
}

export default LeftPane;
