import React from 'react';
import { useAuth } from '../context/AuthContext';
import FeatureCard from '../components/FeatureCard';
import StatCard from '../components/StatCard';
import './Home.css';

const Home = ({ navigateTo }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigateTo('landing');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <h1 className="brand">Kuali</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Cerrar Sesión 🚪
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="welcome-title">Bienvenido a tu Panel de Control</h2>
        <p className="welcome-subtitle">{currentUser?.email || 'Usuario'}</p>
        <p className="welcome-tagline">Tu mejor aliado al emprender</p>

        {/* Stats */}
        <div className="stats-grid">
          <StatCard icon="📊" value="0" label="Proyectos" />
          <StatCard icon="💰" value="$0" label="Ingresos" />
          <StatCard icon="📈" value="0%" label="Crecimiento" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h3 className="section-title">Herramientas para tu Negocio</h3>
        <div className="features-grid">
          <FeatureCard
            icon="🧮"
            title="Calculadora de Negocios"
            description="Calcula costos, márgenes de ganancia y punto de equilibrio"
            onClick={() => alert('Calculadora próximamente')}
          />
          <FeatureCard
            icon="💼"
            title="Gestión de Proyectos"
            description="Organiza y da seguimiento a tus proyectos empresariales"
            onClick={() => alert('Proyectos próximamente')}
          />
          <FeatureCard
            icon="📉"
            title="Análisis Financiero"
            description="Visualiza tus finanzas con gráficos y reportes detallados"
            onClick={() => alert('Análisis próximamente')}
          />
          <FeatureCard
            icon="📝"
            title="Planificación"
            description="Crea planes de negocio y estrategias de crecimiento"
            onClick={() => alert('Planificación próximamente')}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 Kuali - Tu mejor aliado al emprender</p>
      </footer>
    </div>
  );
};

export default Home;