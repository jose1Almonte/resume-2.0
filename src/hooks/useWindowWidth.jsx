import { useEffect, useState } from 'react'

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      // Agregar un event listener para manejar el cambio de tamaño de la ventana
      window.addEventListener('resize', handleResize);
  
      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return {windowWidth}
}
