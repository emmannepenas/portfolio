import React from 'react';
import './Profile.css';

const Profile = ({ profileImg }) => {
  const userDetails = {
    name: "Emmanne Angelo Peñas",
    address: "Iloilo City, Philippines",
    age: "21", 
    year: "3rd Year",
    course: "BS in Information Technology",
    hobbies: [
      "Web Development (MERN)",
      "Network Configuration",
      "Watching Tokusatsu (Kamen Rider)",
      "K-Pop (ATEEZ/E'LAST)",
      "Caring for my Cat"
    ]
  };

  return (
    <div className="profile-container">
      <div className="content-scaler">
        <div className="profile-card">
          
          {/* REFINED SMALLER HEADER */}
          <div className="card-header">
            <div className="header-content">
              <h2 className="identity-title">USER_IDENTITY_CARD</h2>
              <div className="id-serial">SN-03162026-PH</div>
            </div>
            {/* Small decorative corner or status indicator */}
            <div className="header-decorator"></div>
          </div>

          <div className="card-body">
            <div className="profile-pic-large">
              <img 
                src={profileImg} 
                alt="Profile Identity" 
                className="large-img" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/150/00f2ff/020b0d?text=User"; }}
              />
              <div className="scanline-overlay"></div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">FULL_NAME:</span>
                <span className="info-value">{userDetails.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">LOCATION:</span>
                <span className="info-value">{userDetails.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">AGE:</span>
                <span className="info-value">{userDetails.age}</span>
              </div>
              <div className="info-item">
                <span className="info-label">ACADEMIC_LVL:</span>
                <span className="info-value">{userDetails.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">COURSE_PATH:</span>
                <span className="info-value">{userDetails.course}</span>
              </div>
            </div>
          </div>

          <div className="hobbies-section">
            <h3 className="hobbies-title">INTEREST_MODULES</h3>
            <div className="hobbies-tags">
              {userDetails.hobbies.map((hobby, index) => (
                <span key={index} className="hobby-tag"># {hobby}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;