import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.all.js";

const CardImages = ({ images }) => {
  const [imagesLists, setImagesLists] = useState(images);

  const handleDelete = (id) => {
    Swal.fire({
      title: `¿Estás seguro?`,
      html: `No podrás revertir esto!`,
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#D00000",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateList = images.filter((image) => image.id !== id);
        setImagesLists(updateList);
        Swal.fire("Eliminado!", "La foto ha sido eliminada", "success");
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {imagesLists.map((image) => (
        <div
          key={image.id}
          className="w-96 h-96 rounded-md overflow-hidden shadow-lg m-4 hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
          onClick={() => handleDelete(image.id)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default CardImages;
