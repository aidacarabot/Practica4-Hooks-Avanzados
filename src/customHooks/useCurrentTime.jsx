import React, { useEffect, useState } from 'react';

// 🔹 Hook personalizado que actualiza la hora cada segundo
const useCurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, []);

  return time; // ✅ AHORA sí retornamos `time`
}

export default useCurrentTime