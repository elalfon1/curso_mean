"use strict";
let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);

var localStorage;
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./ls");
}

let ficheroAnterior = localStorage.getItem("fichero_anterior");

if (ficheroAnterior) {
    console.log("Fichero anterior:\n" + ficheroAnterior);
}

localStorage.setItem("fichero_anterior", fichero);