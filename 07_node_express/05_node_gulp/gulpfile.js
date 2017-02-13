//Con ES6
var [gulp, concat, uglify, watch] = [
    require("gulp"), require("gulp-concat"), require("gulp-uglify"), require("gulp-uglify")
];

//Para crear nuestra tarea
gulp.task("comprime", tareasEnComprimir);
gulp.task("watch", tareasEnWatch);

function tareasEnWatch() {

    gulp.watch("js/source/*.js", tareasEnComprimir);

}

function tareasEnComprimir(fichero) {
    var glob = gulp.src("js/source/*.js");

    glob.pipe(concat("funciones.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("js/build/"));

    if (typeof fichero != "function")
        console.log("Ejecuto porque se modificó: " + fichero.path);
}