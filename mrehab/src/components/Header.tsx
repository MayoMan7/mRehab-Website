// src/components/Header.tsx
import React from 'react';
import './Header.css'; // Create this CSS file for header styling
import { Link } from 'react-router-dom'; // For navigation links

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <Link to="/">
            {/* Replace with your actual logo. You might need to import it if from src/assets */}
            {/* <img src="/your-logo.png" alt="Your Company Logo" className="logo-image" /> */}
            {/* Or simply text */}
            <span>mRehab</span>
          </Link>
        </div>

        {/* Optional: Right-side elements like search, login, etc. */}
        <div className="header-right">
           <nav className="header-nav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;