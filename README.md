## grunt-timestamp [![NPM version](https://badge.fury.io/js/grunt-timestamp.png)](http://badge.fury.io/js/grunt-timestamp)

> add timestamp to avoid the cache

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
## License

[MIT](http://rem.mit-license.org/)









		
