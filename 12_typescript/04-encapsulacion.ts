class Padre{
    private propPrivada: number = 0;
    public propPublica: number = 0;
    protected propProtegida: number = 0;

    damePropPrivada(): number{
        return this.propPrivada;
    }

    setPropPrivada(valor: number): void{
        if(valor > 0 && valor < 100)
            this.propPrivada = valor;
    }

    toString(): string{
        return "padre "+ this.propPrivada + this.propPublica+this.propProtegida;
    }
}

let tuPadre: Padre = new Padre();
//tuPadre.propPrivada = 5; Como en JAVA, que decir...
tuPadre.setPropPrivada(50); // Como en JAVA, que decir...

tuPadre.propPublica = 24;



class HijoDePadre extends Padre{
    
    constructor(otroValor: number){
        super();
        //this.propPrivada = 57; Como en JAVA, que decir...
        this.propPublica = 23; // Como en JAVA, que decir...
        this.propProtegida = 67; // 'protected' en las clases que extienden si, pero fuera no
    }

    toString(): string{
        return "hijo "+ this.propPublica+this.propProtegida;
    }
}

let tuHijoSiTienes: HijoDePadre = new HijoDePadre(30);
//tuHijoSiTienes.propProtegida = 45; // 'protected' en las clases que extienden si, pero fuera no

let otroHijo : Padre = new HijoDePadre(70);
console.log(otroHijo.toString());
console.log(otroHijo.constructor.name); //devuelve la clase a la que es
/*
class Nieto extends HijoDePadre{
    constructor(valorNieto: number, valorNieto2: number){
        super(valorNieto);
        //this.propPrivada = 57; Como en JAVA, que decir...
        this.propPublica = 23; // Como en JAVA, que decir...
        this.propProtegida = valorNieto2; // 'protected' en las clases que extienden si, pero fuera no
    }
}*/