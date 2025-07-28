import { Instagram, Facebook, Twitter, Users, Truck, Shield, Headphones, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="" style={{ backgroundColor: "#3B3B3B" }} id="footer">
            <div className="container mx-auto max-w-7xl py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo y descripción */}
                    <div className="md:col-span-2">
                        <div className="mb-5">
                            <Image
                                src="/logos/logo2-ducco.svg"
                                alt="Duccó Mueblería"
                                width={128}
                                height={32}
                                className="w-50"
                            />
                        </div>
                        <p className="text-2xl text-gray-300 mb-6 font-bold">
                            &lsquo;Diseñamos experiencias, creamos hogares únicos&rsquo;
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Más de 35 años transformando hogares con muebles de calidad
                            excepcional. Cada pieza cuenta una historia, cada espacio
                            refleja una personalidad única.
                        </p>

                        {/* Redes sociales */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/amoblamientosducco?igsh=M3JlZm84cnphMDIy"
                                target="_blank"
                                className="p-4 bg-gray-700 rounded-xl text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/mueblesducco"
                                target="_blank"
                                className="p-4 bg-gray-700 rounded-xl text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send/?phone=5493518042042&text=Hola%2C+%C2%BFpuedes+ayudarme+a+crear+mi+espacio%3F&type=phone_number&app_absent=0"
                                target="_blank"
                                className="p-4 bg-gray-700 rounded-xl text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                            >
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6">
                            Enlaces Rápidos
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Inicio",
                                "Nosotros",
                                "Destacados",
                                "Catálogo",
                                "Ofertas",
                                "Galería",
                                "Contacto",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white transition-colors text-lg flex items-center space-x-2 group"
                                    >
                                        <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span>{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6">Servicios</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Truck className="w-5 h-5" style={{ color: "#F24026" }} />
                                <span>Entrega gratuita</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Shield className="w-5 h-5" style={{ color: "#F24026" }} />
                                <span>Garantía extendida</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Users className="w-5 h-5" style={{ color: "#F24026" }} />
                                <span>Diseño personalizado</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Headphones
                                    className="w-5 h-5"
                                    style={{ color: "#F24026" }}
                                />
                                <span>Atención 24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-16 pb-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mx-auto max-w-7xl px-6 flex items-center justify-between w-full">
                    <p className="text-gray-400 text-lg">
                        &copy; 2025 Duccó Mueblería. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-500">
                        Diseñado con ❤️ para crear espacios únicos
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;