import React from 'react';
import './styles/BackgroundSection.css'; // CSS file for styles
import backgroundImage from '../assets/images/between1.avif'; // Adjust the path to your image

const BackgroundSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // This enables the parallax effect
    height: '400px', // Set the height of the section
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity:.7,
    textAlign: 'center',
    color: 'white', // Text color
    position: 'relative', // Position relative to allow stacking
  };

  return (
    <div className='background-section' style={sectionStyle}>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Explore our features and services.</p>
        <button className="primary-btn">Get Started</button>
      </div>
    </div>
  );
};

export default BackgroundSection;
