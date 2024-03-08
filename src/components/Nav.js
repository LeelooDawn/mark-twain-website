import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./componentCSS/Nav.css";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="nav-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        display: "block",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <div className="container">
        <nav className="nav-container">
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#showinfo");
                }}
                className="nav-link"
              >
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#buytickets");
                }}
                className="nav-link"
              >
                <p>Buy Tickets</p>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#contact");
                }}
                className="nav-link"
              >
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
