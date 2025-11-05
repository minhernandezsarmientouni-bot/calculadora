// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYEHL9Deudo8eACMfoHMXJQChRmCq-nsQ",
  authDomain: "calculadora-d4e6e.firebaseapp.com",
  projectId: "calculadora-d4e6e",
  storageBucket: "calculadora-d4e6e.firebasestorage.app",
  messagingSenderId: "378975698801",
  appId: "1:378975698801:web:23e5634cb187ea775ac0d0",
  measurementId: "G-0C5YDNT8XD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancia de autenticación
export const auth = getAuth(app);

// Configurar persistencia local (mantiene la sesión incluso después de cerrar el navegador)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistencia de sesión configurada correctamente');
  })
  .catch((error) => {
    console.error('Error al configurar persistencia:', error);
  });

