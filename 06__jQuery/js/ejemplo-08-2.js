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

    interval = setTimeout(function() {
        fechaUp = parseInt((new Date()).getTime() / 1000);
        if (fechaUp > fechaDown) {
            //clearInterval(interval);
            console.log("¿Necesitas más tiempo?");
        }
    }, 2000);
}

function upEvent() {
    clearInterval(interval);
    $(this).css("background-color", "#fff");
}