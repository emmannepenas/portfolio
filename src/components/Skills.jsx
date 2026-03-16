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
      <div className="content-scaler">
        
        {/* Core Skills Section */}
        <section className="proficiency-section">
          <div className="card-header">
            <div className="header-content">
              <h2 className="identity-title">SYSTEM_CORE_LEVELS</h2>
              <div className="id-serial">MOD-STABILITY: 0.98</div>
            </div>
            <div className="header-decorator"></div>
          </div>

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
                      transitionDelay: `${index * 150}ms` 
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
          <div className="card-header">
            <div className="header-content">
              <h2 className="identity-title">INTEGRATIVE_TOOLS</h2>
              <div className="id-serial">REG_PATH: /usr/local/bin</div>
            </div>
            <div className="header-decorator"></div>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
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