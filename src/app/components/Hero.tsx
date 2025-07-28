import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsLoaded(true);
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-39">
            {/* Fondo con gradiente y parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=1000&fit=crop)',
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>

            {/* Elementos decorativos flotantes */}
            <div className={`absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 transform transition-all duration-2000 ${
                isLoaded ? 'translate-y-0 rotate-0' : '-translate-y-20 -rotate-45'
            }`} style={{ backgroundColor: '#F24026' }}></div>
            
            <div className={`absolute bottom-32 right-16 w-24 h-24 rounded-full opacity-15 transform transition-all duration-2000 delay-300 ${
                isLoaded ? 'translate-y-0 rotate-0' : 'translate-y-20 rotate-45'
            }`} style={{ backgroundColor: '#F24026' }}></div>

            <div className={`absolute top-1/2 right-10 w-16 h-16 rounded-full opacity-10 transform transition-all duration-2000 delay-500 ${
                isLoaded ? 'translate-x-0 scale-100' : 'translate-x-20 scale-75'
            }`} style={{ backgroundColor: '#F24026' }}></div>

            {/* Contenido principal */}
            <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
                <div className={`mb-8 transform transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
                }`}>
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-1"
                        style={{ backgroundColor: '#F24026', color: 'white' }}>
                        ✨ Muebles Premium desde 1985
                    </span>
                </div>

                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight transform transition-all duration-1200 delay-200 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                    Diseño que <span className="relative inline-block">
                        <span 
                            className={`transform transition-all duration-1000 delay-600 ${
                                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`}
                            style={{ color: '#F24026' }}
                        >
                            transforma
                        </span>
                        <span 
                            className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 transform transition-all duration-1000 delay-800 ${
                                isLoaded ? 'w-full scale-x-100' : 'w-0 scale-x-0'
                            } origin-left`}
                        ></span>
                        {/* Efecto de brillo */}
                        <span 
                            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-all duration-2000 delay-1000 ${
                                isLoaded ? 'translate-x-full' : '-translate-x-full'
                            } pointer-events-none`}
                        ></span>
                    </span>
                    <br />
                    <span className={`transform transition-all duration-1000 delay-400 inline-block ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        espacios únicos
                    </span>
                </h1>

                <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed transform transition-all duration-1000 delay-600 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    Descubre muebles excepcionales que reflejan tu personalidad y elevan cada rincón de tu hogar
                </p>

                <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-800 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                    <button
                        className="group relative px-10 py-5 text-lg font-bold rounded-full transition-all duration-500 hover:scale-110 transform shadow-2xl flex items-center space-x-3 overflow-hidden"
                        style={{ backgroundColor: '#F24026' }}
                        onClick={() => document.getElementById('destacados')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {/* Efecto de ondas en hover */}
                        <span className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                        <span className="relative z-10">Explorar Colección</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                        
                        {/* Partículas decorativas */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                    </button>
                </div>
            </div>

            {/* Indicador de scroll mejorado */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-white/60 text-sm font-medium">Scroll</span>
                    <div className="relative">
                        <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Efecto de partículas flotantes */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white/30 rounded-full transform transition-all duration-3000 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                    style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                        transitionDelay: `${1200 + (i * 200)}ms`,
                        animation: `float ${3 + (i * 0.5)}s ease-in-out infinite ${i * 0.5}s`,
                    }}
                ></div>
            ))}

            {/* CSS para animación de flotación */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;