"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    
    // Detectar si estamos en una página de producto
    const isProductPage = pathname?.startsWith('/producto');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determinar si el navbar debe tener fondo naranja
    const shouldShowOrangeNavbar = isScrolled || isProductPage;

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                shouldShowOrangeNavbar 
                    ? 'shadow-xl' 
                    : 'bg-transparent'
            }`}
            style={{
                backgroundColor: shouldShowOrangeNavbar ? 'var(--ducco-orange)' : 'transparent',
                backdropFilter: shouldShowOrangeNavbar ? 'blur(20px)' : 'none'
            }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-black tracking-tight transition-all duration-300">
                        <Image 
                            src="/logos/logo2-ducco.svg" 
                            alt="Ducco Logo" 
                            className={`lg:w-40 md:w-32 w-28 mr-4 transition-all duration-300 cursor-pointer ${
                                shouldShowOrangeNavbar ? 'brightness-0 invert' : ''
                            }`} 
                            width={160} 
                            height={40} 
                            onClick={() => {
                                if (isProductPage) {
                                    window.location.href = '/';
                                } else {
                                    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        />
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                href={isProductPage ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                                className={`font-medium text-md tracking-wide transition-all duration-300 hover:scale-105 relative group ${
                                    shouldShowOrangeNavbar 
                                        ? 'text-white hover:text-orange-200' 
                                        : 'text-white hover:text-orange-300'
                                }`}
                            >
                                {item}
                                <span 
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                                        shouldShowOrangeNavbar 
                                            ? 'bg-white' 
                                            : 'bg-gradient-to-r from-orange-400 to-orange-600'
                                    }`}
                                ></span>
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 relative z-[100]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ?
                            <X className="w-6 h-6 text-white" /> :
                            <Menu className={`w-6 h-6 ${shouldShowOrangeNavbar ? 'text-white' : 'text-white'}`} />
                        }
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            
            {/* Mobile Menu */}
            <div 
                className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-[70] transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ 
                    backgroundColor: 'var(--ducco-orange)',
                    position: 'fixed',
                    top: '0',
                    bottom: '0'
                }}
            >
                <div className="flex flex-col h-full">
                    {/* Header del menú */}
                    <div className="p-6 border-b border-white/20 pt-16">
                        <div className="flex items-center justify-center">
                            <Image 
                                src="/logos/logo2-ducco.svg" 
                                alt="Ducco Logo" 
                                className="w-32 brightness-0 invert" 
                                width={128} 
                                height={32} 
                            />
                        </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-2">
                            {['Inicio', 'Nosotros', 'Destacados', 'Catálogo', 'Ofertas', 'Galería', 'Contacto'].map((item) => (
                                <a
                                    key={item}
                                    href={isProductPage ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`}
                                    className="group flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2"
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
                            <p className="text-white/80 text-sm mb-3">
                                ¿Necesitás ayuda?
                            </p>
                            <button 
                                className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold text-sm hover:bg-orange-50 transition-colors"
                                style={{ color: 'var(--ducco-orange)' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contactanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;