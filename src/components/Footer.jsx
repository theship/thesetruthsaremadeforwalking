import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Julee Burdekin</p>
    </footer>
  );
};

export default Footer; 