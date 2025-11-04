import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import './ForgotPassword.css';

const ForgotPassword = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('¡Correo de recuperación enviado! Revisa tu bandeja de entrada.');
    } catch (error) {
      console.error('Error al enviar correo:', error);
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-content">
        <h1 className="forgot-title">Kuali</h1>
        <p className="forgot-subtitle">RECUPERAR CONTRASEÑA</p>
        
        <form className="forgot-form" onSubmit={handleResetPassword}>
          <input 
            type="email" 
            placeholder="INGRESA TU CORREO ELECTRÓNICO"
            className="forgot-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button 
            type="submit" 
            className="forgot-btn"
            disabled={loading}
          >
            {loading ? 'ENVIANDO...' : 'ENVIAR CORREO DE RECUPERACIÓN'}
          </button>

          {message && (
            <p className="forgot-message">{message}</p>
          )}
        </form>
        
        <button className="back-button" onClick={() => navigateTo('login')}>
          ← Volver al Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;