import { useContext } from "react";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import { toast } from "react-toastify";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripcion" },
  { id: "precio", label: "Precio" },
  { id: "acciones", label: "Acciones" },
];

const TableProductos = ({ productos }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const addProducto = (producto) => {
    if (carrito.find((item) => item.id === producto.id)) {
      toast.error("El producto ya está en el carrito");
      return;
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
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
        {productos.map((producto) => (
          <tr
            key={producto.id}
            className="text-center hover:bg-slate-50 transition duration-200"
          >
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)] m-auto">
              <p>{producto.nombre}</p>
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              {producto.precio}
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              {producto.descripcion}
            </td>
            <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
              <button
                onClick={() => addProducto(producto)}
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-3 py-1 rounded-md text-medium text-white"
              >
                Agregar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProductos;
