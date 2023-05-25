import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const sendData = (data) => {
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      const userData = {
        ...formData,
        profileImage: profileImage ? profileImage.name : null,
      };

      // Obtener las cuentas de usuario existentes del localStorage (si hay alguna)
      const existingAccounts =
        JSON.parse(localStorage.getItem("userAccounts")) || [];

      // Agregar la nueva cuenta de usuario al array de cuentas existentes
      existingAccounts.push(userData);

      // Guardar todas las cuentas de usuario en el localStorage
      localStorage.setItem("userAccounts", JSON.stringify(existingAccounts));

      if (profileImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(profileImage);
      }

      toast.success("Usuario registrado correctamente.");
      navigate("/ejercicio28/login");
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
      <h1 className="text-3xl font-bold">Registrate</h1>

      <form
        className="border-2 flex flex-col m-auto w-96 p-3 gap-4"
        onSubmit={handleSubmit(sendData)}
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
            {...register("nombre", { required: true })}
            onChange={handleChange}
          />
          {errors.nombre && (
            <span className="text-red-500">Este campo es requerido.</span>
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
            {...register("apellido", { required: true })}
            onChange={handleChange}
          />
          {errors.apellido && (
            <span className="text-red-500">Este campo es requerido.</span>
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
            {...register("email", { required: true })}
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
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-red-500">Este campo es requerido.</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="profileImage">Foto de perfil</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>
        {profileImage && (
          <img
            src={
              URL.createObjectURL(profileImage)
                ? URL.createObjectURL(profileImage)
                : ""
            }
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full object-cover object-center"
          />
        )}
        <button className="bg-blue-500 px-3 py-2">Registrar</button>
        <Link to="/ejercicio28/register">
          <span className="text-sm font-medium">
            Ya tienes cuenta? Inicia sesion aqui
          </span>
        </Link>
      </form>
    </div>
  );
};

export default FormRegister;
