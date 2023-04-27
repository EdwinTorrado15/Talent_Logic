import { Header } from "@/components";

const UserRender = ({ dataUser }) => {
  return (
    <>
      <Header titulo="Ejercicio 2" />
      <div className="w-96 m-auto border-2 border-gray-500 rounded-md">
        {dataUser && (
          <>
            <img
              className="w-full h-56 object-cover rounded-tr-md rounded-tl-md"
              src={dataUser.image}
              alt={`foto de perfil de ${dataUser.name}`}
            />
            <div className="p-3">
              <p className="text-xl font-medium">
                {dataUser.name} {dataUser.lastname}
              </p>
              <p className="text-gray-600">{dataUser.age}</p>
              <div>
                <p>Direccion: {dataUser.address.street}</p>
                <p>Numero: {dataUser.address.number}</p>
                <p>Ciudad: {dataUser.address.city}</p>
                <p>Pais: {dataUser.address.country}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserRender;
