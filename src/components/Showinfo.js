import React from "react";
import "./componentCSS/Showinfo.css";

function Showinfo() {
  return (
    <div className="show-background">
      <div className="container">
        <main className="showInfo">
          <div>
            <h2>March 18 - April 22nd</h2>
            <h3>7:00pm ~approx 70 mins~</h3>
          </div>
          <div className="summary">
            <div>
              <p>
                Join Mark Twain and his historic friends for a non-traditional
                reading of the literary giant's greatest works. With selections
                from his works LIFE ON THE MISSISSIPPI, ADVENTURES OF
                HUCKLEBERRY FINN and many more.
              </p>
            </div>
            <div>
              <p>
                Audience members of all ages are welcome to try to stump our
                slightly scholarly cast and compete for prizes in this high
                energy and comedic romp into America's most famous humorist."{" "}
              </p>
            </div>
            <div>
              <p>
                With actors from the international touring comedy act MISSION
                IMPROVable ENTERTAINER OF THE YEAR, COMEDY ACT OF THE YEAR
                'campus activities magazine. Award winning Reader from New
                Orleans WRBH 88.3 FM Radio for the blind and one Brazilian banjo
                player (who has never read Mark Twain till this job)
              </p>
            </div>
          </div>
          <div className="calltoaction">
            <p className="questions">
              We will answer the questions: <span>"Is Twain still funny?</span>{" "}
              <span>Is Twain still relevant?</span>
              <span> Is Twain still alive?"</span>
            </p>
            <p className="questions">
              {" "}
              Interactive games such as: "7 Degrees of Mark Twain" and " Quotes
              by Twain or Beyonce" and "Two Truths and Lie"
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Showinfo;
