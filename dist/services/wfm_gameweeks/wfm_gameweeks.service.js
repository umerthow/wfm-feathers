'use strict';

// Initializes the `wfm_gameweeks` service on path `/wfm-gameweeks`
var createService = require('feathers-sequelize');
var createModel = require('../../models/wfm_gameweeks.model');
var hooks = require('./wfm_gameweeks.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/wfm-gameweeks', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('wfm-gameweeks');

  service.hooks(hooks);
};