import React from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = React.useState("AWAITING_INPUT");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    setTimeout(() => {
      setStatus("SIGNAL_SENT_SUCCESSFULLY");
      alert("Transmission Received, Emmanne will get back to you soon.");
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="form-wrapper">
        
        {/* REFINED SMALLER HEADER - Matches Profile Card */}
        <div className="card-header">
          <div className="header-content">
            <h2 className="identity-title">ESTABLISH_CONNECTION</h2>
            <div className="id-serial">FREQ-2.4GHZ-STABLE</div>
          </div>
          <div className="header-decorator"></div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label-text">Identifier (Name)</label>
            <input 
              type="text" 
              className="terminal-input" 
              placeholder="ENTER_NAME" 
              required 
            />
          </div>

          <div className="input-group">
            <label className="label-text">Comms_Channel (Email)</label>
            <input 
              type="email" 
              className="terminal-input" 
              placeholder="USER@DOMAIN.COM" 
              required 
            />
          </div>

          <div className="input-group">
            <label className="label-text">Transmission_Data (Message)</label>
            <textarea 
              className="terminal-textarea" 
              placeholder="ENTER_MESSAGE_STREAMS..." 
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-signal">
            Send Signal
          </button>
        </form>

        {/* Status Bar inside the wrapper for better alignment */}
        <div className="terminal-footer">
          <span className="blink-dot"></span>
          <span className="status-text">STATUS: {status}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;