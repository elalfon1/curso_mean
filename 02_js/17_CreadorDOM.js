function CreadorDOM(){}

CreadorDOM.prototype.addInput = function(padre, texto, nombre) {

	var nuevoTexto = document.createTextNode(texto);
	padre.appendChild(texto);
	
	var nuevoInput = document.createElement("input");
	nuevoInput.setAttribute("type","text");
	nuevoInput.setAttribute("name",nombre);
	nuevoInput.setAttribute("value","0");
	nuevoInput.setAttribute("size","12");
	nuevoInput.setAttribute("maxlength","12");
	
	padre.appendChild(nuevoInput);
	
	return nuevoInput;
}
Calculadora.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
