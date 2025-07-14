"use client";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú al hacer scroll
    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isScrolled]);

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'shadow-xl' 
                    : 'bg-transparent'
            }`}
            style={{
                backgroundColor: isScrolled ? 'var(--ducco-orange)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none'
            }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-black tracking-tight transition-all duration-300">
                        <Image 
                            src="/logos/logo2-ducco.svg" 
                            alt="Ducco Logo" 
                            className={`lg:w-40 md:w-32 w-28 mr-4 transition-all duration-300 ${
                                isScrolled ? 'brightness-0 invert' : ''
                            }`} 
                            width={160} 
                            height={40} 
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`font-medium text-md tracking-wide transition-all duration-300 hover:scale-105 relative group ${
                                    isScrolled 
                                        ? 'text-white hover:text-orange-200' 
                                        : 'text-white hover:text-orange-300'
                                }`}
                            >
                                {item}
                                <span 
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                                        isScrolled 
                                            ? 'bg-white' 
                                            : 'bg-gradient-to-r from-orange-400 to-orange-600'
                                    }`}
                                ></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ?
                            <X className="w-6 h-6 text-white" /> :
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
                        }
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div 
                className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-40 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ backgroundColor: 'var(--ducco-orange)' }}
            >
                <div className="flex flex-col h-full">
                    {/* Header del menú */}
                    <div className="p-6 border-b border-white/20">
                        <div className="flex items-center justify-between">
                            <Image 
                                src="/logos/logo2-ducco.svg" 
                                alt="Ducco Logo" 
                                className="w-24 brightness-0 invert" 
                                width={96} 
                                height={24} 
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-1">
                            {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2"
                                    style={{ 
                                        animationDelay: `${index * 50}ms`,
                                        animation: isMobileMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-lg">{item}</span>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Footer del menú */}
                    <div className="p-6 border-t border-white/20">
                        <div className="text-center">
                            <p className="text-white/80 text-sm">
                                ¿Necesitás ayuda?
                            </p>
                            <button 
                                className="mt-2 px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold text-sm hover:bg-orange-50 transition-colors"
                                style={{ color: 'var(--ducco-orange)' }}
                            >
                                Contactanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animaciones CSS */}
            <style jsx>{`
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;