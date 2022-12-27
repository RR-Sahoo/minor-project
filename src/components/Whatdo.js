import React from "react";
import "../css/whatdo.css";
import Whatdo_item from "./Whatdo_item";
function Whatdo() {
  return (
    <div className="home--whatdo">
      <h1>What We Do</h1>
      <div className="whatdo--container">
        <Whatdo_item
          title="3D Planning"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
          icon="Group 8.svg"
        />
        <Whatdo_item
          title="Web Platform"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
          icon="Group 9.svg"
        />
        <Whatdo_item
          title="Marketing"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
          icon="Group 10.svg"
        />
      </div>
    </div>
  );
}

export default Whatdo;
