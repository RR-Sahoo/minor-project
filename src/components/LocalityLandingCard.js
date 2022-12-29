import React from "react";
import "../css/localityLandingCard.css";
function LocalityLandingCard(props) {
  return (
    <div className="cards">
      <div class="card">
        <img
          src={require(`../Images/${props.image}`)}
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <div className="card-content">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalityLandingCard;
