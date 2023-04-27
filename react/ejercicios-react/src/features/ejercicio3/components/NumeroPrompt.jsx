import { Header } from "@/components";

const NumeroPrompt = ({ numero }) => {
  const lista = [];

  for (let i = 0; i < numero; i++) {
    const color = i % 2 === 0 ? "bg-green-200" : "bg-red-200";
    lista.push(
      <li className={`text-lg ${color}`} key={i}>
        Elemento {i + 1}
      </li>
    );
  }

  return (
    <div className="text-center">
      <Header titulo="Ejercicio 3" />
      <h2 className="text-3xl font-bold p-3 bg-gray-300">
        Lista de {numero} elementos:
      </h2>
      <ul>{lista}</ul>
    </div>
  );
};

export default NumeroPrompt;
