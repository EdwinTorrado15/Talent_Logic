import { Header } from "@/components";

const SumaNums = ({ nums }) => {
  const sumaArrayNums = nums.map((num) => num + 1).reduce((a, b) => a + b, 0);

  return (
    <div className="text-center">
      <Header titulo="Ejercicio 4" />
      <h1 className="p-4 text-3xl font-bold bg-gray-300">
        Sumatoria de los numeros: {nums}
      </h1>
      <p className="text-xl">Total: {sumaArrayNums}</p>
    </div>
  );
};

export default SumaNums;
