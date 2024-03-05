import React from "react";
import mulemeat from "../Images/mulemeat.jpg";
import "./componentCSS/Extrainfo.css";

function Extrainfo() {
  return (
    <div className="extra-background">
      <div className="container">
        <div className="extra-container">
          <div className="extra-grid">
            <div>
              <p>
                All tickets will be discounted $2 by bringing in a new or used
                kids book to be donated to New Orleans Little Free Library
                Discount tickets for school groups of 8 or more
              </p>
            </div>
            <div>
              <img
                src={mulemeat}
                alt="Illustration of three people from a Mark Twain book"
                width="300px"
              />
            </div>
            <div>
              <p>
                *Please note tickets to MARK TWAIN MONDAYS do not guarantee
                dinner reservations at the restaurant CARMO, our generous host.
                Please make dinner reservations at{" "}
                <a href="www.cafecarmo.com">www.cafecarmo.com</a> before or
                after the performance. There will be a cocktail and show menu
                available during performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extrainfo;
