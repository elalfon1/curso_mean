let variable = 2017;
let num : number;
let bool : boolean;
let cadena : string;

//variable = "una cadena"; Dará error
bool = true;

cadena = "una cadena que si";
console.log(cadena);

let miUnion: number | string; //Permite ambos tipos
miUnion = "Puede ser cadena";
//o numero
miUnion = 12;

//miUnion = false; //No puede ser de un tipo no declarado

interface Tiempo{
    dia: number,
    mes: number,
    anio: number
}

var miCumple: Tiempo = {dia: 28, mes: 7, anio: 1990};
console.log(miCumple.dia+"/"+miCumple.mes+"/"+miCumple.anio);

let variableCualquierCosa: any; //Recibe cualquier tipo
variableCualquierCosa = "kajaj";
variableCualquierCosa = 58;

function concatenar(texto1: string, texto2: string){
    let resultado: string = texto1 + texto2;
    return resultado;
}

console.log(concatenar("aeee","bbbbb"));

function cumplirAnio(fecha: Tiempo){
    fecha.anio ++;
    
}

cumplirAnio(miCumple);
console.log(miCumple.dia+"/"+miCumple.mes+"/"+miCumple.anio);


function recibeEnumerado(param: "cadena 1" | "cadena 2" | "cadena 3"){
    console.log(param);
}

recibeEnumerado("cadena 2");
//recibeEnumerado("cadena 4"); no cumple ninguno de los enumerados