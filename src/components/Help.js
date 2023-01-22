import React from "react";
import Navbar from "./Navbar";
import "../css/Help.css";

const Help = () => {
  return (
    <div className="help-page">
      <Navbar />
      <div className="help-page-image">
        <form className="login--form-help">
          <div className="mb-3">
            <input
              type="email"
              className="form-control login--email"
              id="login-email"
              aria-describedby="emailHelp"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Help;
