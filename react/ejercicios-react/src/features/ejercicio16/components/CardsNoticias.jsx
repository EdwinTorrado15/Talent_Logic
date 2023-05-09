import React from "react";

const CardsNoticias = ({ noticias }) => {
  console.log(noticias);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {noticias().map((noticia) => (
        <div className="max-w-md rounded overflow-hidden shadow-lg m-4 p-3 space-y-1">
          <p key={noticia.id} className="text-xl font-bold">{noticia.nombre}</p>
          <p className="bg-blue-500 w-max text-white font-medium px-3 rounded-md">
            {noticia.categoria}
          </p>
          <p>{noticia.descripcion}</p>
          <p className="text-gray-600 text-sm">{noticia.fecha}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsNoticias;
