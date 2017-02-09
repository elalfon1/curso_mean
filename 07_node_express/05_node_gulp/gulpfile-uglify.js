//Con ES6
var [gulp, concat, uglify] = [require("gulp"), require("gulp-concat"), require("gulp-uglify")];

//Para crear nuestra tarea
gulp.task("comprime", tareasEnComprimir);

function tareasEnComprimir() {

    //Glob
    var glob = gulp.src("js/source/*.js");

    glob.pipe(concat("funciones.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("js/build/"));
}