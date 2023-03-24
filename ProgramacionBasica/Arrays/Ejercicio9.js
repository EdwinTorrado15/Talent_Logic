/* Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
Todos los alumnos mayores de edad.
Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
 */

const prompt = require("prompt-sync")();

let alumnos = [];
let nombre = "";
let edad = 0;

while (nombre !== "*") {
  nombre = prompt("Ingrese el nombre del alumno: ");
  if (nombre !== "*") {
    edad = parseInt(prompt("Ingrese la edad del alumno: "));
    alumnos.push({ nombre, edad });
  }
}

let mayoresDeEdad = alumnos.filter((alumno) => alumno.edad >= 18);

let edadMayor = Math.max(...alumnos.map((alumno) => alumno.edad));

let findAlumons = alumnos.filter((alumno) => alumno.edad === edadMayor);

console.log("Mayores de edad ->", mayoresDeEdad);
console.log("Edad mayor ->", edadMayor);
console.log("Alumnos con la edad mayor ->", findAlumons);
