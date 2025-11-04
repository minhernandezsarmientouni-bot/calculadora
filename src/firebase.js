// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClDWDFpGM4k1WgRYeIk7GA8ervpZN6R1I",
  authDomain: "calculadora-9e6f2.firebaseapp.com",
  projectId: "calculadora-9e6f2",
  storageBucket: "calculadora-9e6f2.firebasestorage.app",
  messagingSenderId: "783523863545",
  appId: "1:783523863545:web:c5303f0987923dbf7b7b28",
  measurementId: "G-JPXLZ3DE4D"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar autenticación
export const auth = getAuth(app);
