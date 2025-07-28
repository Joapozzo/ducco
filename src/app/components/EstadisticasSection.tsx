import { useState, useEffect, useRef } from 'react';

const estadisticas = [
  { numero: "35+", texto: "Años de experiencia" },
  { numero: "5000+", texto: "Clientes satisfechos" },
  { numero: "50+", texto: "Productos únicos" },
  { numero: "98%", texto: "Calidad garantizada" }
];

// Hook para animar el conteo
const useCountAnimation = (endValue: number, duration: number = 2000, isVisible: boolean = false): number => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = Math.floor(progress * endValue);
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration, isVisible]);
  
  return count;
};

// Hook para detectar cuando el elemento está visible
const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return [ref, isVisible] as const;
};

// Componente para cada estadística individual
const StatCard = ({ stat, index, isVisible }: { stat: { numero: string; texto: string }, index: number, isVisible: boolean }) => {
  // Extraer el número de la cadena (eliminando símbolos como +, %)
  const numericValue = parseInt(stat.numero.replace(/[^0-9]/g, ''));
  const suffix = stat.numero.replace(/[0-9]/g, '');
  
  const animatedValue = useCountAnimation(numericValue, 2000 + (index * 200), isVisible);
  
  return (
    <div className="text-center text-white transform transition-all duration-500 hover:scale-105">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 transition-all duration-300">
        <span className="inline-block">
          {isVisible ? animatedValue : 0}{suffix}
        </span>
      </div>
      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium opacity-90 transition-opacity duration-300 hover:opacity-100">
        {stat.texto}
      </div>
    </div>
  );
};

// Sección de Estadísticas
const EstadisticasSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" 
      style={{ backgroundColor: '#F24026' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {estadisticas.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstadisticasSection;