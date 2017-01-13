$(document).ready(initializeEvents);

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    var estilos = {
        "background-color": "#ff0",
        "border": "3px solid black",
        "box-shadow": "3px 3px 3px grey"
    }
    $(this).css(estilos);
}

function outMouseEvent() {
    var estilos = {
        "background-color": "#fff",
        "border": "none",
        "box-shadow": "none"
    }
    $(this).css(estilos);
}