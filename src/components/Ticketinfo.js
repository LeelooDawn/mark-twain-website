import React from "react";
import ShowCalendar from "./ShowCalendar";
import "./componentCSS/Ticketinfo.css";

function Ticketinfo() {
  return (
    <div id="buytickets" className="ticket-background">
      <div className="container">
        <div className="about">
          <h2>Ticket Information</h2>
          <div className="ticket-container">
            <div>
              <ShowCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticketinfo;
