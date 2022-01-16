import React, { useState } from "react";

import HamburgerIcon from "../assets/hamburger-icon.svg";
import { InView } from "react-intersection-observer";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo-title">
          <a className="nav-link" href="/">
            The Burger Center
          </a>
        </h1>
        <ul>
          <li>
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <HamburgerIcon
          className="hamburger-icon"
          onClick={() => {
            setShowMobileNav(true);
          }}
        />
      </nav>
      {showMobileNav && (
        <div className={`mobile-nav fade-in-left`}>
          <button
            className="close-mobile-nav"
            onClick={() => {
              setShowMobileNav(false);
            }}
          >
            &times;
          </button>
          <ul className="mobile-nav-ul">
            <li>
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Menu
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
