import React, { useEffect, useState } from 'react'

export function useAnimationContainer() {
    const [borderRadius, setBorderRadius] = useState('60% 40% 30% 70%/60% 30% 70% 40%');

    useEffect(() => {
      const borderRadiusValues = [
        '60% 40% 30% 70%/60% 30% 70% 40%',
        '40% 60% 70% 30%/30% 70% 40% 60%',
        '30% 70% 60% 40%/70% 30% 40% 60%',
        '70% 30% 40% 60%/60% 40% 70% 30%',
        // Add more borderRadius values as desired
      ];
  
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        setBorderRadius(borderRadiusValues[currentIndex]);
        currentIndex = (currentIndex + 1) % borderRadiusValues.length;
      }, 3000); // Cambia cada 5 segundos (ajusta este valor según tus preferencias)
  
      return () => clearInterval(intervalId);
    }, []);
    return {borderRadius}
}
