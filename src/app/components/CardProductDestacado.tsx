import Image from "next/image";
import { Producto } from "../types/productType";
import { Heart, ArrowRight, Package, Ruler } from 'lucide-react';

interface CardProductDestacadoProps {
    producto: Producto;
    onProductClick?: (producto: Producto) => void;
}

const CardProductDestacado = ({ producto, onProductClick }: CardProductDestacadoProps) => {
    return (
        <div
            key={producto.id}
            className="group relative cursor-pointer"
            onClick={() => onProductClick && onProductClick(producto)}
        >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform h-[700px] flex flex-col">
                <div className="relative overflow-hidden">
                    <Image
                        src={producto.imagenes[0]}
                        alt={producto.nombre}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        width={300}
                        height={400}
                    />

                    {/* Badge destacado */}
                    <div className="absolute top-4 left-4">
                        <span
                            className="px-3 py-1 rounded-full text-xs font-bold text-white"
                            style={{ background: "var(--gradient-principal)" }}
                        >
                            DESTACADO
                        </span>
                    </div>

                    {/* Botón favorito */}
                    <button
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Lógica de favoritos aquí
                        }}
                    >
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>

                    {/* Indicador de stock */}
                    <div className="absolute bottom-4 right-4">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${producto.stock > 5
                                    ? "bg-green-500"
                                    : producto.stock > 0
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                }`}
                        >
                            <Package className="w-3 h-3" />
                            {producto.stock > 0
                                ? `${producto.stock} disponibles`
                                : "Sin stock"}
                        </span>
                    </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {producto.categoria}
                    </span>
                    <h3
                        className="text-2xl font-bold mt-2 mb-3"
                        style={{ color: "var(--ducco-orange)" }}
                    >
                        {producto.nombre}
                    </h3>
                    <p className="text-gray-600 mb-4 text-base leading-relaxed">
                        {producto.descripcionCorta}
                    </p>

                    {/* Dimensiones y variantes */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
                                <Ruler className="w-3 h-3 text-gray-600" />
                                <span className="text-xs text-gray-700 font-medium">
                                    {producto.dimensiones.ancho} × {producto.dimensiones.largo}
                                </span>
                            </div>
                            {producto.variantes && (
                                <span className="inline-block bg-[var(--ducco-orange-50)] rounded-full px-3 py-1 text-xs text-center text-[var(--ducco-orange)] font-medium">
                                    Variantes disponibles
                                </span>
                            )}
                        </div>

                        {/* Descripción completa truncada */}
                        {/* <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {producto.descripcionCompleta}
                        </p> */}
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <span
                                className="text-3xl font-black"
                                style={{ color: "var(--ducco-orange)" }}
                            >
                                {producto.precio || "Consultar"}
                            </span>
                            {producto.precioAnterior && (
                                <div className="text-base text-gray-500 line-through mt-1">
                                    {producto.precioAnterior}
                                </div>
                            )}
                        </div>
                        <button
                            className="p-4 rounded-full transition-all duration-300 hover:scale-110 text-white shadow-lg"
                            style={{ background: "var(--ducco-orange)" }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProductDestacado;