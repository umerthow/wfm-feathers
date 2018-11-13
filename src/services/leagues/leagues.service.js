// Initializes the `leagues` service on path `/leagues`
const createService = require('feathers-sequelize');
const createModel = require('../../models/leagues.model');
const hooks = require('./leagues.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/leagues', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('leagues');

  service.hooks(hooks);
};
