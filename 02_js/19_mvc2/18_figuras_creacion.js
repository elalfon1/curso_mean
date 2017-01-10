/*var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");

var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
var vistaRectangulo2 = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");

var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
var controlRectangulo2 = new FiguraControlador(vistaRectangulo2, Modelo.Rectangulo);
*/

/*
var vistaElipse = new FiguraVista(padreCalcElipse, "Elipse");
var vistaElipse2 = new FiguraVistaV2(padreCalcElipse, "Elipse");

var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlElipse2 = new FiguraControlador(vistaElipse2, Modelo.Elipse);
*/
var miFactoria = new FactoriaFiguras();

var controlRectangulo = miFactoria.crearFigura({
    id: "padre-Calc-Rectangulo"
});

var controlRectangulo2 = miFactoria.crearFigura({
    id: "padre-Calc-Rectangulo",
    vista: "v2"
});

var controlElipse3 = miFactoria.crearFigura({
    id: "padre-Calc-Elipse",
    vista: "v2",
    modelo: "elipse"
});