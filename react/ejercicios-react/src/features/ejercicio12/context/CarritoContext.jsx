import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [totalCarrito, setTotalCarrito] = useState(0);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, totalCarrito, setTotalCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
