import { TableProductos } from "@/features/ejercicio5/components";

const productos = [
  {
    id: 1,
    nombre: "Camiseta de algodón",
    precio: 15.99,
    descripcion: "Camiseta cómoda y fresca para cualquier ocasión",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    nombre: "Pantalones vaqueros",
    precio: 39.99,
    descripcion: "Pantalones de mezclilla para uso diario",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    nombre: "Chaqueta de cuero",
    precio: 99.99,
    descripcion: "Chaqueta de cuero genuino, perfecta para cualquier ocasión",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    nombre: "Zapatillas deportivas",
    precio: 59.99,
    descripcion: "Zapatillas cómodas y resistentes para entrenamiento",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    nombre: "Gorra de béisbol",
    precio: 9.99,
    descripcion: "Gorra de algodón con diseño clásico",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    nombre: "Vestido estampado",
    precio: 29.99,
    descripcion: "Vestido estampado con corte en A y cuello redondo",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    nombre: "Bolso de mano",
    precio: 24.99,
    descripcion: "Bolso de mano con diseño elegante y espacioso",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    nombre: "Polo clásico",
    precio: 19.99,
    descripcion: "Polo de algodón con diseño clásico y cuello de botones",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    nombre: "Pantalones cortos deportivos",
    precio: 19.99,
    descripcion: "Pantalones cortos deportivos de secado rápido",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    nombre: "Sandalias de verano",
    precio: 29.99,
    descripcion: "Sandalias cómodas y frescas para uso diario en verano",
    imagen: "https://picsum.photos/200/300",
  },
];

const Ejercicio5 = () => {
  return <TableProductos productos={productos}/>;
};

export default Ejercicio5;
