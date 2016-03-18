// this adds new bitter

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./template');
var BittersModel = require('./bittersModel');
var BittersCollection = require('./bittersCollection')


module.exports = Backbone.View.extend({
  el: ".bitterAdd",
  template: _.template(tmpl.addBitter),
  events: {
    "submit .submitBitter": "addBitter",
  },
  addBitter: function(event) {
    event.preventDefault();
    var newBitter = {
      name: this.$el.find("input[name='name']").val(),
      post: this.$el.find("input[name='bitter']").val()
    });
    var newBitterRant = new BitterModel(newBitter)
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    newBitterRant.save();
   },
  initialize: function() {
    this.model = new BitterModel({});
    this.render();
  },
  render: function() {
    var markup = this.template(this.model.toJSON);
    this.$el.html(markup);
    return this;
  }
});
