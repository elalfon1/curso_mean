let contadorLineas = require("./04-async-modulo.js");

for (let i = 2; i < process.argv.length; i++) {
    //fs.readFile(process.argv[i], miFuncionAsincrona.bind({ nombreFichero: process.argv[i] }));
    let elFichero = process.argv[i];
    contadorLineas.saberLineas(elFichero, queRecogeNumLineas.bind(elFichero));
}


function queRecogeNumLineas(error, numLineas) {
    if (error) {
        console.error("Error al ejecutar la función asíncrona", error);
    } else {
        console.log("El fichero " + this + " tiene " + numLineas + " lineas");
    }
}