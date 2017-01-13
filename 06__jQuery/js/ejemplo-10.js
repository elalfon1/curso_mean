$(document).ready(initializeEvents);
var coloresDefecto = [];
var $inputs;

function initializeEvents() {

    $inputs = $("input[type='text']");
    $inputs.each(function(index, element) {
        coloresDefecto[this.id] = $(this).css("color");
    });
    $inputs.focus(setfocus);
    $inputs.blur(setBlur);
}

function setfocus() {
    $(this).css("color", "#f00");
}

function setBlur() {
    //$(this).css("color", "#00f");
    $(this).css("color", coloresDefecto[this.id]);
}