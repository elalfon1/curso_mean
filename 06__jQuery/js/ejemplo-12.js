$(document).ready(initializeEvents);

function initializeEvents() {
    $("#descripcion div").click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox() {
    $(this).hide("slow");
}

function showBox() {
    $("#descripcion div").show("fast");
}