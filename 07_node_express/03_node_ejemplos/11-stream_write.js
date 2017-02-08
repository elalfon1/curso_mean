"use strict";

let fs = require("fs");


// Creamos los stream de lectura y escritura
let streamLectura = fs.createReadStream("fichero2.wt");
let streamEscritura = fs.createWriteStream("fich_write.txt");

streamLectura.setEncoding("utf8");

streamLectura.on("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer) {
    streamEscritura.write(chunkBuffer.toString());
}