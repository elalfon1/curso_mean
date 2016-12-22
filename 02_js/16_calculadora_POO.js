
	function Calculadora(cajaTexto1, cajaTexto2, cajaResultado, textoOperaciones){
		this.operando1 = cajaTexto1;
		this.operando2 = cajaTexto2;
		this.resultado = cajaResultado;
		this.textoOperaciones = textoOperaciones;
	}
	
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
