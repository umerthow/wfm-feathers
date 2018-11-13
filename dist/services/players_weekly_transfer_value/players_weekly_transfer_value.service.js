'use strict';

// Initializes the `players_weekly_transfer_value` service on path `/players-weekly-transfer-value`
var createService = require('feathers-sequelize');
var createModel = require('../../models/players_weekly_transfer_value.model');
var hooks = require('./players_weekly_transfer_value.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/players-weekly-transfer-value', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('players-weekly-transfer-value');

  service.hooks(hooks);
};