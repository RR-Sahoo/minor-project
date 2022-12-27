import React from "react";
import "../css/location_grid_card.css"
function Location_grid_card(props) {
  return (
    <div class="card text-bg-dark">
      <img
        src={require(`../Images/${props.img}`)}
        class="card-img"
        alt="..."
      />
      <div class="card-img-overlay">
        <h5 class="card-title">{props.title}</h5>
        <button className="card-button">View More.</button>
      </div>
    </div>
  );
}

export default Location_grid_card;
