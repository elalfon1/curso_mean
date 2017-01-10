function FactoriaFiguras() {};

FactoriaFiguras.prototype.VISTA = "v1";
FactoriaFiguras.prototype.MODELO = "rectangulo";

FactoriaFiguras.prototype.crearFigura = function(options) {
    var elementoDOMReq = document.getElementById(options.id);
    var vistaReq = options.vista || this.VISTA;
    var modeloReq = options.modelo || this.MODELO;

    switch (vistaReq) {
        case "v1":
            var tipoVista = FiguraVista;
            break;
        case "v2":
            var tipoVista = FiguraVistaV2;
            break;
    }

    switch (modeloReq) {
        case "rectangulo":
            var tipoModelo = Modelo.Rectangulo;
            var nombreModelo = "Rectangulo";
            break;
        case "elipse":
            var tipoModelo = Modelo.Elipse;
            var nombreModelo = "Elipse";
            break;
        case "triangulo equilatero":
            var tipoModelo = Modelo.TrianguloEquilatero;
            var nombreModelo = "Triangulo";
            break;
        case "triangulo isosceles":
            var tipoModelo = Modelo.TrianguloIsosceles;
            var nombreModelo = "Triangulo";
            break;
        case "huevo":
            var tipoModelo = Modelo.Huevo;
            var nombreModelo = "Huevo";
            break;
    }

    return new FiguraControlador(new tipoVista(elementoDOMReq, nombreModelo), tipoModelo);
}