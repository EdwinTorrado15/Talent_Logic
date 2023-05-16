import { useState } from "react";
import { Header } from "@/components";
import { CardsNoticias } from "@/features/ejercicio16/components";
/* import {noticas} from ".." */

const noticias = [
  {
    id: 1,
    categoria: "Deportes",
    fecha: "2023-01-20",
    nombre: "Equipo de fútbol gana su primer partido de la temporada",
    descripcion:
      "El equipo local de fútbol ganó su primer partido de la temporada en un emocionante partido contra sus rivales.",
  },
  {
    id: 2,
    categoria: "Entretenimiento",
    fecha: "2022-02-05",
    nombre: "Nuevo álbum de rock lanzado por la banda popular",
    descripcion:
      "La popular banda de rock ha lanzado su nuevo álbum, que ha sido bien recibido por sus fans y críticos por igual.",
  },
  {
    id: 3,
    categoria: "Política",
    fecha: "2022-03-12",
    nombre: "El presidente anuncia nueva política fiscal",
    descripcion:
      "El presidente anunció una nueva política fiscal que ha generado controversia y debate en todo el país.",
  },
  {
    id: 4,
    categoria: "Tecnología",
    fecha: "2022-04-02",
    nombre:
      "Nueva actualización de software lanzada para el popular teléfono inteligente",
    descripcion:
      "El popular teléfono inteligente ha recibido una nueva actualización de software que incluye varias mejoras y correcciones de errores.",
  },
  {
    id: 5,
    categoria: "Cultura",
    fecha: "2022-05-08",
    nombre: "Exposición de arte contemporáneo inaugurada en el museo local",
    descripcion:
      "El museo local ha inaugurado una nueva exposición de arte contemporáneo que presenta obras de artistas de todo el mundo.",
  },
  {
    id: 6,
    categoria: "Ciencia",
    fecha: "2022-06-20",
    nombre: "Nuevo descubrimiento en el campo de la biología molecular",
    descripcion:
      "Un equipo de científicos ha hecho un nuevo descubrimiento en el campo de la biología molecular que podría tener implicaciones importantes en el tratamiento de enfermedades humanas.",
  },
  {
    id: 7,
    categoria: "Negocios",
    fecha: "2022-07-15",
    nombre:
      "La empresa líder en tecnología informática informa ganancias récord",
    descripcion:
      "La empresa líder en tecnología informática ha informado ganancias récord en el último trimestre gracias a la creciente demanda de sus productos y servicios.",
  },
  {
    id: 8,
    categoria: "Salud",
    fecha: "2022-08-10",
    nombre: "Nuevo tratamiento para la diabetes tipo 2 aprobado por la FDA",
    descripcion:
      "La FDA ha aprobado un nuevo tratamiento para la diabetes tipo 2 que ha mostrado resultados prometedores en ensayos clínicos.",
  },
  {
    id: 9,
    categoria: "Medio ambiente",
    fecha: "2022-09-05",
    nombre:
      "Nuevo informe destaca el impacto del cambio climático en la biodiversidad",
    descripcion:
      "Un nuevo informe ha destacado el impacto del cambio climático en la biodiversidad y la necesidad de tomar medidas urgentes para abordar este problema.",
  },
  {
    id: 10,
    categoria: "Educación",
    fecha: "2022-10-18",
    nombre: "Universidad local clasificada entre las mejores del país",
    descripcion:
      "La universidad local ha sido clasificada entre las mejores del país por su calidad académica, investigación y servicios a la comunidad.",
  },
];

const Ejercicio15 = () => {
  const [search, setSearch] = useState("");
  const [fecha, setFecha] = useState("");
  const [categoria, setCategoria] = useState("");

  const filterByName = () => {
    return noticias.filter((noticia) => {
      return (
        (search === "" ||
          noticia.nombre.toLowerCase().includes(search.toLowerCase())) &&
        (fecha === "" || noticia.fecha === fecha) &&
        (categoria === "" || noticia.categoria === categoria)
      );
    });
  };

  const categories = noticias.map((noticia) => noticia.categoria);
  const uniqueCategories = Array.from(new Set(categories));

  return (
    <div>
      <Header titulo="Ejercicio 15" />
      <div className="flex  justify-center items-center gap-4">
        <input
          value={search}
          type="text"
          placeholder="Buscar..."
          className="border-2 p-3 rounded-md "
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          value={fecha}
          type="date"
          placeholder="Fecha"
          className="border-2 p-3 rounded-md"
          onChange={(e) => setFecha(e.target.value)}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border-2 p-3"
        >
          <option value="">Todas las categorías</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <CardsNoticias noticias={filterByName} />
    </div>
  );
};

export default Ejercicio15;
