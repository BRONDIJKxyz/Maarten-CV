import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section 
        className="about-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">About Me</h2>
              <p className="lead-text">
                Supply Chain & Logistics Expert with a passion for optimizing global operations
                and driving sustainable business growth.
              </p>
              <div className="expertise-areas">
                <div className="expertise-item">
                  <span className="expertise-number">15+</span>
                  <span className="expertise-label">Years Experience</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-number">50+</span>
                  <span className="expertise-label">Projects Completed</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-number">30%</span>
                  <span className="expertise-label">Average Cost Reduction</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/assets/images/profile.jpg" alt="Maarten Brondijk" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="services-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <Experience />

      {/* Call to Action Section */}
      <motion.section 
        className="cta-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Supply Chain?</h2>
            <p>Let's discuss how I can help improve your operations</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

// Services data
const services = [
  {
    icon: "🌐",
    title: "Global Sourcing Strategy",
    description: "Optimize your sourcing network and reduce costs while maintaining quality standards."
  },
  {
    icon: "📊",
    title: "Supply Chain Optimization",
    description: "Streamline operations and improve efficiency across your entire supply chain."
  },
  {
    icon: "💰",
    title: "Cost Management",
    description: "Identify and implement cost-saving opportunities without compromising quality."
  },
  {
    icon: "🔄",
    title: "Process Improvement",
    description: "Enhance operational workflows and implement best practices."
  }
];

export default Home;
