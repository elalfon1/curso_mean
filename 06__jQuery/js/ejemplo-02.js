$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("h1").click(function() {

        $thisH1 = $(this);
        switch ($thisH1.attr("id")) {
            case "titulo1":
                $thisH1.css("color", "#ff0000");
                $thisH1.css("background-color", "#ffff00");
                $thisH1.css("font-family", "Courier");
                break;
            case "titulo2":
                $thisH1.css("color", "#ffff00");
                $thisH1.css("background-color", "#ff0000");
                $thisH1.css("font-family", "Arial");
            default:
                break;
        }

    });
}