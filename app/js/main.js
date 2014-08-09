require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    //baseUrl: "./",
    waitSeconds: 200,
    //enforceDefine: true,

    paths: {
        "jquery": "libs/jquery/jquery",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "templates": "../templates"
    },
    shim: {
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    console.log("$: " + typeof $ + ' version:', $.fn.jquery);
    console.log("_: " + typeof _ + ' version:', _.VERSION);
    console.log("Backbone: " + typeof Backbone + ' version:', Backbone.VERSION);
});


require([
    // Load our app module and pass it to our definition function
    'app', 'backbone'
], function(App, Backbone){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
    Backbone.history.start();

});