//Importar libreria
var sExpress = require("express");

//Instanciar express
var app = sExpress();

function creadorRutas(ruta, rutaReal) {
    app.get(ruta, function(peticion, respuesta) {
        respuesta.sendfile(rutaReal);
    });
}

creadorRutas("/", __dirname + "/angular/index.html");
creadorRutas("/about.html", __dirname + "/angular/about.html");
creadorRutas("/expresiones.html", __dirname + "/angular/01_NG1_expresiones.html");
creadorRutas("/directivas.html", __dirname + "/angular/02_NG1_directivas.html");
creadorRutas("/filtros.html", __dirname + "/angular/03_NG1_filtros.html");
creadorRutas("/ordenamiento.html", __dirname + "/angular/04_NG1_ordenamiento.html");
creadorRutas("/controlador.html", __dirname + "/angular/05_NG1_controlador.html");
creadorRutas("/05_miaplicacion.js", __dirname + "/angular/05_miaplicacion.js");

app.listen(8000);

console.log("Servidor Angular lanzado");