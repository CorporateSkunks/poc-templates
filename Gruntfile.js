var grunt = require("grunt");

grunt.loadNpmTasks('grunt-mustache-precompile');

grunt.loadNpmTasks('grunt-contrib-hogan');

grunt.initConfig({
    hogan: {
        options: {
            namespace: "tpl.patterns",
            defaultName: function(filename) {
                return "" + filename.match(/([^\/]+)(?=\.\w+$)/)[0];
            }
        },
        patterns: {
            files: {
                'public/patterns.js': ['templates/patterns/*.mustache']
            }
        }
    }
});

grunt.registerTask('default', 'Default task', 'hogan:patterns');