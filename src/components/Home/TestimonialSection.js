import React from 'react';
import Slider from 'react-slick';
import './styles/TestimonialSection.css'; // CSS file for styles

// Importing images
import image1 from '../assets/images/trial1.jpg';
import image2 from '../assets/images/trial.jpg';


const TestimonialSection = () => {
  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Automatic scroll every 3 seconds
    arrows: false,
  };

  const testimonials = [
    {
      name: 'Alice Smith',
      feedback: 'The service was amazing! Highly recommend to anyone looking for top quality.',
      image: image1, // Using imported image
    },
    {
      name: 'Michael Doe',
      feedback: 'I am very satisfied with my experience. The team is incredibly professional.',
      image: image2, // Using imported image
    },
    {
      name: 'Sarah Lee',
      feedback: 'A wonderful experience from start to finish. Exceeded my expectations.',
      image: image2, // Using imported image
    }
  ];

  return (
    <div className="testimonial-section">
      {/* Section with Header and Paragraph */}
      <div className="testimonial-header">
        <h2>What Our Clients Say</h2>
        <p>Here are some testimonials from our valued clients who experienced our outstanding services.</p>
      </div>

      {/* Testimonials Slider */}
      <div className='testimonial-body'>
      <div className="testimonial-slider">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Images Section */}
      <div className="testimonial-images">
        <img src={image1} alt="Image 1" />
       
      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;
