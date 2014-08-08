/**
 * Created by sakthi on 8/7/14.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'models/Users',
    'text!templates/UserListTemplate.html'
], function ($, _, Backbone, Users, userListTemplate) {

    var UserListView = Backbone.View.extend({
        el: '.page',
        render: function () {
            var users = new Users();
            var that = this;
            users.fetch({
                /*how functions can take empty / users objects*/
                success: function (users) {
                    var template = _.template(userListTemplate, {users: users.models});
                    that.$el.html(template);
                }
            })
        }
    });
});