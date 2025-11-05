import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Register.css';

const Register = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validaciones básicas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      // Crear usuario usando el AuthContext
      await register(formData.email, formData.password);

      // Si todo sale bien, mostrar pantalla de éxito
      navigateTo('success');
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1 className="register-title">Kuali</h1>
        <p className="register-subtitle">REGISTRARSE</p>
        
        <form className="register-form" onSubmit={handleRegister}>
          <input 
            type="text" 
            name="username"
            placeholder="NOMBRE DE USUARIO"
            className="register-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="CORREO ELECTRÓNICO"
            className="register-input"
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
              className="register-input password-input"
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

          {/* Campo de Confirmar Contraseña con ojito */}
          <div className="password-container">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="CONFIRMAR CONTRASEÑA"
              className="register-input password-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
          
          <button 
            type="submit" 
            className="register-btn"
            disabled={loading}
          >
            {loading ? 'CREANDO CUENTA...' : 'CREAR CUENTA'}
          </button>
        </form>
        
        <button className="back-button" onClick={() => navigateTo('landing')}>
          ← Volver
        </button>
        
        <p className="privacy-notice">
          AVISO DE PRIVACIDAD
        </p>
      </div>
    </div>
  );
};

export default Register;