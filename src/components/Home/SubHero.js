import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './styles/SubHero.css'; // For styling

const SubHero = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <div className="service-item">
          <FontAwesomeIcon icon={faPaintBrush} className="service-icon" />
          <div className='service-item-1'>
          <p>Design</p>
          <p1>Modern Design</p1>
         
          </div>
        
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faCode} className="service-icon" />
          <div className='service-item-1'>
          <p>Development</p>
         
          </div>
        </div>

        <div className="service-item">
          <FontAwesomeIcon icon={faBullhorn} className="service-icon" />
          <div className='service-item-1'>
          <p>Marketing</p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
