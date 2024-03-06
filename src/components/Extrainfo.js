import React from "react";
import mulemeat from "../Images/mulemeat.jpg";
import "./componentCSS/Extrainfo.css";

function Extrainfo() {
  return (
    <div className="extra-background">
      <div className="container">
        <div className="extra-container">
          <div className="extra-grid">
            <div className="discounts">
              <h3>Looking for Discounts?</h3>
              <p>
                All tickets will be discounted $2 if you bring in a new or used
                kids book to be donated to the New Orleans Little Free Library
              </p>
              <p>Discount tickets for school groups of 8 or more</p>
            </div>
            <div>
              <img
                src={mulemeat}
                alt="Illustration of three people from a Mark Twain book"
                width="300px"
              />
            </div>
            <div className="pleasenote">
              <h3>Please Note:</h3>
              <p>
                Tickets to MARK TWAIN MONDAYS <strong>do not guarantee</strong>{" "}
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
