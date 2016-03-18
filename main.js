var $ = require('jquery');
var Backbone = require('backbone');
var BittersCollection = require('./bittersCollections');
var BittersCollectionView = require('./bittersCollectionsView');
var BittersModel = require('./bittersModel');
var BittersModelView = require('./bittersCollectionsView');
var BittersFormView = require('/bittersFormView');

$(document).ready(function() {
  var bittersCol = new BittersCollection();
  bittersCol.fetch().then(function(data){
    var collection = new BitterCollection(data);
    console.log("collection", collection);
    var postMarkup = new BittersCollectionView({collection: collection});
  });
  var bittersFormView = new BittersFormView();
});
