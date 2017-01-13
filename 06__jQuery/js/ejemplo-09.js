var $buscar;

$(document).ready(initializeEvents);

function initializeEvents() {
    $buscar = $("#buscar");
    $buscar.focus(clearValue);
    $buscar.blur(setValue);
}

function clearValue() {
    $buscar.attr("value", "");
}

function setValue() {
    $buscar.attr("value", "Buscar ...");
}