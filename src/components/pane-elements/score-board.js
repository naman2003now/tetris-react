import "./style/score-board.css";
import {
  setLevelSetter,
  setLinesSetter,
  setScoreSetter,
} from "../../game/setters.js";

import { useState } from "react";

function ScoreBoard() {
  const [score, setScore] = useState("000000000");
  setScoreSetter(setScore);
  const [lines, setLines] = useState("000000000");
  setLinesSetter(setLines);
  const [level, setLevel] = useState("000000000");
  setLevelSetter(setLevel);

  return (
    <div className="score">
      <h2 className="stats-label"> SCORE: </h2>
      <p className="stats">{score}</p>
      <h2 className="stats-label"> LEVEL: </h2>
      <p className="stats">{level}</p>
      <h2 className="stats-label"> LINES: </h2>
      <p className="stats">{lines}</p>
    </div>
  );
}

export default ScoreBoard;
