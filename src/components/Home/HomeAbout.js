import React from 'react';
import CountUp from 'react-countup';
import './styles/HomeAbout.css'; // assuming you're creating a CSS file for styles
import aboutImage from '../assets/images/trial.jpg'; // Adjust the path as needed

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="about-image">
      <img src={aboutImage} alt="About Us" />
      <div className="counter-section">
      <div className="counter-item">
        <h3>Satisfied Clients</h3>
        <CountUp start={0} end={500} duration={3} />
      </div>
      <div className="counter-item">
        <h3>Expert Teams</h3>
        <CountUp start={0} end={35} duration={3} />
      </div>
      <div className="counter-item">
        <h3>Completed Projects</h3>
        <CountUp start={0} end={120} duration={3} />
      </div>
    </div>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing the best products and services. Our mission is to offer high-quality items that cater to your needs.
        </p>
        <button className="primary-btn">Learn More</button>
      </div>
    </div>
  );
};

export default HomeAbout;
