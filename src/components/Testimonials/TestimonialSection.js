import React from 'react';
import './Testimonials.css'; // Import CSS for styling

const testimonials = [
  {
    name: 'John Doe',
    date: 'July 15, 2024',
    image: '/path/to/image1.jpg',
    feedback: 'The service was excellent and the team was very responsive. Highly recommend!'
  },
  {
    name: 'Jane Smith',
    date: 'August 5, 2024',
    image: '/path/to/image2.jpg',
    feedback: 'Professional and efficient. I am very satisfied with the results.'
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Read feedback from our satisfied clients.</p>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image" style={{ backgroundImage: `url(${testimonial.image})` }}>
              {/* Placeholder for image */}
            </div>
            <div className="testimonial-details">
              <h3>{testimonial.name}</h3>
              <p><em>{testimonial.date}</em></p>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
