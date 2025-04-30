import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>💻 MERN Stack Course | All Rights Reserved | © 2025</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon">Facebook</a>
          <a href="https://twitter.com" className="social-icon">Twitter</a>
          <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
