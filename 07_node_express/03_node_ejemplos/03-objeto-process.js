//Pedimos la memoria usada
let mem = process.memoryUsage();

//Calcularlo en KB
let memKB = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024)
};

console.log(memKB);

//process.exit(1);//salir del programa

//cambiar de directorio (con / de linux)
process.chdir("C:/");

//Directorio de trabajo
console.log("Directorio: " + process.cwd());