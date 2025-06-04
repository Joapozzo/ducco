import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ShoppingCart } from 'lucide-react';

interface CardProductOfferProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}

const CardProductOffer = ({ producto, onProductClick }: CardProductOfferProps) => {
    return (
        <div key={producto.id} className="group relative" onClick={() => onProductClick && onProductClick(producto)}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform">
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-500">
                            -{producto.descuento} OFF
                        </span>
                    </div>
                    <div className="absolute top-4 right-4">
                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300">
                            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <span
                        className="text-sm font-semibold uppercase tracking-wide"
                        style={{ color: "#F24026" }}
                    >
                        {producto.categoria}
                    </span>
                    <h3
                        className="text-xl font-bold mt-2 mb-3"
                        style={{ color: "#28110E" }}
                    >
                        {producto.nombre}
                    </h3>

                    <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl font-black" style={{ color: "#F24026" }}>
                            {producto.precio}
                        </span>
                        {producto.precioAnterior && (
                            <span className="text-lg text-gray-500 line-through">
                                {producto.precioAnterior}
                            </span>
                        )}
                    </div>

                    <button
                        className="w-full py-3 text-white font-bold rounded-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: "#F24026" }}
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Ver Oferta</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProductOffer;