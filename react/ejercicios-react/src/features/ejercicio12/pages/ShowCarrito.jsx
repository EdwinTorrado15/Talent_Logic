import { Header } from "@/components";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripcion" },
  { id: "cantidad", label: "Cantidad" },
  { id: "precio", label: "Precio" },
  { id: "acciones", label: "Acciones" },
];

const ShowCarrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [totalCarrito, setTotalCarrito] = useState(0);

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
    carrito.forEach((item) => {
      setTotalCarrito(item.precio * item.cantidad);
    });
  }, [carrito]);

  return (
    <div>
      <Header titulo="Carrito de compras" />
      <table className="w-full">
        <thead className="bg-[#E6E8F0] rounded-t-lg">
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="p-3 uppercase text-sm">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {carrito.map((car) => (
            <tr
              key={car.id}
              className="text-center hover:bg-slate-50 transition duration-200"
            >
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)] m-auto">
                <p>{car.nombre}</p>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                {car.descripcion}
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                {car.cantidad}
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                {car.precio}
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    onClick={() => incrementProducto(car)}
                    className="bg-blue-400 px-3 rounded-md font-medium"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementProducto(car)}
                    className="bg-blue-400 px-3 rounded-md font-medium"
                  >
                    -
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-[#E6E8F0] rounded-b-lg">
          <tr>
            <td colSpan="3" className="p-3 uppercase text-sm">
              Total
            </td>
            <td colSpan="2" className="p-3 uppercase text-sm">
              {totalCarrito}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShowCarrito;
