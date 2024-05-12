import React, { useState } from 'react';
import './NewsletterSignup.css'; // Make sure to create a CSS file with the name 'NewsletterSignup.css'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!'); // Placeholder for actual signup logic
    setEmail(''); // Reset the email field after submission
  };

  return (
    <section id="newsletter-signup" className="newsletter-signup">
      <div className="container">
        <h2 className="newsletter-title">Stay Updated!</h2>
        <p className="newsletter-text">Get the latest news and exclusive offers straight to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
