import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Input from './ui/Input';
import Textarea from './ui/TextArea';

const ContactoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contacto"
            className="py-16 px-6"
            style={{ backgroundColor: "#28110E" }}
        >
            <div className="container mx-auto max-w-7xl">
                <div
                    className={`text-center mb-20 transform transition-all duration-1000 ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                        }`}
                >
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                        style={{ backgroundColor: "#F24026", color: "white" }}
                    >
                        Contáctanos
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
                        Encuéntranos
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Información de contacto */}
                    <div
                        className={`text-white transform transition-all duration-1000 delay-200 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                            }`}
                    >
                        <h3
                            className="text-3xl font-bold mb-10"
                            style={{ color: "#F24026" }}
                        >
                            Información de Contacto
                        </h3>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <MapPin className="w-6 h-6 text-white" />,
                                    title: "Nuestra Ubicación",
                                    lines: [
                                        "Av. Castro Barros 773, Casa central",
                                        "Av. Castro Barros 212, Sucursal 1",
                                        "General Paz",
                                    ],
                                },
                                {
                                    icon: <Phone className="w-6 h-6 text-white" />,
                                    title: "Teléfono",
                                    lines: ["+54 9 3518 04-2042", "WhatsApp disponible"],
                                },
                                {
                                    icon: <Mail className="w-6 h-6 text-white" />,
                                    title: "Email",
                                    lines: ["info@ducco.com.ar", "Respuesta en 24hs"],
                                },
                            ].map(({ icon, title, lines }, i) => (
                                <div key={i} className="flex items-start space-x-6">
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{ backgroundColor: "#F24026" }}
                                    >
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">{title}</h4>
                                        <p className="text-gray-300 text-lg">{lines[0]}</p>
                                        <p className="text-gray-400">{lines[1]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className="mt-12 p-8 rounded-2xl"
                            style={{ backgroundColor: "#3B3B3B" }}
                        >
                            <h4 className="font-bold text-xl mb-6">Horarios de Atención</h4>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Lunes a Viernes:</span>
                                    <span className="font-semibold">
                                        15:00 - 19:00 | 9:00 - 13:00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados:</span>
                                    <span className="font-semibold">9:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos:</span>
                                    <span className="text-red-400">Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div
                        className={`bg-white p-10 rounded-3xl shadow-2xl transform transition-all duration-1000 delay-400 ${isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                            }`}
                    >
                        <h3
                            className="text-3xl font-bold mb-8"
                            style={{ color: "#28110E" }}
                        >
                            Envíanos un mensaje
                        </h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        label='Nombre'
                                        type="text"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <Input
                                        label='Apellido'
                                        type="text"
                                        placeholder="Tu apellido"
                                    />
                                </div>
                            </div>

                            <div>
                                <Input
                                    label='Email'
                                    type="email"
                                    placeholder="Tu email"
                                />
                            </div>

                            <div>
                                <Textarea
                                    label='Mensaje'
                                    placeholder='Cuéntanos cómo podemos ayudarte a crear el espacio de tus sueños'
                                    
                                />
                            </div>

                            <button
                                className="w-full py-5 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105 transform shadow-xl flex items-center justify-center space-x-3"
                                style={{ backgroundColor: "#F24026" }}
                                onClick={() =>
                                    alert(
                                        "¡Mensaje enviado! Nos pondremos en contacto contigo pronto. (Demo)"
                                    )
                                }
                            >
                                <span>Enviar Mensaje</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactoSection;
