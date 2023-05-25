import { Routes, Route } from "react-router-dom";
import { FormLogin, FormRegister } from "@/features/ejercicio28/components";
import { HomeSocial } from "@/features/ejercicio28/pages";

const Ejercicio28 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/home-social" element={<HomeSocial />} />
      </Routes>
    </div>
  );
};

export default Ejercicio28;
