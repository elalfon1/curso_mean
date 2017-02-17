var assert = require("assert");
var miFuncion = require("./funcion");

describe("Bat 2", function() {
    it("Probando funcion bien", function() {
        assert.ok(miFuncion(3, 5) == 5 + 3);
    });
});