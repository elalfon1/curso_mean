let fs = require("fs");
let path = require("path");


//Una manera
/*
exports.funPrincipal = function(directorio, extension, callback) {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            callback(error);
        } else {
            ficheros = ficheros.filter(fichero => {
                return path.extname(fichero) === extension;
            })
            callback(null, ficheros);
        }

    });
}
*/
module.exports = function(directorio, extension, callback) {
    var resultado = {
        error: null,
        ficheros: null
    };
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            resultado.error = error;
        } else {
            ficheros = ficheros.filter(fichero => {
                return path.extname(fichero) === extension;
            })
            resultado.ficheros = ficheros;
        }
        callback(resultado);
    });
}