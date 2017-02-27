var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);

let contador = 0;

var messages = [{
    id: 1,
    text: "Primer mensaje del servidor",
    author: "Servidor"
}, {
    id: 2,
    text: "Coslada es como un mundo paralelo, con policías mafiosos...",
    author: "Germán"
}, {
    id: 3,
    text: "Sacado del blog del autor",
    author: "Carlos Azaustre"
}];

app.use(express.static('public'));

io.on("connection", alConectarseAlguien);

function alConectarseAlguien(socket) {
    contador++;
    console.log("Alguien se ha conectado, número " + contador);

    socket.emit("mensajes", messages);

    io.sockets.emit("nuevo-usuario", "Usuario (" + contador + ") inicia sesion");


    socket.on("nuevo-mensaje", function(data) {
        //data.id = messages[messages.length - 1].id + 1;
        messages.push(data);
        //Lo emite a todos los sockets
        io.sockets.emit("mensajes", messages);
    });

    socket.on("disconnect", function() {
        console.log("Alguien se ha desconectado");
        io.sockets.emit("salir-usuario", "Usuario (" + contador + ") sale del chat :(");
        contador--;
    });
}

server.listen(8080, function() {
    console.log("Servidor escuchando en http://localhost:8080/");
});