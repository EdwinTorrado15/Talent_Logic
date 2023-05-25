import { useState, useEffect } from "react";

const Navbar = () => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const getDataUser = () => {
    const userData = localStorage.getItem("userAccounts");
    const confirmedEmail = localStorage.getItem("loggedInEmail");

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      const matchedUser = parsedUserData.find(
        (user) => user.email === confirmedEmail
      );
      if (matchedUser) {
        setName(`${matchedUser.nombre} ${matchedUser.apellido}`);
      }
    }
  };

  const getProfileImage = () => {
    const userData = localStorage.getItem("userAccounts");
    const confirmedEmail = localStorage.getItem("loggedInEmail");

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      const matchedUser = parsedUserData.find(
        (user) => user.email === confirmedEmail
      );
      console.log(matchedUser);
      const image = new Image();
      image.src = matchedUser.profileImage;
      image.onload = () => {
        setProfileImage(profileImage);
      };
      image.onerror = () => {
        setProfileImage(null);
      };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInEmail");
    window.location.href = "/ejercicio28/login";
  };

  useEffect(() => {
    getDataUser();
    getProfileImage();
  }, []);

  return (
    <div className="w-full bg-blue-500 p-3">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt={`Foto de perfil de ${name}`}
            className="w-16 h-16 object-cover object-center rounded-full"
          />
          <span className="text-white">{name}</span>
        </div>
        <div className="bg-white text-blue font-medium px-3 py-2 rounded-md">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
