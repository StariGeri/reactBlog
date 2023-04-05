import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

//navbar component

function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <div className="logoWrapper">
          <Logo />
        </div>
        <ul className="menuWrapper">
          <li>
            <Link to="/" className="menuLink">
              <h2> Posts</h2>
            </Link>
          </li>
          <li>
            <Link to="/Login">
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
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
