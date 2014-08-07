requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "./",
    waitSeconds: 200,
    //enforceDefine: true,

    paths: {
        "jquery": "libs/jquery/jquery",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone"
    },
    shim: {
        "underscore": {
            deps: [],
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


require([  ],
    function () {
        'use strict';
        console.log("setting jquery, underscore and other libraries");
        window.$ = require('jquery');
        window._ = require('underscore');
        window.Backbone = require('backbone');
    }
);