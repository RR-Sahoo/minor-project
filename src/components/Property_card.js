import React from "react";
import "../css/property-card.css";
function Property_card(props) {
  return (
    
    <div className="property-card">
      <div className="left-side">
        <img
           src={`../Images/${props.img}.jpg`}
          alt="property-1"
        />
      </div>
      <div className="right-side">
        <h3 className="company-name">{props.company}</h3>
        <h2 className="house-name">{props.house}</h2>
        <p className="place">{props.place}</p>
        <p className="price">
          <i className="fa-solid fa-indian-rupee-sign"></i> {props.price}
        </p>
        <p className="status">{props.status}</p>
        <div className="type">
          <p>{props.type}</p>
        </div>
        <div className="button">
          <h3>More Details</h3>
          <div className="arrow">
          <i className="fa-solid fa-angles-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property_card;
