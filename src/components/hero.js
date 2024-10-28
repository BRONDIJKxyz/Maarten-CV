import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Maarten Brondijk</h1>
        <h2>Supply Chain & Logistics Expert</h2>
        <p>Optimizing global supply chains through strategic sourcing and cost management</p>
        <div className="cta-buttons">
          <a href="/consulting" className="btn primary">Book a Consultation</a>
          <a href="/download-cv" className="btn secondary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

