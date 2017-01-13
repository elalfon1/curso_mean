$(document).ready(initializeEvents);
var $filtrado, $ulExistente;

function initializeEvents() {
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecond);
    $("#boton-filtrar").on("click", filtrarListayCrear);
    $filtrado = $("#filtrado");
    $ulExistente = $("ul:first");
}

function deleteAll() {
    $ulExistente.empty();
}

function restoreAll() {
    // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $ulExistente.html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}

function addLastElement() {
    $ulExistente.append("<li>Agrego un item al final</li>");
}

function addFirstElement() {
    $ulExistente.prepend("<li>Agrego un item al principio</li>");
}

function deleteLastElement() {
    let position = $ulExistente.children("li").length - 1;
    let liToDelete = $ulExistente.children("li").eq(position);
    liToDelete.remove();
}

function deleteFirstElement() {
    $ulExistente.children("li").eq(0).remove();
}

function deleteFirstAndSecond() {
    $ulExistente.children("li:lt(2)").remove();
}

function deletePreAndLast() {
    let position = $ulExistente.children("li").length - 3;
    let liToDelete = $ulExistente.children("li:gt(" + position + ")");
    liToDelete.remove();
}

function filtrarListayCrear() {

    $filtrado.empty();
    var $ulNuevo = $filtrado.append("<ul></ul>");

    var busqueda = $("#busqueda").val();
    $ulExistente.children("li:contains('" + busqueda + "')").each(function(index, element) {
        //alert("bus " + busqueda);
        $(this).clone().appendTo($ulNuevo);

    });

}