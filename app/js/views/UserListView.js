/**
 * Created by sakthi on 8/7/14.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/Users',
    'text!templates/UserListTemplate.html'
], function ($, _, Backbone, Users, UserListTemplate) {

    var UserListView = Backbone.View.extend({
        el: '.page',
        render: function () {
            var users = new Users();
            var that = this;
            users.fetch({
                /*how functions can take empty / users objects*/
                success: function (users) {
                    var template = _.template(UserListTemplate, {users: users.models});
                    that.$el.html(template);
                }
            })
        }
    });
    return UserListView;
});