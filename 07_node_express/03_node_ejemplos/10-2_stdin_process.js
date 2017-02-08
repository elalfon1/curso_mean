"use strict";

let fs = require("fs");

let entradaEstandar = process.stdin;
let salidaEstandar = process.stdout;
let buffer;

entradaEstandar.setEncoding("utf8");

entradaEstandar.on("data", alLeerEntradaEstandar);

function alLeerEntradaEstandar(data) {
    salidaEstandar.write("('fin' para salir) - Has escrito: ");
    salidaEstandar.write(data);

    let exprReg = /^fin/g;
    if (exprReg.test(data.toString()))
        process.exit(0);
}

process.on("exit", () => {
    console.log("Fin del programa");
})