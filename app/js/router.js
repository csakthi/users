/**
 * Created by sakthi on 8/7/14.
 */
<!-- backbone listen to the url change and renders views -->

define([
    'jquery',
    'underscore',
    'backbone',
    'views/EditUserView',
    'views/UserListView'
], function ($, _, Backbone, EditUserView, UserListView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'new': 'editUser',
            'edit/:id': 'editUser'
        }
    });

    <!-- to help calling the endpoint in other server than originating server -->
    <!-- if your end point is in the same server, you do not need it -->
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });

    <!-- this is serialize form data -->
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var initialize = function () {

        var router = new Router();

        <!-- activated for home (index.html) in the URL -->
        router.on('route:home', function () {
            console.log("hey! home page");
            console.log(UserListView);
            UserListView.render();
        });

        <!-- activated for url "#/new" in the URL -->
        <!-- id field is bind automatically if edit with id present in the url -->
        <!-- for url #new, id field will be undefined -->
        router.on('route:editUser', function (id) {
            <!-- renders the edit user form-->
            console.log("hey! edit user form");
            editUserView.render({id: id});
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };

});