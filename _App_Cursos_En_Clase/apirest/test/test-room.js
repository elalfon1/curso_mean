var modelRooms = require("../modelo/rooms");
var assert = require("assert");

describe("Pruebas CRUD", function() {


    /*
        describe("Pruebas Create", function() {
            it("Habitacion 99 - Doble", function(done) {
                modelRooms.grabarRoom(99, true, function(error, habitacion) {
                    if (error) {
                        //assert.ok(false, error.message);
                        done(error);

                    } else {
                        assert.ok(habitacion._id == 99 && habitacion.isDouble == true);
                        done();
                    }

                });
            });
            it("Habitacion 102 - Simple", function(done) {
                modelRooms.grabarRoom(102, false, function(error, habitacion) {
                    if (error)
                        done(error);
                    else {
                        assert.ok(habitacion._id == 102 && habitacion.isDouble == false);
                        done();
                    }
                });
            });
        });
    */

    describe("Pruebas Read", function() {


        before((done) => {
            modelRooms.grabarRoom(101, true);
            modelRooms.grabarRoom(102, false);
            done();
        });



        it("Leer Id - 102", function(done) {
            modelRooms.leerRoomPorId(102, function(error, habitacion) {
                if (error) {
                    done(error);

                } else {
                    assert.ok(habitacion._id == 102 && habitacion.isDouble == false);
                    done();
                }

            });
        });
        it("Leer Id - 103", function(done) {
            modelRooms.leerRoomPorId(103, function(error, habitacion) {
                if (error) {
                    done(error);

                } else {
                    assert.ok(habitacion != null, "Habitacion 103 no existe");
                    done();
                }

            });
        });
        /*it("Borrar Id - 103", function(done) {
            modelRooms.leeborrarRoom(103, function(error, habitacion) {
                if (error) {
                    done(error);

                } else {
                    assert.ok(habitacion != null);
                    done();
                }

            });
        });*/
        /*
                after((done) => {
                    modelRooms.borrarRoom(101);
                    modelRooms.borrarRoom(102);
                    done();
                });
        */
    });






});