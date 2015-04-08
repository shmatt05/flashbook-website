var Promise = require('bluebird'),
    _ = require('lodash'),
    http = require('http');

var apiBase = 'http://flashbook-app.appspot.com/api';

exports.allRecipes = function(req, res) {
  res.redirect(307, apiBase + '/recipe/all');
};

exports.inserRecipe = function(req, res) {
  res.redirect(307, apiBase + '/recipe/all');
};

exports.updateRecipe = function(req, res) {
  res.redirect(307, apiBase + '/recipe/'+req.params.id);
};
