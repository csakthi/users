/**
 * Created by sakthi on 8/8/14.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },
        connect: {
            options: {
                port: 8080,
                hostname: 'localhost'
            },
            test: {
                options: {
                    debug: false,
                    // keepalive:true,
                    middleware: function(connect) {
                        return[
                            modRewrite([
                                '^/api/(.*)$ http://localhost:9999/$1 [P]'
                                ,'!\\.html|\\.hbs|\\.js|\\.css|\\.scss|\\.swf|\\.jp(e?)g|\\.png|\\.gif|\\.svg|\\.eot|\\.ttf|\\.woff$ /index.html'
                            ]),
                            mountFolder(connect, './dist/')
                        ];
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};