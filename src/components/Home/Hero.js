import React from 'react';
import Slider from 'react-slick';
import './styles/Hero.css';
import SubHero from './SubHero';

// Import images
import slide1 from '../assets/images/trial.jpg';
import slide2 from '../assets/images/trial1.jpg';
import slide3 from '../assets/images/trial.jpg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      title: "Welcome to Our Store",
      description: "Discover the best products at unbeatable prices.",
      buttonText: "Shop Now",
      image: slide1, // Store the image path directly
    },
    {
      title: "Latest Collection",
      description: "Check out our latest arrivals in all categories.",
      buttonText: "Explore",
      image: slide2,
    },
    {
      title: "Exclusive Discounts",
      description: "Don't miss out on our special offers and discounts.",
      buttonText: "Get Deals",
      image: slide3,
    },
  ];

  return (
    <div>
    <div className="hero-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-content">
            <img src={slide.image} alt={slide.title} className="slide-image" /> {/* Add image here */}
            <div className="slide-content1">
              <div className='content-2'>
                 
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="primary-btn">{slide.buttonText}</button>

                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <SubHero /> {/* Add SubHero component here */}
    </div>
  );
};

export default Hero;
