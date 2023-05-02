import { useState } from "react";
import { Header } from "@/components";
import { CardBook } from "@/features/ejercicio13/components";

const booksData = [
  {
    id:1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    descripcion:
      "Esta novela cuenta la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Es una obra maestra de la literatura latinoamericana y ha sido traducida a numerosos idiomas.",
    imagen: "https://imagessl6.casadellibro.com/a/l/t0/36/9788439733836.jpg",
    comentarios: [
      {
        nombre: "Pedro",
        comentario:
          "Esta novela es impresionante, me encantó cómo se desarrolla la historia y los personajes son muy interesantes. Definitivamente la recomiendo.",
      },
      {
        nombre: "Ana",
        comentario:
          "Es una novela muy compleja, pero también muy hermosa. Me gustó mucho cómo el autor juega con el tiempo y la realidad en la trama.",
      },
    ],
  },
  {
    id:2,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    descripcion:
      "Esta novela cuenta la historia de un joven llamado Daniel Sempere que se convierte en un lector apasionado después de encontrar un libro raro en el Cementerio de los Libros Olvidados en Barcelona. La novela tiene un tono oscuro y misterioso y ha sido muy popular entre los lectores de todo el mundo.",
    imagen:
      "https://th.bing.com/th/id/R.38f0825a42edfdf98ae4991ea970d8c8?rik=hF4boyghSpeQRQ&pid=ImgRaw&r=0",
    comentarios: [
      {
        nombre: "Laura",
        comentario:
          "Me encantó esta novela, el ambiente que crea el autor es muy atmosférico y los personajes son muy interesantes. Definitivamente una de mis favoritas.",
      },
      {
        nombre: "Roberto",
        comentario:
          "Es una novela muy bien escrita y con una trama muy intrigante. Me mantuvo enganchado desde el principio hasta el final.",
      },
    ],
  },
  {
    id:3,
    titulo: "1984",
    autor: "George Orwell",
    descripcion:
      "Esta novela distópica presenta una sociedad totalitaria en la que el gobierno controla todos los aspectos de la vida de las personas, incluyendo sus pensamientos y sentimientos. Es un clásico de la literatura y ha sido muy influyente en la cultura popular.",
    imagen:
      "https://th.bing.com/th/id/R.386a48e34f0719ccd907f8d2157670e6?rik=rBCV1cDtif7oEw&pid=ImgRaw&r=0",
    comentarios: [
      {
        nombre: "María",
        comentario:
          "Esta novela es muy escalofriante y perturbadora, pero también muy importante. Es un recordatorio de lo peligroso que puede ser el poder absoluto.",
      },
      {
        nombre: "Juan",
        comentario:
          "Es una novela muy bien escrita y con una trama muy interesante. Aunque es una obra de ficción, presenta una visión muy realista de lo que podría ser el futuro.",
      },
    ],
  },
];

const Ejercicio13 = () => {

    const [books, setBooks] = useState(booksData);

  return (
    <div className="bg-gray-100">
      <Header titulo="Ejercicio 13" />
      <CardBook books={books} setBooks={setBooks}/>
    </div>
  );
};

export default Ejercicio13;
