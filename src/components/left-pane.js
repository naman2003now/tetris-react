import "./style/left-pane.css";
import PieceContainer from "./pane-elements/piece-container.js";
import ScoreBoard from "./pane-elements/score-board";

function LeftPane() {
  return (
    <div className="left-pane pane">
      <PieceContainer title="HOLD" />
      <h1 className="title">TETRIS</h1>
      <ScoreBoard />
    </div>
  );
}

export default LeftPane;
