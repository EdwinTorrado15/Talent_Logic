import { useState } from "react";
import { cardData } from "./data";
import { Alerta, Card } from "./components";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const searchGame = () => {
    return cardData.filter((card) => {
      return (
        search === "" ||
        card.nombre.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <>
      <div className="p-8 text-center border-b-2 bg-gray-50">
        <h1 className="mb-3 text-3xl font-semibold">
          Buscador de video juegos
        </h1>
        <input
          className="w-96 rounded-md p-3 border-2 outline-blue-500"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center my-5">
        {searchGame().length === 0 ? (
          <Alerta descripcion="No se encontro el video juego" />
        ) : (
          searchGame().map((card) => (
            <div
              key={card.id}
              className="w-80 border-2 border-gray-500 rounded-md"
            >
              <Card
                nombre={card.nombre}
                image={card.image}
                descripcion={card.descripcion}
                año={card.año}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
