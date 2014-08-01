module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        copy: {
            build: {
                files: [
                    {src: 'src/index.html', dest: 'build/index.html'}
                ]
            }
        },

        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['src/index.html']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('phtml', 'Process html partials files into index.html file', ['processhtml']);

}
