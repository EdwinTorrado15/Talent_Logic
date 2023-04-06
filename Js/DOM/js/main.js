import "../dist/output.css";

document.querySelector("#app").innerHTML = `
<div  class="flex justify-center items-center h-screen">
    <div class="bg-gray-300 p-3 rounded-md">
      <form id="formulario">
        <div class="flex flex-col mb-2">
          <label>Nombre</label>
          <input type="text" name="nombre" placeholder="Nombre" class="px-2 py-1 rounded-md outline-none"/>
        </div>
        <div class="flex flex-col mb-2">
          <label for="tipo">Tipo</label>
          <select name="tipo" id="tipo" class="px-2 py-1 rounded-md outline-none">
            <option value="accion">Accion</option>
            <option value="shooter">Shooter</option>
            <option value="terror">Terror</option>
            <option value="drama">Drama</option>
          </select>
        </div>
        <div class="flex flex-col mb-2">
          <label>Año salida</label>
          <input type="text" name="anio" placeholder="Año" class="px-2 py-1 rounded-md outline-none"/>
        </div>
        <div class="flex flex-col mb-2">
          <label>Precio</label>
          <input type="number" name="precio" placeholder="$ precio" class="px-2 py-1 rounded-md outline-none"/>
        </div>
        <div class="flex flex-col mb-2">
          <label>Imagen</label>
          <input type="text" name="imagen" placeholder="Imagen" class="px-2 py-1 rounded-md outline-none"/>
        </div>
        <button type="submit" class="bg-azul px-3 py-2 rounded-md mt-3">Guardar</button>
      </form>
    </div>
  </div>
`;

const formulario = document.querySelector("#formulario");
let contador = 0;

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  //Obtener valores del formulario
  const nombre = formulario.elements.nombre.value;
  const tipo = formulario.elements.tipo.value;
  const anio = formulario.elements.anio.value;
  const precio = formulario.elements.precio.value;
  const imagen = formulario.elements.imagen.value;

  //Obtener el arreglo de videojuegos del localStorage
  const videojuegos = JSON.parse(localStorage.getItem("videojuegos")) || [];

  //Obtener el valor del contador del último videojuego almacenado en el LocalStorage
  const ultimoVideojuego = videojuegos[videojuegos.length - 1];
  const ultimoId = ultimoVideojuego ? ultimoVideojuego.id : 0;

  //Creamos el obj con el valor del formulario
  const videojuego = { id: ultimoId + 1, nombre, tipo, anio, precio, imagen };

  //Validamos que no haya campos vacios
  if (
    nombre === "" ||
    tipo === "" ||
    anio === "" ||
    precio === "" ||
    imagen === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }

  //Agregamos el nuevo videojuego al arreglo
  videojuegos.push(videojuego);

  //Guardamos el arreglo de videoJuegos en el LocalStorage
  localStorage.setItem("videojuegos", JSON.stringify(videojuegos));

  //Redireccionamos a la pagina de videojuegos
  window.location.href = "../pages/videojuegos.html";

  //Limpiamos el formulario
  formulario.reset();
});
