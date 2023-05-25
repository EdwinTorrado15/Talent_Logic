import { useForm } from "react-hook-form";

const Comentarios = ({ comentarios, onNewComment }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { comentario } = data;
    onNewComment(comentario);
    reset();
  };

  return (
    <div className="mt-2">
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-2 rounded-md"
          type="text"
          {...register("comentario")}
        />
        <button
          className="bg-blue-500 font-medium text-sm text-white px-3 py-1 rounded-md ml-3"
          type="submit"
        >
          Agregar comentario
        </button>
      </form>
    </div>
  );
};

export default Comentarios;
