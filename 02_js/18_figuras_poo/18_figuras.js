/*
var Rectangulo = function(padreDom) {
    Figura.call(this, padreDom);
}
Rectangulo.prototype = new Figura();

Rectangulo.prototype.calculaArea = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
}

var Triangulo = function(padreDom) {
    Figura.call(this, padreDom);
}
Triangulo.prototype = new Figura();

Triangulo.prototype.calculaArea = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
}

var Elipse = function(padreDom) {
    Figura.call(this, padreDom);
}
Elipse.prototype = new Figura();

Elipse.prototype.calculaArea = function() {
    this.resultado.value = (parseInt(this.alto.value)/2 *
        parseInt(this.ancho.value) / 2) * Math.PI;
}*/



calculaAreaRectangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.metodoCompartido("AAAA");
}

calculaAreaTriangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.metodoCompartido("EEEE");
}

calculaAreaElipse = function() {
    this.resultado.value = (parseInt(this.alto.value) / 2 *
        parseInt(this.ancho.value) / 2) * Math.PI;
    this.metodoCompartido("OOOO");
}

cbFiguraCreada = function(mensaje1, mensaje2) {
    alert("He creado \n" + mensaje1 + " - " + mensaje2);
}

cbError = function(mensaje1) {
    alert("Ha fallado " + mensaje1);
}

var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo", cbFiguraCreada);
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo",
    function(test) {
        alert("Cuando el " + test + " vuela bajo hace un frio del carajo");
    }, cbError
);
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse", cbFiguraCreada);


/*
var Trapecio = function(padreDom) {
    Figura.call(this, padreDom);
    this.baseMayor = CreadorDOM.addInput(this.formCalc, "Base Mayor", "base_mayor");

}
Trapecio.prototype = new Figura();

Trapecio.prototype.calculaArea = function() {
    this.resultado.value = ((parseInt(this.ancho.value) + parseInt(this.baseMayor.value)) / 2) *
        parseInt(this.alto.value);
}*/