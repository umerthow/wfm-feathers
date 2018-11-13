'use strict';

// Initializes the `staff_categories` service on path `/staff-categories`
var createService = require('feathers-sequelize');
var createModel = require('../../models/staff_categories.model');
var hooks = require('./staff_categories.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/staff-categories', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('staff-categories');

  service.hooks(hooks);
};