// Importamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// Ruteo
app.get("/", peticionPrincipal); //Cuando alguien accede a esa ruta, llamamos a la funcion

//Añadir
app.get("/about", peticionAbout)

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index.html");
}

//Añadir
function peticionAbout(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/about.html");
}

app.listen(9000);

console.log("Servidor lanzado");