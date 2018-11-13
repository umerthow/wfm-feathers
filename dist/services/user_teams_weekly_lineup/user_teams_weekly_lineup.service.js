'use strict';

// Initializes the `user_teams_weekly_lineup` service on path `/user-teams-weekly-lineup`
var createService = require('feathers-sequelize');
var createModel = require('../../models/user_teams_weekly_lineup.model');
var hooks = require('./user_teams_weekly_lineup.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-weekly-lineup', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('user-teams-weekly-lineup');

  service.hooks(hooks);
};