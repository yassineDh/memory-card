import React from "react";
import ScoreBoard from "./ScoreBoard";

function Header(props) {
  return (
    <header>
      <h3 className="text-center">Memory card</h3>
      <ScoreBoard planets={props.planets} />
    </header>
  );
}

export default Header;
