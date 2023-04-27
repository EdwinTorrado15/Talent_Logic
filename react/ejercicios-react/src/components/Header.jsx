import { Link } from "react-router-dom";

const Header = ({ titulo }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="w-full bg-gray-200 p-3 text-3xl font-bold text-center">
        {titulo}
      </h1>
      <Link
        to="/"
        className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Header;
