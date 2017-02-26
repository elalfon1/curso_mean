var moongose = require("mongoose");

var Schemas = require("./schemas_hoteles");
var Room = Schemas.Room;

function grabarRoomObject(room, callback) {
    let roomModel = new Room(room);

    roomModel.save((error, habitacion) => {
        if (error)
            console.error("Error al grabar habitación");
        else
            console.log("Habitación grabada correctamente");

        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};


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
    Room.findById(_id, { "__v": 0 }, (error, habitacion) => {
        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};

function leerRoomsPorTipo(isDouble, callback) {
    Room.find({ "isDouble": isDouble }, { "__v": 0 }, (error, habitaciones) => {
        if (typeof callback != "undefined")
            callback(error, habitaciones);
    });
};

function leerAllRoom(callback) {
    Room.find({}, { "__v": 0 }, (error, habitacion) => {
        if (typeof callback != "undefined")
            callback(error, habitacion);
    });
};


function contarRoom(room, callback) {
    Room.count(room, (error, count) => {
        if (typeof callback != "undefined")
            callback(error, count);
    });
};

module.exports.grabarRoomObject = grabarRoomObject;
module.exports.grabarRoom = grabarRoom;
module.exports.borrarRoom = borrarRoom;
module.exports.leerRoomPorId = leerRoomPorId;
module.exports.leerRoomsPorTipo = leerRoomsPorTipo;
module.exports.leerAllRoom = leerAllRoom;
module.exports.contarRoom = contarRoom;