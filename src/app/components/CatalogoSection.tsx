import { useState } from 'react';
import { productos, getCategorias, getProductosPorCategoria } from '../data/ProductStatic';
import CardProduct from './CardProduct';
import { useRouter } from 'next/navigation';
import { Producto, CategoriaProducto } from '../types/productType';

const CatalogoSection = () => {
    const router = useRouter();

    // Categorías basadas en los nuevos tipos
    const categorias: (CategoriaProducto | "Todos")[] = ["Todos", ...getCategorias()];
    const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto | "Todos">("Todos");

    // Filtrado usando las nuevas funciones helper
    const productosFiltrados = categoriaActiva === "Todos"
        ? productos
        : getProductosPorCategoria(categoriaActiva as CategoriaProducto);

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
        <section id="catálogo" className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span
                        className="inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{
                            backgroundColor: 'var(--ducco-beige)',
                            color: 'var(--ducco-brown)'
                        }}
                    >
                        Catálogo Completo
                    </span>
                    <h2
                        className="text-5xl md:text-6xl font-black mb-8"
                        style={{ color: 'var(--ducco-brown)' }}
                    >
                        Nuestra Colección
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: 'var(--ducco-gray)' }}
                    >
                        Descubre muebles de calidad premium diseñados para transformar tu hogar.
                        Cada pieza combina diseño contemporáneo con la artesanía tradicional.
                    </p>
                </div>

                {/* Filtros mejorados con iconos y contadores */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categorias.map((categoria) => (
                        <button
                            key={categoria}
                            onClick={() => setCategoriaActiva(categoria)}
                            className={`group px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${categoriaActiva === categoria
                                    ? 'text-white shadow-xl scale-105'
                                    : 'bg-white hover:bg-gray-50 shadow-lg'
                                }`}
                            style={{
                                backgroundColor: categoriaActiva === categoria ? 'var(--ducco-orange)' : undefined,
                                color: categoriaActiva === categoria ? 'white' : 'var(--ducco-brown)'
                            }}
                        >
                            <span className="text-lg">
                                {getCategoriaIcon(categoria)}
                            </span>
                            <div className="flex flex-col items-start">
                                <span className="text-base">{categoria}</span>
                                <span
                                    className={`text-xs opacity-75 ${categoriaActiva === categoria ? 'text-white' : ''
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
                <div className="text-center mb-8">
                    <p
                        className="text-lg font-medium"
                        style={{ color: 'var(--ducco-gray)' }}
                    >
                        {categoriaActiva === "Todos"
                            ? `Mostrando todos los ${productosFiltrados.length} productos`
                            : `${productosFiltrados.length} productos en ${categoriaActiva}`
                        }
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto) => (
                            <CardProduct
                                producto={producto}
                                key={producto.id}
                                onProductClick={handleProductClick}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
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
                                    className="mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90"
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
                    <div className="mt-16 text-center">
                        <div
                            className="inline-block p-6 rounded-3xl"
                            style={{ backgroundColor: 'var(--ducco-orange-50)' }}
                        >
                            <h3
                                className="text-2xl font-bold mb-2"
                                style={{ color: 'var(--ducco-brown)' }}
                            >
                                ¿Necesitás asesoramiento?
                            </h3>
                            <p
                                className="text-base mb-4"
                                style={{ color: 'var(--ducco-gray)' }}
                            >
                                Nuestro equipo te ayuda a encontrar el mueble perfecto para tu espacio
                            </p>
                            <button
                                className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                                style={{ backgroundColor: 'var(--ducco-orange)' }}
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