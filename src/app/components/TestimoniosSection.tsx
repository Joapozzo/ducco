import { testimonios } from "../data/TestimonioStatic";
import { Star, Quote } from 'lucide-react';

// Testimonios renovados
const TestimoniosSection = () => {
    return (
        <section className="py-32 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                        Testimonios
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: '#28110E' }}>
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonios.map((testimonio) => (
                        <div
                            key={testimonio.id}
                            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform relative"
                        >
                            <div className="absolute top-6 left-6">
                                <Quote className="w-8 h-8 text-orange-200" />
                            </div>

                            <div className="flex justify-center mb-6 mt-8">
                                {[...Array(testimonio.rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                                &lsquo;{testimonio.comentario}&rsquo;
                            </p>

                            <div className="flex items-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                                    style={{ backgroundColor: '#F24026' }}
                                >
                                    {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg" style={{ color: '#28110E' }}>
                                        {testimonio.nombre}
                                    </h4>
                                    <p className="text-gray-600">
                                        {testimonio.cargo} en {testimonio.empresa}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimoniosSection;