class Silla{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    toString():string{
        return this.nombre;
    }
}

class Sofa{
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    toString():string{
        return this.nombre;
    }
}


abstract class DAOGenerico2 <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    abstract update(indice:number, objeto:T);
    abstract list():T[];
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO2 <T> extends DAOGenerico2<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    update(index:number, obj: T){
        this.almacen[index] = obj;
    }
    find(indice: number):T{
        return this.almacen[indice];
    }
    list():T[] {
        return this.almacen;
    }
}

var daoSilla: DAOGenerico2<Silla> = new ArrayGenericDAO2<Silla>();
var daoSofa: DAOGenerico2<Sofa> = new ArrayGenericDAO2<Sofa>();

daoSilla.add(new Silla("Silla 1"));
daoSilla.add(new Silla("Silla 2"));

daoSofa.add(new Sofa("Sofa 1"));
daoSofa.add(new Sofa("Sofa 2"));

console.log("daoSilla: "+daoSilla.list()+"\ndaoSofa: "+daoSofa.list());

daoSilla.update(1,new Silla("Silla cambiada 2"));
daoSofa.update(0,new Sofa("Sofa cambiado 1"));

console.log("daoSilla(cambiado): "+daoSilla.list()+"\ndaoSofa(cambiado): "+daoSofa.list());
