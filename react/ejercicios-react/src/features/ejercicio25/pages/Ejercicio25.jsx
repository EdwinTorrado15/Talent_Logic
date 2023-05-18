import { Header } from "@/components";
import { Editor } from "@/features/ejercicio25/components";

const Ejercicio25 = () => {
  return (
    <div>
      <Header titulo="Ejercicio 25" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Editor de texto</h1>
        <Editor />
      </div>
    </div>
  );
};

export default Ejercicio25;
