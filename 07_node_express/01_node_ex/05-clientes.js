var miExpress = require("express"),
    fs = require("fs");

var app = miExpress();


var clientes = JSON.parse(
    fs.readFileSync("./clientes.json").toString()
);


var aResponder = function(request, response) {
    response.type("application/json");

    let idCliente = parseInt(request.params.idCliente);
    let clienteElegido = clientes.find(
        (cadaCliente) => {
            return cadaCliente.id === idCliente;
        }
    );


    if (typeof clienteElegido !== "undefined")
        response.send(JSON.stringify(clienteElegido));
    else
        response.send("{cliente: 'desconocido'}");

}

app.get("/clientes/:idCliente?", aResponder)






app.listen(9000);

console.log("Servidor Express CLIENTES lanzado");