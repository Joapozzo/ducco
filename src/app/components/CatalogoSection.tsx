import { useState, useEffect, useRef } from 'react';
import { productos, getCategorias, getProductosPorCategoria } from '../data/ProductStatic';
import CardProduct from './CardProduct';
import { useRouter } from 'next/navigation';
import { Producto, CategoriaProducto } from '../types/productType';
import { useWhatsApp } from '../hooks/useWhatsApp';

const CatalogoSection = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [productsVisible, setProductsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    // Categorías basadas en los nuevos tipos
    const categorias: (CategoriaProducto | "Todos")[] = ["Todos", ...getCategorias()];
    const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto | "Todos">("Todos");

    const { sendMessage } = useWhatsApp({
        defaultMessage: "Hola, ¿puedes ayudarme a crear mi espacio?",
    });
    
    // Filtrado usando las nuevas funciones helper
    const productosFiltrados = categoriaActiva === "Todos"
        ? productos
        : getProductosPorCategoria(categoriaActiva as CategoriaProducto);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTimeout(() => setFiltersVisible(true), 600);
                    setTimeout(() => setProductsVisible(true), 1000);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Reset animation when category changes
    useEffect(() => {
        setProductsVisible(false);
        const timeout = setTimeout(() => setProductsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, [categoriaActiva]);

    const handleProductClick = (producto: Producto) => {
        router.push(`/producto/${producto.id}`);
    };

    // Función para obtener el emoji de cada categoría
    const getCategoriaIcon = (categoria: CategoriaProducto | "Todos"): string => {
        switch (categoria) {
            case "Mesa": return "🪑";
            case "Sillón": return "🛋️";
            case "Sillas": return "💺";
            case "Todos": return "🏠";
            default: return "📦";
        }
    };

    // Contador de productos por categoría
    const getProductCount = (categoria: CategoriaProducto | "Todos"): number => {
        return categoria === "Todos"
            ? productos.length
            : getProductosPorCategoria(categoria as CategoriaProducto).length;
    };

    return (
        <section 
            ref={sectionRef}
            id="catálogo" 
            className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 md:mb-20">
                    <span
                        className={`inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide mb-6 transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                        style={{
                            backgroundColor: 'var(--ducco-beige)',
                            color: 'var(--ducco-brown)'
                        }}
                    >
                        Catálogo Completo
                    </span>
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 transform transition-all duration-1000 delay-200 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                        style={{ color: 'var(--ducco-brown)' }}
                    >
                        Nuestra Colección
                    </h2>
                    <p
                        className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                        }`}
                        style={{ color: 'var(--ducco-gray)' }}
                    >
                        Descubre muebles de calidad premium diseñados para transformar tu hogar.
                        Cada pieza combina diseño contemporáneo con la artesanía tradicional.
                    </p>
                </div>

                {/* Filtros mejorados con iconos y contadores */}
                <div className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 transform transition-all duration-1000 ${
                    filtersVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    {categorias.map((categoria, index) => (
                        <button
                            key={categoria}
                            onClick={() => setCategoriaActiva(categoria)}
                            className={`group px-4 md:px-6 py-3 md:py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 md:gap-3 ${
                                categoriaActiva === categoria
                                    ? 'text-white shadow-xl scale-105'
                                    : 'bg-white hover:bg-gray-50 shadow-lg'
                            }`}
                            style={{
                                backgroundColor: categoriaActiva === categoria ? 'var(--ducco-orange)' : undefined,
                                color: categoriaActiva === categoria ? 'white' : 'var(--ducco-brown)',
                                transitionDelay: filtersVisible ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            <span className="text-base md:text-lg">
                                {getCategoriaIcon(categoria)}
                            </span>
                            <div className="flex flex-col items-start">
                                <span className="text-sm md:text-base">{categoria}</span>
                                <span
                                    className={`text-xs opacity-75 ${
                                        categoriaActiva === categoria ? 'text-white' : ''
                                    }`}
                                    style={{
                                        color: categoriaActiva === categoria ? 'white' : 'var(--ducco-gray)'
                                    }}
                                >
                                    {getProductCount(categoria)} productos
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Información de resultados */}
                <div className={`text-center mb-8 transform transition-all duration-700 ${
                    filtersVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <p
                        className="text-base md:text-lg font-medium"
                        style={{ color: 'var(--ducco-gray)' }}
                    >
                        {categoriaActiva === "Todos"
                            ? `Mostrando todos los ${productosFiltrados.length} productos`
                            : `${productosFiltrados.length} productos en ${categoriaActiva}`
                        }
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto, index) => (
                            <div
                                key={producto.id}
                                className={`transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                                    productsVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-16 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: productsVisible ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <CardProduct
                                    producto={producto}
                                    onProductClick={handleProductClick}
                                />
                            </div>
                        ))
                    ) : (
                        <div className={`col-span-full text-center py-16 transform transition-all duration-1000 ${
                            productsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                        }`}>
                            <div className="max-w-md mx-auto">
                                <span className="text-6xl mb-4 block">🔍</span>
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: 'var(--ducco-brown)' }}
                                >
                                    No hay productos disponibles
                                </h3>
                                <p
                                    className="text-base"
                                    style={{ color: 'var(--ducco-gray)' }}
                                >
                                    No encontramos productos en la categoría &quot;{categoriaActiva}&quot;.
                                    Prueba con otra categoría o vuelve a &quot;Todos&quot;.
                                </p>
                                <button
                                    onClick={() => setCategoriaActiva("Todos")}
                                    className="mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                                    style={{ backgroundColor: 'var(--ducco-orange)' }}
                                >
                                    Ver todos los productos
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Destacados adicionales */}
                {categoriaActiva === "Todos" && (
                    <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
                        productsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <div
                            className="inline-block p-6 rounded-3xl hover:scale-105 transition-transform duration-300"
                            style={{ backgroundColor: 'var(--ducco-orange-50)' }}
                        >
                            <h3
                                className="text-xl md:text-2xl font-bold mb-2"
                                style={{ color: 'var(--ducco-brown)' }}
                            >
                                ¿Necesitás asesoramiento?
                            </h3>
                            <p
                                className="text-sm md:text-base mb-4"
                                style={{ color: 'var(--ducco-gray)' }}
                            >
                                Nuestro equipo te ayuda a encontrar el mueble perfecto para tu espacio
                            </p>
                            <button
                                className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                                style={{ backgroundColor: 'var(--ducco-orange)' }}
                                onClick={() => sendMessage()}
                            >
                                Contactar asesor
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CatalogoSection;