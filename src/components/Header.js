import React from "react";
import huckfinn from "../Images/huck finn.jpg";
import mississippi from "../Images/LifeonMississippi.jpg";
import sawyer from "../Images/Tom Sawyer.jpeg";
import frog from "../Images/Jumping Frog.jpeg";
import prince from "../Images/The_Prince_and_the_Pauper.jpeg";
import mark from "../Images/Mark Twain.jpeg";
import "./componentCSS/Header.css";

function Header() {
  return (
    <div className="header-background">
      <div className="container">
        <header className="header-container">
          <divc className="bookImages">
            <div>
              <img
                src={huckfinn}
                alt="Huckleberry Finn Book Cover"
                width="150px"
                height="200px"
              />
            </div>
            <div>
              <img
                src={mississippi}
                alt="Life on the Mississippi Book Cover"
                width="150px"
                height="200px"
              />
            </div>
            <div>
              <img
                src={sawyer}
                alt="Tom Sawyer Book Cover"
                width="150px"
                height="200px"
              />
            </div>
            <div>
              <img
                src={frog}
                alt="The Celebrated Jumping Frog and A Curious Dream Book Cover"
                width="150px"
                height="200px"
              />
            </div>
            <div>
              <img
                src={prince}
                alt="The Prince and The Pauper Book Cover"
                width="150px"
                height="200px"
              />
            </div>
          </divc>
          <div>
            <h1>
              M<span>ARK</span> T<span>WAIN</span> M<span>ONDAYS</span>
            </h1>
          </div>
          <div className="questions">
            <h4>
              "Is Twain still funny? Is Twain still relevant? Is Twain still
              alive?"
            </h4>
          </div>
          <div className="markTwain">
            <img src={mark} alt="Illustration of Mark Twain" />
            <div className="dates">
              <h2>March 18 - April 22, 2024</h2>
              <h3>7:00pm</h3>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
