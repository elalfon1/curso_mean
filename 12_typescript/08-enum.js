var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 5] = "Calle";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 4] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 6] = "Carretera"; //Vale 6
})(TipoDeVia || (TipoDeVia = {}));
console.log("Calle " + TipoDeVia.Calle);
console.log("Plaza " + TipoDeVia.Plaza);
console.log("Camino " + TipoDeVia.Camino);
console.log("Avenida " + TipoDeVia.Avenida);
console.log("Carretera " + TipoDeVia.Carretera);
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda")
            return TipoDeVia.Avenida;
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via (num): " + miTipoDeVia);
console.log("Tipo de via (string): " + TipoDeVia[miTipoDeVia]);
var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de via: " + avenida);
