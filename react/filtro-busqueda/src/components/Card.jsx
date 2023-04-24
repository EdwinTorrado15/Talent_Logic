const Card = ({ nombre, descripcion, año, image }) => {
  return (
    <div>
      <img className="rounded-tr-md rounded-tl-md h-44 w-full" src={image} alt={nombre} />
      <div className="p-3">
        <p className="font-semibold">{nombre}</p>
        <p className="text-xs font-medium text-white bg-black w-max px-1 rounded-md my-1">{año}</p>
        <p className="text-sm">{descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
