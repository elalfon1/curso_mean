"use strict";
let miModuloDeFiltrado = require("./08-listar_ficheros_modulo_eventos.js");

let directorio = process.argv[2];
let extension = process.argv[3];

if (process.argv.length < 4) {
    console.log("USO: node 06-listar_ficheros_main.js [DIRECTORIO] [EXTENSION]")
}



function queHacerCuandoMeDevuelvenFicheros(ficheros) {
    ficheros.forEach(fichero => {
        console.log("Fichero: " + fichero);
    });
}

function queHacerCuandoMeDevuelvenError(error) {
    console.log("Error: " + error);
}



miModuloDeFiltrado(directorio, extension);

miModuloDeFiltrado.on("ficheroLeido", queHacerCuandoMeDevuelvenFicheros);
miModuloDeFiltrado.on("errorLeerFichero", queHacerCuandoMeDevuelvenError);