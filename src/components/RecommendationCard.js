import React from 'react';
import '../styles/RecommendationCard.css';

const RecommendationCard = ({ name, type, rating, address }) => {
  return (
    <div className="recommendation-card">
      <div className="card-header">
        <h3 className="business-name">{name}</h3>
        <span className="business-rating">⭐ {rating}</span>
      </div>
      <p className="business-type">{type}</p>
      <p className="business-address">{address}</p>
    </div>
  );
};

export default RecommendationCard;

