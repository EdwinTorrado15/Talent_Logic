let videojuegos = JSON.parse(localStorage.getItem("videojuegos"));
let carrito = [];

let contenedor = document.getElementById("contenedor-cartas");

const actualizarBadge = () => {
  const badge = document.getElementById("badge");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  badge.textContent = carrito.length;
  if (carrito.length === 0) {
    badge.classList.add("hidden");
  } else {
    badge.classList.remove("hidden");
  }
};

videojuegos.forEach((videojuego) => {
  //Crear estructura de la carta
  let carta = document.createElement("div");
  carta.classList.add("w-64", "bg-white", "border", "border-gray-400");

  let imagen = document.createElement("img");
  imagen.src = videojuego.imagen;
  imagen.alt = videojuego.nombre;
  imagen.classList.add("w-full", "h-32");

  let contenedorInfo = document.createElement("div");
  contenedorInfo.classList.add("p-2");

  let titulo = document.createElement("h2");
  titulo.textContent = videojuego.nombre;
  titulo.classList.add("text-2xl", "font-semibold");

  let categoria = document.createElement("p");
  categoria.textContent = videojuego.tipo;
  categoria.classList.add(
    "text-sm",
    "bg-blue-200",
    "w-max",
    "px-2",
    "rounded-md",
    "font-medium",
    "my-2"
  );

  let fecha = document.createElement("p");
  fecha.textContent = videojuego.anio;
  fecha.classList.add("text-sm", "text-gray-400");

  let precio = document.createElement("p");
  const formatedPrecio = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(videojuego.precio);
  precio.textContent = formatedPrecio;

  let botones = document.createElement("div");
  botones.classList.add("flex", "gap-3", "mt-2");

  let botonAgregar = document.createElement("button");
  botonAgregar.textContent = "Agregar al carrito";
  botonAgregar.classList.add(
    "bg-blue-500",
    "text-white",
    "px-2",
    "py-1",
    "rounded-md",
    "text-xs",
    "sm:text-base"
  );

  //evento para agregar productos al carrito
  botonAgregar.addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(
      (producto) => producto.id === videojuego.id
    );
    if (productoExistente) {
      return alert("El producto ya está en el carrito");
    } else {
      carrito.push(videojuego);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarBadge();
    }
  });

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add(
    "bg-yellow-500",
    "px-2",
    "py-1",
    "rounded-md",
    "text-xs",
    "sm:text-base"
  );

  //evento para eliminar videojuegos
  botonEliminar.addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find((producto) => producto.id === id);

    if (productoExistente) {
      return alert("El producto ya está en el carrito");
    } else {
      const id = videojuego.id;
      const index = videojuegos.findIndex((vj) => vj.id === id);
      if (index !== -1) {
        videojuegos.splice(index, 1);
        localStorage.setItem("videojuegos", JSON.stringify(videojuegos));
        carta.remove();
      }
    }
  });

  // Añadir los elementos a la carta
  contenedorInfo.appendChild(titulo);
  contenedorInfo.appendChild(categoria);
  contenedorInfo.appendChild(fecha);
  contenedorInfo.appendChild(precio);

  botones.appendChild(botonAgregar);
  botones.appendChild(botonEliminar);

  contenedorInfo.appendChild(botones);

  carta.appendChild(imagen);
  carta.appendChild(contenedorInfo);

  // Añadir la carta al contenedor
  contenedor.appendChild(carta);
});

document.addEventListener("DOMContentLoaded", () => {
  actualizarBadge();
});
