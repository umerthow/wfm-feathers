'use strict';

// Initializes the `settings` service on path `/settings`
var createService = require('feathers-sequelize');
var createModel = require('../../models/settings.model');
var hooks = require('./settings.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/settings', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('settings');

  service.hooks(hooks);
};