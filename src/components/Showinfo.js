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
                <h2>
                  A comedic trip down the river with America's greatest writer.
                  Readings, prizes, and silly mustaches. All Ages.
                </h2>
              </div>
              <div>
                <p> Interactive games such as:</p>
              </div>
              <div>
                <p>
                  "7 Degrees of Mark Twain" and "Quotes by Twain or Beyonce?"
                  and "Two Truths and Lie"
                </p>
              </div>
            </div>
            <div className="summary-right">
              <div className="summary1">
                <p>
                  Join Mark Twain and his historic friends for a non-traditional
                  reading of the literary giant's greatest works. With
                  selections from his works LIFE ON THE MISSISSIPPI, ADVENTURES
                  OF HUCKLEBERRY FINN and many more!
                </p>
              </div>
              <div className="summary1">
                <p>
                  Audience members of all ages are welcome to try to stump our
                  slightly scholarly cast and compete for prizes in this high
                  energy and comedic romp into America's most famous humorist."{" "}
                </p>
              </div>
              <div className="summary2">
                <p>
                  With actors from the international touring comedy act MISSION
                  IMPROVable (ENTERTAINER OF THE YEAR and COMEDY ACT OF THE YEAR
                  'campus activities magazine), Award winning Reader from New
                  Orleans WRBH 88.3 FM Radio for the Blind, and one Brazilian
                  banjo player (who has never read Mark Twain until this job)
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
