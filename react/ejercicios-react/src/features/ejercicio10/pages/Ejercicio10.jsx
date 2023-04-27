import { Carrousel } from "@/features/ejercicio10/components";
import { Header } from "@/components";

const Ejercicio10 = () => {
  const images = [
    "https://th.bing.com/th/id/R.005d7ae2dc914bd31c2e0cc1d597c808?rik=%2fX0io75zCKJgvg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.7ff15ac5398102d9a8baff1a68732f8a?rik=2MsXQXPxutLS9Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f_92eLzaN7hAU%2fTGMeEO9XPBI%2fAAAAAAAAAG4%2f_0ukwwb3zr8%2fs1600%2fnaruto.jpg&ehk=8Pm4kbd2%2blluszsWdCqC9lGm6CXOwWY842M2TebPHsk%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.eb0af74fd6ac70991ab4475078145b75?rik=ahyr0VxEDSM%2fCA&riu=http%3a%2f%2f1.bp.blogspot.com%2f_jJu6heRzjEA%2fTHOAPMOv0cI%2fAAAAAAAAAgk%2f3cSKRbFMH_w%2fs1600%2fwallpaper%2bnaruto.jpg&ehk=uRN4b0UIQXovExQ8HE9l8cuhSTf34rEy8NVwLqFhzk4%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.jukdepWv-wfhQNq30gdZtwHaFi?pid=ImgDet&rs=1",
  ];

  return (
    <div>
      <Header titulo="Ejercicio 10" />
      <Carrousel images={images} />
    </div>
  );
};

export default Ejercicio10;
