import React from 'react';
import { productos } from '../data/ProductStatic'; 
import CardProductDestacado from './CardProductDestacado';
import { Producto } from '../types/productType';
import { useRouter } from 'next/navigation';

const ProductosDestacadosSection = () => {
    const router = useRouter();
    const productosDestacados = productos.filter(producto => producto.esDestacado);

    const handleProductClick = (producto: Producto) => {
        router.push(`/producto/${producto.id}`);
    };
    return (
        <section id="destacados" className="py-32 px-6" style={{ backgroundColor: 'white' }}>
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                        Colección Premium
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: '#28110E' }}>
                        Productos Destacados
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descubre nuestras piezas más exclusivas, cuidadosamente seleccionadas
                        por su diseño excepcional y calidad superior
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productosDestacados.map((producto) => (
                        <CardProductDestacado producto={producto} key={producto.id} onProductClick={handleProductClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductosDestacadosSection;