import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const signUpUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUta-PM69uf5_-0hNKe_vGIF-U8J-KQYoHxKy_q1tD99A5bw/viewform?usp=header";

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