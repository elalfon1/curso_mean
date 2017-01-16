$(document).ready(initializeEvents);

var $mitad;

function initializeEvents() {
    $("#boton1").click(toggleBox);
}

function toggleBox() {
    var longDiv = $("#descripcion div").length;
    var mitad = parseInt(longDiv / 2);
    $divMitad = $("#descripcion div:lt(" + mitad + ")").toggle("slow").end();
    $("#descripcion div:gt(" + (mitad - 1) + ")").toggle("fast");
    //$divMitad.toggle("slow");
    //$("#descripcion div").not($divMitad).toggle("fast");

}