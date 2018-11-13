'use strict';

// Initializes the `team_formations` service on path `/team-formations`
var createService = require('feathers-sequelize');
var createModel = require('../../models/team_formations.model');
var hooks = require('./team_formations.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/team-formations', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('team-formations');

  service.hooks(hooks);
};