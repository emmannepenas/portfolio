import React from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = React.useState("AWAITING_INPUT");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");
    // Simulate a delay for the "sending" effect
    setTimeout(() => {
      setStatus("SIGNAL_SENT_SUCCESSFULLY");
      alert("Transmission Received, Emmanne will get back to you soon.");
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">ESTABLISH_CONNECTION</h2>
      
      <div className="form-wrapper">
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
      </div>

      {/* Mobile Status Bar */}
      <div className="terminal-footer">
        <span className="blink-dot"></span>
        <span className="status-text">STATUS: {status}</span>
      </div>
    </div>
  );
};

export default Contact;