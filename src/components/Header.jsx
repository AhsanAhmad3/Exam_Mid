// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; 


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">🎬 Movie App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
