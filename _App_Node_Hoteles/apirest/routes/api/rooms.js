var express = require("express");
var modelRooms = require("../../modelo/rooms");
var router = express.Router();


router.get("/simples", function(req, res, next) {


    modelRooms.leerRoomsPorTipo(false, (error, habitaciones) => {
        if (error)
            console.error(error);
        else
            res.send(habitaciones);
    });
});

router.get("/dobles", function(req, res, next) {


    modelRooms.leerRoomsPorTipo(true, (error, habitaciones) => {
        if (error)
            console.error(error);
        else
            res.send(habitaciones);
    });
});


router.get("/:id?", function(req, res, next) {
    let id = req.params.id;


    if (id == null) {
        modelRooms.leerAllRoom((error, habitaciones) => {
            if (error)
                console.error(error);
            else
                res.send(habitaciones);
        });

    } else {
        id = parseInt(id);
        if (Number.isInteger(id))
            modelRooms.leerRoomPorId(id, (error, habitacion) => {
                if (error)
                    console.error(error);
                else
                    res.send(habitacion);
            });
        else {
            res.sendStatus(404);
        }
    }
    /*else {
           console.log("No existe");
           res.sendStatus(404);
       }*/

});


router.delete("/:id", function(req, res, next) {
    let id = parseInt(req.params.id);

    if (id != null && Number.isInteger(id)) {
        modelRooms.borrarRoom(id, (error, habitacion) => {
            if (error)
                console.error(error);
            else
                res.send("Borrada la habitacion número " + id);
            //res.send(habitacion);
        });
    } else {
        res.sendStatus(404);
    }
});






/*
router.get("/:nombreCliente", function(req, res, next) {
    let nombreCliente = req.params.nombreCliente;
    modelo.acceder("leerReservasByNombreCliente", (reservasLeidas) => {
        res.send(reservasLeidas);
    }, nombreCliente);
});

router.get("/fecha/:anio?/:mes?/:dia?", function(req, res, next) {
    let anio = req.params.anio;
    let mes = req.params.mes;
    let dia = req.params.dia;

    if (anio && mes && dia)
        res.send("El año es " + anio + " y el mes es " + mes + " y el dia es " + dia);
    else if (anio && mes)
        res.send("El año es " + anio + " y el mes es " + mes);
    else if (anio)
        res.send("El año es " + anio);
    else
        res.send("Sin año, mes, ni dia");


});
*/

module.exports = router;