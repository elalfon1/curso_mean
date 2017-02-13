var miExpress = require("express");

//Instanciar
var app = miExpress();


app.get("/reservas/:cp([0-9]{5})", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method + "\n" +
        request.params.cp + " Es un codigo postal ");
});

app.get("/reservas/:cp", (request, response) => {
    console.log("Visto " + request.originalUrl + " Verbo: " + request.method);
    response.send("Visto " + request.originalUrl + " Verbo: " + request.method + "\n" +
        request.params.cp + " No es un codigo postal");
});






app.listen(9000);

console.log("Servidor express lanzado");