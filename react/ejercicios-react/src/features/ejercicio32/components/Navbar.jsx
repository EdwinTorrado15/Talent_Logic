import { useContext } from "react";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import {
  BiSearch,
  BiCustomize,
  BiUser,
  BiHeart,
  BiStore,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <nav className="bg-white">
      {/* Navbar desktop */}
      <div className="hidden lg:flex items-center justify-around p-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <Link to="/ejercicio32">
            <h1 className="text-3xl font-bold">
              Chato
              <span className="text-orange-500">Shop</span>
            </h1>
          </Link>
          <Link to="/ejercicio32/productos">
            <div className="flex items-center bg-[#1d1f21] text-white px-4 py-2 rounded-lg gap-2 cursor-pointer">
              <BiCustomize />
              <p className="font-semibold">Productos</p>
            </div>
          </Link>
        </div>

        {/* Barra de busqueda */}
        <div className="flex items-center bg-gray-100 w-1/2 p-3 rounded-lg focus-within:outline outline-2 outline-gray-200">
          <input
            className="bg-transparent focus:outline-none border-none w-full"
            type="text"
            placeholder="Búsqueda de productos..."
          />
          <BiSearch className="text-gray-500" />
        </div>

        {/* Otras opciones */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center hover:bg-gray-100 p-1 rounded-lg transition duration-300 cursor-pointer hover:text-orange-500">
            <BiUser className="text-2xl" />
            <p className="text-sm">Perfil</p>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-100 p-1 rounded-lg transition duration-300 cursor-pointer hover:text-orange-500">
            <BiHeart className="text-2xl" />
            <p className="text-sm">Favoritos</p>
          </div>
          <Link to="/ejercicio32/carrito">
            <div className="flex flex-col items-center hover:bg-gray-100 p-1 rounded-lg transition duration-300 cursor-pointer hover:text-orange-500 relative">
              <BiStore className="text-2xl" />
              <p className="text-sm">Carrito</p>
              {carrito.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {carrito.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="block lg:hidden px-2">
        <h1 className="text-3xl font-bold text-center mb-2">
          Chato
          <span className="text-orange-500">Shop</span>
        </h1>
        {/* Barra de busqueda */}
        <div className="flex items-center bg-gray-100 w-full p-3 rounded-lg focus-within:outline outline-2 outline-gray-200">
          <input
            className="bg-transparent focus:outline-none border-none w-full"
            type="text"
            placeholder="Búsqueda de productos..."
          />
          <BiSearch className="text-gray-500" />
        </div>

        {/* iconos */}
        <div className="fixed bottom-0 right-0 flex items-center justify-around p-2 w-full">
          <BiUser className="text-2xl" />
          <BiCustomize className="text-2xl" />
          <BiHeart className="text-2xl" />
          <BiStore className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
