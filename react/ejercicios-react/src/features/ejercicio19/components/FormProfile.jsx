import { useState, useEffect } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const FormProfile = () => {
  const [profile, setProfile] = useState({
    id: "",
    image: null,
    name: "",
    listInterest: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    const currentProfile = profiles.find((p) => p.id === parseInt(id));
    if (currentProfile) {
      setProfile(currentProfile);
    }
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "urlImage") {
      setProfile({
        ...profile,
        image: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    const existingProfileIndex = profiles.findIndex((p) => p.id === profile.id);
    if (existingProfileIndex >= 0) {
      // actualizar el todo existente
      profiles[existingProfileIndex] = profile;
    } else {
      // agregar un nuevo todo
      const newId = Math.floor(Math.random() * 10000) + 1;
      profiles.push({ ...profile, id: newId });
    }
    localStorage.setItem("profiles", JSON.stringify(profiles));

    // Redirigir a la lista de todos
    navigate("/ejercicio19");
  };

  return (
    <div className="h-screen bg-gray-700">
      <div className="flex justify-center items-center h-3/4">
        <form onSubmit={handleSubmit} className="bg-gray-900 p-10 w-96">
          <h2 className="text-white">{id ? "Edit" : "Create"} A Profile</h2>
          <div className="mb-5 flex flex-col items-center justify-center my-2">
            <img
              src={profile.image || "https://via.placeholder.com/150"}
              alt={`Foto de perfil ${profile.name}`}
              className="w-36 h-36 object-container object-cover object-center rounded-full border-2"
            />
            <div className="w-full rounded-b-lg flex justify-center mt-2">
              <div className="rounded-full p-1 bg-white ">
                <label htmlFor="filePerfil" className="cursor-pointer">
                  <AiFillCamera size={22} />
                </label>
              </div>
              <input
                id="filePerfil"
                type="file"
                name="urlImage"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full text-white"
              autoFocus
            />
          </div>
          <div className="mb-5">
            <textarea
              value={profile.listInterest}
              name="listInterest"
              rows="2"
              placeholder="Escribe tus intereses"
              onChange={handleChange}
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full text-white"
            ></textarea>
            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
              {id ? "Edit" : "Create"} Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProfile;
