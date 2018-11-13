'use strict';

// Initializes the `teams` service on path `/teams`
var createService = require('feathers-sequelize');
var createModel = require('../../models/teams.model');
var hooks = require('./teams.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/teams', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('teams');

  service.hooks(hooks);
};