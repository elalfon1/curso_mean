var http = require("http");
var bl = require("bl");
var fs = require("fs");

//let streamEscritura = fs.createWriteStream("write_google.txt");

//streamEscritura.setEncoding("utf8");

/*
http.get("http://www.google.es", (res) => {
    res.pipe(
        bl(
            (error, datos) => {
                if (error)
                    return console.error("Error al procesar la petición", error);
                else {
                    let datosStr = datos.toString();
                    console.log("Número de caracteres " + datosStr.length);
                    console.log("Datos:\n" + datosStr);
                    streamEscritura.write(datosStr);
                }
            }
        )
    );
});*/

let streamEscritura = fs.createWriteStream("write_google2.txt");

http.get("http://www.google.es", (res) => {
    res.pipe(
        streamEscritura
    );
});