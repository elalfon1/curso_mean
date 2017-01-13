$(document).ready(initializeEvents);

function initializeEvents() {
    $("#parrafos p").each(markBySize);
    /*$("#parrafos p").on("mousedown", function(event) {
        if (event.which == 3) {
            //cuando pulso con el boton derecho, menú contextual
            //solo funciona con mousedown, no con click
            var texto = $(this).text();
            if (texto.length > 100) {
                alert(texto);
            }
        }
    });*/

    $("#parrafos p").on("contextmenu", function(event) {
        if (event.which == 3) {
            //cuando pulso con el boton derecho, menú contextual
            //solo funciona con mousedown, no con click
            var texto = $(this).text();
            if (texto.length > 100) {
                alert(texto);
            }
        }
    });
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
    }
}