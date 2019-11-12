module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        less: {
            frontEndShibaDev: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets/ui-main-dev.css.map', // where file is generated and located
                    sourceMapURL: 'ui-main-dev.css.map', // the complete url and filename put in the compiled css file
                    sourceMapBasepath: 'stylesheets', // Sets sourcemap base path, defaults to current working directory.
                    sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
                },
                files: {
                    '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets/ui-main-dev.css': '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/less/_ui-main.less',
                }
            },
            frontEndShibaProd: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets/ui-main-prod.css.map', // where file is generated and located
                    sourceMapURL: 'ui-main-prod.css.map', // the complete url and filename put in the compiled css file
                    sourceMapBasepath: 'stylesheets', // Sets sourcemap base path, defaults to current working directory.
                    sourceMapRootpath: '/' // adds this path onto the sourcemap filename and less file paths
                },
                files: {
                    '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets/ui-main-prod.css': '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/less/_ui-main.less',
                }
            },
            frontEndMinpin: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: '/Users/JCuenza/IdeaProjects/repos/minpin/WebContent/css/ui-main.css.map', // where file is generated and located
                    sourceMapURL: 'ui-main.css.map', // the complete url and filename put in the compiled css file
                    sourceMapBasepath: 'css', // Sets sourcemap base path, defaults to current working directory.
                    sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
                },
                files: {
                    '/Users/JCuenza/IdeaProjects/minpin/WebContent/css/ui-main.css': '/Users/JCuenza/IdeaProjects/minpin/WebContent/less/_ui-main.less',
                }
            }
        },
        postcss: {
            dev: {
                options: {
                    map: true, // inline sourcemaps

                    // or
                    map: {
                        inline: false, // save all sourcemaps as separate files...
                        annotation: '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets' // ...to the specified directory
                    },
                    processors: [
                        require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({overrideBrowserslist: 'last 5 versions'}), // add vendor prefixes
                        require('cssnano')() // minify the result
                    ]
                },
                dist: {
                    src: '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets/ui-main-dev.css'
                }
            },
            prod: {
                options: {
                    map: true, // inline sourcemaps

                    // or
                    map: {
                        inline: false, // save all sourcemaps as separate files...
                        annotation: '/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/stylesheets' // ...to the specified directory
                    },
                    processors: [
                        require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({overrideBrowserslist: 'last 5 versions'}), // add vendor prefixes
                        require('cssnano')() // minify the result
                    ]
                },
                dist: {
                    src: '/Users/JCuenza/IdeaProjects/minpin/WebContent/s1/resources/stylesheets/ui-main-prod.css'
                }
            }
        },
        watch: {
            shibaLess: {
                files: ["/Users/JCuenza/IdeaProjects/shiba/build/libs/ROOT/s1/resources/less/**/*.less"], //what to watch?
                tasks: ['less:frontEndShibaDev', 'postcss:dev', 'less:frontEndShibaProd', 'postcss:prod'],
                options: {
                    livereload: true,
                    nospaces: true
                }
            },
            minpinLess: {
                files: ["/Users/JCuenza/IdeaProjects/minpin/WebContent/less/**/*.less"], //what to watch?
                tasks: ['less:frontEndMinpin'],
                options: {
                    livereload: true,
                    nospaces: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
};