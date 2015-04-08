'use strict';

var express = require('express');
var controller = require('./airport.controller');

var router = express.Router();

router.get('/:term', controller.te);

module.exports = router;