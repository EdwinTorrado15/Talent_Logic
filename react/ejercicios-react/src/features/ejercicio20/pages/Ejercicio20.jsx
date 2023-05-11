import { useState } from "react";
import { Header } from "@/components";
import { dataRestaurants } from "@/features/ejercicio20/utils/dataRestaurants";
import { CardsRestaurants } from "@/features/ejercicio20/components";

const Ejercicio20 = () => {
  const [restaurants, setRestaurants] = useState(dataRestaurants);
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [tipoComida, setTipoComida] = useState("");

  const filterByName = () => {
    return restaurants.filter((restaurant) => {
      return (
        (nombre === "" ||
          restaurant.name.toLowerCase().includes(nombre.toLowerCase())) &&
        (ubicacion === "" ||
          restaurant.address.toLowerCase().includes(ubicacion.toLowerCase())) &&
        (tipoComida === "" || restaurant.typeRestaurant === tipoComida)
      );
    });
  };

  const typesRestaurants = restaurants.map(
    (restaurant) => restaurant.typeRestaurant
  );
  const uniqueTypesRestaurants = Array.from(new Set(typesRestaurants));

  return (
    <div>
      <Header titulo="Ejercicio 20" />
      <div className="flex  justify-center items-center gap-4">
        <input
          value={nombre}
          type="text"
          placeholder="Buscar restaurante..."
          className="border-2 p-3 rounded-md "
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          value={ubicacion}
          type="text"
          placeholder="Buscar ubicacion..."
          className="border-2 p-3 rounded-md "
          onChange={(e) => setUbicacion(e.target.value)}
        />
        <select
          value={tipoComida}
          onChange={(e) => setTipoComida(e.target.value)}
          className="border-2 p-3"
        >
          <option value="">Todas las categorías</option>
          {uniqueTypesRestaurants.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <CardsRestaurants restaurants={filterByName} />
    </div>
  );
};

export default Ejercicio20;
