import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer';
import RecommendationCard from '../components/RecommendationCard';
import BusinessChart from '../components/BusinessChart';
import puneData from '../data/puneData';
import '../styles/App.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      <section className="intro-section">
        <h2>Explore Pune’s Top Local Businesses</h2>
        <p>Handpicked recommendations across food, fashion, entertainment, and more!</p>
      </section>

      <BusinessChart />

      <section className="recommendation-section">
        <h2>Top Recommendations</h2>
        <div className="card-list">
          {puneData.map((biz) => (
            <RecommendationCard
              key={biz.id}
              name={biz.name}
              type={biz.type}
              rating={biz.rating}
              address={biz.address}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
