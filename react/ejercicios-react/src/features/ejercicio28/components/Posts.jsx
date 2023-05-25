import { useState, useEffect } from "react";
import { Comentarios } from "@/features/ejercicio28/components";

const Posts = ({ publicaciones, amigosAgregados, setAmigosAgregados }) => {
  const [comentarios, setComentarios] = useState({});
  const [name, setName] = useState("");

  const handleNewComment = (postId, comentario) => {
    setComentarios((prevComentarios) => ({
      ...prevComentarios,
      [postId]: [...(prevComentarios[postId] || []), comentario],
    }));
  };

  const getDataUser = () => {
    const userData = localStorage.getItem("userAccounts");
    const confirmedEmail = localStorage.getItem("loggedInEmail");

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      const matchedUser = parsedUserData.find(
        (user) => user.email === confirmedEmail
      );
      if (matchedUser) {
        setName(`${matchedUser.nombre} ${matchedUser.apellido}`);
      }
    }
  };

  const handleAddFriend = (usuario) => {
    setAmigosAgregados([...amigosAgregados, usuario]);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="mt-3">
      {publicaciones.map((publicacion, index) => (
        <div key={index} className="border-2 p-4 mt-2 w-full">
          <div className="flex items-center gap-3">
            <img
              src={publicacion.usuario.foto}
              alt={`Foto de perfil de ${publicacion.usuario.nombre}`}
              className="w-16 h-16 object-cover object-center rounded-full"
            />
            <span className="text-blue-500 font-medium">
              {publicacion.usuario.nombre}
            </span>
            {!amigosAgregados.includes(publicacion.usuario) &&
              publicacion.usuario.nombre !== name && (
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleAddFriend(publicacion.usuario)}
                >
                  Agregar amigo
                </button>
              )}
          </div>
          <div className="mt-2">
            <p>{publicacion.contenido}</p>
          </div>
          {publicacion.imagen && (
            <div className="mt-2">
              <img
                src={publicacion.imagen}
                alt="Imagen de la publicación"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          )}
          <Comentarios
            comentarios={comentarios[index] || []}
            onNewComment={(comentario) => handleNewComment(index, comentario)}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
