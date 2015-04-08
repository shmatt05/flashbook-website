var Promise = require('bluebird'),
    _ = require('lodash'),
    http = require('http');

var apiBase = 'http://flashbook-app.appspot.com/api';

exports.login = function(req, res) {
  res.redirect(307, apiBase + '/login');
};
