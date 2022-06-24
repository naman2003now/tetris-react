import "./style/right-pane.css";
import PieceContainer from "./pane-elements/piece-container.js";
import { setNextSetter } from "../game/setters.js";

function RightPane() {
  return (
    <div className="right-pane pane">
      <PieceContainer title="NEXT" setter={setNextSetter} />
    </div>
  );
}

export default RightPane;
