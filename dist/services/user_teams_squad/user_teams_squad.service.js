'use strict';

// Initializes the `user_teams_squad` service on path `/user-teams-squad`
var createService = require('feathers-sequelize');
var createModel = require('../../models/user_teams_squad.model');
var hooks = require('./user_teams_squad.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-squad', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('user-teams-squad');

  service.hooks(hooks);
};