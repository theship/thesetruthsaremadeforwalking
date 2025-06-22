import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const signUpUrl = "https://forms.gle/YrbYZNT5Vqb5xq8c9";

  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li>
            <a href={signUpUrl} target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 