import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [dataTodo, setDataTodo] = useState([]);
  const [draggedTodo, setDraggedTodo] = useState(null);

  const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setDataTodo(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const toggleTaskDone = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].status = !todos[index].status;
    localStorage.setItem("todos", JSON.stringify(todos));
    getTodos();
  };

  const deleteTask = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    getTodos();
  };

  return (
    <div className="flex flex-col justify-center">
      <Link to="/add">
        <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mb-3">
          Crear Todo
        </button>
      </Link>
      {dataTodo.map((todo) => (
        <div
          className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
          key={todo.id}
          draggable="true"
          onDragStart={(e) => {
            setDraggedTodo(todo);
            e.dataTransfer.effectAllowed = "move";
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const todos = [...dataTodo];
            const draggedIndex = todos.findIndex(
              (t) => t.id === draggedTodo.id
            );
            const targetIndex = todos.findIndex((t) => t.id === todo.id);
            [todos[draggedIndex], todos[targetIndex]] = [
              todos[targetIndex],
              todos[draggedIndex],
            ];
            localStorage.setItem("todos", JSON.stringify(todos));
            setDataTodo(todos);
          }}
        >
          <div className="text-left">
            <h1 className="text-2xl uppercase">{todo.title}</h1>
            <h6 className="text-gray-500">{todo.id}</h6>
            <p>{todo.description}</p>
            <button
              className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2 "
              onClick={() => toggleTaskDone(todo.id)}
            >
              {todo.status ? "Undone" : "Done"}
            </button>
          </div>
          <div>
            <Link
              to={`/edit/${todo.id}`}
              className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
            >
              Edit
            </Link>

            <button
              className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
              onClick={() => deleteTask(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
