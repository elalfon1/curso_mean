var express = require("express");
var modelo = require("../../modelo/modelo"); //En Node no hace falta el .js
var router = express.Router();

router.get("/", function(req, res, next) {
    modelo.acceder("leerReservas", (reservasLeidas) => {
        res.send(reservasLeidas);
    });
});

// Post metodo

router.post("/", function(req, res) {
    customer = req.body;

    var fnCallback = function(error, customer) {
        if (error) {
            console.error("No se ha leido de la bbdd");
        } else {
            res.json(customer);
        }
    };

    modelCustomers.grabarCustomerObject(customer, fnCallback);
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