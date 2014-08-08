/**
 * Created by sakthi on 8/7/14.
 */

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var User = Backbone.Model.extend({
        urlRoot: '/users'
    });
});