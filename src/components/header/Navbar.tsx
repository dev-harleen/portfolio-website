import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand ms-5" href="#">
          HK
        </a>
        <button
          className="navbar-toggler order-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto me-lg-5">
            <NavLink className="nav-item nav-link active me-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link me-5" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link me-5" to="/work">
              Work
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
        <button className="me-md-3 order-1">Theme</button>
      </nav>
    </>
  );
};
