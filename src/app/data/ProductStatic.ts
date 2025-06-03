import { Producto } from "../types/productType";

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Sillón Confort Premium",
    descripcion: "Sillón ergonómico con tapizado en cuero genuino",
    categoria: "Sillones",
    precio: "$89,990",
    caracteristicas: ["Cuero genuino", "Estructura de roble", "Reclinable"],
    imagen:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    esDestacado: true,
  },
  {
    id: 2,
    nombre: "Mesa de Centro Moderna",
    descripcion: "Mesa con tapa de vidrio y base metálica",
    categoria: "Mesas",
    precio: "$35,500",
    precioAnterior: "$45,500",
    descuento: "22%",
    caracteristicas: ["Vidrio templado", "Base metálica", "120x60cm"],
    imagen:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop",
    esOferta: true,
  },
  {
    id: 3,
    nombre: "Silla Nordic Style",
    descripcion: "Silla estilo nórdico con respaldo ergonómico",
    categoria: "Sillas",
    precio: "$12,800",
    caracteristicas: ["Madera de haya", "Tapizado tela", "Ergonómica"],
    imagen:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    nombre: "Rack TV Minimalista",
    descripcion: "Rack para TV hasta 65 pulgadas con compartimentos",
    categoria: "Racks",
    precio: "$65,200",
    caracteristicas: ["Melaminico", "150cm ancho", "3 compartimentos"],
    imagen:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    esDestacado: true,
  },
  {
    id: 5,
    nombre: "Cama Queen Elegance",
    descripcion: "Cama matrimonial con cabecero tapizado",
    categoria: "Dormitorio",
    precio: "$98,500",
    precioAnterior: "$125,000",
    descuento: "21%",
    caracteristicas: ["Queen size", "Cabecero tapizado", "Base con cajones"],
    imagen:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    esOferta: true,
  },
  {
    id: 6,
    nombre: "Mesa Comedor Extensible",
    descripcion: "Mesa de comedor para 6-8 personas extensible",
    categoria: "Mesas",
    precio: "$98,500",
    caracteristicas: ["Madera maciza", "Extensible", "160-200cm"],
    imagen:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=300&fit=crop",
    esDestacado: true,
  },
  {
    id: 7,
    nombre: "Set Jardín Rattan",
    descripcion: "Juego de jardín en rattan sintético para 4 personas",
    categoria: "Exterior",
    precio: "$126,000",
    precioAnterior: "$156,000",
    descuento: "19%",
    caracteristicas: ["Rattan sintético", "Resistente UV", "Cojines incluidos"],
    imagen:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
    esOferta: true,
  },
  {
    id: 8,
    nombre: "Sofá Modular L-Shape",
    descripcion: "Sofá modular en forma de L para salas amplias",
    categoria: "Sillones",
    precio: "$189,900",
    caracteristicas: ["Modular", "Tela antimanchas", "Espuma HR"],
    imagen:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    esDestacado: true,
  },
  {
    id: 9,
    nombre: "Escritorio Ejecutivo",
    descripcion: "Escritorio ejecutivo con cajones laterales",
    categoria: "Oficina",
    precio: "$75,200",
    caracteristicas: ["Melamina roble", "3 cajones", "140x70cm"],
    imagen:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    nombre: "Biblioteca Moderna",
    descripcion: "Biblioteca modular de 5 estantes",
    categoria: "Almacenamiento",
    precio: "$45,800",
    precioAnterior: "$58,000",
    descuento: "21%",
    caracteristicas: ["5 estantes", "Modular", "180cm altura"],
    imagen:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    esOferta: true,
  },
];
