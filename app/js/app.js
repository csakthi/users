/**
 * Created by sakthi on 8/7/14.
 */
// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'views/EditUserView',
    'views/UserListView'
], function($, _, Backbone, Router, EditUserView, UserListView ){

    var initialize = function() {
        // Pass in our Router module and call it's initialize function
        var router = new Router();
        window.Router = router;
//        <!-- activated for home (index.html) in the URL -->
        router.on('route:home', function () {
            console.log("hey! home page");
            console.log(UserListView);
            var userListView = new UserListView();
            userListView.render();
        });

//        <!-- activated for url "#/new" in the URL -->
//        <!-- id field is bind automatically if edit with id present in the url -->
//        <!-- for url #new, id field will be undefined -->
        router.on('route:editUser', function (id) {
            <!-- renders the edit user form-->
            console.log("hey! edit user form");
            var editUserView = new EditUserView();
            editUserView.render({id: id});
        });
    }
    return {initialize : initialize}
});
