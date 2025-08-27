import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ShoppingCart, Package, Ruler, Percent } from 'lucide-react';

interface CardProductOfferProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}

const CardProductOffer = ({ producto, onProductClick }: CardProductOfferProps) => {
    return (
        <div 
            key={producto.id} 
            className="group relative cursor-pointer" 
            onClick={() => onProductClick && onProductClick(producto)}
        >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform h-[700px] flex flex-col border-2" style={{ borderColor: 'var(--ducco-orange-50)' }}>
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagenes[0]}
                        alt={producto.nombre}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />
                    
                    {/* Badge de oferta más prominente */}
                    <div className="absolute top-4 left-4">
                        <div className="relative">
                            <span className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg flex items-center gap-1" style={{ backgroundColor: 'var(--ducco-orange)' }}>
                                <Percent className="w-3 h-3" />
                                -{producto.descuento} OFF
                            </span>
                            <div className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: 'var(--ducco-orange)' }}></div>
                        </div>
                    </div>

                    {/* Botón favorito */}
                    <button 
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Lógica de favoritos aquí
                        }}
                    >
                        <Heart className="w-5 h-5 text-gray-600" style={{ color: 'var(--ducco-gray)' }} />
                    </button>

                    {/* Indicador de stock */}
                    {/* <div className="absolute bottom-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
                            producto.stock > 5 ? 'bg-green-500' : producto.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}>
                            <Package className="w-3 h-3" />
                            {producto.stock > 0 ? `${producto.stock} disponibles` : 'Sin stock'}
                        </span>
                    </div> */}

                    {/* Banner de urgencia */}
                    <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse" style={{ backgroundColor: 'var(--ducco-orange-200)' }}>
                            🔥 Oferta limitada
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <span 
                            className="text-sm font-semibold uppercase tracking-wide"
                            style={{ color: 'var(--ducco-orange)' }}
                        >
                            {producto.categoria} EN OFERTA
                        </span>
                        <h3 
                            className="text-xl font-bold mt-2 mb-3"
                            style={{ color: 'var(--ducco-brown)' }}
                        >
                            {producto.nombre}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{ color: 'var(--ducco-gray)' }}>
                            {producto.descripcionCorta}
                        </p>

                        {/* Dimensiones y variantes */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-1 rounded-full px-3 py-1" style={{ backgroundColor: 'var(--ducco-beige)' }}>
                                    <Ruler className="w-3 h-3" style={{ color: 'var(--ducco-brown)' }} />
                                    <span className="text-xs font-medium" style={{ color: 'var(--ducco-brown)' }}>
                                        {producto.dimensiones.ancho} × {producto.dimensiones.largo}
                                    </span>
                                </div>
                                {producto.variantes && (
                                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white text-center" style={{ backgroundColor: 'var(--ducco-orange-100)' }}>
                                        Variantes disponibles
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Precio destacado */}
                    <div className="p-4 rounded-2xl border mb-4" style={{ 
                        backgroundColor: 'var(--ducco-orange-50)', 
                        borderColor: 'var(--ducco-orange-100)' 
                    }}>
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <span className="text-sm font-medium" style={{ color: 'var(--ducco-brown)' }}>Precio especial</span>
                                <div className="flex items-center space-x-3">
                                    <span className="text-3xl font-black" style={{ color: 'var(--ducco-orange)' }}>
                                        {producto.precio || 'Consultar'}
                                    </span>
                                    {producto.precioAnterior && (
                                        <span className="text-lg line-through" style={{ color: 'var(--ducco-gray)' }}>
                                            {producto.precioAnterior}
                                        </span>
                                    )}
                                </div>
                                {producto.precioAnterior && (
                                    <span className="text-sm font-semibold" style={{ color: 'var(--ducco-brown)' }}>
                                        ¡Ahorrás {producto.descuento}!
                                    </span>
                                )}
                            </div>
                        </div>
                        
                        <button
                            className="w-full py-3 text-white font-bold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                            style={{ backgroundColor: 'var(--ducco-orange)' }}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span>Ver Oferta</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProductOffer;