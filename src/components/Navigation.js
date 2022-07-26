import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" sticky="top">
          <NavLink className="nav-link" to="/">
            <div className="text-light">
              <h4 className="nav-title-font">Alfredo J. Figueroa</h4>
            </div>
          </NavLink>
          <ul className="navbar-nav ml-auto navitem-indent">
            <li className="nav-item">
              <NavLink to="/aboutme">
                <div className="nav-font text-light">About Me</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio">
                <div className="nav-font text-light">Portfolio</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">
                <div className="nav-font text-light">Contact</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume">
                <div className="nav-font text-light">Resume</div>
              </NavLink>
            </li>
          </ul>
        </Navbar>
      </div>
    );
  }
  
  export default Navigation;