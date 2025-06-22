import React from 'react';
import './Contact.css';

const Contact = () => {
  const signUpUrl = "https://forms.gle/YrbYZNT5Vqb5xq8c9";

  return (
    <div className="contact-page">
      <h2>Get In Touch</h2>
      <p>Have questions or want to learn more? Here's how to reach out.</p>
      
      <ul className="contact-links">
        <li>
          <a href={signUpUrl} target="_blank" rel="noopener noreferrer">
            Ready to sign up?
          </a>
        </li>
        <li>
          <a href="https://gnowledge-karden.ghost.io" target="_blank" rel="noopener noreferrer">
            More about the Gnowledge Karden
          </a>
        </li>
        <li>
          <a href="https://juleeburdekin.com" target="_blank" rel="noopener noreferrer">
            More about Julee
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/pequodcapt.bsky.social" target="_blank" rel="noopener noreferrer">
            Julee on BlueSky
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact; 