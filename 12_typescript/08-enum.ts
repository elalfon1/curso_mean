enum TipoDeVia {
    Calle = 5, //solo con numeros enteros
    Plaza = 3,
    Camino, //Valdria 4, el anterior + 1
    Avenida, //Valdria 5, el anterior + 1
    Carretera //Vale 6
}

console.log("Calle " + TipoDeVia.Calle);
console.log("Plaza " + TipoDeVia.Plaza);
console.log("Camino " + TipoDeVia.Camino);
console.log("Avenida " + TipoDeVia.Avenida);
console.log("Carretera " + TipoDeVia.Carretera);

namespace TipoDeVia {
    export function esAvenida(texto: string): TipoDeVia {
        if (texto == "Avda")
            return TipoDeVia.Avenida;
    }
}

var miTipoDeVia: TipoDeVia = TipoDeVia.Calle;

console.log("Tipo de via (num): " + miTipoDeVia);

console.log("Tipo de via (string): " + TipoDeVia[miTipoDeVia]);

var avenida = TipoDeVia.esAvenida("Avda");

console.log("Tipo de via: " + avenida);