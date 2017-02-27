//Establece la conexion creando un nuevo socket
var socket = io.connect("http://localhost:8080/chat", { "forceNew": true });

socket.on("mensajes", alRecibirMensaje);
socket.on("nuevo-usuario", alConectarseMasUsuarios);
socket.on("salir-usuario", alDesconectarseAlgunUsuario);

function alRecibirMensaje(data) {
    console.log(JSON.stringify(data));
    mostrarMensajes(data);
}

function mostrarMensajes(data) {
    //como un for each
    var html = data.map(function(elem, index) {
        return (`
            <div>
                <strong>${elem.author}</strong>
                <em>${elem.text}</em>
            </div>
        `);
    }).join(" ");

    document.getElementById("divMessages").innerHTML = html;
}

function alConectarseMasUsuarios(cadena) {
    document.getElementById("divConexiones").innerHTML += `<div>
                <strong><em>${cadena}</em></strong>
            </div>`;
}

function alDesconectarseAlgunUsuario(cadena) {
    document.getElementById("divConexiones").innerHTML += `<div>
                <strong><em>${cadena}</em></strong>
            </div>`;
}

function enviarMensaje(form) {
    var nuevoMensaje = {
        author: document.getElementById("username").value,
        target: document.getElementById("target").value,
        text: document.getElementById("texto").value,
    }

    socket.emit("nuevo-mensaje", nuevoMensaje);

    return false;
}