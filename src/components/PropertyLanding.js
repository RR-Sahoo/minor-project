import React from "react";
import Navbar from "./Navbar";
import "../css/property-landing.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LoanCalculator from "./LoanCalculator";
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
        <div className="price-breakdown">
          <div className="header">
            <h1>Price Breakdown</h1>
          </div>
          <div className="left-side">
            <h3>Total Breakdown</h3>
            <div className="price-division">
              <div className="price-card">
                <h3>Base Price</h3>
                <div className="price-amount">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <p>36,00,000</p>
                </div>
              </div>
              <div className="price-card">
                <h3>Taxes & Legal Duties</h3>
                <div className="price-amount">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <p>40,000</p>
                </div>
              </div>
            </div>
            <div className="total-price">
              <h3>Total</h3>
              <div className="price-amount">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p>36,40,000</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <LoanCalculator/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyLanding;
