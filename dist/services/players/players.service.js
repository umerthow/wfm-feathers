'use strict';

// Initializes the `players` service on path `/players`
var createService = require('feathers-sequelize');
var createModel = require('../../models/players.model');
var hooks = require('./players.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/players', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('players');

  service.hooks(hooks);
};