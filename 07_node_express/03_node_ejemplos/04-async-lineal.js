let fs = require("fs");

//for (let i = 2; i < process.argv.length; i++) {
//fs.readFile(process.argv[i], miFuncionAsincrona.bind({ nombreFichero: process.argv[i] }));
/*let elFichero = process.argv[2];
fs.readFile(elFichero, miFuncionAsincrona.bind({ nombre: elFichero, i: 2 }));
//}


function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la función asíncrona", error);
    } else {
        let numFilas = contenido.toString().split("\n").length;
        console.log("El fichero " + this.nombre + " tiene " + numFilas + " lineas");

        if (this.i + 1 < process.argv.length) {
            let elFichero = process.argv[this.i + 1];
            fs.readFile(elFichero, miFuncionAsincrona.bind({ nombre: elFichero, i: this.i + 1 }));
        }
    }
}
*/


//Otro modo

let i = 2;
fs.readFile(process.argv[i], miFuncionAsincrona.bind(process.argv[i]));
//}


function miFuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la función asíncrona", error);
    } else {
        let numFilas = contenido.toString().split("\n").length;
        console.log("El fichero " + this + " tiene " + numFilas + " lineas");
    }
    i++;
    if (i < process.argv.length) {
        let elFichero = process.argv[this.i + 1];
        fs.readFile(process.argv[i], miFuncionAsincrona.bind(process.argv[i]));
    }
}