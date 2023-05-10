import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardProfile = () => {
  const [dataProfile, setDataProfile] = useState([]);

  const getProfiles = () => {
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    setDataProfile(profiles);
  };

  useEffect(() => {
    getProfiles();
  }, []);

  const deleteProfile = (id) => {
    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    const index = profiles.findIndex((profile) => profile.id === id);
    profiles.splice(index, 1);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    getProfiles();
  };

  return (
    <div className="h-screen bg-gray-700">
      <Link to="/add-profile">
        <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mb-3">
          Crear perfil
        </button>
      </Link>
      <div className="flex justify-center gap-4">
        {dataProfile.map((profile) => (
          <div
            className="bg-gray-900 text-white shadow-2xl mb-4 flex flex-col items-center w-96 py-4"
            key={profile.id}
          >
            <img
              src={profile.image}
              alt={`Foto de perfil de ${profile.name}`}
              className="w-36 object-cover object-center h-36 rounded-full"
            />
            <div className="mb-5">
              <p>{profile.name}</p>
              <ul>
                {profile.listInterest.split(",").map((interest, index) => (
                  <li key={index}>{interest.trim()}</li>
                ))}
              </ul>
            </div>
            <div className="space-x-3">
              <button
                onClick={() => deleteProfile(profile.id)}
                className="bg-red-500 px-3 py-2 rounded-md"
              >
                Eliminar
              </button>
              <Link
                to={`/edit-profile/${profile.id}`}
                className="bg-yellow-500 px-3 py-2 rounded-md"
              >
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProfile;
