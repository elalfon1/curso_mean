var Figura = function(padreDom, nombreFigura, funCallBackAlAcabar, funCallBackError) {

    if (typeof padreDom != "undefined" && padreDom != null) {

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
        funCallBackAlAcabar(nombreFigura, "Y LISTO");
    } else {
        if (funCallBackError)
            funCallBackError(nombreFigura);
    }
}

Figura.prototype.metodoCompartido = function(frase) {
    alert("Metodo Compartido " + frase);
}

Figura.ANCHO_DEFECTO = 10; //parecido a variables estaticas y constantes
Figura.Heredar = function(funCalculaArea, nombre, unaFunCallback, unaFunCallbackError) { //parecido a metodos estaticos
    var nombreFun = nombre;
    //var unaFuncion = unaFunCallback;
    var funcionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun, unaFunCallback);
    }

    funcionConstructora.prototype = new Figura(null, null, unaFunCallback, unaFunCallbackError);
    funcionConstructora.prototype.calculaArea = funCalculaArea;

    return funcionConstructora;
}