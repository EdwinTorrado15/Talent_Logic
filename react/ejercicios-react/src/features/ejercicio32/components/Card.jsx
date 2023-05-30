import { useContext } from "react";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import { productosLongboard, longBoardAnuncios } from "../utils/dataLongboard";
import { toast } from "react-toastify";
import { useLongboard } from "../hooks/useLongboard";

export const Card = () => {
  const { temporada } = useLongboard(productosLongboard);

  return (
    <ul className="flex items-center flex-wrap gap-4">
      {temporada.map((producto) => {
        let precioConDescuento = producto.precio;
        if (producto.estado === "con_descuento" && producto.descuento) {
          const descuentoDecimal = producto.descuento / 100;
          const descuento = producto.precio * descuentoDecimal;
          precioConDescuento = producto.precio - descuento;
          precioConDescuento = precioConDescuento.toFixed(2);
        }

        return (
          <div
            className="w-96 relative shadow-md p-2 rounded-md"
            key={producto.id}
          >
            <img
              className="w-full object-cover object-center h-96"
              src={producto.image}
              alt={`Foto del producto ${producto.nombre}`}
            />
            {producto.estado === "nuevo" && (
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Nuevo
              </div>
            )}
            {producto.estado === "con_descuento" && (
              <div className="absolute bottom-16 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {producto.descuento}% Descuento
              </div>
            )}
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">${precioConDescuento}</p>
              {producto.estado === "con_descuento" && (
                <p className="text-sm text-gray-400 line-through">
                  ${producto.precio}
                </p>
              )}
            </div>
            <p className="text-sm text-gray-400">{producto.nombre}</p>
          </div>
        );
      })}
    </ul>
  );
};

export const CardBig = () => {
  return (
    <div className="flex items-center flex-wrap gap-5">
      {longBoardAnuncios.map((anuncio) => (
        <div className="w-[47%] shadow-md rounded-md">
          <img
            className="w-full h-96 object-cover object-center rounded-md"
            src={anuncio.image}
            alt="Imagen del anuncio"
          />
          <div className="p-3">
            <p className="text-gray-400 font-semibold text-lg">
              {anuncio.descripcion}
            </p>
            <p className="font-semibold text-xl uppercase">
              {anuncio.categoria}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CardNuevo = () => {
  const { nuevos } = useLongboard(productosLongboard);

  return (
    <ul className="flex items-center flex-wrap gap-4">
      {nuevos.map((producto) => {
        let precioConDescuento = producto.precio;
        if (producto.estado === "con_descuento" && producto.descuento) {
          const descuentoDecimal = producto.descuento / 100;
          const descuento = producto.precio * descuentoDecimal;
          precioConDescuento = producto.precio - descuento;
          precioConDescuento = precioConDescuento.toFixed(2);
        }

        return (
          <div
            className="w-96 relative shadow-md p-2 rounded-md"
            key={producto.id}
          >
            <img
              className="w-full object-cover object-center h-96"
              src={producto.image}
              alt={`Foto del producto ${producto.nombre}`}
            />
            {producto.estado === "nuevo" && (
              <div className="absolute bottom-16 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Nuevo
              </div>
            )}
            {producto.estado === "con_descuento" && (
              <div className="absolute bottom-16 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {producto.descuento}% Descuento
              </div>
            )}
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">${precioConDescuento}</p>
              {producto.estado === "con_descuento" && (
                <p className="text-sm text-gray-400 line-through">
                  ${producto.precio}
                </p>
              )}
            </div>
            <p className="text-sm text-gray-400">{producto.nombre}</p>
          </div>
        );
      })}
    </ul>
  );
};

export const CardProducto = ({ productosFiltrados }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const handleAddToCart = (producto) => {
    if (carrito.find((item) => item.id === producto.id)) {
      toast.error("El producto ya está en el carrito");
      return;
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <ul className="flex items-center flex-wrap gap-4">
      {productosFiltrados.map((producto) => {
        let precioConDescuento = producto.precio;
        if (producto.estado === "con_descuento" && producto.descuento) {
          const descuentoDecimal = producto.descuento / 100;
          const descuento = producto.precio * descuentoDecimal;
          precioConDescuento = producto.precio - descuento;
          precioConDescuento = precioConDescuento.toFixed(2);
        }

        return (
          <div
            className="w-60 relative shadow-md p-2 rounded-md"
            key={producto.id}
          >
            <img
              className="w-full object-cover object-center h-80"
              src={producto.image}
              alt={`Foto del producto ${producto.nombre}`}
            />
            {producto.estado === "nuevo" && (
              <div className="absolute bottom-24 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Nuevo
              </div>
            )}
            {producto.estado === "con_descuento" && (
              <div className="absolute bottom-24 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {producto.descuento}% Descuento
              </div>
            )}
            <div className="flex items-center gap-4">
              <p className="font-bold text-lg">${precioConDescuento}</p>
              {producto.estado === "con_descuento" && (
                <p className="text-sm text-gray-400 line-through">
                  ${producto.precio}
                </p>
              )}
            </div>
            <p className="text-sm text-gray-400">{producto.nombre}</p>
            <button
              className="bg-[#1d1f21] text-white font-medium px-2 py-1 text-sm mt-2 rounded"
              onClick={() => handleAddToCart(producto)}
            >
              Agregar
            </button>
          </div>
        );
      })}
    </ul>
  );
};
