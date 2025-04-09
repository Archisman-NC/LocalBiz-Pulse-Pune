import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecommendationCard from '../components/RecommendationCard';
import BusinessChart from '../components/BusinessChart';
import MapComponent from '../components/MapComponent';
import puneData from '../data/puneData';
import '../styles/App.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(puneData.map((item) => item.type))];

  const filteredData = puneData
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === 'All' || item.type === selectedCategory) &&
      item.rating >= selectedRating
    )
    .sort((a, b) => {
      if (sortOrder === 'high') return b.rating - a.rating;
      if (sortOrder === 'low') return a.rating - b.rating;
      return 0;
    });

  const suggestions = puneData
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        search.trim() !== ''
    )
    .map((item) => item.name)
    .slice(0, 5);

  const handleSuggestionClick = (value) => {
    setSearch(value);
    setShowSuggestions(false);
  };

  return (
    <div className="homepage">
      <Header />

      {/* Intro Section */}
      <section className="intro-section">
        <h2>Explore Pune’s Local Business Scene</h2>
        <p>Discover curated picks from food to fashion, and everything in between.</p>

        {/* Search Box */}
        <div className="autocomplete-wrapper">
          <input
            type="text"
            placeholder="🔍 Search for a business..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => search && setShowSuggestions(true)}
            aria-label="Search businesses"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="autocomplete-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Filters Section */}
        <div className="filters-wrapper">
          <div className="sort-dropdown">
            <label htmlFor="sort">Sort by Rating:</label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="rating">Minimum Rating:</label>
            <select
              id="rating"
              value={selectedRating}
              onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
            >
              <option value={0}>All</option>
              <option value={1}>1 ★ & up</option>
              <option value={2}>2 ★ & up</option>
              <option value={3}>3 ★ & up</option>
              <option value={4}>4 ★ & up</option>
              <option value={5}>5 ★</option>
            </select>
          </div>
        </div>
      </section>

      {/* Business Chart Section */}
      <section className="chart-section" style={{ padding: '2rem 1rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
                style={{
                textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#000',
  }}
>
  📊 Insights from Local Businesses
</h2>

          <BusinessChart data={filteredData} />
        </div>
      </section>

      {/* Map View */}
      <section className="map-section">
        <h2>Map View</h2>
        <MapComponent businesses={filteredData} />
      </section>

      {/* Recommendations */}
      <section className="recommendation-section">
        <h2>Top Picks for You</h2>
        <div className="card-list">
          {filteredData.map((biz) => (
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
