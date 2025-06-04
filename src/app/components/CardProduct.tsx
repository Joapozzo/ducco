import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ArrowRight } from 'lucide-react';

interface CardProductProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}

const CardProduct = ({  producto, onProductClick }: CardProductProps) => {
    return (
        <div key={producto.id} className="group" onClick={() => onProductClick && onProductClick(producto)}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />
                    {producto.esDestacado && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                style={{ backgroundColor: '#F24026' }}>
                                DESTACADO
                            </span>
                        </div>
                    )}
                    {producto.esOferta && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-500">
                                -{producto.descuento} OFF
                            </span>
                        </div>
                    )}
                    <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                </div>

                <div className="p-6">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {producto.categoria}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: '#28110E' }}>
                        {producto.nombre}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        {producto.descripcion}
                    </p>

                    <div className="mb-4">
                        {producto.caracteristicas.slice(0, 2).map((caracteristica, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2"
                            >
                                {caracteristica}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-2xl font-black" style={{ color: '#F24026' }}>
                                {producto.precio}
                            </span>
                            {producto.precioAnterior && (
                                <div className="text-sm text-gray-500 line-through">
                                    {producto.precioAnterior}
                                </div>
                            )}
                        </div>
                        <button className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: '#28110E' }}>
                            <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;
