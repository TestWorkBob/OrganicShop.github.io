import React from 'react';
import './AboutPage.css'; // Ensure you have the CSS file for styling

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our Organic Shop</h1>
        <p>Learn more about our journey towards sustainable living.</p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>We believe in bringing the freshest and most natural products straight from the farm to your table. Our commitment to organic farming and sustainable practices ensures that every item we sell supports the well-being of both people and the planet.</p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2005, our family-run business has grown from a small local market to a trusted source for organic groceries. We partner with local farmers who share our vision for organic, non-GMO produce and environmentally friendly farming methods.</p>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>
          <p>We're not just a store; we're a part of a global movement for a more sustainable future. From reducing plastic waste to supporting fair trade practices, we're dedicated to making a positive impact every step of the way.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
