/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./css/**/*.css", "./js/**/*.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        rojo: "#E30613",
        azul: "#0078D7",
        amarillo: "#FDB813",
        verde: "#4B9742",
        negro: "#000000",
        grid: "#8C8C8C",
      },
    },
  },
  plugins: [],
};
