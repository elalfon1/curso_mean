var http = require("http");
var fs = require("fs");

function enviarImagen(request, response) {
    response.writeHead(200, { "content-type": "image/jpg" });
    fs.createReadStream("banner_web.jpg").pipe(response);
}

var server = http.createServer(enviarImagen);
server.listen(8888);

console.log("Servidor imagen escuchando");