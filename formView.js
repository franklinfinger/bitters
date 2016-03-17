// this adds new bitter

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('/templates');


model.exports = Backbone.View.extend({
  collection: null,
  model: null,
  el: ".form",
  template: _.template(tmpl.addBitter),
  events: {
    "submit form": "addBitter"
  },
  addBitter: function(event) {
    event.preventDefault();
    this.model.set({
      name: this.$el.find("input[name='name']").val(),
      bitter: this.$el.find("input[name='bitter']").val(),

    });
    this.$el.find("input").val(""),
    this.$el.find("textarea").val(""),
    this.collection.add(this.model);
    console.log(this.collection);
    this.model = new BitterModelView({});
  },
  initialize: function() {
    if(!this.model) {
      this.model= new BitterModelView({});
    }
    this.render();
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});