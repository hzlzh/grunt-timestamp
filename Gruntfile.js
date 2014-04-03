/*
 * grunt-timestamp
 * https://github.com/hzlzh/grunt-timestamp
 *
 * Copyright (c) 2013 hzlzh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // init.
  grunt.initConfig({

    // 自动雪碧图
    timestamp: {
      default: {
        files: [{
          // Use dynamic extend name
          expand: true,
          // Open source dir
          cwd: 'test/fixtures',
          // Match files
          src: ['*.css', '*.js'],
          // Output files
          dest: 'test/tmp/',
          // Set extend middle name
          ext: '.timestamp'
        }],
        options: {
          // Timestamp display text
          'timestampName': 'Timetamp',
          // Date format
          'timestampFormat': 'yyyy/mm/dd HH:MM:ss',
          // Add timestamp at the end of the files' content(.css/.js).
          'timestampType': 'md5',
          // Timestamp type like (time | md5/sha1/sha256/sha512).
          'fileEndStamp': true,
          // Add timestamp at images of CSS style.
          'cssImgStamp': true,
          // Rename file name with timestamp inside.
          'fileNameStamp': true
        }
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // load task
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'timestamp', 'nodeunit']);
  // rename
  grunt.registerTask('default', ['test']);
};