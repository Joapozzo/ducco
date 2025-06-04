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

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-3xl font-black tracking-tight" style={{ color: '#F24026' }}>
                        <Image src="/logos/logo2-ducco.svg" alt="Ducco Logo" className="lg:w-40 md:w-32 w-28 mr-4" width={28} height={28} />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`font-medium text-md tracking-wide transition-all duration-300 hover:scale-105 relative group ${isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
                                    }`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ?
                            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> :
                            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-100">
                        {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-3 text-gray-800 hover:text-orange-500 font-medium transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;