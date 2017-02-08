"use strict";

// let fs = require("fs");


// // Creamos los stream de lectura y escritura
// let streamLectura = fs.createReadStream("fichero2.wt");
// let streamEscritura = fs.createWriteStream("fich_write2.txt");

// streamLectura.setEncoding("utf8");


// // La salida del stream de lectura va a la entrada del stream de escritura
// streamLectura.pipe(streamEscritura);


let fs2 = require("fs");
let zlib = require("zlib");


//Para descomprimir
fs2.createReadStream("fichero.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs2.createWriteStream("fich_descomprimido.txt"))

//Para comprimir
fs2.createReadStream("fichero.txt")
    .pipe(zlib.createGzip())
    .pipe(fs2.createWriteStream("comprimido.gz"));