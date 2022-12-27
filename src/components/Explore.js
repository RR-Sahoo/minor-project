import React, { useState } from "react";
import "../css/explore.css";
function Explore() {
  let [count, setCount] = useState(0);
  function incrementCount(event) {
    count = count + 1;
    setCount(count);
    event.preventDefault();
  }
  function decrementCount(event) {
    count = count - 1;
    setCount(count);
    event.preventDefault();
  }
  return (
    <div className="home--explore">
      <h1 className="home--explore-title">Explore Exclusive Access</h1>
      <form className="home--explore-form">
        
      </form>
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

export default Explore;
