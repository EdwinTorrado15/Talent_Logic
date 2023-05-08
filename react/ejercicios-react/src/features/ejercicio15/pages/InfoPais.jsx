import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiMoon } from "react-icons/fi";

const InfoPais = () => {
  const { nombre } = useParams();

  const [pais, setPais] = useState([]);

  const getPais = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${nombre}`
      );
      setPais(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("pais", pais);

  useEffect(() => {
    getPais();
  }, []);

  return (
    <div>
      {pais.map((p) => (
        <main key={p.name.common}>
          <div
            className="relative h-screen"
            style={{
              backgroundImage: `url(${p.flags.svg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 bg-black/25 bg-opacity-50 p-4 text-white h-screen flex justify-center items-center"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <h1 className="text-3xl font-bold">{p.name.common}</h1>
            </div>
          </div>
          <div>
            <p className="font-bold">
              Region: <span className="font-normal">{p.region}</span>
            </p>
            <p className="font-bold">
              Sub region: <span className="font-normal">{p.subregion}</span>
            </p>
            <p className="font-bold">
              Capital: <span className="font-normal">{p.capital}</span>
            </p>
          </div>
        </main>
      ))}
    </div>
  );
};

export default InfoPais;
