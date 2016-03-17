//  all bitters

var Backbone = require('backbone');
var _ = require('underscore');
var bittersModel = require('./bittersModel');

module.exports = Backbone.Collection.extend({
  model: bittersModel,
  url: "https://tiny-tiny.herokuapp.com/collections/irule",
  initialize: function(){
    console.log(this.url);
  }

})
