let funcionAnonimaClasica = function (uno,dos: any){
    return uno + dos;
}

let funcionLambda = (uno: number, dos: number) =>{
    return uno + dos;
}

console.log(funcionAnonimaClasica(4,6));
console.log(funcionLambda(4,6));


const PI = 3.1415927;
//PI = 3434; las constantes no se pueden modificar

let {variable1, variable2} = {variable1: "valor1", variable2: "valor 2"};

let obj = {variable4: "valor4", variable3: "valor3"};
let {variable3, variable4} = obj;


console.log(variable3);



function dameLosCamposPorConsola(campo1: string, campo2: number, ...elRestoDeCampos){
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("Y ahora mostramos todo:");

    for(let indice in elRestoDeCampos){
        console.log("El campo en la pos "+indice+ "\t es "+elRestoDeCampos[indice]+"\n")
    }

    console.log("\nY ahora mostramos todo con for of:");

    for(let valor of elRestoDeCampos){
        console.log(valor+"\n")
    }
}

dameLosCamposPorConsola("Una cadena",5,"aaa",true,32,13,"otra cadena",new Object);