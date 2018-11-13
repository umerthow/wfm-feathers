// Initializes the `players_weekly_point` service on path `/players-weekly-points`
const createService = require('feathers-sequelize');
const createModel = require('../../models/players_weekly_point.model');
const hooks = require('./players_weekly_point.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/players-weekly-points', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('players-weekly-points');

  service.hooks(hooks);
};
