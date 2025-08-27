import { CategoriaProducto, Producto } from "../types/productType";

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Mesa Clarity",
    descripcionCorta: "Mesa de 1,20 m con vidrio templado y 4 sillas Eclipse en black o stone",
    descripcionCompleta: "La Mesa Clarity de 1,20 m cuenta con vidrio templado resistente y terminación en pegado láser, ideal para quienes buscan elegancia sin perder funcionalidad. Incluye 4 sillas Eclipse, modernas y cómodas, disponibles en terminaciones black y stone.",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 10,
    imagenes: [
      "/imgs/mesas/clarity-1.png",
      "/imgs/mesas/clarity-2.png"
    ],
    dimensiones: {
      ancho: "60 cm",
      largo: "120 cm"
    },
    esDestacado: true,
    esOferta: true
  },
  {
    id: 2,
    nombre: "Sillón Dávice Ónix",
    descripcionCorta: "Sillón reclinable con apoya cabeza en 3 posiciones",
    descripcionCompleta: "🧘‍♂️ Cuenta con apoya cabeza reclinable en 3 posiciones y asientos extensibles con varias inclinaciones para que disfrutes cada momento de relax. Relleno con vellón 100% siliconado + espuma de alta densidad: suavidad envolvente, mayor recuperación y durabilidad. Sus partes desmontables con cierre facilitan la limpieza y el mantenimiento.",
    categoria: "Sillón",
    precio: "Consultar",
    stock: 5,
    imagenes: [
      "/imgs/sillones/davice-1.png",
      "/imgs/sillones/davice-2.png"
    ],
    dimensiones: {
      ancho: "Versión 2 y 3 cuerpos",
      largo: "1,85m / 2,15m"
    },
    caracteristicasAdicionales: "Está disponible en versión 3 cuerpos de 2,15 m y en versión 2 cuerpos de 1,85 m ideal para espacios modernos y funcionales",
    esDestacado: true,
    esOferta: true
  },
  {
    id: 3,
    nombre: "Mesa Chipre",
    descripcionCorta: "Mesa de madera Guatambú con 8 sillas modelo 504",
    descripcionCompleta: "👉 Mesa Chipre de 2.00 x 1.00 mts, fabricada en madera Guatambú, acompañada por 8 sillas modelo 504. 📌 Lustre y tapizado a elección para que lo combines a tu estilo. Perfecta para comedores amplios y reuniones familiares.",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 10,
    imagenes: [
      "/imgs/mesas/chipre-1.png",
      "/imgs/mesas/chipre-2.png"
    ],
    dimensiones: {
      ancho: "100cm",
      largo: "200cm"
    },
    variantes: "Lustre y tapizado a elección",
    caracteristicasAdicionales: "👉 Mesa Chipre de 2.00 x 1.00 mts, fabricada en madera Guatambú, acompañada por 8 sillas modelo 504 📌 Lustre y tapizado a elección para que lo combines a tu estilo"
  },
  {
    id: 4,
    nombre: "Mesa Aura",
    descripcionCorta: "Mesa circular con vidrio templado y 4 sillas Nova",
    descripcionCompleta: "Diseño, elegancia y funcionalidad en un solo combo. La Mesa Aura de 1,20 m de diámetro tiene vidrio templado y terminación con pegado láser 🔍. Acompañada por 4 sillas Nova, disponibles en colores black y stone, es perfecta para darle un toque moderno y sofisticado a tu comedor 🪑🖤🤍",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 10,
    imagenes: [
      "/imgs/mesas/aura-1.png",
      "/imgs/mesas/aura-2.png"
    ],
    variantes: "Sillas en colores black y stone",
    dimensiones: {
      ancho: "120cm diámetro",
      largo: "120cm diámetro"
    },
    caracteristicasAdicionales: "Diseño, elegancia y funcionalidad en un solo combo. La Mesa Aura de 1,20 m de diámetro tiene vidrio templado y terminación con pegado láser 🔍 Acompañada por 4 sillas Nova, disponibles en colores black y stone, es perfecta para darle un toque moderno y sofisticado a tu comedor 🪑🖤🤍",
    esDestacado: true,
    esOferta: true
  },
  {
    id: 5,
    nombre: "Mesa Eames",
    descripcionCorta: "Mesa compacta con vidrio láser y 4 sillas Tulip",
    descripcionCompleta: "La Mesa Eames de 1,00 m con vidrio pegado láser es ideal para espacios pequeños sin perder diseño. Incluye 4 sillas Tulip blancas, cómodas y elegantes 🪑🤍. Perfecta combinación de funcionalidad y estilo minimalista para comedores modernos.",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 10,
    imagenes: [
      "/imgs/mesas/eames-1.png",
      "/imgs/mesas/eames-2.png"
    ],
    dimensiones: {
      ancho: "100cm diámetro",
      largo: "100cm diámetro"
    },
    caracteristicasAdicionales: "La Mesa Eames de 1,00 m con vidrio pegado láser es ideal para espacios pequeños sin perder diseño. Incluye 4 sillas Tulip blancas, cómodas y elegantes 🪑🤍"
  },
  {
    id: 6,
    nombre: "Mesa Contemporánea Guatambú",
    descripcionCorta: "Mesa 1,60 x 0,90m con 6 sillas Maitena en madera Guatambú",
    descripcionCompleta: "Diseño que enamora, calidad que perdura 🪑✨ Mesa contemporánea de 1,60 x 0,90m fabricada en madera Guatambú, acompañada por 6 sillas modelo Maitena. Lustre y tapizado a elección para que combine perfecto con tu estilo. Ideal para comedores modernos y funcionales.",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 8,
    imagenes: [
      "/imgs/mesas/contemporanea-1.png",
      "/imgs/mesas/contemporanea-2.png"
    ],
    variantes: "Lustre y tapizado a elección",
    dimensiones: {
      ancho: "90cm",
      largo: "160cm"
    },
    caracteristicasAdicionales: "Mesa contemporánea de 1,60 x 0,90m con 6 sillas Maitena en madera Guatambú. Lustre y tapizado a elección para que combine perfecto con tu estilo. Calidad que perdura con diseño que enamora.",
    esDestacado: true
  },
  {
    id: 7,
    nombre: "Mesa Ratona Clarity",
    descripcionCorta: "Mesa de 4 patas con vidrio templado y terminación láser",
    descripcionCompleta: "Vidrio templado resistente y seguro pegado láser con terminaciones limpias y modernas. Perfecta para espacios contemporáneos y ambientes luminosos. Alta calidad y detalle en cada acabado.",
    categoria: "Mesa",
    precio: "Consultar",
    stock: 10,
    imagenes: [
      "/imgs/mesas/ratona-clarity-1.png",
    ],
    dimensiones: {
      ancho: "60 cm",
      largo: "100 cm"
    },
    esDestacado: false,
    esOferta: true
  },
    {
    id: 8,
    nombre: "Sillón Recto Floyd",
    descripcionCorta: "Sillón recto de 1,75 x 0,90 tapizado en tela Floyd resistente y elegante",
    descripcionCompleta: "El sillón recto de 1,75 m de ancho por 0,90 m de profundidad combina diseño y confort para tu living o espacio de descanso. Tapizado en tela Floyd, resistente y sofisticada. Podés elegir el color que más se adapte a tu estilo.",
    categoria: "Sillón",
    precio: "Consultar",
    stock: 5,
    imagenes: [
      "/imgs/sillones/recto-1.png",
    ],
    dimensiones: {
      largo: "175 cm",
      ancho: "90 cm"
    },
    esDestacado: true,
    esOferta: false
  }
];

export const getProductosPorCategoria = (categoria: CategoriaProducto): Producto[] => {
  return productos.filter(producto => producto.categoria === categoria);
};

export const getProductosDestacados = (): Producto[] => {
  return productos.filter(producto => producto.esDestacado);
};

export const getCategorias = (): CategoriaProducto[] => {
  return ["Mesa", "Sillón", "Sillas"];
};