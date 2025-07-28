import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ArrowRight, Package } from 'lucide-react';

interface CardProductProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}


const CardProduct = ({ producto, onProductClick }: CardProductProps) => {
    return (
        <div key={producto.id} className="group cursor-pointer" onClick={() => onProductClick && onProductClick(producto)}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform h-[600px] flex flex-col">
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagenes[0]}
                        alt={producto.nombre}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />

                    {/* Badges superiores */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {producto.esDestacado && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                style={{ backgroundColor: 'var(--ducco-orange)' }}>
                                DESTACADO
                            </span>
                        )}
                        {producto.esOferta && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-500">
                                -{producto.descuento} OFF
                            </span>
                        )}
                    </div>

                    {/* Botón favorito */}
                    <button
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Lógica de favoritos aquí
                        }}
                    >
                        <Heart className="w-5 h-5 hover:text-red-500" style={{ color: 'var(--ducco-gray)' }} />
                    </button>

                    {/* Indicador de stock */}
                    <div className="absolute bottom-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${producto.stock > 5 ? 'bg-green-500' : producto.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}>
                            <Package className="w-3 h-3" />
                            {producto.stock > 0 ? `${producto.stock} disponibles` : 'Sin stock'}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--ducco-gray)' }}>
                            {producto.categoria}
                        </span>
                        <h3 className="text-xl font-bold mt-2 mb-3" style={{ color: 'var(--ducco-brown)' }}>
                            {producto.nombre}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--ducco-gray)' }}>
                            {producto.descripcionCorta}
                        </p>

                        {/* Dimensiones */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block rounded-full px-3 py-1 text-xs text-center" style={{
                                    backgroundColor: 'var(--ducco-beige)',
                                    color: 'var(--ducco-brown)'
                                }}>
                                    {producto.dimensiones.ancho} × {producto.dimensiones.largo}
                                </span>
                                {producto.variantes && (
                                    <span className="inline-block rounded-full px-3 py-1 text-xs text-white text-center" style={{
                                        backgroundColor: 'var(--ducco-orange-100)'
                                    }}>
                                        Variantes disponibles
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-2xl font-black" style={{ color: 'var(--ducco-orange)' }}>
                                {producto.precio || 'Consultar'}
                            </span>
                            {producto.precioAnterior && (
                                <div className="text-sm line-through" style={{ color: 'var(--ducco-gray)' }}>
                                    {producto.precioAnterior}
                                </div>
                            )}
                        </div>
                        <button
                            className="p-3 rounded-full transition-all duration-300 hover:scale-110 text-white"
                            style={{ backgroundColor: 'var(--ducco-orange)' }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;