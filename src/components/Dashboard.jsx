import React from 'react';
import './Dashboard.css';

const Dashboard = ({ navigateTo }) => {
  return (
    <div className="dashboard-container">
      <h1>Kuali</h1>
      <h2>BIENVENIDO</h2>
      <p>Usuario01</p>
      <button onClick={() => navigateTo('landing')}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;