//list view

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var modelView = require('./bittersModelView');

module.exports = Backbone.View.extend({
  el: '.main-page',
  initialize: function (){
    this.addAll();
    this.listenTo(this.collection, "update",
    this.addAll);
  },

  addOne: function(el) {
    var modelView = new bittersModelView({model: el});
    this.$el.append(modelView.render().el);
  },

  addAll: function() {
    this.$el.html('');
    _each(this.collection.model, this.addOne, this);
  }
});
