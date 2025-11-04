import React from 'react';
import './LandingPage.css';

const LandingPage = ({ navigateTo }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Kuali</h1>
        <p className="landing-subtitle">TU MEJOR ALIADO AL EMPRENDER</p>
        
        <div className="landing-buttons">
          <button 
            className="landing-btn primary"
            onClick={() => navigateTo('register')}
          >
            REGISTRARSE
          </button>
          <button 
            className="landing-btn secondary"
            onClick={() => navigateTo('login')}
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
