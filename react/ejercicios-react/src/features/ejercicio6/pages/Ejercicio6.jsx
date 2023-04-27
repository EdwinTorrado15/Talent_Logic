import { useState } from "react";
import { Header } from "@/components";

const Ejercicio6 = () => {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
  };

  return (
    <div className="text-center">
      <Header titulo="Ejercicio 6" />
      {change ? (
        <button
          type="button"
          className="border-2 border-blue-500 p-3 rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium transition duration-150"
          onClick={() => handleChange()}
        >
          Cambiar estado
        </button>
      ) : (
        <h1 className="text-xl">Texto</h1>
      )}
    </div>
  );
};

export default Ejercicio6;
