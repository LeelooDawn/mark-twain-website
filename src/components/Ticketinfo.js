import React from "react";
import huckfinn from "../Images/huckleberryBW.jpeg";
import cards from "../Images/handswithcards.jpg";
import "./componentCSS/Ticketinfo.css";

function Ticketinfo() {
  return (
    <div id="buytickets" className="ticket-background">
      <div className="container">
        <div className="about">
          <h2>Ticket Information</h2>
          <div className="ticket-container">
            <div className="huckfinn">
              <img
                src={huckfinn}
                alt="Huckleberry Finn Illustration"
                width="300px"
              />
            </div>
            <div className="info-container">
              <div>
                <script
                  id="fw_script"
                  src="https://fourthwalltickets.com/embed.js?v=6"
                  data-theatre="marktwainmondays"
                  data-type="shows"
                  data-view="calendar"
                ></script>
              </div>
              <div>
                <script
                  id="fw_script"
                  src="https://fourthwalltickets.com/embed.js?v=5"
                  data-theatre="marktwainmondays"
                  data-type="shows"
                  data-view="cards"
                ></script>
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
