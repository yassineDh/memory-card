import React from "react";
import planets from "../planets.json";
import Cards from "./Cards";

function CardsList() {
  console.log(planets);
  return (
    <div className="container-fluid">
      <div className="row">
        {planets.map((planet) => {
          return (
            <Cards
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
              key={planet.planetName}
              {...planet}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsList;
