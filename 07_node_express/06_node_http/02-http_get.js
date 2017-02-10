let http = require("http");
let url = "http://nodejs.org/dist/index.json";
//let url = "http://www.publico.es/sitemap-index.xml";
let datosPlanos = "";

let callbackRes =
    (res) => {
        const codigoEstado = res.statusCode;
        const tipoContenido = res.headers["content-type"];
        console.log(tipoContenido);

        let error;
        if (codigoEstado !== 200) {
            error = new Error("Respuesta fallida.\n" +
                `Código de estado: ${codigoEstado}`)
        } else if (!/^application\/json/.test(tipoContenido)) {
            error = new Error("Contenido inválido.\n" +
                `Se esperaba application/json pero se ha recibido ${tipoContenido}`)
        } else {
            const tamanio = res.headers["content-length"];
            console.log("Recibidos " + tamanio + "bytes por método " + res.method);
        }

        if (error) {
            console.log(error.message);
            res.resume(); //finaliza la peticion
            return;
        }
        res.setEncoding("utf8");
        res.on("data", alRecibirDatos);
        res.on("end", () => {
            try {
                let datosParseados = JSON.parse(datosPlanos);
                console.log(datosParseados[0]);
            } catch (e) {
                console.error(e.message)
            }
        });
    };

function alRecibirDatos(bufferChunk) {
    datosPlanos += bufferChunk;
}

http.get(url, callbackRes).on("error", console.error);