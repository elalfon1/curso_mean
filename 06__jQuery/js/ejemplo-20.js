$(document).ready(inicializarEventos);

var arrayHistorial = [];
var ls = localStorage;
var $inputSelector;

function inicializarEventos() {
    var historial = ls.getItem("historial");
    //
    if (typeof historial != "undefined")
        arrayHistorial = JSON.parse(historial);

    $inputSelector = $("#selector");
    $("#boton").on("click", seleccionarElementos);
    $("#borrar").on("click", borrarSeleccion);
    $("#historial").on("click", mostrarHistorial);
}

function seleccionarElementos() {
    borrarSeleccion();
    var valorSelector = $inputSelector.val();
    var $elementosSeleccionados = $("#zona_seleccionable " + valorSelector);
    $elementosSeleccionados.toggleClass("seleccionado");
    arrayHistorial.push({ "selector": valorSelector, "num_elementos": $elementosSeleccionados.length });
    ls.setItem("historial", JSON.stringify(arrayHistorial));
}

function borrarSeleccion() {
    $("#zona_seleccionable *").removeClass();
}

function mostrarHistorial() {
    var cadena = "";
    for (var i = 0; i < arrayHistorial.length; i++) {
        cadena += "'" + arrayHistorial[i].selector + "' (" + arrayHistorial[i].num_elementos + " elementos) \n";
    }
    alert(cadena);
}