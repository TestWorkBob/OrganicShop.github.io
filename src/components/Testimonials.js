import React from 'react';
import './Testimonials.css'; // Make sure to create a CSS file named 'Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    { id: 1, quote: "This is the best purchase I've ever made!", author: 'Jane Doe', role: 'Professional Chef' },
    { id: 2, quote: 'Incredible service and fantastic products. Highly recommend!', author: 'John Smith', role: 'Food Critic' },
    // Add more testimonials as necessary
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="testimonial">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <footer className="testimonial-footer">
                <strong className="testimonial-author">{testimonial.author}</strong>
                <span className="testimonial-role">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
