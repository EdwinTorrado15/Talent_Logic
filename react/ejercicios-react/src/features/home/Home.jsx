import { Header } from "@/components";
import { Link } from "react-router-dom";

const linksPages = [
  {
    id: 1,
    name: "Ejercicio 1",
    path: "/ejercicio1",
  },
  {
    id: 2,
    name: "Ejercicio 2",
    path: "/ejercicio2",
  },
  {
    id: 3,
    name: "Ejercicio 3",
    path: "/ejercicio3",
  },
  {
    id: 4,
    name: "Ejercicio 4",
    path: "/ejercicio4",
  },
  {
    id: 5,
    name: "Ejercicio 5",
    path: "/ejercicio5",
  },
  {
    id: 6,
    name: "Ejercicio 6",
    path: "/ejercicio6",
  },
  {
    id: 7,
    name: "Ejercicio 7",
    path: "/ejercicio7",
  },
  {
    id: 8,
    name: "Ejercicio 8",
    path: "/ejercicio8",
  },
  {
    id: 9,
    name: "Ejercicio 9",
    path: "/ejercicio9",
  },
  {
    id: 10,
    name: "Ejercicio 10",
    path: "/ejercicio10",
  },
  {
    id: 11,
    name: "Ejercicio 11",
    path: "/ejercicio11",
  },
  {
    id: 12,
    name: "Ejercicio 12",
    path: "/ejercicio12",
  }
];

const Home = () => {
  return (
    <div>
      <Header titulo="Inicio" />
      <div className="flex flex-wrap items-center justify-center">
        {linksPages.map((linkPage) => (
          <Link to={linkPage.path} key={linkPage.id}>
            <button className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              {linkPage.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
