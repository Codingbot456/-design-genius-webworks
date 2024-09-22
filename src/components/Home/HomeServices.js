import React from 'react';
import './styles/HomeServices.css'; // CSS file for styles

// Import the images
import image1 from '../assets/images/trial1.jpg';
import image2 from '../assets/images/trial1.jpg';
import image3 from '../assets/images/trial.jpg';

const HomeServices = () => {
  return (
    <div 
      className="home-services"
    >
      {/* Services Info Section */}
      <div className="services-info">
        <h2>Our Services</h2>
        <p>
          We offer a range of services to meet your needs. Explore what we provide and how we can assist you in achieving your goals.
        </p>
      </div>

      {/* Services Offered Section */}
      <div className="services-offered">
        <div className="service-card">
          <div className="service-bg" style={{ backgroundImage: `url(${image1})` }}></div>
          <div className='services-info'>
            <h1>Web-development</h1>
            <p>Lorem 10</p>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-bg" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className='services-info'>
            <h1>Web-development</h1>
            <p>Lorem 10</p>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-bg" style={{ backgroundImage: `url(${image3})` }}></div>
          <div className='services-info'>
            <h1>Web-development</h1>
            <p>Lorem 10</p>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
