class Persona{
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    // o tipo void o any
    stringify() : string{
        return this.nombre + " "+ this.apellido1 + " " + this.apellido2;
    }
}

let alfonsel = new Persona("Alfonso", "Cuadrado", "Rosado");
let jperez = new Persona("José Manuel", "Pérez", "Lobato");
console.log(alfonsel.stringify());
console.log(jperez.stringify());


class Ciudadano extends Persona{
    identidad: string;

    constructor(nombre: string = "", apellido1: string = "", apellido2: string = "", identidad: string = "ninguna"){
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    //Otro constructor que reciba solo identidad, y el resto a nulo

    //Sobreescribir la funcion stringify

    stringify():string{
        return super.stringify() + " "+this.identidad;
    }
}

let ciudadano: Ciudadano = new Ciudadano("Nombre","Apellido1");
console.log(ciudadano.stringify());

// let persona: Persona;
// persona = new Ciudadano();

// let ciudadano2: Ciudadano;
//ciudadano2 = new Persona("a","b","c"); Como en JAVA