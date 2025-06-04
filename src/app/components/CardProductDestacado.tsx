import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ArrowRight, } from 'lucide-react';

interface CardProductDestacadoProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}

const CardProductDestacado = ({ producto, onProductClick }: CardProductDestacadoProps) => {
    return (
        <div key={producto.id} className="group relative" onClick={() => onProductClick && onProductClick(producto)}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform">
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: '#F24026' }}>
                            DESTACADO
                        </span>
                    </div>
                    <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                </div>

                <div className="p-8">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {producto.categoria}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: '#28110E' }}>
                        {producto.nombre}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {producto.descripcion}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-black" style={{ color: '#F24026' }}>
                            {producto.precio}
                        </span>
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

export default CardProductDestacado;