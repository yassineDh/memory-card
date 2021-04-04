import React, { useState, useEffect } from "react";
import planetsArray from "../planets.json";
import Cards from "./Cards";

function CardsList(props) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(planetsArray);
  }, []);

  function shuffle() {
    let planetsShuffled = planetsArray.slice(0);
    planetsShuffled.sort(() => Math.random() - 0.5);
   setPlanets(planetsShuffled)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        {planets.map((planet) => {
          return (
            <Cards
              className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
              key={planet.planetName}
              {...planet}
              shuffle ={shuffle}
              addPlanet={props.add}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsList;
