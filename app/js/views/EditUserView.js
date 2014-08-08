/**
 * Created by sakthi on 8/7/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/User',
    'text!templates/EditUserTemplate.html'
], function ($, _, Backbone, editUserTemplate) {

    var EditUserView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            var that = this;
            if (options.id) {
                that.user = new User({id: options.id});
                console.log("Fetching user object for id=" + options.id);
                //GET users/:id
                that.user.fetch({
                    success: function (user) {
                        console.log("Received user object from server id=" + user['id']);
                        console.log("Received user object from server id=" + user.get('firstname'));
                        var template = _.template($('#edit-user-template').html(), {user: user});
                        that.$el.html(template);
                    }
                })
            }
            else {
                var template = _.template($('#edit-user-template').html(), {user: null});
                this.$el.html(template);
            }
        },
        <!-- handles form submission through events , calls the saveUser function below -->
        events: {
            <!-- submit is the event, edit-user-form is the form -->
            <!-- TODO why submit.edit-user-form without space after submit did not work? -->
            'submit .edit-user-form': 'saveUser',
            'click .delete': 'deleteUser'
        },
        <!-- POST the userDetails objects to the server -->
        saveUser: function (ev) {
            var userDetails = $(ev.currentTarget).serializeObject();
            console.log(userDetails);
            var user = new User();
            <!-- backbone knows to automatically POST to /users url to save -->
            user.save(userDetails, {
                success: function (user) {
                    console.log(user.toJSON());
                    <!-- navigate to home page -->
                    <!-- navigate saves the state only, trigger to explicitly navigate -->
                    router.navigate('', {trigger: true});
                }
            });
            <!-- return false to stop the browsers default behaviour -->
            return false;
        },

        <!-- DELETE Request -->
        deleteUser: function (ev) {
            <!-- TODO how this user object available in this function -->
            this.user.destroy({
                success: function () {
                    router.navigate('', {trigger: true});
                }
            });
            <!-- return false to stop the browsers default behaviour -->
            return false;
        }
    });
    return EditUserView;
});