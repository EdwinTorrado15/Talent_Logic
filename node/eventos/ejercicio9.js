process.on("SIGINT", () => {
  console.log("Recibido SIGINT. Terminando proceso...");
  process.exit(0);
});
