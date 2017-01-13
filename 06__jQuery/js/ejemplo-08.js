var fechaDown;
var fechaUp;
var interval;
$(document).ready(initializeEvents);

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}

function downEvent() {
    fechaDown = parseInt((new Date()).getTime() / 1000);
    $(this).css("background-color", "#ff0");

    interval = setInterval(function() {
        fechaUp = parseInt((new Date()).getTime() / 1000);
        if (fechaUp > fechaDown + 2) {
            clearInterval(interval);
            console.log("¿Necesitas más tiempo?");
        }
    }, 1000);
}

function upEvent() {
    clearInterval(interval);
    $(this).css("background-color", "#fff");
}