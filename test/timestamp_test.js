'use strict';

var grunt = require('grunt');

exports.timestamp = {
  main: function(test) {
    test.expect(1);

    var expect = grunt.file.read('test/expected/test.js');
    var result = grunt.file.read('test/tmp/test.timestamp.js');
    
    test.equal(expect, result, 'should concat and minify an array of css files in order using clean-css');

    test.done();
  }
};