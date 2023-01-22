import React from "react";
import "../css/property.css";
import Navbar from "./Navbar";
import Property_card from "./Property_card";
function Property() {
  return (
    <>
      <Navbar />
      <div className="property">
        <div className="favourite">
          <div className="left-side">
            <img
              src={require("../Images/jason-briscoe-UV81E0oXXWQ-unsplash.jpg")}
              alt="stair"
            />
          </div>
          <div className="right-side">
            <div className="text">
              <h3>
                Check your favorite properties selected only for you by Zeal
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
        <div className="form"></div>
        <div className="property-cards">
          <Property_card
            img="Golden-Valley-Midcentury-Modern-House-01-B"
            company="Rashmi Group"
            house="Rashmi Miracles"
            place="Andheri East, Mumbai"
            price="450K - 680K"
            status="Ready to move in"
            type="2BHK"
          />
          <Property_card />
        </div>
      </div>
    </>
  );
}

export default Property;
