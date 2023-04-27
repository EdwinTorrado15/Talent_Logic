import { CardUser } from "@/features/ejercicio11/components";
import { Header } from "@/components";

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    edad: 25,
    email: "juan@gmail.com",
    telefono: "555-1234",
    direccion: {
      calle: "Av. Libertador Bernardo O'Higgins",
      numero: 1234,
      comuna: "Santiago Centro",
      ciudad: "Santiago",
      pais: "Chile",
    },
    intereses: ["fútbol", "música", "viajes"],
    redesSociales: {
      twitter: "https://twitter.com/juan",
      facebook: "https://facebook.com/juan",
      instagram: "https://instagram.com/juan",
    },
  },
  {
    id: 2,
    nombre: "María",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    edad: 30,
    email: "maria@hotmail.com",
    telefono: "555-5678",
    direccion: {
      calle: "Calle de Alcalá",
      numero: 567,
      comuna: "Salamanca",
      ciudad: "Madrid",
      pais: "España",
    },
    intereses: ["bailar", "cocinar", "deportes"],
    redesSociales: {
      twitter: "https://twitter.com/maria",
      facebook: "https://facebook.com/maria",
      instagram: "https://instagram.com/maria",
    },
  },
  {
    id: 3,
    nombre: "Pedro",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    edad: 40,
    email: "pedro@yahoo.com",
    telefono: "555-9101",
    direccion: {
      calle: "Avenida Paulista",
      numero: 1000,
      comuna: "Bela Vista",
      ciudad: "São Paulo",
      pais: "Brasil",
    },
    intereses: ["cine", "lectura", "tecnología"],
    redesSociales: {
      twitter: "https://twitter.com/pedro",
      facebook: "https://facebook.com/pedro",
      instagram: "https://instagram.com/pedro",
    },
  },
  {
    id: 4,
    nombre: "Ana",
    image:
      "https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    edad: 28,
    email: "ana@gmail.com",
    telefono: "555-1212",
    direccion: {
      calle: "Rue de Rivoli",
      numero: 75001,
      comuna: "1er arrondissement",
      ciudad: "París",
      pais: "Francia",
    },
    intereses: ["arte", "moda", "viajes"],
    redesSociales: {
      twitter: "https://twitter.com/ana",
      facebook: "https://facebook.com/ana",
      instagram: "https://instagram.com/ana",
    },
  },
  {
    id: 5,
    nombre: "José",
    image:
      "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    edad: 35,
    email: "jose@gmail.com",
    telefono: "555-2323",
    direccion: {
      calle: "Broadway",
      numero: 123,
      comuna: "Midtown Manhattan",
      ciudad: "Nueva York",
      pais: "Estados Unidos",
    },
    intereses: ["deportes", "música", "viajes"],
    redesSociales: {
      twitter: "https://twitter.com/jose",
      facebook: "https://facebook.com/jose",
      instagram: "https://instagram.com/jose",
    },
  },
];

const Ejercicio11 = () => {
  return (
    <div>
      <Header titulo="Usuarios"/>
      <CardUser usuarios={usuarios} />
    </div>
  );
};

export default Ejercicio11;
