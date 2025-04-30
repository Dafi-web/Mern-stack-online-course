import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://github.com/Dafi-web/assignment/blob/main/WhatsApp%20Image%202025-03-29%20at%2015.15.31%20(2).jpeg?raw=trues" alt="" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><HashLink to="/payment">Payment</HashLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
