import React from 'react';
import './payment.css';

function Payment() {
  return (
    <div className="payment-container" id="payment">
      <h2 className="payment-title">📚 Course Payment Options</h2>
      <p className="payment-subtitle">
        Please pay to the account below and submit your receipt using our online application form.
      </p>

      <div className="bank-details">
        <h3>💳 Bank Payment Info</h3>
        <p><strong>Bank Name:</strong> Commercial Bank of Ethiopia</p>
        <p><strong>Account Name:</strong> MERN Tech Academy</p>
        <p><strong>Account Number:</strong> 1000080478082</p>
        <p><strong>Name:</strong>Brhane Abrha</p>
        <p><strong>Branch:</strong> Any Branch</p>
      </div>

      <div className="payment-grid">

        <div className="payment-card">
          <h3>💻 Full Stack (MERN)</h3>
          <p className="price">ETB 40,000</p>
          <ul>
            <li>Frontend + Backend</li>
            <li>Projects & Job Support</li>
          </ul>
          <p className="option">Monthly: ETB 10,000 x 4</p>
        </div>

        <div className="payment-card">
          <h3>🎨 Frontend Only</h3>
          <p className="price">ETB 20,000</p>
          <ul>
            <li>React, HTML, CSS</li>
            <li>UI/UX Design</li>
          </ul>
          <p className="option">Monthly: ETB 5000 x 4</p>
        </div>

        <div className="payment-card">
          <h3>⚙️ Backend Only</h3>
          <p className="price">ETB 26,000</p>
          <ul>
            <li>Node.js, MongoDB</li>
            <li>API Development</li>
          </ul>
          <p className="option">Monthly: ETB 6,500 x 4</p>
        </div>

        <div className="payment-card">
          <h3>📘 Tutoring Only</h3>
          <p className="price">ETB 10,000</p>
          <ul>
            <li>1-on-1 Mentorship</li>
            <li>Weekly Live Sessions</li>
          </ul>
          <p className="option">Monthly: ETB 2,500 x 4</p>
        </div>
      </div>

      <div className="apply-box">
        <h3>📝 Submit Your Application</h3>
        <p>
          After payment, click below to open the application form and upload your receipt.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScNtJ9R70O-mvo3jvhrbanG21Eyi1-4gvWlDmrsLh35I2Y7rQ/viewform?usp=dialog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="apply-button"
        >
          Go to Application Form
        </a>
      </div>
    </div>
  );
}

export default Payment;
