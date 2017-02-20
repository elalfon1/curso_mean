var funcionAnonimaClasica = function (uno, dos) {
    return uno + dos;
};
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonimaClasica(4, 6));
console.log(funcionLambda(4, 6));
var PI = 3.1415927;
//PI = 3434; las constantes no se pueden modificar
var _a = { variable1: "valor1", variable2: "valor 2" }, variable1 = _a.variable1, variable2 = _a.variable2;
var obj = { variable4: "valor4", variable3: "valor3" };
var variable3 = obj.variable3, variable4 = obj.variable4;
console.log(variable3);
function dameLosCamposPorConsola(campo1, campo2) {
    var elRestoDeCampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDeCampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("Y ahora mostramos todo:");
    for (var indice in elRestoDeCampos) {
        console.log("El campo en la pos " + indice + "\t es " + elRestoDeCampos[indice] + "\n");
    }
    console.log("\nY ahora mostramos todo con for of:");
    for (var _a = 0, elRestoDeCampos_1 = elRestoDeCampos; _a < elRestoDeCampos_1.length; _a++) {
        var valor = elRestoDeCampos_1[_a];
        console.log(valor + "\n");
    }
}
dameLosCamposPorConsola("Una cadena", 5, "aaa", true, 32, 13, "otra cadena", new Object);
