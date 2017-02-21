 //Pruebas CRUD Customers

 var modelCustomers = require("../modelo/customers-modelo");
 var assert = require("assert");

 describe("Pruebas CRUD Customers", function() {


     before((done) => {
         modelCustomers.grabarCustomer("Sergio Casado", "scasado@gmx.es");
         modelCustomers.grabarCustomer("Jose Lopez", "jlopezq@gmail.com");
         done();
     });

     var idSergioCasado = null;
     var idJoseLopez = null;

     describe("Pruebas Create", function() {
         it("Cliente Sergio Casado", function(done) {
             modelCustomers.grabarCustomer("Sergio Casado", "scasado@gmx.es", function(error, cliente) {
                 if (error) {
                     //assert.ok(false, error.message);
                     done(error);
                 } else {
                     idSergioCasado = cliente._id;
                     assert.ok(cliente.name == "Sergio Casado" && cliente.email == "scasado@gmx.es");
                     done();
                 }

             });
         });
         it("Cliente Jose Lopez", function(done) {
             modelCustomers.grabarCustomer("Jose Lopez", "jlopezq@gmail.com", function(error, cliente) {
                 if (error)
                     done(error);
                 else {
                     idJoseLopez = cliente._id;
                     assert.ok(cliente.name == "Jose Lopez" && cliente.email == "jlopezq@gmail.com");
                     done();
                 }
             });
         });
     });

     describe("Pruebas Read", function() {

         it("Leer Sergio Casado", function(done) {
             modelCustomers.leerCustomersPorNombre("Sergio C", function(error, cliente) {
                 if (error) {
                     done(error);

                 } else {
                     assert.ok(cliente.name == "Sergio Casado" && cliente.email == "scasado@gmx.es");
                     done();
                 }

             });
         });
         it("Leer Jose Lopez", function(done) {
             modelCustomers.leerCustomersPorNombre("Jose Lopez", function(error, cliente) {
                 if (error) {
                     done(error);

                 } else {
                     assert.ok(cliente.name == "Jose Lopez" && cliente.email == "jlopezq@gmail.com");
                     done();
                 }

             });
         });
     });

     describe("Pruebas Delete", function() {

         it("Borrar Sergio", function(done) {
             modelCustomers.borrarCustomer(idSergioCasado, function(error, cliente) {
                 if (error) {
                     done(error);

                 } else {
                     assert.ok(cliente != null);
                     done();
                 }

             });
         });

         it("Borrar Jose", function(done) {
             modelCustomers.borrarCustomer(idJoseLopez, function(error, cliente) {
                 if (error) {
                     done(error);

                 } else {
                     assert.ok(cliente != null);
                     done();
                 }

             });
         });

     });

     after((done) => {
         modelCustomers.borrarCustomer(idSergioCasado);
         modelCustomers.borrarCustomer(idJoseLopez);
         done();
     });

 });