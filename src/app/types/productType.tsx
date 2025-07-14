export type CategoriaProducto = "Mesa" | "Sillón" | "Sillas";


export type Producto = {
    id: number;
    nombre: string;
    descripcionCorta: string;
    descripcionCompleta: string;
    categoria: CategoriaProducto;
    precio?: string;
    precioAnterior?: string;
    descuento?: string;
    stock: number;
    imagenes: string[];
    variantes?: string;
    dimensiones: {
        ancho: string;
        largo: string;
    };
    caracteristicasAdicionales?: string;
    esDestacado?: boolean;
    esOferta?: boolean;
};

export type FiltroProducto = {
    categoria?: CategoriaProducto;
    precioMin?: number;
    precioMax?: number;
    enStock?: boolean;
};

export type OrdenProducto = "nombre" | "precio" | "categoria" | "stock";