import { Award, Users, Shield, Headphones } from 'lucide-react';
import Image from 'next/image';

const NosotrosSection = () => {
    return (
        <section id="nosotros" className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-8">
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
                                style={{ backgroundColor: '#E4DAAE', color: '#28110E' }}>
                                Nuestra Historia
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight" style={{ color: '#28110E' }}>
                                Creamos experiencias, no solo muebles
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
                        <div className="mt-12 grid grid-cols-2 gap-6">
                            {[
                                { icon: <Award className="w-6 h-6" />, text: "Calidad Premium" },
                                { icon: <Users className="w-6 h-6" />, text: "Diseño Personalizado" },
                                { icon: <Shield className="w-6 h-6" />, text: "Garantía Extendida" },
                                { icon: <Headphones className="w-6 h-6" />, text: "Atención Especializada" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#F24026', color: 'white' }}>
                                        {item.icon}
                                    </div>
                                    <span className="font-semibold text-gray-800">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=400&fit=crop"
                                alt="Showroom 1"
                                className="rounded-2xl shadow-2xl"
                                width={300}
                                height={400}
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop"
                                alt="Showroom 2"
                                className="rounded-2xl shadow-2xl mt-12"
                                width={300}
                                height={400}
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl shadow-2xl"
                            style={{ backgroundColor: '#F24026' }}>
                            <div className="flex items-center justify-center h-full text-white text-center p-4">
                                <div>
                                    <div className="text-2xl font-black">35+</div>
                                    <div className="text-xs font-medium">Años</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NosotrosSection;