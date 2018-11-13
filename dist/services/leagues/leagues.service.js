'use strict';

// Initializes the `leagues` service on path `/leagues`
var createService = require('feathers-sequelize');
var createModel = require('../../models/leagues.model');
var hooks = require('./leagues.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/leagues', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('leagues');

  service.hooks(hooks);
};