// Initializes the `players` service on path `/players`
const createService = require('feathers-sequelize');
const createModel = require('../../models/players.model');
const hooks = require('./players.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/players', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('players');

  service.hooks(hooks);
};
