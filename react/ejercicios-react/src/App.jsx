import { Routes, Route } from "react-router-dom";
import { Home } from "@/features/home";
import { Ejercicio1 } from "@/features/ejercicio1/pages";
import { Ejercicio2 } from "@/features/ejercicio2/pages";
import { Ejercicio3 } from "@/features/ejercicio3/pages";
import { Ejercicio4 } from "@/features/ejercicio4/pages";
import { Ejercicio5 } from "@/features/ejercicio5/pages";
import { Ejercicio6 } from "@/features/ejercicio6/pages";
import { Ejercicio7 } from "@/features/ejercicio7/pages";
import { Ejercicio8 } from "@/features/ejercicio8/pages";
import { Ejercicio9 } from "@/features/ejercicio9/pages";
import { Ejercicio10 } from "@/features/ejercicio10/pages";
import { Ejercicio11, PerfilUsuario } from "@/features/ejercicio11/pages";
import { Ejercicio12, ShowCarrito } from "@/features/ejercicio12/pages";
import { CarritoProvider } from "@/features/ejercicio12/context/CarritoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer hideProgressBar theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="/ejercicio6" element={<Ejercicio6 />} />
        <Route path="/ejercicio7" element={<Ejercicio7 />} />
        <Route path="/ejercicio8" element={<Ejercicio8 />} />
        <Route path="/ejercicio9" element={<Ejercicio9 />} />
        <Route path="/ejercicio10" element={<Ejercicio10 />} />
        <Route path="/ejercicio11" element={<Ejercicio11 />} />
        <Route
          path="/ejercicio11/perfil/:nombreId"
          element={<PerfilUsuario />}
        />
        <Route
          path="/ejercicio12"
          element={
            <CarritoProvider>
              <Ejercicio12 />
            </CarritoProvider>
          }
        />
        <Route
          path="/ejercicio12/show-carrito"
          element={
            <CarritoProvider>
              <ShowCarrito />
            </CarritoProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
