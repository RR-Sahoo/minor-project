import React from "react";
import "../css/services.css";
import Card from "./Storycard";
function Services() {
  return (
    <div className="home--services">
      <h2>
        Our Excellent <br /> Services
      </h2>
      <div className="home--services-cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <svg
        width="90"
        height="9"
        viewBox="0 0 90 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="9" fill="url(#paint0_linear_1_232)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_232"
            x1="-2"
            y1="4.00001"
            x2="60.5"
            y2="4.00001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#60BBEE" />
            <stop offset="1" stop-color="#2387C0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Services;
