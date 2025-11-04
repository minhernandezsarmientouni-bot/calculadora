import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './SuccessScreen.css';

const SuccessScreen = ({ navigateTo }) => {
  useEffect(() => {
    // Efecto de confeti al cargar
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Confeti adicional después de 500ms
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 500);
  }, []);

  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">🎉</div>
        <h1 className="success-title">¡Cuenta Registrada con Éxito!</h1>
        <p className="success-message">Bienvenido a Kuali</p>
        <button 
          className="success-btn"
          onClick={() => navigateTo('dashboard')}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;