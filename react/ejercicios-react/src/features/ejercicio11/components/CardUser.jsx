import { useState } from "react";
import { Link } from "react-router-dom";

const CardUser = ({ usuarios }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-3 flex justify-center flex-wrap gap-20">
      {usuarios.map((usuario, index) => (
        <div key={usuario.id} className="w-96 rounded-md shadow-md">
          <div
            className="relative"
            style={{
              maxHeight: "280px", // Establece la altura máxima del contenedor de la imagen
              overflow: "hidden", // Asegura que la imagen no se salga del contenedor
            }}
          >
            <img
              className={`w-full h-full object-cover object-center rounded-tr-md rounded-tl-md transition-transform duration-300 ${
                hoveredIndex === index ? "transform scale-105" : ""
              }`}
              style={{ transformOrigin: "top center", maxWidth: "100%" }}
              src={usuario.image}
              alt={`Foto de perfil de ${usuario.nombre}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
          <div className="text-center p-2">
            <p className="font-medium text-lg">{usuario.nombre}</p>
            <Link to={`/ejercicio11/perfil/${usuario.nombre}${usuario.id}`}>
              <span className="text-sm text-blue-400 hover:text-blue-600">
                Ver mas
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUser;
