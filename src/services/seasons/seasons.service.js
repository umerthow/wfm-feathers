// Initializes the `seasons` service on path `/seasons`
const createService = require('feathers-sequelize');
const createModel = require('../../models/seasons.model');
const hooks = require('./seasons.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/seasons', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('seasons');

  service.hooks(hooks);
};
