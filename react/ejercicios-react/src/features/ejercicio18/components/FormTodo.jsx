import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormTodo = () => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    status: false,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // cargar el todo actual desde localStorage
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const currentTodo = todos.find((t) => t.id === parseInt(id));
    if (currentTodo) {
      setTodo(currentTodo);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const existingTodoIndex = todos.findIndex((t) => t.id === todo.id);
    if (existingTodoIndex >= 0) {
      // actualizar el todo existente
      todos[existingTodoIndex] = todo;
    } else {
      // agregar un nuevo todo
      const newId = Math.floor(Math.random() * 10000) + 1;
      todos.push({ ...todo, id: newId });
    }
    localStorage.setItem("todos", JSON.stringify(todos));

    // Redirigir a la lista de todos
    navigate("/ejercicio17");
  };

  return (
    <div className="h-screen bg-gray-700">
      <div className="flex justify-center items-center h-3/4">
        <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
          <h2 className="text-white">{id ? "Edit" : "Create"} A Task</h2>
          <div className="mb-5">
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={handleChange}
              placeholder="Write a title"
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full text-white"
              autoFocus
            />
          </div>
          <div className="mb-5">
            <textarea
              value={todo.description}
              name="description"
              rows="2"
              placeholder="write a description"
              onChange={handleChange}
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full text-white"
            ></textarea>
            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
              {id ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTodo;
