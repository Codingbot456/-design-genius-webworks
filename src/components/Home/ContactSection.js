import React from 'react';
import './styles/ContactSection.css'; // CSS file for styles

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-infos">
        
          <h2>Contact Us</h2>
         

          <div className="contact-detailss">
          <p>We'd love to hear from you! Reach out to us through any of the methods below or send us a message directly.</p>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Modern Street, New City, Country</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone"></i>
              <span>+123 456 7890</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <span>info@modernbusiness.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message here" rows="5" required></textarea>
            </div>
            <button type="submit" className="primary-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
