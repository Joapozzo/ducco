import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Galería de Videos Verticales Dinámica - CORREGIDO PARA MÓVILES
const VideosSection = () => {
    const [videoActivo, setVideoActivo] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [videosVisible, setVideosVisible] = useState(false);
    const [ctaVisible, setCtaVisible] = useState(false);
    const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>({});
    const [isMobile, setIsMobile] = useState(false);
    const [videosLoaded, setVideosLoaded] = useState<{ [key: number]: boolean }>({});
    const sectionRef = useRef(null);
    const [videosMuted, setVideosMuted] = useState<{ [key: number]: boolean }>({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true
    });
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const URI_BASE_VIDEOS = process.env.NEXT_PUBLIC_CLOUDINARY_VIDEOS_BASE;

    useEffect(() => {
        // Detectar móvil
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTimeout(() => setVideosVisible(true), 800);
                    setTimeout(() => setCtaVisible(true), 1600);
                    
                    // Intentar reproducir videos automáticamente cuando sea visible
                    setTimeout(() => {
                        videoRefs.current.forEach((video, index) => {
                            if (video && !videoErrors[index]) {
                                video.load(); // Forzar carga
                                const playPromise = video.play();
                                if (playPromise !== undefined) {
                                    playPromise.catch(error => {
                                        console.log(`Video ${index} autoplay bloqueado:`, error);
                                    });
                                }
                            }
                        });
                    }, 1000);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', checkMobile);
        };
    }, [videoErrors]);

    const videosData = [
        {
            src: `${URI_BASE_VIDEOS}portfolio-videos/video-1.mp4`,
            fallback: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop&crop=center",
            titulo: "Transformación Moderna",
            descripcion: "Espacios contemporáneos"
        },
        {
            src: `${URI_BASE_VIDEOS}portfolio-videos/video-2.mp4`,
            fallback: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=600&fit=crop&crop=center",
            titulo: "Diseño Minimalista",
            descripcion: "Elegancia en cada detalle"
        },
        {
            src: `${URI_BASE_VIDEOS}portfolio-videos/video-3.mp4`,
            fallback: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=600&fit=crop&crop=center",
            titulo: "Ambientes Únicos",
            descripcion: "Personalidad en cada rincón"
        },
        {
            src: `${URI_BASE_VIDEOS}portfolio-videos/video-4.mp4`,
            fallback: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=600&fit=crop&crop=center",
            titulo: "Estilo Premium",
            descripcion: "Lujo y comodidad"
        },
        {
            src: `${URI_BASE_VIDEOS}portfolio-videos/video-5.mp4`,
            fallback: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=600&fit=crop&crop=center",
            titulo: "Estilo Premium",
            descripcion: "Lujo y comodidad"
        },
    ];

    const handleVideoError = (index: number) => {
        console.warn(`Video ${index + 1} no disponible, mostrando imagen de fallback`);
        setVideoErrors(prev => ({ ...prev, [index]: true }));
    };

    const handleVideoLoadedData = (index: number) => {
        setVideosLoaded(prev => ({ ...prev, [index]: true }));
        
        // En móviles, intentar reproducir inmediatamente después de cargar
        if (isMobile && videoRefs.current[index]) {
            const video = videoRefs.current[index];
            if (video) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log(`Mobile autoplay failed for video ${index}:`, error);
                    });
                }
            }
        }
    };

    const handleVideoHover = (index: number) => {
        setVideoActivo(index);
        if (videoRefs.current[index] && !videoErrors[index]) {
            const video = videoRefs.current[index];
            if (video) {
                // En móviles, solo asegurarse de que esté reproduciéndose
                if (isMobile) {
                    if (video.paused) {
                        video.play().catch(console.log);
                    }
                } else {
                    // En desktop, comportamiento normal
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.warn(`Error playing video ${index + 1}:`, error);
                            handleVideoError(index);
                        });
                    }
                }
            }
        }
    };

    const handleVideoLeave = (index: number) => {
        setVideoActivo(null);
        // En móviles NO pausar los videos al hacer leave
        if (!isMobile && videoRefs.current[index] && !videoErrors[index]) {
            videoRefs.current[index]?.pause();
        }
    };

    const toggleMute = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoErrors[index]) {
            setVideosMuted(prev => ({
                ...prev,
                [index]: !prev[index]
            }));
        }
    };

    const renderMediaContent = (videoData: { src: string; fallback: string; titulo: string; descripcion: string }, index: number) => {
        if (videoErrors[index]) {
            return (
                <div className="relative w-full h-full">
                    <Image
                        src={videoData.fallback}
                        alt={videoData.titulo}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        width={400}
                        height={600}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full">
                            <span className="text-2xl">📸</span>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <video
                ref={(el) => {
                    videoRefs.current[index] = el;
                }}
                src={videoData.src}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                muted={videosMuted[index]}
                loop
                playsInline
                autoPlay={true} // Habilitar autoplay
                preload={isMobile ? "auto" : "metadata"} // preload auto en móviles
                onError={() => handleVideoError(index)}
                onLoadedData={() => handleVideoLoadedData(index)}
                onCanPlay={() => { // Evento adicional para asegurar reproducción
                    if (isMobile && videoRefs.current[index]) {
                        const video = videoRefs.current[index];
                        if (video && video.paused) {
                            video.play().catch(console.log);
                        }
                    }
                }}
            />
        );
    };

    return (
        <section
            ref={sectionRef}
            id="galería"
            className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden"
            style={{ backgroundColor: "#E4DAAE" }}
        >
            {/* Elementos decorativos de fondo animados */}
            <div
                className={`absolute top-5 md:top-10 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 rounded-full opacity-10 transform transition-all duration-2000 ${isVisible ? 'translate-x-0 rotate-0 scale-100' : '-translate-x-20 -rotate-45 scale-75'
                    }`}
                style={{ backgroundColor: "#F24026" }}
            ></div>
            <div
                className={`absolute bottom-10 md:bottom-20 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 rounded-full opacity-10 transform transition-all duration-2000 delay-300 ${isVisible ? 'translate-x-0 rotate-0 scale-100' : 'translate-x-20 rotate-45 scale-75'
                    }`}
                style={{ backgroundColor: "#28110E" }}
            ></div>
            <div
                className={`absolute top-1/2 left-10 w-6 h-6 rounded-full opacity-5 transform transition-all duration-3000 delay-500 ${isVisible ? 'translate-y-0 rotate-180' : '-translate-y-20 rotate-0'
                    }`}
                style={{ backgroundColor: "#F24026" }}
            ></div>

            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className={`inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider mb-6 md:mb-8 transform transition-all duration-700 hover:scale-110 hover:rotate-1 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
                            }`}
                        style={{ backgroundColor: "#F24026", color: "white" }}
                    >
                        🎬 EXPERIENCIAS VISUALES
                    </span>
                    <h2
                        className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        style={{ color: "#28110E" }}
                    >
                        Videos que
                        <span className={`block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`}>
                            Inspiran
                        </span>
                    </h2>
                    <p
                        className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        style={{ color: "#3B3B3B" }}
                    >
                        Sumérgete en nuestros ambientes a través de contenido dinámico
                        <span className="font-semibold">
                            {" "}
                            diseñado para redes sociales
                        </span>
                    </p>
                </div>

                {/* Grid responsivo y simétrico con animaciones direccionales */}
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:auto-rows-fr">
                    {/* Video 1 - Grande entrada desde la izquierda */}
                    <div className={`lg:col-span-1 lg:row-span-3 relative group transform transition-all duration-1000 ${videosVisible
                        ? 'translate-x-0 opacity-100 scale-100'
                        : '-translate-x-20 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: videosVisible ? '800ms' : '0ms' }}>
                        <div
                            className="h-64 md:h-80 lg:h-full min-h-[400px] lg:min-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.02] hover:-rotate-1"
                            onMouseEnter={() => handleVideoHover(0)}
                            onMouseLeave={() => handleVideoLeave(0)}
                        >
                            {renderMediaContent(videosData[0], 0)}

                            {/* Overlay dinámico con animación */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${videoActivo === 0 ? "opacity-100 " : "opacity-0"
                                    }`}
                            >
                                <div className={`absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white transform transition-all duration-500 ${videoActivo === 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                                        {videosData[0].titulo}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {videosData[0].descripcion}
                                    </p>
                                    <div className="mt-2 md:mt-4 flex items-center space-x-2 md:space-x-3">
                                        <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs font-medium ">
                                            STORIES
                                        </span>
                                        <span className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs font-medium ">
                                            REELS
                                        </span>
                                    </div>
                                </div>
                                {/* Botón de sonido animado */}
                                {!videoErrors[0] && (
                                    <button
                                        onClick={(e) => toggleMute(0, e)}
                                        className={`absolute top-3 md:top-6 right-3 md:right-6 bg-white/20 p-2 md:p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 ${videoActivo === 0 ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-70'
                                            }`}
                                    >
                                        <span className="text-sm md:text-base">
                                            {videosMuted[0] ? "🔇" : "🔊"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Video 2 - Entrada desde arriba */}
                    <div className={`relative group transform transition-all duration-1000 ${videosVisible
                        ? 'translate-y-0 opacity-100 scale-100'
                        : '-translate-y-20 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: videosVisible ? '1000ms' : '0ms' }}>
                        <div
                            className="h-64 md:h-80 lg:h-90 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.02] hover:rotate-1"
                            onMouseEnter={() => handleVideoHover(1)}
                            onMouseLeave={() => handleVideoLeave(1)}
                        >
                            {renderMediaContent(videosData[1], 1)}

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 ${videoActivo === 1 ? "opacity-100 " : "opacity-0"
                                    }`}
                            >
                                <div className={`absolute bottom-3 md:bottom-6 left-3 md:left-6 text-white transform transition-all duration-500 ${videoActivo === 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <h3 className="text-base md:text-xl font-bold mb-1">
                                        {videosData[1].titulo}
                                    </h3>
                                    <p className="text-xs md:text-sm opacity-90">
                                        {videosData[1].descripcion}
                                    </p>
                                </div>
                                {!videoErrors[1] && (
                                    <button
                                        onClick={(e) => toggleMute(1, e)}
                                        className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                    >
                                        <span className="text-sm">
                                            {videosMuted[1] ? "🔇" : "🔊"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Video 3 - Entrada desde la derecha */}
                    <div className={`lg:row-span-2 lg:col-span-1 relative group transform transition-all duration-1000 ${videosVisible
                        ? 'translate-x-0 opacity-100 scale-100'
                        : 'translate-x-20 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: videosVisible ? '1200ms' : '0ms' }}>
                        <div
                            className="h-64 md:h-80 lg:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05] hover:-rotate-1"
                            onMouseEnter={() => handleVideoHover(2)}
                            onMouseLeave={() => handleVideoLeave(2)}
                        >
                            {renderMediaContent(videosData[2], 2)}

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 ${videoActivo === 2 ? "opacity-100 " : "opacity-0"
                                    }`}
                            >
                                <div className={`absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white transform transition-all duration-500 ${videoActivo === 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[2].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[2].descripcion}
                                    </p>
                                </div>
                                {!videoErrors[2] && (
                                    <button
                                        onClick={(e) => toggleMute(2, e)}
                                        className="absolute top-3 right-3 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                    >
                                        <span className="text-sm">
                                            {videosMuted[2] ? "🔇" : "🔊"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Video 4 - Entrada desde abajo */}
                    <div className={`lg:row-span-2 lg:col-span-1 relative group transform transition-all duration-1000 ${videosVisible
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-20 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: videosVisible ? '1400ms' : '0ms' }}>
                        <div
                            className="h-64 md:h-80 lg:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05] hover:rotate-1"
                            onMouseEnter={() => handleVideoHover(3)}
                            onMouseLeave={() => handleVideoLeave(3)}
                        >
                            {renderMediaContent(videosData[3], 3)}

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 ${videoActivo === 3 ? "opacity-100 " : "opacity-0"
                                    }`}
                            >
                                <div className={`absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white transform transition-all duration-500 ${videoActivo === 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[3].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[3].descripcion}
                                    </p>
                                </div>
                                {!videoErrors[3] && (
                                    <button
                                        onClick={(e) => toggleMute(3, e)}
                                        className="absolute top-3 right-3 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                    >
                                        <span className="text-sm">
                                            {videosMuted[3] ? "🔇" : "🔊"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Video 5 - Entrada desde la izquierda con rotación */}
                    <div className={`relative group transform transition-all duration-1000 ${videosVisible
                        ? 'translate-x-0 opacity-100 scale-100 rotate-0'
                        : '-translate-x-20 opacity-0 scale-95 -rotate-6'
                        }`}
                        style={{ transitionDelay: videosVisible ? '1600ms' : '0ms' }}>
                        <div
                            className="h-64 md:h-80 lg:h-90 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-[1.05] hover:-rotate-1"
                            onMouseEnter={() => handleVideoHover(4)}
                            onMouseLeave={() => handleVideoLeave(4)}
                        >
                            {renderMediaContent(videosData[4], 4)}

                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 ${videoActivo === 4 ? "opacity-100 " : "opacity-0"
                                    }`}
                            >
                                <div className={`absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white transform transition-all duration-500 ${videoActivo === 4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <h3 className="text-sm md:text-lg font-bold mb-1">
                                        {videosData[4].titulo}
                                    </h3>
                                    <p className="text-xs opacity-90">
                                        {videosData[4].descripcion}
                                    </p>
                                </div>
                                {!videoErrors[4] && (
                                    <button
                                        onClick={(e) => toggleMute(4, e)}
                                        className="absolute top-3 right-3 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                    >
                                        <span className="text-sm">
                                            {videosMuted[4] ? "🔇" : "🔊"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action con animación espectacular */}
                <div className={`text-center mt-12 md:mt-16 transform transition-all duration-1000 ${ctaVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                    }`}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <button
                            className={`w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 shadow-xl hover:shadow-2xl ${ctaVisible ? 'translate-x-0' : '-translate-x-8'
                                }`}
                            onClick={() =>
                                window.open('https://www.instagram.com/amoblamientosducco?igsh=M3JlZm84cnphMDIy', '_blank')
                            }
                        >
                            Ver Más Contenido
                        </button>

                        <button
                            className={`w-full sm:w-auto border-2 border-orange-500 text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-orange-500 hover:text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 ${ctaVisible ? 'translate-x-0' : 'translate-x-8'
                                }`}
                            onClick={() =>
                                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        >
                            Síguenos en Redes
                        </button>
                    </div>

                    <p
                        className={`text-sm md:text-base mt-4 opacity-70 transform transition-all duration-1000 delay-300 ${ctaVisible ? 'translate-y-0 opacity-70' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ color: "#3B3B3B" }}
                    >
                        Descubre más contenido exclusivo en nuestras redes sociales
                    </p>
                </div>
            </div>
        </section >
    );
};

export default VideosSection;