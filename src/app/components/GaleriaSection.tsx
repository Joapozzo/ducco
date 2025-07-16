import { useState, useRef } from "react";

// Galería de Videos Verticales Dinámica
const VideosSection = () => {
    const [videoActivo, setVideoActivo] = useState<number | null>(null);
    const [videosMuted, setVideosMuted] = useState<{ [key: number]: boolean }>({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true
    });

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const videosData = [
        {
            src: "/videos/video-1.mp4",
            titulo: "Transformación Moderna",
            descripcion: "Espacios contemporáneos"
        },
        {
            src: "/videos/video-2.mp4",
            titulo: "Diseño Minimalista",
            descripcion: "Elegancia en cada detalle"
        },
        {
            src: "/videos/video-3.mp4",
            titulo: "Ambientes Únicos",
            descripcion: "Personalidad en cada rincón"
        },
        {
            src: "/videos/video-4.mp4",
            titulo: "Estilo Premium",
            descripcion: "Lujo y comodidad"
        },
        {
            src: "/videos/video-5.mp4",
            titulo: "Estilo Premium",
            descripcion: "Lujo y comodidad"
        },
    ];

    const handleVideoHover = (index: number) => {
        setVideoActivo(index);
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.play();
        }
    };

    const handleVideoLeave = (index: number) => {
        setVideoActivo(null);
        if (videoRefs.current[index]) {
            videoRefs.current[index]?.pause();
        }
    };

    const toggleMute = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setVideosMuted(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section
            id="galería"
            className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden"
            style={{ backgroundColor: "#E4DAAE" }}
        >
            {/* Elementos decorativos de fondo */}
            <div
                className="absolute top-5 md:top-10 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 rounded-full opacity-10"
                style={{ backgroundColor: "#F24026" }}
            ></div>
            <div
                className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 rounded-full opacity-10"
                style={{ backgroundColor: "#28110E" }}
            ></div>

            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider mb-6 md:mb-8 transform hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: "#F24026", color: "white" }}
                    >
                        🎬 EXPERIENCIAS VISUALES
                    </span>
                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight"
                        style={{ color: "#28110E" }}
                    >
                        Videos que
                        <span className="block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                            Inspiran
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4"
                        style={{ color: "#3B3B3B" }}
                    >
                        Sumérgete en nuestros ambientes a través de contenido dinámico
                        <span className="font-semibold">
                            {" "}
                            diseñado para redes sociales
                        </span>
                    </p>
                </div>

                {/* Grid responsivo y simétrico */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-fr">
                    {/* Video 1 - Grande (ocupa 2 columnas en desktop) */}
                    <div className="lg:col-span-1 lg:row-span-3 relative group">
                        <div
                            className="h-64 md:h-80 lg:h-full min-h-[400px] lg:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.02]"
                            onMouseEnter={() => handleVideoHover(0)}
                            onMouseLeave={() => handleVideoLeave(0)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[0] = el;
                                }}
                                src={videosData[0].src}
                                className="w-full h-full object-cover"
                                muted={videosMuted[0]}
                                loop
                                playsInline
                            />

                            {/* Overlay dinámico */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${videoActivo === 0 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                                        {videosData[0].titulo}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {videosData[0].descripcion}
                                    </p>
                                    <div className="mt-2 md:mt-4 flex items-center space-x-2 md:space-x-3">
                                        <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                                            STORIES
                                        </span>
                                        <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                                            REELS
                                        </span>
                                    </div>
                                </div>

                                {/* Botón de sonido */}
                                <button
                                    onClick={(e) => toggleMute(0, e)}
                                    className="absolute top-3 md:top-6 right-3 md:right-6 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                                >
                                    <span className="text-sm md:text-base">
                                        {videosMuted[0] ? "🔇" : "🔊"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Video 2 - Medio superior derecho */}
                    <div className="relative group">
                        <div
                            className="h-64 md:h-80 lg:h-90 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.02]"
                            onMouseEnter={() => handleVideoHover(1)}
                            onMouseLeave={() => handleVideoLeave(1)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[1] = el;
                                }}
                                src={videosData[1].src}
                                className="w-full h-full object-cover"
                                muted={videosMuted[1]}
                                loop
                                playsInline
                            />

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${videoActivo === 1 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 text-white">
                                    <h3 className="text-base md:text-xl font-bold mb-1">
                                        {videosData[1].titulo}
                                    </h3>
                                    <p className="text-xs md:text-sm opacity-90">
                                        {videosData[1].descripcion}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => toggleMute(1, e)}
                                    className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                                >
                                    <span className="text-sm">
                                        {videosMuted[1] ? "🔇" : "🔊"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Video 3 - Inferior izquierdo */}
                    <div className="lg:row-span-2 lg:col-span-1 relative group">
                        <div
                            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05]"
                            onMouseEnter={() => handleVideoHover(2)}
                            onMouseLeave={() => handleVideoLeave(2)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[2] = el;
                                }}
                                src={videosData[2].src}
                                className="w-full h-full object-cover"
                                muted={videosMuted[2]}
                                loop
                                playsInline
                            />

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${videoActivo === 2 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[2].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[2].descripcion}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => toggleMute(2, e)}
                                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                                >
                                    <span className="text-sm">
                                        {videosMuted[2] ? "🔇" : "🔊"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Video 4 - Inferior derecho */}
                    <div className="lg:row-span-2 lg:col-span-1 relative group">
                        <div
                            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05]"
                            onMouseEnter={() => handleVideoHover(3)}
                            onMouseLeave={() => handleVideoLeave(3)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[3] = el;
                                }}
                                src={videosData[3].src}
                                className="w-full h-full object-cover"
                                muted={videosMuted[3]}
                                loop
                                playsInline
                            />

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${videoActivo === 3 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[3].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[3].descripcion}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => toggleMute(3, e)}
                                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                                >
                                    <span className="text-sm">
                                        {videosMuted[3] ? "🔇" : "🔊"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Video 5 - Inferior derecho */}
                    <div className="relative group">
                        <div
                            className="h-64 md:h-80 lg:h-90 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05]"
                            onMouseEnter={() => handleVideoHover(4)}
                            onMouseLeave={() => handleVideoLeave(4)}
                        >
                            <video
                                ref={(el) => {
                                    videoRefs.current[4] = el;
                                }}
                                src={videosData[4].src}
                                className="w-full h-full object-cover"
                                muted={videosMuted[4]}
                                loop
                                playsInline
                            />

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${videoActivo === 4 ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[4].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[4].descripcion}
                                    </p>
                                </div>

                                <button
                                    onClick={(e) => toggleMute(4, e)}
                                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                                >
                                    <span className="text-sm">
                                        {videosMuted[4] ? "🔇" : "🔊"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Bien ubicado y responsivo */}
                <div className="text-center mt-12 md:mt-16">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            Ver Más Contenido
                        </button>
                        <button className="w-full sm:w-auto border-2 border-orange-500 text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                            Síguenos en Redes
                        </button>
                    </div>
                    <p
                        className="text-sm md:text-base mt-4 opacity-70"
                        style={{ color: "#3B3B3B" }}
                    >
                        Descubre más contenido exclusivo en nuestras redes sociales
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VideosSection;