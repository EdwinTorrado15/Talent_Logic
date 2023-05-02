import { useState } from "react";
import { toast } from "react-toastify";

const CardBook = ({ books, setBooks }) => {
  const [comentario, setComentario] = useState("");

  /* Crear comentario */
  const sendComentario = (book) => {
    if (comentario === "")
      return toast.warning("El comentario no puede estar vacio.");
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        return {
          ...b,
          comentarios: [
            ...b.comentarios,
            { nombre: "Usuario", comentario: comentario },
          ],
        };
      }
      return b;
    });
    setBooks(newBooks);
    setComentario("");
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      {books.map((book, index) => (
        <div key={index} className="w-1/2 bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{book.titulo}</h2>
            <h3 className="text-xl mb-2">{book.autor}</h3>
            <p className="text-gray-700 text-base">{book.descripcion}</p>
          </div>
          <img
            src={book.imagen}
            alt={`Imagen del libro ${book.titulo}`}
            className="w-full h-56 object-cover object-center"
          />
          {/* Seccion comentarios */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Comentarios</h3>
            {book.comentarios.map((comentario, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="text-lg font-bold">{comentario.nombre}</h4>
                <p className="text-gray-700 text-base">
                  {comentario.comentario}
                </p>
              </div>
            ))}
            {/* Escribir comentario */}
            <div className="flex flex-col gap-2 mt-4">
              <h4 className="text-lg font-bold">Escribir comentario</h4>
              <input
                value={comentario}
                type="text"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Escribe un comentario..."
                onChange={(e) => setComentario(e.target.value)}
              />
              <button
                onClick={() => sendComentario(book)}
                className="bg-blue-500 text-white rounded-md p-2"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBook;
