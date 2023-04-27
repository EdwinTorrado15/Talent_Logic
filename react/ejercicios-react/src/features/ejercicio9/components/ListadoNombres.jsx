import { Alerta } from "@/features/ejercicio9/components";

const ListadoNombres = ({ searchName }) => {
  return (
    <div className="mt-3">
      {searchName().length === 0 ? (
        <Alerta titulo="No se encontraron resultados" />
      ) : (
        searchName().map((name, index) => <p className="font-medium text-2xl" key={index}>{name}</p>)
      )}
    </div>
  );
};

export default ListadoNombres;
