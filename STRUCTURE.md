# Estructura del Proyecto Kuali

Este documento explica la organización del proyecto y las mejores prácticas implementadas.

## 📁 Estructura de Carpetas

```
calculadora/
├── public/                      # Archivos estáticos
│   └── vite.svg
├── src/
│   ├── assets/                  # Recursos estáticos (imágenes, iconos, logos)
│   │   └── react.svg
│   ├── components/              # Componentes reutilizables
│   │   ├── SplashScreen.jsx
│   │   └── SplashScreen.css
│   ├── pages/                   # Páginas principales de la aplicación
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Register.jsx
│   │   ├── Register.css
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── ForgotPassword.jsx
│   │   ├── ForgotPassword.css
│   │   ├── SuccessScreen.jsx
│   │   └── SuccessScreen.css
│   ├── config/                  # Configuraciones de la aplicación
│   │   └── firebase.js          # Configuración de Firebase
│   ├── context/                 # Context API de React
│   │   └── AuthContext.jsx      # Contexto de autenticación
│   ├── hooks/                   # Custom hooks (vacío por ahora)
│   ├── utils/                   # Funciones utilitarias (vacío por ahora)
│   ├── styles/                  # Estilos globales
│   │   └── App.css
│   ├── App.jsx                  # Componente raíz con routing
│   └── main.jsx                 # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 📂 Descripción de Carpetas

### `/src/assets/`
Contiene todos los recursos estáticos como:
- Imágenes
- Iconos
- Logos
- SVGs
- Fuentes personalizadas

**Ejemplo de uso:**
```jsx
import logo from '../assets/logo.png';
```

### `/src/components/`
Componentes reutilizables que se usan en múltiples lugares de la aplicación.

**Criterios para un componente:**
- Es pequeño y enfocado en una sola responsabilidad
- Se reutiliza en múltiples páginas
- No representa una ruta/página completa

**Ejemplos:**
- SplashScreen (pantalla de carga inicial)
- Botones personalizados
- Cards
- Modals
- Headers/Footers

### `/src/pages/`
Páginas completas que representan vistas principales de la aplicación.

**Criterios para una página:**
- Representa una vista completa
- Generalmente asociada a una ruta
- Puede componerse de múltiples componentes pequeños

**Páginas actuales:**
- `LandingPage.jsx` - Página de bienvenida
- `Login.jsx` - Inicio de sesión
- `Register.jsx` - Registro de usuario
- `Dashboard.jsx` - Panel principal
- `ForgotPassword.jsx` - Recuperación de contraseña
- `SuccessScreen.jsx` - Confirmación de registro exitoso

### `/src/config/`
Archivos de configuración de servicios externos y constantes de la aplicación.

**Contenido actual:**
- `firebase.js` - Configuración e inicialización de Firebase

**Usos futuros:**
- Configuración de APIs
- Variables de entorno
- Constantes de la aplicación

### `/src/context/`
Contextos de React para manejo de estado global.

**Contexto actual:**
- `AuthContext.jsx` - Manejo centralizado de autenticación

**Ventajas del AuthContext:**
- Centraliza toda la lógica de autenticación
- Evita prop drilling
- Proporciona hooks personalizados (`useAuth`)
- Maneja el estado del usuario en toda la aplicación

**Uso del AuthContext:**
```jsx
import { useAuth } from '../context/AuthContext';

function MiComponente() {
  const { currentUser, login, logout } = useAuth();
  // usar funciones de autenticación
}
```

### `/src/hooks/`
Custom hooks para lógica reutilizable.

**Ejemplos futuros:**
- `useForm.js` - Manejo de formularios
- `useLocalStorage.js` - Persistencia local
- `useDebounce.js` - Debouncing de inputs

### `/src/utils/`
Funciones utilitarias y helpers.

**Ejemplos futuros:**
- Validadores de formularios
- Formateadores de fecha
- Helpers de strings
- Constantes comunes

### `/src/styles/`
Estilos globales que afectan a toda la aplicación.

**Contenido:**
- `App.css` - Estilos globales y reset CSS

**Nota:** Los estilos específicos de componentes/páginas se mantienen junto a ellos.

## 🔄 Flujo de Navegación

```
Inicio (SplashScreen)
    ↓
LandingPage
    ├── Registrarse → Register → SuccessScreen → Dashboard
    └── Iniciar Sesión → Login → Dashboard
        └── ¿Olvidaste contraseña? → ForgotPassword
```

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **Vite** - Build tool y dev server
- **Firebase 12** - Backend y autenticación
- **CSS puro** - Estilos (sin frameworks CSS)
- **ESLint** - Linting de código

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes React: `PascalCase.jsx`
- Estilos: `PascalCase.css` (mismo nombre que el componente)
- Utilidades: `camelCase.js`
- Configuración: `camelCase.js`

### Imports
Orden de imports recomendado:
```jsx
// 1. Librerías externas
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 2. Configuración y contextos
import { auth } from '../config/firebase';
import { useAuth } from '../context/AuthContext';

// 3. Componentes
import Button from '../components/Button';

// 4. Estilos
import './MiComponente.css';
```

### Estructura de un Componente
```jsx
import React, { useState, useEffect } from 'react';
import './MiComponente.css';

const MiComponente = ({ prop1, prop2 }) => {
  // 1. State
  const [state, setState] = useState(null);

  // 2. Effects
  useEffect(() => {
    // lógica
  }, []);

  // 3. Handlers
  const handleClick = () => {
    // lógica
  };

  // 4. Render
  return (
    <div className="mi-componente">
      {/* JSX */}
    </div>
  );
};

export default MiComponente;
```

## 🚀 Mejoras Futuras

### Carpetas a Agregar
- `/src/layouts/` - Layouts compartidos (MainLayout, AuthLayout)
- `/src/services/` - Servicios para APIs y lógica de negocio
- `/src/constants/` - Constantes de la aplicación
- `/src/types/` - TypeScript types (si se migra a TS)

### Mejoras Recomendadas
1. **React Router** - Para navegación más robusta
2. **TypeScript** - Para type safety
3. **CSS Modules** o **Styled Components** - Para estilos scoped
4. **Formularios con React Hook Form** - Para mejor manejo de forms
5. **Variables de entorno** - Para credenciales de Firebase
6. **Testing** - Jest + React Testing Library

## 📖 Recursos

- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

**Última actualización:** 2025-11-04
