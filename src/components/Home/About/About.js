import React from 'react';
import './About.css'; // Import CSS for styling

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-header">
        <h2>About Us</h2>
        <p>Discover who we are, our vision, mission, and core values.</p>
      </div>
      
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="/path/to/about-us-image.jpg" alt="About Us" />
        </div>

        <div className="about-us-info">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              Our vision is to be the leading provider of innovative solutions that empower businesses to thrive in the digital world. We aim to set the standard for excellence, leveraging cutting-edge technology and creative strategies to drive success and foster growth.
            </p>
          </div>
          
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver high-quality, customized services that meet the unique needs of our clients. We are committed to providing exceptional value through our expertise in technology, marketing, and design. By fostering strong partnerships and focusing on customer satisfaction, we strive to exceed expectations and contribute to our clients' success.
            </p>
          </div>

          <div className="core-values">
            <h3>Our Core Values</h3>
            <ul>
              <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our interactions.</li>
              <li><strong>Innovation:</strong> We embrace creativity and new ideas to solve challenges and drive progress.</li>
              <li><strong>Excellence:</strong> We are dedicated to delivering superior results and exceeding expectations.</li>
              <li><strong>Customer Focus:</strong> We prioritize our clients' needs and work collaboratively to achieve their goals.</li>
              <li><strong>Respect:</strong> We value diversity and treat everyone with fairness and consideration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
