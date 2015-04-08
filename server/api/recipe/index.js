'use strict';

var express = require('express');
var controller = require('./recipe.controller');

var router = express.Router();

router.post('/all', controller.allRecipes);


module.exports = router;