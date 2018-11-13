// Initializes the `staff_categories` service on path `/staff-categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/staff_categories.model');
const hooks = require('./staff_categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/staff-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('staff-categories');

  service.hooks(hooks);
};
