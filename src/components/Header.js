import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-title">
          <img src={logo} alt="LocalBiz Pulse" className="logo" />
          <h1>LocalBiz Pulse</h1>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
