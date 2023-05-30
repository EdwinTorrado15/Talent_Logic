import { useState, useEffect } from "react";

export const useLongboard = (productos) => {
  const [nuevos, setNuevos] = useState([]);
  const [temporada, setTemporada] = useState([]);

  // Separar los productos por categoría
  useEffect(() => {
    const nuevosProductos = productos.filter(
      (producto) => producto.categoria === "nuevos"
    );
    const temporadaProductos = productos.filter(
      (producto) => producto.categoria === "temporada"
    );

    setNuevos(nuevosProductos);
    setTemporada(temporadaProductos);
  }, [productos]);

  return { nuevos, temporada };
};