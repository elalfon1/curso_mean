var ClienteMongo = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/bd_hotel"; //Tiene que coincidir con el de la carpeta de Mongo

var modelo = {
    //Accion es insertarBase/leerReservas como cadena
    acceder: function(accion, miCallback, datos) {
        ClienteMongo.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Conexión a la bbdd correcta");

            modelo.reservas[accion](db, function(resultado) {
                console.log("Cerrar bbdd");
                db.close();
                if (typeof miCallback == "function") {
                    miCallback(resultado);
                }
            }, datos);
        });
    },
    reservas: {
        insertarBase: function(db, callback, datosReservas) {
            var coleccion = db.collection("reservas");
            coleccion.insert(datosReservas, function(err, documentos) {
                assert.equal(err, null);
                assert.equal(3, documentos.result.n); //documentos.result.n Nos indica el numero de documentos 
                assert.equal(3, documentos.ops.length); //documentos.ops.length Los que hay en la base de datos
                console.log("Insertadas reservas");
                callback(documentos);
            });
        },
        leerReservas: function(db, callback) {
            var collection = db.collection('reservas');

            // Consulta de los documentos (reservas) de la colección                
            /* Este método hace la búsqueda en la colección con los parámetros de búsqueda dados dentro de las llaves. En este caso no hay parámetros por lo que se trae todos los elementos de la colección. */
            var arrayReservas = collection.find({}).toArray(function(err, res) {
                /*  Se invoca el método toArray para formatear el resultado y poder pasarle la función encargada de hacer los tests unitarios y sacar por pantalla los resultados. */
                assert.equal(err, null);
                assert.notEqual(0, res.length);
                console.log("Se han encontrado las siguientes reservas");
                console.dir(res);
                callback(res);
            });
            return arrayReservas;
        },
        leerReservasByNombreCliente: function(db, callback, nombreCliente) {
            var collection = db.collection('reservas');

            // Consulta de los documentos (reservas) de la colección                
            /* Este método hace la búsqueda en la colección con los parámetros de búsqueda dados dentro de las llaves. En este caso busca por el nombre del cliente. */
            var arrayReservas = collection.find({ "cliente": nombreCliente }).toArray(function(err, res) {
                /*  Se invoca el método toArray para formatear el resultado y poder pasarle la función encargada de hacer los tests unitarios y sacar por pantalla los resultados. */
                assert.equal(err, null);
                assert.notEqual(0, res.length);
                console.log("Se han encontrado las siguientes reservas");
                console.dir(res);
                callback(res);
            });
            return arrayReservas;
        }
    }
}

/*
modelo.acceder("insertarBase", (resultado) => {
    console.log("Datos insertados");
}, [
    { cliente: "Pepito", habitacion: 1 },
    { cliente: "Otrocliente", habitacion: 1 },
    { cliente: "Manuel", habitacion: 1 }
]);*/
module.exports = modelo;