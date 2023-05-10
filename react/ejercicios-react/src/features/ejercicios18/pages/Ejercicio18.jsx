import { Header } from "@/components";
import { CardImages } from "@/features/ejercicios18/components";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "imagen 1",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1663936756779-2361c6db6994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    alt: "imagen 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    alt: "imagen 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    alt: "imagen 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "imagen 5",
  },
];

const Ejercicio18 = () => {
  return (
    <div>
      <Header titulo="Ejercicio 18" />
      <CardImages images={images}/>
    </div>
  );
};

export default Ejercicio18;
