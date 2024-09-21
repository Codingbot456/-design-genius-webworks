import React from 'react';
import './styles/TeamSection.css'; // CSS file for styles
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Icons for social media

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'Lead Developer',
      image: 'path-to-image1.jpg',
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      name: 'Jane Smith',
      title: 'UI/UX Designer',
      image: 'path-to-image2.jpg',
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Alex Johnson',
      title: 'Project Manager',
      image: 'path-to-image3.jpg',
      facebook: 'https://facebook.com/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson'
    }
  ];

  return (
    <div className="team-section">
      {/* Header and Paragraph */}
      <div className="team-info">
        <h2>Meet Our Team</h2>
        <p>Our team consists of professionals dedicated to delivering top-notch services. Get to know them below.</p>
      </div>

      {/* Team Cards Section */}
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-image" style={{ backgroundImage: `url(${member.image})` }}></div>
            <h3>{member.name}</h3>
            <p className="job-title">{member.title}</p>
            <div className="social-links">
              <a href={member.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
