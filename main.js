var $ = require('jquery');
var Backbone = require('backbone');
var BittersCollection = require('./bittersCollections');
var BittersCollectionView = require('./BittersCollectionView');

$(document).ready(function() {
  new BittersCollection();
})
