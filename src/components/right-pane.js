import "./style/right-pane.css";
import createGrid from "../createGrid.js";

function RightPane() {
  return (
    <div className="right-pane pane">
      <div className="next-piece">
        <div className="next-piece-board">{createGrid(5, 5)}</div>
				<h2 className="next-piece-label">NEXT</h2>
      </div>
    </div>
  );
}

export default RightPane;
