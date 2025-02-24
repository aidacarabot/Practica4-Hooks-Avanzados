import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import './Calculator.css';  

const Calculator = memo(() => {
  const [displayValue, setDisplayValue] = useState(""); // Lo que se muestra en la pantalla
  const [num1, setNum1] = useState(null); // Primer número
  const [operacion, setOperacion] = useState(null); // Operación matemática
  const [historial, setHistorial] = useState([]); // Historial de cálculos

  // 📌 Función para manejar los números ingresados
  const manejarNumero = (numero) => {
    setDisplayValue((prev) => prev + numero);
  };

  // 📌 Función para manejar las operaciones matemáticas
  const manejarOperacion = (op) => {
    if (displayValue !== "") {
      setNum1(parseFloat(displayValue));
      setOperacion(op);
      setDisplayValue(""); // Limpia la pantalla para el segundo número
    }
  };

  // 📌 Función para calcular el resultado
  const calcularResultado = useCallback(() => {
    if (num1 !== null && displayValue !== "" && operacion) {
      const num2 = parseFloat(displayValue);
      let resultado;

      switch (operacion) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          resultado = num2 !== 0 ? num1 / num2 : "Error";
          break;
        default:
          resultado = "Error";
      }

      setHistorial((prevHistorial) => [...prevHistorial, `${num1} ${operacion} ${num2} = ${resultado}`]);
      setDisplayValue(resultado.toString());
      setNum1(null);
      setOperacion(null);
    }
  }, [num1, displayValue, operacion]);

  // 📌 Función para limpiar la pantalla y resetear valores
  const limpiarPantalla = () => {
    setDisplayValue("");
    setNum1(null);
    setOperacion(null);
  };

  // 📌 Función para limpiar el historial
  const limpiarHistorial = () => {
    setHistorial([]);
  };

  return (
    <div className="calculator-container">
      {/* Pantalla de la calculadora */}
      <input type="text" className="calculator-display" value={displayValue} readOnly />

      {/* Botones de la calculadora */}
      <div className="calculator-buttons">
        <button className="calculator-button" onClick={() => manejarNumero("7")}>7</button>
        <button className="calculator-button" onClick={() => manejarNumero("8")}>8</button>
        <button className="calculator-button" onClick={() => manejarNumero("9")}>9</button>
        <button className="calculator-button operator" onClick={() => manejarOperacion("/")}>÷</button>

        <button className="calculator-button" onClick={() => manejarNumero("4")}>4</button>
        <button className="calculator-button" onClick={() => manejarNumero("5")}>5</button>
        <button className="calculator-button" onClick={() => manejarNumero("6")}>6</button>
        <button className="calculator-button operator" onClick={() => manejarOperacion("*")}>×</button>

        <button className="calculator-button" onClick={() => manejarNumero("1")}>1</button>
        <button className="calculator-button" onClick={() => manejarNumero("2")}>2</button>
        <button className="calculator-button" onClick={() => manejarNumero("3")}>3</button>
        <button className="calculator-button operator" onClick={() => manejarOperacion("-")}>-</button>

        <button className="calculator-button clear" onClick={limpiarPantalla}>C</button>
        <button className="calculator-button" onClick={() => manejarNumero("0")}>0</button>
        <button className="calculator-button equal" onClick={calcularResultado}>=</button>
        <button className="calculator-button operator" onClick={() => manejarOperacion("+")}>+</button>
      </div>

      {/* Historial de cálculos */}
      <div className="history">
        <h3>Historial</h3>
        <ul>
          {historial.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
        {/* Botón para limpiar historial */}
        {historial.length > 0 && (
          <button className="clear-history" onClick={limpiarHistorial}>Limpiar Historial</button>
        )}
      </div>
    </div>
  );
});

export default Calculator;