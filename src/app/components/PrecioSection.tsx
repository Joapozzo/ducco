import { useState } from 'react';
import { Sparkles, CreditCard, Clock } from 'lucide-react';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { Producto } from '../types/productType';

interface PrecioSectionProps {
    producto: Producto
}

const PrecioSection = ({ producto }: PrecioSectionProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { sendMessage } = useWhatsApp({
        defaultMessage: `Hola, me interesa el ${producto?.nombre}. ¿Podrían darme más información?`,
    });

    return (
        <div
            className="py-8 px-6 border-y border-gray-200 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden transform transition-all duration-500 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Elemento decorativo animado */}
            <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 transform transition-all duration-700 ${isHovered ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`}
            />

            <div className="flex items-center space-x-4 mb-4">
                {/* Precio principal */}
                <div className="relative">
                    <span
                        className={`text-4xl md:text-5xl font-black transform transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'
                            }`}
                        style={{ color: 'var(--ducco-orange)' }}
                    >
                        {producto.precio || 'Consultar'}
                    </span>
                    {/* Efecto de brillo */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform transition-all duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'
                            } pointer-events-none`}
                    />
                </div>

                {/* Precio anterior y descuento */}
                {producto.precioAnterior && (
                    <div className="flex flex-col space-y-2">
                        <span
                            className={`text-2xl line-through transform transition-all duration-300 ${isHovered ? 'scale-105 opacity-60' : 'scale-100 opacity-100'
                                }`}
                            style={{ color: 'var(--ducco-gray)' }}
                        >
                            {producto.precioAnterior}
                        </span>

                        <div className={`flex items-center space-x-2 transform transition-all duration-500 delay-100 ${isHovered ? 'translate-x-2' : 'translate-x-0'
                            }`}>
                            <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
                            <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg transform transition-all duration-300 hover:scale-110">
                                Ahorrás {producto.descuento}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Información adicional con iconos */}
            <div className="space-y-3">
                <div className={`flex items-center space-x-2 transform transition-all duration-500 ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-80'
                    }`}>
                    <Clock className="w-4 h-4 text-orange-500" />
                    <p className="text-sm font-medium" style={{ color: 'var(--ducco-gray)' }}>
                        Precio válido por tiempo limitado
                    </p>
                </div>

                <div className={`flex items-center space-x-2 transform transition-all duration-500 delay-100 ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-80'
                    }`}>
                    <CreditCard className="w-4 h-4 text-orange-500" />
                    <p className="text-sm font-medium" style={{ color: 'var(--ducco-gray)' }}>
                        Consultá por financiación hasta 12 cuotas sin interés
                    </p>
                </div>
            </div>

            {/* Botones de acción */}
            <div className={`mt-6 flex flex-col sm:flex-row gap-3 transform transition-all duration-700 delay-200 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
                }`}>
                <button
                    onClick={() => sendMessage()}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                    <span>Comprar Ahora</span>
                    <Sparkles className="w-5 h-5" />
                </button>

                <button
                    onClick={() => sendMessage("Hola, me interesa información sobre financiación para este producto. ¿Pueden ayudarme?")}
                    className="flex-1 border-2 border-orange-500 text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                    <CreditCard className="w-5 h-5" />
                    <span>Financiación</span>
                </button>
            </div>

            {/* Elemento decorativo de fondo */}
            <div
                className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full opacity-5 transform transition-all duration-1000 ${isHovered ? 'scale-150 rotate-45' : 'scale-100 rotate-0'
                    }`}
                style={{ backgroundColor: 'var(--ducco-orange)' }}
            />
        </div>
    );
};

export default PrecioSection;