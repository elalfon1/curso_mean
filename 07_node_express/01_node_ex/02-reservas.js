var miExpress = require("express");

//Instanciar
var app = miExpress();

//  Modulo  //
var reservas = {
    getAll: function() {
        return "{todas las reservas}";
    },
    GET: function(idReserva) {
        return "{reserva " + idReserva + "}";
    },
    POST: function(reserva) {
        console.log("Añadir reservas " + reserva.id + " reserva " + reserva.nombre);
    },
    DELETE: function(idReserva) {
        console.log("Eliminar reserva " + idReserva);
    }

}

var aResponder = (request, response) => {
    console.log("Acceso a la petición, " + request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);

    var metodo = reservas[request.method];
    metodo();
};


app.all("/reservas", aResponder);



app.listen(9000);

console.log("Servidor express lanzado");