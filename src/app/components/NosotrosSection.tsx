import { Award, Users, Shield, Headphones } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const NosotrosSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        { icon: <Award className="w-6 h-6" />, text: "Calidad Premium" },
        { icon: <Users className="w-6 h-6" />, text: "Diseño Personalizado" },
        { icon: <Shield className="w-6 h-6" />, text: "Garantía Extendida" },
        { icon: <Headphones className="w-6 h-6" />, text: "Atención Especializada" }
    ];

    const URI_BASE_VIDEOS = process.env.NEXT_PUBLIC_CLOUDINARY_VIDEOS_BASE;

    return (
        <section
            ref={sectionRef}
            id="nosotros"
            className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Contenido de texto */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}>
                        <div className="mb-8">
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                                style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                                Nuestra Historia
                            </span>
                            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ color: '#28110E' }}>
                                Creamos experiencias, no solo muebles
                            </h2>
                        </div>

                        <div className={`space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <p>
                                En Duccó, cada pieza cuenta una historia única. Desde 1985, hemos sido pioneros
                                en el diseño de espacios excepcionales que trascienden tendencias y reflejan
                                la esencia de quienes los habitan.
                            </p>
                            <p>
                                Nuestra pasión por la excelencia nos ha convertido en referentes del sector,
                                fusionando técnicas artesanales tradicionales con innovación contemporánea
                                para crear muebles que duran generaciones.
                            </p>
                        </div>

                        {/* Características destacadas */}
                        <div className={`mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300 delay-${900 + (index * 100)}`}
                                    style={{
                                        transitionDelay: isVisible ? `${900 + (index * 100)}ms` : '0ms',
                                        transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.9)',
                                        opacity: isVisible ? 1 : 0
                                    }}
                                >
                                    <div className="p-2 rounded-lg transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                                        style={{ backgroundColor: '#F24026', color: 'white' }}>
                                        {item.icon}
                                    </div>
                                    <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Grid de videos */}
                    <div className={`relative transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {/* Video 1 */}
                            <div className={`transform transition-all duration-1000 delay-600 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                }`}>
                                <video
                                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={`${URI_BASE_VIDEOS}portfolio-videos/video-1.mp4`} type="video/mp4" />
                                </video>
                            </div>

                            {/* Video 2 */}
                            <div className={`transform transition-all duration-1000 delay-800 hover:scale-105 mt-8 sm:mt-12 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                }`}>
                                <video
                                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={`${URI_BASE_VIDEOS}portfolio-videos/video-2.mp4`} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Elemento decorativo con estadística */}
                        <div className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl shadow-2xl transform transition-all duration-1000 delay-1000 hover:scale-110 hover:rotate-3 ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-8 opacity-0 rotate-12'
                            }`}
                            style={{ backgroundColor: '#F24026' }}>
                            <div className="flex items-center justify-center h-full text-white text-center p-3 sm:p-4">
                                <div>
                                    <div className="text-xl sm:text-2xl font-black">35+</div>
                                    <div className="text-xs font-medium">Años</div>
                                </div>
                            </div>
                        </div>

                        {/* Video adicional en el fondo (solo desktop) */}
                        {/* <div className={`hidden lg:block absolute top-12 -left-12 transform transition-all duration-1000 delay-1200 hover:scale-105 ${
                            isVisible ? 'translate-x-0 opacity-60' : '-translate-x-12 opacity-0'
                        }`}>
                            <video
                                className="w-32 h-40 object-cover rounded-xl shadow-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videos/video-3.mp4" type="video/mp4" />
                            </video>
                        </div> */}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover\\:shadow-3xl:hover {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </section>
    );
};

export default NosotrosSection;