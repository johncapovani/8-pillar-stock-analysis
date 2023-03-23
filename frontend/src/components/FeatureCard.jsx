import React from 'react';
import '../components_css/FeatureCard.css';

function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <img src={icon}
        class="category-icon"></img>
      <h1>{title}</h1>
      <p className='feature-description'>{description}</p>
    </div>

  );
}

export default FeatureCard;
