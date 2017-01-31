let fs = require("fs");

for (let i = 2; i < process.argv.length; i++) {
    //fs.readFile(process.argv[i], miFuncionAsincrona.bind({ nombreFichero: process.argv[i] }));
    let elFichero = process.argv[i];
    fs.readFile(elFichero, miFuncionAsincrona.bind(elFichero));
}


function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la función asíncrona", error);
    } else {
        let numFilas = contenido.toString().split("\n").length;
        console.log("El fichero " + this + " tiene " + numFilas + " lineas");
    }
}