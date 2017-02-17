var assert = require("assert");
var miFuncion = require("./funcion");

describe("Bat 1", function() {

    it("Probando funcion mal", function() {
        assert.ok(miFuncion(3, 5) == 5 + 2);
    });
});