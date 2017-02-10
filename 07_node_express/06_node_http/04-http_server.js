var http = require("http");
var url = require("url");

var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url);
        console.log("URL: ", miUrl.path);
        //Si no lo ponemos por defecto pone html
        //response.writeHead(200, { "content-type": "text/html" });
        /*
                if (miUrl.path === "/node") {
                    response.end(`<html>
                                <head></head>
                                <body>
                                    <h1>Hola Bienvenido a Node JS, donde los sueños se hacen realidad</h1>
                                </body>
                            </html>`);
                } else {
                    response.end(`<html>
                                <head></head>
                                <body>
                                    <h1>Hola NO estas en Node</h1>
                                </body>
                            </html>`);
                }*/

        //Si la url es localhost:8888/clientes/45 mostrar 'eres el cliente 45'
        console.log(miUrl.pathname);
        var pathName = miUrl.pathname;
        //[0-9]*$

        if (/^\/clientes\/[0-9]+$/.test(pathName)) {

            var numCliente = pathName.split("/")[2];
            response.end(`<html>
                                <head></head>
                                <body>
                                    <h1>Hola el cliente es ${numCliente}</h1>
                                </body>
                            </html>`);
        } else {
            response.end(`<html>
                                <head></head>
                                <body>
                                    <h1>Pide un numero de cliente</h1>
                                </body>
                            </html>`);

        }
    }
);

server.listen(8888);
console.log("Servidor iniciado");