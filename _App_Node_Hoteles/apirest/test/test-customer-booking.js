var modelCustomers = require("../modelo/customers-modelo");
var modelBookings = require("../modelo/bookings-modelo");
var assert = require("assert");

describe("Pruebas CRUD Customers", function() {

    var idAntonioGarcia = null;
    var myDate = new Date(2017, 02, 30);
    var myNextDate = new Date(2017, 02, 31);

    describe("Pruebas Create Customer - Booking", function() {

        it("Cliente Antonio Garcia", function(done) {
            modelCustomers.grabarCustomer("Antonio Garcia", "antoniog@hotmail.es", function(error, cliente) {
                if (error) {
                    //assert.ok(false, error.message);
                    done(error);
                } else {
                    idAntonioGarcia = cliente._id;
                    assert.ok(cliente.name == "Antonio Garcia" && cliente.email == "antoniog@hotmail.es");
                    done();
                }

            });
        });

        it("Reserva Antonio Garcia 30-03-2017", function(done) {

            modelBookings.grabarBooking(idAntonioGarcia, 101, true, myDate, function(error, reserva) {
                if (error) {
                    //assert.ok(false, error.message);
                    done(error);
                } else {
                    assert.ok(reserva.room_id == 101 && reserva.check_date == myDate);
                    done();
                }

            });
        });

        it("Reserva Antonio Garcia 30-03-2017", function(done) {

            modelBookings.grabarBooking(idAntonioGarcia, 101, true, myNextDate, function(error, reserva) {
                if (error) {
                    //assert.ok(false, error.message);
                    done(error);
                } else {
                    assert.ok(reserva.room_id == 101 && reserva.check_date == myNextDate);
                    done();
                }

            });
        });



    });
});