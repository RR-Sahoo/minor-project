import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar--logo">
        <svg
          width="33"
          height="35"
          viewBox="0 0 73 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.8474 28.7903L72.1805 36.1319L67.1 41.2181L36.0902 10.1726L5.08043 41.2181L0 36.1319L36.0902 0L55.2617 19.1935V9.59677H64.8474V28.7903ZM36.0902 16.9863L64.8474 45.7286V74.375H7.33307V45.7286L36.0902 16.9863ZM45.6759 69.5766V45.5847H26.5045V69.5766H45.6759Z"
            fill="url(#paint0_linear_115_73)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_115_73"
              x1="36.0902"
              y1="0"
              x2="36.0902"
              y2="74.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6EEE40" />
              <stop offset="0.617708" stop-color="#52C9A6" />
              <stop offset="0.8625" stop-color="#52C9A6" />
            </linearGradient>
          </defs>
        </svg>
        <h1>TheHome</h1>
      </div>
      <div className="navbar--buttons">
        <div className="navbar--links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/localities">
              <li>Localities</li>
            </Link>
            <Link href="">
              <li>Developers</li>
            </Link>
          </ul>
        </div>
        <div className="navbar--hamburg">
          <a href="/">
            <svg
              width="23"
              height="20"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="28.5"
                y2="1.5"
                stroke="#545454"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="1.5"
                y1="13.5"
                x2="28.5"
                y2="13.5"
                stroke="#545454"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="1.5"
                y1="25.5"
                x2="28.5"
                y2="25.5"
                stroke="#545454"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
