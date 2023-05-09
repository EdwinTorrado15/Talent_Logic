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
import { Ejercicio13 } from "@/features/ejercicio13/pages";
import { Ejercicio14 } from "@/features/ejercicio14/pages";
import { Ejercicio15, InfoPais } from "@/features/ejercicio15/pages";
import { Ejercicio16 } from "@/features/ejercicio16/pages";
import { Ejercicio17, Pelicula } from "@/features/ejercicio17/pages";
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
        <Route path="/ejercicio13" element={<Ejercicio13 />} />
        <Route path="/ejercicio14" element={<Ejercicio14 />} />
        <Route path="/ejercicio15" element={<Ejercicio15 />} />
        <Route path="/pais/:nombre" element={<InfoPais />} />
        <Route path="/ejercicio16" element={<Ejercicio16 />} />
        <Route path="/ejercicio17" element={<Ejercicio17 />} />
        <Route path="/pelicula/:nombre" element={<Pelicula />} />
      </Routes>
    </div>
  );
}

export default App;
