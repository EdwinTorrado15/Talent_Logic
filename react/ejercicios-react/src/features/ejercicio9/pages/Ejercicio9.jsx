import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ListadoNombres } from "@/features/ejercicio9/components";
import { Header } from "@/components";

const Ejercicio9 = () => {
  const [searc, setSearch] = useState("");

  const nombres = [
    "Lucía",
    "Matías",
    "Camila",
    "Juan",
    "Valentina",
    "Pedro",
    "Florencia",
    "Joaquín",
    "María",
    "Agustín",
  ];

  const searchName = () => {
    return nombres.filter((nombre) => {
      return nombre.toLowerCase().includes(searc.toLowerCase());
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full" >
        <Header titulo="Ejercicio 9" />
        <div className="w-60 flex items-center m-auto gap-2 focus:outline-none rounded-lg border border-gray-300 hover:bg-gray-100 bg-white mt-2">
          <div className="p-2 rounded-tl-lg rounded-bl-lg">
            <FiSearch className="" size={20} />
          </div>
          <input
            className="focus:outline-none border-none bg-transparent py-2 px-2"
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <ListadoNombres nombres={nombres} searchName={searchName} />
    </div>
  );
};

export default Ejercicio9;
