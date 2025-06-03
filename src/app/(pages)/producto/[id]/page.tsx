"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Truck, Shield, Headphones, Star } from 'lucide-react';
import { productos } from '../../../data/ProductStatic';
import CardProduct from '../../../components/CardProduct';
import { Producto } from '@/app/types/productType';
import Image from 'next/image';

type PageProps = {
    params: Promise<{ id: string }>;
};

export default function ProductoPage({ params }: PageProps) {
    const { id } = use(params);

    const router = useRouter();
    const [producto, setProducto] = useState<Producto | null>(null);
    // const [cantidad, setCantidad] = useState(1);
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
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ducco-orange mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Cargando producto...</p>
                </div>
            </div>
        );
    }

    if (!producto) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-ducco-brown mb-4">Producto no encontrado</h1>
                    <p className="text-xl text-gray-600 mb-8">El producto que buscas no existe.</p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-4 bg-ducco-orange text-white font-bold rounded-xl hover:opacity-90 transition-all"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    // Imágenes adicionales para la galería
    const imagenesGaleria = [
        producto.imagen,
        producto.imagen + "?random=1",
        producto.imagen + "?random=2",
        producto.imagen + "?random=3"
    ];

    // const incrementarCantidad = () => setCantidad(prev => prev + 1);
    // const decrementarCantidad = () => setCantidad(prev => prev > 1 ? prev - 1 : 1);

    // const handleAddToCart = () => {
    //     console.log(`Agregado al carrito: ${producto.nombre} x${cantidad}`);
    //     // Aquí iría la lógica para agregar al carrito
    // };

    // const handleAddToFavorites = () => {
    //     console.log(`Agregado a favoritos: ${producto.nombre}`);
    //     // Aquí iría la lógica para agregar a favoritos
    // };

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
            <div className="pt-24 pb-8 px-6 bg-white border-b">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center space-x-3 text-gray-600 hover:text-ducco-orange transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-semibold">Volver</span>
                        </button>

                        <nav className="text-sm text-gray-500">
                            <span
                                className="hover:text-ducco-orange cursor-pointer"
                                onClick={() => router.push('/')}
                            >
                                Inicio
                            </span>
                            <span className="mx-2">/</span>
                            <span
                                className="hover:text-ducco-orange cursor-pointer"
                                onClick={() => router.push('/#catálogo')}
                            >
                                Catálogo
                            </span>
                            <span className="mx-2">/</span>
                            <span className="text-ducco-brown font-semibold">{producto.nombre}</span>
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
                                src={imagenesGaleria[imagenActiva]}
                                alt={producto.nombre}
                                className="w-full h-96 lg:h-[500px] object-cover"
                            />
                            {producto.esDestacado && (
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 rounded-full text-sm font-bold text-white bg-ducco-orange">
                                        DESTACADO
                                    </span>
                                </div>
                            )}
                            {producto.esOferta && (
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 rounded-full text-sm font-bold text-white bg-red-500">
                                        -{producto.descuento} OFF
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Miniaturas */}
                        <div className="grid grid-cols-4 gap-4">
                            {imagenesGaleria.map((imagen, index) => (
                                <button
                                    key={index}
                                    onClick={() => setImagenActiva(index)}
                                    className={`relative rounded-xl overflow-hidden h-20 transition-all duration-300 ${imagenActiva === index
                                        ? 'ring-4 ring-ducco-orange scale-105'
                                        : 'hover:ring-2 ring-gray-300 hover:scale-105'
                                        }`}
                                >
                                    <Image
                                        src={imagen}
                                        alt={`Vista ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Información del producto */}
                    <div className="space-y-8">
                        {/* Encabezado */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4 bg-ducco-beige text-ducco-brown">
                                {producto.categoria}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-black mb-4 text-ducco-brown leading-tight">
                                {producto.nombre}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {producto.descripcion}. Mueble de alta calidad diseñado para brindar comodidad y
                                elegancia a tu hogar. Fabricado con materiales premium y acabados de primera línea
                                que garantizan durabilidad y belleza a lo largo del tiempo.
                            </p>
                        </div>

                        {/* Rating ficticio */}
                        <div className="flex items-center space-x-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-600">(127 reseñas)</span>
                        </div>

                        {/* Precio */}
                        <div className="py-6 border-y border-gray-200">
                            <div className="flex items-center space-x-4">
                                <span className="text-4xl font-black text-ducco-orange">
                                    {producto.precio}
                                </span>
                                {producto.precioAnterior && (
                                    <>
                                        <span className="text-2xl text-gray-500 line-through">
                                            {producto.precioAnterior}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-red-500">
                                            Ahorrás {producto.descuento}
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Precio válido por tiempo limitado. Consultá por financiación hasta 12 cuotas sin interés.
                            </p>
                        </div>

                        {/* Características */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-ducco-brown">Características destacadas</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {producto.caracteristicas.map((caracteristica, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Check className="w-5 h-5 text-ducco-orange flex-shrink-0" />
                                        <span className="text-gray-700">{caracteristica}</span>
                                    </div>
                                ))}
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-ducco-orange flex-shrink-0" />
                                    <span className="text-gray-700">Entrega e instalación incluida</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-ducco-orange flex-shrink-0" />
                                    <span className="text-gray-700">Garantía extendida de fábrica</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Check className="w-5 h-5 text-ducco-orange flex-shrink-0" />
                                    <span className="text-gray-700">Asesoramiento personalizado gratuito</span>
                                </div>
                            </div>
                        </div>

                        {/* Selector de cantidad */}
                        {/* <div>
                            <h3 className="text-xl font-bold mb-4 text-ducco-brown">Cantidad</h3>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={decrementarCantidad}
                                    className="p-3 rounded-full border-2 border-gray-300 hover:border-ducco-orange hover:bg-ducco-orange hover:text-white transition-all duration-300"
                                >
                                    <Minus className="w-5 h-5" />
                                </button>
                                <span className="text-2xl font-bold text-ducco-brown min-w-[3rem] text-center">
                                    {cantidad}
                                </span>
                                <button
                                    onClick={incrementarCantidad}
                                    className="p-3 rounded-full border-2 border-gray-300 hover:border-ducco-orange hover:bg-ducco-orange hover:text-white transition-all duration-300"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div> */}

                        {/* Botones de acción */}
                        {/* <div className="space-y-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-5 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:opacity-90 hover:scale-105 transform shadow-xl flex items-center justify-center space-x-3 bg-ducco-orange"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                <span>Agregar al carrito • {cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}</span>
                            </button>

                            <button
                                onClick={handleAddToFavorites}
                                className="w-full py-5 text-ducco-brown font-bold text-lg rounded-2xl border-2 border-ducco-brown hover:bg-ducco-brown hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <Heart className="w-6 h-6" />
                                <span>Agregar a favoritos</span>
                            </button>
                        </div> */}

                        {/* Información adicional */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4 text-ducco-brown">Información de entrega</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center space-x-3">
                                    <Truck className="w-5 h-5 text-ducco-orange" />
                                    <span>Envío gratuito en CABA y GBA (48-72hs)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-5 h-5 text-ducco-orange" />
                                    <span>Garantía extendida de 2 años</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Headphones className="w-5 h-5 text-ducco-orange" />
                                    <span>Atención personalizada 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Productos relacionados */}
                {productosRelacionados.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-black mb-12 text-ducco-brown text-center">
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