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
              <h3>This Show is Fundraising For:</h3>
              <p>
                ACLU, Kickstand Comedy, Center For Reproductive Rights, Union of
                Concerned Scientist, Brown Girl Rise, and O.W.L: Our Whole
                Lives.
              </p>
            </div>
            <div>
              <img
                src={mulemeat}
                alt="Illustration of three people from a Mark Twain book"
                width="300px"
              />
            </div>
            <div className="pleasenote">
              <h3>ART MARKET at Intermissions</h3>
              <p>
                Featuring: NW DIVA, Random Acts of Color, Aspen Pirate Art,{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extrainfo;
