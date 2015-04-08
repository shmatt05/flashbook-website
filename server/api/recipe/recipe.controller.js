var Promise = require('bluebird'),
    _ = require('lodash'),
    http = require('http');

exports.allRecipes = function(req, res) {
  res.redirect(307, 'http://flashbook-app.appspot.com/api/recipes');
};
