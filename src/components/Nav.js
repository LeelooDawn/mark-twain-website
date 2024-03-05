import React from "react";
import "./componentCSS/Nav.css";

function Nav() {
  return (
    <div className="nav-background">
      <div className="container">
        <nav className="nav-container">
          <ul className="nav-list">
            <li>Show Time</li>
            <li>Buy Tickets</li>
            <li>Contact Info</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
