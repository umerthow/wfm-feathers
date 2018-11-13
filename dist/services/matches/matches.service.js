'use strict';

// Initializes the `matches` service on path `/matches`
var createService = require('feathers-sequelize');
var createModel = require('../../models/matches.model');
var hooks = require('./matches.hooks');

module.exports = function (app) {
  var Model = createModel(app);
  var paginate = app.get('paginate');

  var options = {
    Model: Model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/matches', createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('matches');

  service.hooks(hooks);
};