import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-39">
            {/* Fondo con gradiente */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=1000&fit=crop)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: '#F24026', color: 'white' }}>
                        ✨ Muebles Premium desde 1985
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                    Diseño que <span className="relative">
                        <span style={{ color: '#F24026' }}>transforma</span>
                        <span className="absolute -bottom-2 left-0 w-full h-1" style={{ backgroundColor: '#F24026' }}></span>
                    </span>
                    <br />espacios únicos
                </h1>

                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
                    Descubre muebles excepcionales que reflejan tu personalidad y elevan cada rincón de tu hogar
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button
                        className="group px-10 py-5 text-lg font-bold rounded-full transition-all duration-500 hover:scale-105 transform shadow-2xl flex items-center space-x-3"
                        style={{ backgroundColor: '#F24026' }}
                        onClick={() => document.getElementById('destacados')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span>Explorar Colección</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="group px-10 py-5 text-lg font-bold rounded-full border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 flex items-center space-x-3">
                        <Play className="w-5 h-5" />
                        <span>Ver Showroom</span>
                    </button>
                </div>
            </div>

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white/70" />
            </div>
        </section>
    );
};

export default HeroSection;