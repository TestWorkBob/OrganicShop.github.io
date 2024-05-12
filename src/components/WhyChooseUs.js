// WhyChooseUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faStar, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.css'; // Make sure to create an accompanying CSS file for styling.

function WhyChooseUs() {
  return (
    <div className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why Choose Us</h2>
        <div className="values">
          <div className="value-item">
            <FontAwesomeIcon icon={faSeedling} className="value-icon" />
            <h3>Eco Friendly</h3>
            <p>We are committed to sustainability and ensure that all our products are eco-friendly.</p>
          </div>
          <div className="value-item">
            <FontAwesomeIcon icon={faStar} className="value-icon" />
            <h3>Top Quality</h3>
            <p>Our products are sourced from the best suppliers and undergo rigorous quality checks.</p>
          </div>
          <div className="value-item">
            <FontAwesomeIcon icon={faHeadset} className="value-icon" />
            <h3>Excellent Support</h3>
            <p>Our customer support team is here to help you with any queries or issues you may have.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
