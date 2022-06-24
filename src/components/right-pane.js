import "./style/right-pane.css";
import PieceContainer from "./pane-elements/piece-container.js";

function RightPane() {
  return (
    <div className="right-pane pane">
      <PieceContainer title="NEXT" />
    </div>
  );
}

export default RightPane;
