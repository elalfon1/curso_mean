module.exports = function(grunt) {
    var configuracionGrunt = {
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: 'build/scripts',
                    cwd: 'public_html/app',
                    ext: '.min.js' //los ignora
                }]
            }
        }
    };

    grunt.initConfig(configuracionGrunt);
    grunt.loadNpmTasks("grunt-contrib-uglify");
    //grunt.loadNpmTasks("grunt-contrib-watch");

    //grunt.registerTask("default", ["uglify"]);
    grunt.registerTask("comprime", ["uglify"]);
    //grunt.registerTask("default", ["watch"]);
}