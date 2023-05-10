import { Header } from "@/components";
import { Link } from "react-router-dom";
import { linksPages } from "@/features/home/utils/dataPages";

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
