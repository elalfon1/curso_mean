var moongose = require("mongoose");

var Schemas = require("./schemas_hoteles");
var Booking = Schemas.Booking;
/*
function showError(error, schema) {
    schema.eachPath((campo) => {
        if (error.errors[campo]) {
            console.error(error.errors[campo].message);
        }
    });
}
*/
function grabarBooking(customer_id, room_id, isDouble, check_date, callback) {
    let booking = new Booking({
        "customer_id": customer_id,
        "room_id": room_id,
        "check_date": check_date,
        "isDouble": isDouble
    });

    booking.save((error, reserva) => {
        if (error) {
            console.error("Error al grabar reserva");
            //showError(error, Booking.schema);
        } else
            console.log("Reserva grabada correctamente");
        if (typeof callback != "undefined")
            callback(error, reserva);
    });
};

function borrarBooking(_id, callback) {
    Booking.remove({ "_id": _id }, (error, reserva) => {
        if (typeof callback != "undefined")
            callback(error, reserva);
    });
};

function leerBookingPorId(_id, callback) {
    Booking.findById(_id, { "__v": 0 }, (error, reserva) => {
        if (typeof callback != "undefined")
            callback(error, reserva);
    });
};

function leerBookingsPorFecha(fechaInicio, fechaFin, callback) {
    Booking.find({ "check_date": { $gte: fechaInicio, $lte: fechaFin } }, { "__v": 0, "_id": 0, "customer_id": 0 }, (error, reservas) => {
        if (typeof callback != "undefined")
            callback(error, reservas);
    });
};

function aggregateBookingsPorFecha(fechaInicio, fechaFin, callback) {
    Booking.aggregate([
        { $match: { "check_date": { $gte: fechaInicio, $lte: fechaFin } } },
        { $group: { "_id": "$isDouble" } }
    ], (error, reservas) => {
        if (typeof callback != "undefined")
            callback(error, reservas);
    });
};

function leerAllBookings(callback) {
    Booking.find({}, { "__v": 0 }, (error, reservas) => {
        if (typeof callback != "undefined")
            callback(error, reservas);
    });
};

module.exports.grabarBooking = grabarBooking;
module.exports.borrarBooking = borrarBooking;
module.exports.leerBookingPorId = leerBookingPorId;
module.exports.leerBookingsPorFecha = leerBookingsPorFecha;
module.exports.aggregateBookingsPorFecha = aggregateBookingsPorFecha;
module.exports.leerAllBookings = leerAllBookings;