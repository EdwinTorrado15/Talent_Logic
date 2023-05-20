import { useContext, useState } from "react";
import { carritoTotal } from "../utils/totalCarrito";
import { CarritoContext } from "@/features/ejercicio12/context/CarritoContext";

const Cupones = () => {
  const { carrito, totalCarrito, setTotalCarrito } = useContext(CarritoContext);
  const [cupon, setCupon] = useState("");

  const handleCuponChange = (event) => {
    const selectedCupon = event.target.value;

    if (selectedCupon === cupon) {
      handleNoCupon();
    } else {
      setCupon(selectedCupon);

      let descuento = 0;

      if (selectedCupon === "cupon1") {
        descuento = totalCarrito * 0.1; // Descuento del 10%
      } else if (selectedCupon === "cupon2") {
        descuento = totalCarrito * 0.2; // Descuento del 20%
      } else if (selectedCupon === "cupon3") {
        descuento = totalCarrito * 0.3; // Descuento del 30%
      }

      const totalConDescuento = (totalCarrito - descuento).toFixed(2);

      setTotalCarrito(totalConDescuento);
    }
  };

  // Recalcular el total del carrito cuando se deseleccione el cupón
  const handleNoCupon = () => {
    setCupon("");
    const total = carritoTotal(carrito).toFixed(2);
    setTotalCarrito(total);
  };

  return (
    <div className="mb-3">
      <h1 className="text-lg font-bold">Cupones</h1>
      <div className="flex gap-3 p-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cupon1"
            name="cupon"
            value="cupon1"
            checked={cupon === "cupon1"}
            onChange={handleCuponChange}
            disabled={cupon !== "" && cupon !== "cupon1"}
          />
          <label htmlFor="cupon1" className="ml-2">
            Cupón del 10%
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cupon2"
            name="cupon"
            value="cupon2"
            checked={cupon === "cupon2"}
            onChange={handleCuponChange}
            disabled={cupon !== "" && cupon !== "cupon2"}
          />
          <label htmlFor="cupon2" className="ml-2">
            Cupón del 20%
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cupon3"
            name="cupon"
            value="cupon3"
            checked={cupon === "cupon3"}
            onChange={handleCuponChange}
            disabled={cupon !== "" && cupon !== "cupon3"}
          />
          <label htmlFor="cupon3" className="ml-2">
            Cupón del 30%
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="no-cupon"
            name="cupon"
            value="no-cupon"
            checked={cupon === ""}
            onChange={handleNoCupon}
          />
          <label htmlFor="no-cupon" className="ml-2">
            No tener cupón
          </label>
        </div>
      </div>
    </div>
  );
};

export default Cupones;
