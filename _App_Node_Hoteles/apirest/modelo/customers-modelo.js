var moongose = require("mongoose");

var Schemas = require("./schemas_hoteles");
var Customer = Schemas.Customer;
/*
function showError(error, schema) {
    schema.eachPath((campo) => {
        if (error.errors[campo]) {
            console.error(error.errors[campo].message);
        }
    });
}
*/
function grabarCustomer(nombre, email, callback) {
    let customer = new Customer({
        "name": nombre,
        "email": email
    });

    customer.save((error, cliente) => {
        if (error) {
            console.error("Error al grabar cliente");
            //showError(error, Customer.schema);

        } else
            console.log("Cliente grabado correctamente");

        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

function borrarCustomer(_id, callback) {
    Customer.remove({ "_id": _id }, (error, cliente) => {
        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

function leerCustomerPorId(_id, callback) {
    Customer.findById(_id, { "__v": 0 }, (error, cliente) => {
        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

function leerCustomersPorEmail(email, callback) {
    Customer.find({ "email": { $regex: "^" + email, $options: 'i' } }, { "__v": 0 }, (error, cliente) => {
        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

function leerCustomersPorNombre(nombre, callback) {
    Customer.find({ "name": { $regex: "^" + nombre, $options: 'i' } }, { "__v": 0 }, (error, cliente) => {
        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

function leerAllCustomer(callback) {
    Customer.find({}, { "__v": 0 }, (error, cliente) => {
        if (typeof callback != "undefined")
            callback(error, cliente);
    });
};

module.exports.grabarCustomer = grabarCustomer;
module.exports.borrarCustomer = borrarCustomer;
module.exports.leerCustomerPorId = leerCustomerPorId;
module.exports.leerCustomersPorEmail = leerCustomersPorEmail;
module.exports.leerCustomersPorNombre = leerCustomersPorNombre;
module.exports.leerAllCustomer = leerAllCustomer;