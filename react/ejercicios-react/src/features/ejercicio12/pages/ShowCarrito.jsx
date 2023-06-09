import { Header } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { Cupones } from "@/features/ejercicio12/components";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";
import { carritoTotal } from "../utils/totalCarrito";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "descripcion", label: "Descripcion" },
  { id: "cantidad", label: "Cantidad" },
  { id: "precio", label: "Precio" },
  { id: "acciones", label: "Acciones" },
];

const ShowCarrito = () => {
  const { carrito, setCarrito, totalCarrito, setTotalCarrito } =
    useContext(CarritoContext);

  const navigate = useNavigate();

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
    const total = carritoTotal(carrito).toFixed(2);
    setTotalCarrito(total);
  }, [carrito]);

  // Guardar los productos en el localStorage
  const handleSendProducts = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    setCarrito([]);
    toast.success("Los productos se han guardado correctamente.");
    navigate("/ejercicio12");
  };

  return (
    <div>
      <Header titulo="Carrito de compras" />
      <Cupones />
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
      <div>
        <button
          onClick={handleSendProducts}
          className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Enviar
        </button>
        <Link to="/ejercicio12">
          <button className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCarrito;
