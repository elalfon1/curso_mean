let fs = require("fs");

/* Otro metodo
exports.saberLineas = function(fichero, callback) {

    var objetoConInfo = {
        "proFunCallback": callback
    }
    fs.readFile(fichero, funcionCuentaLineas.bind(objetoConInfo));


}


function funcionCuentaLineas(error, contenido) {

    if (error) {
        this.proFunCallback(error);
    } else {
        let numFilas = contenido.toString().split("\n").length;
        this.proFunCallback(null, numFilas);
    }
}
*/

exports.saberLineas = function(fichero, callback) {
    fs.readFile(fichero, funcionCuentaLineas.bind(callback));
}

function funcionCuentaLineas(error, contenido) {

    if (error) {
        this(error);
    } else {
        let numFilas = contenido.toString().split("\n").length;
        this(null, numFilas);
    }
}