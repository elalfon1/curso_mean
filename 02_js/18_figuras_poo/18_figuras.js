var Figura = function(padreDom, nombreFigura) {

    if (typeof padreDom == "undefined")
        return;
    // Añadimos el FORM al padreDom
    this.formCalc = document.createElement("form");
    padreDom.appendChild(this.formCalc);
    // Y los botones
    this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
    this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
    this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
    // El botón de calcular
    CreadorDOM.addButton(this, " Calcular Área " + nombreFigura, this.calculaArea);
    // Y la caja con el resultado
}

Figura.prototype.metodoCompartido = function(frase) {
    alert("Metodo Compartido " + frase);
}

Figura.ANCHO_DEFECTO = 10; //parecido a variables estaticas y constantes
Figura.Heredar = function(funCalculaArea, nombre) { //parecido a metodos estaticos
        var nombreFun = nombre;
        var funcionConstructora = function(padreDom) {
            Figura.call(this, padreDom, nombreFun);
        }

        funcionConstructora.prototype = new Figura();
        funcionConstructora.prototype.calculaArea = funCalculaArea;
        return funcionConstructora;
    }
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

var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo");
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo");
var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse");


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