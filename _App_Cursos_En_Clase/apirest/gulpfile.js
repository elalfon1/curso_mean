var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


var nodemonOptions = {
    script: 'bin/www',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    verbose: false,
    ignore: [],
    watch: ['bin/*', 'modelo/*', 'routes/*', 'app.js']
};

gulp.task('start', function() {
    nodemon(nodemonOptions)
        .on('restart', function() {
            console.log('restarted!')
        });
});