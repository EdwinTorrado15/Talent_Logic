import { useContext } from "react";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import { Link } from "react-router-dom";
import { Header } from "@/components";
import { TableProductos } from "@/features/ejercicio12/components";
import { AiOutlineShoppingCart } from "react-icons/ai";

let productos = [
  {
    id: 1,
    nombre: "Camisa",
    descripcion: "Camisa de manga larga en algodón 100%.",
    precio: 25.99,
  },
  {
    id: 2,
    nombre: "Pantalón",
    descripcion: "Pantalón de tela resistente en varios colores.",
    precio: 35.5,
  },
  {
    id: 3,
    nombre: "Zapatos",
    descripcion: "Zapatos de cuero para hombre o mujer.",
    precio: 65.0,
  },
  {
    id: 4,
    nombre: "Reloj",
    descripcion: "Reloj digital con pantalla LCD y cronómetro.",
    precio: 15.99,
  },
  {
    id: 5,
    nombre: "Gorra",
    descripcion: "Gorra de béisbol con diseño moderno.",
    precio: 12.0,
  },
  {
    id: 6,
    nombre: "Bolso",
    descripcion: "Bolso de mano con múltiples compartimentos.",
    precio: 45.99,
  },
];

const Ejercicio12 = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <div>
      <Header titulo="Ejercicio 12" />
      <div className="p-2 bg-gray-200 hover:bg-gray-300 transition duration-300 w-max rounded-full ml-4 mb-4 relative">
        <Link to="/ejercicio12/show-carrito">
          <AiOutlineShoppingCart className="text-3xl " />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {carrito.length}
          </span>
        </Link>
      </div>
      <TableProductos productos={productos} />
    </div>
  );
};

export default Ejercicio12;
