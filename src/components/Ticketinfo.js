import React from "react";
import huckfinn from "../Images/huckleberryBW.jpeg";
import cards from "../Images/handswithcards.jpg";
import "./componentCSS/Ticketinfo.css";

function Ticketinfo() {
  return (
    <div className="ticket-background">
      <div className="container">
        <div className="about">
          <div className="ticket-info">
            <div>
              <img
                src={huckfinn}
                alt="Huckleberry Finn Illustration"
                width="300px"
              />
            </div>
            <div>
              <div>
                <h3>Carmo Restaurant</h3>
                <p>Cinema Room 527</p>
                <p>Julia St. New Orleans, LA 70130</p>
              </div>
              <div>
                <h3>Ticket Information</h3>
                <ul>
                  <li>$19 - Adults</li>
                  <li>$17 - Seniors</li>
                  <li>$10 - Kids under 13</li>
                </ul>
                <p>Purchase Tickets Here!</p>
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
