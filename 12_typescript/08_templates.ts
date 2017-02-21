function invertir<T> (elementos: T[]): T[] {
    let invertido: T[] = [];
    for(let posicion = 0, posicionInvertido = elementos.length -1 ; 
            posicion < elementos.length;
            posicion++,posicionInvertido-- ){
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
let arrayOriginal = ["clientes","clientes2"];
let textosInvertidos :string[] = invertir<string>(arrayOriginal);

console.log("\narrayOriginal "+ arrayOriginal+ "\nTextos invertidos "+textosInvertidos);


let arrayOriginal2 = [11,22,33,44,55];
let arrayInvertidos2 :number[] = invertir<number>(arrayOriginal2);

console.log("\narrayOriginal "+ arrayOriginal2+ "\nNumeros invertidos "+arrayInvertidos2);


class Prueba{
    numero: number;
    cadena: string;

    constructor(numero: number, cadena: string){
        this.numero = numero;
        this.cadena = cadena;
    }

    toString(): string{
        return "Número: "+this.numero+" cadena: "+this.cadena;
    }
}

let arrayOriginalPruebas = [new Prueba(1,"uno"),new Prueba(2,"dos"),new Prueba(3,"tres")];
let arrayInvertidosPruebas :Prueba[] = invertir<Prueba>(arrayOriginalPruebas);

console.log("\arrayOriginalPruebas\n "+ arrayOriginalPruebas+ 
            "\narrayInvertidosPruebas:\n "+arrayInvertidosPruebas);






let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO <T> extends DAOGenerico<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    find(indice: number):T{
        return this.almacen[indice];
    }
    list():T[] {
        return this.almacen;
    }
}

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));*/
