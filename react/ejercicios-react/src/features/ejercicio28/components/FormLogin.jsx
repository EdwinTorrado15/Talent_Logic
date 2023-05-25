import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (data) => {
    const storedUserAccounts = localStorage.getItem("userAccounts");
    if (storedUserAccounts) {
      const userAccounts = JSON.parse(storedUserAccounts);
      const matchedUser = userAccounts.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (matchedUser) {
        const token = btoa(
          JSON.stringify({
            email: matchedUser.email,
            name: matchedUser.name,
            password: matchedUser.password,
          })
        );

        // Almacenar el token en el localStorage
        const storedTokens = localStorage.getItem("tokens");
        const tokens = storedTokens ? JSON.parse(storedTokens) : [];
        tokens.push(token);
        localStorage.setItem("tokens", JSON.stringify(tokens));

        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInEmail", data.email); // Guardar el correo en el localStorage
        navigate("/ejercicio28/home-social");
        toast.success("Inicio de sesión exitoso");
      } else {
        toast.error("Credenciales inválidas");
      }
    } else {
      toast.error("No se encontró un usuario registrado");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold">Inicio de sesión</h1>
      <form
        className="border-2 flex flex-col m-auto w-96 p-3 gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
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
            {...register("email", { required: true })}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500">Este campo es requerido.</span>
          )}
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
            {...register("password", { required: true })}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500">Este campo es requerido.</span>
          )}
        </div>
        <button className="bg-blue-500 px-3 py-2">Iniciar sesión</button>
        <Link to="/ejercicio28/register">
          <span className="text-sm font-medium">
            ¿No tienes cuenta? Regístrate aquí
          </span>
        </Link>
      </form>
    </div>
  );
};

export default FormLogin;
