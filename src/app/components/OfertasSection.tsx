import { useRouter } from 'next/navigation';
import { productos } from '../data/ProductStatic';
import CardProductOffer from './CardProductOffer';
import { Producto } from '../types/productType';

const OfertasSection = () => {
  const router = useRouter();
  const productosEnOferta = productos.filter(producto => producto.esOferta);

  const handleProductClick = (producto: Producto) => {
    router.push(`/producto/${producto.id}`);
  };

  return (
    <section id="ofertas" className="py-16 px-6" style={{ backgroundColor: '#28110E' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
            style={{ backgroundColor: '#F24026', color: 'white' }}>
            🔥 Ofertas Limitadas
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            Súper Descuentos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprovecha estos precios únicos en productos seleccionados.
            Ofertas por tiempo limitado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosEnOferta.map((producto) => (
            <CardProductOffer producto={producto} key={producto.id} onProductClick={handleProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfertasSection;