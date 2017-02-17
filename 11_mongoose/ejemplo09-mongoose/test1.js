var assert = require("assert");

describe("Nombre", function() {
    describe("Sub bateria", function() {
        it("Nombre del test", function() {
            assert.equal("Hola", "Hola Mundo".substring(0, 4));
        });
        it("Prueba2", () => {
            assert.ok(5 == 3, "5 no es igual a 3");
            //fs.readSync();
        });
    });
});