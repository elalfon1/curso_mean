$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(toggleBox);
}

function toggleBox() {
    var longDiv = $("#descripcion div").length;
    var mitad = parseInt(longDiv / 2);
    $("#descripcion div:lt(" + mitad + ")").toggle("slow");
    $("#descripcion div:gt(" + (mitad - 1) + ")").toggle("fast");
}