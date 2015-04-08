'use strict';

var express = require('express');
var controller = require('./recipe.controller');

var router = express.Router();

router.get('/all', controller.allRecipes);
router.post('/all', controller.inserRecipe);
router.put('/:id', controller.updateRecipe);

module.exports = router;