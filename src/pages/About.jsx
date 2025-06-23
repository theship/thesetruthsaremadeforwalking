import React from 'react';
import './About.css';

const About = () => {
  /* 
    A quick note on video embedding:
    For ease of use, discoverability, and cost-effectiveness, YouTube is generally the best choice 
    for hosting and embedding public videos. It's simple to upload and embed, and it's free. 
    Vimeo is a great alternative if you need more professional features and a more customizable player,
    but it's a paid service for most business use cases. Platforms like Zoom are not designed for 
    embedding videos on public websites.
  */

  // Placeholder video - replace with your own YouTube embed code
  const videoEmbedUrl = "https://www.youtube.com/embed/GM1kzbAgo_E"; 

  return (
    <div className="about-page">
      <section>
        <h2>About the Project</h2>
        <p>
          Welcome to "These Truths are Made for Walking," a project dedicated to fostering
          civic engagement and community dialogue through the simple act of walking together.
          We believe in the power of movement and conversation to transform our understanding
          of history, our connection to our communities, and our role in shaping a better future.
        </p>
        <p>
          This booklab centers around a close reading of a seminal text in American history,
          exploring its relevance in today's world. Join us to connect, reflect, and put
          democracy in motion.
        </p>
      </section>

      <section className="video-section">
        <h3>A word from our founder</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoEmbedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About; 