const https = require("https");
/*  URL to HTML */

const fs = require("fs");

const url =
  "https://docs.google.com/document/d/1qcj7u_1b4qsnjEwmvVBdZ3Rk3mnrlMi6sc-zvul5Euo/edit";

const outputFile = "output.html";

https
  .get(url, (res) => {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      fs.writeFile(outputFile, body, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(
          `Contenido descargado y guardado en el archivo ${outputFile}`
        );
      });
    });
  })
  .on("error", (err) => {
    console.error(err);
  });
