var express = require("express");
var modelBookings = require("../../modelo/bookings-modelo");
var modelRooms = require("../../modelo/rooms-modelo");
var router = express.Router();

var mostrarResultados = function(res, error, reservas) {
    if (error) {
        console.error(error);
        res.send(error.message);
    } else {
        if (reservas.length > 0) {
            res.json(reservas);
        } else {
            res.statusCode = 404;
            res.send("No encontrado!");
        }
    }
}

router.get("/fecha/:anio/:mes/:dia/fechafin/:anioFin/:mesFin/:diaFin/:tipo?", function(req, res, next) {
    let anio = parseInt(req.params.anio);
    let mes = parseInt(req.params.mes) - 1;
    let dia = parseInt(req.params.dia);
    let anioFin = parseInt(req.params.anioFin);
    let mesFin = parseInt(req.params.mesFin) - 1;
    let diaFin = parseInt(req.params.diaFin);

    let fecha = new Date(anio, mes, dia);
    let fechaFin = new Date(anioFin, mesFin, diaFin);

    let tipo = req.params.tipo;
    let isDouble = null;
    if (tipo == "simples")
        isDouble = false;
    else if (tipo == "dobles")
        isDouble = true;

    modelBookings.leerBookingsEntreFechas(isDouble, fecha, fechaFin, (error, reservas) => {
        mostrarResultados(res, error, reservas);
    });
});

router.get("/libres/fecha/:anio/:mes/:dia/fechafin/:anioFin/:mesFin/:diaFin/:tipo?", function(req, res, next) {
    let anio = parseInt(req.params.anio);
    let mes = parseInt(req.params.mes) - 1;
    let dia = parseInt(req.params.dia);
    let anioFin = parseInt(req.params.anioFin);
    let mesFin = parseInt(req.params.mesFin) - 1;
    let diaFin = parseInt(req.params.diaFin);

    let fecha = new Date(anio, mes, dia);
    let fechaFin = new Date(anioFin, mesFin, diaFin);

    let tipo = req.params.tipo;
    let isDouble = null;
    if (tipo == "simples")
        isDouble = false;
    else if (tipo == "dobles")
        isDouble = true;

    let habLibres = [];

    modelBookings.leerBookingsEntreFechas(isDouble, fecha, fechaFin, (error, reservas) => {

        if (isDouble == null) {

            modelRooms.leerAllRoom((error, habitaciones) => {
                if (error) {
                    res.statusCode = 404;
                    res.send("No encontrado!");
                } else {
                    habLibres = habitaciones.filter(hab => reservas.indexOf(hab._id) == -1);
                }
                mostrarResultados(res, error, habLibres);
            });
        } else {

            modelRooms.leerRoomsPorTipo(isDouble, (error, habitaciones) => {
                if (error) {
                    res.statusCode = 404;
                    res.send("No encontrado!");
                } else {
                    habLibres = habitaciones.filter(hab => reservas.indexOf(hab._id) == -1);
                }
                mostrarResultados(res, error, habLibres);
            });
        }
    });

});

router.get("/fecha/:anio?/:mes?/:dia?", function(req, res, next) {
    let anio = parseInt(req.params.anio);
    let mes = parseInt(req.params.mes) - 1;
    let dia = parseInt(req.params.dia);

    if (anio && (mes || mes == 0) && dia) {

        let fecha = new Date(anio, mes, dia);

        modelBookings.leerBookingsPorFecha(fecha, fecha, (error, reservas) => {
            mostrarResultados(res, error, reservas);
        });

    } else if (anio && (mes || mes == 0)) {

        let fechaInicio = new Date(anio, mes, 1);
        let fechaFin = new Date(anio, mes + 1, 0);

        modelBookings.leerBookingsPorFecha(fechaInicio, fechaFin, (error, reservas) => {
            mostrarResultados(res, error, reservas);
        });
    } else if (anio) {

        let fechaInicio = new Date(anio, 1, 1);
        let fechaFin = new Date(anio, 12, 31);

        modelBookings.leerBookingsPorFecha(fechaInicio, fechaFin, (error, reservas) => {
            mostrarResultados(res, error, reservas);
        });

    } else {
        modelBookings.leerAllBookings((error, reservas) => {
            mostrarResultados(res, error, reservas);
        });
    }

});

router.get("/:id?", function(req, res, next) {
    let id = req.params.id;

    if (id == null) {
        modelBookings.leerAllBookings((error, reservas) => {
            mostrarResultados(res, error, reservas);
        });

    } else {
        modelBookings.leerBookingPorId(id, (error, reserva) => {
            if (error) {
                res.statusCode = 404;
                res.send("No encontrado!");
            } else {
                if (typeof reserva != "undefined") {
                    res.json(reserva);
                } else {
                    res.statusCode = 404;
                    res.send("No encontrado!");
                }
            }
        });
    }


});

router.delete("/:id", function(req, res, next) {
    let id = req.params.id;
    if (id != null) {
        modelBookings.borrarBooking(id, (error, reserva) => {
            if (error)
                console.error(error);
            else
                res.send("Borrada la reserva con id: " + id);
            //res.send(reserva);
        });
    } else {
        res.statusCode = 404;
        res.send("No encontrado!");
    }
});

router.post("/", function(req, res) {
    let booking = req.body;


    var fnCallback = function(error, booking) {
        if (error) {
            res.statusCode = 404;
            res.send(error);
        } else {
            res.json(booking);
        }
    };

    modelBookings.grabarBookingObject(booking, fnCallback);
});

module.exports = router;