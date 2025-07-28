import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { productos } from '../data/ProductStatic';
import CardProductOffer from './CardProductOffer';
import { Producto } from '../types/productType';

const OfertasSection = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const productosEnOferta = productos.filter(producto => producto.esOferta);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProductClick = (producto: Producto) => {
    router.push(`/producto/${producto.id}`);
  };

  return (
    <section 
      ref={sectionRef}
      id="ofertas" 
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" 
      style={{ backgroundColor: '#28110E' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 transform transition-all duration-700 hover:scale-110 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
            style={{ backgroundColor: '#F24026', color: 'white' }}>
            🔥 Ofertas Limitadas
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Súper Descuentos
          </h2>
          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Aprovecha estos precios únicos en productos seleccionados.
            Ofertas por tiempo limitado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productosEnOferta.map((producto, index) => (
            <div
              key={producto.id}
              className={`transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 group ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${600 + (index * 150)}ms` : '0ms'
              }}
            >
              <div className="relative">
                <CardProductOffer 
                  producto={producto} 
                  onProductClick={handleProductClick} 
                />
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Elemento decorativo animado */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Ofertas actualizadas diariamente</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfertasSection;