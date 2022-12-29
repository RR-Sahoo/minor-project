import React from "react";
import Navbar from "./Navbar";
import "../css/localityLanding.css";
import LocalityLandingCard from "./LocalityLandingCard";

function LocalityLanding() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-page--upper">
        <div class="card text-bg-dark">
          <img
            src={require("../Images/annie-spratt-ax-KPVfTYAs-unsplash.jpg")}
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <div className="card-content">
              <h5 class="card-title">
                Best Deals Guranteed on your favourite localities by us
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page--form">
        <input
          type="text"
          className="landing-page--search"
          placeholder="Search Localities"
        />
        <button className="landing-page--search-btn">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </button>
      </div>
      <div className="landing-page--cards">
        <div className="landing-page--cards-container">
          <LocalityLandingCard
            title="Bandra"
            text="sea-facing, spacious"
            image="Bandra.jpg"
          />
          <LocalityLandingCard
            title="Navi Mumbai"
            text="Wide, spacious"
            image="Navi_Mumbai.jpg"
          />
          <LocalityLandingCard
            title="South Bombay"
            text="sea-facing, Luxurious"
            image="South-Mumbai.jpg"
          />
          <LocalityLandingCard
            title="Andheri West"
            text="Luxurious, spacious"
            image="Andheri-West.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default LocalityLanding;
