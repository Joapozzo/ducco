import React, { useState, useEffect, useRef } from 'react';
import { productos } from '../data/ProductStatic'; 
import CardProductDestacado from './CardProductDestacado';
import { Producto } from '../types/productType';
import { useRouter } from 'next/navigation';

const ProductosDestacadosSection = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const productosDestacados = productos.filter(producto => producto.esDestacado);

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
            id="destacados" 
            className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" 
            style={{ backgroundColor: 'white' }}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 md:mb-20">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 transform transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                        style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                        Colección Premium
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 transform transition-all duration-1000 delay-200 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`} 
                        style={{ color: '#28110E' }}>
                        Productos Destacados
                    </h2>
                    <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                        Descubre nuestras piezas más exclusivas, cuidadosamente seleccionadas
                        por su diseño excepcional y calidad superior
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {productosDestacados.map((producto, index) => (
                        <div
                            key={producto.id}
                            className={`transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-16 opacity-0'
                            }`}
                            style={{ 
                                transitionDelay: isVisible ? `${600 + (index * 150)}ms` : '0ms'
                            }}
                        >
                            <CardProductDestacado 
                                producto={producto} 
                                onProductClick={handleProductClick} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductosDestacadosSection;