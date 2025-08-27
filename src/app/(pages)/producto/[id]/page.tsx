"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Truck, Shield, Headphones, Star, Package, Ruler } from 'lucide-react';
import { productos } from '../../../data/ProductStatic';
import CardProduct from '../../../components/CardProduct';
import { Producto } from '@/app/types/productType';
import Image from 'next/image';
import PrecioSection from '@/app/components/PrecioSection';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default function ProductoPage({ params }: PageProps) {
    const { id } = use(params);

    const router = useRouter();
    const [producto, setProducto] = useState<Producto | null>(null);
    const [imagenActiva, setImagenActiva] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const productId = parseInt(id);
        const productoEncontrado = productos.find(p => p.id === productId);

        if (productoEncontrado) {
            setProducto(productoEncontrado);
        }
        setIsLoading(false);
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--ducco-orange)' }}></div>
                    <p className="text-xl" style={{ color: 'var(--ducco-gray)' }}>Cargando producto...</p>
                </div>
            </div>
        );
    }

    if (!producto) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Producto no encontrado</h1>
                    <p className="text-xl mb-8" style={{ color: 'var(--ducco-gray)' }}>El producto que buscas no existe.</p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-4 text-white font-bold rounded-xl hover:opacity-90 transition-all"
                        style={{ backgroundColor: 'var(--ducco-orange)' }}
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    const handleProductClick = (prod: Producto) => {
        router.push(`/producto/${prod.id}`);
    };

    // Productos relacionados
    const productosRelacionados = productos.filter(p =>
        p.categoria === producto.categoria && p.id !== producto.id
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb y navegación */}
            <div className="pt-30 pb-8 px-6 bg-white border-b">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-start justify-between flex-col md:flex-row lg:flex-row gap-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center space-x-3 transition-colors hover:opacity-80"
                            style={{ color: 'var(--ducco-gray)' }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-semibold">Volver</span>
                        </button>
                        <nav className="text-sm" style={{ color: 'var(--ducco-gray)' }}>
                            <span
                                className="cursor-pointer transition-colors hover:opacity-80"
                                style={{ color: 'var(--ducco-gray)' }}
                                onClick={() => router.push('/')}
                            >
                                Inicio
                            </span>
                            <span className="mx-2">/</span>
                            <span
                                className="cursor-pointer transition-colors hover:opacity-80"
                                style={{ color: 'var(--ducco-gray)' }}
                                onClick={() => router.push('/#catálogo')}
                            >
                                Catálogo
                            </span>
                            <span className="mx-2">/</span>
                            <span className="font-semibold" style={{ color: 'var(--ducco-brown)' }}>{producto.nombre}</span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="container mx-auto max-w-7xl px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Galería de imágenes */}
                    <div className="space-y-6">
                        {/* Imagen principal */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={producto.imagenes[imagenActiva]}
                                alt={producto.nombre}
                                width={600}
                                height={500}
                                className="w-full h-96 lg:h-[500px] object-cover"
                            />
                            <div className='flex items-center flex-col gap-2 w-full h-full'>
                                {producto.esDestacado && (
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 rounded-full text-sm font-bold text-white" style={{ backgroundColor: 'var(--ducco-orange)' }}>
                                            DESTACADO
                                        </span>
                                    </div>
                                )}
                                {producto.esOferta && (
                                    <div className={`absolute left-6 ${producto.esDestacado ? "top-16" : "top-6"}`}>
                                        <span className="px-4 py-2 rounded-full text-sm font-bold text-white bg-red-500">
                                            -{producto.descuento} OFF
                                        </span>
                                    </div>
                                )}
                            </div>
                            {/* Indicador de stock */}
                            <div className="absolute bottom-6 right-6">
                                {/* <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500 flex items-center gap-2">
                                    <Package className="w-3 h-3" />
                                    {producto.stock} disponibles
                                </span> */}
                            </div>
                        </div>

                        {/* Miniaturas */}
                        {producto.imagenes.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {producto.imagenes.map((imagen, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setImagenActiva(index)}
                                        className={`relative rounded-xl overflow-hidden h-20 transition-all duration-300 ${imagenActiva === index
                                            ? 'ring-4 scale-105'
                                            : 'hover:ring-2 ring-gray-300 hover:scale-105'
                                            }`}
                                        style={{
                                            '--tw-ring-color': imagenActiva === index ? 'var(--ducco-orange)' : undefined
                                        } as React.CSSProperties}
                                    >
                                        <Image
                                            src={imagen}
                                            alt={`Vista ${index + 1}`}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Información del producto */}
                    <div className="space-y-8">
                        {/* Encabezado */}
                        <div>
                            <span
                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4 text-white"
                                style={{ backgroundColor: 'var(--ducco-orange-100)' }}
                            >
                                {producto.categoria}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--ducco-brown)' }}>
                                {producto.nombre}
                            </h1>
                            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--ducco-gray)' }}>
                                {producto.descripcionCorta}
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: 'var(--ducco-gray)' }}>
                                {producto.descripcionCompleta}
                            </p>
                        </div>

                        {/* Rating ficticio */}
                        {/* <div className="flex items-center space-x-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <span style={{ color: 'var(--ducco-gray)' }}>(127 reseñas)</span>
                        </div> */}

                        {/* Precio */}
                        {/* <div className="py-6 border-y border-gray-200">
                            <div className="flex items-center space-x-4">
                                <span className="text-4xl font-black" style={{ color: 'var(--ducco-orange)' }}>
                                    {producto.precio || 'Consultar'}
                                </span>
                                {producto.precioAnterior && (
                                    <>
                                        <span className="text-2xl line-through" style={{ color: 'var(--ducco-gray)' }}>
                                            {producto.precioAnterior}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-red-500">
                                            Ahorrás {producto.descuento}
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="text-sm mt-2" style={{ color: 'var(--ducco-gray)' }}>
                                Precio válido por tiempo limitado. Consultá por financiación hasta 12 cuotas sin interés.
                            </p>
                        </div> */}
                        <PrecioSection producto={producto} />

                        {/* Dimensiones */}
                        <div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Dimensiones</h3>
                            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--ducco-beige)' }}>
                                <div className="flex items-center space-x-4">
                                    <Ruler className="w-5 h-5" style={{ color: 'var(--ducco-orange)' }} />
                                    <div style={{ color: 'var(--ducco-brown)' }}>
                                        <span className="font-semibold">Ancho:</span> {producto.dimensiones.ancho} ×
                                        <span className="font-semibold ml-2">Largo:</span> {producto.dimensiones.largo}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Variantes */}
                        {producto.variantes && (
                            <div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Variantes disponibles</h3>
                                <div className="p-4 rounded-xl border" style={{
                                    backgroundColor: 'var(--ducco-orange-50)',
                                    borderColor: 'var(--ducco-orange-100)'
                                }}>
                                    <p style={{ color: 'var(--ducco-brown)' }}>{producto.variantes}</p>
                                </div>
                            </div>
                        )}

                        {/* Características adicionales */}
                        {producto.caracteristicasAdicionales && (
                            <div>
                                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Características especiales</h3>
                                <div className="bg-white p-6 rounded-xl shadow-sm border">
                                    <p className="leading-relaxed" style={{ color: 'var(--ducco-gray)' }}>{producto.caracteristicasAdicionales}</p>
                                </div>
                            </div>
                        )}

                        {/* Beneficios adicionales */}
                        <div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Beneficios incluidos</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Entrega e instalación incluida</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Garantía extendida de fábrica</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Asesoramiento personalizado gratuito</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Fabricación artesanal con materiales premium</span>
                                </div>
                            </div>
                        </div>

                        {/* Información adicional */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--ducco-brown)' }}>Información de entrega</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center space-x-3">
                                    <Truck className="w-5 h-5" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Envío gratuito en Córdoba Capital y Gran Córdoba</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-5 h-5" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Garantía extendida de 2 años</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Headphones className="w-5 h-5" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>Atención personalizada especializada</span>
                                </div>
                                {/* <div className="flex items-center space-x-3">
                                    <Package className="w-5 h-5" style={{ color: 'var(--ducco-orange)' }} />
                                    <span style={{ color: 'var(--ducco-gray)' }}>{producto.stock} unidades disponibles en stock</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Productos relacionados */}
                {productosRelacionados.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-black mb-12 text-center" style={{ color: 'var(--ducco-brown)' }}>
                            Productos Relacionados
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {productosRelacionados.slice(0, 4).map(prod => (
                                <CardProduct
                                    key={prod.id}
                                    producto={prod}
                                    onProductClick={handleProductClick}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}