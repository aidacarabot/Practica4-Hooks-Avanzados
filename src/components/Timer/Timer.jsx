import React, { memo } from 'react';
import './Timer.css';

// Memoizamos el componente para evitar renders innecesarios
const Timer = memo(({time}) => {
  return (
    <div className="timer-container">
      <h2>Current time: {time}</h2>
    </div>
  );
});

export default Timer