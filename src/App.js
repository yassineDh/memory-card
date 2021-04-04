import React, { useState, useEffect } from "react";
import "./App.css";
import CardsList from "./components/CardsList";
import Header from "./components/Header";

function App() {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  function addSelectedPlanets(planet) {
    let planetExist = selectedPlanets.includes(planet);
    if (planetExist) {
      setSelectedPlanets([]);
      return;
    }
    let newArr = [...selectedPlanets, planet];
    setSelectedPlanets(newArr);
  }
  return (
    <div className="container-fluid text-light">
      <div className="row">
        <div className="col">
          <Header planets={selectedPlanets}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <CardsList add={addSelectedPlanets} />
        </div>
      </div>
    </div>
  );
}

export default App;
