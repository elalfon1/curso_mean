var express = require("express");
var modelCustomers = require("../../modelo/customers-modelo");
var router = express.Router();

var leerDefault = function(req, res, next) {

    modelCustomers.leerAllCustomer((error, customers) => {
        if (error) {
            res.statusCode = 404;
            res.send("No encontrado!");
        } else
            res.json(customers);
    });
}

router.get("/name/:nombreCliente?", function(req, res, next) {

    let nombreCliente = req.params.nombreCliente;

    if (nombreCliente == null) {
        leerDefault(req, res, next);
    } else {
        modelCustomers.leerCustomersPorNombre(nombreCliente, (error, customers) => {
            if (error) {
                res.statusCode = 404;
                res.send("No encontrado!");
            } else
                res.json(customers);
        });
    }
});

router.get("/email/:emailCliente?", function(req, res, next) {

    let emailCliente = req.params.emailCliente;

    if (emailCliente == null) {
        leerDefault(req, res, next);
    } else {
        modelCustomers.leerCustomersPorEmail(emailCliente, (error, customers) => {
            if (error) {
                res.statusCode = 404;
                res.send("No encontrado!");
            } else
                res.json(customers);
        });
    }

});


router.get("/:id?", function(req, res, next) {
    let id = req.params.id;
    if (id == null) {
        leerDefault(req, res, next);
    } else {

        modelCustomers.leerCustomerPorId(id, (error, customers) => {
            if (error) {
                res.statusCode = 404;
                res.send("No encontrado!");
            } else
                res.json(customers);
        });

    }

});


router.delete("/:id", function(req, res, next) {
    let id = req.params.id;

    if (id != null) {
        modelCustomers.borrarCustomer(id, (error, customer) => {
            if (error) {
                res.statusCode = 404;
                res.send("No encontrado!");
            } else
                res.send("Borrado el cliente con id: " + id);
            //res.send(cliente);
        });
    } else {
        res.sendStatus(404);
    }
});



// Post metodo

router.post("/", function(req, res) {
    let customer = req.body;

    var fnCallback = function(error, customer) {
        if (error) {
            res.statusCode = 404;
            res.send("No encontrado!");
        } else {
            res.json(customer);
        }
    };

    modelCustomers.grabarCustomerObject(customer, fnCallback);
});


module.exports = router;