import React from "react";
import "../css/storycard.css";
function Storycard() {
  return (
    <div className="home--services-card">
      <div className="home--services-card-image">
        <img src={require("../Images/collov-home-design.jpg")} alt="Card Image" />
      </div>
      <div className="home--services-card-content">
        <h3>Our Story:</h3>
        <p>
          Only one network of agents represents the longest standing taste maker
          in the world. In the spirit of innovation.
        </p>
        <div className="home--services-card-button">
          <p>See details</p>
          <div className="home--services-card-detail-button">
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 26.0607C11.5251 26.6464 12.4749 26.6464 13.0607 26.0607L22.6066 16.5147C23.1924 15.9289 23.1924 14.9792 22.6066 14.3934C22.0208 13.8076 21.0711 13.8076 20.4853 14.3934L12 22.8787L3.51472 14.3934C2.92893 13.8076 1.97919 13.8076 1.3934 14.3934C0.807612 14.9792 0.807612 15.9289 1.3934 16.5147L10.9393 26.0607ZM10.5 24L10.5 25L13.5 25L13.5 24L10.5 24Z"
                fill="#FF2359"
              />
              <path
                d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807612 21.0711 0.807612 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
                fill="#FF2359"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storycard;
