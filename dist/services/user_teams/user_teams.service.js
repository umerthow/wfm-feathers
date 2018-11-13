'use strict';

// Initializes the `user_teams` service on path `/user-teams`
var createService = require('feathers-sequelize');
var createModel = require('../../models/user_teams.model');
var hooks = require('./user_teams.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('user-teams');

  service.hooks(hooks);
};