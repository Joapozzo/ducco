const estadisticas = [
  { numero: "35+", texto: "Años de experiencia" },
  { numero: "5000+", texto: "Clientes satisfechos" },
  { numero: "50+", texto: "Productos únicos" },
  { numero: "98%", texto: "Calidad garantizada" }
];

// Sección de Estadísticas
const EstadisticasSection = () => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F24026' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {estadisticas.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-black mb-2">
                {stat.numero}
              </div>
              <div className="text-sm md:text-base font-medium opacity-90">
                {stat.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstadisticasSection;