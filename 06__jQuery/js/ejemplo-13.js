$(document).ready(initializeEvents);

function initializeEvents() {
    $("#descripcion div:odd").not().click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox() {
    $(this).fadeOut("slow");
}

function showBox() {
    $("#descripcion div:odd").not().fadeIn("slow");
}