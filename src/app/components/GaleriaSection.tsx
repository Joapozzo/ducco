import Image from "next/image";

// Galería mejorada
const GaleriaSection = () => {
    const imagenesGaleria = [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop"
    ];

    return (
        <section id="galería" className="py-32 px-6" style={{ backgroundColor: '#E4DAAE' }}>
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: '#F24026', color: 'white' }}>
                        Inspiración & Estilo
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: '#28110E' }}>
                        Galería de Ambientes
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3B3B3B' }}>
                        Explora cómo nuestros muebles transforman espacios reales
                        en ambientes únicos llenos de personalidad
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {imagenesGaleria.map((imagen, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform cursor-pointer"
                        >
                            <Image
                                src={imagen}
                                alt={`Ambiente ${index + 1}`}
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Ambiente Premium</h3>
                                    <p className="text-sm opacity-90">Ver más detalles</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GaleriaSection;