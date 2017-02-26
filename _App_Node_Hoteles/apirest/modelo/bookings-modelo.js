var moongose = require("mongoose");

var Schemas = require("./schemas_hoteles");
var Booking = Schemas.Booking;
var roomModelo = require("./rooms-modelo");
var customerModelo = require("./customers-modelo");

function grabarBookingObject(booking, callback) {

    roomModelo.contarRoom({
        _id: booking.room_id,
        isDouble: booking.isDouble
    }, (error, cont) => {

        if (cont == 1) { //existe la habitacion

            customerModelo.leerCustomerPorId(booking.customer_id, (error, customer) => {

                if (customer) {
                    //booking.customer_id = new moongose.Types.ObjectId(booking.customer_id);
                    booking.customer_id = customer._id;
                    booking.check_date = new Date(); //Luego lo recogemos
                    let bookingModelo = new Booking(booking);


                    bookingModelo.save((error, reserva) => {
                        if (error) {
                            console.error("Error al grabar reserva");
                            //showError(error, Booking.schema);
                        } else
                            console.log("Reserva grabada correctamente");
                        if (typeof callback != "undefined")
                            callback(error, reserva);
                    });
                } else {
                    if (typeof callback != "undefined")
                        callback("Error al grabar reserva: no existe el cliente");
                }
            });

        } else {
            if (typeof callback != "undefined")
                callback("Error al grabar reserva: no existe la habitación");
        }
    });

};

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
    Booking.find({ "check_date": { $gte: fechaInicio, $lte: fechaFin } }, { "__v": 0 }, (error, reservas) => {
        if (typeof callback != "undefined")
            callback(error, reservas);
    });
};

// function aggregateBookingsPorFecha(fechaInicio, fechaFin, callback) {
//     Booking.aggregate([
//         { $match: { "check_date": { $gte: fechaInicio, $lte: fechaFin } } },
//         { $group: { "_id": "$room_id" } }
//     ], (error, reservas) => {
//         if (typeof callback != "undefined")
//             callback(error, reservas);
//     });
// };


function leerBookingsEntreFechas(isDouble, fechaInicio, fechaFin, callback) {

    if (isDouble == null) {

        Booking.find().distinct("room_id", { "check_date": { $gte: fechaInicio, $lte: fechaFin } }, (error, reservas) => {
            if (typeof callback != "undefined")
                callback(error, reservas);
        });

    } else {

        Booking.find().distinct("room_id", { 'check_date': { $gte: fechaInicio, $lte: fechaFin }, "isDouble": isDouble }, (error, reservas) => {
            if (typeof callback != "undefined")
                callback(error, reservas);
        });

    }
};

function leerAllBookings(callback) {
    Booking.find({}, { "__v": 0 }, (error, reservas) => {
        if (typeof callback != "undefined")
            callback(error, reservas);
    });
};

module.exports.grabarBookingObject = grabarBookingObject;
module.exports.grabarBooking = grabarBooking;
module.exports.borrarBooking = borrarBooking;
module.exports.leerBookingPorId = leerBookingPorId;
module.exports.leerBookingsPorFecha = leerBookingsPorFecha;
module.exports.leerBookingsEntreFechas = leerBookingsEntreFechas;
module.exports.leerAllBookings = leerAllBookings;
// module.exports.aggregateBookingsPorFecha = aggregateBookingsPorFecha;