'use strict';
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/css/my-progress-bar.css': 'public/css/my-progress-bar.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');


};
