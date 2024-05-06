/* eslint-disable no-unused-vars */
import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbaress() {
  return (
    <div className="mainNavdiv">

      <div className="firstnavsection">
          <div className="firstnavleft">
            <a href="/"><h1 className="enterprises">ENTERPRISES</h1></a>
            <a href="/Services"><h1 className="essentials">ESSENTIALS</h1></a>
          </div>
          <div className="firstnavright">
            <a href="#">Call Sales: 9872347645</a>
            <a href="#">Help Center</a>
            <a href="/login">Login</a>
          </div>
      </div>
    <div className="navbar-section">

    <div>
      <h1 className="navbar-title">
        <Link to="/">
          <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3NGRlM2Y5YS02N2JjLTRjMTktODJhOS1mYzhlYmRiZGE2YzE=/essentials-color.svg"/>
        </Link>
      </h1>
      <ul className="navbar-items">
        <li>
          <Link to="#" className="navbar-links">
            Pricing
          </Link>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Resources
          </a>
        </li>
      </ul>
      </div>
      <div>
      <button
        className="navbar-btn"
        type="button"
      > Get Started
      </button>
      </div>
      
    </div>
    </div>

     
  );
}

export default Navbaress;
