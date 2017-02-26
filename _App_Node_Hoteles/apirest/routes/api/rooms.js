var express = require("express");
var modelRooms = require("../../modelo/rooms-modelo");
var router = express.Router();

var mostrarResultados = function(res, error, habitaciones) {
    if (error) {
        console.error(error);
        res.send(error.message);
    } else {
        if (habitaciones.length > 0) {
            res.json(habitaciones);
        } else {
            res.statusCode = 404;
            res.send("No encontrado!");
        }
    }
}

router.get("/simples", function(req, res, next) {
    modelRooms.leerRoomsPorTipo(false, (error, habitaciones) => {
        mostrarResultados(res, error, habitaciones);
    });
});

router.get("/dobles", function(req, res, next) {
    modelRooms.leerRoomsPorTipo(true, (error, habitaciones) => {
        mostrarResultados(res, error, habitaciones);
    });
});


router.get("/:id?", function(req, res, next) {
    let id = req.params.id;
    if (id == null) {
        modelRooms.leerAllRoom((error, habitaciones) => {
            mostrarResultados(res, error, habitaciones);
        });

    } else {
        id = parseInt(id);
        if (Number.isInteger(id))
            modelRooms.leerRoomPorId(id, (error, habitacion) => {
                if (error) {
                    console.error(error);
                    res.send(error.message);
                } else {
                    if (typeof habitacion != "undefined") {
                        res.json(habitacion);
                    } else {
                        res.statusCode = 404;
                        res.send("No encontrado!");
                    }
                }
            });
        else {
            res.statusCode = 404;
            res.send("No encontrado!");
        }
    }
});

router.delete("/:id", function(req, res, next) {
    let id = parseInt(req.params.id);

    if (id != null && Number.isInteger(id)) {
        modelRooms.borrarRoom(id, (error, habitacion) => {
            if (error)
                console.error(error);
            else
                res.send("Borrada la habitacion número " + id);
        });
    } else {
        res.statusCode = 404;
        res.send("No encontrado!");
    }
});

router.post("/", function(req, res) {
    let room = req.body;


    var fnCallback = function(error, room) {
        if (error) {
            res.statusCode = 404;
            res.send(error);
        } else {
            res.json(room);
        }
    };

    modelRooms.grabarRoomObject(room, fnCallback);
});

module.exports = router;