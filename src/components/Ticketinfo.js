import React from "react";
import huckfinn from "../Images/huckleberryBW.jpeg";
import cards from "../Images/handswithcards.jpg";
import "./componentCSS/Ticketinfo.css";

function Ticketinfo() {
  return (
    <div id="buytickets" className="ticket-background">
      <div className="container">
        <div className="about">
          <h2>Where is the show?</h2>
          <div className="ticket-container">
            <div className="huckfinn">
              <img
                src={huckfinn}
                alt="Huckleberry Finn Illustration"
                width="300px"
              />
            </div>
            <div className="info-container">
              <div className="restaurantinfo">
                <h3>Carmo Restaurant</h3>
                <p>Cinema Room 527</p>
                <p>Julia St. New Orleans, LA 70130</p>
              </div>
              <div className="ticketinformation">
                <h3>Ticket Information</h3>
                <ul>
                  <li>$19 - Adults</li>
                  <li>$17 - Seniors/Students</li>
                  <li>$10 - Kids under 13</li>
                </ul>
              </div>
              <div>
                <button>Tickets Coming Soon</button>
              </div>
            </div>
            <div>
              <img
                src={cards}
                alt="illustration of a hand holding playing cards"
                width="250px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticketinfo;
