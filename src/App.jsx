import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Home, User, Code, Mail, UserCircle, Facebook, Github } from 'lucide-react';

// FIX: Ensure the import path is correct based on your folder structure
import ProfileImg from './img/Emmanne.jpg'; 

// Component Imports
import HomeSection from './components/HomeSection.jsx';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Profile from './components/Profile'; 
import './styles.css';

function App() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isHovered, setIsHovered] = useState(false); 

  const isExpanded = isHovered || isOpen;

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
    { name: 'Skills', path: '/skills', icon: <Code size={20} /> },
    { name: 'Profile', path: '/profile', icon: <UserCircle size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
  ];

  // New Social Links Data
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/emmanneangelo.tumbagahanpenas', icon: <Facebook size={18} /> },
    { name: 'Github', url: 'https://github.com/emmannepenas', icon: <Github size={18} /> },
    { name: 'Google', url: 'mailto:emmannepenas500@gmail.com', icon: <Mail size={18} /> },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setIsHovered(false);
  };

  return (
    <Router>
      <div className="app-shell">
        <nav className={`navbar vertical ${isExpanded ? 'seek' : 'hide'}`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          <div className="nav-container">
            <Link to="/profile" className="nav-logo-link" onClick={closeMenu}>
              <div className="nav-logo-wrapper">
                <div className="nav-profile-pic">
                  <img src={ProfileImg} alt="Logo" className="nav-img" />
                </div>
                <div className="logo-pulse-ring"></div>
              </div>
              <span className="nav-logo-text">SYS.EMMANNE</span>
            </Link>
            
            <div className="desktop-nav">
              {navLinks.map((link, index) => (
                <Link key={link.name} to={link.path} className="nav-item" onClick={closeMenu}
                      style={{ transitionDelay: `${isExpanded ? index * 40 : 0}ms` }}>
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-text">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* --- Added Social Section --- */}
            <div className="nav-socials">
              <div className="nav-divider"></div>
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  style={{ transitionDelay: `${isExpanded ? (navLinks.length + index) * 40 : 0}ms` }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-text">{social.name}</span>
                </a>
              ))}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <main className={`main-content ${isExpanded ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<HomeSection profileImg={ProfileImg} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/profile" element={<Profile profileImg={ProfileImg} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;