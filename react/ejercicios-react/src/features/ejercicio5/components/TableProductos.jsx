import { Header } from "@/components";

const columns = [
  { id: "nombre", label: "Nombre" },
  { id: "precio", label: "Precio" },
  { id: "descripcion", label: "Descripcion" },
];

const TableProductos = ({ productos }) => {
  return (
    <>
      <Header titulo="Ejercicio 5" />
      <table className="w-full mt-4 border">
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
                <div className="flex items-center justify-start gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={producto.imagen}
                    alt={`Foto del producto ${producto.nombre}`}
                  />
                  <p>{producto.nombre}</p>
                </div>
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                {producto.precio}
              </td>
              <td className="p-3 border-b border-[rgba(230,232,240,0.5)]">
                {producto.descripcion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableProductos;
