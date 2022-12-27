import React from "react";
import "../css/localexpert.css";
function Localexpert() {
  return (
    <div className="home--local-expert">
      <div className="home--local-expert-container">
        <div className="home--local-expert-left">
          <img src={require("../Images/Component38.png")} alt="" />
        </div>
        <div className="home--local-expert-right">
          <h1>Exclusive Access to Local Experts.</h1>
          <p>
            Only one network of agents represents the longest standing taste
            maker in the world. In the spirit of innovation, an exceptional
            luxury real estate company bearing the Southey's name was launched
            in 1976. Beyond the beautiful properties and the personal touch of
            our agents, only one brand can deliver a lifestyle that caters to
            you With experts in every part of the world, we are local
            everywhere, allowing us to walk alongside our clients at every stage
            of their journey. With innovative technology and unrivaled service,
            we ensure that your home is connected with buyers, locally and
            worldwide.
          </p>
          <div className="home--local-expert-right-icons">
            <div className="home--local-expert-right-icons-upper">
              <div className="home--local-expert-right-icon">
                <div className="home--local-expert-right-icon-circle1">
                  <div className="home--local-expert-right-icon-circle2">
                    <i class="fa-solid fa-briefcase"></i>
                  </div>
                </div>
                <p>Experienced</p>
              </div>
              <div className="home--local-expert-right-icon">
                <div className="home--local-expert-right-icon-circle1">
                  <div className="home--local-expert-right-icon-circle2">
                    <i class="fa-solid fa-tag"></i>
                  </div>
                </div>
                <p>Competitive price</p>
              </div>
            </div>
            <div className="home--local-expert-right-icons-lower">
              <div className="home--local-expert-right-icon">
                <div className="home--local-expert-right-icon-circle1">
                  <div className="home--local-expert-right-icon-circle2">
                    <i class="fa-solid fa-clock"></i>
                  </div>
                </div>
                <p>On Time</p>
              </div>
              <div className="home--local-expert-right-icon shield">
                <div className="home--local-expert-right-icon-circle1">
                  <div className="home--local-expert-right-icon-circle2">
                    <i class="fa-solid fa-shield"></i>
                  </div>
                </div>
                <p>Best Materials</p>
              </div>
            </div>
          </div>
        </div>
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
            <stop stopColor="#60BBEE" />
            <stop offset="1" stopColor="#2387C0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Localexpert;
