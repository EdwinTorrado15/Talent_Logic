/* Generaate random data */

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('@faker-js/faker'); // Librería para generar datos aleatorios

// Definir las columnas del archivo CSV
const csvWriter = createCsvWriter({
    path: 'datos_aleatorios.csv',
    header: [
        {id: 'nombre', title: 'Nombre'},
        {id: 'edad', title: 'Edad'},
        {id: 'email', title: 'Email'},
        {id: 'telefono', title: 'Teléfono'},
    ]
});

// Generar los datos aleatorios
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        nombre: faker.name.fullName(),
        edad: faker.datatype.number({min: 18, max: 99}),
        email: faker.internet.email(),
        telefono: faker.phone.phoneNumberFormat()
    });
}

// Escribir los datos en el archivo CSV
csvWriter.writeRecords(data)
    .then(() => console.log('Archivo CSV generado con éxito'))
    .catch(err => console.error(err));

