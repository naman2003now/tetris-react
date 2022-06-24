import "./style/score-board.css";
function ScoreBoard() {
  return (
    <div className="score">
      <h2 className="stats-label"> SCORE: </h2>
      <p className="stats">000000000</p>
      <h2 className="stats-label"> LEVEL: </h2>
      <p className="stats">000000000</p>
      <h2 className="stats-label"> LINES: </h2>
      <p className="stats">000000000</p>
    </div>
  );
}

export default ScoreBoard;
