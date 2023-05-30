import { useState } from "react";
import { Navbar, Footer } from "@/features/ejercicio32/components";
import { categorias } from "../utils/dataLongboard";
import { GrFormClose } from "react-icons/gr";
import { useLongboard } from "../hooks/useLongboard";
import { productos } from "../utils/dataLongboard";
import { CardProducto } from "../components/Card";

const Productos = () => {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [rangoPrecio, setRangoPrecio] = useState({ min: "", max: "" });
  const { temporada, nuevos } = useLongboard(productos);

  const productosCombinados = [...temporada, ...nuevos];

  const handleCategoriaSeleccionada = (categoriaNombre) => {
    if (categoriasSeleccionadas.includes(categoriaNombre)) {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((nombre) => nombre !== categoriaNombre)
      );
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoriaNombre]);
    }
  };

  const handleRangoPrecioChange = (e) => {
    const { name, value } = e.target;
    setRangoPrecio((prevRangoPrecio) => ({
      ...prevRangoPrecio,
      [name]: value,
    }));
  };

  const handleEliminarCategoria = (categoriaNombre) => {
    setCategoriasSeleccionadas((prevCategoriasSeleccionadas) =>
      prevCategoriasSeleccionadas.filter((nombre) => nombre !== categoriaNombre)
    );
  };

  const filtrarProductos = (categoriasSeleccionadas, rangoPrecio) => {
    let productosFiltrados = productosCombinados;

    // Filtrar por categorías seleccionadas
    if (categoriasSeleccionadas.length > 0) {
      productosFiltrados = productosFiltrados.filter((producto) =>
        categoriasSeleccionadas.includes(producto.categoria)
      );
    }

    // Filtrar por rango de precios
    const { min, max } = rangoPrecio;
    if (min !== "" && max !== "") {
      productosFiltrados = productosFiltrados.filter((producto) => {
        const precio = parseFloat(producto.precio);
        return precio >= parseFloat(min) && precio <= parseFloat(max);
      });
    } else if (min !== "") {
      productosFiltrados = productosFiltrados.filter((producto) => {
        const precio = parseFloat(producto.precio);
        return precio >= parseFloat(min);
      });
    } else if (max !== "") {
      productosFiltrados = productosFiltrados.filter((producto) => {
        const precio = parseFloat(producto.precio);
        return precio <= parseFloat(max);
      });
    }

    return productosFiltrados;
  };

  const productosFiltrados = filtrarProductos(
    categoriasSeleccionadas,
    rangoPrecio
  );

  return (
    <>
      <Navbar />
      <main className="w-2/3 m-auto">
        <h2 className="mb-8 uppercase font-bold text-2xl">Productos</h2>
        <div className="flex">
          <div className="w-1/3">
            <div>
              <p className="font-semibold">Categorías</p>
              <div>
                {categorias.map((categoria) => (
                  <div key={categoria.id} className="flex items-center">
                    <input
                      className="checked:bg-blue-600 checked:border-transparent"
                      type="checkbox"
                      id={`categoria-${categoria.id}`}
                      checked={categoriasSeleccionadas.includes(
                        categoria.nombre
                      )}
                      onChange={() =>
                        handleCategoriaSeleccionada(categoria.nombre)
                      }
                    />
                    <label
                      htmlFor={`categoria-${categoria.id}`}
                      className="ml-2"
                    >
                      {categoria.nombre}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Precio</p>
              <div className="flex flex-col gap-2 w-1/2">
                <input
                  type="number"
                  placeholder="Precio mínimo"
                  className="border p-1 rounded mr-2"
                  name="min"
                  value={rangoPrecio.min}
                  onChange={handleRangoPrecioChange}
                />
                <input
                  type="number"
                  placeholder="Precio máximo"
                  className="border p-1 rounded"
                  name="max"
                  value={rangoPrecio.max}
                  onChange={handleRangoPrecioChange}
                />
              </div>
            </div>
          </div>
          <div className="w-2/3">
            {categoriasSeleccionadas.length > 0 && (
              <div className="flex flex-wrap gap-4 p-4">
                {categoriasSeleccionadas.map((categoria) => (
                  <div
                    key={categoria}
                    className="bg-[#1d1f21] rounded-md px-4 py-2 text-white flex items-center gap-2"
                  >
                    <p>{categoria}</p>
                    <GrFormClose
                      className="bg-white rounded-full cursor-pointer"
                      onClick={() => handleEliminarCategoria(categoria)}
                    />
                  </div>
                ))}
              </div>
            )}
            <CardProducto productosFiltrados={productosFiltrados} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productos;
