// Initializes the `players_weekly_transfer_value` service on path `/players-weekly-transfer-value`
const createService = require('feathers-sequelize');
const createModel = require('../../models/players_weekly_transfer_value.model');
const hooks = require('./players_weekly_transfer_value.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/players-weekly-transfer-value', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('players-weekly-transfer-value');

  service.hooks(hooks);
};
