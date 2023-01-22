import React from "react";
import Navbar from "./Navbar";
import "../css/property-landing.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function PropertyLanding() {
  return (
    <>
      <Navbar />
      <div className="property-landing">
        <div className="details">
          <div className="left-side">
            <h2>Rashmi</h2>
            <h3>Imperial Heights</h3>
            <div className="Type">
              <img src={require("../Images/Bed-icon.png")} alt="Bed-icon" />
              <h3>3 BHK</h3>
              <div className="tag">
                <p>Compact</p>
              </div>
            </div>
            <div className="size">
              <img src={require("../Images/size-icon.png")} alt="map-icon" />
              <p>1200 Sq. Ft.</p>
            </div>
            <div className="price">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>45 Lakhs</p>
            </div>
          </div>
          <div className="right-side">
            <img src={require("../Images/landing-image.png")} alt="" />
          </div>
        </div>
        <div className="rooms">
          <div className="room">
            <h1>4</h1>
            <p>Bedrooms</p>
          </div>
          <div className="room">
            <h1>2</h1>
            <p>Bathrooms</p>
          </div>
          <div className="room">
            <h1>1</h1>
            <p>Balcony</p>
          </div>
        </div>
        <div className="image-slide">
          <Zoom
            indicators
            onChange={function noRefCheck() {}}
            onStartChange={function noRefCheck() {}}
            scale={1.4}
          >
            <div
              style={{
                width: "900px",
                height: "500px",
              }}
            >
              <img
                style={{
                  width: "900px",
                  height: "700px",
                }}
                alt="Slide Image"
                src={require("../Images/Slide1.jpg")}
              />
            </div>
            <div
              style={{
                width: "900px",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "900px",
                  height: "700px",
                }}
                alt="Slide Image"
                src={require("../Images/Slide2.jpg")}
              />
            </div>
            <div
              style={{
                width: "900px",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "900px",
                  height: "700px",
                }}
                alt="Slide Image"
                src={require("../Images/Slide3.jpg")}
              />
            </div>
            <div
              style={{
                width: "900px",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "900px",
                  height: "700px",
                }}
                alt="Slide Image"
                src={require("../Images/Slide4.jpg")}
              />
            </div>
            <div
              style={{
                width: "900px",
                height: "700px",
              }}
            >
              <img
                style={{
                  width: "900px",
                  height: "700px",
                }}
                alt="Slide Image"
                src={require("../Images/Slide5.jpg")}
              />
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
}

export default PropertyLanding;
