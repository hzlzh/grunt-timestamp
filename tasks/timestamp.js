var color = require("bash-color");

module.exports = function(grunt) {

    "use strict";

    // Export the SpriteMaker function
    grunt.registerMultiTask('timestamp', 'Create sprite image with slices and update the CSS file.', function() {

        var that = this,
            done = this.async(),
            log = console.log;

        var options = this.options({
            timestampFormat: 'HH:MM:ss',
            timestampName: 'Timestamp',
            fileEndStamp: false,
            cssImgStamp: false,
            fileNameStamp: false,
            consoleLog: true
        });
        // init bash color
        options.color = "purple";

        var hasDelete = false;

        var _addTimestamp = function(file, callback) {
            if (file == null) {

            } else {
                var destDir = file.orig.dest,
                    src = file.src[0],
                    sourcedataurl = src,
                    regex = new RegExp('\\/?([^.\\/]*)\\..*', 'ig'),
                    regexExt = new RegExp('(\\.\\w+)$', 'ig'),
                    fileNameList = src.match(regex),
                    fileNameExt = src.match(regexExt),
                    fileName = fileNameList[0].replace(regex, '$1'),
                    destFile = destDir + fileName + file.orig.ext + fileNameExt,
                    timeVar = grunt.template.today(options.timestampFormat),
                    sourcedata = grunt.file.read(sourcedataurl);

                if (options.fileEndStamp) {
                    sourcedata += '.' + options.timestampName + '{content:"' + timeVar + '"}';
                    if (options.consoleLog)
                        grunt.log.writeln(color['green']('Timestamp [Done] ') + color[options.color](fileNameList));
                }

                log('xxxx');

                grunt.file.delete(destFile,{force: true});
                grunt.file.copy(src, destFile);
                grunt.file.write(destFile, sourcedata);

                callback(false);
            }
        };

        grunt.util.async.forEachSeries(this.files, _addTimestamp, function(err) {
            done();
        });
    });
};