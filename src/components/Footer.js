import React from "react";
import "./componentCSS/Footer.css";

function Footer() {
  return (
    <div id="contact" className="footer-background">
      <div className="container">
        <div className="footer-container">
          <div>
            <h3>Contact Us for more information:</h3>
          </div>
          <div>
            Email Director Adam Higgins{" "}
            <a href="mailto:ahiggins56@gmail.com" className="emaillink">
              here
            </a>
          </div>
          <div>Or call us at: 773-678-2890</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
