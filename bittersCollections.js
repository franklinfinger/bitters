//  all bitters

var Backbone = require('backbone');
var BittersModel = require('./bittersModel');


module.exports = Backbone.Collection.extend({
  model: bittersModel,
  url: "https://tiny-tiny.herokuapp.com/collections/irule",
  initialize: function(){
    console.log("working");
  }

})
