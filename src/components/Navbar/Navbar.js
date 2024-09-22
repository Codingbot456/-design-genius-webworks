import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaTwitter, FaFacebook, FaBars } from 'react-icons/fa';
import './Navbar.css'; // Add your styles here
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-section">
        <div className="logo">
        <img src={logo} alt="Company Logo" />
</div>

          <div className="contact-info">
            <div><FaPhoneAlt className='icon' /> Call Us: +123456789</div>
            <div><FaEnvelope  className='icon' /> Email: info@example.com</div>
            <div><FaMapMarkerAlt className='icon' /> Location: City, Country</div>
            <span className="social-icons">
              <FaYoutube />
              <FaTwitter />
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className="navbar-links">
          <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#samples">Samples</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><input type="text" placeholder="Search..." /></li>
          </ul>
          <FaBars className="hamburger" onClick={toggleSidebar} />
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="#samples">Samples</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
