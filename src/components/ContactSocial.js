import React from 'react';
import './ContactSocial.css'; // Ensure you have the CSS file for styling

const ContactSocial = () => {
  return (
    <section id="contact-social" className="contact-social-section">
      <div className="container">
        <h2 className="section-title">Contact & Follow Us</h2>
        <div className="contact-details">
          <p>Email: <a href="mailto:info@ourstore.com" className="contact-link">info@ourstore.com</a></p>
          <p>Phone: <a href="tel:+11234567890" className="contact-link">(123) 456-7890</a></p>
        </div>
        <div className="social-media-links">
          {/* Example social media links with PNG icons */}
          <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src="/icons/icons8-facebook-48.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src="/icons/icons8-twitter-48.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src="/icons/icons8-instagram-48.png" alt="Instagram" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
