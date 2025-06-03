import { useState } from 'react';
import { productos } from '../data/ProductStatic';
import CardProduct from './CardProduct';
import { useRouter } from 'next/navigation';
import { Producto } from '../types/productType';

const CatalogoSection = () => {
    const router = useRouter();
    const categorias = ["Todos", "Sillones", "Mesas", "Sillas", "Racks", "Dormitorio", "Exterior", "Oficina", "Almacenamiento"];

    const [categoriaActiva, setCategoriaActiva] = useState("Todos");

    const productosFiltrados = categoriaActiva === "Todos"
        ? productos
        : productos.filter(producto => producto.categoria === categoriaActiva);

    const handleProductClick = (producto: Producto) => {
        router.push(`/producto/${producto.id}`);
    };

    return (
        <section id="catálogo" className="py-32 px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                        Catálogo Completo
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: '#28110E' }}>
                        Nuestra Colección
                    </h2>
                </div>

                {/* Filtros mejorados */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categorias.map((categoria) => (
                        <button
                            key={categoria}
                            onClick={() => setCategoriaActiva(categoria)}
                            className={`px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${categoriaActiva === categoria
                                ? 'text-white shadow-xl scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
                                }`}
                            style={{
                                backgroundColor: categoriaActiva === categoria ? '#F24026' : undefined
                            }}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productosFiltrados.map((producto) => (
                        <CardProduct producto={producto} key={producto.id} onProductClick={handleProductClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogoSection;