var miExpress = require("express");

//Instanciar
var app = miExpress();


var aResponder = (request, response) => {
    console.log("Acceso a la petición, " + request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
};


function funcionIntermedia(request, response, next) {
    console.log("Inter ejecutando a las: " + new Date());
    next();
}

function funcionInterfin(request, response, next) {
    console.log("FIN ejecutando a las: " + new Date());
    response.send("fin");
}

app.get("/concatenando", [funcionIntermedia, funcionInterfin, (request, response) => {
    response.send("Enviado");
}]);


app.route("/conroute")
    .get(aResponder)
    .delete(aResponder)
    .put(aResponder)
    .post(aResponder);


app.listen(9000);

console.log("Servidor express lanzado");