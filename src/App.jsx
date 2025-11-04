import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import SuccessScreen from './components/SuccessScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  // Cambiar a landing después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('landing');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Función para navegar
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Renderizar pantalla actual
  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  if (currentScreen === 'landing') {
    return <LandingPage navigateTo={navigateTo} />;
  }

  if (currentScreen === 'login') {
    return <Login navigateTo={navigateTo} />;
  }

  if (currentScreen === 'register') {
    return <Register navigateTo={navigateTo} />;
  }

  if (currentScreen === 'dashboard') {
    return <Dashboard navigateTo={navigateTo} />;
  }

  if (currentScreen === 'forgot-password') {
    return <ForgotPassword navigateTo={navigateTo} />;
  }

  if (currentScreen === 'success') {
    return <SuccessScreen navigateTo={navigateTo} />;
  }

  return <LandingPage navigateTo={navigateTo} />;
}

export default App;