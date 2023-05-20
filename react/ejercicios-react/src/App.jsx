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
import { Ejercicio14, InfoPais } from "@/features/ejercicio15/pages";
import { Ejercicio15 } from "@/features/ejercicio16/pages";
import { Ejercicio16, Pelicula } from "@/features/ejercicio17/pages";
import { Ejercicio17 } from "@/features/ejercicio18/pages";
import { FormTodo } from "@/features/ejercicio18/components";
import { Ejercicio18 } from "@/features/ejercicios18/pages";
import { Ejercicio19 } from "@/features/ejercicio19/pages";
import { Ejercicio20 } from "@/features/ejercicio20/pages";
import { Ejercicio23 } from "@/features/ejercicio23/pages";
import { Ejercicio25 } from "@/features/ejercicio25/pages";
import { Ejercicio27 } from "@/features/ejercicio27/pages";
import { FormProfile } from "@/features/ejercicio19/components";
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
        <Route path="/pais/:nombre" element={<InfoPais />} />
        <Route path="/ejercicio15" element={<Ejercicio15 />} />
        <Route path="/ejercicio16" element={<Ejercicio16 />} />
        <Route path="/pelicula/:nombre" element={<Pelicula />} />
        <Route path="/ejercicio17" element={<Ejercicio17 />} />
        <Route path="/add" element={<FormTodo />} />
        <Route path="/edit/:id" element={<FormTodo />} />
        <Route path="/ejercicio18" element={<Ejercicio18 />} />
        <Route path="/ejercicio19" element={<Ejercicio19 />} />
        <Route path="/add-profile" element={<FormProfile />} />
        <Route path="/edit-profile/:id" element={<FormProfile />} />
        <Route path="/ejercicio20" element={<Ejercicio20 />} />
        <Route path="/ejercicio23" element={<Ejercicio23 />} />
        <Route path="/ejercicio25" element={<Ejercicio25 />} />
        <Route path="/ejercicio27" element={<Ejercicio27 />} />
      </Routes>
    </div>
  );
}

export default App;
