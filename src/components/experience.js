import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Supply Chain Manager",
      company: "Company Name",
      period: "2020 - Present",
      description: "Leading global supply chain operations...",
      achievements: [
        "Optimized sourcing strategies resulting in 20% cost reduction",
        "Implemented new logistics solutions improving delivery times by 30%"
      ]
    }
    // Add more experiences
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

