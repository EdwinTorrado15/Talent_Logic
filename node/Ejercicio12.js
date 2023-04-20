/* JSOn to CSV */

const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

fs.readFile("datos.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {

    const jsonData = JSON.parse(data);

    const csvData = {
      nombre: jsonData.nombre,
      apellido: jsonData.apellido,
      edad: jsonData.edad,
      email: jsonData.email,
      direccion_calle: jsonData.direccion.calle,
      direccion_numero: jsonData.direccion.numero,
      direccion_ciudad: jsonData.direccion.ciudad,
      direccion_estado: jsonData.direccion.estado,
      telefonos_tipo_1: jsonData.telefonos[0].tipo,
      telefonos_numero_1: jsonData.telefonos[0].numero,
      telefonos_tipo_2: jsonData.telefonos[1].tipo,
      telefonos_numero_2: jsonData.telefonos[1].numero,
    };

    const csvWriter = createCsvWriter({
      path: "datosjson.csv",
      header: [
        { id: "nombre", title: "Nombre" },
        { id: "apellido", title: "Apellido" },
        { id: "edad", title: "Edad" },
        { id: "email", title: "Email" },
        { id: "direccion_calle", title: "Dirección - Calle" },
        { id: "direccion_numero", title: "Dirección - Número" },
        { id: "direccion_ciudad", title: "Dirección - Ciudad" },
        { id: "direccion_estado", title: "Dirección - Estado" },
        { id: "telefonos_tipo_1", title: "Teléfono 1 - Tipo" },
        { id: "telefonos_numero_1", title: "Teléfono 1 - Número" },
        { id: "telefonos_tipo_2", title: "Teléfono 2 - Tipo" },
        { id: "telefonos_numero_2", title: "Teléfono 2 - Número" },
      ],
    });

    // escribir los datos en el archivo CSV
    csvWriter
      .writeRecords([csvData])
      .then(() => console.log("Archivo CSV creado"))
      .catch((err) => console.log(err));
  }
});
