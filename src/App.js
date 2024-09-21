import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from './components/Navbar/Navbar';  // Import the Navbar
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';  // Import the AboutPage
import Service from './pages/Service';
import TestimonialPage from './pages/TestimonialPage';
import NotFound from './pages/NotFound'; // Optional: a page for handling 404 errors

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />  // Add more routes as needed. For example:
          <Route path="/services" element={<Service />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="*" element={<NotFound />} /> {/* Optional: handles undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
