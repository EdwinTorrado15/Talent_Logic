import { Header } from "@/components";

const Fecha = ({ fecha }) => {
  const diasFaltantes = (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  return (
    <div>
      <Header titulo="Ejercicio 7" />
      <p className="text-lg text-center">Faltan {diasFaltantes(fecha)}</p>
    </div>
  );
};

export default Fecha;
