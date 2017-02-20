abstract class Geometria {
    static totalGeometrias: number = 0;
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
        Geometria.totalGeometrias++;
    }

    abstract calculaArea():number;
}

class Triangulo extends Geometria{

    calculaArea(): number{
        return (this.base * this.altura)*2;
    }
}

class Rectangulo extends Geometria{

    calculaArea(): number{
        return (this.base * this.altura);
    }
}


function main(){
    let triangulo: Geometria, rectangulo: Geometria;

    triangulo = new Triangulo(5,6);
    rectangulo = new Rectangulo(5,6);

    console.log("Area de triangulo "+triangulo.calculaArea());
    console.log("Area de rectangulo "+rectangulo.calculaArea());
}

main();