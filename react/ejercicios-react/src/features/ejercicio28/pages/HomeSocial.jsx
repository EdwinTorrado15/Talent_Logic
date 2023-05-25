import { useState } from "react";
import {
  Navbar,
  CreatePost,
  Posts,
  FriendList,
} from "@/features/ejercicio28/components";
import { publicaciones } from "../utils/publicaciones";

const HomeSocial = () => {
  const [posts, setPosts] = useState(publicaciones);
  const [amigosAgregados, setAmigosAgregados] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  console.log("amigos ->", amigosAgregados);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col items-center p-3 w-2/3">
          <CreatePost onNewPost={handleNewPost} />
          <Posts
            publicaciones={posts}
            amigosAgregados={amigosAgregados}
            setAmigosAgregados={setAmigosAgregados}
          />
        </div>
        <div className="w-4/12">
          <FriendList
            amigosAgregados={amigosAgregados}
            setAmigosAgregados={setAmigosAgregados}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSocial;
