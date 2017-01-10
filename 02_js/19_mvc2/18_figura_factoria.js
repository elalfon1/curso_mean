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
            var tipoModelo = ConVolumen(Modelo.Rectangulo);
            var nombreModelo = "Rectangulo";
            break;
        case "elipse":
            var tipoModelo = ConVolumen(Modelo.Elipse);
            var nombreModelo = "Elipse";
            break;
        case "triangulo equilatero":
            var tipoModelo = ConVolumen(Modelo.TrianguloEquilatero);
            var nombreModelo = "Triangulo";
            break;
        case "triangulo isosceles":
            var tipoModelo = ConVolumen(Modelo.TrianguloIsosceles);
            var nombreModelo = "Triangulo";
            break;
        case "huevo":
            var tipoModelo = ConVolumen(Modelo.Huevo);
            var nombreModelo = "Huevo";
            break;
    }

    return new FiguraControlador(new tipoVista(elementoDOMReq, nombreModelo), tipoModelo);
}

function ConVolumen(modeloFigura) {
    modeloFigura.calcularDeVerdadVolumen = function(ancho, alto, profundidad) {
        var volumenNuevo = modeloFigura.calcularDeVerdadArea(ancho, alto, true) * profundidad;
        Modelo.notificarCambio(modeloFigura.escuchadores, modeloFigura.name, "volumen", modeloFigura.volumen, volumenNuevo);
        modeloFigura.volumen = volumenNuevo;
    }
    return modeloFigura;
}