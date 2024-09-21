import React from 'react';
import './styles/HomeServices.css'; // CSS file for styles

const HomeServices = () => {
  return (
    <div className="home-services">
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
          <div className="service-bg" style={{ backgroundImage: "url('path-to-your-image1.jpg')" }}></div>
          <button className="secondary-btn">Learn More</button>
        </div>

        <div className="service-card">
          <div className="service-bg" style={{ backgroundImage: "url('path-to-your-image2.jpg')" }}></div>
          <button className="secondary-btn">Learn More</button>
        </div>

        <div className="service-card">
          <div className="service-bg" style={{ backgroundImage: "url('path-to-your-image3.jpg')" }}></div>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
