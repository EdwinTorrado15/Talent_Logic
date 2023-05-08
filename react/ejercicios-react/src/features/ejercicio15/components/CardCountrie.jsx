import { Link } from "react-router-dom";

const CardCountrie = ({ countries }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {countries.length === 0 ? (
        <p className="text-2xl font-semibold">No hay paises</p>
      ) : (
        Object.entries(countries).map(([key, value]) => (
          <div key={key} className="w-96 border-2">
            <img
              src={value.flags.svg}
              alt={`Bandera de ${value.name.official}`}
              loading="lazy"
              className="w-full h-44 object-cover object-center"
            />
            <div className="p-4">
              <p className="text-xl font-semibold">{value.name.official}</p>
              <p className="font-semibold">
                Poblacion:{" "}
                <span className="font-normal">{value.population}</span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-normal">{value.region}</span>
              </p>
              <p className="font-semibold">
                Capital: <span className="font-normal">{value.capital}</span>
              </p>
              <Link to={`/pais/${value.name.official}`}>
                <button className="bg-blue-500 text-white font-medium w-full text-center mt-2">
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardCountrie;
