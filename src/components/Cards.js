import React from "react";

function Cards(props) {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className={props.className+" my-3"}>
      <div
        className="card"
        style={{
          width: 18 + "rem",
          padding: 10 + "px",
          backgroundColor: getRandomColor(),
        }}
      >
        <img className="card-img-top" src={props.imageUrl} />
        <div className="card-body">
          <h5 className="card-title text-center">{props.planetName}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cards;
