// carga del modulo
var mongoose = require("mongoose");
// conectar a la base de datos
mongoose.connect("mongodb://localhost/db_libros");
// Genero el modelo
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number,
    vista: Boolean,
    actores: Array,
    datos: Buffer
});
// http://mongoosejs.com/docs/schematypes.html


var fs = require("fs");
var fichero = "./ejemplo02schema.js";
var contenido = fs.readFileSync(fichero);

//let word1 = Buffer.from("hello", "utf8");

var esdla = new Libro({
    titulo: "El señor de los anillos",
    autor: "JJ T",
    paginas: 3500,
    vista: true,
    actores: ["Viggo Mortesen", "Elijha Wood"],
    datos: contenido
});

esdla.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error)
    } else {
        console.log("Pelicula guardada " + esdla._id)
    }
});