/* eslint-disable no-unused-vars */
import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
          <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTphZDI0ZGJmZC0zNDExLTRjZTctOGJiZC01NDJkYzgyOTg1ZmQ=/bc-logo-dark.svg"/>
        </Link>
      </h1>
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Platform
          </Link>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Solutions
          </a>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Customers
          </a>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Partners
          </a>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="navbar-links">
            Pricing
          </a>
        </li>
      </ul>
      </div>
      <div>
      <button
        className="navbar-btn"
        type="button"
      > Request A Demo
      </button>
      </div>
      
    </div>
    </div>

     
  );
}

export default Navbar;
