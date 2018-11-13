'use strict';

// Initializes the `seasons` service on path `/seasons`
var createService = require('feathers-sequelize');
var createModel = require('../../models/seasons.model');
var hooks = require('./seasons.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/seasons', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('seasons');

  service.hooks(hooks);
};