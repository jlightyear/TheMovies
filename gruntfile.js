module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['js/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},

			spec: {
				src: 'spec/*Spec.js',
				dest: 'dist/spec/spec.js'
			}
		},

		jasmine: {
			pivotal: {
				src: 'spec/*.js',
				options: {
					specs: 'spec/*Spec.js',
					helpers: 'spec/*Helper.js'
				}
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
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat']);

}