import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-menu">
          <li className="footer-item">
            {/* <NavLink to="/OOF" className="footer-links">
              Play With The Square
            </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
