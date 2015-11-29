'use strict';
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var SRC_ITEMS = [
        'public/js/data.js',
        'public/js/helpers.js',
        'public/js/myProgressBar.js'
    ];

    grunt.initConfig({
        app:{
            dist : 'public/js/dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '<%= app.dist %>/*'
                        ]
                    }
                ]
            }
        },
        qunit: {
            files : ['test/index.html']
        },
        uglify: {
            build: {
                src: SRC_ITEMS,
                dest: '<%= app.dist %>/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/css/my-progress-bar.css': 'public/css/my-progress-bar.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('minified', [
        'clean:dist',
        'uglify'
    ]);
};
