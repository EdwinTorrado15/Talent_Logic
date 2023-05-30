import { Navbar, Slider, Footer } from "@/features/ejercicio32/components";
import { Temporada, Nuevos } from "@/features/ejercicio32/layout";
import { CardBig } from "../components/Card";
import { categorias } from "../utils/dataLongboard";

const Ejercicio32 = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Slider />
      <main className="w-2/3 m-auto">
        <ul className="flex items-center justify-center gap-1 mt-3">
          {categorias.map((categoria) => (
            <li
              key={categoria.id}
              className="bg-[#1d1f21] text-white py-8 px-9 rounded-xl uppercase font-semibold cursor-pointer hover:bg-orange-500 transition duration-300"
            >
              {categoria.nombre}
            </li>
          ))}
        </ul>

        {/* Exitos de temporada */}
        <section className="mt-[75px]">
          <h2 className=" mb-8 uppercase font-bold text-2xl">
            Exitos de temporada
          </h2>
          <Temporada />
        </section>

        <section className="mt-[75px]">
          <CardBig />
        </section>

        <section className="mt-[75px]">
          <h2 className=" mb-8 uppercase font-bold text-2xl">Nuevos</h2>
          <Nuevos />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ejercicio32;
