'use strict';

// Initializes the `countries` service on path `/countries`
var createService = require('feathers-sequelize');
var createModel = require('../../models/countries.model');
var hooks = require('./countries.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/countries', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('countries');

  service.hooks(hooks);
};