var miExpress = require("express");

var app = miExpress();

var reservas = [
    { "id": 1, "nombre": "Pepito", "pedidos": 12 },
    { "id": 3, "nombre": "Juanito", "pedidos": 23 },
    { "id": 5, "nombre": "Felipito", "pedidos": 34 },
    { "id": 7, "nombre": "Jorgito", "pedidos": 45 },
    { "id": 9, "nombre": "Manolito", "pedidos": 56 }
];

//  Modulo  //
var routeReservas = {

    "GET": function(idReserva) {
        if (idReserva != null && typeof idReserva !== "undefined") {
            idReserva = parseInt(idReserva);
            let reservaElegida = reservas.find(
                (cadaReserva) => {
                    return cadaReserva.id === idReserva;
                }
            );
            return JSON.stringify(reservaElegida);
        } else {
            return JSON.stringify(reservas);
        }
    },
    "POST": function(reserva) {
        console.log("Añadir reservas " + reserva.id + " reserva " + reserva.nombre);
    },
    "DELETE": function(idReserva) {

        if (idReserva != null && typeof idReserva !== "undefined") {
            idReserva = parseInt(idReserva);
            let reservasResultante = reservas.filter(
                (cadaReserva) => {
                    return cadaReserva.id !== idReserva;
                }
            );
            return JSON.stringify(reservasResultante);
        }
    }

}

var funcionRouteReservas = function(request, response) {
    let operacionReserva = routeReservas[request.method];
    let resultado = operacionReserva(request.params.idReserva);
    response.send(resultado);
}


app.all("/reservas/:idReserva?", funcionRouteReservas);


app.listen(9000);
console.log("Servidor de Node Hoteles arrancado");