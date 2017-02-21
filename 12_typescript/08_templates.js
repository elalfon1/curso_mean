var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
var arrayOriginal = ["clientes", "clientes2"];
var textosInvertidos = invertir(arrayOriginal);
console.log("\narrayOriginal " + arrayOriginal + "\nTextos invertidos " + textosInvertidos);
var arrayOriginal2 = [11, 22, 33, 44, 55];
var arrayInvertidos2 = invertir(arrayOriginal2);
console.log("\narrayOriginal " + arrayOriginal2 + "\nNumeros invertidos " + arrayInvertidos2);
var Prueba = (function () {
    function Prueba(numero, cadena) {
        this.numero = numero;
        this.cadena = cadena;
    }
    Prueba.prototype.toString = function () {
        return "Número: " + this.numero + " cadena: " + this.cadena;
    };
    return Prueba;
}());
var arrayOriginalPruebas = [new Prueba(1, "uno"), new Prueba(2, "dos"), new Prueba(3, "tres")];
var arrayInvertidosPruebas = invertir(arrayOriginalPruebas);
console.log("\arrayOriginalPruebas\n " + arrayOriginalPruebas +
    "\narrayInvertidosPruebas:\n " + arrayInvertidosPruebas);
var hijosDePadreInvertidos = invertir([hijoDePadre, hijoDePadre2]);
var DAOGenerico = (function () {
    function DAOGenerico() {
    }
    DAOGenerico.prototype.stringify = function (objeto) {
        return objeto + "";
    };
    return DAOGenerico;
}());
var ArrayGenericDAO = (function (_super) {
    __extends(ArrayGenericDAO, _super);
    function ArrayGenericDAO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.almacen = [];
        return _this;
    }
    ArrayGenericDAO.prototype.add = function (objeto) {
        this.almacen.push(objeto);
    };
    ArrayGenericDAO.prototype.del = function (objeto) {
        // recorrer, buscar y eliminar! (Terminator)
    };
    ArrayGenericDAO.prototype.find = function (indice) {
        return this.almacen[indice];
    };
    ArrayGenericDAO.prototype.list = function () {
        return this.almacen;
    };
    return ArrayGenericDAO;
}(DAOGenerico));
var dao = null;
dao.add(new Persona("", "", ""));
 * /;
