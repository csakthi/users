/**
 * Created by sakthi on 8/7/14.
 */

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var Users = Backbone.Collection.extend({
        url: '/users'
    });
});