'use strict';

// Initializes the `user_teams_staffs` service on path `/user-teams-staffs`
var createService = require('feathers-sequelize');
var createModel = require('../../models/user_teams_staffs.model');
var hooks = require('./user_teams_staffs.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-staffs', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('user-teams-staffs');

  service.hooks(hooks);
};