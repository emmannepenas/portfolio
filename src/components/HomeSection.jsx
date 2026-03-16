import React from 'react';
import './HomeSection.css';

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
      <div className="content-scaler"> 
        
        {/* Hero Header Section */}
        <div className="hero-header">
          <div className="profile-wrapper">
            <div className="profile-hex-border">
              <img 
                src={profileImg} 
                className="profile-image"
                alt="Emmanne Angelo Peñas"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150/00f2ff/020b0d?text=User"; }}
              />
            </div>
            <div className="status-badge">SYSTEM_ONLINE</div>
          </div>

          <div className="hero-content">
            <h1 className="hero-name">Emmanne Angelo Peñas</h1>
            <div className="terminal-divider"></div>
            <p className="hero-tagline">
              "Architecting the digital mainframe through <span className="highlight">full-stack precision</span> and <span className="highlight">UI innovation</span>."
            </p>
          </div>
        </div>

        {/* Services Section with Small Header */}
        <div className="services-section">
          <div className="card-header">
            <div className="header-content">
              <h2 className="identity-title">CORE_SERVICES</h2>
              <div className="id-serial">MODULE_EXECUTION: ACTIVE</div>
            </div>
            <div className="header-decorator"></div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-role">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
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