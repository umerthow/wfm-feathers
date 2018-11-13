'use strict';

// Initializes the `stats_points` service on path `/stats-points`
var createService = require('feathers-sequelize');
var createModel = require('../../models/stats_points.model');
var hooks = require('./stats_points.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/stats-points', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('stats-points');

  service.hooks(hooks);
};