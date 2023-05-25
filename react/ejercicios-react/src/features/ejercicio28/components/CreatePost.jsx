import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreatePost = ({ onNewPost }) => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [showImageInput, setShowImageInput] = useState(false);
  const { register, handleSubmit, reset } = useForm();

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

  const getProfileImage = () => {
    const profileImage = localStorage.getItem("profileImage");
    if (profileImage) {
      const image = new Image();
      image.src = profileImage;
      image.onload = () => {
        setProfileImage(profileImage);
      };
      image.onerror = () => {
        setProfileImage(null);
      };
    }
  };

  const onSubmit = (data) => {
    const { contenido, imagen } = data;

    const nuevaPublicacion = {
      usuario: {
        nombre: name,
        foto: profileImage,
      },
      contenido: contenido,
      imagen: imagen || "",
      comentarios: [],
      likes: 0,
    };

    onNewPost(nuevaPublicacion);
    reset();
    toast.success("Publicación creada con éxito");
  };

  const toggleImageInput = () => {
    setShowImageInput(!showImageInput);
  };

  useEffect(() => {
    getProfileImage();
    getDataUser();
  }, []);

  return (
    <div className="border-2 p-4 mt-2 w-1/2">
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt={`Foto de perfil de ${name}`}
          className="w-16 h-16 object-cover object-center rounded-full"
        />
        <span className="text-blue-500 font-bold">{name}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <textarea
            className="w-full border-2 rounded-md p-2"
            placeholder="¿Qué estás pensando?"
            {...register("contenido")}
          />
        </div>
        {showImageInput && (
          <div className="mt-2">
            <input
              type="text"
              className="w-full border-2 rounded-md p-2"
              placeholder="URL de la imagen (opcional)"
              {...register("imagen")}
            />
          </div>
        )}
        <div className="flex justify-between mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
          >
            Publicar
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-3 py-2 rounded-md"
            onClick={toggleImageInput}
          >
            Agregar Imagen
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
