'use strict';

// Initializes the `staffs` service on path `/staffs`
var createService = require('feathers-sequelize');
var createModel = require('../../models/staffs.model');
var hooks = require('./staffs.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/staffs', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('staffs');

  service.hooks(hooks);
};