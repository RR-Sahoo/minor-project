import React from "react";
import "../css/ourstory.css"
function Ourstory() {
  return (
    <div className="home--ourstory">
      <div className="left">
        <img
          src={require("../Images/joel-filipe-RFDP7_80v5A-unsplash.jpg")}
          alt=""
        />
      </div>
      <div className="right">
        <div className="desc">
          <h1>
            Our Story
            <br />
            Who we are
          </h1>
          <p>
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>
        </div>
        <div className="buttons">
          <button>See more</button>
          <div className="button-team">
            <p>See all team</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstory;
