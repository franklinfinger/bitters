var $ = require('jquery');
var Backbone = require('backbone');
var BittersCollection = require('./bittersCollections');
var BittersCollectionView = require('./bittersCollectionsView');

$(document).ready(function() {
  new BittersCollection();
})
