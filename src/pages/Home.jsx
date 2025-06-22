import React from 'react';
import './Home.css';

const Home = () => {
  const signUpUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUta-PM69uf5_-0hNKe_vGIF-U8J-KQYoHxKy_q1tD99A5bw/viewform?usp=header";

  const JoinButton = () => (
    <a href={signUpUrl} target="_blank" rel="noopener noreferrer" className="join-button">
      Join Us
    </a>
  );

  return (
    <div className="home-page">
      <section className="hero-section text-center">
        <h1>THESE TRUTHS ARE MADE FOR WALKING</h1>
        <p className="subtitle">A walking civics booklab</p>
        <JoinButton />
      </section>

      <section className="these-truths-section text-center">
        <h2>THESE TRUTHS</h2>
        <p>An updated history of the United States, written to inspire civic understanding and engagement.</p>
        <p className="italic-note">Let's read it together.</p>
        <JoinButton />
      </section>

      <section className="made-for-walking-section text-center">
        <h2>MADE FOR WALKING</h2>
        <p>We're not made for sitting and doomscrolling, we're MADE FOR WALKING.</p>
        <p>When warnings rise, the worse thing to do is nothing. <strong>STAND UP.</strong></p>
        <p>Moving helps transform adrenaline into positive energy. <strong>SPEAK OUT.</strong></p>
        <JoinButton />
      </section>

      <section className="redeem-dream-section">
        <div className="text-content text-center">
            <h2>REDEEM THE DREAM</h2>
            <p>We each have dreams for a better life for ourselves, our families, our communities, our planet.</p>
            <p className="question">What is the American Dream? Where did it come from? Is it still worth working for?</p>
        </div>
        <div className="cta-content text-center">
            <p><strong>Join Us</strong> as we explore US history through open dialog around one seminal civics book.</p>
        </div>
      </section>
      
      <section className="democracy-motion-section text-center">
        <h2>DEMOCRACY IN MOTION</h2>
      </section>

    </div>
  );
};

export default Home; 