import { useEffect, useState } from "react";
import { CardCountrie } from "@/features/ejercicio15/components";
import axios from "axios";

const Ejercicio14 = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const getCountries = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchCountry(searchTerm);
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchTerm) ||
        country.name.official.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <nav className="w-full p-4 bg-white border-b-2">
        <p className="text-2xl font-semibold">Chismosee los paises</p>
      </nav>
      <div className="px-10 py-12">
        <input
          onChange={handleSearch}
          value={searchCountry}
          type="text"
          placeholder="Busca tu pais..."
          className="w-full p-3 border-2 mb-3 rounded-lg"
        />
        <CardCountrie countries={filteredCountries} />
      </div>
    </div>
  );
};

export default Ejercicio14;
