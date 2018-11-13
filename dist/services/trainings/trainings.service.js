'use strict';

// Initializes the `trainings` service on path `/trainings`
var createService = require('feathers-sequelize');
var createModel = require('../../models/trainings.model');
var hooks = require('./trainings.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/trainings', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('trainings');

  service.hooks(hooks);
};