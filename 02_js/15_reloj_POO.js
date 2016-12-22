	
	// Funcion que, por su estructura interna, es un constructor. 
	// Será solo un constructor cuando se le llame con new
	function NuestroReloj(cajaTexto){ 
		// Mediante this, vamos creando los atributos y métodos propios a este objeto
		// Las funciones creadas aqui se repetiran una vez por cada objeto
		
		this.timerID = null;
		// Valen las 2 maneras de crear un atributo, con . o como diccionario clave valor
		
		this["timerFuncionando"] = false; //Como el anterior
		
		// Los parametros se pueden usar como en un constructor de otro lenguaje
		// o como queramos
		this.cajaTexto = cajaTexto;
		
		// Los atributos del prototype serían como los atributos "estaticos" de otros lenguajes
		// hay uno para todos los objetos de este tipo (NuestroReloj)
		if(typeof NuestroReloj.prototype.listaRelojes == "undefined") 
			// Hasta que no se iniciliza, su valor es undefined
			NuestroReloj.prototype.listaRelojes = new Array();
		
		// La longitud del array se usa como id
		this.idReloj = this.listaRelojes.length;
	
		// A los atributos del prototype se pueden acceder igual por cada objeto,
		// pero referencian todos al mismo.
		// NuestroReloj.prototype.listaRelojes === this.listaRelojes.length
		NuestroReloj.prototype.listaRelojes.push(this); //Añade al array el objeto
		
		// Por defecto cuando se llama con new, se devuelve el objeto creado.
		// return this; 
		
		// Si devolvemos otra cosa, ya no se devuelve el this, si no esa otra cosa
		// var otroObj = new Object();
		// return otroObj;
	}
	
	
	NuestroReloj.prototype.pararReloj = function (){
		if(this.timerFuncionando){
			clearTimeout(this.timerID); //Para la ejecucion del hilo de timeout
		}
		this.timerFuncionando = false;
	}
	

	NuestroReloj.prototype.comenzarReloj = function (){
		// Con this llamamos a otros metodos del objeto	
		this.pararReloj();
		this.mostrarFechaHora(this);
	}
	
	NuestroReloj.prototype.mostrarFechaHora = function (){
	
		var ahora = new Date();
		var valorHora = "" + ahora.getHours() + ":" + ahora.getMinutes() + ":"+ahora.getSeconds() +
							" (" + this.idReloj + ")";
		
		this.cajaTexto.value = valorHora;
		
		// Llamamos al metodo mostrarFechaHora del elemento cuyo id es el mio, por que el idReloj
		// corresponde con el indice del array
		this.timerID = setTimeout("NuestroReloj.prototype.listaRelojes["+this.idReloj+"]"+
											".mostrarFechaHora()",1000); //solo llama una vez con setTimeout, 
								//Ejecuto el mostrar hora de su objeto correspondiente
	
		this.timerFuncionando = true;
	
	}