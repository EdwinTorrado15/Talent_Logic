import { Header } from "@/components";
import { CardPelicula } from "@/features/ejercicio17/components";
import { peliculas } from "@/features/ejercicio17/utils/dataPeliculas";

const Ejercicio17 = () => {
  return (
    <div>
      <Header titulo="Ejercicio17" />
      <CardPelicula peliculas={peliculas} />
    </div>
  );
};

export default Ejercicio17;
