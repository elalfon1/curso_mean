	function crearElemento(tipo, padre){
		var elementoNuevo = document.createElement(tipo);
		padre.appendChild(elementoNuevo);
				
		return elementoNuevo;
	}
	
	function crearAtributo(elemento, clave, valor){
		elemento.setAttribute(clave, valor);
	}
	
	function crearTexto(elemento, texto){
		var elementoTexto = document.createTextNode(texto);
		elemento.appendChild(elementoTexto);
	}