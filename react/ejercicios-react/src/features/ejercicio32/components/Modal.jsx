import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Modal = ({ closeModal, showModal, carrito, total, setCarrito }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleConfirmarPago = (data) => {
    // Guardar los datos de pago en el localStorage
    const pago = {
      numeroTarjeta: data.numeroTarjeta,
      fechaVencimiento: data.fechaVencimiento,
      codigoSeguridad: data.codigoSeguridad,
      carrito,
      total,
    };
    localStorage.setItem("pago", JSON.stringify(pago));
    setCarrito([]);
    navigate("/ejercicio32");

    // Cerrar el modal
    closeModal();
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4">
              Pago con tarjeta de crédito
            </h2>
            <form
              onSubmit={handleSubmit(handleConfirmarPago)}
              className="space-y-3"
            >
              <div>
                <label htmlFor="numeroTarjeta">Número de tarjeta:</label>
                <input
                  className="border p-1 rounded mr-2"
                  type="text"
                  id="numeroTarjeta"
                  {...register("numeroTarjeta", { required: true })}
                />
                {errors.numeroTarjeta && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <div>
                <label htmlFor="fechaVencimiento">Fecha de vencimiento:</label>
                <input
                  className="border p-1 rounded mr-2"
                  type="text"
                  id="fechaVencimiento"
                  {...register("fechaVencimiento", { required: true })}
                />
                {errors.fechaVencimiento && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <div>
                <label htmlFor="codigoSeguridad">Código de seguridad:</label>
                <input
                  className="border p-1 rounded mr-2"
                  type="password"
                  id="codigoSeguridad"
                  {...register("codigoSeguridad", { required: true })}
                />
                {errors.codigoSeguridad && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <button
                className="bg-[#1d1f21] text-white font-medium px-4 py-2 rounded hover:bg-orange-400 transition duration-300 mr-2"
                type="submit"
              >
                Confirmar pago
              </button>
              <button
                className="bg-red-500 text-white font-medium px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
