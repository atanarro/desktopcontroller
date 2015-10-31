/*
 * desktopcontroller
 * https://github.com/atanarro/desktopcontroller
 *
 * Copyright (c) 2015 Alvaro Tanarro
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path');
var jsSrc = [
    '**/*.js',
    '!e2e/**',
    '!**/node_modules/**',
    '!**/bower_components/**'
];
module.exports = function(grunt) {
    grunt.initConfig({
        jscs: {
            src: jsSrc,
            options: {
                config: '.jscsrc',
                fix: true,
                verbose: true
            }
        },
        jshint: {
            all: jsSrc,
            options: {
                jshintrc: '.jshintrc'
            }
        },
        appIcons: {
            all: {
                src: 'app/public/assets/icon.svg',
                dest: 'app/public/assets/',
                options: {
                    type: ['all']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-app-icons');

    grunt.registerTask('default', ['appIcons', 'jshint', 'jscs']);
};
