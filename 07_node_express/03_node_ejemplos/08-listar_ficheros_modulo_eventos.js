"use strict";
let fs = require("fs");
let path = require("path");
let miModuloEventos = require("events");

let EmisorEventos = miModuloEventos.EventEmitter;
let miEmisor = new EmisorEventos();



module.exports = function(directorio, extension) {

    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            miEmisor.emit("errorLeerFichero", error);
        } else {
            ficheros = ficheros.filter(fichero => {
                return path.extname(fichero) === extension;
            })
            miEmisor.emit("ficheroLeido", ficheros);
        }
    });
}

module.exports.on = function(nombreEvento, funcCallback) {
    miEmisor.on(nombreEvento, funcCallback);
}