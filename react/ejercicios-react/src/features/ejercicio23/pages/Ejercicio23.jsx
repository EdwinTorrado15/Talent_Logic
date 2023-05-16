import { useState } from "react";
import { Header } from "@/components";

const Ejercicio23 = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: "Este campo es requerido.",
        }));
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      // Realizar acción en caso de que no haya errores
      console.log("nice!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div>
      <Header titulo="Ejercicio 23" />
      <form
        className="border-2 flex flex-col m-auto w-96 p-3 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="nombre">Nombre</label>
          <input
            placeholder="Escribe tu nombre..."
            type="text"
            id="nombre"
            name="nombre"
            className={`border-2 p-2 rounded-md ${
              errors.nombre && "border-red-500"
            }`}
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && (
            <span className="text-red-500">{errors.nombre}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="apellido">Apellido</label>
          <input
            placeholder="Escribe tu apellido..."
            type="text"
            id="apellido"
            name="apellido"
            className={`border-2 p-2 rounded-md ${
              errors.apellido && "border-red-500"
            }`}
            value={formData.apellido}
            onChange={handleChange}
          />
          {errors.apellido && (
            <span className="text-red-500">{errors.apellido}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Escribe tu correo..."
            type="email"
            id="email"
            name="email"
            className={`border-2 p-2 rounded-md ${
              errors.email && "border-red-500"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Escribe tu contraseña..."
            type="password"
            id="password"
            name="password"
            className={`border-2 p-2 rounded-md ${
              errors.password && "border-red-500"
            }`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <button className="bg-blue-500 px-3 py-2">Enviar</button>
      </form>
    </div>
  );
};

export default Ejercicio23;
