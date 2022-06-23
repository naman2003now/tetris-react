import LeftPane from "./left-pane.js";
import RightPane from "./right-pane.js";
import Board from "./board.js";
import "./style/board-container.css";

function BoardContainer() {
  return (
    <div className="boardContainer">
      <LeftPane />
      <Board />
      <RightPane />
    </div>
  );
}

export default BoardContainer;
