let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);


let posicion = -1;
let numLineas = 0;
do {
    numLineas++;
    posicion = contenido.toString().indexOf("\n", posicion + 1);
} while (posicion > -1);

console.log("El fichero " + fichero + " tiene " + numLineas + " lineas");

//otra forma de hacerlo
console.log("El fichero " + fichero + " tiene " + contenido.toString().split("\n").length + " lineas");