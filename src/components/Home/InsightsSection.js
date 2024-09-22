import React from 'react';
import './styles/InsightsSection.css'; // CSS file for styles

const InsightsSection = () => {
  const insights = [
    {
      title: 'The Future of E-commerce',
      insight: 'E-commerce is rapidly evolving, and staying ahead of the trends is crucial for success.',
      author: 'John Doe',
      date: 'August 10, 2023',
      image: 'path-to-image1.jpg'
    },
    {
      title: 'Designing for User Experience',
      insight: 'A well-designed user experience can make or break a product in the competitive market.',
      author: 'Jane Smith',
      date: 'July 18, 2023',
      image: 'path-to-image2.jpg'
    },
    {
      title: 'How AI is Shaping Business',
      insight: 'Artificial Intelligence is transforming industries by improving efficiency and decision-making.',
      author: 'Alex Johnson',
      date: 'September 5, 2023',
      image: 'path-to-image3.jpg'
    }
  ];

  return (
    <div className="insights-section">
      {/* Section Header and Paragraph */}
      <div className="insights-header">
        <h2>Latest Insights</h2>
        <p>Stay updated with the latest trends and insights from industry experts to keep your business ahead of the curve.</p>
      </div>

      {/* Insight Cards */}
      <div className="insights-cards">
        {insights.map((insight, index) => (
          <div className="insight-card" key={index} style={{ backgroundImage: `url(${insight.image})` }}>
            <div className="insight-content">
              <h3>{insight.title}</h3>
              <p className="insight-text">"{insight.insight}"</p>
              <div className="insight-info">
                <span className="insight-author">- {insight.author}</span>
                <span className="insight-date">{insight.date}</span>
              </div>
              <button className="accent-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;
