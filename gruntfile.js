module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			js: {
				src: ['js/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},

			css: {
				src: ['css/*.css'],
				dest: 'dist/<%= pkg.name %>.css'
			}
		},

		watch: {
			source: {
				files: ['*.js', 'spec/*.js'],
				tasks: ['jasmine'],
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat']);

}