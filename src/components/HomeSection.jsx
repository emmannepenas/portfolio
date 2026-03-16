import React from 'react';
import './HomeSection.css';

// Added { profileImg } to catch the prop from App.jsx
const HomeSection = ({ profileImg }) => {
  const services = [
    {
      icon: "🧩",
      title: "UI/UX Designer",
      desc: "I design intuitive and engaging interfaces to enhance user experience and satisfaction."
    },
    {
      icon: "🎨",
      title: "Graphic Designer",
      desc: "From logos to full brand identity, I create cohesive and visually striking designs."
    },
    {
      icon: "💻",
      title: "Web Designer",
      desc: "I build modern and responsive websites that look great on every device."
    }
  ];

  return (
    <section className="hero-container">
      {/* Wrapper ensures content doesn't hide behind the vertical rail */}
      <div className="content-scaler"> 
        
        {/* Hero Header Section */}
        <div className="hero-header">
          <div className="profile-wrapper">
            <div className="profile-hex-border">
              <img 
                src={profileImg} 
                className="profile-image"
                alt="Emmanne Angelo Peñas - System Operator" /* Added Alt for ESLint */
                onError={(e) => { e.target.src = "https://via.placeholder.com/150/00f2ff/020b0d?text=User"; }}
              />
            </div>
            <div className="status-badge">ONLINE</div>
          </div>

          <div className="hero-content">
            <h1 className="hero-name">Emmanne Angelo Peñas</h1>
            <div className="terminal-divider"></div>
            <p className="hero-tagline">
              "Architecting the digital mainframe through full-stack precision and UI innovation."
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h2 className="services-title">CORE_SERVICES</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-role">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                {/* Visual tech-line for mobile flair */}
                <div className="card-scanline"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;