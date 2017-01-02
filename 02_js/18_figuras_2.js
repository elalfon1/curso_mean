
var Figura = function(padreDom){
	
	if(padreDom == undefined) //Porque al hacer el super en los hijos es como si creara un objeto del padre
		return;
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCalc);
	
	this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
	this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
	
	this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
	
}



var Rectangulo = function (padreDom, tipo) {
	
	Figura.call(this, padreDom);
	CreadorDOM.addButton(this, " AREA " + tipo, this.calculaArea);
}

Rectangulo.prototype = new Figura; //Como pongas las funciones encima casca, antes de la herencia

Rectangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value);
}





var Triangulo = function (padreDom, tipo) {
	
	Figura.call(this, padreDom);
	CreadorDOM.addButton(this, " AREA " + tipo, this.calculaArea);
}

Triangulo.prototype = new Figura;

Triangulo.prototype.calculaArea = function() {
	this.resultado.value =   parseInt(this.alto.value) 
						   * parseInt(this.ancho.value) / 2;
}

