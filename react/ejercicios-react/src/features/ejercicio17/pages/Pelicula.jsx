import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { peliculas } from "@/features/ejercicio17/utils/dataPeliculas";
import { Stars } from "@/features/ejercicio17/components";

const Pelicula = () => {
  const { nombre } = useParams();
  const [pelicula, setPelicula] = useState({});

  const getMovieByName = () => {
    const pelicula = peliculas.find((pelicula) => pelicula.nombre === nombre);
    setPelicula(pelicula);
  };

  useEffect(() => {
    getMovieByName();
  }, []);

  console.log("pelicula ->", pelicula);

  return (
    <main>
      <div
        className="relative h-screen"
        style={{
          backgroundImage: `url(${pelicula.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/25 bg-opacity-50 p-4 text-white h-screen flex justify-center items-center"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <h1 className="text-3xl font-bold">{pelicula.nombre}</h1>
        </div>
      </div>
      <p className="font-semibold text-center my-3">{pelicula.categoria}</p>
      <p className="text-center text-sm">
        <Stars rating={pelicula.calificacion} />
        {pelicula.calificacion}
      </p>
      <p className="text-center">{pelicula.descripcion}</p>
    </main>
  );
};

export default Pelicula;
