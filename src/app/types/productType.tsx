export type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: string;
    precio: string;
    precioAnterior?: string;
    descuento?: string;
    caracteristicas: string[];
    imagen: string;
    esDestacado?: boolean;
    esOferta?: boolean;
};