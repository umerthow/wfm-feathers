// Initializes the `staff_types` service on path `/staff-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/staff_types.model');
const hooks = require('./staff_types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/staff-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('staff-types');

  service.hooks(hooks);
};
