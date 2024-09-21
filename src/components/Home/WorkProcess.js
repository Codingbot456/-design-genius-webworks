import React from 'react';
import './styles/WorkProcess.css'; // CSS file for styles

const WorkProcess = () => {
  return (
    <div className="work-process-section">
      {/* Left Section: Header and Paragraph */}
      <div className="work-info">
        <h2>Our Work Process</h2>
        <p>
          We follow a structured approach to ensure high-quality and timely delivery of our projects. Our work process is designed to be efficient and client-focused.
        </p>
      </div>

      {/* Right Section: Work Process Steps */}
      <div className="work-steps">
        <div className="step">
          <h3>1. Planning</h3>
          <p>We start by understanding your needs and creating a detailed project plan.</p>
        </div>

        <div className="step">
          <h3>2. Design</h3>
          <p>Our team creates beautiful and user-friendly designs tailored to your vision.</p>
        </div>

        <div className="step">
          <h3>3. Development</h3>
          <p>We turn the designs into functional products using the latest technologies.</p>
        </div>

        <div className="step">
          <h3>4. Testing</h3>
          <p>We thoroughly test the product to ensure it meets our quality standards.</p>
        </div>

        <div className="step">
          <h3>5. Delivery</h3>
          <p>Once everything is perfect, we deliver the project to you on time.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
