import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/App.css';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Header />
      <main className="about-content">
        <h2>About LocalBiz Pulse</h2>
        <p>
          LocalBiz Pulse is a simple yet powerful React-based project that showcases top-rated local businesses in Pune.
          Whether you're new to the city or a resident looking for hidden gems, we aim to help you discover the best of Pune.
        </p>
        <p>
          This project uses dummy data, modular components, and clean CSS — perfect for learning frontend web development.
        </p>
        <p>Built by a passionate developer!</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
