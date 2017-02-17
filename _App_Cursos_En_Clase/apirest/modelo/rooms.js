var moongose = require("mongoose");

var Schemas = require("./schemas_hoteles");
var Room = Schemas.Room;
/*
function showError(error, schema) {
    schema.eachPath((campo) => {
        if (error.errors[campo]) {
            console.error(error.errors[campo].message);
        }
    });
}
*/
function grabarRoom(num, esDoble, callback) {
    let room = new Room({
        "_id": num,
        "isDouble": esDoble
    });

    room.save((error, habitacion) => {
        if (error) {
            console.error("Error al grabar habitación");
            //showError(error, Room.schema);

        } else
            console.log("Habitación grabada correctamente");

        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};

function borrarRoom(_id, callback) {
    Room.remove({ "_id": _id }, (error, habitacion) => {
        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};

function leerRoomPorId(_id, callback) {
    Room.findById(_id, (error, habitacion) => {
        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};

function leerRoomsPorTipo(isDouble, callback) {
    Room.find({ "isDouble": isDouble }, (error, habitaciones) => {
        if (typeof callback != "undefined")
            callback(error, habitaciones);
    });
};

function leerAllRoom(callback) {
    Room.find({}, (error, habitacion) => {
        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};

module.exports.grabarRoom = grabarRoom;
module.exports.borrarRoom = borrarRoom;
module.exports.leerRoomPorId = leerRoomPorId;
module.exports.leerRoomsPorTipo = leerRoomsPorTipo;
module.exports.leerAllRoom = leerAllRoom;