import React, { useState, useEffect } from "react";

function ScoreBoard() {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);
  return (
    <div className="container-fluid">
      <div className="row">
        <p className="col-2">score : {score}</p>
        <p className="col-2"> highest score : {highest}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
