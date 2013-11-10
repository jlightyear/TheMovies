module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ["public/"],

		concat: {
			options: {
				separator: ';'
			},

			js: {
				src: ['js/*.js'],
				dest: 'public/js/<%= pkg.name %>.js'
			}
		},

		copy: {
		  main: {
		    files: [
		      {expand: true, src: ['images/*'], dest: 'public/', filter: 'isFile'},
		      {expand: true, src: ['css/**'], dest: 'public/', filter: 'isFile'},
		      {expand: true, src: ['index.html'], dest: 'public/'},
          {src: ['bower_components/quojs/quo.js'], dest: 'public/js/quo.js'}
		    ]
		  }
		},

		uglify: {	
		    js: {
		      files: {
		        'public/js/<%= pkg.name %>.min.js': 'public/js/*.js'
		      }
		    }
		  },

		watch: {
			source: {
				files: ['js/*.js', 'css/*.css', 'index.html'],
				tasks: ['clean', 'concat', 'uglify', 'copy']
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy']);

}