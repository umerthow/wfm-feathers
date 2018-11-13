// Initializes the `trainings` service on path `/trainings`
const createService = require('feathers-sequelize');
const createModel = require('../../models/trainings.model');
const hooks = require('./trainings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trainings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('trainings');

  service.hooks(hooks);
};
