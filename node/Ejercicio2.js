/* Argument name */

function myFunction(argument) {
  console.log("El argumento pasado es ->", argument);
}

if (process.argv[2]) {
  myFunction(process.argv[2]);
}
