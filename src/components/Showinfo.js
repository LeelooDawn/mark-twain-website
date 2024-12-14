import React from "react";
import "./componentCSS/Showinfo.css";

function Showinfo() {
  return (
    <div id="showinfo" className="show-background">
      <div className="container">
        <main className="showInfo">
          <div className="summary">
            <div className="summary-left">
              <div>
                <h2>TWO BY TWO: Improv Comedy Duos</h2>
              </div>
              <div>
                <h3> Starring:</h3>
              </div>
            </div>
            <div className="summary-right">
              <div className="summary1">
                <p>
                  Join Mark Twain and his friends for Two By Two: Improv Comedy
                  Duos. With music stylings from: Ted Matthews.{" "}
                  <p>Friday, December 27th at 7pm and 9pm</p>{" "}
                  <p>Saturday December 28th at 7pm and 9pm</p>
                </p>
              </div>
              <div className="summary1">
                <p>
                  Friday Improv Duos Include: BULK F I S H, Uncle Trouble, Help
                  Yourself, and Rustic Justice.{" "}
                </p>
              </div>
              <div className="summary2">
                <p>
                  Saturday Improv Duos Include: Moist Splendour, Rustic Justice,
                  B&B, and Uncle Trouble.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Showinfo;
