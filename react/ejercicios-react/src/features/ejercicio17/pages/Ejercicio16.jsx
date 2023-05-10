import { Header } from "@/components";
import { CardPelicula } from "@/features/ejercicio17/components";
import { peliculas } from "@/features/ejercicio17/utils/dataPeliculas";

const Ejercicio16 = () => {
  return (
    <div>
      <Header titulo="Ejercicio16" />
      <CardPelicula peliculas={peliculas} />
    </div>
  );
};

export default Ejercicio16;
