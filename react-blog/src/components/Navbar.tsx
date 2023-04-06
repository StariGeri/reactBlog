import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./componentStyles/Navbar.css";

function Navbar() {
  return (
    <section className="navbarSection">
      <div className="navbarCurve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shapeFillTop"></path>
        </svg>
      </div>
      <nav>
        <div className="navContainer">
          <div className="logoWrapper">
            <Logo />
          </div>
          <ul className="menuWrapper">
            <li>
              <NavLink to="/" className="menuLink">
                <h2> Posts</h2>
              </NavLink>
            </li>
            <li className="svgMenu">
              <NavLink to="/Login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="adminSvg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
