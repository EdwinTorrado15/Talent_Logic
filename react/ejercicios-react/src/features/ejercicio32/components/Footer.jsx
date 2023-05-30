import { FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-[75px] w-full bg-[#1d1f21] text-white p-6">
      <div className="grid grid-cols-4 p-3">
        <div className="font-semibold space-y-2">
          <p>Catalogo</p>
          <p>Comportamiento</p>
          <p>Marcas</p>
          <p>Las tiendas</p>
          <p>Area personal</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Ayuda</p>
          <p className="text-gray-400 font-medium">como hacer un pedido</p>
          <p className="text-gray-400 font-medium">envio y pago</p>
          <p className="text-gray-400 font-medium">cambio y devolucion</p>
          <p className="text-gray-400 font-medium">preguntas y respuestas</p>
          <p className="text-gray-400 font-medium">tarjeta de regalo</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Nuestra compañia</p>
          <p className="text-gray-400 font-medium">historia</p>
          <p className="text-gray-400 font-medium">blog</p>
          <p className="text-gray-400 font-medium">cooperacion</p>
          <p className="text-gray-400 font-medium">contactos</p>
          <p className="text-gray-400 font-medium">las tiendas</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">+7 495 936-76-40</p>
          <div className="flex gap-4 text-2xl">
            <div className="bg-gray-50/30 p-1 rounded-md">
              <FaTelegramPlane />
            </div>
            <div className="bg-gray-50/30 p-1 rounded-md">
              <AiFillYoutube />
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1">Sigue las noticias y las promociones</p>
            <input className="rounded-md px-2 py-1" type="text" placeholder="Escribe tu correo..." />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full text-gray-400 text-xs mt-2 font-medium ">
        <p>© 2003 - 2023</p>
        <p>Politica de privacidad</p>
        <p>Condiciones de uso</p>
      </div>
    </footer>
  );
};

export default Footer;
