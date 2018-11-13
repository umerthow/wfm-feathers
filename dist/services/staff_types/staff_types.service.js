'use strict';

// Initializes the `staff_types` service on path `/staff-types`
var createService = require('feathers-sequelize');
var createModel = require('../../models/staff_types.model');
var hooks = require('./staff_types.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/staff-types', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('staff-types');

  service.hooks(hooks);
};