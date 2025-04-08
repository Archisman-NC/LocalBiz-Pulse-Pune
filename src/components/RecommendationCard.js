import React from 'react';
import '../styles/components.css';

const RecommendationCard = ({ name, type, rating, address }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Rating:</strong> {rating} ★</p>
      <p className="address">{address}</p>
    </div>
  );
};

export default RecommendationCard;
