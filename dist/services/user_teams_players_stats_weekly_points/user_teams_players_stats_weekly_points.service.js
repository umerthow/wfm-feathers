'use strict';

// Initializes the `user_teams_players_stats_weekly_points` service on path `/user-teams-players-stats-wee`
var createService = require('feathers-sequelize');
var createModel = require('../../models/user_teams_players_stats_weekly_points.model');
var hooks = require('./user_teams_players_stats_weekly_points.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-players-stats-weekly-points', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('user-teams-players-stats-weekly-points');

  service.hooks(hooks);
};