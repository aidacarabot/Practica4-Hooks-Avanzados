import React, { createContext, useState, useContext } from "react";

// 🔹 Creamos el contexto
const ThemeContext = createContext();

// 🔹 Hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe estar dentro de un ThemeProvider");
  }
  return context;
};

// 🔹 Proveedor del tema
export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("light");

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}