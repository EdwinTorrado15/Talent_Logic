import React from "react";

const FriendList = ({ amigosAgregados, setAmigosAgregados }) => {
  const handleRemoveFriend = (usuario) => {
    setAmigosAgregados(amigosAgregados.filter((amigo) => amigo !== usuario));
  };

  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold">Amigos agregados</h2>
      <ul className="mt-3">
        {amigosAgregados.map((amigo, index) => (
          <li
            key={index}
            className="border-2 p-4 mt-2 w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={amigo.foto}
                alt={`Foto de perfil de ${amigo.nombre}`}
                className="w-16 h-16 object-cover object-center rounded-full"
              />
              <span className="text-blue-500 font-medium">{amigo.nombre}</span>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              onClick={() => handleRemoveFriend(amigo)}
            >
              Eliminar amigo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
