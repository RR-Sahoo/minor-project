import React from "react";
import "../css/whatdo_item.css";
function Whatdo_item(props) {
  return (
    <div className="whatdo--item">
      <div className="whatdo--item-icon">
        <div className="whatdo--item-icon-circle">
          <img src={require(`../Images/${props.icon}`)} alt="Icons" />
        </div>
      </div>
      <div className="whatdo--item-desc">
        <h2>{props.title}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

export default Whatdo_item;
