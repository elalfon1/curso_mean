var $seguidor;
$(document).ready(initializeEvents);

function initializeEvents() {
    $seguidor = $("#seguidor")
    $(document).mousemove(moveDetected);
}

function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);
    $seguidor.css({
        position: "absolute",
        top: event.clientY + "px",
        left: event.clientX + "px",
    })
}