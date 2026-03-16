import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      title: "HTML",
      desc: "I have solid experience in structuring responsive and accessible web pages using semantic HTML5 elements. I design clean layouts that serve as the foundation for modern web interfaces."
    },
    {
      title: "CSS",
      desc: "Experienced in styling user interfaces using CSS3 and modern frameworks. I apply Flexbox, Grid, and animations to enhance design responsiveness and user experience."
    },
    {
      title: "PHP",
      desc: "I’ve developed dynamic web applications using PHP and MySQL, handling backend logic, form processing, and database management efficiently for real-world projects."
    },
    {
      title: "JavaScript",
      desc: "Skilled in implementing interactive features with JavaScript, including form validation, dynamic content updates, and event-driven web functionality."
    }
  ];

  return (
    <div className="about-container">
      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="card-header">
          <div className="header-content">
            <h2 className="identity-title">USER_PROFILE</h2>
            <div className="id-serial">BIO-DATA_ENCRYPTION: ENABLED</div>
          </div>
          <div className="header-decorator"></div>
        </div>
        
        <div className="bio-box">
          <p>
            Hello! I am <span className="highlight">Emmanne Angelo Peñas</span>, a Full-stack Developer and UI Architect 
            currently pursuing studies in Art and Architecture. Based in Iloilo City, I bridge the gap between 
            aesthetic design and technical logic.
          </p>
          <p>
            My work is driven by a passion for research methodology and <span className="highlight">"Cyber-Mainframe" aesthetics</span>, 
            ensuring every project is not just functional, but a visual experience.
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="card-header">
          <div className="header-content">
            <h2 className="identity-title">TECHNICAL_EXPERIENCE</h2>
            <div className="id-serial">LOG_ENTRIES: {experiences.length}</div>
          </div>
          <div className="header-decorator"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <h3 className="exp-title">
                <span className="cursor">{'>'}</span> {exp.title}
              </h3>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;