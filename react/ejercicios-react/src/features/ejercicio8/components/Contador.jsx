import { useState, useEffect } from "react";
import { Header } from "@/components";

const Contador = ({ numero }) => {
  const [count, setCount] = useState(numero);

  /* useEffect(() => {
      const timer = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []); */

  return (
    <div>
      <Header titulo="Ejercicio 8" />
      <p className="text-center">Contador: {count}</p>
    </div>
  );
};

export default Contador;
