var color = require("bash-color");
var crypto = require('crypto');

module.exports = function(grunt) {

    "use strict";

    // Export the SpriteMaker function
    grunt.registerMultiTask('timestamp', 'Create sprite image with slices and update the CSS file.', function() {

        var that = this,
            done = this.async(),
            log = console.log;

        var options = this.options({
            timestampName: 'Timestamp',
            timestampFormat: 'HH:MM:ss',
            timestampType: 'md5', // time | md5
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
                    destFile = destDir + '/' +fileName + file.orig.ext + fileNameExt,
                    timeString = '',
                    sourcedata = grunt.file.read(sourcedataurl);

                if(options.timestampType == 'time')
                    timeString = grunt.template.today(options.timestampFormat)
                else if(options.timestampType == 'sha1' || 'md5' || 'sha256' || 'sha512')
                    timeString = md5(sourcedata, options.timestampType);
                else
                    log('Please set a valid `timestampType`.')

                if (options.fileEndStamp) {
                    if(fileNameExt == '.css')
                        sourcedata += '.' + options.timestampName + '{content:"' + timeString + '"}';
                    else if(fileNameExt == '.js')
                        sourcedata += '//' + options.timestampName + ' ' + timeString;
                    if (options.consoleLog)
                        grunt.log.writeln(color['green']('Timestamp [Done] ') + fileNameList + ' + ' + color['blue'](timeString));
                }

                if(grunt.file.exists(destFile))
                    grunt.file.delete(destFile,{force: true});
                grunt.file.copy(src, destFile);
                grunt.file.write(destFile, sourcedata);

                callback(false);
            }
        };

        function md5(content, type, encoding) {
            return crypto.createHash(type).update(content, encoding).digest('hex');
        }

        grunt.util.async.forEachSeries(this.files, _addTimestamp, function(err) {
            done();
        });
    });
};