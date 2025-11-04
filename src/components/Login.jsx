import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

const Login = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Iniciar sesión con Firebase
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Si todo sale bien, ir al dashboard
      navigateTo('dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Kuali</h1>
        <p className="login-subtitle">INICIAR SESIÓN</p>
        
        <form className="login-form" onSubmit={handleLogin}>
          <input 
            type="email" 
            name="email"
            placeholder="CORREO ELECTRÓNICO"
            className="login-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          {/* Campo de Contraseña con ojito */}
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="CONTRASEÑA"
              className="login-input password-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          
          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'INGRESANDO...' : 'INGRESAR'}
          </button>

          {/* Enlace para recuperar contraseña */}
          <p 
            className="forgot-password"
            onClick={() => navigateTo('forgot-password')}
          >
            ¿Olvidaste tu contraseña?
          </p>
        </form>
        
        <button className="back-button" onClick={() => navigateTo('landing')}>
          ← Volver
        </button>
        
        <p style={{marginTop: '2rem', fontSize: '0.8rem', opacity: '0.7'}}>
          AVISO DE PRIVACIDAD
        </p>
      </div>
    </div>
  );
};

export default Login;