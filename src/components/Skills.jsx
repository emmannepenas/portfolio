import React from 'react';
import './Skills.css';

const Skills = () => {
  const coreLanguages = [
    { name: "HTML5", level: "95%", desc: "Structural foundation & Semantic SEO" },
    { name: "CSS3", level: "90%", desc: "Responsive Design & Animations" },
    { name: "JavaScript", level: "85%", desc: "Logic, DOM Manipulation & ES6+" }
  ];

  const tools = [
    { 
      name: "MERN Stack", 
      use: "Used for building full-stack web applications (MongoDB, Express, React, Node)." 
    },
    { 
      name: "Cisco Packet Tracer", 
      use: "Utilized for network simulation and VLAN configurations." 
    },
    { 
      name: "React Router", 
      use: "Essential for creating seamless navigation in Single Page Applications (SPA)." 
    },
    { 
      name: "Vercel / Git", 
      use: "Deployment and version control for collaborative development." 
    }
  ];

  return (
    <div className="skills-container">
      {/* THE MAIN CONTAINER: Keeps content centered and clear of the side nav */}
      <div className="content-scaler">
        
        {/* Core Skills Section */}
        <section className="proficiency-section">
          <h2 className="skills-header">SYSTEM_CORE_LEVELS</h2>
          <div className="bar-grid">
            {coreLanguages.map((skill, index) => (
              <div key={index} className="skill-bar-wrapper">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}</span>
                </div>
                <div className="bar-bg">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: skill.level, 
                      transitionDelay: `${index * 150}ms` /* Staggered fill effect */
                    }}
                  ></div>
                </div>
                <p className="skill-detail">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Frameworks Section */}
        <section className="frameworks-section">
          <h2 className="skills-header">INTEGRATIVE_TOOLS</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
                {/* Cyberpunk decorative line */}
                <div className="tool-glitch-line"></div>
                <h3 className="tool-name">:: {tool.name}</h3>
                <p className="tool-usage">{tool.use}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Skills;