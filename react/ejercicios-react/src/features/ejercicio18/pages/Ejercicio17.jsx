import { Header } from "@/components";
import { TodoList } from "@/features/ejercicio18/components";

const Ejercicio17 = () => {
  return (
    <div className="bg-gray-700 h-screen">
      <Header titulo="Ejercicio 17" />
      <div className="container mx-auto h-full">
        <TodoList />
      </div>
    </div>
  );
};

export default Ejercicio17;
