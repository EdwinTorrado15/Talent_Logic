import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import { Navbar, Footer, Modal } from "@/features/ejercicio32/components";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { carritoTotalDescuento } from "@/features/ejercicio12/utils/totalCarrito";

const Carrito = () => {
  const { carrito, setCarrito, totalCarrito, setTotalCarrito } =
    useContext(CarritoContext);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const incrementProducto = (producto) => {
    const newCarrito = carrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(newCarrito);
  };

  const decrementProducto = (producto) => {
    if (producto.cantidad > 1) {
      const newCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
      setCarrito(newCarrito);
    } else {
      toast.warning("El producto no se puede eliminar del carrito.");
    }
  };

  useEffect(() => {
    const total = carritoTotalDescuento(carrito).toFixed(2);
    setTotalCarrito(total);
  }, [carrito]);

  return (
    <>
      <Navbar />
      <main className="w-2/3 m-auto h-screen">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="uppercase font-bold text-2xl">Carrito</h2>
          <span className="text-gray-500">{carrito.length}</span>
        </div>
        <div className="flex gap-4">
          <div className="w-2/3">
            {carrito.map((producto) => {
              let precioConDescuento = producto.precio;
              if (producto.estado === "con_descuento" && producto.descuento) {
                const descuentoDecimal = producto.descuento / 100;
                const descuento = producto.precio * descuentoDecimal;
                precioConDescuento = producto.precio - descuento;
                precioConDescuento = precioConDescuento.toFixed(2);
              }
              return (
                <div key={producto.id} className="grid grid-cols-3">
                  <img
                    className="w-52 h-52 object-cover object-center rounded"
                    src={producto.image}
                    alt={producto.nombre}
                  />
                  <div>
                    <h3 className="font-semibold">{producto.nombre}</h3>
                    <div className="space-x-3 mt-2">
                      <button
                        className="bg-gray-100 px-2 rounded-md font-bold"
                        onClick={() => decrementProducto(producto)}
                      >
                        -
                      </button>
                      <span>{producto.cantidad}</span>
                      <button
                        className="bg-gray-100 px-2 rounded-md font-bold"
                        onClick={() => incrementProducto(producto)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-end space-y-3">
                    <div>
                      <p className="font-bold text-lg">${precioConDescuento}</p>
                      {producto.estado === "con_descuento" && (
                        <p className="text-sm text-gray-400 line-through">
                          ${producto.precio}
                        </p>
                      )}
                    </div>
                    <button>
                      <BiTrash className="text-xl text-gray-400 hover:text-orange-400 transition duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="p-3 border w-max h-max  rounded-md">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-lg">Total</h3>
                <p>{totalCarrito}</p>
              </div>
              <button
                className="bg-[#1d1f21] text-white font-medium px-2 py-1 text-sm mt-2 rounded hover:bg-orange-400 transition duration-300"
                onClick={handleOpenModal}
              >
                Pago con tarjeta
              </button>
            </div>
          </div>
        </div>
      </main>
      <Modal
        closeModal={handleCloseModal}
        showModal={showModal}
        carrito={carrito}
        total={totalCarrito}
        setCarrito={setCarrito}
      />
      <Footer />
    </>
  );
};

export default Carrito;
