var Promise = require('bluebird'),
    _ = require('lodash'),
    http = require('http');

var apiBase = 'http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=nzPtUZtGWpnYAkC1NGGlNQxjCTMyPVfs&term=';

exports.searchAirports = function(req, res) {
  res.redirect(307, apiBase + req.params.term);
};
