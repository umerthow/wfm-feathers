'use strict';

// Initializes the `player_categories` service on path `/player-categories`
var createService = require('feathers-sequelize');
var createModel = require('../../models/player_categories.model');
var hooks = require('./player_categories.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/player-categories', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('player-categories');

  service.hooks(hooks);
};