import React, { useState, useEffect } from "react";

function ScoreBoard(props) {
  const [score, setScore] = useState(0);
  const [highest, setHighest] = useState(0);

  useEffect(() => {
    setScore(props.planets.length);
    if (score > highest) setHighest(score);
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center">
        <p className="col-1 ">score : {score}</p>
        <p className="col-1"> highest score : {highest}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
