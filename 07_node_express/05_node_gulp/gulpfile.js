var gulp = require('gulp'),
    javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.task("ofuscar", tareasEnOfuscar);
gulp.task("default", ["ofuscar"]);

function tareasEnOfuscar() {
    gulp.src('file.js')
        .pipe(javascriptObfuscator({
            compact: true,
            sourceMap: true
        }))
        .pipe(gulp.dest('dist'));
}