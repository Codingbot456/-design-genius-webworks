import React from 'react';
import './Services.css'; // Import CSS for styling

const services = [
  {
    category: 'Website Design and Development',
    services: [
      'Custom Website Design',
      'Responsive Design',
      'E-commerce Development',
      'Content Management Systems (CMS)',
      'Front-end Development',
      'Back-end Development',
    ],
  },
  {
    category: 'Web Hosting and Domain Services',
    services: [
      'Web Hosting',
      'Domain Registration',
      'Domain Management',
      'SSL Certificates',
    ],
  },
  {
    category: 'Website Maintenance and Support',
    services: [
      'Regular Updates',
      'Bug Fixes',
      'Performance Monitoring',
      'Backup Services',
    ],
  },
  {
    category: 'Search Engine Optimization (SEO)',
    services: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO'],
  },
  {
    category: 'Digital Marketing',
    services: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click (PPC) Advertising',
      'Analytics and Reporting',
    ],
  },
  {
    category: 'UX and UI Design',
    services: ['UX Research', 'UI Design', 'Wireframing and Prototyping'],
  },
  {
    category: 'Application Development',
    services: ['Web Applications', 'Mobile Applications', 'API Integration'],
  },
  {
    category: 'Content Creation and Management',
    services: [
      'Copywriting',
      'Blog Management',
      'Graphic Design',
      'Video Production',
      'Photography',
      'Illustration',
    ],
  },
  {
    category: 'Security Services',
    services: [
      'Website Security Audits',
      'Malware Removal',
      'Firewall Protection',
      'Cybersecurity Training',
      'Incident Response and Recovery',
    ],
  },
  {
    category: 'Consulting and Strategy',
    services: [
      'Digital Strategy',
      'Brand Strategy',
      'Market Research',
      'Competitor Analysis',
      'Business Intelligence',
    ],
  },
  {
    category: 'Data Science and Analytics',
    services: [
      'Data Analysis and Visualization',
      'Predictive Analytics',
      'Machine Learning',
      'Data Integration',
      'A/B Testing and Optimization',
      'Data Mining',
    ],
  },
  {
    category: 'Graphic Design',
    services: [
      'Logo Design',
      'Branding and Identity',
      'Print Design (brochures, business cards)',
      'Infographics',
      'User Interface (UI) Design',
    ],
  },
  {
    category: 'Marketing',
    services: [
      'Content Strategy',
      'Influencer Marketing',
      'Conversion Rate Optimization (CRO)',
      'Affiliate Marketing',
      'Public Relations',
      'Marketing Automation',
    ],
  },
  {
    category: 'Additional Services',
    services: [
      'Accessibility Services (WCAG compliance)',
      'Localization and Translation',
      'Training and Workshops',
      'CRM Integration',
      'Event and Webinar Management',
      'Cloud Services (AWS, Azure)',
    ],
  },
];

const specializations = [
  {
    title: 'Website Design and Development',
    description: 'Expert in crafting visually appealing and highly functional websites tailored to your business needs.',
    imageUrl: '/path/to/design-image.jpg',
  },
  {
    title: 'Digital Marketing',
    description: 'Specialized in driving targeted traffic and increasing brand visibility through various digital marketing strategies.',
    imageUrl: '/path/to/marketing-image.jpg',
  },
  // Add more specializations as needed
];

const ServicesSection = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>We offer a wide range of professional services to meet your needs.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image" style={{ backgroundImage: `url(/path/to/image${index}.jpg)` }}>
                {/* Placeholder for background image */}
              </div>
              <div className="service-details">
                <h3>{service.category}</h3>
                <ul>
                  {service.services.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations-section">
        <div className="specializations-header">
          <h2>What We Specialize In</h2>
          <p>Our expertise lies in these key areas to deliver exceptional results.</p>
        </div>

        <div className="specializations-grid">
          {specializations.map((spec, index) => (
            <div className="specialization-card" key={index}>
              <div className="specialization-image" style={{ backgroundImage: `url(${spec.imageUrl})` }}>
                {/* Placeholder for background image */}
              </div>
              <div className="specialization-details">
                <h3>{spec.title}</h3>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
