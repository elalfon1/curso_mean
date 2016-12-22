
	/*function Calculadora(cajaTexto1, cajaTexto2, cajaResultado, textoOperaciones){
		this.operando1 = cajaTexto1;
		this.operando2 = cajaTexto2;
		this.resultado = cajaResultado;
		this.textoOperaciones = textoOperaciones;
	}*/
	
	function Calculadora(nombreObjeto){
		this.nombreObjeto = nombreObjeto;
	}
	
	Calculadora.prototype.numCalculadoras = 1;
	
	Calculadora.prototype.sumar = function(){
		
		var suma = parseInt(this.operando1.value) + parseInt(this.operando2.value);
		this.resultado.value = suma;
		
		this.mostrarOperacion("+", this.operando1.value, this.operando2.value, suma);
	}
	
	Calculadora.prototype.restar = function(){
		
		var resta = parseInt(this.operando1.value) - parseInt(this.operando2.value);
		this.resultado.value = resta;
		
		this.mostrarOperacion("-", this.operando1.value, this.operando2.value, resta);
	}
	
	Calculadora.prototype.multiplicar = function(){
		
		var multiplicacion = parseInt(this.operando1.value) * parseInt(this.operando2.value);
		this.resultado.value = multiplicacion;
		
		this.mostrarOperacion("*", this.operando1.value, this.operando2.value, multiplicacion);
	}
	
	Calculadora.prototype.dividir = function(){
		
		var division = parseInt(this.operando1.value) / parseInt(this.operando2.value);
		this.resultado.value = division;
		
		this.mostrarOperacion("/", this.operando1.value, this.operando2.value, division);
	}
	
	Calculadora.prototype.mostrarOperacion = function(operador, op1, op2, resultado){
		
		this.textoOperaciones.innerHTML += "<br/>"+op1+" "+operador+" "+op2 + " = "+resultado;
	}
	
	
	Calculadora.prototype.crearInterfaz = function(){
		
		
		
		var body = document.getElementsByTagName("body")[0];
		var form = crearElemento("form", body);
		crearAtributo(form, "name", "calc");
		
		crearElemento("br", form);
		crearElemento("br", form);
		crearElemento("br", form);
		
		crearTexto(form,"Calculadora ("+Calculadora.prototype.numCalculadoras+"): ");
		crearElemento("br", form);
		
		
		crearTexto(form,"Operando 1: ");
		var operando1 = crearElemento("input", form);
		crearAtributo(operando1, "name", "operando1");
		crearAtributo(operando1, "value", "0");
		crearAtributo(operando1, "size", "12");
		crearAtributo(operando1, "type", "text");
		crearElemento("br", form);
		
		crearTexto(form,"Operando 2: ");
		var operando2 = crearElemento("input", form);
		crearAtributo(operando2, "name", "operando2");
		crearAtributo(operando2, "value", "0");
		crearAtributo(operando2, "size", "12");
		crearAtributo(operando2, "type", "text");
		crearElemento("br", form);
		
		var btnSuma = crearElemento("input", form);
		crearAtributo(btnSuma, "value", " + ");
		crearAtributo(btnSuma, "onclick", this.nombreObjeto+".sumar()");
		crearAtributo(btnSuma, "type", "button");
		crearTexto(form, " ");
		
		var btnResta = crearElemento("input", form);
		crearAtributo(btnResta, "value", " - ");
		crearAtributo(btnResta, "onclick", this.nombreObjeto+".restar()");
		crearAtributo(btnResta, "type", "button");
		crearTexto(form, " ");
		
		var btnMultiplicacion = crearElemento("input", form);
		crearAtributo(btnMultiplicacion, "value", " * ");
		crearAtributo(btnMultiplicacion, "onclick", this.nombreObjeto+".multiplicar()");
		crearAtributo(btnMultiplicacion, "type", "button");
		crearTexto(form, " ");
		
		var btnDivision = crearElemento("input", form);
		crearAtributo(btnDivision, "value", " / ");
		crearAtributo(btnDivision, "onclick", this.nombreObjeto+".dividir()");
		crearAtributo(btnDivision, "type", "button");
		
		crearElemento("br", form);
		
		crearTexto(form,"Resultado: ");
		var resultado = crearElemento("input", form);
		crearAtributo(resultado, "name", "resultado");
		crearAtributo(resultado, "value", "0");
		crearAtributo(resultado, "size", "12");
		crearAtributo(resultado, "type", "text");
		
		var div = crearElemento("div", body);
		crearAtributo(div, "id", "texto");
		crearTexto(div, "Operaciones realizadas");
		
		
		
		// Llama a los atributos del objeto, NO del prototipo
		this.operando1 = operando1;
		this.operando2 = operando2;
		this.resultado = resultado;
		this.textoOperaciones = div;
		
		//Aqui llamamos al del prototipo porque está declarado arriba
		Calculadora.prototype.numCalculadoras++;
	}
	