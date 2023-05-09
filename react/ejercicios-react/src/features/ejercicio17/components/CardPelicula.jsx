import { Link } from "react-router-dom";

const CardPelicula = ({ peliculas }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {peliculas.map((pelicula) => (
        <Link to={`/pelicula/${pelicula.nombre}`} key={pelicula.id}>
          <div className="w-96 h-96 rounded-md overflow-hidden shadow-lg m-4 hover:scale-110 transition duration-500 ease-in-out">
            <img
              src={pelicula.imagen}
              alt={`Foto de la pelicula ${pelicula.nombre}`}
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardPelicula;
