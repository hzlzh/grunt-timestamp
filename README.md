## grunt-timestamp [![NPM version](https://badge.fury.io/js/grunt-timestamp.png)](http://badge.fury.io/js/grunt-timestamp) [![devDependency Status](https://david-dm.org/hzlzh/grunt-timestamp/dev-status.png?theme=shields.io)](https://david-dm.org/hzlzh/grunt-timestamp#info=devDependencies)

> Add timestamp & MD5 hash to avoid file cache. (.js/.css files)

**NPM Home Page:** [https://www.npmjs.org/package/grunt-timestamp](https://www.npmjs.org/package/grunt-timestamp)

## Getting Started

This plugin requires Grunt ~0.4.1

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install grunt-timestamp --save-dev
	
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-timestamp');

## The "timestamp" task

In your project's Gruntfile, add a section named timestamp to the data object passed into grunt.initConfig().

```javascript
grunt.initConfig({
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
          // Timestamp type like (time | md5).
          'fileEndStamp': true,
          // Add timestamp at images of CSS style.
          'cssImgStamp': true,
          // Rename file name with timestamp inside.
          'fileNameStamp': true
        }
      }
    }
    })
```

## Release History

* 0.0.6 Add more type like (sha1 | ha256 | sha512)
* 0.0.5 `MD5` string stamp supported
* 0.0.4 Add support to `.js` file
* 0.0.1 First Release

## Coming soon

* Add timestamp at images of CSS style.
* Rename file name with timestamp inside.

## License

[MIT](http://rem.mit-license.org/)
