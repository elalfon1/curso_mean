"use strict";
var moduloEventos = require("events");

var EmisorEventos = moduloEventos.EventEmitter;
var miEmisor = new EmisorEventos();


miEmisor.on("miEvento", funcionCallback);

function funcionCallback(misDatos, unValor) {
    console.log("misDatos: " + misDatos.propiedad1 + ", " + misDatos.propiedad2 + ", unValor=" + unValor);
}

let contador = 0;

function aCadaIntervalo() {
    miEmisor.emit("miEvento", {
        propiedad1: Date.now(),
        propiedad2: contador
    }, "otro valor");
    contador++;
}

setInterval(aCadaIntervalo, 500);