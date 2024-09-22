import React from 'react';
import './styles/Success.css'; // CSS file for styles

const Success = () => {
  return (
    <div className="success-section">
      {/* Video Section */}
  
      {/* Progress Section */}
      <div className="progress-section">
        <h2>Our Achievements</h2>
        <p>We have excelled in various services and consistently delivered successful projects.</p>


<div>

  <div className='leading'>
    <ul>
    <li>Developing a good relationship with our customers</li>
    <li>Developing a good relationship with our customers</li>
    <li>Developing a good relationship with our customers</li>
    <li>Developing a good relationship with our customers</li>
    <li>Developing a good relationship with our customers</li>
  </ul>
    
  </div>
<div className="progress-bar">
          <p>Web Development</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: "90%" }}>90%</div>
          </div>
        </div>

        <div className="progress-bar">
          <p>Mobile App Development</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: "85%" }}>85%</div>
          </div>
        </div>

        <div className="progress-bar">
          <p>UI/UX Design</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: "95%" }}>95%</div>
          </div>
        </div>

        <div className="progress-bar">
          <p>SEO & Marketing</p>
          <div className="progress">
            <div className="progress-fill" style={{ width: "80%" }}>80%</div>
          </div>
        </div>
</div>
        
      </div>

      <div className="video-section">
        <video width="100%" controls>
          <source src="path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default Success;
