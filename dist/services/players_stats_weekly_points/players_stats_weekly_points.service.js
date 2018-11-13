'use strict';

// Initializes the `players_stats_weekly_points` service on path `/players-stats-weekly-points`
var createService = require('feathers-sequelize');
var createModel = require('../../models/players_stats_weekly_points.model');
var hooks = require('./players_stats_weekly_points.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/players-stats-weekly-points', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('players-stats-weekly-points');

  service.hooks(hooks);
};