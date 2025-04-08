import React, { useState, useEffect } from 'react';
import '../styles/components.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="header">
      <img src={logo} alt="LocalBiz Pulse" className="logo" />
      <h1>LocalBiz Pulse – Pune</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
