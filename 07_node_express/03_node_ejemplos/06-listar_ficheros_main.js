miModuloDeFiltrado = require("./06-listar_ficheros_modulo.js");

let directorio = process.argv[2];
let extension = process.argv[3];

if (process.argv.length < 4) {
    console.log("USO: node 06-listar_ficheros_main.js [DIRECTORIO] [EXTENSION]")
}


//Una manera
/*listarFicheros.funPrincipal(directorio, extension, (error, ficheros) => {
    if (error) {
        console.error("Que ha pasado aqui?: " + error);
    } else {
        console.log("Listar con funciones normales");
        ficheros.forEach(fichero => {
            if (path.extname(fichero) == extension) {
                callback(null, fichero);
            }
        });
        console.log("Mostrando normal: " + fichero);
    }
});*/

function queHacerCuandoMeDevuelvenFicheros(resultado) {
    if (resultado.error) {
        console.error("Error al listar: " + resultado.error);
    } else {
        resultado.ficheros.forEach(fichero => {
            console.log("Fichero: " + fichero);
        });
    }
}

miModuloDeFiltrado(directorio, extension, queHacerCuandoMeDevuelvenFicheros);