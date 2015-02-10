module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
		        src: [
		            'js/jquery-2.1.0.min.js',
		            'js/plugins/*.js',
		            'js/front/*.js',
		            'js/main.js'
		        ],
		        dest: 'js/prod/htag-packed.js',
		    }
        },
        uglify: {
		    build: {
		        src: 'js/prod/htag-packed.js',
		        dest: 'js/prod/htag-packed.min.js'
		    }
		},
		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'css/prod/htag-front-packed.css': 'css/front/htag-packed.scss',
		            'css/prod/htag-admin-packed.css': 'css/admin/htag-packed.scss'
		        }
		    } 
		},
		watch: {
		    markup: {
		        files: ['*.php','customize/*.php'],
		        tasks: [],
		        options: {
		            spawn: false,
		            livereload: true
		        }
		    },
		    scripts: {
		        files: ['js/*.js','js/front/*.js','js/plugins/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		            livereload: true
		        }
		    },
		    css: {
			    files: ['css/front/*.scss','css/admin/*.scss'],
			    tasks: ['sass'],
			    options: {
			        spawn: false,
			        livereload: true
			    }
			} 
		}

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','uglify','sass','watch']);

};