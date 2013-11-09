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

		uglify: {	
		    js: {
		      files: {
		        'dist/<%= pkg.name %>.min.js': 'dist/*.js'
		      }
		    }
		  },

		watch: {
			source: {
				files: ['js/*.js', 'css/*.css', 'index.html'],
				tasks: ['concat', 'uglify'],
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify']);

}