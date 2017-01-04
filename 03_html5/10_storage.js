var storage = localStorage;

function guardarStorage() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    storage.setItem("nombre", nombre);
    storage.setItem("apellido", apellido);

}

function cargarStorage() {
    var nombreMostrar = document.getElementById("nombreMostrar");
    var apellidoMostrar = document.getElementById("apellidoMostrar");

    nombreMostrar.innerHTML = storage.getItem("nombre");
    apellidoMostrar.innerHTML = storage.getItem("apellido");

}