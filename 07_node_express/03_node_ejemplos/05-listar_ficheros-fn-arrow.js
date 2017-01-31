let fs = require("fs");
let path = require("path");

let directorio = process.argv[2];
let extension = process.argv[3];

if (process.argv.length < 4) {
    console.log("USO: node 05-listar_ficheros-fn-arrow.js [DIRECTORIO] [EXTENSION]")
} else {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            console.error("Que ha pasado?: " + error)
        } else {
            console.log("Listar con funciones normales");
            ficheros.forEach(fichero => {
                if (path.extname(fichero) == extension) {
                    console.log("Mostrando normal: " + fichero);
                }
            });
        }

    });
}