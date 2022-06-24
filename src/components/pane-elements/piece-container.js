import "./style/piece-container.css";
import Grid from "../grid.js";

function PieceContainer(props) {
  return (
    <div className="piece-container">
      <div className="piece-container-board">
        <Grid width="5" height="5" setter={props.setter} />
      </div>
      <h2 className="piece-container-label">{props.title} </h2>
    </div>
  );
}

export default PieceContainer;
