"use client";

import HeroSection from './components/Hero';
import EstadisticasSection from './components/EstadisticasSection';
import NosotrosSection from './components/NosotrosSection';
import ProductosDestacadosSection from './components/ProductosDestacadosSection';
import OfertasSection from './components/OfertasSection';
import CatalogoSection from './components/CatalogoSection';
import GaleriaSection from './components/GaleriaSection';
// import TestimoniosSection from './components/TestimoniosSection';
import ContactoSection from './components/ContactoSection';

const DuccoWebsite = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EstadisticasSection />
      <NosotrosSection />
      <ProductosDestacadosSection />
      <OfertasSection />
      <CatalogoSection />
      <GaleriaSection />
      {/* <TestimoniosSection /> */}
      <ContactoSection />
    </div>
  );
};

export default DuccoWebsite;