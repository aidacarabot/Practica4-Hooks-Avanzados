import './App.css';
import React from 'react';
import Timer from './components/Timer/Timer';
import useCurrentTime from './customHooks/useCurrentTime';
import Calculator from './components/Calculator/Calculator';
import { ThemeProvider, useTheme } from './context/ThemeContext';

//? Aqui conectaremos todos los archivos entre sí

function App() {
  const { tema, toggleTema } = useTheme(); //Usamos el Custom Hook para obtener el tema actual y la función para cambiarlo
  const time = useCurrentTime(); //Usamos el Custom Hook para obtener la hora actual

  return (
    <div className={`app-container ${tema}`}> {/* ✅ Ocupa toda la pantalla */}
      <button className="theme-toggle" onClick={toggleTema}>
        Cambiar Tema
      </button>
      <Timer time={time} />
      <Calculator />
    </div>
  );
};

export default App;
