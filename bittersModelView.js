var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('/templates');

model.exports = Backbone.View.extend({
  model: null,
  className: ".main-page",
  template: _.template(tmpl.bitter),
  templateEdit: _.template(tmpl.editBitter),
  events: {
    "click .delete": "removeBitter",
    "click .showEdit": "toggleEdit",
    "click .editMovie": "editBitter"
  },
  editBitter: function(event){
    event.preventDefault();
    //.set will change only the things you choose to change
    this.model.set({
      title: this.$el.find(".editBitter").val(),
    });
  },
  toggleEdit: function(event){
    console.log("WHAT IS THIS", this);
    this.$el.append(this.templateEdit(this.model.toJSON()));
  },
  removeBitter: function () {
    this.model.destroy();
  },
  // alertMe: function(event){
  //   alert(this.model.toJSON().title);
  // },
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
