import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import SplashScreen from './components/SplashScreen';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import SuccessScreen from './pages/SuccessScreen';
import './styles/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const { currentUser } = useAuth();

  // Cambiar a landing o home después de 3 segundos (dependiendo si hay sesión)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentUser) {
        setCurrentScreen('home');
      } else {
        setCurrentScreen('landing');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentUser]);

  // Verificar si el usuario ya está autenticado cuando cambia el estado de auth
  useEffect(() => {
    if (currentUser && currentScreen !== 'splash' && currentScreen !== 'home') {
      setCurrentScreen('home');
    } else if (!currentUser && currentScreen === 'home') {
      setCurrentScreen('landing');
    }
  }, [currentUser]);

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

  if (currentScreen === 'home') {
    return <Home navigateTo={navigateTo} />;
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