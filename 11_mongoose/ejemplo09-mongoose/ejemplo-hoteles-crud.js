var mongoose = require("mongoose");
mongoose.connect("localhost:27017/db_hoteles")
var Schemas = require("./schemas_hoteles")

var Room = Schemas.Room;
var Customer = Schemas.Customer;
var Booking = Schemas.Booking;

function saveRoom(myRoom) {
    let room = new Room(myRoom);
    room.save((error) => {
        if (error) {
            console.error("Error al grabar habitación");
            Room.schema.eachPath((campo) => {
                if (error.errors[campo]) {
                    console.error(error.errors[campo].message);
                }
            });
        } else
            console.log("Habitación grabada correctamente");
    })
}


saveRoom({ isDouble: false, _id: 101 });