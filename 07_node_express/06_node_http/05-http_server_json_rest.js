var http = require("http");
var url = require("url");
var fs = require("fs");




var clientes = JSON.parse(
    fs.readFileSync("./clientes.json").toString()
);

/*function filterClientes(id) {
    return clientes.filter((cadaCliente) =>
        cadaCliente.id == id
    )
}*/

var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url, true);
        console.log("URL: ", miUrl.path);


        //Si no lo ponemos por defecto pone html
        response.writeHead(200, { "content-type": "application/json" });

        var pathName = miUrl.pathname;

        //Devuelves un cliente concreto
        if (/^\/clientes\/\d+$/.test(pathName)) {
            var numero = parseInt(pathName.split("/")[2]);
            //response.end(JSON.stringify(clientes[numero]));
            response.end(JSON.stringify(
                clientes.find((cadaCliente) => {
                    return cadaCliente.id === numero
                })
            ));
        } else if (/^\/clientes\/$/.test(pathName)) {
            response.end(JSON.stringify(clientes));
        } else {
            response.writeHead(404);
            //response.end(`{"mensaje": "URL mala"}`);
            response.end("");
        }

    }
);

server.listen(8888);
console.log("Servidor iniciado");