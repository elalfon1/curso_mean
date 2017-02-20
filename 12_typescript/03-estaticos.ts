class Persona2{
    nombre: string;
    apellido1: string;
    apellido2: string;
    static totalPersonas: number = 0; //No inicializa valores por defecto
    static ultimaPersona: Persona2 = null;

    constructor(nombre: string, apellido1: string, apellido2: string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        Persona2.totalPersonas++;
        Persona2.ultimaPersona = this;
    }

    toString() : string{
        return this.nombre + " "+ this.apellido1 + " " + this.apellido2;
    }
}

let alfonselDoble = new Persona2("Alfonso", "Cuadrado", "Rosado");
let jperezDoble = new Persona2("José Manuel", "Pérez", "Lobato");
let rmanjava = new Persona2("Rafa", "Manjavacas", "");
//console.log(alfonselDoble.stringify());

alfonselDoble.nombre = "Nuevo nombre";

console.log(" totalPersonas "+Persona2.totalPersonas);
console.log(" ultima persona "+Persona2.ultimaPersona);
