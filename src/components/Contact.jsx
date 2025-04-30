import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      
      <div className="contact-details">
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>Amsterdam</p>
        </div>

        <div className="contact-info">
          <h3>Phone</h3>
          <p>+31686371240</p>
        </div>

        <div className="contact-info">
          <h3>Email</h3>
          <p><a href="mailto:info@merntech.com">wediabrhana@gmail.com</a></p>
        </div>

        <div className="contact-info">
          <h3>Social Media</h3>
          <p>
            <a href="https://www.facebook.com/dawit.abrha.900" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://www.linkedin.com/in/dawit-abrha-weldegebriel-208835127/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
