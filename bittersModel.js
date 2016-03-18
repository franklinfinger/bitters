//individual bitter

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "https://tiny-tiny.herokuapp.com/collections/irule",
  idAttribute: "_id",
  initialize: function(){
    console.log("working");
  }
})
