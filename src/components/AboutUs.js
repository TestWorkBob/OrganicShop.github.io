import React from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBalanceScale, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Welcome to [Your Store Name], the place where passion meets excellence to create the products you love. Founded in [Year], our mission has been to deliver quality and innovation hand-in-hand with sustainable practices. As a family-owned business, we understand the value of tradition, but we're also committed to embracing the future. Whether you're looking for [Product Type], [Another Product Type], or anything in between, you've come to the right place. Join us on our journey, where every purchase is a step towards a brighter tomorrow.
        </p>
        <div className="about-us-highlights">
          <div className="highlight">
            <FontAwesomeIcon icon={faBookOpen} size="3x" />
            <h3>Our Story</h3>
            <p>Discover the roots of our brand and the milestones that have shaped us.</p>
          </div>
          <div className="highlight">
            <FontAwesomeIcon icon={faBalanceScale} size="3x" />
            <h3>Our Values</h3>
            <p>Find out what matters to us and how we ensure our values align with our actions.</p>
          </div>
          <div className="highlight">
            <FontAwesomeIcon icon={faLeaf} size="3x" />
            <h3>Sustainability</h3>
            <p>Learn about our commitment to the environment and how we're making a difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
