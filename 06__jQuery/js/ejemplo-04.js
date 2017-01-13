$(document).ready(initializeEvents);


function initializeEvents() {

    $("#boton1").click(addElementClass);
    $("#boton2").click(removeElementClass);
    $("#boton3").click(toggleElementClass);

}

function addElementClass() {
    $("#descripcion").addClass("recuadro");
}

function removeElementClass() {
    $("#descripcion").removeClass("recuadro");
}

function toggleElementClass() {
    $("#descripcion").toggleClass("recuadro");
}